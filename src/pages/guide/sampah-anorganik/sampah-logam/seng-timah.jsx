import Header2 from "@/components/templates/Header2";
import Leftbar from "@/components/templates/Leftbar";
import Rightbar from "@/components/templates/Rightbar";
import Link from "next/link";
import { Icon } from "@iconify/react";
import ImageArticle from "@/components/ImageArticle";
import Article from "@/components/Article";

export default function sengDanTimah() {
  return (
    <>
      <Header2 className={"fixed w-full bg-white"} />

      <div className="flex">
        <Leftbar />

        <Article>
          <h1 id="overview" className="text-2xl font-bold mb-5 text-gray-800">
            Seng dan Timah
          </h1>

          <h2 id="karakteristik" className="text-xl font-semibold mt-8 mb-3 text-green-700">
            Karakteristik
          </h2>
          <p>
            <strong>Timah:</strong> Logam lunak, ulet, dan tahan korosi, sering digunakan sebagai lapisan pelindung pada kaleng
            baja untuk mencegah karat (sehingga disebut "kaleng timah" meskipun sebagian besar isinya baja).
            <br />
            <strong>Seng:</strong> Logam keperakan-putih yang tahan korosi, sering digunakan sebagai lapisan pelindung anti-karat
            pada baja (proses galvanisasi).
          </p>
          <br />

          <ImageArticle src="/images/guide/sengtimah1.jpg" alt="Contoh Produk Seng dan Timah" />

          <br />

          <h2 id="contoh-sampah" className="text-xl font-semibold mt-8 mb-3 text-green-700">
            Contoh Umum Sampah
          </h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>
              Sebagian besar kaleng makanan dan minuman yang bukan aluminium (misalnya kaleng sarden, susu kental manis, minuman
              ringan merek tertentu) sebenarnya adalah kaleng baja berlapis timah (tinplate steel).
            </li>
            <li>Seng biasanya ditemukan pada beberapa atap, baterai, atau komponen elektronik.</li>
          </ol>
          <br />

          <ImageArticle src="/images/guide/sengtimah2.jpg" alt="Contoh Produk Seng dan Timah" />

          <br />

          <h2 id="cara-penanganan" className="text-xl font-semibold mt-8 mb-3 text-green-700">
            Cara Penanganan Individu
          </h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>Untuk kaleng baja berlapis timah, pastikan kosong, bilas bersih, dan keringkan. Jika memungkinkan, pipihkan.</li>
            <li>
              Kaleng jenis ini biasanya magnetis, sehingga bisa diidentifikasi dengan magnet dan dipisahkan bersama sampah
              besi/baja lainnya.
            </li>
            <li>
              Untuk seng, biasanya ditemukan sebagai bagian dari produk lain. Serahkan ke bank sampah atau pengepul logam
              campuran.
            </li>
          </ol>
          <br />

          <h2 id="proses-daur-ulang-industri" className="text-xl font-semibold mt-8 mb-3 text-green-700">
            Proses Pengolahan/Daur Ulang Industri
          </h2>
          <p className="text-gray-700 mb-2">
            Daur ulang seng dan timah seringkali terkait dengan daur ulang baja, atau sebagai proses pemulihan sampingan dari
            logam lain.
          </p>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>
              <strong>Pengumpulan & Penyortiran:</strong> Kaleng baja berlapis timah dipisahkan dari aluminium menggunakan magnet.
            </li>
            <li>
              <strong>Pencacahan & Pembersihan:</strong> Kaleng dihancurkan dan dibersihkan dari kontaminan.
            </li>
            <li>
              <strong>Peleburan (untuk Baja):</strong> Kaleng baja berlapis timah sering dilebur bersama baja lainnya. Timah akan
              menguap pada suhu peleburan baja dan dapat dikumpulkan sebagai slag atau didaur ulang secara terpisah melalui proses
              detinning (pemisahan timah dari baja).
            </li>
            <li>
              <strong>Pemulihan Timah (Detinning):</strong> Ada proses khusus yang disebut detinning di mana lapisan timah
              dipisahkan dari baja menggunakan bahan kimia kaustik atau elektrolisis. Timah yang dipulihkan dapat digunakan
              kembali.
            </li>
            <li>
              <strong>Penggunaan Kembali:</strong> Baja hasil daur ulang digunakan kembali untuk berbagai produk baja. Timah yang
              dipulihkan dapat digunakan untuk lapisan kaleng baru atau aplikasi lain. Seng hasil daur ulang (misalnya dari
              baterai atau galvanisasi) dapat digunakan kembali untuk produksi seng baru atau untuk galvanisasi baja.
            </li>
          </ol>
          <br />

          <div className="flex justify-between mt-14">
            <Link
              href="/guide/sampah-anorganik/sampah-logam/tembaga"
              className="py-3 px-5 bg-green-200 rounded items-center flex gap-2 hover:bg-green-300 active:bg-green-300"
            >
              <Icon icon="icon-park-solid:back" />
              <p>Sebelumnya</p>
            </Link>
            <Link
              href="/guide/sampah-anorganik/sampah-kaca"
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