import Header2 from "@/components/templates/Header2";
import Leftbar from "@/components/templates/Leftbar";
import Rightbar from "@/components/templates/Rightbar";
import Link from "next/link";
import Article from "@/components/Article";
import ImageArticle from "@/components/ImageArticle";
import { Icon } from "@iconify/react";

export default function radioaktif() {
  return (
    <>
      <Header2 className={"fixed w-full bg-white"} />

      <div className="flex">
        <Leftbar />

        <Article>
          <h1 id="overview" className="text-2xl font-bold mb-5 text-gray-800">
            Limbah Radioaktif
          </h1>
          <p>
            Limbah ini memiliki bahaya radiasi. Limbah radioaktif adalah limbah yang mengandung atau terkontaminasi bahan
            radioaktif yang berasal dari prosedur diagnostik (misalnya scanning), terapi nuklir, atau penelitian yang menggunakan
            isotop radioaktif.
          </p>
          <br />

          <ImageArticle src="/images/guide/radioaktif1.jpg" alt="Contoh limbah radioaktif" />

          <br />
          <h2 id="risiko-utama" className="text-xl font-semibold mt-8 mb-3 text-green-700">
            Risiko Utama:
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-5">
            <li>
              Paparan radiasi dapat menyebabkan kerusakan sel, jaringan, organ, dan meningkatkan risiko kanker atau cacat genetik.
              Membutuhkan penanganan dan penyimpanan khusus dalam jangka waktu sangat lama.
            </li>
          </ul>
          <br />
          <h2 id="contoh-spesifik" className="text-xl font-semibold mt-8 mb-3 text-green-700">
            Contoh Spesifik:
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-5">
            <li>
              Sisa bahan radioaktif yang tidak terpakai atau kedaluwarsa (misalnya Technetium-99m, Iodine-131, Thallium-201,
              Fluorodeoxyglucose - FDG).
            </li>
            <li>Sarung tangan, gaun, atau penutup kaki yang terpapar radiasi dari area terapi nuklir.</li>
            <li>Spuit, vial, atau alat suntik yang digunakan dalam prosedur radioterapi atau nuclear imaging.</li>
            <li>Jaringan atau cairan tubuh pasien yang telah menerima terapi radioaktif.</li>
            <li>Filter udara atau material penyerap dari fasilitas yang menggunakan bahan radioaktif.</li>
            <li>Sumber radiasi bekas dari peralatan medis.</li>
          </ul>
          <br />

          <h2 id="cara-penanganan-individu-fasilitas" className="text-xl font-semibold mt-8 mb-3 text-green-700">
            Cara Penanganan oleh Individu (Fasilitas Kesehatan):
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-5">
            <li>
              <strong>Wadah Khusus & Berlapis Timbal:</strong> Buang limbah radioaktif ke dalam wadah berlapis timbal atau
              material pelindung radiasi lainnya yang diberi label "Limbah Radioaktif" dan simbol radiasi (trefoil).
            </li>
            <li>
              <strong>Pemisahan Berdasarkan Paruh Waktu:</strong> Pisahkan limbah berdasarkan paruh waktu isotop radioaktif
              (misalnya paruh waktu pendek vs. paruh waktu panjang) untuk penanganan yang tepat.
            </li>
            <li>
              <strong>Penyimpanan di Area Terisolasi:</strong> Simpan di area khusus yang terisolasi, terkunci, terlindung dari
              radiasi (ruang berpelindung beton atau timbal), dan memiliki akses terbatas.
            </li>
            <li>
              <strong>Pengukuran Radiasi:</strong> Tingkat radiasi limbah harus diukur secara berkala menggunakan alat detektor
              radiasi untuk memantau peluruhan dan memastikan keamanan.
            </li>
            <li>
              <strong>Penggunaan APD Khusus:</strong> Petugas harus menggunakan APD khusus yang dirancang untuk perlindungan
              radiasi (misalnya apron timbal, dosimeter) dan mematuhi batas dosis yang diizinkan.
            </li>
          </ul>
          <br />

          <ImageArticle src="/images/guide/radioaktif2.jpg" alt="Contoh limbah radioaktif" />

          <br />

          <h2 id="proses-pengolahan-pemusnahan" className="text-xl font-semibold mt-8 mb-3 text-green-700">
            Proses Pengolahan/Pemusnahan (Fasilitas Khusus):
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-5">
            <li>
              <strong>Peluruhan (Decay-in-Storage):</strong> Untuk isotop dengan paruh waktu pendek (biasanya kurang dari 90
              hari), limbah disimpan dalam fasilitas khusus yang aman hingga tingkat radiasinya menurun ke ambang batas aman
              (misalnya 10 kali background radiation). Setelah itu, limbah dapat dibuang sebagai limbah biasa atau diolah lebih
              lanjut.
            </li>
            <li>
              <strong>Pemadatan (Compaction) & Solidifikasi:</strong> Limbah radioaktif padat dapat dipadatkan untuk mengurangi
              volume, atau dicampur dengan semen/polimer untuk mengunci zat radioaktif dalam matriks yang stabil.
            </li>
            <li>
              <strong>Penguburan Jangka Panjang:</strong> Limbah radioaktif dengan paruh waktu panjang atau tingkat aktivitas
              tinggi harus disimpan dalam fasilitas penyimpanan geologis bawah tanah yang aman dan terisolasi untuk jangka waktu
              ribuan hingga ratusan ribu tahun, menjauhkannya dari biosfer.
            </li>
            <li>
              <strong>Pembakaran (untuk Material Tertentu):</strong> Beberapa limbah radioaktif dengan aktivitas rendah dan mudah
              terbakar (misalnya kertas, plastik) dapat diinsinerasi di insinerator khusus yang dilengkapi filter radiasi untuk
              mengurangi volume dan mengkonsentrasikan radioaktivitas.
            </li>
            <li>
              <strong>Pengiriman ke Badan Nasional:</strong> Di Indonesia, limbah radioaktif harus diserahkan kepada Badan Tenaga
              Nuklir Nasional (BATAN) atau lembaga yang berwenang (misalnya BAPETEN) untuk penanganan, penyimpanan, dan pemusnahan
              akhir sesuai dengan peraturan perundang-undangan yang berlaku.
            </li>
          </ul>
          <br />

          <div className="flex justify-between mt-14">
            <Link
              href="/guide/sampah-medis/jenis-sampah-medis/genotoksik"
              className="py-3 px-5 bg-green-200 rounded items-center flex gap-2 hover:bg-green-300 active:bg-green-300"
            >
              <Icon icon="icon-park-solid:back" />
              <p>Sebelumnya</p>
            </Link>
            <Link
              href="/guide/sampah-residu-b3/"
              className="py-3 px-5 bg-green-200 rounded items-center flex gap-2 hover:bg-green-300 active:bg-green-300"
            >
              <Icon icon="icon-park-solid:next" />
              <p>Selanjutnya</p>
            </Link>
          </div>
          <div className="h-[40px]"></div>
        </Article>

        <Rightbar>
          <ul className="mb-8 space-y-3 ml-3 text-gray-600 text-sm">
            <li>
              <Link href="#overview" className="font-bold cursor-default">
                Limbah Radioaktif
              </Link>
            </li>
            <li>
              <Link href="#risiko-utama" className="hover:text-green-700">
                Risiko Utama
              </Link>
            </li>
            <li>
              <Link href="#contoh-spesifik" className="hover:text-green-700">
                Contoh Spesifik
              </Link>
            </li>
            <li>
              <Link href="#cara-penanganan-individu-fasilitas" className="hover:text-green-700">
                Cara Penanganan oleh Individu (Fasilitas Kesehatan)
              </Link>
            </li>
            <li>
              <Link href="#proses-pengolahan-pemusnahan" className="hover:text-green-700">
                Proses Pengolahan/Pemusnahan (Fasilitas Khusus)
              </Link>
            </li>
          </ul>
        </Rightbar>
      </div>
    </>
  );
}
