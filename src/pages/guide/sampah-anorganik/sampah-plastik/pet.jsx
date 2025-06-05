import Header2 from "@/components/templates/Header2";
import Leftbar from "@/components/templates/Leftbar";
import Rightbar from "@/components/templates/Rightbar";
import Link from "next/link";
import ImageArticle from "@/components/ImageArticle";
import { Icon } from "@iconify/react";

export default function pet() {
  return (
    <>
      <Header2 className={"fixed w-full bg-white"} />

      <div className="flex">
        <Leftbar />

        <main className="2xl:ml-[430px] 2xl:mr-[380px]  lg:ml-[350px] flex-1 h-[calc(100vh-4rem)] p-8 mb-30 xl:mr-[300px] z-1 bg-white relative top-20">
          <article className="selection:bg-green-700 selection:text-white text-gray-700">
            <h1 id="overview" className="text-2xl font-bold mb-5 text-gray-800">
              PET atau PETE (Polyethylene Terephthalate) - Kode 1
            </h1>

            <h2 id="karakteristik" className="text-xl font-semibold mt-8 mb-3 text-green-700">
              Karakteristik Si PET Ini:
            </h2>
            <p>
              Si PET ini paling akrab di mata kita. Dia itu jernih, ringan, kuat, dan bening kayak air. Karena sifatnya yang jago
              menahan gas dan kelembapan, PET jadi idola buat kemasan minuman. Tapi ingat, PET ini bukan buat dipakai
              berkali-kali, ya! Kalau dipakai terus, apalagi kena air panas, dia bisa jadi sarang bakteri atau malah melepas zat
              yang kurang baik, seperti antimoni trioksida.
            </p>
            <br />

            <ImageArticle src="/images/guide/pet1.jpg" alt="Gambar Plastik PET (Kode 1)" />

            <br />

            <h2 id="contoh" className="text-xl font-semibold mt-8 mb-3 text-green-700">
              Contoh Gampang Ditemukan:
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-5">
              <li>Botol air mineral</li>
              <li>Botol minuman bersoda</li>
              <li>Botol minyak goreng</li>
              <li>Wadah selai kacang</li>
              <li>Beberapa jenis kemasan makanan sekali pakai lainnya.</li>
            </ul>
            <br />

            <ImageArticle src="/images/guide/pet2.jpg" alt="Gambar Plastik PET (Kode 1)" />
           
            <br />

            <h2 id="cara-menangani" className="text-xl font-semibold mt-8 mb-3 text-green-700">
              Cara Kita Menanganinya:
            </h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Pastikan botol PET dikosongkan sepenuhnya.</li>
              <li>Bilas bersih dari sisa cairan atau makanan.</li>
              <li>Jika memungkinkan, tekan atau pipihkan biar enggak makan tempat.</li>
              <li>Kumpulkan secara terpisah dari jenis sampah lain.</li>
              <li>Serahkan ke bank sampah atau fasilitas daur ulang yang menerima plastik kode 1 ini.</li>
            </ol>
            <br />

            <h2 id="proses-daur-ulang" className="text-xl font-semibold mt-8 mb-3 text-green-700">
              Proses Daur Ulangnya di Pabrik:
            </h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>
                <strong>Pengumpulan & Penyortiran:</strong> Botol-botol PET ini dikumpulin, terus disortir manual atau pakai mesin
                biar cuma PET aja, tanpa tutup atau label yang nempel.
              </li>
              <li>
                <strong>Pencacahan (Shredding):</strong> Plastik PET yang udah bersih itu lalu dipecah jadi serpihan-serpihan
                kecil yang kayak kepingan (flakes).
              </li>
              <li>
                <strong>Pencucian & Pemurnian:</strong> Serpihan-serpihan tadi dicuci lagi pakai air panas dan cairan khusus buat
                ngilangin sisa kotoran, lem, atau label yang masih bandel.
              </li>
              <li>
                <strong>Pengeringan:</strong> Serpihan PET dikeringkan sampai kadar airnya pas.
              </li>
              <li>
                <strong>Ekstrusi & Peletisasi:</strong> Serpihan kering dilelehkan, terus dibentuk jadi untaian panjang, lalu
                dipotong-potong kecil jadi pelet yang sering disebut rPET (recycled PET).
              </li>
              <li>
                <strong>Penggunaan Kembali:</strong> Pelet rPET inilah yang jadi bahan baku baru buat bikin botol minuman lagi,
                serat kain (kayak bahan fleece), karpet, atau tali. Keren, kan?
              </li>
            </ol>
            <br />

            <div className="flex justify-between mt-14">
              <Link
                href="/guide/sampah-anorganik/"
                className="py-3 px-5 bg-green-200 rounded items-center flex gap-2 hover:bg-green-300 active:bg-green-300"
              >
                <Icon icon="icon-park-solid:back" />
                <p>Kembali</p>
              </Link>
              <Link
                href="/guide/sampah-anorganik/sampah-plastik/hdpe"
                className="py-3 px-5 bg-green-200 rounded items-center flex gap-2 hover:bg-green-300 active:bg-green-300"
              >
                <p>Selanjutnya</p>
                <Icon icon="icon-park-solid:next" />
              </Link>
            </div>
            <div className="h-[40px]"></div>
          </article>
        </main>

        <Rightbar>
          <ul className="mb-8 space-y-3 ml-3 text-gray-600 text-sm">
            <li>
              <Link href="#karakteristik" className="hover:font-semibold">
                Karakteristik Si PET Ini
              </Link>
            </li>
            <li>
              <Link href="#contoh" className="hover:font-semibold">
                Contoh Gampang Ditemukan
              </Link>
            </li>
            <li>
              <Link href="#cara-menangani" className="hover:font-semibold">
                Cara Kita Menanganinya
              </Link>
            </li>
            <li>
              <Link href="#proses-daur-ulang" className="hover:font-semibold">
                Proses Daur Ulangnya di Pabrik
              </Link>
            </li>
          </ul>
        </Rightbar>
      </div>
    </>
  );
}
