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
      className="w-full h-full relative overflow-hidden px-16 py-8 [&_iframe]:aspect-video [&_iframe]:w-full [&_iframe]:h-auto">
      {slice.primary.youtube_video_id && (
        <iframe
          title={slice.primary.youtube_video_id as string}
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${slice.primary.youtube_video_id}?rel-0&autoplay=1`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen></iframe>
      )}
    </section>
  );
};

export default VideoBanner;
