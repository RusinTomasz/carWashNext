import "../styles/globals.css";
import { FC } from "react";
import { AppProps } from "next/dist/next-server/lib/router/router";
import GlobalStyle from "../app/styles/GlobalStyle";

/* Redux */
import { wrapper } from "../store/store";
import { Provider } from "react-redux";
import store from "../store/store";

//Components
import Header from "../app/components/header/Header";
import Footer from "../app/components/footer/Footer";
import Voivodeships from "../app/components/voivodeships/Voivodeships";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyle />
      <Provider store={store}>
        <Header />
        <Component {...pageProps} />
        <Voivodeships />
        <Footer />
      </Provider>
    </>
  );
};

export default wrapper.withRedux(MyApp);
