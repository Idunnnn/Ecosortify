import { NextResponse } from "next/server";


export function middleware(request) {
    const token = request.cookies.get('firebase_id_token')?.value;
    const url = request.nextUrl.clone();
    const path = url.pathname;

    const protedtedPaths = ['/chatbot', '/scan'];
    const authPaths = ['/login', '/register'];

    // Kalau token ada, artinya sudah login
    if (token) {
        if (authPaths.includes(path)) {
            url.pathname = '/'
            return NextResponse.redirect(url);
        }
        return NextResponse.next();

    } else {
        if (protedtedPaths.includes(path)) {
            url.pathname = '/login'
            return NextResponse.redirect(url);
        }
        return NextResponse.next();
    }
}

export const config = {
    matcher: ['/', '/login', '/register', '/scan', '/guide', '/chatbot', '/about'],
};
