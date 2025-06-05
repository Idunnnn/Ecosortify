import Header2 from "@/components/templates/Header2";
import Leftbar from "@/components/templates/Leftbar";
import Rightbar from "@/components/templates/Rightbar";
import Link from "next/link";
import Article from "@/components/Article";
import ImageArticle from "@/components/ImageArticle";
import { Icon } from "@iconify/react";

export default function farmasi() {
  return (
    <>
      <Header2 className={"fixed w-full bg-white"} />

      <div className="flex">
        <Leftbar />

        <Article>
          <h1 id="overview" className="text-2xl font-bold mb-5 text-gray-800">
            Limbah Farmasi
          </h1>
          <p>
            Meliputi obat atau produk farmasi yang sudah tidak dapat digunakan lagi. Limbah farmasi adalah semua obat-obatan,
            vaksin, atau produk farmasi lainnya yang sudah kedaluwarsa, tidak terpakai, tumpah, terkontaminasi, atau kemasannya
            rusak sehingga tidak dapat digunakan lagi.
          </p>
          <br />
          <h2 id="risiko-utama" className="text-xl font-semibold mt-8 mb-3 text-green-700">
            Risiko Utama:
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-5">
            <li>
              Mencemari lingkungan (tanah, air) jika dibuang sembarangan, menimbulkan resistensi antibiotik jika dibuang ke
              saluran air, atau disalahgunakan jika jatuh ke tangan yang salah.
            </li>
          </ul>
          <br />

          <ImageArticle src="/images/guide/limbahfarmasi1.jpg" alt="Contoh limbah farmasi" />

          <br />
          <h2 id="contoh-spesifik" className="text-xl font-semibold mt-8 mb-3 text-green-700">
            Contoh Spesifik:
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-5">
            <li>Obat-obatan kedaluwarsa (tablet, kapsul, sirup, injeksi).</li>
            <li>Vaksin yang rusak (misalnya karena suhu penyimpanan tidak sesuai) atau kedaluwarsa.</li>
            <li>Sisa ampul atau vial obat suntik setelah penggunaan.</li>
            <li>Salep, krim, atau tablet yang tidak terpakai dari pasien.</li>
            <li>Alat kesehatan yang mengandung obat (misalnya inhaler bekas).</li>
          </ul>
          <br />

          <h2 id="cara-penanganan-individu-fasilitas" className="text-xl font-semibold mt-8 mb-3 text-green-700">
            Cara Penanganan oleh Individu (Fasilitas Kesehatan):
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-5">
            <li>
              <strong>Pemisahan Jenis:</strong> Pisahkan obat-obatan berdasarkan bentuk (tablet, cairan, injeksi) dan sifat
              (misalnya antibiotik terpisah).
            </li>
            <li>
              <strong>Wadah Khusus:</strong> Buang ke wadah tertutup yang berlabel "Limbah Farmasi" atau "Limbah Obat".
            </li>
            <li>
              <strong>Hancurkan Kemasan:</strong> Untuk obat-obatan yang berpotensi disalahgunakan, kemasan atau identitas obat
              harus dihancurkan sebelum dibuang.
            </li>
            <li>
              <strong>Cairan Jangan Dibuang ke Saluran Air:</strong> Cairan obat tidak boleh dibuang ke saluran air biasa.
            </li>
          </ul>
          <br />

          <ImageArticle src="/images/guide/limbahfarmasi2.jpg" alt="Contoh limbah farmasi" />
          
          <br />

          <h2 id="proses-pengolahan-pemusnahan" className="text-xl font-semibold mt-8 mb-3 text-green-700">
            Proses Pengolahan/Pemusnahan (Fasilitas Khusus):
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-5">
            <li>
              <strong>Insinerasi:</strong> Metode yang paling umum dan efektif untuk limbah farmasi, terutama obat-obatan yang
              tidak bisa diolah secara lain. Pembakaran suhu tinggi menghancurkan struktur molekul obat.
            </li>
            <li>
              <strong>Enkapsulasi/Inertisasi:</strong> Obat-obatan dapat dicampur dengan bahan seperti semen, kapur, atau pasir
              untuk membentuk massa padat yang kemudian dibuang ke TPA limbah berbahaya. Ini cocok untuk tablet atau bubuk.
            </li>
            <li>
              <strong>Kimiawi:</strong> Beberapa jenis obat dapat diolah secara kimiawi untuk menonaktifkan zat aktifnya.
            </li>
            <li>
              <strong>Pengiriman ke Pihak Ketiga:</strong> Mayoritas limbah farmasi dikirim ke perusahaan pengolah limbah B3
              berizin.
            </li>
          </ul>
          <br />

          <div className="flex justify-between mt-14">
            <Link
              href="/guide/sampah-medis/jenis-sampah-medis/kimia"
              className="py-3 px-5 bg-green-200 rounded items-center flex gap-2 hover:bg-green-300 active:bg-green-300"
            >
              <Icon icon="icon-park-solid:back" />
              <p>Sebelumnya</p>
            </Link>
            <Link
              href="/guide/sampah-medis/jenis-sampah-medis/genotoksik"
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
                Limbah Farmasi
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
