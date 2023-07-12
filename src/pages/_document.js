import {Html, Head, Main, NextScript} from "next/document";
import Navigation from "../components/layout/navigation";
import Hero from "../components/Hero/Hero";

const Document = () => (
  <Html>
    <Head>
      <link
        href={'https://fonts.googleapis.com/css2?family=Lato&display=swap'}
        rel={'stylesheet'}/>
      <link
        href={'https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap'}
        rel={'stylesheet'}/>
    </Head>
    <body>
      <div className={`nav-and-top`}>
        {/*  <Navigation/>*/}
        {/*  <Hero/>*/}
        <div className={`top-image-background`}></div>
        <div className={`top-background-shade`}></div>

        <Main/>
        <NextScript/>
      </div>
    </body>
  </Html>
)

export default Document;
