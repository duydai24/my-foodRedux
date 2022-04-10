import react, { useState, useEffect } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BiLock } from "react-icons/bi";
// import { user } from "../../db/db";
import Link from "next/link";
import Router from "next/router";
import { useDispatch, useSelector, connect } from "react-redux";
import { fetchUser } from "../../redux/action/userAction";
import { isFulfilled } from "@reduxjs/toolkit";

function Register() {
  const { user } = useSelector((state) => state.user);

  const [userName, setUserName] = useState();
  const [passWord, setPassWord] = useState();
  const [isRegister, setIsRegister] = useState(false);

  const dispatch = useDispatch();

  const handleUser = (name) => {
    setUserName(name);
  };
  const handlePass = (pass) => {
    setPassWord(pass);
  };

  const handleRegister = () => {
    let checkAccount = user && user.some((el) => el.userName == userName);
    if (!checkAccount) {
      let results = {
        id: user.length,
        userName,
        passWord,
        role: "user",
      };
      user.push(results);
      dispatch(fetchUser(user));
      setIsRegister(true);
      alert("Đăng kí thành công");
    } else {
      alert("Tên tài khoản đã tồn tại");
    }
  };

  useEffect(() => {
    if (isRegister) {
      Router.push("/Login");
    }
  }, [isRegister]);

  return (
    <div className="py-32 w-[70%] h-[600px] m-auto mt-[5%] shadow-2xl rounded-lg flex justify-evenly">
      <Link href="/">
        <img className="w-[40%]" src="logoRemove.png" />
      </Link>
      <div className="">
        <p className="text-black uppercase font-bold text-2xl">REGISTER</p>
        <p className="text-gray-500">
          Don't have an account?
          <span className="text-red-redd font-bold cursor-pointer">
            {" "}
            Create an account
          </span>
        </p>
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
          <div className="mt-5">
            <input
              className="w-5 h-5"
              type="checkbox"
              placeholder="Save your password"
            />
            <span className="ml-5">Save your password</span>
          </div>
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
      <div className="flex">
        <span className="bg-[#F8F8FF] p-3 text-xl">{icon}</span>
        <input
          className="bg-[#F8F8FF] py-3 pr-32 border-none outline-none"
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

let mapDispatchToProps = (dispatch) => {
  return {
    ADD_USERS: (results) => dispatch(createUser(results)),
  };
};
let mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
