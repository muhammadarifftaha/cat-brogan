/** @format */

import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import Head from "next/head";
import { isFilled, asLink } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";

import { components } from "@/slices";
import { createClient } from "@/prismicio";

type Params = { uid: string };

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
    </>
  );
}

export async function getStaticProps({
  params,
  previewData,
}: GetStaticPropsContext<Params>) {
  // The `previewData` parameter allows your app to preview
  // drafts from the Page Builder.
  const client = createClient({ previewData });

  const [page, header, footer] = await Promise.all([
    client.getByUID("landing_page", params!.uid),
    client.getSingle("header"),
    client.getSingle("footer"),
  ]);

  return {
    props: { page, header, footer },
  };
}

export async function getStaticPaths() {
  const client = createClient();

  const pages = await client.getAllByType("landing_page");

  return {
    paths: pages.map((page) => {
      return asLink(page);
    }),
    fallback: false,
  };
}
