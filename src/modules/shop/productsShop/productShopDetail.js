import react, { useState } from "react";
import ProductsShopDetailContent from "./productShopDetailContent";
import ProductsShopDetailTaps from "./productShopDetailTaps";
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
