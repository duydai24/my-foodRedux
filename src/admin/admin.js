import React, { useState, useEffect } from "react";
import Footer from "../modules/home/footer/footer";
import CopyRight from "../modules/home/copyRight/copyRight";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import OrderAdmin from "./orderAdmin";
import ProductsAdmin from "./productsAdmin";
import Layout from "../layout/layout";
import UserAdmin from "./userAdmin";
import BannerSlideAdmin from "./banerSlideAdmin";
import BannerTitle from "./banerTitle";

function Admin() {
  return (
    <Layout>
      <div className="pt-20 pb-32">
        <Tabs className="flex">
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
          </TabList>

          <TabPanel className="px-[50px] w-full hidden">
            <h2>No data</h2>
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
        </Tabs>
      </div>
    </Layout>
  );
}
export default Admin;
