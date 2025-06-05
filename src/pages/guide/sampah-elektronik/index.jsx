import Header2 from "@/components/templates/Header2";
import Leftbar from "@/components/templates/Leftbar";
import Rightbar from "@/components/templates/Rightbar";
import Link from "next/link";
import ImageArticle from "@/components/ImageArticle";
import Article from "@/components/Article";
import { Icon } from "@iconify/react";

export default function PengenalanEwaste() {
  return (
    <>
      <Header2 className={"fixed w-full bg-white"} />

      <div className="flex">
        <Leftbar />

        <Article>
          <h1 id="overview" className="text-2xl font-bold mb-5 text-gray-800">
            Sampah Elektronik (E-Waste): Pengenalan
          </h1>
          <p>
            Sampah elektronik atau yang dikenal juga dengan **e-waste**, merujuk pada definisi The International Telecommunication
            Union (yang mengacu pada Step Initiative, 2014) sebagai berbagai item yang berkaitan dengan peralatan listrik dan
            elektronik (electrical and electronic equipment/EEE) yang telah dibuang oleh pemiliknya dan tidak ada maksud untuk
            digunakan kembali. Oleh karena itu, sampah elektronik atau e-waste sering juga disebut sebagai **WEEE (Waste
            Electrical and Electronic Equipment)**.
          </p>
          <br />
          <p>
            Di samping itu, berdasarkan pada **PP No. 27 Tahun 2020 tentang Pengelolaan Sampah Spesifik**, sampah elektronik
            termasuk ke dalam golongan sampah yang mengandung **B3 (Bahan Berbahaya dan Beracun)**. Jenis sampah B3 ini memiliki
            dampak negatif terhadap lingkungan dan manusia apabila tidak dikelola dengan baik dan benar.
          </p>
          <br />

          <ImageArticle src="/images/guide/elektronik1.jpg" alt="Contoh Produk Pengenalan" />

          <br />
          <h2 id="contoh-e-waste-kategori" className="text-xl font-bold mt-8 mb-3 text-gray-800">
            Contoh Sampah Elektronik (E-Waste) Berdasarkan Kategorinya
          </h2>
          <p>
            Sampah elektronik atau e-waste hadir dalam berbagai bentuk di sekitar kita. Untuk memudahkan pemahaman, berikut adalah
            pengelompokan jenis-jenis e-waste beserta contohnya:
          </p>
          <br />

          <ImageArticle src="/images/guide/elektronik2.jpg" alt="Contoh Produk Pengenalan" />

          <br />

          <h3 id="peralatan-rumah-tangga" className="text-lg font-semibold mt-6 mb-2 text-green-700">
            1. Peralatan Rumah Tangga
          </h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700 ml-5">
            <li>Penanak nasi elektrik</li>
            <li>Setrika</li>
            <li>Vacuum cleaner</li>
            <li>Kulkas</li>
            <li>Mesin cuci</li>
            <li>Oven microwave</li>
            <li>Blender</li>
            <li>Pembuat kopi</li>
          </ul>
          <br />

          <h3 id="peralatan-hiburan" className="text-lg font-semibold mt-6 mb-2 text-green-700">
            2. Peralatan Hiburan &amp; Elektronik Konsumen
          </h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700 ml-5">
            <li>Kamera (digital, video)</li>
            <li>Radio</li>
            <li>DVD player, Blu-ray player</li>
            <li>Stereo sistem</li>
            <li>Speaker</li>
            <li>Televisi</li>
            <li>Alat musik elektronik</li>
          </ul>
          <br />

          <h3 id="peralatan-tik" className="text-lg font-semibold mt-6 mb-2 text-green-700">
            3. Peralatan Teknologi Informasi dan Komunikasi (TIK)
          </h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700 ml-5">
            <li>Ponsel (HP)</li>
            <li>Komputer (PC, laptop)</li>
            <li>Flashdisk</li>
            <li>Printer</li>
            <li>Mesin fotokopi</li>
            <li>Router</li>
            <li>Hard drive eksternal</li>
          </ul>
          <br />

          <h3 id="peralatan-listrik-komponen" className="text-lg font-semibold mt-6 mb-2 text-green-700">
            4. Peralatan Listrik dan Komponennya
          </h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700 ml-5">
            <li>Baterai (berbagai jenis)</li>
            <li>Kabel</li>
            <li>Stopkontak</li>
            <li>Saklar</li>
            <li>Pengisi daya (charger)</li>
            <li>Adaptor listrik</li>
          </ul>
          <br />

          <h3 id="perlengkapan-pencahayaan" className="text-lg font-semibold mt-6 mb-2 text-green-700">
            5. Perlengkapan Pencahayaan
          </h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700 ml-5">
            <li>Bohlam (lampu pijar, fluorescent, LHE/CFL)</li>
            <li>Lampu LED</li>
            <li>Lampu tabung discharge intensitas tinggi (HID)</li>
          </ul>
          <br />

          <h3 id="mainan-alat-olahraga" className="text-lg font-semibold mt-6 mb-2 text-green-700">
            6. Mainan serta Alat Olahraga Elektronik
          </h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700 ml-5">
            <li>Konsol gim (game console)</li>
            <li>Drone</li>
            <li>Treadmill elektronik</li>
            <li>Mainan anak-anak elektronik (misalnya mobil remote control, robot)</li>
          </ul>
          <br />

          <p>
            Pengelompokan ini membantu kita memahami keragaman e-waste dan pentingnya membuangnya ke jalur yang tepat agar bisa
            didaur ulang atau ditangani dengan aman.
          </p>
          <br />

          <div className="flex justify-between mt-14">
            <div className="flex-grow"></div>
            <Link
              href="/guide/sampah-elektronik/penanganan-sampah-elektronik/penanganan"
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
                Pengenalan E-Waste
              </Link>
            </li>
            <li>
              <Link href="#contoh-e-waste-kategori" className="font-bold">
                Contoh E-Waste Berdasarkan Kategori
              </Link>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>
                  <Link href="#peralatan-rumah-tangga">Peralatan Rumah Tangga</Link>
                </li>
                <li>
                  <Link href="#peralatan-hiburan">Peralatan Hiburan & Elektronik Konsumen</Link>
                </li>
                <li>
                  <Link href="#peralatan-tik">Peralatan Teknologi Informasi dan Komunikasi (TIK)</Link>
                </li>
                <li>
                  <Link href="#peralatan-listrik-komponen">Peralatan Listrik dan Komponennya</Link>
                </li>
                <li>
                  <Link href="#perlengkapan-pencahayaan">Perlengkapan Pencahayaan</Link>
                </li>
                <li>
                  <Link href="#mainan-alat-olahraga">Mainan serta Alat Olahraga Elektronik</Link>
                </li>
              </ul>
            </li>
          </ul>
        </Rightbar>
      </div>
    </>
  );
}
