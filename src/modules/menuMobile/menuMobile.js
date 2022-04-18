import React, { useState } from "react";
import { FiDelete } from "react-icons/fi";
import { FaHome } from "react-icons/fa";
import { BiBarcodeReader } from "react-icons/bi";
import { BsNewspaper } from "react-icons/bs";
import { FaStore } from "react-icons/fa";
import Link from "next/link";
import { useSelector } from "react-redux";
import { HiUserCircle } from "react-icons/hi";

function MenuMobile({ className, onClick }) {
  const { accountLogin } = useSelector((state) => state.user);

  let accountLoginRole;
  let accountLoginName;
  accountLogin &&
    accountLogin.map((value) => {
      accountLoginRole = value.role;
      accountLoginName = value.userName;
    });
  return (
    <div>
      <div
        className={
          "transition-all bg-[url('/bgMobileMenu.jpg')] bg-cover w-[80%] -translate-x-full z-50 fixed top-[64px] menuMobile " +
          className
        }
      >
        <div className="">
          <div className="flex justify-between items-center">
            {accountLogin.length > 0 ? (
              <div className="flex items-center">
                <span className="text-white text-5xl md:text-white md:text-4xl mx-5">
                  <HiUserCircle />
                </span>
                <div className="flex flex-col">
                  <span className=" text-white text-xl">UserName:{' '}
                    {accountLoginName}
                  </span>
                  <span className=" text-white">Role: {' '}
                    {accountLoginRole}
                  </span>
                </div>
              </div>
            ) : (
              <div className="flex">
                <Link href="/Login">
                  <a
                    onClick={onClick}
                    className="bg-red-redd text-white py-4 px-8 font-bold text-xl"
                  >
                    Login
                  </a>
                </Link>
                <Link href="/Register">
                  <a
                    onClick={onClick}
                    className="bg-white text-red-redd py-4 px-8 font-bold text-xl"
                  >
                    Register
                  </a>
                </Link>
              </div>
            )}

            <span onClick={onClick} className="text-2xl text-white m-5 ">
              <FiDelete />
            </span>
          </div>
        </div>
        <div className="border-t-[1px] border-gray-400">
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
