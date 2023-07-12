import {ThemeContextProvider} from "../../utils/ThemeContext";
import Navigation from "./navigation";
import Header from "./header";
import Footer from "./footer";

export default function RootLayout({ children }) {
  return (
    <ThemeContextProvider>
      <div className={`container-md gx-0 gx-md-4`}>
        <Header/>
        {/*<Navigation/>*/}

        <main>
          {children}
        </main>

        <footer>
          <Footer/>
        </footer>
      </div>
    </ThemeContextProvider>
  );
}
