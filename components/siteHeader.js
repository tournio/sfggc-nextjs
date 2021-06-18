import Head from "next/head";
import React from "react";

export const siteTitle = 'San Francisco Golden Gate Classic - an IGBO bowling tournament';

const siteHeader = () => {
  return (
    <Head>
      <title>{siteTitle}</title>
      <link rel="icon" href="/logo-50x50.jpg" />

      <meta content="text/html"
            charSet="utf-8"
            httpEquiv="Content-Type" />
      <meta content="title"
            name="{siteTitle}" />
      <meta content="width=device-width, initial-scale=1, shrink-to-fit=no"
            name="viewport" />

      <meta
        name="description"
        content="San Francisco Golden Gate Classic, an IGBO bowling tournament in San Francisco, California"
      />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default siteHeader;
