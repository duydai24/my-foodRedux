import React, { useState, useEffect } from "react";
import Layout from "../layout/layout";
import { Helmet } from "react-helmet";
import { useRouter } from "next/router";
import Link from "next/link";

const TITLE = "My Food - Admin";

function Admin({ children }) {
  return (
    <Layout>
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <div className="mt-16 grid gap-[5%] menuAdmin">
        <MenuAdmin />
        <div className="my-5">
          <main>{children}</main>
        </div>
      </div>
    </Layout>
  );
}

function MenuAdminItem({ source, name }) {
  const router = useRouter();
  const _active = router.pathname === source ? "bg-red-redd" : "";
  const classNameMenuAdmin =
    "text-white pt-2 w-full h-10 fo text-center cursor-pointer outline-none ";
  return (
    <Link href={source} passHref>
      <p className={classNameMenuAdmin + _active}>{name}</p>
    </Link>
  );
}
function MenuAdmin() {
  return (
    <div className="bg-[url('/bgMobileMenu.jpg')] opacity-80 h-full">
      <MenuAdminItem source={"/Admin/StatisticalAdmin"} name={"Statistical"} />
      <MenuAdminItem source={"/Admin/UserAdmin"} name={"User"} />
      <MenuAdminItem source={"/Admin/ProductAdmin"} name={"Products"} />
      <MenuAdminItem source={"/Admin/OrderAdmin"} name={"Order"} />
      <MenuAdminItem source={"/Admin/BannerAdmin"} name={"BannerSlide"} />
      <MenuAdminItem source={"/Admin/SaleAdmin"} name={"Sale"} />
    </div>
  );
}
export default Admin;
