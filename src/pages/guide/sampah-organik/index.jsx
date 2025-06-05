import Header2 from "@/components/templates/Header2";
import Leftbar from "@/components/templates/Leftbar";
import Rightbar from "@/components/templates/Rightbar";
import Link from "next/link";
import { Icon } from "@iconify/react";

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
              Sejayatinya, sampah organik bisa dibilang sampah yang dihasilkan dari bahan-bahan hayati(makhluk hidup) yang dapat
              terurai secara alami oleh mikroorganisme, <strong>sampah rumah tangga</strong> dan pasar tradisional adalah
              penyumbang terbanyak sampah organik seperti sayuran, buah-buahan, dan lain-lain.
            </p>
            <br />
            <p>
              Karakteristik utama dari sampah organik adalah mudah membusuk, dan mudah terurai melalui proses alami. Artinya,
              terurai nya sampah organik bisa terjadi tanpa campur tangan manusia.
            </p>
            <br />

            <p>
              Sampah organik <strong>tidak disarankan untuk dibuang ke TPA (tempat pembuangan akhir)</strong>, hal ini karena
              dapat mengakibatkan pencemaran air/tanah dan membuat sampah jenis lain tercampur satu sama lain, bahkan TPA
              sarimukti jawa barat telah menerapkan kebijakan untuk melarang sampah organik dibuang ke TPA sejak 1 januari 2024
              dan rencananya aturan ini bertahap di terapkan ke berbagai daerah hingga akhirnya menjadi nasional.
            </p>
            <br />
            <p>
              Lantas, Dimana kita membuangnya? Tenang, dalam artikel ini. Penulis akan memberi tahu cara pembuangan sampah organik
              yang benar, kita akan belajar mulai dari:
            </p>
            <br />

            <ul className="list-disc list-inside pl-3">
              <li>
                <strong>Belajar mengenal jenis sampah organik</strong>
              </li>
              <li>
                <strong>Belajar metode pembuangan yang baik dan benar</strong>
              </li>
            </ul>
            <br />
            <p>Tanpa berlama-lagi, mari kita ke pembahasannya!</p>

            <div className="flex justify-between mt-14">
              <div className="flex-grow"></div>
              <Link
                href="/guide/sampah-organik/jenis-sampah-organik"
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
