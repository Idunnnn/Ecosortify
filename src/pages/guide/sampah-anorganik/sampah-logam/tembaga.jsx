import Header2 from "@/components/templates/Header2";
import Leftbar from "@/components/templates/Leftbar";
import Rightbar from "@/components/templates/Rightbar";
import Link from "next/link";
import ImageArticle from "@/components/ImageArticle";
import Article from "@/components/Article";
import { Icon } from "@iconify/react";

export default function tembaga() {
  return (
    <>
      <Header2 className={"fixed w-full bg-white"} />

      <div className="flex">
        <Leftbar />

        <Article>
          <h1 id="overview" className="text-2xl font-bold mb-5 text-gray-800">
            Tembaga
          </h1>

          <h2 id="karakteristik" className="text-xl font-semibold mt-8 mb-3 text-green-700">
            Karakteristik
          </h2>
          <p>
            Tembaga dikenal karena konduktivitas listrik dan termalnya yang sangat tinggi, serta ketahanan korosinya yang baik.
            Warnanya khas kemerahan-coklat dan bisa membentuk lapisan patina hijau seiring waktu. Tembaga adalah logam yang sangat
            ulet dan mudah dibentuk.
          </p>
          <br />

          <ImageArticle src="/images/guide/tembaga1.jpg" alt="Contoh Produk Tembaga" />

          <br />

          <h2 id="contoh-sampah" className="text-xl font-semibold mt-8 mb-3 text-green-700">
            Contoh Umum Sampah
          </h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>Kabel listrik bekas (dengan atau tanpa insulasi).</li>
            <li>Pipa air tembaga, komponen elektronik (misalnya di dalam CPU, sirkuit), motor listrik, gulungan kumparan.</li>
            <li>Beberapa koin atau ornamen.</li>
          </ol>
          <br />

          <ImageArticle src="/images/guide/tembaga3.jpg" alt="Contoh Produk Tembaga" />
      
          <br />

          <h2 id="cara-penanganan" className="text-xl font-semibold mt-8 mb-3 text-green-700">
            Cara Penanganan Individu
          </h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>
              Untuk kabel, jika memungkinkan, pisahkan bagian tembaganya dari insulasi plastik. Tembaga yang bersih dan tanpa
              insulasi memiliki nilai jual yang lebih tinggi.
            </li>
            <li>Kumpulkan potongan-potongan tembaga kecil atau kabel bekas secara terpisah.</li>
            <li>Serahkan ke pengepul logam bekas atau fasilitas daur ulang yang menerima tembaga.</li>
          </ol>
          <br />

          <h2 id="proses-daur-ulang-industri" className="text-xl font-semibold mt-8 mb-3 text-green-700">
            Proses Pengolahan/Daur Ulang Industri
          </h2>
          <p className="text-gray-700 mb-2">Tembaga adalah salah satu logam yang paling banyak dan mudah didaur ulang.</p>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>
              <strong>Pengumpulan & Penyortiran:</strong> Sampah tembaga dikumpulkan dan disortir berdasarkan kemurniannya
              (misalnya tembaga murni, tembaga berlapis, tembaga bercampur). Insulasi kabel biasanya dipisahkan.
            </li>
            <li>
              <strong>Pencacahan (Shredding):</strong> Material tembaga, terutama kabel, dihancurkan menjadi potongan-potongan
              kecil.
            </li>
            <li>
              <strong>Peleburan:</strong> Logam tembaga dilebur dalam tungku peleburan.
            </li>
            <li>
              <strong>Pemurnian:</strong> Tembaga cair dimurnikan untuk menghilangkan kotoran. Proses pemurnian bisa menggunakan
              pyrometallurgy (pemurnian dengan panas) atau electrowinning (pemurnian elektrolitik untuk mencapai kemurnian sangat
              tinggi).
            </li>
            <li>
              <strong>Pencetakan & Pembentukan:</strong> Tembaga murni atau paduan tembaga kemudian dicetak menjadi batangan atau
              bentuk lain yang siap digunakan kembali dalam produksi kabel baru, pipa, komponen elektronik, atau paduan
              perunggu/kuningan.
            </li>
          </ol>
          <br />

          <div className="flex justify-between mt-14">
            <Link
              href="/guide/sampah-anorganik/sampah-logam/besi-baja"
              className="py-3 px-5 bg-green-200 rounded items-center flex gap-2 hover:bg-green-300 active:bg-green-300"
            >
              <Icon icon="icon-park-solid:back" />
              <p>Sebelumnya</p>
            </Link>
            <Link
              href="/guide/sampah-anorganik/sampah-logam/seng-timah"
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
              <Link href="#karakteristik" className="hover:font-semibold">
                Karakteristik
              </Link>
            </li>
            <li>
              <Link href="#contoh-sampah" className="hover:font-semibold">
                Contoh Umum Sampah
              </Link>
            </li>
            <li>
              <Link href="#cara-penanganan" className="hover:font-semibold">
                Cara Penanganan Individu
              </Link>
            </li>
            <li>
              <Link href="#proses-daur-ulang-industri" className="hover:font-semibold">
                Proses Pengolahan/Daur Ulang Industri
              </Link>
            </li>
          </ul>
        </Rightbar>
      </div>
    </>
  );
}