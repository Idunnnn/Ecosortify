import Header2 from "@/components/templates/Header2";
import Leftbar from "@/components/templates/Leftbar";
import Rightbar from "@/components/templates/Rightbar";
import Link from "next/link";
import { Icon } from "@iconify/react";
import ImageArticle from "@/components/ImageArticle";

export default function theGreatPasificGarbagePatch() {
  return (
    <>
      <Header2 className={"fixed w-full bg-white"} />

      <div className="flex">
        <Leftbar />

        <main className="2xl:ml-[430px] 2xl:mr-[380px]  lg:ml-[350px] flex-1 h-[calc(100vh-4rem)] p-8 mb-30 xl:mr-[300px] z-1 bg-white relative top-20">
          <article className="selection:bg-green-700 selection:text-white text-gray-700">
            <h1 className="text-2xl font-bold mb-5 text-gray-800">The Great Pacific Garbage Patch</h1>
            <p>
              Bayangkan ada kumpulan sampah sebesar 2x pulau kalimantan, membentang luas di samudra. ya itulah The Great Pacific
              Garbage Patch. Pusaran sampah pasifik samudra pasifik utara dan membentang di perairan antara pantai barat amerika
              utara sampai jepang. Wilayah ini terbagi menjadi dua tambalan, yaitu tambalan sampah Barat dan tambalan sampah
              Timur. Tambalan sampah Barat terletak di dekat negara Jepang, sedangkan tambalan sampah Timur terletak di antara
              negara bagian Hawaii dan California, Amerika Serikat.
            </p>
            <br />

            <ImageArticle src="/images/guide/the-pacific-garbage-patch.jpg" alt="the-pacific-garbage-patch" />

            <p>
              The Great Pacific Garbage Patch ditemukan pertama kali pada tahun 1990-an, dan sampah-sampah tersebut berasal dari
              negara-negara di Lingkar Pacific (Pacific Rim) yang tersebar di Asia, Amerika Utara, dan Amerika Selatan, ditambah
              Lebretan.
            </p>

            <br />

            <p>
              "Ini adalah fenomena alami yang terjadi di semua cekungan samudra subtropis di dunia. Sebenarnya, ada empat lagi
              zona akumulasi seperti ini: Pasifik selatan, Atlantik utara, Atlantik selatan, dan Samudra Hindia,” ujarnya.
            </p>
            <br />
            <p>
              The Great Pacific Garbage Patch bukan kumpulan plastik yang padat, namun terdiri dari 1,8 triliun bagian-bagian
              plastik, dan diperkirakan seberat 88 ribu ton, atau seberat 500 pesawat jet jumbo. Dari hasil pemetaan sampah yang
              dilakukan dalam kurun waktu tiga tahun menunjukkan jumlah polusi plastik yang berlipat ganda. Mikroplastik
              menyumbang 8 persen dari total massa plastik yang mengapung di area luas tersebut.
            </p>

            <ImageArticle src="/images/guide/the-pacific-garbage-patch2.jpg" alt="the-pacific-garbage-patch2" />

            <p>
              Plastik yang berakhir di Great Pacific Garbage Patch berasal dari berbagai sumber, termasuk sampah daratan yang
              terbawa oleh sungai, sampah dari kapal, dan limbah industri. Sayangnya, plastik tidak mudah terurai secara alami di
              lingkungan laut. Sebaliknya, plastik akan terfragmentasi menjadi potongan-potongan yang lebih kecil, yang disebut
              mikroplastik
            </p>
            <br />
            <p>
              Mikroplastik ini sangat berbahaya bagi ekosistem laut. Hewan laut seperti ikan, burung laut, dan mamalia laut
              seringkali menelan mikroplastik, yang dapat menyebabkan masalah kesehatan yang serius, bahkan kematian. Selain itu,
              mikroplastik juga dapat menyerap polutan kimia dari air laut, sehingga menjadi semakin berbahaya bagi makhluk hidup.
            </p>
            <br />
            <p>
              Tidak hanya berdampak pada kehidupan laut, Great Pacific Garbage Patch juga memiliki dampak ekonomi yang signifikan.
              Industri perikanan dan pariwisata di kawasan tersebut terancam oleh keberadaan sampah plastik. Selain itu,
              pembersihan Great Pacific Garbage Patch membutuhkan biaya yang sangat besar dan belum ada solusi yang efektif untuk
              mengatasi masalah ini secara menyeluruh.
            </p>
            <br />
            <p>
              Upaya untuk membersihkan Great Pacific Garbage Patch telah dilakukan oleh berbagai organisasi dan individu. Namun,
              upaya ini masih belum cukup untuk mengatasi masalah yang sudah sangat besar. Pencegahan tetap menjadi kunci utama
              untuk mengatasi masalah sampah laut. Hal ini dapat dilakukan dengan mengurangi penggunaan plastik sekali pakai,
              mendaur ulang sampah plastik, dan mengelola sampah secara lebih baik.
            </p>

            <ImageArticle src="/images/guide/ocean-cleanup.jpg" alt="ocean-cleanup" />


            <p>
              Selain itu, penting untuk meningkatkan kesadaran masyarakat tentang bahaya sampah plastik bagi lingkungan.
              Pendidikan dan kampanye lingkungan dapat mendorong perubahan perilaku masyarakat dalam mengelola sampah. Setiap
              individu memiliki peran penting dalam menjaga kebersihan laut dan mencegah terjadinya masalah lingkungan yang lebih
              besar.
            </p>
            <br />
            <p>
              Great Pacific Garbage Patch adalah peringatan bagi kita semua tentang dampak buruk dari konsumsi plastik yang
              berlebihan. Kita harus bertindak sekarang untuk melindungi lautan dan menjaga kelestarian planet kita. Dengan
              bekerja sama, kita dapat menciptakan masa depan yang lebih baik bagi generasi mendatang.
            </p>

            <div className="flex justify-between mt-14">
              <Link
                href="/guide/apa-itu-bank-sampah"
                className="py-3 px-5 bg-green-200 rounded items-center flex gap-2 hover:bg-green-300 active:bg-green-300"
              >
                <Icon icon="icon-park-solid:back" />
                <p>Kembali</p>
              </Link>
              <Link
                href="/guide/sampah-organik/"
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
              <Link href="#">The Great Pacific Garbage Patch</Link>
            </li>
          </ul>
        </Rightbar>
      </div>
    </>
  );
}
