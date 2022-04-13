import "../src/styles/globals.scss";
import { Provider } from "react-redux";
import { Helmet } from "react-helmet";
import { createWrapper } from "next-redux-wrapper";
import store from "../src/redux/store";
import { cartReducer } from "../src/redux/reducer/cartReducer";
import Layout from "../src/layout/layout";

const TITLE = "My Food";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  );
}

const makestore = () => store;
const wrapper = createWrapper(makestore);

export default wrapper.withRedux(MyApp);
