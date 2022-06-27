import react, { useState } from "react";
import BannerShop from "./bannerShop/bannerShop";
import MenuShop from "./menuShop/menuShop";
import Layout from "../../layout/layout";
import { Helmet } from "react-helmet";
import { createSelector } from "reselect";
import { connect } from "react-redux";
import { productsSelector } from "../../redux/selector/productsSelector";

const componentSelector = () =>
  createSelector([productsSelector], ({ products }) => {
    return {
      products,
    };
  });

const TITLE = "My Food - Shop";

function Shop({ products }) {
  return (
    <Layout>
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <BannerShop />
      <MenuShop products={products} />
    </Layout>
  );
}
export default connect(componentSelector)(Shop);
