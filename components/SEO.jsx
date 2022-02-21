import { NextSeo } from 'next-seo';

export default function SEO() {
  const title = "Testeract"
  const description = "A simple application for generating a set of sets.";
  const base_url = "https://mkorostoff.github.io/testeract";

  return (
    <NextSeo
      title={title}
      description={description}
      canonical={base_url}
      openGraph={{
        url: base_url,
        title: title,
        description: description,
        images: [
          {
            url: `${base_url}/og.png`,
            width: 1200,
            height: 630,
            alt: title,
            type: 'image/png',
          }
        ],
        site_name: 'Testeract',
      }}
      twitter={{
        handle: '@mkorostoff',
        site: '@mkorostoff',
        cardType: 'summary_large_image',
      }}
    />
  )
}