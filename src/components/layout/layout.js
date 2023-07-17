import {ThemeContextProvider} from "../../utils/ThemeContext";
import Navigation from "./navigation";
import Header from "./header";
import Footer from "./footer";
import Sponsors from "../Sponsors/Sponsors";

export default function RootLayout({ children }) {
  return (
    <ThemeContextProvider>
      <div className={`container-lg gx-0 gx-lg-4`}>
        <Header/>
        <Navigation/>

        <main>
          {children}
        </main>

        <footer>
          <hr />
          <Sponsors/>
          <Footer/>
        </footer>
      </div>
    </ThemeContextProvider>
  );
}
