import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import Head from "next/head";
import { isFilled } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";

import { components } from "@/slices";
import { createClient } from "@/prismicio";

export default function Page({
  page,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>{page.data.meta_title}</title>
        {isFilled.keyText(page.data.meta_description) ? (
          <meta name="description" content={page.data.meta_description} />
        ) : null}
      </Head>

      <SliceZone slices={page.data.slices} components={components} />
      <div className="h-screen" />
    </>
  );
}

export async function getStaticProps({ previewData }: GetStaticPropsContext) {
  // The `previewData` parameter allows your app to preview
  // drafts from the Page Builder.
  const client = createClient({ previewData });

  const header = await client.getSingle("header");
  const footer = await client.getSingle("footer");
  // The query fetches the page's data based on the current URL.
  const page = await client.getSingle("home_page");

  return {
    props: { page, header, footer },
  };
}
