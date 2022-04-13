import React, { useState, useEffect } from "react";
import Footer from "../modules/home/footer/footer";
import CopyRight from "../modules/home/copyRight/copyRight";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import OrderAdmin from "./orderAdmin";
import ProductsAdmin from "./productsAdmin";
import Layout from "../layout/layout";

function Admin() {
  const [onCart, setOnCart] = useState(false);
  const _className = onCart ? "onCart" : " ";

  return (
    <>
      <Layout>
        <div className="pt-20 pb-32">
          <Tabs className="flex">
            <TabList className="pl-0">
              <Tab className="bg-black pt-2 opacity-80 h-10 w-56 text-white text-center cursor-pointer">
                Home
              </Tab>
              <Tab className="bg-black pt-2 opacity-80 h-10 w-56 text-white text-center cursor-pointer">
                Products
              </Tab>
              <Tab className="bg-black pt-2 opacity-80 h-10 w-56 text-white text-center cursor-pointer">
                Order
              </Tab>
            </TabList>

            <TabPanel className="px-[50px] w-full">
              <h2>No data</h2>
            </TabPanel>
            <TabPanel className="px-[50px] w-full">
              <ProductsAdmin />
            </TabPanel>
            <TabPanel className="px-[50px] w-full mr-[400px]">
              <OrderAdmin />
            </TabPanel>
          </Tabs>
        </div>
        <Footer />
        <CopyRight />
      </Layout>
    </>
  );
}
export default Admin;
