import RootLayout from "../components/layout/layout";
import Hero from "../components/Hero/Hero";
import Location from "../components/Location/Location";
import Schedule from '../components/Schedule/Schedule';
import SanFrancisco from "../components/SanFrancisco/SanFrancisco";
import Navigation from "../components/layout/navigation";

const MainPage = () => {
  return (
    <div id={'section-top'}>

      {/*We put these together so that the Hero's background extends up to be the nav's background as well.*/}
      {/*(On mobile, at least)*/}
      <div className={`nav-and-top`}>
        <Navigation/>
        <Hero/>
        <div className={`top-image-background`}></div>
        <div className={`top-background-shade`}></div>
      </div>
      {/*<Hero/>*/}
      <Location/>
      <Schedule/>
      <SanFrancisco full={false}/>
      {/*<Local/>*/}
      {/*<RegisterCTA/>*/}
      {/*<Committee/>*/}
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
