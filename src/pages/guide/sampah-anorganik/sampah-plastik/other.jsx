import Header2 from "@/components/templates/Header2";
import Leftbar from "@/components/templates/Leftbar";
import Rightbar from "@/components/templates/Rightbar";
import Link from "next/link";
import { Icon } from "@iconify/react";

export default function otherPlastic() { 
  return (
    <>
      <Header2 className={"fixed w-full bg-white"} />

      <div className="flex">
        <Leftbar />

        <main className="2xl:ml-[430px] 2xl:mr-[380px]  lg:ml-[350px] flex-1 h-[calc(100vh-4rem)] p-8 mb-30 xl:mr-[300px] z-1 bg-white relative top-20">
          <article className="selection:bg-green-700 selection:text-white text-gray-700">
            <h1 id="overview" className="text-2xl font-bold mb-5 text-gray-800">
              OTHER (Lain-lain) - Kode 7
            </h1>
            <p>
              Kategori "OTHER" mencakup berbagai jenis plastik selain enam kode di atas, seperti polycarbonate (PC), acrylonitrile
              butadiene styrene (ABS), dan polylactic acid (PLA). Contoh produknya meliputi galon air minum isi ulang, komponen
              elektronik, botol bayi, compact disc (CD), atau kemasan yang terbuat dari campuran beberapa jenis plastik.
            </p>
            <br />
            <p>
              Penting untuk diketahui, beberapa jenis plastik di kategori ini, seperti PC, mengandung Bisphenol A (BPA) yang
              diduga dapat mengganggu hormon. Sementara itu, plastik berlabel "PLA" atau "compostable" menunjukkan bahwa plastik
              tersebut dapat terurai secara biologis, namun hanya dalam kondisi tertentu seperti kompos industri, bukan di alam
              terbuka. Waktu urainya sangat bervariasi tergantung jenis polimer pembentuknya.
            </p>
            <br />

            <div className="flex justify-between mt-14">
              <Link
                href="/guide/sampah-anorganik/sampah-plastik/ps"
                className="py-3 px-5 bg-green-200 rounded items-center flex gap-2 hover:bg-green-300 active:bg-green-300"
              >
                <Icon icon="icon-park-solid:back" />
                <p>Kembali</p>
              </Link>
              <Link
                href="/guide/sampah-anorganik/sampah-logam/aluminium"
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
              <Link href="#">other</Link>
            </li>
          </ul>
        </Rightbar>
      </div>
    </>
  );
}