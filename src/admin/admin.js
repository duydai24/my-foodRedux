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
import SaleAdmin from "./saleAdmin";

const TITLE = "My Food - Admin";

function Admin() {
  return (
    <Layout>
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <div className="pt-20 pb-32">
        <Tabs className="flex flex-col lg:flex-row">
          <TabList className="pl-0">
            <Tab className="bg-black pt-2 opacity-80 h-10 w-56 text-white text-center cursor-pointer outline-none">
              Home
            </Tab>
            <Tab className="bg-black pt-2 opacity-80 h-10 w-56 text-white text-center cursor-pointer outline-none">
              User
            </Tab>
            <Tab className="bg-black pt-2 opacity-80 h-10 w-56 text-white text-center cursor-pointer outline-none">
              Products
            </Tab>
            <Tab className="bg-black pt-2 opacity-80 h-10 w-56 text-white text-center cursor-pointer outline-none">
              Order
            </Tab>
            <Tab className="bg-black pt-2 opacity-80 h-10 w-56 text-white text-center cursor-pointer outline-none">
              BannerSlide
            </Tab>
            <Tab className="bg-black pt-2 opacity-80 h-10 w-56 text-white text-center cursor-pointer outline-none">
              Banner Title
            </Tab>
            <Tab className="bg-black pt-2 opacity-80 h-10 w-56 text-white text-center cursor-pointer outline-none">
              Sale
            </Tab>
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
          <TabPanel className="px-[50px] w-full mr-[400px] hidden">
            <OrderAdmin />
          </TabPanel>
          <TabPanel className="px-[50px] w-full hidden">
            <BannerSlideAdmin />
          </TabPanel>
          <TabPanel className="px-[50px] w-full hidden">
            <BannerTitle />
          </TabPanel>
          <TabPanel className="px-[50px] w-full hidden">
            <SaleAdmin />
          </TabPanel>
        </Tabs>
      </div>
    </Layout>
  );
}
export default Admin;
