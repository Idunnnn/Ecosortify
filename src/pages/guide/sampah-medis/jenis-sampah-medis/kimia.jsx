import Header2 from "@/components/templates/Header2";
import Leftbar from "@/components/templates/Leftbar";
import Rightbar from "@/components/templates/Rightbar";
import Link from "next/link";
import Article from "@/components/Article";
import ImageArticle from "@/components/ImageArticle";
import { Icon } from "@iconify/react";

export default function kimia() {
  return (
    <>
      <Header2 className={"fixed w-full bg-white"} />

      <div className="flex">
        <Leftbar />

        <Article>
          <h1 id="overview" className="text-2xl font-bold mb-5 text-gray-800">
            Limbah Kimia
          </h1>
          <p>
            Limbah ini melibatkan berbagai zat berbahaya dari aktivitas medis. Limbah kimia adalah limbah yang mengandung bahan
            kimia berbahaya (korosif, reaktif, mudah terbakar, beracun, eksplosif) yang berasal dari proses diagnostik,
            penelitian, atau sterilisasi di fasilitas kesehatan.
          </p>
          <br />

          <ImageArticle src="/images/guide/limbahkimia1.jpg" alt="Contoh limbah kimia" />

          <br />
          <h2 id="risiko-utama" className="text-xl font-semibold mt-8 mb-3 text-green-700">
            Risiko Utama:
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-5">
            <li>
              Pencemaran lingkungan (tanah, air), bahaya kebakaran/ledakan, korosi, iritasi kulit/pernapasan, atau keracunan bagi
              yang terpapar.
            </li>
          </ul>
          <br />
          <h2 id="contoh-spesifik" className="text-xl font-semibold mt-8 mb-3 text-green-700">
            Contoh Spesifik:
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-5">
            <li>Cairan desinfektan dan antiseptik yang kedaluwarsa atau sisa penggunaan.</li>
            <li>Reagen laboratorium (misalnya reagen untuk tes darah, urin) yang sudah tidak terpakai atau kedaluwarsa.</li>
            <li>Pelarut organik (misalnya xylene, formalin) dari patologi atau laboratorium histologi.</li>
            <li>Larutan pembersih yang bersifat korosif (misalnya pembersih toilet rumah sakit).</li>
            <li>Sisa atau tumpahan bahan kimia dari proses sterilisasi peralatan.</li>
            <li>Bahan pengembang dan fixer dari unit radiologi (untuk film X-ray konvensional).</li>
            <li>Bahan kimia yang mengandung logam berat (misalnya merkuri dari termometer rusak).</li>
          </ul>
          <br />

          <h2 id="cara-penanganan-individu-fasilitas" className="text-xl font-semibold mt-8 mb-3 text-green-700">
            Cara Penanganan oleh Individu (Fasilitas Kesehatan):
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-5">
            <li>
              <strong>Pemisahan Berdasarkan Sifat:</strong> Pisahkan limbah kimia berdasarkan sifatnya (asam, basa, mudah
              terbakar, beracun) ke dalam wadah terpisah yang tahan bahan kimia dan tidak bocor.
            </li>
            <li>
              <strong>Wadah Tertutup & Berlabel:</strong> Gunakan wadah tertutup rapat, beri label jelas dengan nama bahan kimia,
              tanggal, dan simbol bahaya.
            </li>
            <li>
              <strong>Jangan Campur:</strong> Jangan mencampur bahan kimia yang tidak kompatibel karena bisa menimbulkan reaksi
              berbahaya (misalnya, asam dengan basa kuat).
            </li>
            <li>
              <strong>Penyimpanan Aman:</strong> Simpan di area penyimpanan khusus yang berventilasi baik, jauh dari sumber api,
              dan mudah diakses untuk penanganan darurat.
            </li>
            <li>
              <strong>Penggunaan APD:</strong> Selalu gunakan APD yang sesuai (sarung tangan tahan kimia, kacamata pelindung,
              masker/respirator) saat menangani.
            </li>
          </ul>
          <br />

          <ImageArticle src="/images/guide/limbahkimia2.jpg" alt="Contoh limbah kimia" />

          
          <br />

          <h2 id="proses-pengolahan-pemusnahan" className="text-xl font-semibold mt-8 mb-3 text-green-700">
            Proses Pengolahan/Pemusnahan (Fasilitas Khusus):
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-5">
            <li>
              <strong>Netralisasi:</strong> Bahan kimia asam dan basa dapat dinetralkan hingga pH netral (pH 6-9) sebelum dibuang
              ke saluran pembuangan (jika memenuhi standar lingkungan).
            </li>
            <li>
              <strong>Oksidasi/Reduksi:</strong> Bahan kimia berbahaya tertentu dapat diolah dengan proses oksidasi atau reduksi
              untuk mengubahnya menjadi senyawa yang tidak berbahaya atau kurang toksik.
            </li>
            <li>
              <strong>Insinerasi:</strong> Bahan kimia organik mudah terbakar atau beracun dapat dibakar dalam insinerator suhu
              tinggi (minimal 1000°C) dengan kontrol emisi ketat untuk menghancurkan senyawanya.
            </li>
            <li>
              <strong>Imobilisasi/Solidifikasi:</strong> Bahan kimia tertentu (terutama yang mengandung logam berat) dapat
              dicampur dengan material padat (misalnya semen, kapur) untuk mengunci dan mencegah pelepasan ke lingkungan, lalu
              dibuang ke TPA limbah berbahaya.
            </li>
            <li>
              <strong>Daur Ulang/Pemulihan:</strong> Beberapa bahan kimia (misalnya pelarut) dapat didaur ulang atau diregenerasi
              untuk digunakan kembali, atau komponen berharganya dapat dipulihkan.
            </li>
            <li>
              <strong>Pengiriman ke Pihak Ketiga:</strong> Seringkali, limbah kimia dikirim ke perusahaan pengolah limbah B3
              berizin yang memiliki fasilitas khusus untuk penanganan dan pemusnahannya yang aman dan sesuai regulasi.
            </li>
          </ul>
          <br />

          <div className="flex justify-between mt-14">
            <Link
              href="/guide/sampah-medis/jenis-sampah-medis/benda-tajam"
              className="py-3 px-5 bg-green-200 rounded items-center flex gap-2 hover:bg-green-300 active:bg-green-300"
            >
              <Icon icon="icon-park-solid:back" />
              <p>Sebelumnya</p>
            </Link>
            <Link
              href="/guide/sampah-medis/jenis-sampah-medis/farmasi"
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
                Limbah Kimia
              </Link>
            </li>
            <li>
              <Link href="#risiko-utama" className="hover:text-green-700">
                Risiko Utama
              </Link>
            </li>
            <li>
              <Link href="#contoh-spesifik" className="hover:text-green-700">
                Contoh Spesifik
              </Link>
            </li>
            <li>
              <Link href="#cara-penanganan-individu-fasilitas" className="hover:text-green-700">
                Cara Penanganan oleh Individu (Fasilitas Kesehatan)
              </Link>
            </li>
            <li>
              <Link href="#proses-pengolahan-pemusnahan" className="hover:text-green-700">
                Proses Pengolahan/Pemusnahan (Fasilitas Khusus)
              </Link>
            </li>
          </ul>
        </Rightbar>
      </div>
    </>
  );
}
