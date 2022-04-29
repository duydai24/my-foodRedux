import react, { useState } from "react";
import ProductsShopDetailContent from "./productShopDetailContent";
import ProductsShopDetailTaps from "./productShopDetailTaps";
import Header from "../../home/header/header";
import Footer from "../../home/footer/footer";
import CopyRight from "../../home/copyRight/copyRight";
import Cart from "../../cart/cart";
import Layout from "../../../layout/layout";

function ProductsShopDetail() {
  return (
    <Layout>
      <div className="container py-12">
        <ProductsShopDetailContent />
        <ProductsShopDetailTaps />
      </div>
    </Layout>
  );
}
export default ProductsShopDetail;
