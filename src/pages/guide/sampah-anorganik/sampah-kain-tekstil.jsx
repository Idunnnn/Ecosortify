import Header2 from "@/components/templates/Header2";
import Leftbar from "@/components/templates/Leftbar";
import Rightbar from "@/components/templates/Rightbar";
import Link from "next/link";
import ImageArticle from "@/components/ImageArticle";
import Article from "@/components/Article";
import { Icon } from "@iconify/react";

export default function sampahKainTekstil() {
  return (
    <>
      <Header2 className={"fixed w-full bg-white"} />

      <div className="flex">
        <Leftbar />

        <Article>
          <h1 id="overview" className="text-2xl font-bold mb-5 text-gray-800">
            Mengenal Lebih Dalam Sampah Kain/Tekstil: Dari Lemari ke Lingkungan
          </h1>

          <h2 id="pendahuluan" className="text-xl font-semibold mt-8 mb-3 text-green-700">
            Pendahuluan
          </h2>
          <p>
            Sampah kain atau tekstil adalah segala jenis material berupa serat (alami maupun sintetis) yang tidak lagi digunakan,
            rusak, atau sisa dari proses produksi. Industri fesyen dan tekstil adalah salah satu industri terbesar di dunia, namun
            juga salah satu penghasil limbah terbesar dan paling mencemari. Pakaian, sprei, handuk, karpet, hingga sisa potongan
            kain dari garmen, semuanya berkontribusi pada timbulan sampah tekstil yang terus meningkat.
          </p>
          <br />
          <p>
            Meskipun terbuat dari serat, tidak semua tekstil mudah terurai secara alami, terutama yang berbahan sintetis. Produksi
            tekstil juga membutuhkan sumber daya yang besar, seperti air, energi, dan bahan kimia. Oleh karena itu, pengelolaan
            sampah tekstil yang tepat sangat krusial untuk mengurangi jejak lingkungan kita, mulai dari mengurangi konsumsi air
            dan energi, hingga meminimalkan pencemaran lahan dan air akibat timbunan sampah.
          </p>
          <br />

          <ImageArticle src="/images/guide/kain1.jpg" alt="Contoh Produk kain" />

          <br />

          <p className="font-semibold text-green-700">Limbah tekstil ini menimbulkan masalah lingkungan serius:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-5">
            <li>
              Memakan banyak ruang di TPA dan membutuhkan waktu sangat lama untuk terurai, terutama serat sintetis yang bisa
              bertahan ratusan tahun.
            </li>
            <li>Melepaskan gas metana saat terurai di TPA (untuk serat alami dalam kondisi anaerobik).</li>
            <li>
              Mencemari air dan tanah karena pewarna dan bahan kimia berbahaya yang digunakan dalam proses produksi tekstil.
            </li>
            <li>Menghasilkan mikroplastik dari serat sintetis saat dicuci atau terurai.</li>
            <li>Pemborosan sumber daya (air, energi, lahan) yang sangat besar dalam proses produksi pakaian baru.</li>
          </ul>
          <br />

          <h2 id="jenis-tekstil" className="text-xl font-semibold mt-8 mb-3 text-green-700">
            Jenis-Jenis Sampah Tekstil: Natural vs. Sintetis
          </h2>
          <p className="text-gray-700 mb-2">
            Memahami jenis serat sangat penting karena memengaruhi cara penanganan dan potensi daur ulangnya:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>
              <strong>Serat Alami:</strong> Berasal dari tumbuhan (misalnya katun, linen, rami) atau hewan (misalnya wol, sutra).
              Serat alami umumnya lebih mudah terurai secara biologis dan dapat didaur ulang menjadi serat baru atau bahan
              komposit.
              <ul className="list-disc list-inside ml-5 space-y-1">
                <li>Contoh: Kaos katun, celana jins denim, kemeja linen, sweter wol.</li>
              </ul>
            </li>
            <li>
              <strong>Serat Sintetis:</strong> Dibuat melalui proses kimia dari bahan baku non-terbarukan (misalnya poliester,
              nilon, akrilik, spandeks). Serat sintetis umumnya lebih tahan lama, tahan kerut, dan tahan air, namun sangat sulit
              terurai di alam dan dapat melepaskan mikroplastik.
              <ul className="list-disc list-inside ml-5 space-y-1">
                <li>Contoh: Pakaian olahraga poliester, jaket nilon, legging spandeks.</li>
              </ul>
            </li>
            <li>
              <strong>Serat Campuran (Blends):</strong> Banyak produk tekstil modern merupakan campuran dari serat alami dan
              sintetis (misalnya katun-poliester). Jenis ini menjadi tantangan terbesar dalam daur ulang karena sulit memisahkan
              serat-seratnya.
            </li>
          </ol>
          <br />

          <ImageArticle src="/images/guide/kain2.jpg" alt="Contoh Produk kain" />

          <br />

          <h2 id="tidak-didaur-ulang" className="text-xl font-semibold mt-8 mb-3 text-green-700">
            Jenis Tekstil yang Tidak Dapat Didaur Ulang Melalui Program Standar
          </h2>
          <p className="text-gray-700 mb-2">
            Tidak semua tekstil bisa didaur ulang dengan mudah, terutama jika sudah terkontaminasi atau memiliki komposisi yang
            kompleks:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>
              <strong>Tekstil Terkontaminasi Berat:</strong> Pakaian yang sangat kotor dengan minyak, cat, bahan kimia berbahaya,
              atau bahan biologis (misalnya popok kain bekas, kain lap bekas oli).
            </li>
            <li>
              <strong>Tekstil Berlapis atau Bervalve:</strong> Pakaian dengan lapisan kedap air, ritsleting metal besar, kancing
              yang tidak bisa dilepas, atau hiasan non-tekstil yang sulit dipisahkan.
            </li>
            <li>
              <strong>Serat Campuran yang Kompleks:</strong> Campuran serat alami dan sintetis yang tidak ada teknologi
              pemisahannya yang efisien.
            </li>
            <li>
              <strong>Kain Lapisan Karpet Busa:</strong> Seringkali terlalu kotor dan sulit dipisahkan dari busa.
            </li>
          </ol>
          <br />

          <h2 id="cara-penanganan" className="text-xl font-semibold mt-8 mb-3 text-green-700">
            Cara Penanganan Sampah Kain/Tekstil oleh Individu
          </h2>
          <p className="text-gray-700 mb-2">
            Sebagai individu, kita memiliki peran penting dalam memperpanjang usia pakai tekstil dan memastikan penanganannya yang
            benar:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>
              <strong>Prioritaskan Donasi atau Penjualan:</strong> Jika pakaian atau tekstilmu masih dalam kondisi baik dan layak
              pakai, donasikan ke panti asuhan, yayasan sosial, atau jual melalui platform thrift shop. Ini adalah opsi terbaik
              karena memperpanjang siklus hidup produk.
            </li>
            <li>
              <strong>Perbaiki (Repair) atau Upcycle:</strong> Sebelum membuang, pertimbangkan untuk memperbaiki pakaian yang
              rusak ringan (misalnya menjahit kancing, menambal robekan kecil). Jika tidak bisa diperbaiki, cobalah mengubahnya
              menjadi barang lain yang berguna (upcycling), seperti kain lap, tas belanja, atau karpet kecil.
            </li>
            <li>
              <strong>Pisahkan Berdasarkan Kondisi dan Material:</strong> Jika sudah tidak bisa dipakai lagi, pisahkan tekstil
              berdasarkan kondisinya (masih layak pakai untuk daur ulang serat vs. benar-benar rusak) dan jika memungkinkan,
              berdasarkan jenis serat (katun murni, poliester murni, dll.). Ini memudahkan proses daur ulang di tingkat industri.
            </li>
            <li>
              <strong>Kumpulkan di Wadah Khusus:</strong> Kumpulkan sampah tekstil kering dan bersih dalam wadah terpisah, bukan
              dicampur dengan sampah organik atau sampah basah lainnya.
            </li>
            <li>
              <strong>Serahkan ke Jalur Daur Ulang Tekstil:</strong> Cari program daur ulang tekstil di kotamu. Beberapa kota atau
              organisasi lingkungan memiliki titik pengumpulan khusus pakaian bekas, atau bekerjasama dengan perusahaan daur ulang
              tekstil. Ada juga beberapa merek fesyen yang menerima kembali pakaian lama untuk didaur ulang. Jangan buang tekstil
              ke tempat sampah umum jika ada opsi daur ulang.
            </li>
          </ol>
          <p className="mt-2 text-gray-700">
            <strong>Penting:</strong> Selalu cuci bersih dan keringkan pakaian atau kain sebelum didonasikan atau diserahkan untuk
            didaur ulang. Ini membantu menjaga kebersihan dan mencegah kerusakan material.
          </p>
          <br />

          <h2 id="proses-daur-ulang-industri" className="text-xl font-semibold mt-8 mb-3 text-green-700">
            Proses Pengolahan/Daur Ulang Tekstil Industri
          </h2>
          <p className="text-gray-700 mb-2">
            Daur ulang tekstil adalah proses kompleks yang melibatkan beberapa tahapan, tergantung pada jenis serat dan kondisi
            material:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>
              <strong>Pengumpulan & Penyortiran:</strong> Ini adalah tahap paling krusial. Tekstil yang terkumpul disortir secara
              manual atau otomatis berdasarkan kondisi (dapat dipakai lagi, untuk wiping cloths, untuk daur ulang serat), jenis
              serat (katun, poliester, wol, campuran), dan warna. Pemisahan warna sangat penting karena menghindari kebutuhan
              pewarnaan ulang yang intensif.
            </li>
            <li>
              <strong>Pembersihan:</strong> Tekstil yang akan didaur ulang dibersihkan dari kotoran dan komponen non-tekstil
              seperti ritsleting, kancing, atau label yang tidak bisa dilepas.
            </li>
            <li>
              <strong>Pencacahan (Shredding) & Penguraian Serat:</strong> Tekstil dicacah menjadi potongan-potongan kecil,
              kemudian diurai kembali menjadi serat-serat individu (fiber regeneration) menggunakan mesin khusus. Untuk serat
              alami, proses ini bisa menghasilkan serat yang lebih pendek. Untuk serat sintetis, mungkin melibatkan proses kimia.
            </li>
            <li>
              <strong>Pencampuran & Pemintalan (untuk Serat Baru):</strong> Serat yang telah diurai (baik murni atau dicampur
              dengan serat virgin untuk meningkatkan kualitas) kemudian diproses kembali melalui pemintalan untuk membuat benang
              baru. Benang ini selanjutnya dapat ditenun atau dirajut menjadi kain baru.
            </li>
            <li>
              <strong>Penggunaan Kembali Material Hasil Daur Ulang:</strong>
              <ul className="list-disc list-inside ml-5 space-y-1">
                <li>
                  Serat Hasil Daur Ulang: Dapat digunakan untuk membuat pakaian baru, benang untuk kain industri, material isolasi
                  (misalnya insulasi bangunan), atau stuffing untuk furnitur dan bantal.
                </li>
                <li>
                  Kain Lap (Wiping Cloths): Tekstil yang masih layak namun tidak bisa didaur ulang menjadi benang seringkali
                  diolah menjadi kain lap industri.
                </li>
                <li>
                  Material Komposit: Tekstil dapat dicampur dengan bahan lain (misalnya resin) untuk membuat material komposit
                  untuk industri otomotif, konstruksi, atau furnitur.
                </li>
                <li>
                  Energi dari Limbah (WTE): Sebagai pilihan terakhir, jika tekstil tidak dapat didaur ulang, kadang digunakan
                  sebagai sumber energi melalui pembakaran di fasilitas Waste-to-Energy, meskipun ini bukan solusi ideal.
                </li>
              </ul>
            </li>
          </ol>
          <br />
          <p>
            Daur ulang tekstil masih menjadi tantangan besar, terutama untuk serat campuran. Namun, dengan semakin berkembangnya
            teknologi dan kesadaran masyarakat, diharapkan akan lebih banyak limbah tekstil yang dapat dipulihkan dan digunakan
            kembali, mengurangi dampak industri fesyen pada planet kita.
          </p>
          <br />

          <div className="flex justify-between mt-14">
            <Link
              href="/guide/sampah-anorganik/sampah-kertas"
              className="py-3 px-5 bg-green-200 rounded items-center flex gap-2 hover:bg-green-300 active:bg-green-300"
            >
              <Icon icon="icon-park-solid:back" />
              <p>Sebelumnya</p>
            </Link>
            <Link
              href="/guide/sampah-anorganik/sampah-karet"
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
              <Link href="#pendahuluan" className="hover:font-semibold">
                Pendahuluan
              </Link>
            </li>
            <li>
              <Link href="#jenis-tekstil" className="hover:font-semibold">
                Jenis-Jenis Sampah Tekstil
              </Link>
            </li>
            <li>
              <Link href="#tidak-didaur-ulang" className="hover:font-semibold">
                Jenis Tekstil yang Tidak Dapat Didaur Ulang
              </Link>
            </li>
            <li>
              <Link href="#cara-penanganan" className="hover:font-semibold">
                Cara Penanganan Sampah Kain/Tekstil oleh Individu
              </Link>
            </li>
            <li>
              <Link href="#proses-daur-ulang-industri" className="hover:font-semibold">
                Proses Pengolahan/Daur Ulang Tekstil Industri
              </Link>
            </li>
          </ul>
        </Rightbar>
      </div>
    </>
  );
}
