import { NextSeo } from "next-seo";
import { useEffect, useState } from "react";

export interface SeoHead {
  title?: string;
  description?: string;
  thumbnailUrl?: string;
  pageType?: string;
  additionalMetaTagsProperties?: string[];
}

export default function SeoHead({
  title,
  description,
  thumbnailUrl,
  pageType,
  additionalMetaTagsProperties,
}: SeoHead) {
  const [isPageMounted, setPageMounted] = useState<boolean>(false);

  useEffect(() => setPageMounted(true), []);

  return (
    isPageMounted && (
      <NextSeo
        additionalMetaTags={
          additionalMetaTagsProperties?.map((prop) => ({
            property: prop,
            content: window.location.href,
          })) ?? []
        }
        {...{
          ...(title ? { title: `${title} | Forca` } : {}),
          ...(description ? { description } : {}),
          openGraph: {
            url: window.location.href,
            ...(pageType ? { type: pageType } : {}),
            ...(title ? { siteName: `${title} | Forca` } : {}),
            ...(description ? { description } : {}),
            ...(thumbnailUrl ? { images: [{ url: thumbnailUrl }] } : {}),
            ...(title ? { title } : {}),
          },
          twitter: {
            site: window.location.href,
          },
        }}
      />
    )
  );
}
