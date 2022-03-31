import react, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { BiBarcodeReader } from "react-icons/bi";
import { BsNewspaper } from "react-icons/bs";
import { FaStore } from "react-icons/fa";
import { HiUserCircle } from "react-icons/hi";
import Link from "next/link";
import { user } from "../../../db/db";

function Header({className, onClick}) {
  

  return (
    <div className="fixed top-0 left-0 z-[1000] w-screen transition-all bg-black opacity-80">
      <div className="container">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <img className="w-[120px] h-auto pr-10" src="logoRemove.png" />
            <div className="flex">
              <Link href="/">
                <div>
                  <IconsHeader text={"Home"} icon={<FaHome />} />
                </div>
              </Link>
              <Link href="/">
                <div>
                  <IconsHeader text={"Order"} icon={<BiBarcodeReader />} />
                </div>
              </Link>
              <IconsHeader text={"News"} icon={<BsNewspaper />} />
              <Link href="/Shop">
                <div>
                  <IconsHeader text={"Store"} icon={<FaStore />} />
                </div>
              </Link>
            </div>
          </div>
          <div className="flex items-center ">
            <a onClick={onClick} className="text-white text-3xl mr-8">
              <FaShoppingCart />
            </a>
            <Link href="/Login">
              <a className="text-white text-4xl ">
                <HiUserCircle />
              </a>
            </Link>
            {user &&
              user.map((value, key) => (
                <a className="text-white">{value.role}</a>
              ))}
          </div>
        </div>
      </div>
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
export default Header;
