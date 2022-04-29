import React, { useState, useEffect } from "react";
import Cart from "../modules/cart/cart";
import MenuMobile from "../modules/menuMobile/menuMobile";
import Header from "../modules/home/header/header";
import CopyRight from "../modules/home/copyRight/copyRight";
import Footer from "..//modules/home/footer/footer";

function Layout({ children }) {
  const [onMobileMenu, setOnMobileMenu] = useState(false);
  const _className2 = onMobileMenu ? "offMobileMenu" : " ";

  return (
    <div>
      <Header onClick={() => setOnMobileMenu(!onMobileMenu)} />
      <MenuMobile
        className={_className2}
        onClick={() => setOnMobileMenu(!onMobileMenu)}
      />
      <main>{children}</main>
      <Footer />
      <CopyRight />
    </div>
  );
}
export default Layout;
