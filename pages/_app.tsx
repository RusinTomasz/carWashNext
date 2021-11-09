import "../styles/globals.css";
import {FC, useEffect, useState} from "react";
import { AppProps } from "next/dist/next-server/lib/router/router";
import GlobalStyle from "../app/styles/GlobalStyle";

/* Redux */
import { Provider } from "react-redux";
import store from "../store/store";

//Components
import Header from "../app/components/header/Header";
import Footer from "../app/components/footer/Footer";
import Voivodeships from "../app/components/voivodeships/Voivodeships";
import { AppDataProvider } from "../app/context/AppContext";
import MainMenu from "../app/components/mainMenu/MainMenu";
import CookieConsent from "react-cookie-consent";

import TagManager from "react-gtm-module";
import {useRouter} from "next/router";

const cookieButtonStyles = {
  padding: "1rem 1.5rem 1rem",
  height: "42px",
  cursor: "pointer",
  background: "#fff50e",
  textTransform: "uppercase",
  fontFamily: "Teko",
  fontSize: "21px",
  lineHeight: "25px",
  borderRadius: "3px",
};

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  const route = useRouter();
  const [isDashboard, setIsDashboard] = useState(false);

  useEffect(() => {
    TagManager.initialize({ gtmId: "GTM-K2P6N8Q" });
  }, []);

  useEffect(() => {
    console.log("useEffect")
    route.pathname.includes("/dashboard")  ? setIsDashboard(true) : setIsDashboard(false);
  }, [route])


  return (
    <>
      <GlobalStyle />
      <Provider store={store}>
        {!isDashboard && <Header />}
        {!isDashboard && <MainMenu />}
        <AppDataProvider>
          <Component {...pageProps} />
        </AppDataProvider>
        <Voivodeships />
        <Footer />
        <CookieConsent
          style={{ background: "#74a1ff", alignItems: "center" }}
          buttonStyle={cookieButtonStyles}
          buttonText="Zamknij"
        >
          Strona korzysta z ciasteczek, aby świadczyć usługi na najwyższym
          poziomie. Dalsze korzystanie ze strony oznacza, że zgadzasz się na ich
          użycie zgodnie z Polityką prywatności oraz akceptujesz Regulamin
          Strony.
        </CookieConsent>
      </Provider>
    </>
  );
};

export default MyApp;
