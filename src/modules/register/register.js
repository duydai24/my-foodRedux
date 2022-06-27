import react, { useState, useEffect } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BiLock } from "react-icons/bi";
import Link from "next/link";
import Router from "next/router";
import { connect } from "react-redux";
import { getUser } from "../../redux/action/userAction";
import { createSelector } from "reselect";
import { ROUTER } from "../../routers/router";
import { userSelector } from "../../redux/selector/userSelector";
import { toast } from "react-toastify";

const componentSelector = () =>
  createSelector([userSelector], ({ user }) => {
    return {
      user,
    };
  });

function Register({ dispatch, user }) {
  const [userName, setUserName] = useState();
  const [passWord, setPassWord] = useState();
  const [checkPassWord, setCheckPassWord] = useState();
  const [isRegister, setIsRegister] = useState(false);

  const handleUser = (name) => {
    setUserName(name);
  };
  const handlePass = (pass) => {
    setPassWord(pass);
  };
  const handleCheckPass = (pass) => {
    setCheckPassWord(pass);
  };

  const handleRegister = () => {
    if (userName && passWord && checkPassWord) {
      let checkAccount = user && user.some((el) => el.userName == userName);
      if (!checkAccount) {
        if (passWord === checkPassWord) {
          let results = {
            id: user.length,
            userName,
            passWord,
            role: "user",
          };
          dispatch(getUser(results));
          setIsRegister(true);
          toast.success("Đăng kí thành công");
        } else {
          toast.error("Nhập lại mật khẩu không đúng");
        }
      } else {
        toast.error("Tên tài khoản đã tồn tại");
      }
    } else {
      toast.warn("Vui lòng nhập các trường");
    }
  };

  useEffect(() => {
    if (isRegister) {
      Router.push("/Login");
    }
  }, [isRegister]);

  return (
    <div className="py-32 lg:w-3/4 w-11/12 h-3/4 mx-auto lg:mt-[10%] md:mt-[10%] mt-[20%] shadow-2xl rounded-lg flex justify-evenly">
      <Link href={ROUTER.Home} passHref>
        <img
          alt="img"
          className="hidden lg:block w-[40%]"
          src="/logoRemove.png"
        />
      </Link>
      <div className="">
        <p className="text-black uppercase font-bold text-2xl">REGISTER</p>
        <p className="text-gray-500">Dont have an account?</p>
        <div className="">
          <InputLogin
            title={"Email:"}
            name={"email"}
            placeholder={"Your Email"}
            icon={<AiOutlineMail />}
            type={"text"}
            value={userName}
            onChange={handleUser}
          />
          <InputLogin
            title={"Password:"}
            placeholder={"Your Password"}
            icon={<BiLock />}
            name={"password"}
            type={"password"}
            value={passWord}
            onChange={handlePass}
          />
          <InputLogin
            title={"Check Password:"}
            placeholder={"Your Password"}
            icon={<BiLock />}
            name={"checkPassword"}
            type={"password"}
            value={checkPassWord}
            onChange={handleCheckPass}
          />
        </div>
        <button
          onClick={handleRegister}
          className="bg-[#ff514e] rounded-3xl font-bold text-white py-2 px-6 mt-5 ml-32 uppercase border-2 text-center border-[#ff514e] hover:bg-white hover:text-[#ff514e]"
        >
          REGISTER
        </button>
      </div>
    </div>
  );
}

function InputLogin({
  text,
  id,
  title,
  placeholder,
  icon,
  type,
  value,
  onChange,
}) {
  return (
    <div className="mt-5">
      <p className="">{title}</p>
      <div className="flex items-center">
        <span className="bg-[#F8F8FF] p-3 text-xl">{icon}</span>
        <input
          className="bg-[#F8F8FF] py-3 lg:pr-32 pr-20 border-none outline-none"
          type={type}
          id={id}
          name={text}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}

export default connect(componentSelector)(Register);
