import Header2 from "@/components/templates/Header2";
import Leftbar from "@/components/templates/Leftbar";
import Rightbar from "@/components/templates/Rightbar";
import Link from "next/link";
import { Icon } from "@iconify/react";
import ImageArticle from "@/components/ImageArticle";

export default function JenisSampahOrganik() {
  return (
    <>
      <Header2 className={"fixed w-full bg-white"} />

      <div className="flex">
        <Leftbar />

        <main className="2xl:ml-[430px] 2xl:mr-[380px]  lg:ml-[350px] flex-1 h-[calc(100vh-4rem)] p-8 mb-30 xl:mr-[300px] z-1 bg-white relative top-20">
          <article className="selection:bg-green-700 selection:text-white text-gray-700">
            <h1 id="jenis-sampah-organik" className="text-2xl font-bold mb-5 text-gray-800">
              Jenis Sampah Organik
            </h1>
            <p>
              Terdapat dua jenis dari sampah organik, yakni sampah <strong>organik kering</strong> dan sampah{" "}
              <strong>organik basah</strong>.
            </p>
            <br />

            <h2 id="sampah-organik-basah" className="text-xl font-bold mb-5 text-gray-800">
              1. Sampah organik basah
            </h2>

            <ImageArticle src="/images/guide/sampah-organik-basah.jpg" alt="sampah-organik-basah" />

            <p>
              Sampah organik basah adalah sampah yang memiliki kandungan air yang cukup tinggi. Inilah yang menyebabkan sampah
              organik menjadi cepat membusuk dan menimbulkan bau tidak sedap. Dengan waktu penguraian
              <strong>2 hari - 2 minggu</strong>, tergantung kondisi lingkungan. Contoh sampah organik basah, antara lain
              buah-buahan, sayur-sayuran, kotoran hewan, dan sisa makanan.
            </p>
            <br />

            <h2 id="sampah-organik-kering" className="text-xl font-bold mb-5 text-gray-800">
              2. Sampah organik kering
            </h2>

            <ImageArticle src="/images/guide/sampah-organik-kering.jpg" alt="sampah-organik-kering" />

            <p>
              Sampah organik kering termasuk sampah organik yang kadar airnya sedikit dan cenderung lebih lama terurainya
              dibandingkan sampah organik basah, tetapi tetap dapat terurai oleh mikroorganisme dalam jangka waktu tertentu.
              Dengan waktu penguraian <strong>1 bulan - 6 bulan</strong> , tergantung jenis dan kondisi (ukuran dan ketebalan).
              Contohnya, dedaunan kering, ranting pohon, dan kayu.
            </p>
            <br />

            <div className="flex justify-between mt-14">
              <Link
                href="/guide/sampah-organik/"
                className="py-3 px-5 bg-green-200 rounded items-center flex gap-2 hover:bg-green-300 active:bg-green-300"
              >
                <Icon icon="icon-park-solid:back" />
                <p>Kembali</p>
              </Link>
              <Link
                href="/guide/sampah-organik/metode-pembuangan"
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
              <Link href="#sampah-organik-basah">Sampah organik basah</Link>
            </li>
            <li>
              <Link href="#sampah-organik-kering">Sampah organik kering</Link>
            </li>
          </ul>
        </Rightbar>
      </div>
    </>
  );
}
