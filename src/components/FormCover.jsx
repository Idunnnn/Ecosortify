import Image from "next/image";

export default function FormCover({ ...props }) {
  return (
    <div className="hidden lg:block fixed top-0 bottom-0 left-0 w-[60%] h-full min-h-screen overflow-hidden ">
      <div className="relative w-full h-full min-h-screen">
        <Image src="/images/register-login.jpg" alt="cover" quality={25} fill style={{ objectFit: "cover" }} />
      </div>
    </div>
  );
}
