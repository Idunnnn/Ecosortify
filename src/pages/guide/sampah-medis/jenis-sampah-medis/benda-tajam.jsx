import Header2 from "@/components/templates/Header2";
import Leftbar from "@/components/templates/Leftbar";
import Rightbar from "@/components/templates/Rightbar";
import Link from "next/link";
import Article from "@/components/Article";
import ImageArticle from "@/components/ImageArticle";
import { Icon } from "@iconify/react";

export default function bendaTajam() {
  return (
    <>
      <Header2 className={"fixed w-full bg-white"} />

      <div className="flex">
        <Leftbar />

        <Article>
          <h1 id="overview" className="text-2xl font-bold mb-5 text-gray-800">
            Limbah Benda Tajam
          </h1>
          <p>
            Limbah ini berpotensi menusuk, melukai, atau menularkan penyakit jika tidak ditangani dengan hati-hati. Limbah benda
            tajam adalah semua material yang dapat menyebabkan tusukan, goresan, atau luka potong dan berpotensi menjadi jalur
            penularan infeksi jika terkontaminasi darah atau cairan tubuh.
          </p>
          <br />

          <ImageArticle src="/images/guide/limbahtajam1.jpg" alt="Contoh Produk benda tajam" />

          <br />
          <h2 id="risiko-utama" className="text-xl font-semibold mt-8 mb-3 text-green-700">
            Risiko Utama:
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-5">
            <li>
              Cedera fisik langsung kepada petugas yang menangani, dan risiko tinggi penularan infeksi patogen yang ditularkan
              melalui darah (misalnya Hepatitis B/C, HIV) jika benda tajam terkontaminasi.
            </li>
          </ul>
          <br />
          <h2 id="contoh-spesifik" className="text-xl font-semibold mt-8 mb-3 text-green-700">
            Contoh Spesifik:
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-5">
            <li>Jarum suntik bekas (termasuk jarum dari spuit insulin, jarum jahit bedah).</li>
            <li>Pisau bedah (scalpel) dan mata pisaunya.</li>
            <li>Ampul atau vial obat yang pecah.</li>
            <li>Pecahan kaca dari tabung reaksi, pipet, atau labu laboratorium.</li>
            <li>Lanset (alat tusuk darah) bekas.</li>
            <li>Gigi bekas dari praktik dokter gigi.</li>
            <li>Jarum jahit yang digunakan untuk menjahit luka.</li>
          </ul>
          <br />

          <h2 id="cara-penanganan-individu-fasilitas" className="text-xl font-semibold mt-8 mb-3 text-green-700">
            Cara Penanganan oleh Individu (Fasilitas Kesehatan):
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-5">
            <li>
              <strong>Wadah Khusus:</strong> Buang semua benda tajam bekas langsung ke dalam wadah tahan tusuk dan tahan air
              (misalnya safety box atau sharps container) yang berwarna kuning dan berlabel biohazard, segera setelah digunakan.
            </li>
            <li>
              <strong>Jangan Rekap/Membengkokkan:</strong> Jangan pernah mencoba menutup kembali tutup jarum (recap),
              membengkokkan, mematahkan, atau memanipulasi benda tajam.
            </li>
            <li>
              <strong>Tidak Penuh:</strong> Isi wadah benda tajam hanya sampai batas 3/4 penuh.
            </li>
            <li>
              <strong>Penutupan Rapat:</strong> Tutup wadah rapat-rapat setelah penuh atau sebelum pengangkutan.
            </li>
          </ul>
          <br />

          <ImageArticle src="/images/guide/limbahtajam2.jpg" alt="Contoh Produk benda tajam" />
          <br />

          <h2 id="proses-pengolahan-pemusnahan" className="text-xl font-semibold mt-8 mb-3 text-green-700">
            Proses Pengolahan/Pemusnahan (Fasilitas Khusus):
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-5">
            <li>
              <strong>Insinerasi:</strong> Metode yang paling umum dan aman untuk menghancurkan benda tajam dan patogen yang
              mungkin menempel. Abu sisa insinerasi (yang sudah steril) kemudian dibuang ke TPA residu.
            </li>
            <li>
              <strong>Autoklaf/Sterilisasi:</strong> Benda tajam dapat disterilkan dengan autoklaf, namun tetap perlu dihancurkan
              secara fisik (misalnya dengan alat penghancur jarum) setelah sterilisasi untuk menghilangkan potensi bahaya tusuk.
            </li>
            <li>
              <strong>Enkapsulasi/Imobilisasi:</strong> Benda tajam dapat dicampur dengan bahan seperti semen, mortar, atau bahan
              kimia untuk mengunci dan mengamankannya dalam blok padat sebelum dibuang ke TPA khusus.
            </li>
            <li>
              <strong>Pengolahan Lanjut:</strong> Logam dari benda tajam (misalnya jarum) yang sudah steril bisa dipisahkan untuk
              daur ulang logam, namun ini jarang dilakukan karena volume kecil dan risiko kontaminasi.
            </li>
          </ul>
          <br />

          <div className="flex justify-between mt-14">
            <Link
              href="/guide/sampah-medis/jenis-sampah-medis/patologis"
              className="py-3 px-5 bg-green-200 rounded items-center flex gap-2 hover:bg-green-300 active:bg-green-300"
            >
              <Icon icon="icon-park-solid:back" />
              <p>Sebelumnya</p>
            </Link>
            <Link
              href="/guide/sampah-medis/jenis-sampah-medis/kimia"
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
              <Link href="#overview" className="font-bold">
                Limbah Benda Tajam
              </Link>
            </li>
            <li>
              <Link href="#risiko-utama">Risiko Utama</Link>
            </li>
            <li>
              <Link href="#contoh-spesifik">Contoh Spesifik</Link>
            </li>
            <li>
              <Link href="#cara-penanganan-individu-fasilitas">Cara Penanganan oleh Individu (Fasilitas Kesehatan)</Link>
            </li>
            <li>
              <Link href="#proses-pengolahan-pemusnahan">Proses Pengolahan/Pemusnahan (Fasilitas Khusus)</Link>
            </li>
          </ul>
        </Rightbar>
      </div>
    </>
  );
}
