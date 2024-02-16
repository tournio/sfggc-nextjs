import RootLayout from "../components/layout/layout";
import Results from "../components/Results/Results";

const CommitteePage = () => {
  return (
    <div>

      <Results/>

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
