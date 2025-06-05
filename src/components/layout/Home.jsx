import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import Header1 from "../templates/Header1";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 300,
    });
  }, []);

  return (
    <>
      <div
        className="min-h-screen text-white"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url("/images/home-cover.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <Header1 />

        {/* (main hero section) */}
        <section className="flex flex-col items-start justify-center min-h-[calc(100vh-100px)] text-white px-7 md:items-center">
          <div className="flex flex-col items-start w-full max-w-[380px] md:max-w-[650px] md:items-center">
            <h1 className="font-bold  text-[40px] text-left md:text-[52px] md:text-center">Untuk Bumi yang Lebih Bersih</h1>

            <p className="font-normal mt-5 text-[20px] text-left max-w-[380px] md:max-w-[650px] md:text-center">
              Satu artikel bisa mengubah cara kita melihat dan mengelola sampah
            </p>

            <div className="flex gap-5 mt-10 flex-wrap self-start md:self-center lg:w-auto ">
              <Link href="/scan">
                <Button variant="figma_green_solid">Scan</Button>
              </Link>
              <Link href="/chatbot">
                <Button variant="figma_green_reversed">Chatbot</Button>
              </Link>
            </div>
          </div>
        </section>

        {/*Realita Sampah Section */}
        <section className="bg-white text-gray-800py-[60px] px-5 py-[60px] md:px-[52px] lg:py-24 lg:px-8">
          <div
            className="max-w-[412px] mx-auto flex flex-col items-start gap-8 md:max-w-[1023px]  md:flex-row md:items-center md:gap-20 lg:max-w-6xl 
          lg:gap-20 lg:flex-row lg:items-center justify-center"
          >
            {/* Image Section */}
            <div className=" hidden lg:block  justify-center w-[519px] h-[475px] md:w-[351px] md:h-[333px]">
              <div className="relative shadow-lg border border-gray-200 rounded-lg overflow-hidden w-full h-full ">
                <Image
                  src="/images/realita-sampah-cover.jpg"
                  alt="Tangan memegang kantong sampah"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>

            {/* Text Content Section */}
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className=" w-full  max-w-[380px] flex flex-col items-start gap-2 md:w-1/2 md:max-w-[488px] md:items-start md:gap-2 lg:max-w-[572px] lg:items-start "
            >
              {/* "REALITA SAMPAH DI SEKITAR KITA" Paragraph */}
              <p className="font-normal uppercase text-[14px] text-[#0B5C31] mb-2 w-auto max-w-[245px] text-left md:text-[16px] md:max-w-[280px]   lg:max-w-none ">
                REALITA SAMPAH DI SEKITAR KITA
              </p>

              {/* "Kita Menghasilkan 10 Juta Ton Sampah Setiap Harinya!" Heading */}
              <h2 className="text-black heading-4 mb-5 w-full max-w-[380px] text-left md:text-[32px] md:max-w-[488px] lg:text-[36px] lg:max-w-none ">
                Kita Menghasilkan 10 Juta Ton Sampah Setiap Harinya!
              </h2>

              {/* Long Paragraph */}
              <p className="body-6 w-full max-w-[380px] text-gray-800 text-left md:max-w-[488px] lg:max-w-none">
                Menurut United Nations Programme (UNEP), sekitar 33% sampah yang dihasilkan diseluruh dunia tidak dikelola dengan
                baik, sampah-sampah ini berakhir menumpuk di Tempat Pembuangan Akhir (TPA). Beberapa sumber menyebutkan alasan
                tidak terkelola dengan baik adalah pemisahan sampah yang buruk, kesadaran masyarakat yang rendah dan sampah yang
                terkontaminasi.
              </p>
            </div>
          </div>
        </section>

        {/* Mengapa Edukasi Sampah Itu Penting? */}
        <section className="relative bg-[#003419] flex xl:justify-between justify-center items-center w-full">
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="flex flex-col lg:max-w-[750px] xl:max-w-[900px] w-full md:px-[52px] px-7 xl:px-[100px] gap-4 md:gap-6 lg:gap-7 py-14"
          >
            {/* LAYANAN EDUKATIF & Mengapa Edukasi Sampah Itu Penting ? */}
            <div className="flex flex-col gap-2 w-full">
              <p className="uppercase  text-[#34F489] body-6">LAYANAN EDUKATIF</p>
              <h2 className=" text-white heading-2">Mengapa Edukasi Sampah Itu Penting?</h2>
            </div>

            <p className="text-gray-300 body-6 w-full ">
              Perubahan besar dimulai dari pengetahuan yang sederhana. Dengan memahami dampak sampah terhadap lingkungan, kita
              bisa mulai membentuk kebiasaan yang lebih bertanggung jawab
            </p>

            {/* Benefit Cards Grid */}
            <div className="grid grid-cols-2 gap-11 md:grid-cols-3 w-full ">
              {/* Individual Benefit Card 1 */}
              <div className="text-center flex flex-col gap-10 px-4 pb-10 pt-20 pr-5 w-[210px]  items-center">
                <Image src="/images/icon/forest.png" alt="hutan" width={80} height={80} />
                <h3 className="mb-2 subheading-6 text-gray-300">Meningkatkan kesadaran lingkungan</h3>
              </div>

              {/* Individual Benefit Card 2 */}
              <div className="text-center flex flex-col gap-10 px-4 pb-10 pt-20 pr-5 w-[210px]  items-center">
                <Image src="/images/icon/planet-earth.png" alt="planet" width={80} height={80} />
                <h3 className="mb-2 subheading-6 text-gray-300">Menghemat Sumber Daya Alam</h3>
              </div>

              {/* Individual Benefit Card 3 */}
              <div className="text-center flex flex-col gap-10 px-4 pb-10 pt-20 pr-5 w-[210px]  items-center col-span-2 md:col-span-1 mx-auto ">
                <Image src="/images/icon/law.png" alt="Law Document Icon" width={80} height={80} />
                <h3 className="mb-2 subheading-6 text-gray-300">Mendorong Kebijakan yang Lebih Baik</h3>
              </div>
            </div>
          </div>

          <div className="hidden xl:block absolute right-0 top-0 bottom-0 lg:w-[500px] 2xl:w-[600px] rounded-[4px] overflow-hidden ">
            <Image
              src="/images/layanan-edukatif.jpg"
              alt="Anak-anak belajar tentang lingkungan"
              fill
              style={{ objectFit: "cover" }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/25 to-black/50" />
          </div>
        </section>

        {/* Apa Kata Mereka?  */}
        <section className="bg-white py-16 md:py-24 text-gray-800">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center md:text-left flex flex-col md:flex-row md:justify-between md:items-end">
              <div>
                <p className="text-sm font-semibold text-green-600 uppercase mb-2 tracking-wide">PESAN DARI LINGKUNGAN</p>
                <h2 className="text-4xl md:text-5xl font-bold leading-tight">Apa Kata Mereka?</h2>
              </div>
              <p className="body-6 text-gray-700 max-w-lg mt-4 md:mt-0 md:ml-8">
                Testimoni dari berbagai kalangan yang menunjukkan pentingnya peran kita semua dalam mengatasi pencemaran sampah
              </p>
            </div>

            {/* Testimonial Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Card 1: Kencanaonline.com */}
              <div
                data-aos="fade-up"
                data-aos-duration="2000"
                className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm flex flex-col "
              >
                <div className="flex items-center mb-4">
                  <Image
                    src="/images/kencanaonline.png"
                    alt="Kencanaonline Logo"
                    width={48}
                    quality={10}
                    height={48}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-bold text-xl">Kencanaonline.com</h3>
                    <p className="text-sm text-gray-500">Media Online</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed flex-grow">
                  Pengelolaan sampah yang tidak tepat, terutama pencampuran antara sampah organik dan anorganik, dapat menyebabkan
                  dampak negatif yang signifikan baik terhadap lingkungan maupun ekonomi
                </p>
              </div>

              {/* Card 2: World Health Organization (WHO) */}
              <div
                data-aos="fade-up"
                data-aos-duration="2000"
                className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm flex flex-col"
              >
                <div className="flex items-center mb-4">
                  <Image
                    src="/images/WHO.png"
                    alt="Kencanaonline Logo"
                    width={48}
                    quality={10}
                    height={48}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-bold text-xl">World Health Organization (WHO)</h3>
                    <p className="text-sm text-gray-500">Media Online</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed flex-grow">
                  Pengelolaan sampah yang tidak tepat dapat menyebabkan penyebaran penyakit dan pencemaran lingkungan
                </p>
              </div>

              {/* Card 3: United Nations (UN) */}
              <div
                data-aos="fade-up"
                data-aos-duration="2000"
                className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm  flex flex-col "
              >
                <div className="flex items-center mb-4">
                  <Image
                    src="/images/united-nations.png"
                    alt="Kencanaonline Logo"
                    width={48}
                    height={48}
                    quality={10}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-bold text-xl">United Nations (UN)</h3>
                    <p className="text-sm text-gray-500">Lembaga Dunia</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed flex-grow">
                  Untuk mengatasi krisis sampah, manusia harus memperlakukan sampah sebagai sumber daya
                </p>
              </div>

              {/* Card 4: United Nations Environment Programme (UNEP) */}
              <div
                data-aos="fade-up"
                data-aos-duration="2000"
                className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm flex flex-col"
              >
                <div className="flex items-center mb-4">
                  <Image
                    src="/images/UNEP.png"
                    alt="Kencanaonline Logo"
                    width={48}
                    height={48}
                    quality={10}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-bold text-xl">United Nations Environment Programme (UNEP)</h3>
                    <p className="text-sm text-gray-500">Lembaga Dunia</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed flex-grow">
                  Tanpa tindakan yang berarti, jumlah plastik yang masuk ke ekosistem perairan diperkirakan hampir tiga kali
                  lipat, dari 11 juta ton pada tahun 2016 menjadi 29 juta ton pada tahun 2040
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mari Kita Buat Bumi Yang Lebih Baik! */}
        <section className="relative overflow-hidden py-16 md:py-24 xl:py-32 bg-[#003419] text-white">
          <div className="absolute inset-y-0 left-0 w-full md:w-1/2 lg:w-2/5 lg:block hidden">
            {/* Gambar */}
            <Image
              src="/images/demi-masa-depan.jpg"
              alt="Orang-orang sedang berbincang santai"
              fill
              sizes="(max-width: 768px) 100vw"
              style={{ objectFit: "cover" }}
            />

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/90 z-10" />
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className=" xl:max-w-7xl mx-auto px-7 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row-reverse"
          >
            {/* Right Content Area (text and cards) */}
            <div className="w-full  lg:w-3/5 md:pl-12 lg:pl-24">
              <p className="body-6 text-[#34F489] uppercase mb-2 ">DEMI MASA DEPAN</p>
              <h2 className="heading-2 mb-8">Mari Kita Buat Bumi Yang Lebih Baik!</h2>
              <p className="body-6 text-gray-200 leading-relaxed mb-12">
                Lingkungan yang lebih baik dimulai dari kepedulian kita
              </p>

              {/* Action Cards Grid */}
              <div className="grid grid-cols-2 gap-4">
                {/* Card 1: Buang sampah */}
                <div className="bg-green-700 rounded-lg p-6 flex items-start gap-5 flex-col">
                  <Image src="/images/icon/litter.png" alt="Trash Bin Icon" width={48} height={48} />
                  <div>
                    <h3 className="font-semibold text-xl mb-1">Buang sampah pada tempat sampah</h3>
                  </div>
                </div>

                {/* Card 2: Pilah sampah */}
                <div className="bg-green-700 rounded-lg p-6 flex items-start gap-5 flex-col">
                  <Image src="/images/icon/reach.png" alt="Sort Trash Icon" width={48} height={48} />
                  <div>
                    <h3 className="font-semibold text-xl mb-1">Pilah sampah sebelum di buang</h3>
                  </div>
                </div>

                {/* Card 3: Kurangi plastik */}
                <div className="bg-green-700 rounded-lg p-6 flex items-start gap-5 flex-col">
                  <Image src="/images/icon/ad-blocker.png" alt="No Plastic Icon" width={48} height={48} />
                  <div>
                    <h3 className="font-semibold text-xl mb-1">Kurangi penggunaan plastic</h3>
                  </div>
                </div>

                {/* Card 4: Edukasi dan ajak */}
                <div className="bg-green-700 rounded-lg p-6 flex items-start gap-5 flex-col">
                  <Image src="/images/assets/add-user.png" alt="Educate Icon" width={48} height={48} />
                  <div>
                    <h3 className="font-semibold text-xl mb-1">Edukasi dan ajak orang lain</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Panduan Ini Bisa Bantu Kamu Beraksi Untuk Lingkungan */}
        <section className="bg-white py-16 md:py-24 text-gray-800">
          <div className="max-w-6xl mx-auto px-7 sm:px-6 lg:px-8">
            <div className="mb-12">
              <p className="body-6 text-green-800 uppercase mb-2">FEATURED GUIDE</p>
              <h2 className="heading-3 text-gray-800 leading-tight">Panduan ini bisa bantu kamu beraksi untuk lingkungan</h2>
            </div>

            <div data-aos="fade-up" duration="1000" className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {/* Card 1: Organik  */}
              <Link
                href="/guide/sampah-organik/pengenalan"
                className="relative bg-gray-100 rounded-xl overflow-hidden shadow-lg group col-span-3 row-span-2"
              >
                <div className="relative h-64 lg:h-full w-full">
                  <Image
                    src="/images/guide/organik.jpg"
                    alt="Sampah Organik"
                    fill
                    style={{ objectFit: "cover" }}
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/90 z-2" />
                  <div className="absolute bottom-4 left-4 text-white z-3 p-2">
                    <h3 className="font-bold text-2xl mb-1">
                      Organik <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">↗</span>
                    </h3>
                    <p className="text-sm">Temukan tentang tata cara pengelolaan sampah organik</p>
                  </div>
                </div>
              </Link>

              {/* Card 2: Anorganik */}
              <Link
                href="/guide/sampah-anorganik/pengenalan"
                className="relative bg-gray-100 rounded-xl overflow-hidden shadow-lg group col-span-3 lg:col-span-2"
              >
                <div className="relative h-64 w-full">
                  <Image
                    src="/images/guide/anorganik.jpg"
                    alt="Sampah Anorganik"
                    fill
                    style={{ objectFit: "cover" }}
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/90 z-2" />
                  <div className="absolute bottom-4 left-4 text-white z-3 ">
                    <h3 className="font-bold text-2xl mb-1">
                      Anorganik{" "}
                      <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">↗</span>
                    </h3>
                    <p className="text-sm">Temukan tentang tata cara pengelolaan sampah anorganik</p>
                  </div>
                </div>
              </Link>

              {/* Card 3: B3 */}
              <Link
                href="/guide/sampah-residu-b3/pengenalan"
                className="relative bg-gray-100 rounded-xl overflow-hidden shadow-lg group col-span-3 lg:col-span-2"
              >
                <div className="relative h-64 w-full">
                  <Image
                    src="/images/guide/B3.jpeg"
                    alt="Sampah B3"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ objectFit: "cover" }}
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/90 z-2" />
                  <div className="absolute bottom-4 left-4 text-white z-3">
                    <h3 className="font-bold text-2xl mb-1">
                      B3 <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">↗</span>
                    </h3>
                    <p className="text-sm">Temukan tentang tata cara pengelolaan sampah B3</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Biarkan AI membantu mu Section */}
        <section
          className="py-20 px-7 md:px-[52px] xl:px-[100px] text-white relative"
          style={{
            background:
              "linear-gradient(96.9deg, #30382F 13.09%, #41583E 59.96%, #317C27 68.32%, #35AA25 94.84%, #5ABE4D 105.34%)",
          }}
        >
          <div className="max-w-6xl mx-auto ">
            <div className="relative bg-white rounded-[20px] border xl:h-[350px] h-[300px] border-[#E8E8E8] flex flex-col md:flex-row items-center justify-between px-10 py-6">
              <div
                data-aos="fade-up"
                duration="1000"
                className="relative z-10 w-full h-full md:w-1/2 text-gray-800 flex flex-col justify-center"
              >
                <h2 className="body-5 text-black mb-7">Biarkan AI membantu mu dalam hal pengelolaan sampah</h2>
                <Link href="/chatbot">
                  <Button variant="figma_white_outline_pill" className="hover:cursor-pointer">
                    Chatbot
                  </Button>
                </Link>
              </div>

              {/* Gambar robot */}
              <div className="absolute right-0 bottom-0 w-[170px] h-[170px] lg:h-[400px] lg:w-[400px]">
                <div className="relative w-full h-full">
                  <Image src="/images/robot.png" alt="Blue Robot" fill className="object-contain" priority />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
