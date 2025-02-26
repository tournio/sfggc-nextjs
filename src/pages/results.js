import RootLayout from "../components/layout/layout";
import Results from "../components/Results/Results";
import ScrMstWinners from "../components/ScrMstWinners/ScrMstWinners";

const ResultsPage = () => {
  return (
    <div>

      <Results/>
      <ScrMstWinners/>

    </div>
  )
}

ResultsPage.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      {page}
    </RootLayout>
  );
}

export default ResultsPage;
