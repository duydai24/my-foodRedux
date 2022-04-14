import React, { useState } from "react";
import { FiDelete } from "react-icons/fi";
import { FaHome } from "react-icons/fa";
import { BiBarcodeReader } from "react-icons/bi";
import { BsNewspaper } from "react-icons/bs";
import { FaStore } from "react-icons/fa";
import Link from "next/link";
import { useSelector } from "react-redux";

function MenuMobile({ className, onClick }) {
  const { accountLogin } = useSelector((state) => state.user);

  let accountLoginRole;
  accountLogin &&
    accountLogin.map((value) => {
      accountLoginRole = value.role;
    });
  return (
    <div>
      <div
        className={
          "transition-all bg-[url('/bgMobileMenu.jpg')] bg-cover w-[80%] -translate-x-full mt-[64px] z-50 fixed menuMobile " +
          className
        }
      >
        <div className="border-[1px] border-white">
          <span
            onClick={onClick}
            className="float-right text-2xl text-white m-5 "
          >
            <FiDelete />
          </span>
        </div>
        <div className="border-t-[1px] border-white mt-16">
          <Link href="/">
            <div
              onClick={onClick}
              className=" p-8 h-10 w-56 text-white text-xl text-center cursor-pointer"
            >
              <IconsHeader text={"Home"} icon={<FaHome />} />
            </div>
          </Link>
          <Link href="/Shop">
            <div
              onClick={onClick}
              className=" p-8 h-10 w-56 text-white text-xl text-center cursor-pointer"
            >
              <IconsHeader text={"Store"} icon={<FaStore />} />
            </div>
          </Link>
          <Link href="/Order">
            <div
              onClick={onClick}
              className=" p-8 h-10 w-56 text-white text-xl text-center cursor-pointer"
            >
              <IconsHeader text={"Order"} icon={<BiBarcodeReader />} />
            </div>
          </Link>
          {accountLoginRole === "admin" ? (
            <Link href="/Admin">
              <div
                onClick={onClick}
                className="p-8 h-10 w-56 text-white text-xl text-center cursor-pointer"
              >
                <IconsHeader text={"Admin"} icon={<BsNewspaper />} />
              </div>
            </Link>
          ) : (
            ""
          )}
        </div>
      </div>
      <div
          className={
            "fixed top-[64px] right-0 bg-red-redd w-[30%] h-screen transition-all translate-x-full z-10 opacity-90 " +
            className
          }
          onClick={onClick}
        ></div>
    </div>
  );
}
function IconsHeader({ text, icon }) {
  return (
    <div className="flex cursor-pointer">
      <span className="text-white text-[20px] mr-2 hover:text-red-redd">
        {icon}
      </span>
      <a className="text-white pr-8 hover:text-red-redd">{text}</a>
    </div>
  );
}
export default MenuMobile;
