import Header2 from "@/components/templates/Header2";
import Leftbar from "@/components/templates/Leftbar";
import Rightbar from "@/components/templates/Rightbar";
import Link from "next/link";
import ImageArticle from "@/components/ImageArticle";
import { Icon } from "@iconify/react";

export default function ldpe() {
  return (
    <>
      <Header2 className={"fixed w-full bg-white"} />

      <div className="flex">
        <Leftbar />

        <main className="2xl:ml-[430px] 2xl:mr-[380px]  lg:ml-[350px] flex-1 h-[calc(100vh-4rem)] p-8 mb-30 xl:mr-[300px] z-1 bg-white relative top-20">
          <article className="selection:bg-green-700 selection:text-white text-gray-700">
            <h1 id="overview" className="text-2xl font-bold mb-5 text-gray-800">
              LDPE (Low-Density Polyethylene) - Kode 4
            </h1>

            <h2 id="karakteristik" className="text-xl font-semibold mt-8 mb-3 text-green-700">
              Karakteristik Si LDPE Ini:
            </h2>
            <p>
              LDPE ini plastik yang fleksibel banget, ringan, dan transparan. Dia juga awet dan tahan air. Meskipun lentur, dia
              lumayan kuat kok buat menahan robekan dalam penggunaan sehari-hari.
            </p>
            <br />

            <h2 id="contoh" className="text-xl font-semibold mt-8 mb-3 text-green-700">
              Contoh Gampang Ditemukan:
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-5">
              <li>Kantong plastik (kresek)</li>
              <li>Kantong sampah</li>
              <li>Pembungkus makanan (cling wrap)</li>
              <li>Botol-botol yang bisa dipencet (kayak botol saus atau madu)</li>
              <li>Pelapis karton susu</li>
              <li>Lining pada beberapa kemasan.</li>
            </ul>
            <br />

            <ImageArticle src="/images/guide/ldpe2.jpg" alt="Gambar Plastik LDPE (Kode 4)" />
            
            <br />

            <h2 id="cara-menangani" className="text-xl font-semibold mt-8 mb-3 text-green-700">
              Cara Kita Menanganinya:
            </h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Sampah LDPE kayak kantong kresek sebaiknya dibersihkan dari sisa makanan dan dikeringkan.</li>
              <li>Untuk menghemat ruang, kamu bisa gulung atau ikat jadi satu gumpalan besar.</li>
              <li>Kumpulin terpisah.</li>
              <li>
                Serahkan ke bank sampah atau fasilitas daur ulang yang nerima plastik kode 4. (Daur ulang LDPE kadang lebih
                menantang dibandingkan PET atau HDPE karena bentuknya yang tipis dan mudah kusut, sehingga diperlukan fasilitas
                khusus.)
              </li>
            </ol>
            <br />

            <h2 id="proses-daur-ulang" className="text-xl font-semibold mt-8 mb-3 text-green-700">
              Proses Daur Ulangnya di Pabrik:
            </h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>
                <strong>Pengumpulan & Penyortiran:</strong> LDPE dikumpulin dan dipisah dari kotoran atau jenis plastik lain.
              </li>
              <li>
                <strong>Pencacahan/Penggilingan:</strong> Karena sifatnya yang tipis, LDPE biasanya digiling atau dicacah.
              </li>
              <li>
                <strong>Pencucian & Pengeringan:</strong> Dicuci sampai bersih, lalu dikeringkan.
              </li>
              <li>
                <strong>Peleburan & Peletisasi:</strong> Dilelehkan lalu dibentuk jadi pelet.
              </li>
              <li>
                <strong>Penggunaan Kembali:</strong> Pelet LDPE daur ulang dipakai buat bikin kantong sampah baru, lapisan
                kemasan, kayu plastik (komposit), ubin, atau komponen non-pangan lainnya.
              </li>
            </ol>
            <br />

            <div className="flex justify-between mt-14">
              <Link
                href="/guide/sampah-anorganik/sampah-plastik/pvc"
                className="py-3 px-5 bg-green-200 rounded items-center flex gap-2 hover:bg-green-300 active:bg-green-300"
              >
                <Icon icon="icon-park-solid:back" />
                <p>Sebelumnya</p>
              </Link>
              <Link
                href="/guide/sampah-anorganik/sampah-plastik/pp"
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
                Karakteristik Si LDPE Ini
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