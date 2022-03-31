import "../src/styles/globals.scss";
import { Provider, useStore } from "react-redux";
import { Helmet } from "react-helmet";

const TITLE = "My Food";

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);
  return (
    <>
      {/* {store.getState()} */}
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
