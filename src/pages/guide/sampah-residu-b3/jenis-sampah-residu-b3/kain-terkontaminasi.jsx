import Header2 from "@/components/templates/Header2";
import Leftbar from "@/components/templates/Leftbar";
import Rightbar from "@/components/templates/Rightbar";
import Link from "next/link";
import ImageArticle from "@/components/ImageArticle";
import Article from "@/components/Article";
import { Icon } from "@iconify/react";

export default function KainTerkontaminasi() {
  return (
    <>
      <Header2 className={"fixed w-full bg-white"} />

      <div className="flex">
        <Leftbar />

        <Article>
          <h1 id="overview" className="text-2xl font-bold mb-5 text-gray-800">
            Kain yang Terkontaminasi
          </h1>
          <p>
            Meskipun tekstil bisa didaur ulang menjadi serat baru atau lap, kain yang terkontaminasi oleh bahan berbahaya atau
            limbah organik menjadi sangat sulit atau tidak mungkin untuk didaur ulang. Kontaminasi tersebut dapat menimbulkan
            risiko kesehatan, mencemari proses daur ulang (misalnya mesin atau air), atau menghasilkan produk daur ulang yang
            tidak aman.
          </p>
          <br />

          <ImageArticle src="/images/guide/kainterkontaminasi.jpg" alt="Contoh Produk kain terkontaminasi" />
        
          <br />

          <h2 id="contoh-spesifik" className="text-xl font-semibold mt-8 mb-3 text-green-700">
            Contoh Spesifik:
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-5">
            <li>Kain/pakaian yang terkena tumpahan oli, cat, atau pelarut kimia (tidak hanya noda, tapi meresap).</li>
            <li>
              Kain dari lingkungan medis yang terkontaminasi darah, cairan tubuh, atau patogen (misalnya seprai rumah sakit yang
              sangat kotor).
            </li>
            <li>Pakaian yang terkena pestisida atau bahan kimia pertanian.</li>
            <li>Tekstil dari insiden tumpahan bahan berbahaya.</li>
          </ul>
          <br />

          <h2 id="cara-penanganan-individu" className="text-xl font-semibold mt-8 mb-3 text-green-700">
            Cara Penanganan oleh Individu (Rumah Tangga/Industri Non-Medis):
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-5">
            <li>
              <strong>Jangan Dibuang ke Daur Ulang Tekstil:</strong> Kain yang sudah parah kontaminasinya tidak boleh dimasukkan
              ke dalam program daur ulang tekstil atau disumbangkan.
            </li>
            <li>
              <strong>Pengemasan Aman:</strong> Masukkan kain terkontaminasi ke dalam kantong plastik yang tertutup rapat sebelum
              dibuang.
            </li>
            <li>
              <strong>Buang ke Sampah Residu/Limbah B3:</strong>
              <ul className="list-circle list-inside ml-5 mt-2">
                <li>
                  Jika kontaminasi ringan (misalnya noda oli kecil yang tidak bisa hilang), buang ke tempat sampah residu/umum.
                </li>
                <li>
                  Jika kontaminasi berat oleh bahan kimia berbahaya atau limbah medis, kain tersebut harus ditangani sebagai
                  Limbah B3 dan diserahkan ke pengelola limbah khusus (misalnya, di fasilitas medis, akan dibuang sebagai limbah
                  infeksius).
                </li>
              </ul>
            </li>
          </ul>
          <br />

          <h2 id="proses-pengolahan-fasilitas" className="text-xl font-semibold mt-8 mb-3 text-green-700">
            Proses Pengolahan/Pemusnahan (Fasilitas Pengelola Sampah):
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-5">
            <li>
              <strong>Insinerasi:</strong> Pembakaran pada suhu tinggi adalah metode yang paling umum untuk memusnahkan kain
              terkontaminasi, terutama jika kontaminasinya bersifat berbahaya.
            </li>
            <li>
              <strong>Penimbunan di TPA:</strong> Jika insinerasi tidak tersedia atau tidak diperlukan (misalnya kontaminasi
              organik berat yang tidak berbahaya), kain ini akan ditimbun di TPA.
            </li>
            <li>
              <strong>Pencucian Khusus (Sangat Jarang):</strong> Hanya untuk kasus tertentu dan jika fasilitas memiliki teknologi
              dekontaminasi yang sangat spesifik, kain mungkin bisa dicuci dengan bahan kimia khusus sebelum diproses lebih
              lanjut, namun ini sangat jarang dilakukan untuk skala besar.
            </li>
          </ul>
          <br />

          <div className="flex justify-between mt-14">
            <Link
              href="/guide/sampah-residu-b3/jenis-sampah-residu-b3/plastik-tipe-6-7"
              className="py-3 px-5 bg-green-200 rounded items-center flex gap-2 hover:bg-green-300 active:bg-green-300"
            >
              <Icon icon="icon-park-solid:back" />
              <p>Sebelumnya</p>
            </Link>
          </div>
          <div className="h-[40px]"></div>
        </Article>

        <Rightbar>
          <ul className="mb-8 space-y-3 ml-3 text-gray-600 text-sm">
            <li>
              <Link href="#overview" className="font-bold cursor-default">
                Kain yang Terkontaminasi
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
