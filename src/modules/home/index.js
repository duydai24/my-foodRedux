import React, { useState, useEffect } from "react";
import Layout from "../../layout/layout";
import BannerSlide from "./banerSlide/banerSlide";
import BestFood from "./bestFood/bestFood";
import CopyRight from "./copyRight/copyRight";
import CountDown from "./countDown/countDown";
import Delivery from "./delivery/delivery";
import FeedBack from "./feedBack/feedBack";
import Footer from "./footer/footer";
import Order from "./order/order";

function index() {
  

  
  return (
    <div className="relative">
      <Layout>
        <BannerSlide />
        <Order />
        <BestFood />
        <Delivery />
        {/* <SanwichVideo />  */}
        <CountDown />
        <FeedBack />
        <Footer />
        <CopyRight />
      </Layout>
    </div>
  );
}
export default index;
