import Header2 from "@/components/templates/Header2";
import Leftbar from "@/components/templates/Leftbar";
import Rightbar from "@/components/templates/Rightbar";
import Link from "next/link";
import { Icon } from "@iconify/react";
import Article from "@/components/Article";

export default function ResiduDanB3() {
  return (
    <>
      <Header2 className={"fixed w-full bg-white"} />

      <div className="flex">
        <Leftbar />

        <Article>
          <h1 id="overview" className="text-2xl font-bold mb-5 text-gray-800">
            Jenis Sampah Residu dan B3 (Bahan Berbahaya dan Beracun)
          </h1>
          <p>
            Sampah dikelompokkan berdasarkan karakteristiknya untuk memudahkan penanganan dan pengelolaannya. Dua kategori penting
            yang memerlukan perhatian khusus adalah sampah residu dan sampah Bahan Berbahaya dan Beracun (B3). Pemahaman yang
            tepat tentang kedua jenis sampah ini sangat krusial untuk menjaga kelestarian lingkungan dan kesehatan masyarakat.
          </p>
          <br />
          <h2 id="sampah-residu" className="text-xl font-semibold mt-8 mb-3 text-green-700">
            Pengenalan Sampah Residu
          </h2>
          <p>
            Sampah residu, juga dikenal sebagai sampah non-recyclable atau sampah tidak dapat ditukar, adalah jenis sampah yang
            sulit atau bahkan tidak mungkin untuk didaur ulang atau diproses kembali menjadi bahan yang dapat digunakan kembali.
            Jenis sampah ini sering kali menjadi tantangan dalam pengelolaan limbah, karena memerlukan penanganan khusus untuk
            mengurangi dampaknya terhadap lingkungan dan kesehatan manusia. Meskipun sebagian besar sampah rumah tangga atau
            industri berusaha untuk didaur ulang, selalu ada sisa yang tidak bisa diproses, dan inilah yang disebut residu.
          </p>
          <br />
          <h2 id="sampah-b3" className="text-xl font-semibold mt-8 mb-3 text-green-700">
            Pengenalan Sampah B3 (Bahan Berbahaya dan Beracun)
          </h2>
          <p>
            Sampah B3 (Bahan Berbahaya dan Beracun) adalah limbah yang mengandung bahan beracun dan berbahaya bagi manusia, hewan,
            dan lingkungan. Karakteristik berbahaya ini bisa berupa mudah meledak, mudah menyala, korosif, reaktif, beracun, atau
            menyebabkan infeksi. Karena sifat-sifatnya yang merusak, jenis sampah ini perlu penanganan khusus dan tidak boleh
            dibuang sembarangan. Pembuangan yang tidak tepat dapat menyebabkan pencemaran serius pada tanah, air, dan udara, serta
            berisiko tinggi menimbulkan penyakit atau cedera langsung pada yang terpapar.
          </p>
          <br />
          <p>
            Membedakan dan mengelola sampah residu serta sampah B3 dengan benar adalah langkah fundamental dalam menciptakan
            sistem pengelolaan limbah yang bertanggung jawab dan berkelanjutan.
          </p>

          <div className="flex justify-between mt-14">
            <Link
              href="/guide/sampah-medis/jenis-sampah-medis/radioaktif"
              className="py-3 px-5 bg-green-200 rounded items-center flex gap-2 hover:bg-green-300 active:bg-green-300"
            >
              <Icon icon="icon-park-solid:back" />
              <p>Sebelumnya</p>
            </Link>
            <Link
              href="/guide/sampah-residu-b3/jenis-sampah-residu-b3/sampah-terkontaminasi"
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
              <Link href="#overview" className="font-bold cursor-default">
                Jenis Sampah Residu dan B3
              </Link>
            </li>
            <li>
              <Link href="#sampah-residu" className="hover:text-green-700">
                Pengenalan Sampah Residu
              </Link>
            </li>
            <li>
              <Link href="#sampah-b3" className="hover:text-green-700">
                Pengenalan Sampah B3
              </Link>
            </li>
          </ul>
        </Rightbar>
      </div>
    </>
  );
}
