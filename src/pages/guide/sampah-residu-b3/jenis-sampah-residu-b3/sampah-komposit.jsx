import Header2 from "@/components/templates/Header2";
import Leftbar from "@/components/templates/Leftbar";
import Rightbar from "@/components/templates/Rightbar";
import Link from "next/link";
import ImageArticle from "@/components/ImageArticle";
import Article from "@/components/Article";
import { Icon } from "@iconify/react";

export default function SampahKomposit() {
  return (
    <>
      <Header2 className={"fixed w-full bg-white"} />

      <div className="flex">
        <Leftbar />

        <Article>
          <h1 id="overview" className="text-2xl font-bold mb-5 text-gray-800">
            Sampah Komposit
          </h1>
          <p>
            Sampah komposit adalah jenis sampah yang terdiri dari beberapa bahan berbeda yang disatukan dan tidak dapat dipisahkan
            dengan mudah secara manual atau mekanis. Karena kompleksitas materialnya, sampah ini memerlukan proses daur ulang yang
            sangat rumit dan mahal, atau bahkan tidak ada teknologinya untuk skala besar.
          </p>
          <br />

          <ImageArticle src="/images/guide/komposit1.jpg" alt="Contoh Produk sampah komposit" />
          
          <br />

          <h2 id="contoh-spesifik" className="text-xl font-semibold mt-8 mb-3 text-green-700">
            Contoh Spesifik:
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-5">
            <li>
              <strong>Kemasan multilayer:</strong> Ini adalah contoh paling umum. Terdiri dari berbagai lapisan seperti plastik
              (PET, PE), kertas, dan aluminium foil yang terjalin erat (misalnya bungkus kopi sachet, bungkus mi instan, karton
              susu/jus).
            </li>
            <li>
              <strong>Kemasan blister pack:</strong> Kombinasi plastik dan aluminium foil yang digunakan untuk kemasan obat atau
              baterai.
            </li>
            <li>
              <strong>Karbon/fiberglass:</strong> Material komposit yang sangat kuat namun sulit didaur ulang karena seratnya
              menyatu dengan matriks resin.
            </li>
            <li>
              <strong>Ban bekas:</strong> Terdiri dari karet, serat kain, dan kawat baja yang terikat kuat.
            </li>
            <li>
              <strong>Beberapa jenis mainan anak-anak:</strong> Seringkali terbuat dari campuran plastik, logam, dan karet yang
              sulit dipisah.
            </li>
          </ul>
          <br />

          <h2 id="cara-penanganan-individu" className="text-xl font-semibold mt-8 mb-3 text-green-700">
            Cara Penanganan oleh Individu (Rumah Tangga):
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-5">
            <li>
              <strong>Masuk Kategori Residu:</strong> Mayoritas sampah komposit (seperti kemasan sachet) tidak dapat didaur ulang
              di fasilitas umum, sehingga harus dibuang ke tempat sampah residu/umum.
            </li>
            <li>
              <strong>Cari Program Khusus:</strong> Untuk barang-barang yang lebih besar atau spesifik seperti ban bekas, cari
              informasi apakah ada program drop-off atau pengumpulan khusus dari pemerintah daerah atau perusahaan daur ulang
              spesialis.
            </li>
            <li>
              <strong>Edukasi Konsumen:</strong> Dorong produsen untuk menggunakan kemasan monomaterial (satu jenis bahan) yang
              lebih mudah didaur ulang.
            </li>
          </ul>
          <br />

          <h2 id="proses-pengolahan-fasilitas" className="text-xl font-semibold mt-8 mb-3 text-green-700">
            Proses Pengolahan/Pemusnahan (Fasilitas Pengelola Sampah):
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-5">
            <li>
              <strong>Insinerasi:</strong> Banyak sampah komposit dengan nilai kalori tinggi dapat dibakar di insinerator untuk
              menghasilkan energi dan mengurangi volume.
            </li>
            <li>
              <strong>Daur Ulang Teknis (Sangat Terbatas):</strong> Beberapa jenis kemasan multilayer tertentu (misalnya Tetra
              Pak) mulai memiliki fasilitas daur ulang khusus yang menggunakan teknologi hidropulper untuk memisahkan lapisan
              kertas dari plastik/aluminium. Namun, ini masih sangat terbatas.
            </li>
            <li>
              <strong>Pencacahan dan Co-processing:</strong> Untuk material seperti ban bekas, seringkali dicacah dan digunakan
              sebagai bahan bakar alternatif di industri semen atau pabrik lainnya (co-processing).
            </li>
            <li>
              <strong>Penimbunan di TPA:</strong> Jika tidak ada opsi pengolahan lain, sampah komposit akan berakhir di TPA.
            </li>
          </ul>
          <br />

          <div className="flex justify-between mt-14">
            <Link
              href="/guide/sampah-residu-b3/jenis-sampah-residu-b3/sampah-terkontaminasi"
              className="py-3 px-5 bg-green-200 rounded items-center flex gap-2 hover:bg-green-300 active:bg-green-300"
            >
              <Icon icon="icon-park-solid:back" />
              <p>Sebelumnya</p>
            </Link>
            <Link
              href="/guide/sampah-residu-b3/jenis-sampah-residu-b3/plastik-tipe-6-7"
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
                Sampah Komposit
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
