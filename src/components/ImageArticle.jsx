import clsx from "clsx";
import Image from "next/image";

export default function ImageArticle({ className, src, alt, ...props }) {
  return (
    <div
      className={clsx(
        "max-h-[350px] h-full max-w-[700px] w-full rounded-lg overflow-hidden mx-auto my-8",
        className
      )}
    >
      <Image src={src} alt={src} quality={30} width={500} height={500} className="h-full w-full object-cover" />
    </div>
  );
}
