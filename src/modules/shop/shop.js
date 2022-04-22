import react, { useState } from "react";
import { useSelector } from "react-redux";
import BannerShop from "./bannerShop/bannerShop";
import MenuShop from "./menuShop/menuShop";
import Layout from "../../layout/layout";

function Shop() {
  const { products } = useSelector((state) => state.product);

  return (
    <Layout>
      <BannerShop />
      <div className="container">
        <MenuShop products={products} />
      </div>
    </Layout>
  );
}
export default Shop;
