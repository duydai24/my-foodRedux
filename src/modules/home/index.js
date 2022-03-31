import react, {useState} from "react";
import Cart from "../cart/cart";
import BannerSlide from "./banerSlide/banerSlide";
import BestFood from "./bestFood/bestFood";
import CopyRight from "./copyRight/copyRight";
import CountDown from "./countDown/countDown";
import Delivery from "./delivery/delivery";
import FeedBack from "./feedBack/feedBack";
import Footer from "./footer/footer";
import Header from "./header/header";
import Order from "./order/order";
import SanwichVideo from "./sanwichVideo/sanwichVideo";

function index() {
  const [onCart, setOnCart] = useState(false);
  const _className = onCart ? "onCart" : " "
  return (
 
    <div>
      <Header className={_className} onClick={() => setOnCart(!onCart)}/>
      <Cart className={_className} onClick={() => setOnCart(!onCart)}/>
      <BannerSlide />
      <Order />
      <BestFood />
      <Delivery />
      {/* <SanwichVideo /> */}
      <CountDown />
      <FeedBack />
      <Footer />
      <CopyRight />
    </div>

  );
}
export default index;
