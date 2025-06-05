import Header2 from "@/components/templates/Header2";
import Leftbar from "@/components/templates/Leftbar";
import Rightbar from "@/components/templates/Rightbar";
import Link from "next/link";
import ImageArticle from "@/components/ImageArticle";
import Article from "@/components/Article";
import { Icon } from "@iconify/react";

export default function sampahKaca() {
  return (
    <>
      <Header2 className={"fixed w-full bg-white"} />

      <div className="flex">
        <Leftbar />

        <Article>
          <h1 id="overview" className="text-2xl font-bold mb-5 text-gray-800">
            Mengenal Lebih Dalam Sampah Kaca: Material Abadi yang Penuh Potensi
          </h1>

          <h2 id="pendahuluan" className="text-xl font-semibold mt-8 mb-3 text-green-700">
            Pendahuluan
          </h2>
          <p>
            Kaca adalah jenis material anorganik yang terbuat dari bahan-bahan alami seperti pasir silika, soda ash (natrium
            karbonat), dan batu kapur, yang dilebur pada suhu sangat tinggi. Kaca memiliki karakteristik unik: ia transparan,
            kedap air, tidak berpori, dan sangat inert (tidak bereaksi dengan bahan lain). Sifat-sifat ini menjadikannya pilihan
            ideal untuk kemasan makanan dan minuman, jendela, hingga peralatan laboratorium.
          </p>
          <br />
          <p>
            Salah satu sifat paling penting dari kaca adalah kemampuannya untuk didaur ulang 100% tanpa batas waktu dan tanpa
            penurunan kualitas. Berbeda dengan plastik yang kualitasnya bisa menurun setelah beberapa kali daur ulang, kaca dapat
            dilebur ulang dan dibentuk menjadi produk baru berkali-kali. Ini menjadikan daur ulang kaca sangat penting untuk
            keberlanjutan lingkungan, karena dapat menghemat energi secara signifikan (peleburan kaca daur ulang membutuhkan suhu
            lebih rendah), mengurangi emisi gas rumah kaca, dan melestarikan sumber daya alam yang dibutuhkan untuk pembuatan kaca
            baru.
          </p>
          <br />

          <ImageArticle src="/images/guide/kaca1.jpg" alt="Contoh Produk kaca" />

          <br />

          <h2 id="jenis-umum" className="text-xl font-semibold mt-8 mb-3 text-green-700">
            Jenis Kaca yang Umum Ditemui dalam Sampah
          </h2>
          <p className="text-gray-700 mb-2">
            Secara umum, kaca dibagi berdasarkan warnanya, karena warna kaca tidak dapat diubah selama proses daur ulang.
            Pemisahan warna sangat penting untuk menghasilkan produk daur ulang yang sesuai standar.
          </p>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>
              <strong>Kaca Bening (Clear Glass):</strong> Paling umum ditemukan pada botol air minum, stoples selai, botol sirup,
              atau botol bumbu. Ini adalah jenis kaca yang paling mudah didaur ulang dan paling banyak dicari.
            </li>
            <li>
              <strong>Kaca Cokelat (Amber Glass):</strong> Sering digunakan untuk botol bir, obat-obatan, atau kecap. Warna
              cokelat membantu melindungi isi dari paparan sinar UV.
            </li>
            <li>
              <strong>Kaca Hijau (Green Glass):</strong> Umum ditemukan pada botol minuman beralkohol atau beberapa botol soft
              drink.
            </li>
            <li>
              <strong>Kaca Warna Lain/Campuran:</strong> Beberapa produk mungkin menggunakan kaca dengan warna lain seperti biru
              atau hitam. Kaca-kaca ini seringkali didaur ulang bersama kaca hijau atau sebagai campuran kaca berwarna lainnya,
              tergantung pada fasilitas daur ulang.
            </li>
          </ol>
          <br />

          <ImageArticle src="/images/guide/kaca2.jpg" alt="Contoh Produk kaca" />
       
          <br />

          <h2 id="jenis-tidak-didaur-ulang" className="text-xl font-semibold mt-8 mb-3 text-green-700">
            Jenis Kaca yang Tidak Dapat Didaur Ulang Melalui Program Standar
          </h2>
          <p className="text-gray-700 mb-2">
            Penting untuk diingat bahwa tidak semua benda berbahan dasar kaca bisa didaur ulang dengan proses yang sama karena
            perbedaan komposisi kimia atau titik lebur:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>
              <strong>Kaca Keramik/Peralatan Masak Kaca (misalnya Pyrex, mangkuk kaca tahan panas):</strong> Mengandung bahan
              tambahan untuk ketahanan panas yang mengubah titik leburnya.
            </li>
            <li>
              <strong>Kaca Jendela, Kaca Cermin, Kaca Otomotif:</strong> Sering mengandung lapisan pelindung, pigmen, atau
              material tambahan lain yang mengganggu proses daur ulang kaca standar.
            </li>
            <li>
              <strong>Bola Lampu (Pijar, Fluorescent, LED):</strong> Mengandung filamen logam, gas, atau zat kimia yang berbahaya
              (misalnya merkuri pada lampu neon), dan memiliki komposisi kaca yang berbeda.
            </li>
            <li>
              <strong>Keramik dan Porselen (piring, gelas, vas bunga pecah):</strong> Meskipun mirip kaca, ini adalah bahan yang
              berbeda dengan titik lebur dan komposisi kimia yang berbeda.
            </li>
            <li>
              <strong>Kaca Kristal:</strong> Mengandung timbal.
            </li>
          </ol>
          <br />

          <h2 id="cara-penanganan" className="text-xl font-semibold mt-8 mb-3 text-green-700">
            Cara Penanganan Sampah Kaca oleh Individu
          </h2>
          <p className="text-gray-700 mb-2">
            Penanganan yang benar di tingkat rumah tangga adalah kunci keberhasilan daur ulang kaca:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>
              <strong>Kosongkan dan Bilas Bersih:</strong> Pastikan botol atau stoples kaca benar-benar kosong dari sisa makanan
              atau minuman. Bilas bersih dengan air untuk menghilangkan residu yang dapat menarik hama atau menyebabkan
              kontaminasi dalam proses daur ulang. Tidak perlu menggunakan sabun.
            </li>
            <li>
              <strong>Lepas Tutup dan Label (Opsional):</strong> Idealnya, lepas semua tutup (plastik, logam) dan label kertas
              dari botol/stoples. Meskipun banyak fasilitas daur ulang modern memiliki sistem untuk memisahkan ini, melakukannya
              akan sangat membantu proses. Tutup logam dan plastik dapat didaur ulang secara terpisah.
            </li>
            <li>
              <strong>Pisahkan Berdasarkan Warna (Jika Diminta):</strong> Jika fasilitas daur ulang atau bank sampah di daerahmu
              memiliki tempat sampah terpisah untuk kaca bening, cokelat, dan hijau, maka pisahkan berdasarkan warna. Pemisahan
              warna ini sangat penting untuk kualitas produk daur ulang akhir.
            </li>
            <li>
              <strong>Jangan Memecahkan Kaca:</strong> Hindari memecahkan kaca sendiri sebelum membuangnya. Pecahan kaca sangat
              berbahaya dan sulit ditangani oleh pekerja daur ulang. Biarkan proses penghancuran dilakukan oleh mesin khusus di
              fasilitas daur ulang. Jika kaca sudah pecah, kumpulkan dengan sangat hati-hati, bungkus dalam koran tebal atau
              kantong berlapis, beri label "Kaca Pecah", dan buang ke tempat sampah residu (jika tidak ada program khusus kaca
              pecah) untuk keselamatan pekerja pengumpul sampah.
            </li>
            <li>
              <strong>Serahkan ke Jalur yang Benar:</strong> Kumpulkan kaca yang sudah bersih dan terpilah, lalu serahkan ke bank
              sampah, pusat daur ulang khusus kaca, atau pengepul yang menerima kaca. Jangan pernah membuang kaca ke tempat sampah
              umum yang bercampur, apalagi ke tanah atau air.
            </li>
          </ol>
          <br />

          <h2 id="proses-daur-ulang-industri" className="text-xl font-semibold mt-8 mb-3 text-green-700">
            Proses Pengolahan/Daur Ulang Kaca Industri
          </h2>
          <p className="text-gray-700 mb-2">
            Proses daur ulang kaca di industri melibatkan beberapa tahapan untuk mengubah pecahan kaca menjadi material baru:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>
              <strong>Pengumpulan & Penyortiran Awal:</strong> Kaca dikumpulkan dari berbagai sumber (rumah tangga, industri,
              restoran) dan menjalani penyortiran awal untuk memisahkan material non-kaca dan memisahkan berdasarkan warna.
            </li>
            <li>
              <strong>Pembersihan & Penghancuran:</strong> Kaca yang sudah disortir kemudian dibersihkan dari sisa kontaminan
              (misalnya sisa label, tutup, logam). Setelah bersih, kaca dimasukkan ke mesin penghancur khusus yang mengubahnya
              menjadi potongan-potongan kecil yang disebut cullet.
            </li>
            <li>
              <strong>Pemurnian & Pengayak:</strong> Cullet kemudian melewati proses pemurnian lebih lanjut, termasuk penyaringan
              magnetik untuk menghilangkan logam, pemisahan udara untuk menghilangkan kertas atau plastik ringan, dan pemisahan
              optik untuk menghilangkan material non-kaca lainnya atau warna yang tidak diinginkan. Cullet juga diayak untuk
              mendapatkan ukuran yang seragam.
            </li>
            <li>
              <strong>Peleburan:</strong> Cullet yang bersih dan murni kemudian dicampur dengan bahan baku mentah dalam proporsi
              tertentu (terkadang hingga 95% cullet dan hanya 5% bahan mentah baru). Campuran ini dimasukkan ke dalam tungku
              peleburan yang sangat panas (sekitar 1.500-1.600°C). Penggunaan cullet dalam jumlah besar menghemat energi hingga
              20-30% karena cullet meleleh pada suhu yang lebih rendah dan lebih cepat dibandingkan bahan baku mentah.
            </li>
            <li>
              <strong>Pembentukan Produk Baru:</strong> Kaca cair kemudian dialirkan ke mesin pembentuk yang akan mencetaknya
              menjadi produk kaca baru seperti botol, stoples, gelas, serat kaca (untuk isolasi), atau bahkan material konstruksi
              seperti ubin.
            </li>
            <li>
              <strong>Pendinginan & Uji Kualitas:</strong> Produk kaca yang baru dibentuk didinginkan secara bertahap dan
              menjalani pemeriksaan kualitas sebelum dikemas dan didistribusikan.
            </li>
          </ol>
          <br />
          <p>
            Daur ulang kaca adalah salah satu cerita sukses terbesar dalam pengelolaan limbah. Dengan partisipasi aktif kita dalam
            memilah kaca dengan benar, kita dapat terus mendukung siklus tak terbatas ini, menciptakan lingkungan yang lebih
            bersih dan sumber daya yang lebih lestari.
          </p>
          <br />

          <div className="flex justify-between mt-14">
            <Link
              href="/guide/sampah-anorganik/sampah-logam/seng-timah"
              className="py-3 px-5 bg-green-200 rounded items-center flex gap-2 hover:bg-green-300 active:bg-green-300"
            >
              <Icon icon="icon-park-solid:back" />
              <p>Sebelumnya</p>
            </Link>
            <Link
              href="/guide/sampah-anorganik/sampah-kertas"
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
              <Link href="#jenis-umum" className="hover:font-semibold">
                Jenis Kaca yang Umum Ditemui dalam Sampah
              </Link>
            </li>
            <li>
              <Link href="#jenis-tidak-didaur-ulang" className="hover:font-semibold">
                Jenis Kaca yang Tidak Dapat Didaur Ulang Melalui Program Standar
              </Link>
            </li>
            <li>
              <Link href="#cara-penanganan" className="hover:font-semibold">
                Cara Penanganan Sampah Kaca oleh Individu
              </Link>
            </li>
            <li>
              <Link href="#proses-daur-ulang-industri" className="hover:font-semibold">
                Proses Pengolahan/Daur Ulang Kaca Industri
              </Link>
            </li>
          </ul>
        </Rightbar>
      </div>
    </>
  );
}