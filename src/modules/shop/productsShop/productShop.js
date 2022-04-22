import react from "react";
import CopyRight from "../../home/copyRight/copyRight";
import Footer from "../../home/footer/footer";
import Header from "../../home/header/header";
import BannerShop from "../bannerShop/bannerShop";
import ProductsShopDetail from "./productShopDetail";

function ProductsShop() {
  return (
    <div>
      <Header />
      <BannerShop />
      <ProductsShopDetail />
      <Footer />
      <CopyRight />
    </div>
  );
}
export default ProductsShop;
