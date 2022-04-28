import react, { useState, useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { BiBarcodeReader } from "react-icons/bi";
import { BsNewspaper } from "react-icons/bs";
import { FaStore } from "react-icons/fa";
import { HiUserCircle } from "react-icons/hi";
import { BiMenuAltLeft } from "react-icons/bi";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import Router from "next/router";
import { userLogin } from "../../../redux/action/userAction";
import { MdOutlineDeleteForever } from "react-icons/md";
import CartHover from "../../cart/cartHover";

function Header({ onClick, onClick2 }) {
  const dispatch = useDispatch();
  const { accountLogin } = useSelector((state) => state.user);
  const { cartItem } = useSelector((state) => state.cart);
  const { cart } = useSelector((state) => state);
  const handleLogOut = () => {
    const results = [];
    dispatch(userLogin(results));
    Router.push("/");
  };
  let userNameIsLogin = accountLogin.length;

  const [active, setOnActive] = useState(false);
  const _className = active ? "onLogout" : " ";

  let accountLoginRole;
  let accountLoginImage;
  accountLogin &&
    accountLogin.map((value) => {
      accountLoginRole = value.role;
      accountLoginImage = value.image;
    });
  return (
    <div className="fixed top-0 left-0 z-[1000] w-screen transition-all bg-black opacity-80 ">
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
                className="w-24 md:w-[120px] h-auto md:pr-10 cursor-pointer"
                src="/logoRemove.png"
              />
            </Link>
            <div className="hidden md:flex lg:flex">
              <IconsHeader source={"/"} text={"Home"} icon={<FaHome />} />
              <IconsHeader
                source={"/Order"}
                text={"Order"}
                icon={<BiBarcodeReader />}
              />
              {accountLoginRole === "admin" ? (
                <IconsHeader
                  source={"/Admin"}
                  text={"Admin"}
                  icon={<BsNewspaper />}
                />
              ) : (
                ""
              )}
              <IconsHeader source={"/Shop"} text={"Store"} icon={<FaStore />} />
            </div>
          </div>
          <div className="flex items-center max-w-[80px] md:max-w-[115px] lg:max-w-[145px] mr-3">
            <div className="headerHover">
              <div
                onClick={onClick}
                className="text-white text-3xl mr-5 md:text-3xl md:mr-8 relative"
              >
                <FaShoppingCart />
                <span className="bg-yellow-500 text-white text-center rounded-md text-sm md:text-base px-1 absolute top-2 left-4 md:top-2 md:left-5 a">
                  {cart.totalQuantity}
                </span>
              </div>
              <CartHover className={"hoverCart"} />
            </div>
            <div className="flex items-center relative">
              {userNameIsLogin > 0 ? (
                <div>
                  <div className="md:mr-3 md:flex lg:flex">
                    {accountLoginImage !== undefined ? (
                      <img
                        src={accountLoginImage}
                        onClick={() => setOnActive(!active)}
                        className="rounded-full lg:w-10 lg:h-10 md:w-10 md:h-10 w-8 h-8 border-2 border-red-redd"
                      />
                    ) : (
                      <a
                        onClick={() => setOnActive(!active)}
                        className="text-white text-3xl md:text-white md:text-4xl lg:text-white lg:text-4xl"
                      >
                        <HiUserCircle />
                      </a>
                    )}
                    <a className="text-white cursor-pointer md:ml-2 lg:ml-2 md:mt-2 hidden lg:block ">
                      {accountLogin[0].userName}
                    </a>
                  </div>
                  <div
                    className={
                      "absolute top-14 lg:top-14 shadow-xl md:top-16 lg:-right-6 right-1 md:w-32 md:h-20 lg:w-40 lg:h-28 rounded hidden " +
                      _className
                    }
                  >
                    <span className="flex flex-col justify-center items-center py-3">
                      <Link href="/UserCustom">
                        <span className="bg-white lg:block md:block hidden rounded px-3 py-1 cursor-pointer mb-3 border-[1px] border-gray-500">
                          User Profile
                        </span>
                      </Link>
                      <button
                        onClick={() => handleLogOut()}
                        className="bg-red-redd text-white lg:block md:block hidden px-3 py-1 rounded"
                      >
                        LogOut
                      </button>
                    </span>
                  </div>
                </div>
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

function IconsHeader({ text, icon, source }) {
  const [activeHeader, setActiveHeader] = useState();
  const _className = activeHeader ? "activeHeader" : "";
  return (
    <Link href={source}>
      <div
        onClick={() => setActiveHeader(!activeHeader)}
        className={"flex cursor-pointer hoverHeader " + _className}
      >
        <span className="text-white text-[20px] mr-2 hoverHeader1">{icon}</span>
        <a className="text-white pr-8 hoverHeader2 ">{text}</a>
      </div>
    </Link>
  );
}

function CartItems({
  name,
  img,
  price,
  quantity,
  id,
  truQuantityOnClick,
  addQuantityOnClick,
  deleteCartItem,
}) {
  return (
    <div className="flex m-5 items-center justify-between" key={id}>
      <div className="flex">
        <img src={img} className="lg:w-36 lg:h-28 w-24 h-24" />
        <div className="ml-5">
          <h2 className="font-bold">{name}</h2>
          <span className="font-bold text-red-redd">
            $<span className="font-bold text-red-redd">{price}</span>
          </span>
          <div className="flex mt-5">
            <span
              onClick={truQuantityOnClick}
              className="bg-gray-200 w-8 h-8 text-center text-xl font-bold cursor-pointer"
            >
              -
            </span>
            <span className="w-8 h-8 text-center mt-1">{quantity}</span>
            <span
              onClick={addQuantityOnClick}
              className="bg-gray-200 w-8 h-8 text-center text-xl font-bold cursor-pointer"
            >
              +
            </span>
          </div>
        </div>
      </div>

      <span onClick={deleteCartItem} className="text-3xl text-gray-400">
        <MdOutlineDeleteForever />
      </span>
    </div>
  );
}

export default Header;
