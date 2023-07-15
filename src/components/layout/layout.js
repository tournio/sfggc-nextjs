import {ThemeContextProvider} from "../../utils/ThemeContext";
import Navigation from "./navigation";
import Header from "./header";
import Footer from "./footer";
import Sponsors from "../Sponsors/Sponsors";

export default function RootLayout({ children }) {
  return (
    <ThemeContextProvider>
      <div className={`container-md gx-0 gx-md-4`}>
        <Header/>
        <Navigation/>

        <main>
          {children}
        </main>

        <footer>
          <Sponsors/>
          <Footer/>
        </footer>
      </div>
    </ThemeContextProvider>
  );
}
