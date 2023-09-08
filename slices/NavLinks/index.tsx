/** @format */

import { useEffect, useState } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import clsx from "clsx";
import Link from "next/link";
import { capitalize } from "lodash";

/**
 * Props for `NavLinks`.
 */
export interface NavLinksProps
  extends SliceComponentProps<Content.NavLinksSlice> {
  slice: Content.NavLinksSlice & {
    primary: {
      page: {
        id: string;
        type: string;
        tags: string[];
        lang: string;
        slug: string;
        first_publication_date: string;
        last_publication_date: string;
        uid: string;
        url: string;
        link_type: string;
        isBroken: boolean;
      };
    };
  };
}

/**
 * Component for "NavLinks" Slices.
 */
const NavLinks = ({ slice }: NavLinksProps): JSX.Element => {
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
    <Link
      href={slice.primary.page.url}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={clsx(
        "hover:-translate-y-1 transition-all duration-200 ease-in-out",
        scroll === 0
          ? "text-neutral-50 hover:text-neutral-200"
          : "text-neutral-900 hover:text-neutral-800"
      )}>
      {capitalize(slice.primary.label as string)}
    </Link>
  );
};

export default NavLinks;
