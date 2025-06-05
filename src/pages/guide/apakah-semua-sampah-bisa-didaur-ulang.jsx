import Header2 from "@/components/templates/Header2";
import Leftbar from "@/components/templates/Leftbar";
import Rightbar from "@/components/templates/Rightbar";
import Link from "next/link";
import { Icon } from "@iconify/react";
import ImageArticle from "@/components/ImageArticle";
import Article from "@/components/Article";

export default function ApakahSemuaSampahBisaDiDaurUlang() {
  return (
    <>
      <Header2 className={"fixed w-full bg-white"} />

      <div className="flex">
        <Leftbar />

        <Article>
          <h1 className="text-2xl font-bold mb-5 text-gray-800">Apakah semua sampah bisa didaur ulang?</h1>

          <p>(Text disini)</p>

          
          <div className="h-[40px]"></div>
        </Article>

        <Rightbar>
          
        </Rightbar>
      </div>
    </>
  );
}
