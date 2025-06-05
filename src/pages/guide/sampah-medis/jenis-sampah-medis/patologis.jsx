import Header2 from "@/components/templates/Header2";
import Leftbar from "@/components/templates/Leftbar";
import Rightbar from "@/components/templates/Rightbar";
import Link from "next/link";
import Article from "@/components/Article";
import ImageArticle from "@/components/ImageArticle";
import { Icon } from "@iconify/react";

export default function patologis() {
  return (
    <>
      <Header2 className={"fixed w-full bg-white"} />

      <div className="flex">
        <Leftbar />

        <Article>
          <h1 id="overview" className="text-2xl font-bold mb-5 text-gray-800">
            Limbah Patologis
          </h1>
          <p>
            Ini adalah kategori yang sangat sensitif karena berkaitan langsung dengan material biologis dari tubuh makhluk hidup.
            Limbah patologis adalah semua bagian tubuh manusia atau hewan, organ, jaringan, atau cairan tubuh yang diangkat selama
            operasi, biopsi, autopsi, prosedur diagnostik, atau penelitian.
          </p>
          <br />

          <ImageArticle src="/images/guide/patalogis1.jpg" alt="Contoh limbah patologis" />

          <br />
          <h2 id="risiko-utama" className="text-xl font-semibold mt-8 mb-3 text-green-700">
            Risiko Utama:
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-5">
            <li>
              Potensi penularan penyakit (jika infeksius), masalah etika, dan bau yang tidak sedap jika tidak disimpan dan
              dimusnahkan dengan cepat dan benar.
            </li>
          </ul>
          <br />
          <h2 id="contoh-spesifik" className="text-xl font-semibold mt-8 mb-3 text-green-700">
            Contoh Spesifik:
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-5">
            <li>Plasenta dan jaringan sisa kelahiran.</li>
            <li>Organ atau bagian tubuh yang diamputasi setelah operasi.</li>
            <li>Jaringan hasil biopsi atau spesimen bedah lainnya.</li>
            <li>Sisa-sisa autopsi atau post-mortem.</li>
            <li>Bangkai atau bagian tubuh hewan dari laboratorium penelitian atau rumah sakit hewan.</li>
            <li>Gigi, kuku, atau rambut yang diangkat dari pasien.</li>
          </ul>
          <br />

          <h2 id="cara-penanganan-individu-fasilitas" className="text-xl font-semibold mt-8 mb-3 text-green-700">
            Cara Penanganan oleh Individu (Fasilitas Kesehatan):
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-5">
            <li>
              <strong>Wadah Khusus:</strong> Masukkan limbah patologis ke dalam kantong plastik berwarna kuning atau wadah keras
              yang tidak bocor, dengan label "Limbah Patologis" atau simbol biohazard.
            </li>
            <li>
              <strong>Suhu Dingin:</strong> Idealnya, disimpan dalam suhu dingin (kulkas khusus limbah medis dengan suhu 2-8°C)
              jika tidak langsung diproses, untuk mencegah pembusukan dan bau.
            </li>
            <li>
              <strong>Penanganan Minimal:</strong> Kurangi sentuhan atau kontak langsung dengan limbah ini.
            </li>
            <li>
              <strong>Penggunaan APD:</strong> Selalu gunakan APD lengkap (sarung tangan, masker, gaun, kacamata pelindung) saat
              menangani.
            </li>
          </ul>
          <br />

          <ImageArticle src="/images/guide/patalogis2.jpg" alt="Contoh limbah patologis" />
         
          <br />

          <h2 id="proses-pengolahan-pemusnahan" className="text-xl font-semibold mt-8 mb-3 text-green-700">
            Proses Pengolahan/Pemusnahan (Fasilitas Khusus):
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-5">
            <li>
              <strong>Insinerasi:</strong> Ini adalah metode paling umum dan direkomendasikan untuk limbah patologis. Pembakaran
              pada suhu sangat tinggi (minimal 800-1000°C) akan menghancurkan material organik sepenuhnya dan menonaktifkan
              patogen.
            </li>
            <li>
              <strong>Penguburan (Jika Diizinkan dan Sesuai Standar):</strong> Untuk jumlah sangat kecil dan di area terpencil
              atau pedesaan, penguburan di tanah yang terisolasi dengan lapisan kapur dapat diizinkan, namun harus sesuai regulasi
              lokal yang sangat ketat untuk mencegah pencemaran air tanah dan memenuhi standar sanitasi.
            </li>
            <li>
              <strong>Proses Kimiawi:</strong> Beberapa fasilitas menggunakan pelarut kimia kuat (misalnya larutan alkali) untuk
              melarutkan jaringan, namun ini kurang umum untuk volume besar karena kompleksitas penanganan limbah cair yang
              dihasilkan.
            </li>
            <li>
              <strong>Autoklaf:</strong> Dalam beberapa kasus, limbah patologis yang berukuran kecil dan tidak mengandung tulang
              dapat diautoklaf terlebih dahulu untuk sterilisasi sebelum dibuang ke TPA.
            </li>
          </ul>
          <br />

          <div className="flex justify-between mt-14">
            <Link
              href="/guide/sampah-medis/jenis-sampah-medis/infeksius"
              className="py-3 px-5 bg-green-200 rounded items-center flex gap-2 hover:bg-green-300 active:bg-green-300"
            >
              <Icon icon="icon-park-solid:back" />
              <p>Sebelumnya</p>
            </Link>
            <Link
              href="/guide/sampah-medis/jenis-sampah-medis/benda-tajam"
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
                Limbah Patologis
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