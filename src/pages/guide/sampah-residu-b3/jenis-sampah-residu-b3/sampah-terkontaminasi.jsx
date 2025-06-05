import Header2 from "@/components/templates/Header2";
import Leftbar from "@/components/templates/Leftbar";
import Rightbar from "@/components/templates/Rightbar";
import Link from "next/link";
import ImageArticle from "@/components/ImageArticle";
import Article from "@/components/Article";
import { Icon } from "@iconify/react";

export default function SampahTerkontaminasi() {
  return (
    <>
      <Header2 className={"fixed w-full bg-white"} />

      <div className="flex">
        <Leftbar />

        <Article>
          <h1 id="overview" className="text-2xl font-bold mb-5 text-gray-800">
            Sampah Terkontaminasi
          </h1>
          <p>
            Sampah ini adalah material yang sebenarnya bisa didaur ulang (seperti kertas atau kain), tetapi terkontaminasi oleh
            bahan berbahaya atau limbah lain yang membuatnya tidak mungkin atau sangat sulit untuk didaur ulang secara aman dan
            efisien. Kontaminasi ini bisa merusak mesin daur ulang, mencemari produk daur ulang, atau membahayakan pekerja.
          </p>
          <br />
          <p className="text-gray-700">
            Penting bagi kita untuk tahu bagaimana menanganinya, baik sebagai individu maupun dalam konteks pengolahan yang lebih
            besar.
          </p>

          <ImageArticle src="/images/guide/terkontaminasi1.jpg" alt="Contoh Produk sampah terkontaminasi" />
          
          <br />

          <h2 id="contoh-spesifik" className="text-xl font-semibold mt-8 mb-3 text-green-700">
            Contoh Spesifik:
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-5">
            <li>
              Kertas atau karton yang terkontaminasi minyak: Misalnya, kotak pizza berminyak, kertas bungkus makanan yang basah
              dan berminyak, atau koran yang terkena tumpahan oli.
            </li>
            <li>
              Plastik yang terkontaminasi bahan kimia beracun: Wadah bekas pestisida, wadah bekas cairan pembersih keras (meskipun
              wadahnya sendiri plastik, kontaminasinya membuat sulit didaur ulang biasa).
            </li>
            <li>
              Sampah medis: Seperti yang dijelaskan sebelumnya, sampah ini terkontaminasi patogen dan memerlukan penanganan khusus
              (termasuk sebagai Limbah B3). Contohnya perban bekas, sarung tangan bekas.
            </li>
            <li>
              Tekstil/kain yang terkontaminasi: Kain yang terkena bahan kimia berbahaya, oli, cat, atau cairan tubuh infeksius.
            </li>
          </ul>
          <br />

          <h2 id="cara-penanganan-individu" className="text-xl font-semibold mt-8 mb-3 text-green-700">
            Cara Penanganan oleh Individu (Rumah Tangga/Fasilitas Non-Medis):
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-5">
            <li>
              <strong>Jangan Dibuang ke Tempat Daur Ulang:</strong> Kertas/kardus berminyak tidak boleh dicampur dengan kertas
              bersih untuk didaur ulang.
            </li>
            <li>
              <strong>Masuk Kategori Residu:</strong> Buang sampah terkontaminasi yang tidak tergolong Limbah B3 (misalnya kotak
              pizza berminyak) ke tempat sampah residu/umum.
            </li>
            <li>
              <strong>Wadah Terpisah untuk Potensi B3:</strong> Untuk wadah plastik bekas bahan kimia (pestisida, pembersih
              keras), bilas wadah jika memungkinkan (jangan buang air bilasan ke saluran umum tanpa memastikan keamanannya), lalu
              buang wadah tersebut ke tempat sampah Limbah B3 (jika ada fasilitasnya di lingkungan Anda) atau kumpulkan untuk
              diserahkan ke pengelola limbah khusus.
            </li>
            <li>
              <strong>Sampah Medis (bagi Fasilitas Medis):</strong> Harus ditangani sesuai prosedur Limbah Medis (dibuang di
              kantong kuning, disterilkan, lalu dibakar/diproses oleh pihak ketiga).
            </li>
          </ul>
          <br />

          <h2 id="proses-pengolahan-fasilitas" className="text-xl font-semibold mt-8 mb-3 text-green-700">
            Proses Pengolahan/Pemusnahan (Fasilitas Pengelola Sampah):
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-5">
            <li>
              <strong>Pembakaran/Insinerasi:</strong> Banyak sampah terkontaminasi (terutama yang mengandung minyak atau bahan
              kimia tertentu) akan dibakar pada suhu tinggi di insinerator untuk menghancurkan kontaminan dan mengurangi volume.
            </li>
            <li>
              <strong>Penimbunan di TPA:</strong> Jika tidak dapat dibakar atau diolah secara lain, sampah ini akan ditimbun di
              Tempat Pemrosesan Akhir (TPA).
            </li>
            <li>
              <strong>Dekontaminasi (untuk B3):</strong> Untuk sampah yang terkontaminasi B3, proses dekontaminasi kimiawi atau
              fisik mungkin dilakukan sebelum pemusnahan akhir.
            </li>
          </ul>
          <br />

          <div className="flex justify-between mt-14">
            <Link
              href="/guide/sampah-residu-b3/pengenalan"
              className="py-3 px-5 bg-green-200 rounded items-center flex gap-2 hover:bg-green-300 active:bg-green-300"
            >
              <Icon icon="icon-park-solid:back" />
              <p>Sebelumnya</p>
            </Link>
            <Link
              href="/guide/sampah-residu-b3/jenis-sampah-residu-b3/sampah-komposit"
              className="py-3 px-5 bg-green-200 rounded items-center flex gap-2 hover:bg-green-300 active:bg-green-300"
            >
              <p>Selanjutnya</p>
              <Icon icon="icon-park-solid:next" />
            </Link>
          </div>
          <div className="h-[40px]"></div>
        </Article>

        <Rightbar>
          <ul className="mb-8 space-y-3 ml-3 text-gray-600 text-sm">
            <li>
              <Link href="#overview" className="font-bold cursor-default">
                Sampah Terkontaminasi
              </Link>
            </li>
            <li>
              <Link href="#contoh-spesifik" className="hover:text-green-700">
                Contoh Spesifik
              </Link>
            </li>
            <li>
              <Link href="#cara-penanganan-individu" className="hover:text-green-700">
                Cara Penanganan oleh Individu
              </Link>
            </li>
            <li>
              <Link href="#proses-pengolahan-fasilitas" className="hover:text-green-700">
                Proses Pengolahan/Pemusnahan
              </Link>
            </li>
          </ul>
        </Rightbar>
      </div>
    </>
  );
}
