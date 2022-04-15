import react, { useState, useEffect, useRouter } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BiLock } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import Router from "next/router";
import { userLogin } from "../../redux/action/userAction";

function Login() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

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
    let checkUser = user.some((el) => el.userName === userName);
    if (checkUser === true) {
      let checkPass = user.some((el) => el.passWord === passWord);
      if (checkPass === true) {
        setIsLogin(true);
        alert("Đăng nhập thành công");
        let idLogin = user.filter((e) => {
          return e.userName === userName;
        });
        const results = [
          {
            id: idLogin[0].id,
            userName,
            role: idLogin[0].role,
          },
        ];
        dispatch(userLogin(results));
      } else {
        alert("Mật khẩu không đúng");
      }
    } else {
      alert("Tài khoản không tồn tại");
    }
  };

  useEffect(() => {
    if (isLogin) {
      Router.push("/");
    }
  }, [isLogin]);
  return (
    <div className="py-32 lg:w-3/4 w-11/12 h-3/4 mx-auto lg:mt-[10%] mt-[20%] shadow-2xl rounded-lg flex justify-evenly">
      <Link href="/">
        <img className="hidden lg:block w-[40%]" src="logoRemove.png" />
      </Link>
      <div className="">
        <p className="text-black uppercase font-bold text-2xl">JOIN WITH US</p>
        <p className="text-gray-500">
          Don't have an account? 
          <Link href="/Register">
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
          {/* <InputLogin
            title={"Check Password:"}
            placeholder={"Your Check Password"}
            icon={<BiLock />}
            name={"checkPassword"}
            type={"password"}
            value={checkPassWord}
            onChange={handleCheckPass}
          /> */}
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
          onClick={handleSubmit}
          className="bg-[#ff514e] rounded-3xl font-bold text-white py-2 px-6 mt-5 ml-32 uppercase border-2 text-center border-[#ff514e] hover:bg-white hover:text-[#ff514e]"
        >
          LOG IN
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



export default Login
