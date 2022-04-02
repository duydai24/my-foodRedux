import react, {useState} from "react";
import { useSelector } from "react-redux";
import CopyRight from "../home/copyRight/copyRight";
import Footer from "../home/footer/footer";
import Header from "../home/header/header";
import BannerShop from "./bannerShop/bannerShop";
import MenuShop from "./menuShop/menuShop";
import Cart from "../cart/cart";

function Shop() {
  const [onCart, setOnCart] = useState(false);
  const _className = onCart ? "onCart" : " ";

  const { products } = useSelector((state) => state.products);


  return (
    <>
      <Header className={_className} onClick={() => setOnCart(!onCart)} />
      <Cart className={_className} onClick={() => setOnCart(!onCart)} />
      <BannerShop />
      <div className="container">
        <MenuShop products={products} />
      </div>
      <Footer />
      <CopyRight />
    </>
  );
}
export default Shop;
