import "../src/styles/globals.scss";
import { Provider } from "react-redux";
import { Helmet } from "react-helmet";
import { createWrapper } from "next-redux-wrapper";
import store from "../src/redux/store";
import OnscrollTop from "../src/layout/onScrollTop";
const TITLE = "My Food";
import { useEffect, useState } from "react";
import { WebpMachine } from "webp-hero";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const webpMachine = new WebpMachine();
    webpMachine.polyfillDocument();
  });

  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(true), []);

  return (
    <div>
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <Provider store={store}>
        <OnscrollTop>{loaded && <Component {...pageProps} />}</OnscrollTop>
      </Provider>
    </div>
  );
}

const makestore = () => store;
const wrapper = createWrapper(makestore);

export default wrapper.withRedux(MyApp);
