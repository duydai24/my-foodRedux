/* eslint-disable react-hooks/rules-of-hooks */
import react, { useEffect, useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BiLock } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { connect } from "react-redux";
import Link from "next/link";
import Router from "next/router";
import {
  userLogin,
  getUser,
  googleUserLogin,
} from "../../redux/action/userAction";
import { useGoogleLogin } from "react-google-login";
import { ROUTER } from "../../routers/router";
import { RefreshTokenSetup } from "../auth/refreshToken";
import { toast } from "react-toastify";
import { createSelector } from "reselect";
import { userSelector } from "../../redux/selector/userSelector";

const componentSelector = () =>
  createSelector([userSelector], ({ user }) => {
    return {
      user,
    };
  });

function Login({ dispatch, user }) {
  const [userName, setUserName] = useState();
  const [passWord, setPassWord] = useState();
  const [isLogin, setIsLogin] = useState(false);

  const handleUser = (name) => {
    setUserName(name);
  };
  const handlePass = (pass) => {
    setPassWord(pass);
  };

  const handleSubmit = () => {
    if (userName && passWord) {
      let checkUser = user.some((el) => el.userName === userName);
      if (checkUser === true) {
        let UserLogin = user.filter((e) => e.userName === userName);
        let checkPass = UserLogin.some((el) => el.passWord === passWord);
        if (checkPass === true && checkUser === true) {
          setIsLogin(true);
          Router.push("/");
          toast.success("Đăng nhập thành công");
          let idLogin = user.filter((e) => {
            return e.userName === userName;
          });
          const results = [
            {
              id: idLogin[0].id,
              image: idLogin[0].image,
              userName,
              passWord,
              role: idLogin[0].role,
            },
          ];
          dispatch(userLogin(results));
        } else {
          toast.error("Mật khẩu không đúng");
        }
      } else {
        toast.error("Tài khoản không tồn tại");
      }
    } else {
      toast.warn("Vui lòng nhập các trường");
    }
  };

  const clientId =
    "295032336816-21451obqs8cpbmhkhaaadp26q7d1d86e.apps.googleusercontent.com";
  const onSuccess = (res) => {
    console.log("[Login Success ] currentUser:", res.profileObj);
    RefreshTokenSetup(res);
    const profileObj = res.profileObj;
    let checkAccount = user.some((e) => e.userName == profileObj.email);
    if (!checkAccount) {
      let results = {
        id: Number(profileObj.googleId),
        image: profileObj.imageUrl,
        userName: profileObj.email,
        passWord: "******",
        role: "user",
      };
      dispatch(getUser(results));
    }
    const email = profileObj.email;
    dispatch(googleUserLogin(email));
    toast.success("Đăng nhập bằng Google thành công");
    Router.push("/");
  };
  const onFailure = (res) => {
    console.log("[Login Failed ] res:", res);
  };
  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: false,
    accessType: "offline",
    cookiePolicy: "single_host_origin",
  });
  return (
    <div className="pt-20 pb-44 lg:w-3/4 w-11/12 h-3/4 mx-auto lg:mt-[10%] md:mt-[10%] mt-[20%] shadow-2xl rounded-lg flex justify-evenly">
      <Link href={ROUTER.Home} passHref>
        <img
          alt="img"
          className="hidden lg:block w-[40%]"
          src="/logoRemove.png"
        />
      </Link>
      <div className="relative">
        <p className="text-black uppercase font-bold text-2xl">JOIN WITH US</p>
        <p className="text-gray-500">
          Dont have an account?
          <Link href={ROUTER.Register} passHref>
            <span className="text-red-redd font-bold cursor-pointer">
              {" "}
              Create an account
            </span>
          </Link>
        </p>
        <div className=" py-5">
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
          {/* <div className="mt-5">
            <input
              className="w-5 h-5"
              type="checkbox"
              placeholder="Save your password"
            />
            <span className="ml-5">Save your password</span>
          </div> */}
        </div>

        <div className="flex flex-col items-center">
          <button
            onClick={handleSubmit}
            className="bg-[#ff514e] rounded-3xl font-bold text-white py-2 px-6 mt-5 uppercase border-2 text-center border-[#ff514e] hover:bg-white hover:text-[#ff514e]"
          >
            LOG IN
          </button>
          <button
            onClick={signIn}
            className="font-bold bg-slate-200 text-base px-5 py-3 mt-5 rounded-full shadow-slate-200 flex items-center justify-around"
          >
            <span className="text-2xl">
              <FcGoogle />
            </span>
            Login With Google
          </button>
        </div>
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

export default connect(componentSelector)(Login);
