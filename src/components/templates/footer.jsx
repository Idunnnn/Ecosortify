import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="bg-black text-white py-[52px] xl:px-[100px] px-5">
      <div className="flex flex-col md:flex-row justify-between xl:items-center">
        <Link href="/" className="mb-6 md:mb-0">
          <Image src="/images/logo.png" alt="EcoSortify Logo" width={180} height={30} className="md:mx-0" />
        </Link>
        <p className="text-gray-400 text-sm">Copyright &copy; 2025 Ecosortify</p>
      </div>
    </footer>
  );
};

export default Footer;
