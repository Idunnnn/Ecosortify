import Header2 from "@/components/templates/Header2";
import Leftbar from "@/components/templates/Leftbar";
import Rightbar from "@/components/templates/Rightbar";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";

export default function GuidePage() {
  return (
    <>
      <Header2 className={"fixed w-full bg-white"} />
      <div className="flex">
        <Leftbar />

        <main className="2xl:ml-[430px] 2xl:mr-[380px]  lg:ml-[350px] flex-1 h-[calc(100vh-4rem)] p-8 mb-30 xl:mr-[300px] z-1 bg-white relative top-20 ">
          <article className="selection:bg-green-700 selection:text-white text-gray-700">
            <h1 id="overview" className="text-2xl font-bold mb-5 text-gray-800">
              Overview
            </h1>
            <p>Halo, Sobat Peduli Lingkungan!</p>
            <br />
            <p>
              Selamat datang di halaman edukasi Ecosortify, tempat di mana kita akan bersama-sama memahami lebih dalam tentang isu
              yang semakin mendesak di dunia saat ini, sampah. Mungkin terdengar sederhana, namun siapa sangka bahwa benda-benda
              kecil yang kita buang setiap hari bisa membawa dampak besar bagi lingkungan, kesehatan, dan masa depan bumi yang
              kita cintai ini.
            </p>
            <br />

            <p>
              Dalam panduan ini, kamu tidak hanya akan belajar tentang jenis-jenis sampah dan bagaimana cara mengelolanya dengan
              benar, tapi juga diajak untuk membuka mata terhadap realita yang terjadi di sekitar kita. Kita akan membahas
              tentang:
            </p>

            <br />

            <ul className="list-inside list-disc">
              <li>Apa itu sampah dan bagaimana kategorinya dibedakan</li>
              <li>Metode pembuangan sampah dan mengapa itu sangat penting</li>
              <li>Dampak sampah terhadap lingkungan, termasuk masalah besar seperti Great Pacific Garbage Patch</li>
              <li>Peran kita sebagai individu dalam mengurangi sampah dan menerapkan gaya hidup berkelanjutan</li>
            </ul>

            <br />

            <p>
              Lewat Ecosortify, kamu nggak cuma dikasih info, tapi juga diajak buat melek lingkungan dengan cara yang asyik dan
              simpel. Mulai dari kenalan dengan jenis-jenis sampah, belajar cara memilah, sampai tahu fakta-fakta seru yang bisa
              bikin kamu bilang, "Wah, aku baru tahu!"
            </p>

            <br />

            <p>Sudah siap? Yuk! kita langsung kepembahasanya</p>

            <div className="flex justify-end mt-14">
              <Link
                href="/guide/apa-itu-sampah"
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
              <Link href="#">Overview</Link>
            </li>
          </ul>
        </Rightbar>
      </div>
    </>
  );
}
