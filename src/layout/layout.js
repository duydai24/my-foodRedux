import React, { useState } from "react";
import Cart from "../modules/cart/cart";
import MenuMobile from "../modules/menuMobile/menuMobile";
import CopyRight from "../modules/home/copyRight/copyRight";
import Footer from "../modules/home/footer/footer";
import Header from "../modules/home/header/header";

function Layout({ children }) {
  const [onCart, setOnCart] = useState(false);
  const _className = onCart ? "onCart" : " ";

  const [onMobileMenu, setOnMobileMenu] = useState(false);
  const _className2 = onMobileMenu ? "offMobileMenu" : " ";
  return (
    <>
      <Header
        className={_className}
        onClick={() => setOnCart(!onCart)}
        className2={_className2}
        onClick2={() => setOnMobileMenu(!onMobileMenu)}
      />
      <MenuMobile
        className={_className2}
        onClick={() => setOnMobileMenu(!onMobileMenu)}
      />
      <Cart className={_className} onClick={() => setOnCart(!onCart)} />
      <main>{children}</main>
    </>
  );
}
export default Layout;