/** @format */

import { HeaderDocumentData } from "@/prismicio-types";
import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { mrDafoe } from "@/lib/fonts";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";
import Link from "next/link";

export default function Header({ header_title, slices }: HeaderDocumentData) {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScroll(window.scrollY);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header
      className={clsx(
        "z-50",
        "",
        "w-full fixed top-0 left-0",
        scroll > 0
          ? "dark:bg-white bg-cyan-950 text-neutral-900"
          : "bg-transparent text-neutral-50",
        "flex flex-row justify-between items-center px-8 py-4",
        "transition-all duration-300 ease-in-out"
      )}>
      <Link href="/">
        <h1 className={clsx(mrDafoe.className, "text-5xl")}>{header_title}</h1>
      </Link>
      <nav className="flex flex-row gap-4">
        <SliceZone slices={slices} components={components} />
      </nav>
    </header>
  );
}
