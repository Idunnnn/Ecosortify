import Header2 from "@/components/templates/Header2";
import Leftbar from "@/components/templates/Leftbar";
import Rightbar from "@/components/templates/Rightbar";
import Link from "next/link";
import { Icon } from "@iconify/react";
import ImageArticle from "@/components/ImageArticle";
import Article from "@/components/Article";

export default function ApaItuSampahPage() {
  return (
    <>
      <Header2 className={"fixed w-full bg-white"} />

      <div className="flex">
        <Leftbar />

        <Article>
          <h1 className="text-2xl font-bold mb-5 text-gray-800">Apa itu sampah?</h1>
          <p>
            Pengertian sampah pada umumnya merupakan sisa atau hasil dari kegiatan manusia sehari-hari yang tidak lagi bisa
            dimanfaatkan. Dapat ditemui di berbagai tempat dengan jenis dan wujud yang berbeda-beda.{" "}
            <Link href="/guide/organik" className="text-blue-700">
              Sampah organik
            </Link>{" "}
            dan{" "}
            <Link href="/guide/sampah-anorganik" className="text-blue-700">
              anorganik
            </Link>{" "}
            adalah 2 jenis sampah yang sering dibahas pada umumnya.
          </p>
          <ImageArticle src="/images/guide/manajemen-sampah.jpg" alt="manajemen-sampah" />

          <p>
            Materi tentang sampah sangat penting untuk di ketahui. Selama manusia masih beraktivitas, sampah menjadi salah satu
            hal yang akan konsisten dihasilkan dan terus bertambah. Untuk itu diperlukan <strong>upaya penanganan sampah</strong>{" "}
            secara tepat dan bertanggung jawab agar volume sampah dapat dikurangi dan mencegahnya menumpuk mencemari lingkungan.
          </p>
          <br />
          <p>
            Lalu, bagaimana sebenarnya sampah didefinisikan atau diartikan? Apa saja ya hal terkait sampah yang perlu banyak orang
            ketahui?
          </p>
          <br />
          <p>
            Dan yang terpenting, apa saja jenis jenis sampah, apa definisi secara umum, apa saja macam macam sampah yang terkait
            material? Simak artikel ini hingga selesai yuk!
          </p>
          <h2 id="pengertian-apa-itu-sampah" className="text-xl mb-4 font-bold text-gray-800 my-8">
            1. Pengertian Apa Itu Sampah
          </h2>
          <p>
            Dilihat dari wujudnya, sampah seringkali diartikan sebagai bahan atau material yang telah selesai digunakan dan tidak
            lagi memberi manfaat. Contohnya seperti sisa makanan berupa tulang yang bukan suatu hal yang penting lagi bagi
            manusia. Berikut adalah definisi sampah dari berbagai sumber.
          </p>
          <br />
          <p>
            <strong className="text-gray-700"> Menurut World Health Organization (WHO)</strong>, sampah adalah sesuatu yang tidak
            digunakan, tidak dipakai, tidak disenangi, atau sesuatu yang dibuang yang berasal dari kegiatan manusia dan tidak
            terjadi dengan sendirinya.
          </p>
          <br />
          <p>
            Lalu berdasarkan <strong className="text-gray-700">UU Nomor 8 Tahun 2008 tentang Pengelolaan Sampah</strong>, sampah
            adalah sisa kegiatan sehari-hari manusia atau proses alam yang berbentuk padat atau semi padat, berupa zat organik
            atau anorganik, dan bersifat dapat terurai atau tidak dapat terurai, yang dianggap sudah tidak berguna lagi dan
            dibuang ke lingkungan.
          </p>
          <br />
          <p>
            Dilihat dari definisi di atas, dapat disimpulkan definisi sampah adalah sisa dari kegiatan sehari-hari manusia berupa
            material tertentu yang tidak lagi bisa dimanfaatkan sehingga harus dibuang dan dimusnahkan. Penanganan akhir sampah
            dilakukan bergantung pada karakteristik dan kategori setiap jenis sampah.
          </p>
          <h2 id="klasifikasi-jenis-jenis-sampah" className="text-xl font-bold mb-4 text-gray-800 my-8">
            2. Klasifikasi Jenis-Jenis Sampah
          </h2>
          <p>
            Sebelum dapat memahami cara mengelola sampah dengan tepat dan bertanggung jawab, hal penting yang perlu diketahui
            adalah macam macam sampah, klasifikasi perbedaan dan karakteristik dari setiap jenis sampah yang ada. Tidak hanya
            terdiri dari sampah organik dan anorganik, sampah juga dapat dibedakan berdasarkan kategori tertentu. Berikut adalah
            uraian macam-macam sampah berdasarkan sifat, sumber, dan waktunya.
          </p>
          <h3 id="macam-macam-sampah-berdasarkan-sifatnya" className="text-xl font-bold mb-4 text-gray-800 my-8">
            Macam-macam Sampah Berdasarkan Sifatnya
          </h3>
          <p>
            Berdasarkan sifatnya, sampah dapat diklasifikasikan ke dalam tiga jenis yaitu sampah organik, anorganik, dan sampah
            B3.
          </p>
          <h2 id="sampah-organik" className="text-xl font-bold mb-4 text-gray-800 my-8">
            1. Sampah Organik
          </h2>
          <p>
            <Link href="/guide/sampah-organik" className="text-blue-700">
              Sampah organik
            </Link>{" "}
            merupakan sampah yang berasal dari sisa-sisa makhluk hidup, baik hewan, tanaman, maupun manusia yang dapat terurai
            secara alamiah di alam (biodegradable).
          </p>

          <ImageArticle src="/images/guide/sampah-organik.jpg" alt="sampah-organik" />

          <p>
            Biasanya sampah jenis ini biasa kita kenal dengan sampah sisa makanan, potongan buah dan sayur, sampah dedaunan,
            pepohonan, dan rumput-rumputan, sekam padi, kotoran hewan ternak, juga potongan kuku dan helai rambut yang terbuang ke
            tanah.
          </p>
          <br />
          <p>
            Beberapa diantaranya dapat dimanfaatkan menjadi hal-hal lain, seperti kompos, ecoenzym, diolah menggunakan lubang
            biopori, dan menjadi pakan ternak bagi Black Soldier Fly atau lalat BSF.
          </p>
          <br />
          <p>
            Khusus untuk sampah tertentu, seperti daging, batok kelapa, kotoran, dan lainnya tidak dapat diolah atau dimanfaatkan
            kembali dengan alasan kesehatan atau karakteristiknya yang butuh waktu lama untuk terurai.{" "}
          </p>
          <br />
          <p>
            Sampah organik bisa dibedakan lagi secara lebih mendetail ke dalam dua jenis, yaitu sampah organik kering dan sampah
            organik basah. Sampah organik kering punya kandungan air yang lebih sedikit dibandingkan sampah organik basah. Oleh
            karena itu, biasanya sampah organik basah akan lebih cepat membusuk sehingga hancur lebih dulu.
          </p>
          <h2 id="sampah-anorganik" className="text-xl font-bold mb-4 text-gray-800 my-8">
            2. Sampah Anorganik
          </h2>
          <p>
            Berbeda dari sampah organik,{" "}
            <Link href="/guide/sampah-anorganik" className="text-blue-700">
              {" "}
              sampah anorganik
            </Link>{" "}
            tidak dapat terurai secara alami (undegradable) karena materialnya tidak berasal dari alam melainkan hasil olahan dari
            bahan sintetik tertentu.
          </p>

          <ImageArticle src="/images/guide/sampah-anorganik.jpg" alt="sampah-anorganik" />

          <p>
            Beberapa contoh sampah anorganik yang sering dijumpai sehari-hari misalnya seperti kantong plastik, kaleng, aluminium,
            botol kaca, styrofoam, karton, tekstil dan masih banyak lagi. Barang-barang dengan material tersebut tidak dapat
            membusuk dengan bantuan alam, untuk itu harus diolah kembali oleh manusia atau mesin agar bisa dimanfaatkan menjadi
            produk baru.
          </p>

          <h2 id="sampah-bahan-berbahaya-beracun-(B3)" className="text-xl font-bold mb-4 text-gray-800 my-8">
            3. Sampah Bahan Berbahaya Beracun (B3)
          </h2>
          <p>
            Selain dua jenis sampah di atas, sampah B3 adalah jenis sampah yang memiliki sifat khusus dan perlu ditangani secara
            khusus pula.
          </p>

          <ImageArticle src="/images/guide/sampah-B3.jpeg" alt="sampah-B3" />

          <p>
            Dikutip dari Katadata, berdasarkan penjelasan Jurnal Teknologi Lingkungan 2(1), sampah B3 adalah sampah yang
            mengandung bahan berbahaya dan atau beracun karena sifat, konsentrasi, atau jumlahnya. Sampah jenis ini berpotensi
            mencemari lingkungan dan membahayakan makhluk hidup baik secara langsung maupun tidak.
          </p>
          <br />
          <p>
            Beberapa contoh dari sampah B3 adalah sampah medis, seperti masker, jarum suntik, dan peralatan medis lainnya, sampah
            elektronik atau e-waste berupa lampu, kabel, gadget rusak, dan lainnya, cairan kimia dan pelumas, produk kadaluarsa,
            dan beberapa sampah lainnya dengan karakteristik mudah meledak, terbakar, bersifat korosif, karsinogenik, dan dapat
            mengiritasi.
          </p>
          <br />
          <p>
            Nah, itu tadi adalah jenis sampah dari secara garis besar, namun di ecosortify, jenis sampah kami bagi jadi 5
            kategori:
            <Link href="/guide/sampah-organik" className="text-blue-700">
              {" "}
              sampah organik
            </Link>
            ,{" "}
            <Link href="/guide/sampah-anorganik" className="text-blue-700">
              {" "}
              anorganik
            </Link>
            ,
            <Link href="/guide/sampah-b3" className="text-blue-700">
              {" "}
              B3
            </Link>
            ,
            <Link href="/guide/sampah-elektronik" className="text-blue-700">
              {" "}
              elektronik
            </Link>
            ,
            <Link href="/guide/sampah-medis" className="text-blue-700">
              {" "}
              dan sampah medis
            </Link>
            .
          </p>

          <h2 id="jenis-sampah-berdasarkan-sumbernya" className="text-xl font-bold mb-4 text-gray-800 my-8">
            Jenis Sampah Berdasarkan Sumbernya
          </h2>

          <p>
            Sedangkan berdasarkan sumbernya, sampah dapat dibagi menjadi 4 bagian. Bersumber dari buku “Panduan Membuat Kompos
            Cair” di laman Katadata, berikut adalah pembagiannya.
          </p>

          <h3 id="sampah-alam" className="text-xl font-bold mb-4 text-gray-800 my-8">
            1. Sampah Alam
          </h3>
          <p>
            Kegiatan alami lingkungan juga dapat hasilkan sampah, berupa daun-daunan yang gugur, ranting yang patah, buah yang
            terlalu matang dan jatuh ke tanah dan berbagai contoh lainnya.
          </p>
          <br />
          <p>
            Umumnya, sampah tersebut akan menjadikan pemandangan terkesan kotor dan tidak rapi tetapi akan terurai secara alami
            dalam waktu tertentu.
          </p>

          <h3 id="sampah-manusia" className="text-xl font-bold mb-4 text-gray-800 my-8">
            2. Sampah Manusia
          </h3>
          <p>
            Jenis sampah ini bersumber dari manusia secara langsung atau disebut juga human waste. Contohnya seperti cairan urin
            dan feses.
          </p>
          <br />
          <p>
            Sampah jenis ini mengandung zat yang tidak baik dan dapat mencemari lingkungan juga membahayakan kesehatan jika
            dibuang sembarangan. Oleh karena itu, sanitasi yang baik adalah kunci mengelola sampah ini dengan tepat.
          </p>

          <h3 id="sampah-konsumsi" className="text-xl font-bold mb-4 text-gray-800 my-8">
            3. Sampah Konsumsi
          </h3>
          <p>
            Diartikan sebagai sampah sisa konsumsi manusia. Wujud yang umum ditemui adalah sampah rumah tangga seperti sisa
            makanan, kemasan plastik atau barang-barang pemakaian rumah tangga.
          </p>

          <h3 id="sampah-industri" className="text-xl font-bold mb-4 text-gray-800 my-8">
            4. Sampah Industri
          </h3>
          <p>
            Sampah industri adalah bahan sisa dari kegiatan industri atau manufaktur. Contohnya dapat berupa sisa pangan hasil
            olahan atau yang terlanjur rusak sebelum sampai ke konsumen, sampah industri kimia dan bahan bangunan berupa cairan
            kimia, oli, pelumas, minyak, dan lainnya, serta sampah elektronik.
          </p>

          <br />

          <p className="mb-5">
            Itulah sedikit pengertian dan definisi sampah serta pembahasan materi dari jenis jenis serta klasifikasi sampah yang
            ada di Indonesia. di pembahasan berikutnya kita akan membahas <strong>The Great Pacific Garbage Patch</strong>
          </p>

          <div className="flex justify-between mt-14">
            <Link
              href="/guide"
              className="py-3 px-5 bg-green-200 rounded items-center flex gap-2 hover:bg-green-300 active:bg-green-300"
            >
              <Icon icon="icon-park-solid:back" />
              <p>Kembali</p>
            </Link>
            <Link
              href="/guide/apa-itu-bank-sampah"
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
              <Link href="#pengertian-apa-itu-sampah">Pengertian apa itu sampah</Link>
            </li>
            <li>
              <Link href="#klasifikasi-jenis-jenis-sampah">Klasifikasi Jenis-Jenis Sampah</Link>
            </li>
            <li></li>
            <li>
              <Link href="#macam-macam-sampah-berdasarkan-sifatnya">Macam-macam Sampah Berdasarkan Sifatnya</Link>
            </li>

            <ul className="mb-5 space-y-2 ml-3 text-gray-600 text-sm mt-2 list-disc pl-4">
              <li>
                <Link href="#sampah-organik" scroll={true}>
                  Sampah Organik
                </Link>
              </li>
              <li>
                <Link href="#sampah-anorganik" scroll={true}>
                  Sampah Anorganik
                </Link>
              </li>
              <li>
                <Link href="#sampah-bahan-berbahaya-beracun-(B3)" scroll={true}>
                  Sampah Bahan Berbahaya Beracun (B3)
                </Link>
              </li>
            </ul>

            <li>
              <Link href="#jenis-sampah-berdasarkan-sumbernya" scroll={true}>
                Jenis Sampah Berdasarkan Sumbernya
              </Link>
            </li>

            <ul className="mb-5 space-y-2 ml-3 text-gray-600 text-sm mt-1 list-disc pl-4">
              <li>
                <Link href="#sampah-alam" scroll={true}>
                  Sampah Alam
                </Link>
              </li>
              <li>
                <Link href="#sampah-manusia" scroll={true}>
                  Sampah Manusia
                </Link>
              </li>
              <li>
                <Link href="#sampah-konsumsi">Sampah Konsumsi</Link>
              </li>
              <li>
                <Link href="#sampah-industri">Sampah Industri</Link>
              </li>
            </ul>
          </ul>
        </Rightbar>
      </div>
    </>
  );
}
