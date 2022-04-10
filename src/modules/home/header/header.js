import react from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { BiBarcodeReader } from "react-icons/bi";
import { BsNewspaper } from "react-icons/bs";
import { FaStore } from "react-icons/fa";
import { HiUserCircle } from "react-icons/hi";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { connect } from "react-redux";
import { LogOut, userLogin } from "../../../redux/action/userAction";

function Header({ onClick }) {
  const dispatch = useDispatch();
  const { accountLogin } = useSelector((state) => state.user);
  const { cart } = useSelector((state) => state);
  const handleLogOut = () => {
    const results = [];
    dispatch(userLogin(results));
  };
  let userNameIsLogin = accountLogin.length;

  return (
    <div className="fixed top-0 left-0 z-[1000] w-screen transition-all bg-black opacity-80">
      <div className="container">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <img className="w-[120px] h-auto pr-10" src="/logoRemove.png" />
            <div className="flex">
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
              <Link href="/Admin">
                <div>
                  <IconsHeader text={"Admin"} icon={<BsNewspaper />} />
                </div>
              </Link>
              <Link href="/Shop">
                <div>
                  <IconsHeader text={"Store"} icon={<FaStore />} />
                </div>
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <a onClick={onClick} className="text-white text-3xl mr-8 relative">
              <FaShoppingCart />
              <span className="bg-yellow-500 text-white text-center rounded-md text-base px-1 absolute top-2 left-5">
                {cart.totalQuantity}
              </span>
            </a>
            <div className="flex items-center relative UserHover">
              {userNameIsLogin > 0 ? (
                <>
                  <a className="text-white text-4xl ">
                    <HiUserCircle />
                  </a>
                  <a className="text-white cursor-pointer ml-2">
                    {accountLogin[0].userName}
                  </a>

                  <button
                    onClick={() => handleLogOut()}
                    className="bg-white rounded px-3 py-1 absolute top-0 left-[4.2rem] hidden LogOut"
                  >
                    LogOut
                  </button>
                </>
              ) : (
                <Link href="/Login">
                  <a className="text-white text-4xl ">
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

let mapDispatchToProps = (dispatch) => {
  return {
    LOGOUT: () => dispatch(LogOut()),
  };
};
let mapStateToProps = (state) => {
  return {
    accountLogin: state.accountLogin,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
