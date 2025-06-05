import { createVertex } from '@ai-sdk/google-vertex';
import { streamText } from 'ai';

function patchedFetchForFinetune(requestInfo, requestInit) {
    function patchString(str) {
        return str.replace('/publishers/google/models', '/endpoints');
    }

    if (requestInfo instanceof URL) {
        const patchedUrl = new URL(requestInfo);
        patchedUrl.pathname = patchString(patchedUrl.pathname);
        return fetch(patchedUrl, requestInit);
    }
    if (requestInfo instanceof Request) {
        const patchedUrl = patchString(requestInfo.url);
        const patchedRequest = new Request(patchedUrl, requestInfo);
        return fetch(patchedRequest, requestInit);
    }
    if (typeof requestInfo === 'string') {
        const patchedUrl = patchString(requestInfo);
        return fetch(patchedUrl, requestInit);
    }
    throw new Error('Unexpected requestInfo type: ' + typeof requestInfo);
}

async function streamToResponse(readableStream, res) {
    const reader = readableStream.getReader();

    res.writeHead(200, {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        Connection: 'keep-alive',
    });

    while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        // value adalah Uint8Array, convert ke string
        res.write(new TextDecoder().decode(value));
    }

    res.end();
}

const vertex = createVertex({
    project: 'ecosortify-459004',
    location: 'us-central1',
    googleAuthOptions: {
        credentials: JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY || '{}'),
    },
    fetch: patchedFetchForFinetune,
});

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        res.status(405).json({ error: 'Method not allowed' });
        return;
    }

    try {
        const { messages } = req.body;

        const result = await streamText({
            messages,
            topP: 1,
            temperature: 1,
            maxTokens: 8192,
            model: vertex('1199379169415266304', {
                safetySettings: [
                    { category: 'HARM_CATEGORY_HATE_SPEECH', threshold: 'OFF' },
                    { category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'OFF' },
                    { category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT', threshold: 'OFF' },
                    { category: 'HARM_CATEGORY_HARASSMENT', threshold: 'OFF' },
                ],
            }),
            system: `
        Kamu adalah chatbot aplikasi EcoSortify bernama "SortiBot" yang mengkhususkan diri dalam menjawab pertanyaan seputar edukasi pengetahuan dan pemilahan sampah. Tujuan kamu adalah memberikan jawaban yang edukatif, jelas, dan mudah dipahami oleh pengguna umum dalam bahasa Indonesia. Jawaban kamu harus berbobot dan komprehensif, tetapi tetap ringkas dan tidak terlalu kaku atau terlalu formal. Gunakan gaya bahasa yang ramah, khas seperti chatbot yang siap membantu pengguna. Gunakan konteks dari pertanyaan yang saya berikan untuk memberikan jawaban terbaik. Jawaban tidak perlu terlalu panjang, tapi harus mengandung informasi yang akurat dan bermanfaat. Jika saya memberikan pertanyaan, cukup jawab langsung sesuai instruksi di atas. Tapi jika diperlukan, berikan tambahan penjelasan lebih lengkap lainnya.

        Aturan dan Ketentuan:
        - Jangan pernah mencantumkan cite berupa format seperti ini [cite: number] atau [source: number] di akhir jawaban yang kamu berikan.
        - Jangan menggunakan bahasa "Gue" atau "Lu".
        - Jika ada yang menanyakan kamu itu siapa (memperkenalkan diri), jawab sesuai instruksi yang sudah saya berikan.
      `,
        });

        if (typeof result.toDataStreamResponse === 'function') {
            const streamResponse = result.toDataStreamResponse();
            await streamToResponse(streamResponse.body, res);
        } else {
            res.status(200).json({ result });
        }

    } catch (error) {
        console.error('🔥 Error in /api/chat:', error);
        res.status(500).json({ error: error.message || 'Internal Server Error' });
    }
}