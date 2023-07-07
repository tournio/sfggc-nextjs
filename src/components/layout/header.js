import Head from 'next/head';

export const siteTitle = 'San Francisco Golden Gate Classic 2024';

const Header = () => (
  <Head>
    <title>{siteTitle}</title>
    <meta httpEquiv={"Content-Type"} content={"text/html; charset=utf-8"} />
    <meta name={"title"} content={siteTitle} />
    <meta name={"viewport"} content={"width=device-width, initial-scale=1.0, shrink-to-fit=no"} />
    <meta name={'description'} content={'The Golden Gate Classic is an IGBO-affiliated bowling tournament, taking place each Feburary in the San Francisco area.'} />
    <meta name={'twitter:card'} content={'summary_large_image'} />
    {/*<link rel="icon" type="image/x-icon" href="/icon.jpg" />*/}
  </Head>
);

export default Header;
