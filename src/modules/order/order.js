import react, {useState} from "react";
import CopyRight from "../home/copyRight/copyRight";
import Footer from "../home/footer/footer";
import Header from "../home/header/header";
import Cart from "../cart/cart";
import OrderContent from "./orderContent";

function Order() {
  const [onCart, setOnCart] = useState(false);
  const _className = onCart ? "onCart" : " ";



  return (
    <>
      <Header className={_className} onClick={() => setOnCart(!onCart)} />
      <Cart className={_className} onClick={() => setOnCart(!onCart)} />
      <OrderContent/>
      <Footer />
      <CopyRight />
    </>
  );
}
export default Order;
