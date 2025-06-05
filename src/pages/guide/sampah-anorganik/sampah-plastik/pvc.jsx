import Header2 from "@/components/templates/Header2";
import Leftbar from "@/components/templates/Leftbar";
import Rightbar from "@/components/templates/Rightbar";
import Link from "next/link";
import ImageArticle from "@/components/ImageArticle";
import { Icon } from "@iconify/react";

export default function pvc() {
  return (
    <>
      <Header2 className={"fixed w-full bg-white"} />

      <div className="flex">
        <Leftbar />

        <main className="2xl:ml-[430px] 2xl:mr-[380px]  lg:ml-[350px] flex-1 h-[calc(100vh-4rem)] p-8 mb-30 xl:mr-[300px] z-1 bg-white relative top-20 ">
          <article className="selection:bg-green-700 selection:text-white text-gray-700">
            <h1 id="overview" className="text-2xl font-bold mb-5 text-gray-800">
              PVC (Polyvinyl Chloride) - Kode 3
            </h1>

            <h2 id="karakteristik" className="text-xl font-semibold mt-8 mb-3 text-green-700">
              Karakteristik Si PVC Ini:
            </h2>
            <p>
              PVC ini bisa kaku atau lentur, tahan bahan kimia, dan harganya lumayan murah. Tapi, hati-hati! PVC ini sering
              disebut "plastik bermasalah" karena produksinya pakai klorin. Kalau dibakar atau ditimbun sembarangan, dia bisa
              ngeluarin dioksin, racun yang bahaya banget buat lingkungan dan kesehatan kita. PVC juga bisa melepas ftalat yang
              ganggu hormon.
            </p>
            <br />

            <h2 id="contoh" className="text-xl font-semibold mt-8 mb-3 text-green-700">
              Contoh Gampang Ditemukan:
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-5">
              <li>Pipa air (paralon)</li>
              <li>Pembungkus kabel listrik</li>
              <li>Beberapa mainan anak (kayak boneka atau bola tiup)</li>
              <li>Tirai kamar mandi</li>
              <li>Beberapa kemasan obat atau botol cairan pembersih.</li>
            </ul>
            <br />

            <ImageArticle src="/images/guide/pvc1.jpg" alt="Gambar Plastik pvc (Kode 3)" />
            
            <br />

            <h2 id="cara-menangani" className="text-xl font-semibold mt-8 mb-3 text-green-700">
              Cara Kita Menanganinya:
            </h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Sebisa mungkin, hindari PVC, apalagi buat makanan dan minuman!</li>
              <li>Untuk sampah PVC yang enggak bisa dihindarin (misalnya potongan pipa bekas), pisahin aja dari sampah lain.</li>
              <li>Daur ulang PVC itu susah banget dan enggak semua tempat mau nerima, karena ribet dan bahaya.</li>
              <li>Kalau di tempatmu enggak ada fasilitas khusus, terpaksa dibuang sebagai limbah residu (sampah akhir).</li>
            </ol>
            <br />

            <h2 id="proses-daur-ulang" className="text-xl font-semibold mt-8 mb-3 text-green-700">
              Proses Daur Ulangnya di Pabrik:
            </h2>
            <p className="text-gray-700 mb-2">(Daur ulang PVC jauh lebih kompleks dan kurang umum dibandingkan PET atau HDPE.)</p>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>
                <strong>Pengumpulan & Penyortiran:</strong> PVC harus dipisah super teliti dari semua jenis plastik lain.
              </li>
              <li>
                <strong>Pencacahan & Pencucian:</strong> Dihancurkan lalu dicuci.
              </li>
              <li>
                <strong>Peleburan (dengan Aditif):</strong> PVC dilelehkan, tapi sering harus ditambahin zat penstabil atau aditif
                lain biar sifatnya lebih baik, karena PVC cenderung rusak kalau sering dipanaskan.
              </li>
              <li>
                <strong>Penggunaan Kembali:</strong> PVC daur ulang umumnya dipakai buat produk yang enggak bersentuhan langsung
                sama makanan atau manusia, contohnya speed bump (polisi tidur), tikar lantai, sol sepatu, atau komponen bangunan
                lainnya.
              </li>
            </ol>
            <br />

            <div className="flex justify-between mt-14">
              <Link
                href="/guide/sampah-anorganik/sampah-plastik/hdpe"
                className="py-3 px-5 bg-green-200 rounded items-center flex gap-2 hover:bg-green-300 active:bg-green-300"
              >
                <Icon icon="icon-park-solid:back" />
                <p>Sebelumnya</p>
              </Link>
              <Link
                href="/guide/sampah-anorganik/sampah-plastik/ldpe"
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
              <Link href="#karakteristik" className="hover:font-semibold">
                Karakteristik Si PVC Ini
              </Link>
            </li>
            <li>
              <Link href="#contoh" className="hover:font-semibold">
                Contoh Gampang Ditemukan
              </Link>
            </li>
            <li>
              <Link href="#cara-menangani" className="hover:font-semibold">
                Cara Kita Menanganinya
              </Link>
            </li>
            <li>
              <Link href="#proses-daur-ulang" className="hover:font-semibold">
                Proses Daur Ulangnya di Pabrik
              </Link>
            </li>
          </ul>
        </Rightbar>
      </div>
    </>
  );
}