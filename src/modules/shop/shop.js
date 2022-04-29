import react, { useState } from "react";
import { useSelector } from "react-redux";
import BannerShop from "./bannerShop/bannerShop";
import MenuShop from "./menuShop/menuShop";
import Layout from "../../layout/layout";
import { Helmet } from "react-helmet";

const TITLE = "My Food - Shop";

function Shop() {
  const { products } = useSelector((state) => state.product);

  return (
    <Layout>
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <BannerShop />
      <div className="container">
        <MenuShop products={products} />
      </div>
    </Layout>
  );
}
export default Shop;
