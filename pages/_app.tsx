import "../styles/globals.css";
import { FC } from "react";
import { AppProps } from "next/dist/next-server/lib/router/router";
import GlobalStyle from "../app/styles/GlobalStyle";

/* Redux */
import { wrapper } from "../store/store";
import { Provider } from "react-redux";
import store from "../store/store";
import Header from "../app/components/header/Header";
import Footer from "../app/components/footer/Footer";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyle />
      <Provider store={store}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </Provider>
    </>
  );
};

export default wrapper.withRedux(MyApp);
