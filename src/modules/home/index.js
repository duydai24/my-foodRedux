import React from "react";
import Layout from "../../layout/layout";
import BannerSlide from "./banerSlide/banerSlide";
import BestFood from "./bestFood/bestFood";
import CountDown from "./countDown/countDown";
import Delivery from "./delivery/delivery";
import FeedBack from "./feedBack/feedBack";
import Order from "./order/order";
import SanwichVideo from "./sanwichVideo/sanwichVideo";

function index() {
  return (
    <div>
      <Layout>
        <BannerSlide />
        <Order />
        <BestFood />
        <Delivery />
        <SanwichVideo />
        <CountDown />
        <FeedBack />
      </Layout>
    </div>
  );
}
export default index;
