import React, { useState, useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import OrderAdmin from "./orderAdmin";
import ProductsAdmin from "./productsAdmin";
import Layout from "../layout/layout";
import UserAdmin from "./userAdmin";
import BannerSlideAdmin from "./banerSlideAdmin";
import BannerTitle from "./banerTitle";
import StatisticalAdmin from "./statisticalAdmin";
import { Helmet } from "react-helmet";
import SaleProductsAdmin from "../admin/Sale/saleProductsAdmin";

const TITLE = "My Food - Admin";

function Admin() {
  const classNameTabs =
    "bg-black pt-2 opacity-80 h-10 w-56 text-white text-center cursor-pointer outline-none";
  return (
    <Layout>
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <div className="pt-20 pb-32">
        <Tabs className="flex flex-col lg:flex-row">
          <TabList className="pl-0">
            <Tab className={classNameTabs}>Home</Tab>
            <Tab className={classNameTabs}>User</Tab>
            <Tab className={classNameTabs}>Products</Tab>
            <Tab className={classNameTabs}>Order</Tab>
            <Tab className={classNameTabs}>BannerSlide</Tab>
            <Tab className={classNameTabs}>Banner Title</Tab>
            <Tab className={classNameTabs}>Sale</Tab>
          </TabList>

          <TabPanel className="px-[50px] w-full hidden">
            <StatisticalAdmin />
          </TabPanel>
          <TabPanel className="px-[50px] w-full hidden">
            <UserAdmin />
          </TabPanel>
          <TabPanel className="px-[50px] w-full hidden">
            <ProductsAdmin />
          </TabPanel>
          <TabPanel className="px-[50px] w-full hidden">
            <OrderAdmin />
          </TabPanel>
          <TabPanel className="px-[50px] w-full hidden">
            <BannerSlideAdmin />
          </TabPanel>
          <TabPanel className="px-[50px] w-full hidden">
            <BannerTitle />
          </TabPanel>
          <TabPanel className="px-[50px] w-full hidden">
            <SaleProductsAdmin />
          </TabPanel>
        </Tabs>
      </div>
    </Layout>
  );
}
export default Admin;
