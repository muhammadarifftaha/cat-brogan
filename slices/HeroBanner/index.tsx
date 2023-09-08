/** @format */

import { mrDafoe } from "@/lib/fonts";
import { Content } from "@prismicio/client";
import { PrismicImage, SliceComponentProps } from "@prismicio/react";
import clsx from "clsx";
import { motion } from "framer-motion";

/**
 * Props for `HeroBanner`.
 */
export type HeroBannerProps = SliceComponentProps<Content.HeroBannerSlice>;

/**
 * Component for "HeroBanner" Slices.
 */
const HeroBanner = ({ slice }: HeroBannerProps): JSX.Element => {
  return (
    <section
      className="w-full h-screen relative overflow-hidden flex flex-col justify-end items-start px-16 py-8"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}>
      <PrismicImage
        field={slice.primary.background_image}
        className="-z-10 absolute top-0 left-0 w-full h-full object-cover"
      />
      <motion.h2
        initial={{ opacity: 0, x: "100vh" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
        className={clsx("text-6xl text-neutral-50")}>
        {slice.primary.banner_title}
      </motion.h2>
      <motion.h3 className="text-3xl text-neutral-50">
        {slice.primary.banner_subtitle}
      </motion.h3>
    </section>
  );
};

export default HeroBanner;
