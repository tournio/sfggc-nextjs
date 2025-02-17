import RootLayout from "../components/layout/layout";
import Hero from "../components/Hero/Hero";
import Location from "../components/Location/Location";
import Schedule from '../components/Schedule/Schedule';
import SanFrancisco from "../components/SanFrancisco/SanFrancisco";
import Mission from "../components/Mission/Mission";
import HostVenue from "../components/HostVenue/HostVenue";

const MainPage = () => {
  return (
    <div>

      <Hero/>
      <Mission/>
      <Location/>
      <Schedule/>
      <HostVenue/>
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
