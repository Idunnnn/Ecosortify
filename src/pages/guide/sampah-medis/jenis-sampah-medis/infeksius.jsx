import Header2 from "@/components/templates/Header2";
import Leftbar from "@/components/templates/Leftbar";
import Rightbar from "@/components/templates/Rightbar";
import Link from "next/link";
import Article from "@/components/Article";
import ImageArticle from "@/components/ImageArticle";
import { Icon } from "@iconify/react";

export default function infeksius() {
  return (
    <>
      <Header2 className={"fixed w-full bg-white"} />

      <div className="flex">
        <Leftbar />

        <Article>
          <h1 id="overview" className="text-2xl font-bold mb-5 text-gray-800">
            Limbah Infeksius
          </h1>
          <p>
            Limbah ini adalah yang paling sering menjadi sorotan karena risikonya yang langsung. Limbah infeksius adalah semua
            limbah yang terkontaminasi atau diduga terkontaminasi mikroorganisme patogen (virus, bakteri, jamur, parasit) dalam
            konsentrasi yang cukup tinggi untuk menimbulkan risiko penularan penyakit. Potensi penularan ini bisa terjadi melalui
            kontak langsung, pernapasan, atau paparan luka.
          </p>
          <br />

          <ImageArticle src="/images/guide/infeksius1.jpg" alt="Contoh limbah infeksius" />

          <br />
          <h2 id="risiko-utama" className="text-xl font-semibold mt-8 mb-3 text-green-700">
            Risiko Utama:
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-5">
            <li>
              Penularan infeksi serius seperti Hepatitis B dan C, HIV/AIDS, TBC, dan infeksi lainnya kepada petugas medis, pasien,
              atau masyarakat umum jika tidak ditangani dengan benar.
            </li>
          </ul>
          <br />
          <h2 id="contoh-spesifik" className="text-xl font-semibold mt-8 mb-3 text-green-700">
            Contoh Spesifik:
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-5">
            <li>Darah, serum, plasma, dan cairan tubuh pasien (misalnya muntahan, urine, feses, cairan pleura).</li>
            <li>
              Peralatan medis bekas pakai yang terkontaminasi cairan tubuh (misalnya selang infus, kantung urin, kateter, tabung
              darah).
            </li>
            <li>
              Perban, kapas, kassa, atau sarung tangan bekas yang sudah bersentuhan dengan luka infeksius atau cairan tubuh
              pasien.
            </li>
            <li>Pakaian, seprai, atau alas yang terkontaminasi darah atau cairan tubuh dari pasien infeksi.</li>
            <li>Kultur mikrobiologi dari laboratorium yang mengandung biakan bakteri atau virus.</li>
            <li>Sampel spesimen dari pasien yang diduga atau terkonfirmasi infeksi.</li>
            <li>Limbah dari pasien yang diisolasi (misalnya pasien COVID-19, TB MDR).</li>
          </ul>
          <br />

          <h2 id="cara-penanganan-individu-fasilitas" className="text-xl font-semibold mt-8 mb-3 text-green-700">
            Cara Penanganan oleh Individu (Fasilitas Kesehatan):
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-5">
            <li>
              <strong>Pemisahan di Sumber:</strong> Buang limbah infeksius langsung ke kantong plastik berwarna kuning di tempat
              sampah berpedal (non-manual) yang dekat dengan area perawatan pasien.
            </li>
            <li>
              <strong>Tidak Memadatkan:</strong> Jangan pernah memadatkan limbah infeksius untuk menghindari keluarnya cairan atau
              penyebaran patogen.
            </li>
            <li>
              <strong>Penggunaan APD:</strong> Petugas harus selalu menggunakan Alat Pelindung Diri (APD) lengkap (sarung tangan,
              masker, gaun) saat menangani limbah ini.
            </li>
            <li>
              <strong>Penutupan Rapat:</strong> Kantong harus ditutup rapat saat volume sudah mencapai 3/4 penuh atau sebelum
              pengangkutan.
            </li>
            <li>
              <strong>Pelabelan:</strong> Pastikan kantong limbah memiliki label "Limbah Infeksius" atau simbol biohazard.
            </li>
          </ul>
          <br />

          <ImageArticle src="/images/guide/infeksius2.jpg" alt="Contoh limbah infeksius" />

       
          <br />

          <h2 id="proses-pengolahan-pemusnahan" className="text-xl font-semibold mt-8 mb-3 text-green-700">
            Proses Pengolahan/Pemusnahan (Fasilitas Khusus):
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-5">
            <li>
              <strong>Pengangkutan Aman:</strong> Limbah diangkut menggunakan troli khusus yang tertutup dan mudah dibersihkan ke
              tempat penyimpanan sementara.
            </li>
            <li>
              <strong>Sterilisasi/Desinfeksi:</strong>
              <ul className="list-circle list-inside ml-5 mt-2">
                <li>
                  <strong>Autoklaf:</strong> Limbah disterilkan menggunakan uap panas bertekanan tinggi (121°C, 15 psi selama
                  30-60 menit) untuk membunuh mikroorganisme. Hasilnya menjadi limbah non-infeksius yang bisa dibuang ke TPA atau
                  didaur ulang (jika materialnya memungkinkan).
                </li>
                <li>
                  <strong>Mikrowave:</strong> Menggunakan gelombang mikro untuk memanaskan dan mendisinfeksi limbah.
                </li>
                <li>
                  <strong>Kimia:</strong> Menggunakan bahan kimia desinfektan kuat (misalnya larutan klorin 0.5%) untuk
                  menonaktifkan patogen.
                </li>
              </ul>
            </li>
            <li>
              <strong>Insinerasi (jika diizinkan):</strong> Beberapa jenis limbah infeksius, terutama yang tidak bisa disterilkan
              atau mengandung material yang sulit terurai, dapat dibakar pada suhu sangat tinggi (minimal 850°C) dalam insinerator
              khusus untuk mengurangi volume dan menghancurkan patogen. (Perlu izin ketat dan kontrol emisi).
            </li>
            <li>
              <strong>Pengolahan Lanjut:</strong> Setelah sterilisasi, material yang sudah aman bisa dipadatkan lalu dibuang ke
              TPA, atau jika memungkinkan dan sesuai standar, dipilah lebih lanjut untuk daur ulang material non-patogennya.
            </li>
          </ul>
          <br />

          <div className="flex justify-between mt-14">
            <Link
              href="/guide/sampah-medis/"
              className="py-3 px-5 bg-green-200 rounded items-center flex gap-2 hover:bg-green-300 active:bg-green-300"
            >
              <Icon icon="icon-park-solid:back" />
              <p>Sebelumnya</p>
            </Link>
            <Link
              href="/guide/sampah-medis/jenis-sampah-medis/patologis"
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
                Limbah Infeksius
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
