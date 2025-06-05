import clsx from "clsx";
import { useState } from "react";
import Link from "next/link";
import LeftbarMenu from "../LeftbarMenu";

export default function Leftbar({ className, children, ...props }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <aside
        className={clsx(
          "hidden text-gray-800 2xl:left-[80px] lg:flex flex-col fixed top-20 left-0 w-[350px]  h-[calc(100vh-4.1rem)] bg-white overflow-y-auto p-6 border-r-1 border-t-1 border-gray-200 z-1 overflow-x-hidden",
          className
        )}
        {...props}
      >
        <h2 className="font-bold mb-2 ">Introduction</h2>
        <ul className="mb-8 space-y-2 ml-3  ">
          <li className="hover:font-semibold font-medium ">
            <Link href="/guide/">Overview</Link>
          </li>
          <li className="hover:font-semibold font-medium ">
            <Link href="/guide/apa-itu-sampah">Apa itu sampah?</Link>
          </li>
          <li className="hover:font-semibold font-medium ">
            <Link href="/guide/apa-itu-bank-sampah">Apa itu bank sampah?</Link>
          </li>
          <li className="hover:font-semibold font-medium ">
            <Link href="/guide/the-great-pacific-garbage-patch">The Great Pacific Garbage Patch</Link>
          </li>
        </ul>

        <LeftbarMenu />

        <h2 className="font-bold mb-2 ">FAQ</h2>
        <ul className="mb-8 space-y-2 ml-3  ">
          <li className="hover:text-black font-medium ">
            <Link href="/guide/apakah-semua-sampah-bisa-didaur-ulang">Apakah semua sampah bisa didaur ulang?</Link>
          </li>
        </ul>
      </aside>

      <div className="relative lg:hidden">
        <button
          className="fixed bottom-4 right-0 z-50 px-6 py-3  bg-green-600 text-white rounded shadow"
          onClick={() => setOpen(!open)}
        >
          {open ? "Hide" : "Show"}
        </button>

        {open && <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={() => setOpen(false)} />}

        <aside
          className={
            open
              ? "text-gray-800 fixed top-0 left-0 z-40 h-full w-[350px] bg-white shadow-lg overflow-y-auto p-5 transition-all duration-200 border-r-1 border-t-1 border-gray-200 "
              : "text-gray-800 fixed top-0 -left-[350px] z-40 h-full w-[350px] bg-white shadow-lg overflow-y-auto p-5 transition-all duration-200"
          }
          {...props}
        >
          <h2 className="font-bold mb-2 ">Introduction</h2>
          <ul className="mb-8 space-y-2 ml-3  ">
            <li className="hover:font-semibold font-medium ">
              <Link href="/guide/">Overview</Link>
            </li>
            <li className="hover:font-semibold font-medium ">
              <Link href="/guide/apa-itu-sampah">Apa itu sampah</Link>
            </li>
            <li className="hover:font-semibold font-medium ">
              <Link href="/guide/ada-berapa-jenis-sih-sampah-itu">Ada berapa jenis sih sampah itu?</Link>
            </li>
            <li className="hover:font-semibold font-medium ">
              <Link href="/guide/the-great-pacific-garbage-patch">The Great Pacific Garbage Patch</Link>
            </li>
          </ul>

          <LeftbarMenu />

          <h2 className="font-bold mb-2">FAQ</h2>
          <ul className="mb-8 space-y-2 ml-3  ">
            <li className="hover:text-black font-medium ">
              <Link href="/guide/apakah-semua-sampah-bisa-didaur-ulang?">Apakah semua sampah bisa didaur ulang?</Link>
            </li>
          </ul>
        </aside>
      </div>
    </>
  );
}
