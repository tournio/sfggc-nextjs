import RootLayout from "../components/layout/layout";
import Hero from "../components/Hero/Hero";
import Location from "../components/Location/Location";
import Schedule from '../components/Schedule/Schedule';

const MainPage = () => {
  return (
    <div id={'top'}>

      <Hero/>
      <Location/>
      <Schedule/>
      {/*<SanFrancisco full={false}/>*/}
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
