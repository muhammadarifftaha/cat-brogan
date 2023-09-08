import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Link from "next/link";

/**
 * Props for `NestedNavLinks`.
 */
export type NestedNavLinksProps =
  SliceComponentProps<Content.NestedNavLinksSlice>;

/**
 * Component for "NestedNavLinks" Slices.
 */
const NestedNavLinks = ({ slice }: NestedNavLinksProps): JSX.Element => {
  const{items,primary} = slice
  const{page,label} = primary
  return (
    <Link
    href={"/"}
      passHref
    >
      Placeholder component for nested_nav_links (variation: {slice.variation})
      Slices
    </Link>
  );
};

export default NestedNavLinks;
