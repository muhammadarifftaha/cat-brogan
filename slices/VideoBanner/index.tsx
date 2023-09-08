/** @format */

import { Content } from "@prismicio/client";
import { PrismicImage, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `VideoBanner`.
 */
export type VideoBannerProps = SliceComponentProps<Content.VideoBannerSlice>;

/**
 * Component for "VideoBanner" Slices.
 */
const VideoBanner = ({ slice }: VideoBannerProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      dangerouslySetInnerHTML={{
        __html: slice.primary.video_embed_html as string,
      }}
      className="w-full h-full relative overflow-hidden px-16 py-8 [&_iframe]:aspect-video [&_iframe]:w-full [&_iframe]:h-auto"></section>
  );
};

export default VideoBanner;
