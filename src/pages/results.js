import RootLayout from "../components/layout/layout";
import Results from "../components/Results/Results";
import ScrMstWinners from "../components/ScrMstWinners/ScrMstWinners";

const CommitteePage = () => {
  return (
    <div>

      <Results/>
      <ScrMstWinners/>

    </div>
  )
}

CommitteePage.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      {page}
    </RootLayout>
  );
}

export default CommitteePage;
