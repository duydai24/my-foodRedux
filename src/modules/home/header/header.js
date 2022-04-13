import react, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { BiBarcodeReader } from "react-icons/bi";
import { BsNewspaper } from "react-icons/bs";
import { FaStore } from "react-icons/fa";
import { HiUserCircle } from "react-icons/hi";
import { BiMenuAltLeft } from "react-icons/bi";

import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { LogOut, userLogin } from "../../../redux/action/userAction";

function Header({ onClick, onClick2 }) {
  const dispatch = useDispatch();
  const { accountLogin } = useSelector((state) => state.user);
  const { cart } = useSelector((state) => state);
  const handleLogOut = () => {
    const results = [];
    dispatch(userLogin(results));
  };
  let userNameIsLogin = accountLogin.length;

  const [active, setOnActive] = useState(false);
  const _className = active ? "onLogout" : " ";

  let accountLoginRole;
  accountLogin &&
    accountLogin.map((value) => {
      accountLoginRole = value.role;
    });

  return (
    <div className="fixed top-0 left-0 z-[1000] w-screen transition-all bg-black opacity-80">
      <div className="container">
        <div className="flex justify-between h-16">
          <span
            onClick={onClick2}
            className="text-white text-6xl text-center w-24 md:hidden"
          >
            <BiMenuAltLeft />
          </span>
          <div className="flex items-center">
            <Link href="/">
              <img
                className="w-24 md:w-[120px] h-auto md:pr-10"
                src="/logoRemove.png"
              />
            </Link>
            <div className="hidden md:flex lg:flex">
              <Link href="/">
                <div>
                  <IconsHeader text={"Home"} icon={<FaHome />} />
                </div>
              </Link>
              <Link href="/Order">
                <div>
                  <IconsHeader text={"Order"} icon={<BiBarcodeReader />} />
                </div>
              </Link>
              {accountLoginRole === "admin" ? (
                <Link href="/Admin">
                  <div>
                    <IconsHeader text={"Admin"} icon={<BsNewspaper />} />
                  </div>
                </Link>
              ) : (
                ""
              )}

              <Link href="/Shop">
                <div>
                  <IconsHeader text={"Store"} icon={<FaStore />} />
                </div>
              </Link>
            </div>
          </div>
          <div className="flex items-center max-w-[70px] xs:max-w-[80px] md:max-w-[96px] mr-3">
            <a
              onClick={onClick}
              className="text-white text-2xl mr-5 md:text-3xl md:mr-8 relative"
            >
              <FaShoppingCart />
              <span className="bg-yellow-500 text-white text-center rounded-md text-sm md:text-base px-1 absolute top-2 left-4 md:top-2 md:left-5">
                {cart.totalQuantity}
              </span>
            </a>
            <div className="flex items-center relative UserHover">
              {userNameIsLogin > 0 ? (
                <>
                  <div className="md:mr-3 md:flex lg:flex">
                    <a
                      onClick={() => setOnActive(!active)}
                      className="text-white text-2xl md:text-white md:text-4xl lg:text-white lg:text-4xl"
                    >
                      <HiUserCircle />
                    </a>
                    <a className="text-white cursor-pointer md:ml-2 lg:ml-2 md:mt-2 ">
                      {accountLogin[0].userName}
                    </a>
                  </div>
                  <div
                    className={
                      "absolute top-14 md:top-16 -right-6 md:left-[2rem] md:w-32 md:h-20 rounded bg-white hidden " +
                      _className
                    }
                  >
                    <span className="flex flex-col justify-center items-center">
                      <span className="bg-white rounded px-3 py-1">
                        {accountLogin[0].role}
                      </span>
                      <button
                        onClick={() => handleLogOut()}
                        className="bg-red-redd text-white px-3 py-1 rounded"
                      >
                        LogOut
                      </button>
                    </span>
                  </div>
                </>
              ) : (
                <Link href="/Login">
                  <a className="text-white text-4xl">
                    <HiUserCircle />
                  </a>
                </Link>
              )}
            </div>
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
