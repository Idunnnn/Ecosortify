import Header2 from "@/components/templates/Header2";
import Leftbar from "@/components/templates/Leftbar";
import Rightbar from "@/components/templates/Rightbar";
import Link from "next/link";
import ImageArticle from "@/components/ImageArticle";
import Article from "@/components/Article";
import { Icon } from "@iconify/react";

export default function sampahKertas() {
  return (
    <>
      <Header2 className={"fixed w-full bg-white"} />

      <div className="flex">
        <Leftbar />

        <Article>
          <h1 id="overview" className="text-2xl font-bold mb-5 text-gray-800">
            Mengenal Lebih Dalam Sampah Kertas: Jejak Hutan di Sekitar Kita
          </h1>

          <h2 id="pendahuluan" className="text-xl font-semibold mt-8 mb-3 text-green-700">
            Pendahuluan
          </h2>
          <p>
            Kertas adalah material yang terbuat dari serat selulosa, umumnya dari pulp kayu, meskipun bisa juga dari serat tanaman
            lain seperti bambu, kapas, atau jerami. Kertas menjadi bagian tak terpisahkan dari kehidupan sehari-hari kita,
            digunakan untuk menulis, mencetak, mengemas, hingga kebutuhan sanitasi. Sifatnya yang ringan, mudah dibentuk, dan
            dapat menyerap membuatnya sangat fleksibel.
          </p>
          <br />
          <p>
            Meskipun kertas berasal dari bahan alami, penumpukan sampah kertas yang tidak terkelola dengan baik tetap menimbulkan
            masalah lingkungan. Produksi kertas baru membutuhkan penebangan pohon dalam jumlah besar dan konsumsi energi yang
            signifikan. Namun, kabar baiknya adalah kertas sangat mudah didaur ulang dan dapat diubah kembali menjadi produk
            kertas baru. Daur ulang kertas secara drastis mengurangi deforestasi, menghemat energi, mengurangi konsumsi air, dan
            meminimalkan volume sampah di TPA.
          </p>
          <br />

          <ImageArticle src="/images/guide/kertas1.jpg" alt="Contoh Produk kertas" />

          <br />

          <h2 id="jenis-umum" className="text-xl font-semibold mt-8 mb-3 text-green-700">
            Jenis Kertas yang Umum Ditemui dalam Sampah
          </h2>
          <p className="text-gray-700 mb-2">
            Kertas memiliki banyak variasi, dan tidak semua jenis dapat didaur ulang dengan cara yang sama. Pemisahan yang tepat
            membantu proses daur ulang menjadi lebih efisien.
          </p>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>
              <strong>Kertas Koran/Majalah:</strong> Kertas tipis, biasanya tidak mengilap, dan mudah sobek.
            </li>
            <li>
              <strong>Kertas Karton (Kardus):</strong> Kertas tebal, seringkali bergelombang, digunakan untuk kemasan.
            </li>
            <li>
              <strong>Kertas Kantor (HVS):</strong> Kertas putih polos yang digunakan untuk mencetak dokumen, surat, dan catatan.
            </li>
            <li>
              <strong>Buku Tulis/Buku Cetak:</strong> Kertas yang sering digunakan pelajar atau untuk penerbitan.
            </li>
            <li>
              <strong>Kertas Campuran:</strong> Berbagai jenis kertas lain yang tidak termasuk kategori di atas, seperti kertas
              kado (tanpa lapisan plastik/foil), selebaran, atau amplop (tanpa jendela plastik).
            </li>
          </ol>
          <br />

          <ImageArticle src="/images/guide/kertas2.jpg" alt="Contoh Produk kertas" />
        
          <br />

          <h2 id="tidak-didaur-ulang" className="text-xl font-semibold mt-8 mb-3 text-green-700">
            Jenis Kertas yang Tidak Dapat Didaur Ulang Melalui Program Standar
          </h2>
          <p className="text-gray-700 mb-2">
            Beberapa jenis kertas tidak bisa didaur ulang dengan metode umum karena kontaminasi atau lapisan tambahan:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>
              <strong>Kertas Karbon, Kertas Foto, Kertas Fax:</strong> Mengandung bahan kimia yang sulit dipisahkan.
            </li>
            <li>
              <strong>Kertas Berlapis Plastik/Lilin:</strong> Misalnya bungkus permen atau biskuit bagian dalam, karton
              susu/minuman (kecuali ada program khusus). Lapisan ini mengganggu proses repulping.
            </li>
            <li>
              <strong>Kertas Tisu, Tisu Dapur, Popok Bekas:</strong> Terlalu banyak kontaminasi dan seratnya sudah terlalu pendek.
            </li>
            <li>
              <strong>Kertas yang Terkontaminasi Berat:</strong> Kertas yang berminyak, kotoran hewan, atau terkena limbah kimia.
            </li>
            <li>
              <strong>Kertas Metalik/Glitter:</strong> Mengandung bahan non-kertas yang tidak bisa didaur ulang.
            </li>
          </ol>
          <br />

          <h2 id="cara-penanganan" className="text-xl font-semibold mt-8 mb-3 text-green-700">
            Cara Penanganan Sampah Kertas oleh Individu
          </h2>
          <p className="text-gray-700 mb-2">
            Peran kita sebagai individu sangat penting dalam memastikan sampah kertas dapat didaur ulang secara efektif:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>
              <strong>Pastikan Bersih dan Kering:</strong> Kertas harus kering dan relatif bersih dari kontaminasi seperti sisa
              makanan, minyak, atau kotoran. Kertas basah atau berminyak dapat merusak tumpukan kertas daur ulang lainnya dan
              menyebabkan jamur.
            </li>
            <li>
              <strong>Lipat atau Pipihkan:</strong> Untuk menghemat ruang, lipat atau pipihkan kardus dan kertas agar tidak
              memakan banyak tempat di wadah sampah atau saat dikumpulkan.
            </li>
            <li>
              <strong>Pisahkan dari Sampah Lain:</strong> Penting untuk memisahkan kertas dari sampah organik, plastik, atau
              logam. Kertas yang tercampur dengan sampah lain akan sulit dan mahal untuk disortir di fasilitas daur ulang.
            </li>
            <li>
              <strong>Bebaskan dari Pengikat:</strong> Jika ada staples, klip kertas, atau spiral plastik pada buku, lepas jika
              memungkinkan. Meskipun mesin daur ulang modern dapat menanganinya, melepasnya akan membantu.
            </li>
            <li>
              <strong>Serahkan ke Jalur yang Benar:</strong> Kumpulkan kertas yang sudah bersih dan terpilah. Kemudian, serahkan
              ke bank sampah, pengepul kertas bekas, atau tempat daur ulang khusus di kotamu. Jangan membuangnya ke tempat sampah
              umum yang bercampur.
            </li>
          </ol>
          <br />

          <h2 id="proses-daur-ulang-industri" className="text-xl font-semibold mt-8 mb-3 text-green-700">
            Proses Pengolahan/Daur Ulang Kertas Industri
          </h2>
          <p className="text-gray-700 mb-2">
            Proses daur ulang kertas mengubah limbah kertas menjadi pulp baru yang siap diolah menjadi produk kertas lainnya:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>
              <strong>Pengumpulan & Penyortiran Awal:</strong> Sampah kertas dikumpulkan dari berbagai sumber dan disortir
              berdasarkan jenisnya (koran, kardus, HVS) dan kualitasnya. Pemisahan ini sangat penting untuk mendapatkan pulp yang
              sesuai standar.
            </li>
            <li>
              <strong>Pencacahan (Shredding) & Repulping:</strong> Kertas yang sudah disortir dimasukkan ke dalam mesin pencacah.
              Kemudian, potongan-potongan kertas ini dicampur dengan air dan bahan kimia di sebuah alat yang disebut pulper atau
              hydropulper. Proses ini akan melarutkan kertas menjadi bubur serat (pulp) yang kental.
            </li>
            <li>
              <strong>Pembersihan & Penghilangan Kontaminan:</strong> Pulp yang dihasilkan kemudian melewati berbagai tahapan
              pembersihan untuk menghilangkan kontaminan yang tidak larut, seperti plastik, lem, staples, dan kotoran lainnya. Ini
              bisa melibatkan penyaringan, sentrifugasi, atau proses flotasi.
            </li>
            <li>
              <strong>Penghilangan Tinta (De-inking):</strong> Untuk kertas yang memiliki tinta (seperti koran, majalah, atau
              HVS), proses de-inking dilakukan. Udara diinjeksikan ke dalam tangki berisi pulp dan bahan kimia, membuat gelembung
              yang mengangkat partikel tinta ke permukaan, yang kemudian bisa diangkat dan dibuang.
            </li>
            <li>
              <strong>Pemutihan (Opsional):</strong> Pulp yang sudah bersih mungkin perlu diputihkan untuk mencapai tingkat
              kecerahan yang diinginkan, terutama untuk produksi kertas putih berkualitas tinggi. Proses ini menggunakan bahan
              kimia tertentu.
            </li>
            <li>
              <strong>Pembentukan Lembaran Kertas Baru:</strong> Pulp yang sudah murni dan siap kemudian dialirkan ke mesin kertas
              raksasa. Di sini, pulp disebarkan secara merata di atas jaring bergerak, airnya dikeringkan, dan serat-seratnya
              saling mengikat membentuk lembaran kertas basah. Lembaran ini kemudian dikeringkan dan digiling untuk mendapatkan
              ketebalan dan kehalusan yang diinginkan.
            </li>
            <li>
              <strong>Penggunaan Kembali:</strong> Kertas daur ulang ini siap digunakan untuk membuat produk kertas baru seperti
              kardus, kertas koran, kertas toilet, tisu, paper bag, atau bahkan kertas cetak tertentu.
            </li>
          </ol>
          <br />
          <p>
            Dengan mendukung daur ulang kertas, kita tidak hanya mengurangi volume sampah, tetapi juga berkontribusi langsung pada
            perlindungan hutan dan pengurangan dampak lingkungan dari industri kertas.
          </p>
          <br />

          <div className="flex justify-between mt-14">
            <Link
              href="/guide/sampah-anorganik/sampah-kaca"
              className="py-3 px-5 bg-green-200 rounded items-center flex gap-2 hover:bg-green-300 active:bg-green-300"
            >
              <Icon icon="icon-park-solid:back" />
              <p>Sebelumnya</p>
            </Link>
            <Link
              href="/guide/sampah-anorganik/sampah-kain-tekstil"
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
              <Link href="#pendahuluan" className="hover:font-semibold">
                Pendahuluan
              </Link>
            </li>
            <li>
              <Link href="#jenis-umum" className="hover:font-semibold">
                Jenis Kertas yang Umum Ditemui
              </Link>
            </li>
            <li>
              <Link href="#tidak-didaur-ulang" className="hover:font-semibold">
                Jenis Kertas yang Tidak Dapat Didaur Ulang
              </Link>
            </li>
            <li>
              <Link href="#cara-penanganan" className="hover:font-semibold">
                Cara Penanganan Sampah Kertas oleh Individu
              </Link>
            </li>
            <li>
              <Link href="#proses-daur-ulang-industri" className="hover:font-semibold">
                Proses Pengolahan/Daur Ulang Kertas Industri
              </Link>
            </li>
          </ul>
        </Rightbar>
      </div>
    </>
  );
}
