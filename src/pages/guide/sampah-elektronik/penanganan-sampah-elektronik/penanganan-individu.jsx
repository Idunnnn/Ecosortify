import Header2 from "@/components/templates/Header2";
import Leftbar from "@/components/templates/Leftbar";
import Rightbar from "@/components/templates/Rightbar";
import Link from "next/link";
import ImageArticle from "@/components/ImageArticle";
import Article from "@/components/Article";
import { Icon } from "@iconify/react";

export default function PenangananIndividuEwaste() {
  return (
    <>
      <Header2 className={"fixed w-full bg-white"} />

      <div className="flex">
        <Leftbar />

        <Article>
          <h1 id="overview" className="text-2xl font-bold mb-5 text-gray-800">
            Penanganan Sampah Elektronik (E-Waste) oleh Individu
          </h1>
          <p>
            Sampah elektronik (<strong>e-waste</strong>) adalah masalah serius yang terus berkembang. Berbeda dengan sampah rumah
            tangga biasa, e-waste mengandung berbagai bahan berbahaya seperti timbal, merkuri, dan kadmium, yang bisa mencemari
            lingkungan dan membahayakan kesehatan jika tidak dikelola dengan benar. Di sisi lain, e-waste juga menyimpan material
            berharga seperti emas, perak, dan tembaga, yang bisa didaur ulang. Karena itu, sangat penting bagi kita sebagai
            individu untuk tahu cara membuang e-waste dengan tepat.
          </p>
          <br />

          <ImageArticle src="/images/guide/elektronik4.jpg" alt="Contoh Produk Plastik Pengenalan" />
        
          <br />

          <h2 id="cara-membuang-ewaste-individu" className="text-xl font-bold mt-8 mb-3 text-gray-800">
            Cara Membuang Sampah Elektronik yang Benar sebagai Individu
          </h2>
          <br />

          <h3 id="pusat-pengumpulan-resmi" className="text-lg font-semibold mt-6 mb-2 text-green-700">
            1. Serahkan ke Pusat Pengumpulan E-Waste Resmi:
          </h3>
          <p>
            Ini adalah cara terbaik. Banyak kota atau kabupaten di Indonesia sudah mulai menyediakan pusat pengumpulan khusus
            e-waste. Tempat-tempat ini biasanya dikelola oleh pemerintah daerah, perusahaan daur ulang, atau komunitas peduli
            lingkungan. Mereka memiliki prosedur yang benar untuk memilah dan menyalurkan e-waste ke fasilitas pengolahan yang
            tepat. Carilah informasi di situs dinas lingkungan hidup setempat atau media sosial untuk menemukan lokasi terdekat.
          </p>
          <br />

          <h3 id="program-take-back" className="text-lg font-semibold mt-6 mb-2 text-green-700">
            2. Manfaatkan Program Take-Back dari Produsen atau Retailer:
          </h3>
          <p>
            Beberapa produsen elektronik besar atau toko elektronik sering menawarkan program take-back. Ini berarti kamu bisa
            mengembalikan perangkat elektronik lama (misalnya smartphone lama, printer rusak, atau baterai bekas) ke toko atau
            produsen ketika membeli produk baru mereka. Program ini memastikan perangkatmu akan didaur ulang dengan aman sesuai
            standar produsen. Selalu tanyakan opsi ini saat kamu membeli elektronik baru.
          </p>
          <br />

          <h3 id="bank-sampah-elektronik" className="text-lg font-semibold mt-6 mb-2 text-green-700">
            3. Kirim ke Bank Sampah Elektronik atau Kolektor Daur Ulang Spesialis:
          </h3>
          <p>
            Sama seperti bank sampah untuk plastik atau kertas, ada juga bank sampah khusus elektronik di beberapa daerah. Mereka
            menerima berbagai jenis e-waste yang sudah dipilah dan menyalurkannya ke fasilitas daur ulang. Selain itu, ada juga
            kolektor atau perusahaan daur ulang spesialis e-waste yang menerima setoran dari individu. Mencari informasi tentang
            keberadaan bank sampah elektronik terdekat bisa sangat membantu.
          </p>
          <br />

          <h3 id="acara-pengumpulan-massal" className="text-lg font-semibold mt-6 mb-2 text-green-700">
            4. Hadiri Acara Pengumpulan E-Waste Massal:
          </h3>
          <p>
            Terkadang, pemerintah daerah, komunitas, atau organisasi lingkungan mengadakan acara pengumpulan e-waste massal secara
            berkala di lokasi tertentu. Ini adalah kesempatan yang baik untuk membersihkan e-waste di rumahmu dan membuangnya
            secara bertanggung jawab dalam satu waktu. Ikuti media sosial atau pengumuman dari dinas terkait di kotamu untuk
            jadwal acara ini.
          </p>
          <br />

          <h3 id="jasa-penjemputan-ewaste" className="text-lg font-semibold mt-6 mb-2 text-green-700">
            5. Pertimbangkan Jasa Penjemputan E-Waste:
          </h3>
          <p>
            Beberapa perusahaan pengelolaan limbah atau startup lingkungan kini menyediakan jasa penjemputan e-waste langsung dari
            rumah. Ini sangat praktis jika kamu memiliki e-waste dalam jumlah besar atau sulit untuk mengangkutnya sendiri.
            Biasanya ada biaya tertentu untuk layanan ini, namun sebanding dengan kemudahan dan jaminan penanganan yang benar.
          </p>
          <br />

          <h2 id="hal-perlu-diperhatikan" className="text-xl font-bold mt-8 mb-3 text-gray-800">
            Hal yang Perlu Diperhatikan Sebelum Membuang E-Waste:
          </h2>
          <ul className="list-disc list-inside space-y-1 text-gray-700 ml-5">
            <li>
              <strong>Hapus Data Pribadi:</strong> Sebelum membuang perangkat seperti smartphone, laptop, atau hard drive,
              pastikan semua data pribadi sudah terhapus secara permanen. Lakukan factory reset atau hapus data secara manual
              untuk melindungi privasimu.
            </li>
            <li>
              <strong>Pisahkan Baterai:</strong> Jika memungkinkan dan aman, pisahkan baterai dari perangkat elektronik. Baterai
              seringkali memerlukan penanganan daur ulang yang berbeda karena kandungan kimianya.
            </li>
            <li>
              <strong>Jangan Membakar atau Menghancurkan Sendiri:</strong> Jangan pernah mencoba membakar e-waste atau
              menghancurkannya sendiri tanpa peralatan pelindung. Ini bisa melepaskan zat beracun ke udara atau menyebabkan
              ledakan.
            </li>
          </ul>
          <br />

          <div className="flex justify-between mt-14">
            <Link
              href="/guide/sampah-elektronik/penanganan-sampah-elektronik/penanganan" 
              className="py-3 px-5 bg-green-200 rounded items-center flex gap-2 hover:bg-green-300 active:bg-green-300"
            >
              <Icon icon="icon-park-solid:back" />
              <p>Sebelumnya</p>
            </Link>
            <Link
              href="/guide/sampah-medis/" 
              className="py-3 px-5 bg-green-200 rounded items-center flex gap-2 hover:bg-green-300 active:bg-green-300"
            >
              <Icon icon="icon-park-solid:next" />
              <p>Selanjutnya</p>
            </Link>
         
          </div>
          <div className="h-[40px]"></div>
        </Article>

        <Rightbar>
          <ul className="mb-8 space-y-3 ml-3 text-gray-600 text-sm">
            <li>
              <Link href="#overview" className="font-bold">
                Penanganan E-Waste oleh Individu
              </Link>
            </li>
            <li>
              <Link href="#cara-membuang-ewaste-individu">Cara Membuang yang Benar</Link>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>
                  <Link href="#pusat-pengumpulan-resmi">Pusat Pengumpulan Resmi</Link>
                </li>
                <li>
                  <Link href="#program-take-back">Program Take-Back</Link>
                </li>
                <li>
                  <Link href="#bank-sampah-elektronik">Bank Sampah Elektronik</Link>
                </li>
                <li>
                  <Link href="#acara-pengumpulan-massal">Acara Pengumpulan Massal</Link>
                </li>
                <li>
                  <Link href="#jasa-penjemputan-ewaste">Jasa Penjemputan E-Waste</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="#hal-perlu-diperhatikan" className="hover:font-semibold">
                Hal yang Perlu Diperhatikan
              </Link>
            </li>
          </ul>
        </Rightbar>
      </div>
    </>
  );
}
