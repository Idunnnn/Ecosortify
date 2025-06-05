import Header2 from "@/components/templates/Header2";
import Leftbar from "@/components/templates/Leftbar";
import Rightbar from "@/components/templates/Rightbar";
import Link from "next/link";
import ImageArticle from "@/components/ImageArticle";
import Article from "@/components/Article";
import { Icon } from "@iconify/react";

export default function PenangananEwaste() {
  return (
    <>
      <Header2 className={"fixed w-full bg-white"} />

      <div className="flex">
        <Leftbar />

        <Article>
          <h1 id="overview" className="text-2xl font-bold mb-5 text-gray-800">
            Panduan Lengkap Penanganan Sampah Elektronik (E-Waste)
          </h1>
          <p>
            Penanganan sampah elektronik atau **e-waste** membutuhkan pendekatan khusus yang berbeda dari sampah rumah tangga pada
            umumnya. Ini karena e-waste mengandung berbagai material berharga yang bisa didaur ulang, sekaligus zat berbahaya yang
            bisa mencemari lingkungan jika tidak ditangani dengan benar. Tahapan-tahapan ini dirancang untuk memaksimalkan
            pemulihan material dan meminimalkan pelepasan zat berbahaya.
          </p>
          <br />

          <ImageArticle src="/images/guide/elektronik3.jpg" alt="Contoh Produk Plastik Pengenalan" />

          <br />

          <h2 id="tahapan-kunci" className="text-xl font-bold mt-8 mb-3 text-gray-800">
            Tahapan Kunci Penanganan E-Waste
          </h2>
          <p>Penanganan e-waste melibatkan beberapa langkah penting yang terkoordinasi:</p>
          <br />

          <h3 id="pengumpulan" className="text-lg font-semibold mt-6 mb-2 text-green-700">
            1. Pengumpulan (Collection)
          </h3>
          <p>
            Tahap awal yang krusial adalah mengumpulkan e-waste secara terpisah dari jenis sampah lainnya. Ini bisa dilakukan
            melalui beberapa cara:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-700 ml-5 mt-2">
            <li>
              <strong>Pusat Pengumpulan Khusus:</strong> Lokasi yang disediakan oleh pemerintah atau swasta khusus untuk menampung
              e-waste.
            </li>
            <li>
              <strong>Program Ambil Kembali (Take-back Programs):</strong> Beberapa produsen elektronik menawarkan program di mana
              konsumen bisa mengembalikan produk lamanya.
            </li>
            <li>
              <strong>Bank Sampah Elektronik:</strong> Inisiatif komunitas atau lembaga yang khusus mengelola e-waste.
            </li>
            <li>
              <strong>Acara Pengumpulan Massal:</strong> Kegiatan yang diselenggarakan secara berkala di area tertentu untuk
              mengumpulkan e-waste dari masyarakat.
            </li>
          </ul>
          <br />

          <h3 id="penyortiran" className="text-lg font-semibold mt-6 mb-2 text-green-700">
            2. Penyortiran (Sorting)
          </h3>
          <p>Setelah terkumpul, e-waste akan disortir dengan cermat. Proses ini dilakukan berdasarkan:</p>
          <ul className="list-disc list-inside space-y-1 text-gray-700 ml-5 mt-2">
            <li>
              <strong>Jenis Perangkat:</strong> Misalnya, smartphone, laptop, televisi, atau peralatan rumah tangga kecil.
            </li>
            <li>
              <strong>Merek atau Jenis Material Dominan:</strong> Terkadang, penyortiran juga dilakukan berdasarkan merek atau
              material utama yang terkandung di dalamnya (misalnya, perangkat dengan layar LCD versus CRT).
            </li>
          </ul>
          <p className="mt-2">
            Penyortiran yang akurat sangat penting untuk memudahkan proses pembongkaran dan daur ulang selanjutnya.
          </p>
          <br />

          <h3 id="pembongkaran" className="text-lg font-semibold mt-6 mb-2 text-green-700">
            3. Pembongkaran (Dismantling/Disassembly)
          </h3>
          <p>
            Ini adalah tahap kunci di mana perangkat elektronik dibongkar, bisa secara manual atau semi-otomatis. Tujuannya
            adalah:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-700 ml-5 mt-2">
            <li>
              <strong>Memisahkan Komponen Berbahaya:</strong> Bagian yang mengandung bahan kimia berbahaya (contohnya baterai,
              tabung sinar katoda/CRT, kapasitor) dipisahkan untuk penanganan khusus yang aman.
            </li>
            <li>
              <strong>Memisahkan Material Berharga:</strong> Komponen yang mengandung logam mulia (seperti emas, perak) atau logam
              dasar (seperti tembaga, aluminium) dipisahkan untuk proses pemulihan.
            </li>
            <li>
              <strong>Mempersiapkan untuk Daur Ulang:</strong> Bagian-bagian yang lebih besar dipecah menjadi komponen yang lebih
              kecil agar lebih mudah diolah pada tahap berikutnya.
            </li>
          </ul>
          <br />

          <h3 id="pemulihan-material" className="text-lg font-semibold mt-6 mb-2 text-green-700">
            4. Pemulihan Material (Material Recovery/Processing)
          </h3>
          <p>Setelah dibongkar, berbagai material dari e-waste diolah untuk diambil kembali dan dijadikan bahan baku baru:</p>
          <ul className="list-disc list-inside space-y-1 text-gray-700 ml-5 mt-2">
            <li>
              <strong>Logam:</strong> Logam seperti tembaga, aluminium, besi, emas, dan perak dipisahkan, kemudian dilebur kembali
              atau diolah dengan metode elektrolisis atau hidrometalurgi agar bisa digunakan lagi.
            </li>
            <li>
              <strong>Plastik:</strong> Plastik yang sudah bersih dan terpisah dari komponen lain akan dicacah, dicuci, dilebur,
              dan dicetak menjadi pelet. Pelet ini kemudian digunakan dalam produksi produk plastik baru.
            </li>
            <li>
              <strong>Kaca:</strong> Kaca dari layar monitor atau TV tertentu (misalnya CRT) memerlukan penanganan khusus karena
              mengandung timbal. Jenis kaca lainnya dapat dihancurkan dan didaur ulang.
            </li>
            <li>
              <strong>Baterai:</strong> Baterai dari e-waste harus diolah secara khusus karena mengandung bahan kimia berbahaya
              dan juga material berharga (misalnya litium, kobalt).
            </li>
            <li>
              <strong>Papan Sirkuit Tercetak (PCB):</strong> PCB seringkali dilebur atau diproses lebih lanjut untuk memulihkan
              logam mulia yang terkandung di dalamnya.
            </li>
          </ul>
          <br />

          <h3 id="pemusnahan-akhir-residu" className="text-lg font-semibold mt-6 mb-2 text-green-700">
            5. Pemusnahan Akhir Residu Berbahaya (Final Disposal of Hazardous Residues)
          </h3>
          <p>
            Meskipun sebagian besar material dapat dipulihkan, akan selalu ada residu berbahaya yang tidak bisa didaur ulang
            secara ekonomis atau teknis. Residu ini harus dibuang di fasilitas pengolahan limbah berbahaya yang dirancang khusus
            (**hazardous waste landfill**) untuk mencegah pencemaran lingkungan yang serius.
          </p>
          <br />
          <p>
            Dengan mengikuti tahapan-tahapan ini, kita bisa memastikan bahwa e-waste dikelola dengan bertanggung jawab, mengurangi
            dampak negatifnya terhadap lingkungan, dan memaksimalkan pemanfaatan kembali sumber daya.
          </p>
          <br />

          <div className="flex justify-between mt-14">
            <Link
              href="/guide/sampah-elektronik/
              "
              className="py-3 px-5 bg-green-200 rounded items-center flex gap-2 hover:bg-green-300 active:bg-green-300"
            >
              <Icon icon="icon-park-solid:back" />
              <p>Sebelumnya</p>
            </Link>
            <Link
              href="/guide/sampah-elektronik/penanganan-sampah-elektronik/penanganan-individu"
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
                Panduan Lengkap Penanganan E-Waste
              </Link>
            </li>
            <li>
              <Link href="#tahapan-kunci" className="hover:font-semibold">
                Tahapan Kunci Penanganan E-Waste
              </Link>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>
                  <Link href="#pengumpulan">Pengumpulan (Collection)</Link>
                </li>
                <li>
                  <Link href="#penyortiran">Penyortiran (Sorting)</Link>
                </li>
                <li>
                  <Link href="#pembongkaran">Pembongkaran (Dismantling/Disassembly)</Link>
                </li>
                <li>
                  <Link href="#pemulihan-material">Pemulihan Material (Material Recovery/Processing)</Link>
                </li>
                <li>
                  <Link href="#pemusnahan-akhir-residu">Pemusnahan Akhir Residu Berbahaya</Link>
                </li>
              </ul>
            </li>
          </ul>
        </Rightbar>
      </div>
    </>
  );
}
