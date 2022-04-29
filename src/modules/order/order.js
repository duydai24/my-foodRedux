import react, { useState } from "react";
import OrderContent from "./orderContent";
import Layout from "../../layout/layout";
import { Helmet } from "react-helmet";

const TITLE = "My Food - Order";

function Order() {
  return (
    <Layout>
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <OrderContent />
    </Layout>
  );
}
export default Order;
