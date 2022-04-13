import react, { useState } from "react";
import CopyRight from "../home/copyRight/copyRight";
import Footer from "../home/footer/footer";
import OrderContent from "./orderContent";
import Layout from "../../layout/layout";

function Order() {

  return (
    <>
      <Layout>
        <OrderContent />
        <Footer/>
        <CopyRight/>
      </Layout>
    </>
  );
}
export default Order;
