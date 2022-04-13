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
  const [stickyDown, setStickyDown] = useState(false);
  const [stickyUp, setStickyUp] = useState(false);
  const [pageoffset, setPageoffset] = useState(0);

  useEffect(() => {
    let prevScrolls = window.pageYOffset;
    window.onscroll = () => {
      let currentScrolls = window.pageYOffset;
      if (prevScrolls > currentScrolls | prevScrolls === currentScrolls) {
        setStickyDown(false);
        setStickyUp(false)
      } else {
        setStickyDown(true);
        setStickyUp(true)
      }
      setPageoffset(prevScrolls);
    };
  }, [pageoffset]);

  const _stickyDown = stickyDown ? "onTop" : "";
  const _stickyUp = stickyUp ? "onTop" : "";
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
        <button
          className={
            "w-10 h-10 rounded-full bg-red-redd text-3xl fixed bottom-20 right-5 hidden text-white text-center " +
            _stickyDown
          }
        >
          ^
        </button>
      </Layout>
    </div>
  );
}
export default index;
