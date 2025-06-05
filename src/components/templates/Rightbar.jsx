import clsx from "clsx";
import Link from "next/link";
export default function Rightbar({ className, children, ...props }) {
  return (
    <aside
      className={clsx(
        "fixed hidden 2xl:right-[80px] xl:flex flex-col top-20 right-0 w-[300px] h-[calc(100vh-4rem)] bg-white overflow-auto p-5 border-l-1 border-t-1 z-1 border-gray-200",
        className
      )}
      {...props}
    >
      <h2 className="font-bold text-gray-700 mb-2">Daftar Isi</h2>
      {children}
      {/* <ul className="mb-8 space-y-2 ml-3 ">
        <li className="hover:font-semibold font-medium text-gray-500">
          <Link href="/guide">Overview</Link>
        </li>
        <li className="hover:font-semibold font-medium text-[#393939]">
          <Link href="/guide/apa-itu-sampah">Apa itu sampah</Link>
        </li>
        <li className="hover:font-semibold font-medium text-[#393939]">
          <Link href="/guide/ada-berapa-jenis-sih-sampah-itu">Ada berapa jenis sih sampah itu?</Link>
        </li>
        <li className="hover:font-semibold font-medium text-[#393939]">
          <Link href="/guide/the-great-pasific-garbage-patch">The Great Pacific Garbage Patch</Link>
        </li>
      </ul> */}
    </aside>
  );
}
