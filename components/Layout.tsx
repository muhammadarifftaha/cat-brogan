/** @format */

import React from "react";
import Header from "./Header";
import { FooterDocument, HeaderDocument } from "@/prismicio-types";
import Footer from "./Footer";
import { Poppins as Font } from "next/font/google";
import clsx from "clsx";

const font = Font({
  display: "swap",
  subsets: ["latin"],
  weight: ["400"],
});

export interface LayoutProps {
  header: HeaderDocument;
  footer: FooterDocument;
  children: React.ReactNode;
}

export default function Layout({ header, footer, children }: LayoutProps) {
  return (
    <div className={clsx(font.className, "")}>
      {header && <Header {...header.data} />}
      <main>{children}</main>
      {footer && <Footer {...footer.data} />}
    </div>
  );
}
