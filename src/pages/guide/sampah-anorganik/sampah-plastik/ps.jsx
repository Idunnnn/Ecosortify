import Header2 from "@/components/templates/Header2";
import Leftbar from "@/components/templates/Leftbar";
import Rightbar from "@/components/templates/Rightbar";
import Link from "next/link";
import ImageArticle from "@/components/ImageArticle";
import { Icon } from "@iconify/react";

export default function ps() {
  return (
    <>
      <Header2 className={"fixed w-full bg-white"} />

      <div className="flex">
        <Leftbar />

        <main className="2xl:ml-[430px] 2xl:mr-[380px]  lg:ml-[350px] flex-1 h-[calc(100vh-4rem)] p-8 mb-30 xl:mr-[300px] z-1 bg-white relative top-20 ">
          <article className="selection:bg-green-700 selection:text-white text-gray-700">
            <h1 id="overview" className="text-2xl font-bold mb-5 text-gray-800">
              PS (Polystyrene) - Kode 6
            </h1>

            <h2 id="karakteristik" className="text-xl font-semibold mt-8 mb-3 text-green-700">
              Karakteristik Si PS Ini:
            </h2>
            <p>
              PS itu plastik yang kaku, gampang pecah (getas), dan sangat ringan. Dia paling sering kita temui dalam bentuk busa,
              yang kita kenal sebagai styrofoam. PS lumayan bagus buat insulasi panas, tapi karena rapuh, dia gampang banget pecah
              jadi remahan kecil. Nah, ini yang bahaya: PS bisa ngeluarin zat styrene yang diduga karsinogenik (pemicu kanker) dan
              bisa ganggu otak atau hormon, apalagi kalau kena makanan panas atau berminyak.
            </p>
            <br />

            <ImageArticle src="/images/guide/ps3.jpg" alt="Gambar Plastik PS (Kode 6)" />
         
            <br />

            <h2 id="contoh" className="text-xl font-semibold mt-8 mb-3 text-green-700">
              Contoh Gampang Ditemukan:
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-5">
              <li>Wadah styrofoam buat makanan dan minuman (gelas, piring, mangkuk sekali pakai)</li>
              <li>Tempat telur</li>
              <li>Sendok/garpu plastik sekali pakai</li>
              <li>Foam packaging buat barang elektronik.</li>
            </ul>
            <br />

            <h2 id="cara-menangani" className="text-xl font-semibold mt-8 mb-3 text-green-700">
              Cara Kita Menanganinya:
            </h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Saran paling penting: hindari penggunaan PS, terutama styrofoam, buat makanan dan minuman!</li>
              <li>Kalau terpaksa ada sampah PS, pisahin dari sampah lain.</li>
              <li>Di banyak tempat, PS tidak diterima di bank sampah umum.</li>
              <li>Cari tahu apakah ada fasilitas daur ulang spesifik yang menerima PS di daerahmu.</li>
              <li>Jika tidak ada, plastik ini terpaksa harus dibuang ke TPA sebagai sampah residu.</li>
            </ol>
            <br />

            <h2 id="proses-daur-ulang" className="text-xl font-semibold mt-8 mb-3 text-green-700">
              Proses Daur Ulangnya di Pabrik:
            </h2>
            <p className="text-gray-700 mb-2">(Daur ulang PS sangat terbatas dan kurang umum.)</p>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>
                <strong>Pengumpulan & Penyortiran:</strong> PS harus dipisah dengan sangat ketat.
              </li>
              <li>
                <strong>Pencacahan & Pemadatan:</strong> Material busa perlu dipadatkan (misalnya pakai pemanas atau mesin
                compactor) biar volumenya mengecil.
              </li>
              <li>
                <strong>Peleburan:</strong> Dilelehkan, tapi seringkali butuh suhu tinggi dan harus ditambah bahan lain.
              </li>
              <li>
                <strong>Penggunaan Kembali:</strong> PS daur ulang bisa dipakai buat bikin karton telur, bingkai foto, produk
                isolasi, atau barang-barang lain yang tidak bersentuhan dengan makanan. (Proses ini seringkali enggak efisien dan
                mahal.)
              </li>
            </ol>
            <br />

            <div className="flex justify-between mt-14">
              <Link
                href="/guide/sampah-anorganik/sampah-plastik/pp"
                className="py-3 px-5 bg-green-200 rounded items-center flex gap-2 hover:bg-green-300 active:bg-green-300"
              >
                <Icon icon="icon-park-solid:back" />
                <p>Sebelumnya</p>
              </Link>
              <Link
                href="/guide/sampah-anorganik/sampah-plastik/other"
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
                Karakteristik Si PS Ini
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