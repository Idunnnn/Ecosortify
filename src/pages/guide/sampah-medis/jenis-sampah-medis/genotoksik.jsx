import Header2 from "@/components/templates/Header2";
import Leftbar from "@/components/templates/Leftbar";
import Rightbar from "@/components/templates/Rightbar";
import Link from "next/link";
import Article from "@/components/Article";
import ImageArticle from "@/components/ImageArticle";
import { Icon } from "@iconify/react";

export default function genotoksik() {
  return (
    <>
      <Header2 className={"fixed w-full bg-white"} />

      <div className="flex">
        <Leftbar />

        <Article>
          <h1 id="overview" className="text-2xl font-bold mb-5 text-gray-800">
            Limbah Genotoksik (Sitotoksik)
          </h1>
          <p>
            Limbah ini sangat berbahaya karena dampaknya pada tingkat sel. Limbah genotoksik (sitotoksik) adalah limbah yang
            mengandung zat-zat yang bersifat karsinogenik (menyebabkan kanker), mutagenik (menyebabkan perubahan genetik), atau
            teratogenik (menyebabkan cacat lahir). Ini paling sering terkait dengan pengobatan kanker.
          </p>
          <br />

          <ImageArticle src="/images/guide/genotoksik1.jpg" alt="Contoh limbah genostoksik" />

          <br />
          <h2 id="risiko-utama" className="text-xl font-semibold mt-8 mb-3 text-green-700">
            Risiko Utama:
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-5">
            <li>
              Berpotensi menyebabkan kanker, mutasi genetik, atau cacat lahir pada individu yang terpapar, bahkan dalam dosis
              kecil. Sangat berbahaya bagi petugas kesehatan yang menanganinya.
            </li>
          </ul>
          <br />
          <h2 id="contoh-spesifik" className="text-xl font-semibold mt-8 mb-3 text-green-700">
            Contoh Spesifik:
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-5">
            <li>Sisa atau tumpahan obat kemoterapi (misalnya Cisplatin, Doxorubicin).</li>
            <li>
              Alat dan bahan yang terkontaminasi obat kemoterapi (misalnya jarum, spuit, alat infus sitotoksik, sarung tangan,
              gaun pelindung).
            </li>
            <li>Urin, feses, muntahan, atau cairan tubuh lain dari pasien setelah menerima kemoterapi.</li>
            <li>Obat atau bahan kimia yang digunakan dalam penelitian genetik yang memiliki efek genotoksik.</li>
          </ul>
          <br />

          <h2 id="cara-penanganan-individu-fasilitas" className="text-xl font-semibold mt-8 mb-3 text-green-700">
            Cara Penanganan oleh Individu (Fasilitas Kesehatan):
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-5">
            <li>
              <strong>Wadah Tertutup & Berlabel Merah/Ungu:</strong> Buang limbah genotoksik ke dalam kantong atau wadah keras
              berwarna merah atau ungu yang tertutup rapat dan diberi label "Limbah Sitotoksik" atau "Limbah Genotoksik" dengan
              simbol bahaya.
            </li>
            <li>
              <strong>Pemisahan Ketat:</strong> Pisahkan secara ketat dari semua jenis limbah lain.
            </li>
            <li>
              <strong>Area Khusus:</strong> Penyimpanan harus di area khusus, aman, dan terbatas aksesnya.
            </li>
            <li>
              <strong>Penggunaan APD Maksimal:</strong> Petugas harus menggunakan APD lengkap dengan standar tertinggi (masker
              N95, sarung tangan ganda, gown antitembus, pelindung mata) saat menyiapkan atau menangani limbah ini.
            </li>
            <li>
              <strong>Prosedur Khusus:</strong> Pengenceran atau penghancuran dilakukan dalam biological safety cabinet.
            </li>
          </ul>
          <br />

          <ImageArticle src="/images/guide/genotoksik2.jpg" alt="Contoh limbah genostoksik" />

          
          <br />

          <h2 id="proses-pengolahan-pemusnahan" className="text-xl font-semibold mt-8 mb-3 text-green-700">
            Proses Pengolahan/Pemusnahan (Fasilitas Khusus):
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-5">
            <li>
              <strong>Insinerasi Suhu Sangat Tinggi:</strong> Ini adalah metode yang paling efektif untuk limbah genotoksik.
              Pembakaran harus dilakukan pada suhu yang sangat tinggi (di atas 1.000°C) dengan waktu tinggal gas buang yang cukup
              lama untuk memastikan penghancuran sempurna.
            </li>
            <li>
              <strong>Dekontaminasi Kimiawi:</strong> Beberapa jenis limbah sitotoksik dapat didekontaminasi dengan bahan kimia
              tertentu yang dapat menonaktifkan sifat berbahayanya sebelum dibuang.
            </li>
            <li>
              <strong>Pengiriman ke Pihak Ketiga:</strong> Sebagian besar fasilitas kesehatan mengirimkan limbah genotoksik ke
              perusahaan pengolah limbah B3 spesialis yang memiliki insinerator atau fasilitas dekontaminasi yang memenuhi standar
              internasional.
            </li>
          </ul>
          <br />

          <div className="flex justify-between mt-14">
            <Link
              href="/guide/sampah-medis/jenis-sampah-medis/farmasi"
              className="py-3 px-5 bg-green-200 rounded items-center flex gap-2 hover:bg-green-300 active:bg-green-300"
            >
              <Icon icon="icon-park-solid:back" />
              <p>Sebelumnya</p>
            </Link>
            <Link
              href="/guide/sampah-medis/jenis-sampah-medis/radioaktif"
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
                Limbah Genotoksik (Sitotoksik)
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
