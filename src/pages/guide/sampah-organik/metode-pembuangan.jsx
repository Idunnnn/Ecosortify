import Header2 from "@/components/templates/Header2";
import Leftbar from "@/components/templates/Leftbar";
import Rightbar from "@/components/templates/Rightbar";
import Link from "next/link";
import ImageArticle from "@/components/ImageArticle";
import { Icon } from "@iconify/react";

export default function MetodePembuangan() {
  return (
    <>
      <Header2 className={"fixed w-full bg-white"} />

      <div className="flex">
        <Leftbar />

        <main className="2xl:ml-[430px] 2xl:mr-[380px]  lg:ml-[350px] flex-1 h-[calc(100vh-4rem)] p-8 mb-30 xl:mr-[300px] z-1 bg-white relative top-20">
          <article className="selection:bg-green-700 selection:text-white text-gray-700">
            <h1 id="jenis-sampah-organik" className="text-2xl font-bold mb-5 text-gray-800">
              Metode Pembuangan
            </h1>
            <p>
              Metode pembuangan sampah organik ada beragam, namun menurut penulis, cara paling mudah dan praktis adalah dengan
              mengolahnya menjadi <strong>pupuk kompos sederhana</strong>
            </p>
            <br />

            <p>
              Caranya adalah dengan membuat lubang di tanah, terutama di area yang teduh. Masukkan sampah organik ke dalam lubang
              tersebut, kemudian tutup kembali dengan tanah. Proses dekomposisi akan terjadi secara alami dan berlangsung selama 1
              minggu hingga 3 bulan, tergantung pada volume dan jenis sampah. Selain mengurangi limbah, metode ini juga dapat
              menyuburkan tanah dan tanaman di sekitarnya.
            </p>
            <iframe
              className="mx-auto my-5 max-w-[550px] w-full"
              height="315"
              src="https://www.youtube.com/embed/ftaxJ2C7LKA?si=nLUU4joEAa5jz9R9"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
            <p>
              Jika Anda ingin menghasilkan pupuk kompos yang dapat diambil dan digunakan secara langsung, proses ini juga bisa
              dilakukan di dalam wadah tertutup seperti ember, tong, atau kotak. Caranya adalah:
            </p>
            <br />

            <ul className="list-decimal list-inside pl-3 space-y-2">
              <li>Buat lapisan dasar menggunakan tanah</li>
              <li>Tambahkan sampah organik</li>
              <li>Tutup kembali dengan lapisan tanah.</li>
              <li>
                Tambahkan EM4 (Effective Microorganisms) atau air cucian beras sebagai starter untuk mempercepat proses
                fermentasi.
              </li>
              <li>Tutup wadah dengan penutup yang rapat, namun tetap beri celah udara kecil untuk proses aerobik</li>
            </ul>

            <br />
            <p>Proses ini juga membutuhkan waktu antara 1 minggu hingga 3 bulan, tergantung volume dan kondisi lingkungan.</p>
            <br />
            <p>
              Namun, jika Anda tidak memiliki cukup waktu atau tempat untuk mengolah sampah organik sendiri, terdapat alternatif
              lain, yaitu:
            </p>
            <br />

            <h2 id="menyetorkan-ke-bank-sampah-organik" className="text-xl font-bold mb-5 text-gray-800">
              Menyetorkan ke Bank sampah Organik
            </h2>

            <ImageArticle src="/images/guide/bank-sampah-organik.jpg" alt="bank-sampah-organik" />

            <p>
              Salah satu metode pembuangan untuk sampah organik adalah dengan menyetorkanya ke bank sampah organik, seperti yang
              dijelaskan pada{" "}
              <Link href="/guide/apa-itu-bank-sampah" className="font-bold">
                Bank sampah
              </Link>
              , pemrosesan dilakukan oleh bank sampah organik itu sendiri, cukup mudah dan praktis bukan? Jangan lupa untuk
              mengecek bank sampah organik dikotamu!
            </p>
            <br />

            <h2 id="memberikanya-ke-peternak" className="text-xl font-bold mb-5 text-gray-800">
              Memberikanya ke peternak
            </h2>

            <ImageArticle src="/images/guide/peternak.jpg" alt="peternak" />

            <p>
              Solusi lain dalam pengelolaan sampah organik adalah memberikannya kepada peternak. Namun, perlu diperhatikan bahwa
              tidak semua jenis sampah organik dapat digunakan sebagai pakan ternak. Hanya sampah organik tertentu seperti
              buah-buahan dan sayuran segar yang masih layak konsumsi yang dapat diberikan, dan bukan dalam kondisi busuk atau
              tercampur bahan kimia.
            </p>
            <br />
            <p>
              Metode ini sangat cocok diterapkan di <strong>pasar tradisional</strong>, di mana sering kali terdapat banyak buah
              dan sayuran yang terbuang meskipun masih dalam kondisi layak untuk dikonsumsi hewan.
            </p>

            <br />
            <h2 id="mengolah-menjadi-biogas" className="text-xl font-bold mb-5 text-gray-800">
              Mengolah menjadi biogas
            </h2>

            <iframe
              className="mx-auto max-w-[550px] w-full"
              height="315"
              src="https://www.youtube.com/embed/UceoGxJsCwM?si=Yw5Hm_kU8iJv8C2S"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <br />

            <p>Berikut langkah-langkah membuat biogas:</p>
            <br />
            <ul className="list-decimal list-inside space-y-2">
              <li className="font-bold">Siapkan Wadah Komposter</li>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Gunakan wadah seperti ember, tong, atau kotak dengan penutup.</li>
                <li>Pastikan wadah memiliki lubang udara untuk sirkulasi oksigen</li>
              </ul>

              <li className="font-bold">Pisahkan dan Potong Sampah Organik</li>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Potong kecil-kecil sampah organik untuk mempercepat proses penguraian.</li>
              </ul>

              <li className="font-bold">Susun Lapisan Bahan Kompos</li>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Lapisi dasar wadah dengan bahan "coklat" seperti daun kering atau serbuk gergaji.</li>
                <li>Tambahkan lapisan bahan "hijau" seperti sisa sayuran atau buah.</li>
              </ul>

              <li className="font-bold">Tambahkan Aktivator dan Air</li>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Larutkan aktivator kompos (seperti EM4) dalam air sesuai petunjuk.</li>
                <li>Siramkan larutan tersebut ke dalam tumpukan kompos untuk mempercepat proses penguraian.</li>
              </ul>

              <li className="font-bold">Tutup dan Diamkan</li>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Tutup wadah kompos dengan rapat untuk menjaga kelembaban dan suhu.</li>
                <li>Simpan di tempat yang teduh dan tidak terkena hujan langsung</li>
              </ul>

              <li className="font-bold">Aduk Secara Berkala</li>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Setiap 1-2 minggu, aduk tumpukan kompos untuk memastikan sirkulasi udara dan penguraian merata.</li>
              </ul>

              <li className="font-bold">Panen Kompos</li>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>
                  Setelah 2–3 bulan, kompos akan berubah menjadi bahan yang berwarna gelap, berbau tanah, dan bertekstur remah.
                </li>
                <li>Kompos siap digunakan untuk menyuburkan tanaman di kebun atau pot.</li>
              </ul>
            </ul>

            <br />
            <p>
              Sedikit tips, Hindari memasukkan daging, produk susu, minyak, dan kotoran hewan peliharaan ke dalam kompos karena
              dapat menarik hama dan menyebabkan bau tidak sedap. Pastikan kompos tetap lembab, seperti spons yang diperas. Jika
              terlalu kering, tambahkan sedikit air; jika terlalu basah, tambahkan bahan kering seperti daun kering.
            </p>

            <div className="flex justify-between mt-14">
              <Link
                href="/guide/sampah-organik/jenis-sampah-organik"
                className="py-3 px-5 bg-green-200 rounded items-center flex gap-2 hover:bg-green-300 active:bg-green-300"
              >
                <Icon icon="icon-park-solid:back" />
                <p>Kembali</p>
              </Link>
              <Link
                href="/guide/sampah-anorganik/"
                className="py-3 px-5 bg-green-200 rounded items-center flex gap-2 hover:bg-green-300 active:bg-green-300"
              >
                <p>Selanjutnya</p>
                <Icon icon="icon-park-solid:next" />
              </Link>
            </div>
            <div className="h-[40px]"></div>
          </article>
        </main>

        <Rightbar>
          <ul className="mb-8 space-y-3 ml-3 text-gray-600 text-sm">
            <li>
              <Link href="#menyetorkan-ke-bank-sampah-organik">Menyetorkan ke bank sampah organik</Link>
            </li>
            <li>
              <Link href="#memberikanya-ke-peternak">Memberikanya ke peternak</Link>
            </li>
            <li>
              <Link href="#mengolah-menjadi-biogas">Mengolah menjadi biogas</Link>
            </li>
          </ul>
        </Rightbar>
      </div>
    </>
  );
}
