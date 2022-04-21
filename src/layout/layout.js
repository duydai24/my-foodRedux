import React, { useState, useEffect } from "react";
import Cart from "../modules/cart/cart";
import MenuMobile from "../modules/menuMobile/menuMobile";
import Header from "../modules/home/header/header";

function Layout({ children }) {
  const [onCart, setOnCart] = useState(false);
  const _className = onCart ? "onCart" : " ";

  const [onMobileMenu, setOnMobileMenu] = useState(false);
  const _className2 = onMobileMenu ? "offMobileMenu" : " ";

  return (
    <div>
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
    </div>
  );
}
export default Layout;
