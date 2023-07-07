import Hero from "../components/Hero/Hero";
// import Location from "@/components/location";
// import Schedule from "@/components/schedule";
// import RegisterCTA from "@/components/register_cta";
// import Contact from "@/components/contact";
// import Dallas from "@/components/dallas";
// import Sponsors from "@/components/sponsors";
// import RootLayout from "../components/layout/layout";
import RootLayout from "../components/layout/layout";
// import Local from "@/components/local";

const MainPage = () => {
  return (
    <div>
      <h1>Let&apos;s do this!</h1>
      <Hero/>
      {/*<Location/>*/}
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
