import RootLayout from "../components/layout/layout";
import SanFrancisco from "../components/SanFrancisco/SanFrancisco";

const SanFranciscoPage = () => {
  return (
    <div>

      <SanFrancisco full={true}/>
      {/*<Local/>*/}
      {/*<RegisterCTA/>*/}
      {/*<Contact/>*/}
      {/*<Sponsors/>*/}

    </div>
  )
}

SanFranciscoPage.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      {page}
    </RootLayout>
  );
}

export default SanFranciscoPage;
