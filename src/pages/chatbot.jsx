import Image from "next/image";
import { useState, useRef, useCallback, useEffect } from "react";
import Link from "next/link";
import Header2 from "@/components/templates/Header2";

import Chat from "@/components/layout/Chat";

export default function ChatbotPage() {
  return (
    <>
      <Header2 />
      <Chat />
    </>
  );
}
