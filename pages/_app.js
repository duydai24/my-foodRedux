import "../src/styles/globals.scss";
import { Provider } from "react-redux";
import { Helmet } from "react-helmet";
import { createWrapper } from "next-redux-wrapper";
import store from "../src/redux/store";
import Layout from "../src/layout/layout";
import OnscrollTop from "../src/layout/onScrollTop";

const TITLE = "My Food";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <Provider store={store}>
        <Layout>
          <OnscrollTop>
          <Component {...pageProps} />
          </OnscrollTop>
        </Layout>
      </Provider>
    </div>
  );
}

const makestore = () => store;
const wrapper = createWrapper(makestore);

export default wrapper.withRedux(MyApp);
