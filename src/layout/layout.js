import React, { useState, useEffect } from "react";
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

  // const [stickyDown, setStickyDown] = useState(false);
  // const [pageoffset, setPageoffset] = useState(0);

  // useEffect(() => {
  //   let prevScrolls = window.pageYOffset;
  //   window.onscroll = () => {
  //     let currentScrolls = window.pageYOffset;
  //     if (prevScrolls < currentScrolls) {
  //       setStickyDown(true);
  //     }
  //     prevScrolls = currentScrolls;
  //     if (prevScrolls < 300) {
  //       setStickyDown(false);
  //     }
  //     setPageoffset(prevScrolls);
  //   };
  // }, [500]);

  // const _stickyDown = stickyDown ? "onTop" : ""
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
      <main>{children}
      {/* <button className={"w-10 h-10 rounded-full bg-red-redd text-5xl float-right text-center " + _stickyDown}>^</button> */}
      </main>
    </>
  );
}
export default Layout;
