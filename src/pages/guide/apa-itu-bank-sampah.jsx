import Header2 from "@/components/templates/Header2";
import Leftbar from "@/components/templates/Leftbar";
import Rightbar from "@/components/templates/Rightbar";
import Link from "next/link";
import ImageArticle from "@/components/ImageArticle";
import { Icon } from "@iconify/react";

export default function ApaItuBankSampah() {
  return (
    <>
      <Header2 className={"fixed w-full bg-white"} />

      <div className="flex">
        <Leftbar />

        <main className="2xl:ml-[430px] 2xl:mr-[380px]  lg:ml-[350px] flex-1 h-[calc(100vh-4rem)] p-8 mb-30 xl:mr-[300px] z-1 bg-white relative top-20 ">
          <article className="selection:bg-green-700 selection:text-white text-gray-700">
            <h1 id="#" className="text-2xl font-bold mb-5 text-gray-800">
              Apa Itu Bank Sampah?
            </h1>

            <ImageArticle src="/images/guide/bank-sampah.jpg" alt="bank-sampah" />

            <p>
              Bank Sampah merupakan konsep pengumpulan sampah kering dan dipilah serta memiliki manajemen layaknya perbankan tapi
              yang ditabung bukan uang melainkan sampah. Warga yang menabung yang juga disebut nasabah memiliki buku tabungan dan
              dapat meminjam uang yang nantinya dikembalikan dengan sampah seharga uang yang dipinjam.Sampah yang ditabung
              ditimbang dan dihargai dengan sejumlah uang nantinya akan dijual di pabrik yang sudah bekerja sama. Sedangkan
              plastik kemasan dibeli ibu-ibu PKK setempat untuk didaur ulang menjadi barang-barang kerajinan.
            </p>
            <br />

            <h2 id="tujuan-dan-manfaat-bank-sampah" className="text-xl font-bold mb-5 text-gray-800">
              Tujuan dan manfaat bank sampah
            </h2>

            <p>
              Tujuan dibangunnya bank sampah sebenarnya bukan bank sampah itu sendiri. Bank sampah adalah strategi untuk membangun
              kepedulian masyarakat agar dapat ‘berkawan’ dengan sampah untuk mendapatkan manfaat ekonomi langsung dari sampah.
              Jadi, bank sampah tidak dapat berdiri sendiri melainkan harus diintegrasikan dengan gerakan 4R sehingga manfaat
              langsung yang dirasakan tidak hanya ekonomi, namun pembangunan lingkungan yang bersih, hijau dan sehat.
            </p>
            <br />
            <p>
              Bank sampah juga dapat dijadikan solusi untuk mencapai pemukiman yang bersih dan nyaman bagi warganya. Dengan pola
              ini maka warga selain menjadi disiplin dalam mengelola sampah juga mendapatkan tambahan pemasukan dari sampah-sampah
              yang mereka kumpulkan. Tampaknya pemikiran seperti itu pula yang ditangkap oleh Kementerian Lingkungan Hidup.
              September lalu instansi pemerintah ini menargetkan membangun bank sampah di 250 kota di seluruh Indonesia. Menteri
              Negara Lingkungan Hidup Balthasar Kambuaya mengatakan sampah sudah menjadi ancaman yang serius, bila tidak dikelola
              dengan baik. Bukan tidak mungkin beberapa tahun mendatang sekitar 250 juta rakyat Indonesia akan hidup bersama
              tumpukan sampah di lingkungannya.
            </p>
            <br />

            <h2 id="bagaimanakah-proses-dan-cara-kerjanya" className="text-xl font-bold mb-5 text-gray-800">
              Bagaimanakah proses dan cara kerjanya
            </h2>

            <p>
              Sama seperti di bank-bank penyimpanan uang, para nasabah dalam hal ini masyarakat bisa langsung datang ke bank untuk
              menyetor. Bukan uang yang di setor, namun sampah yang mereka setorkan. Sampah tersebut di timbang dan di catat di
              buku rekening oleh petugas bank sampah. Dalam bank sampah, ada yang di sebut dengan tabungan sampah.
            </p>
            <br />
            <p>
              Hal ini adalah cara untuk menyulap sampah menjadi uang sekaligus menjaga kebersihan lingkungan dari sampah khususnya
              plastik sekaligus bisa dimanfaatkan kembali (reuse). Biasanya akan di manfaatkan kembali dalam berbagai bentuk
              seperti tas, dompet, tempat tisu, dan lain-lain. Syarat sampah yang dapat di tabung adalah yang rapi dalam hal
              pemotongan. Maksudnya adalah ketika ingin membuka kemasannya, menggunakan alat dan rapi dalam pemotongannya.
              Kemudian sudah di bersihkan atau di cuci.
            </p>
            <br />
            <p>
              Yang terakhir, harus menyetorkan minimal 1 kg. Ada dua bentuk tabungan di bank sampah. Yang pertama yaitu tabungan
              rupiah di mana tabungan ini di khususkan untuk masyarakat perorangan. Dengan membawa sampah kemudian di tukar dengan
              sejumlah uang dalam bentuk tabungan.
            </p>
            <br />
            <p>
              Beberapa contoh kemasan plastik yang dapat di tukar yaitu menurut kualitas plastiknya. Kualitas ke 1 yaitu plastik
              yang sedikit lebar dan tebal (karung beras, detergen, pewangi pakaian, dan pembersih lantai). Kualitas ke 2 yaitu
              plastik dari minuman instan dan ukurannya agak kecil (kopi instan, suplemen, minuman anak-anak, dan lain-lain).
              Kualitas ke 3 yaitu plastik mie instan. Kemudian kualitas ke 4 yaitu botol plastik air mineral. Yang paling rendah
              yaitu kualitas 0 adalah bungkus plastik yang sudah sobek atau tidak rapi dalam membuka kemasannya. Karena akan susah
              untuk di gunakan kembali dalam berbagai bentuk seperti tas, dompet, tempat tisu, dan lain-lain. Untuk kualitas yang
              terakhir, harus di setor dalam bentuk guntingan kecil-kecil (di cacah).
            </p>
            <br />
            <p>
              Bentuk tabungan sampah yang kedua di sebut tabungan lingkungan. Tabungan lingkungan adalah partisipasi perusahaan
              dan kalangan bisnis untuk pelestarian lingkungan. Tabungan ini tidak dapat di uangkan, tetapi nasabahnya akan di
              publish ke media sebagai perusahaan atau kalangan bisnis yang melestarikan lingkungan. Lebih lanjut akan di berikan
              piagam BUMI setiap hari lingkungan hidup.
            </p>
            <br />
            <p>
              Inilah salah satu alternatif untuk memecahkan masalah sampah dan ikut berpartisipasi melestarikan lingkungan. Yang
              pada akhirnya berdampak baik untuk bumi ini. Sekecil apa pun yang kita lakukan untuk bumi ini, pasti akan berdampak
              besar bagi kelangsungan bumi itu sendiri.
            </p>
            <br />

            <div className="flex justify-between mt-14">
              <Link
                href="/guide/apa-itu-sampah"
                className="py-3 px-5 bg-green-200 rounded items-center flex gap-2 hover:bg-green-300 active:bg-green-300"
              >
                <Icon icon="icon-park-solid:back" />
                <p>Kembali</p>
              </Link>
              <Link
                href="/guide/the-great-pacific-garbage-patch"
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
              <Link href="#tujuan-dan-manfaat-bank-sampah">Tujuan dan manfaat bank sampah</Link>
            </li>
            <li>
              <Link href="#bagaimanakah-proses-dan-cara-kerjanya">Bagaimanakah proses dan cara kerjanya</Link>
            </li>
          </ul>
        </Rightbar>
      </div>
    </>
  );
}
