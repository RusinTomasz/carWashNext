import "../styles/globals.css";
import { FC } from "react";
import { AppProps } from "next/dist/next-server/lib/router/router";
import GlobalStyle from "../app/styles/GlobalStyle";

/* Redux */
import { wrapper } from "../store/store";
import { Provider } from "react-redux";
import store from "../store/store";
import Header from "../app/components/Header";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyle />
      <Provider store={store}>
        <Header />
        <Component {...pageProps} />
      </Provider>
    </>
  );
};

export default wrapper.withRedux(MyApp);
