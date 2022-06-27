import react, { useState, useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { BiBarcodeReader } from "react-icons/bi";
import { BsNewspaper } from "react-icons/bs";
import { FaStore } from "react-icons/fa";
import { HiUserCircle } from "react-icons/hi";
import { BiMenuAltLeft } from "react-icons/bi";
import Link from "next/link";
import Router from "next/router";
import { LogOut } from "../../../redux/action/userAction";
import CartHover from "../../cart/cartHover";
import { ROUTER } from "../../../routers/router";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { batch, connect } from "react-redux";
import { createSelector } from "reselect";
import { cartsSelector } from "../../../redux/selector/cartSelector";
import { userSelector } from "../../../redux/selector/userSelector";

const componentSelector = () =>
  createSelector(
    [cartsSelector, userSelector],
    ({ cart }, { accountLogin }) => {
      return {
        cart,
        accountLogin,
      };
    }
  );

function Header({ onClick, dispatch, cart, accountLogin }) {
  const handleLogOut = () => {
    dispatch(LogOut());
    toast.success("Đăng xuất thành công !");
    Router.push("/");
  };
  let accountLoginLength = accountLogin.length;

  const [active, setOnActive] = useState(false);

  let accountLoginRole;
  let accountLoginImage;
  accountLogin &&
    accountLogin.map((value) => {
      accountLoginRole = value.role;
      accountLoginImage = value.image;
    });

  return (
    <div className="fixed top-0 left-0 z-[1000] w-screen transition-all bg-black ">
      <div className="container">
        <div className="flex justify-between h-16 items-center">
          <span
            onClick={onClick}
            className="text-white text-5xl text-center w-24 md:hidden"
          >
            <BiMenuAltLeft />
          </span>
          <div className="flex items-center">
            <Link href={ROUTER.Home} passHref>
              <img
                alt="img"
                className="w-20 md:w-[120px] h-auto md:pr-10 cursor-pointer"
                src="/logoRemove.png"
              />
            </Link>
            <div className="hidden md:flex lg:flex">
              <IconsHeader
                source={ROUTER.Home}
                text={"Home"}
                icon={<FaHome />}
              />
              <IconsHeader
                source={ROUTER.Order}
                text={"Order"}
                icon={<BiBarcodeReader />}
              />
              <IconsHeader
                source={ROUTER.Shop}
                text={"Store"}
                icon={<FaStore />}
              />
              {accountLoginRole === "admin" ? (
                <IconsHeader
                  source={"/Admin/StatisticalAdmin"}
                  text={"Admin"}
                  icon={<BsNewspaper />}
                />
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="flex items-center max-w-[80px] h-16 md:max-w-[115px] lg:max-w-[200px] mr-3">
            <div className="h-full flex items-center headerHover">
              <Link href={ROUTER.Cart} passHref>
                <div className="text-white text-3xl mr-3 md:text-3xl md:mr-8 relative cursor-pointer hover:text-red-redd">
                  <FaShoppingCart />
                  <span className="bg-yellow-500 text-white text-center rounded-md text-sm md:text-base px-1 absolute top-2 left-4 md:top-2 md:left-5 a">
                    {cart?.totalQuantity}
                  </span>
                </div>
              </Link>
              <CartHover className={"hoverCart"} />
            </div>
            {accountLoginLength > 0 && (
              <div className="flex items-center relative ml-2">
                <div>
                  <div className="lg:block md:block hidden">
                    <div className="md:mr-3 md:flex lg:flex w-auto items-center justify-between">
                      {accountLoginImage !== undefined ? (
                        <Link href={ROUTER.UserCustom} passHref>
                          <img
                            alt="img"
                            src={accountLoginImage}
                            onClick={() => setOnActive(!active)}
                            className="cursor-pointer rounded-full lg:w-10 mr-2 lg:h-10 md:w-10 md:h-10 w-8 h-8 border-2 border-red-redd hover:border-yellow-400"
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
                      <div className="flex flex-col items-start">
                        <a className="text-white cursor-pointer hidden lg:block ">
                          {accountLogin[0].userName}
                        </a>
                        <button
                          onClick={() => handleLogOut()}
                          className="text-white text-sm lg:block md:hidden hidden rounded hover:text-red-redd"
                        >
                          LogOut
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="lg:hidden md:hidden block">
                    <div className="md:mr-3 md:flex lg:flex">
                      {accountLoginImage !== undefined ? (
                        <Link href={ROUTER.UserCustom} passHref>
                          <img
                            alt="img"
                            src={accountLoginImage}
                            className="cursor-pointer rounded-full lg:w-10 lg:h-10 md:w-10 md:h-10 w-8 h-8 border-2 border-red-redd"
                          />
                        </Link>
                      ) : (
                        ""
                      )}
                      <a className="text-white cursor-pointer hidden lg:block ">
                        {accountLogin[0].userName}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {accountLoginLength == 0 && (
              <Link href={ROUTER.Login}>
                <a className="text-white text-3xl md:text-white md:text-4xl lg:text-white lg:text-4xl">
                  <HiUserCircle />
                </a>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function IconsHeader({ text, icon, source }) {
  const router = useRouter();
  const style = {
    color: router.pathname == source ? "#ff514e" : "",
  };
  return (
    <Link href={source} passHref>
      <div className="flex cursor-pointer hoverHeader ">
        <span
          style={style}
          className="text-white text-[20px] mr-2 hoverHeader1"
        >
          {icon}
        </span>
        <p style={style} className="text-white pr-8 hoverHeader2 ">
          {text}
        </p>
      </div>
    </Link>
  );
}

export default connect(componentSelector)(Header);
