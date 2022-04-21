import react, { useState } from "react";
import { useSelector } from "react-redux";
import CopyRight from "../home/copyRight/copyRight";
import Footer from "../home/footer/footer";
import BannerShop from "./bannerShop/bannerShop";
import MenuShop from "./menuShop/menuShop";
import Layout from "../../layout/layout";

function Shop() {
  const { products } = useSelector((state) => state.product);

  return (
    <div>
      <Layout>
        <BannerShop />
        <div className="container">
          <MenuShop products={products} />
        </div>
        <Footer />
        <CopyRight />
      </Layout>
    </div>
  );
}
export default Shop;
