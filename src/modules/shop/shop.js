import react from "react";
import CopyRight from "../home/copyRight/copyRight";
import Footer from "../home/footer/footer";
import Header from "../home/header/header";
import BannerShop from "./bannerShop/bannerShop";
import MenuShop from "./menuShop/menuShop";
import { products } from "../../db/db";

function Shop() {
  return (
    <>
      <Header />
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
