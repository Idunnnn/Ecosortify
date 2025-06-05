import Header2 from "@/components/templates/Header2";
import Leftbar from "@/components/templates/Leftbar";
import Rightbar from "@/components/templates/Rightbar";
import Link from "next/link";
import Article from "@/components/Article";
import { Icon } from "@iconify/react";

export default function medicWastePengenalan() {
  return (
    <>
      <Header2 className={"fixed w-full bg-white"} />

      <div className="flex">
        <Leftbar />

        <Article>
          <h1 id="overview" className="text-2xl font-bold mb-5 text-gray-800">
            Pengenalan sampah medis
          </h1>

          <h2 id="pengenalan-limbah-medis" className="text-xl font-semibold mt-8 mb-3 text-green-700">
            Pengenalan Limbah Medis
          </h2>
          <p>
            Limbah medis adalah segala jenis limbah yang dihasilkan dari kegiatan pelayanan kesehatan, seperti rumah sakit,
            klinik, laboratorium, apotek, puskesmas, dan fasilitas kesehatan lainnya. Limbah ini bisa berupa benda tajam, bahan
            kimia, sisa obat, darah, jaringan tubuh, hingga alat pelindung diri (APD) yang sudah terpakai.
          </p>
          <br />
          <p>
            Limbah medis tergolong sebagai limbah berbahaya karena mengandung patogen, zat kimia toksik, atau material yang bisa
            melukai dan mencemari lingkungan. Jika tidak dikelola dengan baik, limbah medis dapat menyebabkan penularan penyakit
            seperti HIV, Hepatitis B dan C, atau bahkan pencemaran tanah, air, dan udara.
          </p>
          <br />
          <p>
            Menurut WHO, sekitar 15% dari total limbah medis termasuk kategori berbahaya. Oleh karena itu, penting bagi setiap
            fasilitas kesehatan untuk memiliki sistem pengelolaan limbah yang aman, efektif, dan sesuai regulasi. Pengelolaan ini
            tidak hanya melindungi tenaga kesehatan, pasien, dan masyarakat sekitar, tetapi juga menjaga keseimbangan ekosistem
            lingkungan.
          </p>
          <br />

          <div className="flex justify-between mt-14">
            <div className="flex-grow"></div>
            <Link
              href="/guide/sampah-medis/jenis-sampah-medis/infeksius"
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
              <Link href="#overview" className="font-bold">
                Medic Waste - Pengenalan
              </Link>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>
                  <Link href="#pengenalan-limbah-medis">Pengenalan Limbah Medis</Link>
                </li>
              </ul>
            </li>
          </ul>
        </Rightbar>
      </div>
    </>
  );
}
