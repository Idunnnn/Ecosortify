import Header2 from "@/components/templates/Header2";
import Leftbar from "@/components/templates/Leftbar";
import Rightbar from "@/components/templates/Rightbar";
import Link from "next/link";
import ImageArticle from "@/components/ImageArticle";
import Article from "@/components/Article";
import { Icon } from "@iconify/react";

export default function sampahKaret() {
  return (
    <>
      <Header2 className={"fixed w-full bg-white"} />

      <div className="flex">
        <Leftbar />

        <Article>
          <h1 id="overview" className="text-2xl font-bold mb-5 text-gray-800">
            Mengenal Lebih Dalam Sampah Karet: Elastisitas yang Abadi di Lingkungan
          </h1>

          <h2 id="pendahuluan" className="text-xl font-semibold mt-8 mb-3 text-green-700">
            Pendahuluan
          </h2>
          <p>
            Karet adalah polimer elastis yang berasal dari getah pohon karet (Hevea brasiliensis) yang disebut karet alam, atau
            diproduksi secara sintetis dari produk sampingan minyak bumi yang disebut karet sintetis. Material ini sangat dihargai
            karena sifatnya yang elastis, tahan air, tahan abrasi, dan memiliki daya cengkeram yang baik. Keunggulan ini membuat
            karet menjadi bahan penting dalam berbagai industri, mulai dari ban kendaraan, sol sepatu, hingga peralatan rumah
            tangga dan medis.
          </p>
          <br />
          <p>
            Namun, di balik keunggulan sifat-sifatnya, karet menimbulkan tantangan besar dalam pengelolaan limbah. Karet adalah
            material yang sangat sulit terurai secara alami di lingkungan dan dapat bertahan selama ratusan bahkan ribuan tahun.
            Penumpukan sampah karet, terutama ban bekas, menciptakan masalah lingkungan yang signifikan:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-5">
            <li>Memakan ruang besar di TPA: Ban bekas sangat bulky dan sulit dipadatkan.</li>
            <li>
              Ancaman kebakaran: Tumpukan ban bekas sangat mudah terbakar dan menghasilkan asap hitam beracun yang sulit
              dipadamkan, mencemari udara, tanah, dan air.
            </li>
            <li>Habitat hama: Ban bekas dapat menampung air hujan dan menjadi sarang nyamuk, tikus, dan hama lainnya.</li>
            <li>Pemborosan sumber daya: Produksi karet baru, baik alam maupun sintetis, memerlukan sumber daya yang intensif.</li>
          </ul>
          <p className="mt-2">
            Oleh karena itu, daur ulang karet menjadi solusi yang sangat penting untuk mengurangi dampak negatif ini.
          </p>
          <br />

          <ImageArticle src="/images/guide/karet1.jpg" alt="Contoh Produk Karet" />

          <br />

          <h2 id="jenis-umum" className="text-xl font-semibold mt-8 mb-3 text-green-700">
            Jenis Sampah Karet yang Umum Ditemui
          </h2>
          <p className="text-gray-700 mb-2">Mayoritas sampah karet berasal dari produk-produk berikut:</p>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>
              <strong>Ban Bekas Kendaraan:</strong> Ini adalah sumber terbesar limbah karet global, mencakup ban mobil, motor,
              truk, hingga alat berat. Ban terbuat dari campuran karet alam, karet sintetis, karbon hitam, kawat baja, dan serat
              tekstil.
            </li>
            <li>
              <strong>Sol Sepatu/Sandal Bekas:</strong> Terutama sol yang terbuat dari karet padat.
            </li>
            <li>
              <strong>Sarung Tangan Karet Bekas:</strong> Meskipun sebagian besar adalah lateks (karet alam), jumlahnya
              signifikan.
            </li>
            <li>
              <strong>Karet Gelang, Karet Seal, Karet Pipa:</strong> Produk karet kecil lainnya.
            </li>
            <li>
              <strong>Komponen Karet dari Peralatan:</strong> Misalnya gasket atau seal dari mesin cuci atau kulkas yang sudah
              tidak terpakai.
            </li>
          </ol>
          <br />

          <ImageArticle src="/images/guide/karet2.jpg" alt="Contoh Produk karet" />

          <br />

          <h2 id="tidak-didaur-ulang" className="text-xl font-semibold mt-8 mb-3 text-green-700">
            Jenis Karet yang Tidak Dapat Didaur Ulang Melalui Program Standar
          </h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>
              <strong>Karet yang Tercampur Bahan Berbahaya:</strong> Misalnya, karet yang terkontaminasi bahan kimia industri
              berbahaya.
            </li>
            <li>
              <strong>Karet yang Terlalu Kecil atau Bercampur Sampah Lain:</strong> Seperti karet gelang yang tercampur sampah
              organik.
            </li>
            <li>
              <strong>Produk Karet Komposit yang Sangat Kompleks:</strong> Karet yang terikat erat dengan material lain yang
              sangat sulit dipisahkan.
            </li>
          </ol>
          <br />

          <h2 id="cara-penanganan" className="text-xl font-semibold mt-8 mb-3 text-green-700">
            Cara Penanganan Sampah Karet oleh Individu
          </h2>
          <p className="text-gray-700 mb-2">
            Meskipun daur ulang karet, terutama ban, lebih bersifat industri, ada beberapa hal yang bisa kita lakukan sebagai
            individu:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>
              <strong>Donasi atau Jual Ban Bekas (jika memungkinkan):</strong> Beberapa bengkel atau toko ban mungkin menerima ban
              bekas untuk tujuan tertentu (misalnya untuk vulkanisir ulang jika kondisinya masih memungkinkan). Ada juga beberapa
              startup atau organisasi yang mengumpulkan ban bekas untuk tujuan daur ulang. Tanyakan pada penjual ban baru apakah
              mereka memiliki program take-back.
            </li>
            <li>
              <strong>Manfaatkan untuk Upcycling:</strong> Untuk ban bekas atau produk karet yang lebih kecil, kreativitas bisa
              menjadi solusi:
              <ul className="list-disc list-inside ml-5 space-y-1">
                <li>
                  Ban Bekas: Ubah menjadi pot tanaman, kursi taman, pembatas jalan, ayunan anak, atau furniture unik. Banyak
                  komunitas atau seniman yang tertarik dengan upcycling ban.
                </li>
                <li>
                  Sol Sepatu/Sandal: Jika solnya tebal dan bersih, bisa digunakan sebagai bahan kerajinan atau material untuk
                  proyek DIY lainnya.
                </li>
                <li>Karet Gelang: Kumpulkan untuk penggunaan kembali atau sebagai bahan mainan/kerajinan anak.</li>
              </ul>
            </li>
            <li>
              <strong>Serahkan ke Titik Pengumpulan Khusus:</strong> Karena daur ulang karet seringkali membutuhkan fasilitas
              spesifik, cari tahu apakah ada titik pengumpulan limbah ban atau karet di kotamu yang bekerja sama dengan pabrik
              daur ulang. Ini bisa berupa program pemerintah daerah, inisiatif swasta, atau pengepul khusus. Hindari membuang ban
              atau karet ke TPA biasa.
            </li>
          </ol>
          <br />

          <h2 id="proses-daur-ulang-industri" className="text-xl font-semibold mt-8 mb-3 text-green-700">
            Proses Pengolahan/Daur Ulang Karet Industri
          </h2>
          <p className="text-gray-700 mb-2">
            Daur ulang karet, terutama ban, adalah proses yang kompleks karena komposisi campurannya. Ada beberapa metode utama:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>
              <strong>Pengumpulan & Penyortiran:</strong> Ban bekas dan sampah karet lainnya dikumpulkan. Ban biasanya disortir
              berdasarkan jenis (mobil, truk) dan kondisi.
            </li>
            <li>
              <strong>Pencacahan (Shredding) / Pemotongan:</strong> Ban dipotong-potong menjadi ukuran yang lebih kecil
              menggunakan mesin pencacah yang kuat. Pada tahap ini, kawat baja dan serat tekstil dalam ban seringkali akan
              terpisah dan dapat ditarik menggunakan magnet atau blower udara.
            </li>
            <li>
              <strong>Penggilingan (Grinding):</strong> Potongan karet kemudian digiling lebih lanjut menjadi remah-remah karet
              (crumb rubber) dengan ukuran partikel yang bervariasi (dari ukuran chip besar hingga serbuk halus). Proses ini bisa
              melibatkan pembekuan ban dengan nitrogen cair untuk membuatnya rapuh, lalu digiling (proses cryogenic grinding),
              atau digiling pada suhu kamar (ambient grinding).
            </li>
            <li>
              <strong>Pemurnian:</strong> Remah karet dimurnikan dari sisa-sisa kawat baja, serat tekstil, atau kontaminan lainnya
              menggunakan magnet, blower udara, atau separator getar.
            </li>
            <li>
              <strong>Penggunaan Kembali Remah Karet:</strong> Remah karet ini adalah produk utama dari daur ulang mekanis dan
              memiliki berbagai aplikasi:
              <ul className="list-disc list-inside ml-5 space-y-1">
                <li>
                  Permukaan Lapangan Olahraga: Digunakan sebagai isian untuk lapangan turf sintetis (misalnya lapangan sepak bola,
                  baseball) atau permukaan lintasan lari.
                </li>
                <li>
                  Aspal Karet (Rubberized Asphalt): Dicampur dengan aspal untuk membuat jalan yang lebih awet, tidak bising, dan
                  tahan retak.
                </li>
                <li>
                  Produk Cetakan: Digunakan untuk membuat ubin karet, speed bump, tikar lantai, sol sepatu baru, atau produk karet
                  lainnya yang dicetak.
                </li>
                <li>
                  Bahan Bakar Alternatif (TDF - Tire Derived Fuel): Ban bekas dapat dibakar sebagai bahan bakar alternatif
                  berkalori tinggi di pabrik semen atau pembangkit listrik, meskipun ini perlu dikelola dengan sangat ketat untuk
                  mengontrol emisi.
                </li>
              </ul>
            </li>
            <li>
              <strong>Pirolysis (Daur Ulang Kimia):</strong> Ini adalah metode yang lebih canggih, di mana ban dipanaskan dalam
              lingkungan tanpa oksigen. Proses ini mengurai karet menjadi minyak pirolisis (dapat digunakan sebagai bahan bakar),
              karbon hitam (dapat digunakan kembali di industri karet atau pigmen), dan gas. Metode ini menghasilkan material yang
              lebih bernilai, namun investasinya lebih besar.
            </li>
          </ol>
          <br />
          <p>
            Daur ulang karet, terutama ban, adalah industri yang terus berkembang untuk mengatasi volume limbah yang masif ini.
            Dengan mendukung inisiatif daur ulang dan memanfaatkan kembali produk karet, kita berkontribusi pada solusi yang lebih
            berkelanjutan.
          </p>
          <br />

          <div className="flex justify-between mt-14">
            <Link
              href="/guide/sampah-anorganik/sampah-kain-tekstil"
              className="py-3 px-5 bg-green-200 rounded items-center flex gap-2 hover:bg-green-300 active:bg-green-300"
            >
              <Icon icon="icon-park-solid:back" />
              <p>Sebelumnya</p>
            </Link>
            <Link
              href="/guide/sampah-elektronik"
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
                Jenis Sampah Karet yang Umum Ditemui
              </Link>
            </li>
            <li>
              <Link href="#tidak-didaur-ulang" className="hover:font-semibold">
                Jenis Karet yang Tidak Dapat Didaur Ulang
              </Link>
            </li>
            <li>
              <Link href="#cara-penanganan" className="hover:font-semibold">
                Cara Penanganan Sampah Karet oleh Individu
              </Link>
            </li>
            <li>
              <Link href="#proses-daur-ulang-industri" className="hover:font-semibold">
                Proses Pengolahan/Daur Ulang Karet Industri
              </Link>
            </li>
          </ul>
        </Rightbar>
      </div>
    </>
  );
}
