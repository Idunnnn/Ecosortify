import Header2 from "@/components/templates/Header2";
import Leftbar from "@/components/templates/Leftbar";
import Rightbar from "@/components/templates/Rightbar";
import Link from "next/link";
import ImageArticle from "@/components/ImageArticle";
import { Icon } from "@iconify/react";

export default function pp() {
  return (
    <>
      <Header2 className={"fixed w-full bg-white"} />

      <div className="flex">
        <Leftbar />

        <main className="2xl:ml-[430px] 2xl:mr-[380px]  lg:ml-[350px] flex-1 h-[calc(100vh-4rem)] p-8 mb-30 xl:mr-[300px] z-1 bg-white relative top-20">
          <article className="selection:bg-green-700 selection:text-white text-gray-700">
            <h1 id="overview" className="text-2xl font-bold mb-5 text-gray-800">
              PP (Polypropylene) - Kode 5
            </h1>

            <h2 id="karakteristik" className="text-xl font-semibold mt-8 mb-3 text-green-700">
              Karakteristik Si PP Ini:
            </h2>
            <p>
              PP itu plastik yang kuat, ringan, dan tahan panas, makanya cocok buat barang yang butuh sterilisasi suhu tinggi. Dia
              juga tahan lembab, minyak, dan bahan kimia. PP ini dianggap salah satu plastik paling aman buat kontak langsung sama
              makanan dan minuman, bahkan pas panas sekalipun.
            </p>
            <br />

            <ImageArticle src="/images/guide/pp1.jpg" alt="Gambar Plastik PP (Kode 5)" />

            <br />

            <h2 id="contoh" className="text-xl font-semibold mt-8 mb-3 text-green-700">
              Contoh Gampang Ditemukan:
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-5">
              <li>Wadah yogurt</li>
              <li>Tempat margarin</li>
              <li>Botol obat</li>
              <li>Sedotan</li>
              <li>Tutup botol</li>
              <li>Tupperware</li>
              <li>Beberapa kotak makanan siap saji atau kemasan microwave-safe.</li>
            </ul>
            <br />

            <ImageArticle src="/images/guide/pp2.jpg" alt="Gambar Plastik PP (Kode 5)" />

            <br />

            <h2 id="cara-menangani" className="text-xl font-semibold mt-8 mb-3 text-green-700">
              Cara Kita Menanganinya:
            </h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Sama seperti plastik lain, wadah PP perlu dibersihkan dari sisa makanan dan dikeringkan.</li>
              <li>Kumpulkan terpisah.</li>
              <li>
                Serahkan ke bank sampah atau pengepul yang menerima plastik kode 5. (Meskipun relatif aman dan tahan lama, daur
                ulang PP masih menghadapi tantangan dibandingkan PET dan HDPE.)
              </li>
            </ol>
            <br />

            <h2 id="proses-daur-ulang" className="text-xl font-semibold mt-8 mb-3 text-green-700">
              Proses Daur Ulangnya di Pabrik:
            </h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>
                <strong>Pengumpulan & Penyortiran:</strong> PP dikumpulin dan dipisah dari kotoran atau jenis plastik lain.
              </li>
              <li>
                <strong>Pencacahan & Pencucian:</strong> Dihancurkan jadi serpihan, lalu dicuci.
              </li>
              <li>
                <strong>Peleburan & Peletisasi:</strong> Serpihan dilelehkan lalu dibentuk jadi pelet.
              </li>
              <li>
                <strong>Penggunaan Kembali:</strong> Pelet PP daur ulang dipakai buat bikin sikat, tempat sampah, sapu, kotak
                penyimpanan, nampan, atau beberapa komponen otomotif.
              </li>
            </ol>
            <br />

            <div className="flex justify-between mt-14">
              <Link
                href="/guide/sampah-anorganik/sampah-plastik/ldpe"
                className="py-3 px-5 bg-green-200 rounded items-center flex gap-2 hover:bg-green-300 active:bg-green-300"
              >
                <Icon icon="icon-park-solid:back" />
                <p>Sebelumnya</p>
              </Link>
              <Link
                href="/guide/sampah-anorganik/sampah-plastik/ps"
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
                Karakteristik Si PP Ini
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