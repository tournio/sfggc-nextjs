import Image from "next/image";


import RootLayout from "../components/layout/layout";
import Hero from "../components/Hero/Hero";
import Spotlight from "../components/Spotlight/Spotlight";
import Location from "../components/Location/Location";
// import Schedule from "@/components/schedule";
// import RegisterCTA from "@/components/register_cta";
// import Contact from "@/components/contact";
// import Dallas from "@/components/dallas";
// import Sponsors from "@/components/sponsors";
// import RootLayout from "../components/layout/layout";
// import Local from "@/components/local";

import bridgeImage from "../images/sf/ggb-vertical-fullsize.jpg";

const MainPage = () => {
  return (
    <div id={'top'}>

      <Hero/>
      <Location/>
      {/*<Schedule/>*/}
      {/*<Dallas full={false}/>*/}
      {/*<Local/>*/}
      {/*<RegisterCTA/>*/}
      {/*<Contact/>*/}
      {/*<Sponsors/>*/}

    </div>
  )
}

MainPage.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      {page}
    </RootLayout>
  );
}

export default MainPage;
