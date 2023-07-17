import RootLayout from "../components/layout/layout";
import Hero from "../components/Hero/Hero";
import Location from "../components/Location/Location";
import Schedule from '../components/Schedule/Schedule';
import SanFrancisco from "../components/SanFrancisco/SanFrancisco";
import Beneficiary from "../components/Beneficiary/Beneficiary";

const MainPage = () => {
  return (
    <div>

      <Hero/>
      <Location/>
      <Schedule/>
      <SanFrancisco full={false}/>
      <Beneficiary/>

      {/*<RegisterCTA/>*/}

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
