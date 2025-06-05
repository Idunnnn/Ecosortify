import Header2 from "@/components/templates/Header2";
import Leftbar from "@/components/templates/Leftbar";
import Rightbar from "@/components/templates/Rightbar";
import Link from "next/link";
import ImageArticle from "@/components/ImageArticle";
import Article from "@/components/Article";
import { Icon } from "@iconify/react";

export default function PlastikTipe67() {
  return (
    <>
      <Header2 className={"fixed w-full bg-white"} />

      <div className="flex">
        <Leftbar />

        <Article>
          <h1 id="overview" className="text-2xl font-bold mb-5 text-gray-800">
            Plastik Tipe 6 dan Tipe 7
          </h1>
          <p>
            Tidak semua jenis plastik diciptakan sama dalam hal kemampuan daur ulang. Plastik biasanya dikelompokkan berdasarkan
            Resin Identification Code (RIC) berupa angka 1 hingga 7. Plastik Tipe 6 dan 7 adalah dua jenis yang paling menantang
            dalam pengelolaan limbah karena karakteristiknya yang sulit didaur ulang secara ekonomis maupun teknis.
          </p>
          <br />

          <ImageArticle src="/images/guide/plastik67.jpg" alt="Contoh Produk sampah plastik tipe 6-7" />
         
          <br />

          <h2 id="plastik-tipe-6" className="text-xl font-semibold mt-8 mb-3 text-green-700">
            Plastik Tipe 6 (Polistirena - PS)
          </h2>
          <h3 id="karakteristik-tipe-6" className="text-lg font-semibold mt-4 mb-2 text-gray-800">
            Karakteristik:
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-5">
            <li>Umumnya getas dan ringan, sering digunakan dalam bentuk busa (styrofoam).</li>
          </ul>
          <h3 id="mengapa-sulit-didaur-ulang-tipe-6" className="text-lg font-semibold mt-4 mb-2 text-gray-800">
            Mengapa Sulit Didaur Ulang:
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-5">
            <li>Volumenya besar tapi massanya kecil, sehingga tidak ekonomis untuk diangkut.</li>
            <li>
              Proses daur ulangnya memerlukan teknologi khusus dan cenderung menghasilkan produk daur ulang dengan kualitas
              rendah.
            </li>
            <li>Styrene (bahan penyusunnya) berpotensi berbahaya.</li>
          </ul>
          <h3 id="contoh-spesifik-tipe-6" className="text-lg font-semibold mt-4 mb-2 text-gray-800">
            Contoh Spesifik:
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-5">
            <li>Wadah makanan/minuman styrofoam sekali pakai (gelas, piring, kotak makan).</li>
            <li>Packing foam (busa pelindung barang elektronik).</li>
            <li>Sendok/garpu plastik sekali pakai yang getas.</li>
            <li>Wadah yogurt atau dessert tertentu.</li>
          </ul>
          <br />

          <h2 id="plastik-tipe-7" className="text-xl font-semibold mt-8 mb-3 text-green-700">
            Plastik Tipe 7 (Jenis Lain-lain/Campuran - Other)
          </h2>
          <h3 id="karakteristik-tipe-7" className="text-lg font-semibold mt-4 mb-2 text-gray-800">
            Karakteristik:
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-5">
            <li>
              Kategori ini mencakup semua jenis plastik yang tidak termasuk dalam tipe 1-6, atau merupakan campuran dari beberapa
              jenis plastik.
            </li>
            <li>Contoh paling umum adalah Polikarbonat (PC).</li>
          </ul>
          <h3 id="mengapa-sulit-didaur-ulang-tipe-7" className="text-lg font-semibold mt-4 mb-2 text-gray-800">
            Mengapa Sulit Didaur Ulang:
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-5">
            <li>Karena beragamnya jenis plastik di kategori ini, sulit untuk dipisahkan dan diproses secara seragam.</li>
            <li>Polikarbonat, khususnya, sering mengandung Bisfenol A (BPA) yang kontroversial.</li>
            <li>Banyak fasilitas daur ulang tidak memiliki teknologi untuk memproses jenis plastik ini secara efisien.</li>
          </ul>
          <h3 id="contoh-spesifik-tipe-7" className="text-lg font-semibold mt-4 mb-2 text-gray-800">
            Contoh Spesifik:
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-5">
            <li>Galon air minum isi ulang (umumnya PC).</li>
            <li>Beberapa botol bayi (meskipun banyak yang sudah beralih ke material bebas BPA).</li>
            <li>Casing ponsel.</li>
            <li>Lensa kacamata.</li>
            <li>Beberapa jenis komponen elektronik lainnya.</li>
          </ul>
          <br />

          <h2 id="cara-penanganan-individu" className="text-xl font-semibold mt-8 mb-3 text-green-700">
            Cara Penanganan oleh Individu (Rumah Tangga):
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-5">
            <li>
              <strong>Minimalkan Penggunaan:</strong> Sebisa mungkin, hindari membeli produk dengan kemasan plastik tipe 6 dan 7.
              Pilih alternatif yang lebih mudah didaur ulang (tipe 1, 2, 4, 5).
            </li>
            <li>
              <strong>Buang ke Sampah Residu:</strong> Karena sebagian besar fasilitas daur ulang tidak menerima plastik tipe 6
              dan 7, buanglah jenis plastik ini ke tempat sampah residu/umum.
            </li>
            <li>
              <strong>Cari Program Khusus:</strong> Beberapa komunitas atau LSM mungkin memiliki program khusus untuk mengumpulkan
              styrofoam atau plastik tipe 7, meskipun jarang.
            </li>
          </ul>
          <br />

          <h2 id="proses-pengolahan-fasilitas" className="text-xl font-semibold mt-8 mb-3 text-green-700">
            Proses Pengolahan/Pemusnahan (Fasilitas Pengelola Sampah):
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-5">
            <li>
              <strong>Penimbunan di TPA:</strong> Ini adalah metode paling umum untuk plastik tipe 6 dan 7 yang tidak dapat didaur
              ulang.
            </li>
            <li>
              <strong>Insinerasi:</strong> Plastik tipe 6 dan 7 dapat dibakar di insinerator untuk mengurangi volumenya, dan dalam
              beberapa kasus, menghasilkan energi. Namun, perlu kontrol emisi yang ketat.
            </li>
            <li>
              <strong>Daur Ulang Spesialis (Sangat Terbatas):</strong> Ada beberapa perusahaan atau start-up yang mengembangkan
              teknologi daur ulang spesifik untuk PS atau PC, namun ini belum masif dan belum menjadi standar di banyak negara.
            </li>
          </ul>
          <br />

          <div className="flex justify-between mt-14">
            <Link
              href="/guide/sampah-residu-b3/jenis-sampah-residu-b3/sampah-komposit"
              className="py-3 px-5 bg-green-200 rounded items-center flex gap-2 hover:bg-green-300 active:bg-green-300"
            >
              <Icon icon="icon-park-solid:back" />
              <p>Sebelumnya</p>
            </Link>
            <Link
              href="/guide/sampah-residu-b3/jenis-sampah-residu-b3/kain-terkontaminasi"
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
                Plastik Tipe 6 dan Tipe 7
              </Link>
            </li>
            <li>
              <Link href="#plastik-tipe-6" className="hover:text-green-700">
                Plastik Tipe 6 (Polistirena - PS)
              </Link>
            </li>
            <li className="ml-5">
              <Link href="#karakteristik-tipe-6" className="hover:text-green-700">
                Karakteristik Tipe 6
              </Link>
            </li>
            <li className="ml-5">
              <Link href="#mengapa-sulit-didaur-ulang-tipe-6" className="hover:text-green-700">
                Mengapa Sulit Didaur Ulang Tipe 6
              </Link>
            </li>
            <li className="ml-5">
              <Link href="#contoh-spesifik-tipe-6" className="hover:text-green-700">
                Contoh Spesifik Tipe 6
              </Link>
            </li>
            <li>
              <Link href="#plastik-tipe-7" className="hover:text-green-700">
                Plastik Tipe 7 (Jenis Lain-lain/Campuran)
              </Link>
            </li>
            <li className="ml-5">
              <Link href="#karakteristik-tipe-7" className="hover:text-green-700">
                Karakteristik Tipe 7
              </Link>
            </li>
            <li className="ml-5">
              <Link href="#mengapa-sulit-didaur-ulang-tipe-7" className="hover:text-green-700">
                Mengapa Sulit Didaur Ulang Tipe 7
              </Link>
            </li>
            <li className="ml-5">
              <Link href="#contoh-spesifik-tipe-7" className="hover:text-green-700">
                Contoh Spesifik Tipe 7
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
