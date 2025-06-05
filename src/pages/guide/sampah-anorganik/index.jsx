import Header2 from "@/components/templates/Header2";
import Leftbar from "@/components/templates/Leftbar";
import Rightbar from "@/components/templates/Rightbar";
import Link from "next/link";
import { Icon } from "@iconify/react";
import ImageArticle from "@/components/ImageArticle";

export default function pengenalan() {
  return (
    <>
      <Header2 className={"fixed w-full bg-white"} />

      <div className="flex">
        <Leftbar />

        <main className="2xl:ml-[430px] 2xl:mr-[380px]  lg:ml-[350px] flex-1 h-[calc(100vh-4rem)] p-8 mb-30 xl:mr-[300px] z-1 bg-white relative top-20">
          <article className="selection:bg-green-700 selection:text-white text-gray-700">
            <h1 id="overview" className="text-2xl font-bold mb-5 text-gray-800">
              Pengenalan
            </h1>
            <p>
              Ketika kita berbicara tentang sampah, fokus kita sering tertuju pada sisa makanan atau dedaunan yang mudah terurai.
              Namun, ada kategori limbah lain yang jauh lebih mengkhawatirkan karena sifatnya yang sulit terurai dan berpotensi
              mencemari lingkungan dalam jangka panjang: <strong>limbah anorganik</strong>. Berbeda dengan limbah organik yang
              berasal dari makhluk hidup, limbah anorganik meliputi material yang tidak dapat membusuk secara alami dalam waktu
              singkat, membutuhkan ratusan bahkan ribuan tahun untuk benar-benar lenyap dari permukaan bumi.
            </p>
            <br />

            <ImageArticle src="/images/guide/anorganik-pengenalan.jpg" alt="Contoh Produk Plastik Pengenalan" />

            <br />
            <p>
              Di era modern, gaya hidup konsumtif telah meningkatkan volume sampah plastik, kaca, logam, dan material sintetik
              lainnya secara eksponensial. Dari kemasan makanan hingga barang elektronik usang, limbah anorganik kini mendominasi
              timbunan sampah di berbagai belahan dunia. Tanpa penanganan yang tepat, akumulasi limbah ini tidak hanya merusak
              estetika lingkungan, tetapi juga berkontribusi pada masalah yang lebih besar seperti pencemaran tanah dan air,
              mikroplastik, serta ancaman terhadap ekosistem. Oleh karena itu, memahami apa itu limbah anorganik,
              karakteristiknya, dan bagaimana kita harus menanganinya menjadi langkah awal yang esensial dalam menjaga
              keberlanjutan bumi kita.
            </p>
            <br />

            <p>
              Lantas, bagaimana kita menanganinya? Tenang, dalam artikel ini. Penulis akan memberi tahu cara penanganan sampah
              anorganik yang benar, kita akan belajar mulai dari:
            </p>
            <br />

            <ul className="list-disc list-inside pl-3">
              <li>
                <strong>Belajar mengenal jenis sampah anorganik</strong>
              </li>
              <li>
                <strong>Belajar metode penanganan yang baik dan benar</strong>
              </li>
            </ul>
            <br />
            <p>Tanpa berlama-lagi, mari kita ke pembahasannya!</p>

            <div className="flex justify-between mt-14">
              <div className="flex-grow"></div>
              <Link
                href="/guide/sampah-anorganik/sampah-plastik/pet"
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
              <Link href="#">Pengenalan</Link>
            </li>
          </ul>
        </Rightbar>
      </div>
    </>
  );
}
