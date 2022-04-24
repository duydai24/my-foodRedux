import React, { useState } from "react";
import { FiDelete } from "react-icons/fi";
import { FaHome } from "react-icons/fa";
import { BiBarcodeReader } from "react-icons/bi";
import { BsNewspaper } from "react-icons/bs";
import { FaStore } from "react-icons/fa";
import Link from "next/link";
import { HiUserCircle } from "react-icons/hi";
import { useSelector, useDispatch } from "react-redux";
import { userLogin } from "../../redux/action/userAction";
import Router from "next/router";

function MenuMobile({ className, onClick }) {
  const dispatch = useDispatch();
  const { accountLogin } = useSelector((state) => state.user);

  let accountLoginRole;
  let accountLoginImage;
  let accountLoginName;
  accountLogin &&
    accountLogin.map((value) => {
      accountLoginRole = value.role;
      accountLoginName = value.userName;
      accountLoginImage = value.image;
    });
  const handleLogOut = () => {
    const results = [];
    dispatch(userLogin(results));
    Router.push("/");
  };
  return (
    <div>
      <div className="relative">
        <div
          className={
            "transition-all bg-[url('/bgMobileMenu.jpg')] bg-cover w-[80%] -translate-x-full z-50 fixed top-[64px] h-[calc(100vh-64x)] " +
            className
          }
        >
          <div className="">
            <div className="flex justify-between items-center">
              {accountLogin.length > 0 ? (
                <div className="flex items-center">
                  {accountLoginImage !== "" ? (
                    <Link href="/UserCustom">
                      <img
                        src={accountLoginImage}
                        className="rounded-full mx-3 w-12 h-12 border-2 border-red-redd"
                      />
                    </Link>
                  ) : (
                    <a
                      onClick={() => setOnActive(!active)}
                      className="text-white text-3xl md:text-white md:text-4xl lg:text-white lg:text-4xl"
                    >
                      <HiUserCircle />
                    </a>
                  )}
                  <div className="flex flex-col">
                    <span className=" text-white text-lg">
                      UserName: {accountLoginName}
                    </span>
                    <span className=" text-white">
                      Role: {accountLoginRole}
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
          <div className="border-t-[1px] border-gray-400 h-[calc(100vh-128px)]">
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
          {accountLogin.length > 0 ? (
            <button
              onClick={() => handleLogOut()}
              className="bg-slate-100 text-center absolute left-0 bottom-0 py-5 w-full text-2xl text-red-redd"
            >
              Log Out
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
      <div
        className={
          "fixed top-[64px] right-0 bg-red-redd w-[30%] h-screen transition-all translate-x-full z-30 opacity-90 " +
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
