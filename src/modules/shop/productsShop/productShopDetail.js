import react, { useState } from "react";
import ProductsShopDetailContent from "./productShopDetailContent";
import ProductsShopDetailTaps from "./productShopDetailTaps";
import Header from "../../home/header/header";
import Footer from "../../home/footer/footer";
import CopyRight from "../../home/copyRight/copyRight";
import Cart from "../../cart/cart";

function ProductsShopDetail() {
  const [onCart, setOnCart] = useState(false);
  const _className = onCart ? "onCart" : " ";
  return (
    <div>
      <Header className={_className} onClick={() => setOnCart(!onCart)} />
      <Cart className={_className} onClick={() => setOnCart(!onCart)} />
      <div className="container py-12">
        <ProductsShopDetailContent />
        <ProductsShopDetailTaps />
      </div>
      <Footer />
      <CopyRight />
    </div>
  );
}
export default ProductsShopDetail;
