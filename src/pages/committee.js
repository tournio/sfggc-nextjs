import RootLayout from "../components/layout/layout";
import Committee from "../components/Committee/Committee";

const CommitteePage = () => {
  return (
    <div id={'section-top'}>

      <Committee/>

      {/*<Sponsors/>*/}

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
