import Header2 from "@/components/templates/Header2";
import Leftbar from "@/components/templates/Leftbar";
import Rightbar from "@/components/templates/Rightbar";
import Link from "next/link";
import ImageArticle from "@/components/ImageArticle";
import { Icon } from "@iconify/react";

export default function hdpe() {
  return (
    <>
      <Header2 className={"fixed w-full bg-white"} />

      <div className="flex">
        <Leftbar />

        <main className="2xl:ml-[430px] 2xl:mr-[380px]  lg:ml-[350px] flex-1 h-[calc(100vh-4rem)] p-8 mb-30 xl:mr-[300px] z-1 bg-white relative top-20">
          <article className="selection:bg-green-700 selection:text-white text-gray-700">
            <h1 id="overview" className="text-2xl font-bold mb-5 text-gray-800">
              HDPE (High-Density Polyethylene) - Kode 2
            </h1>

            <h2 id="karakteristik" className="text-xl font-semibold mt-8 mb-3 text-green-700">
              Karakteristik Si HDPE Ini:
            </h2>
            <p>
              Kalau HDPE ini saudaranya PET, tapi dia lebih kuat, kaku, dan enggak bening alias agak buram. Dia punya kepadatan
              tinggi, tahan benturan, tahan bahan kimia, dan kuat di suhu tinggi. Uniknya, HDPE ini dianggap salah satu plastik
              paling aman buat dipakai berulang kali karena zat kimianya minim yang keluar.
            </p>
            <br />

            <ImageArticle src="/images/guide/hdpe1.jpg" alt="Gambar Plastik HDPE (Kode 2)" />

            <br />

            <h2 id="contoh" className="text-xl font-semibold mt-8 mb-3 text-green-700">
              Contoh Gampang Ditemukan:
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-5">
              <li>Botol susu</li>
              <li>Botol deterjen, botol sampo, botol pemutih</li>
              <li>Galon air minum</li>
              <li>Mainan anak-anak</li>
              <li>Pipa</li>
              <li>Beberapa kantong belanja yang tebal.</li>
            </ul>
            <br />

            <ImageArticle src="/images/guide/hdpe2.jpg" alt="Gambar Plastik HDPE (Kode 2)" />
           
            <br />

            <h2 id="cara-menangani" className="text-xl font-semibold mt-8 mb-3 text-green-700">
              Cara Kita Menanganinya:
            </h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Sama seperti PET, botol HDPE perlu dikosongkan dan dibilas bersih.</li>
              <li>Karena sifatnya yang lebih kaku, mungkin tidak mudah dipipihkan.</li>
              <li>Tetap perlu dipisahkan dari sampah lain.</li>
              <li>Serahkan ke bank sampah atau pengepul yang menerima plastik kode 2 ini.</li>
            </ol>
            <br />

            <h2 id="proses-daur-ulang" className="text-xl font-semibold mt-8 mb-3 text-green-700">
              Proses Daur Ulangnya di Pabrik:
            </h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>
                <strong>Pengumpulan & Penyortiran:</strong> HDPE dikumpulin dan disortir berdasarkan warna dan jenisnya.
              </li>
              <li>
                <strong>Pencacahan (Shredding):</strong> Sampah HDPE dipecah jadi serpihan.
              </li>
              <li>
                <strong>Pencucian & Pemurnian:</strong> Serpihan dicuci sampai bersih dari kotoran.
              </li>
              <li>
                <strong>Peleburan & Peletisasi:</strong> Serpihan kering dilelehkan lalu dibentuk jadi pelet.
              </li>
              <li>
                <strong>Penggunaan Kembali:</strong> Pelet HDPE daur ulang sering digunakan buat bikin pipa saluran air, pagar
                plastik, bangku taman, tempat sampah, alas palet, botol-botol non-makanan, bahkan ada yang jadi serat tekstil
                juga, lho.
              </li>
            </ol>
            <br />

            <div className="flex justify-between mt-14">
              <Link
                href="/guide/sampah-anorganik/sampah-plastik/pet"
                className="py-3 px-5 bg-green-200 rounded items-center flex gap-2 hover:bg-green-300 active:bg-green-300"
              >
                <Icon icon="icon-park-solid:back" />
                <p>Sebelumnya</p>
              </Link>
              <Link
                href="/guide/sampah-anorganik/sampah-plastik/pvc"
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
                Karakteristik Si HDPE Ini
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