import RootLayout from "../components/layout/layout";
import Committee from "../components/Committee/Committee";
import Rules from "../components/Rules/Rules";

const RulesPage = () => {
  return (
    <div>

      <Rules/>

    </div>
  )
}

RulesPage.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      {page}
    </RootLayout>
  );
}

export default RulesPage;
