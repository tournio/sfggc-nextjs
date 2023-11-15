import RootLayout from "../components/layout/layout";
import Hero from "../components/Hero/Hero";
import Location from "../components/Location/Location";
import Schedule from '../components/Schedule/Schedule';
import SanFrancisco from "../components/SanFrancisco/SanFrancisco";

const MainPage = () => {
  return (
    <div>

      <Hero/>
      <Location/>
      <Schedule/>
      <SanFrancisco full={false}/>

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
