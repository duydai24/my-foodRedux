import react, { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { FaRegAddressCard } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GiNotebook } from "react-icons/gi";
import Router from "next/router";
import { batch, connect } from "react-redux";
import { deteteAllCart } from "../../redux/action/cartAction";
import { addOrder } from "../../redux/action/oderAction";
import { setNewStatistic } from "../../redux/action/statisticaAction";
import { toast } from "react-toastify";
import { createSelector } from "reselect";
import { cartSelector } from "../../redux/selector/cartSelector";
import { userSelector } from "../../redux/selector/userSelector";
import Loading from "../../layout/loading";

const componentSelector = () =>
  createSelector(
    [cartSelector, userSelector],
    ({ cartItem }, { accountLogin }) => {
      return {
        cartItem,
        accountLogin,
      };
    }
  );

function Checkout({ dispatch, cartItem, accountLogin }) {
  const [name, setName] = useState();
  const [address, setAddress] = useState();
  const [phone, setPhone] = useState();
  const [note, setNote] = useState();

  const handleName = (name) => {
    setName(name);
  };
  const handleAddress = (address) => {
    setAddress(address);
  };
  const handlePhone = (phone) => {
    setPhone(phone);
  };
  const handleNote = (note) => {
    setNote(note);
  };

  let userId = accountLogin?.length ? accountLogin[0].id : null;

  // accountLogin.map((value) => (userId = value.id)); [id,id] dùng forEach thay map
  const handleCheckout = () => {
    if (name && address && phone && phone.length > 9) {
      const status = "Đang chờ xác nhận đơn hàng";
      const newOrder = {
        id: Math.floor(Math.random() * 999999),
        userId: userId,
        name,
        address,
        phone,
        note,
        status,
        cartItem,
      };
      batch(() => {
        dispatch(addOrder(newOrder));
        dispatch(setNewStatistic(cartItem));
        dispatch(deteteAllCart());
      });
      toast.success("Đặt hàng thành công");
      Router.push("/");
    } else {
      toast.warn("Vui lòng điền các thông tin cần thiết(có dấu *)");
    }
  };
  return (
    <div className="py-20 lg:w-3/4 lg:h-11/12 w-11/12 h-3/4 mx-auto lg:mt-[7%] md:mt-[10%] mt-[20%] shadow-2xl rounded-lg flex justify-evenly items-center">
      <div className="w-11/12 lg:w-1/2">
        <p className="text-black uppercase text-center font-bold text-2xl">
          CHECK OUT
        </p>
        <div className="py-10">
          <InputCheckOut
            title={"Họ Tên(*):"}
            name={"name"}
            placeholder={"Your Name"}
            icon={<FaUserAlt />}
            type={"text"}
            value={name}
            onChange={handleName}
          />
          <InputCheckOut
            title={"Địa chỉ(*):"}
            placeholder={"Your Address"}
            icon={<FaRegAddressCard />}
            name={"address"}
            type={"text"}
            value={address}
            onChange={handleAddress}
          />
          <InputCheckOut
            title={"Số điện thoại(*):"}
            placeholder={"Your Phone"}
            icon={<BsFillTelephoneFill />}
            name={"phone"}
            type={"number"}
            value={phone}
            onChange={handlePhone}
          />
          <InputCheckOut
            title={"Ghi chú:"}
            placeholder={"Your Note"}
            icon={<GiNotebook />}
            name={"note"}
            type={"text"}
            value={note}
            onChange={handleNote}
          />
        </div>
        <p
          onClick={handleCheckout}
          className="bg-[#ff514e] cursor-pointer rounded-3xl font-bold text-white py-2 mt-5 mx-7  uppercase border-2 text-center border-[#ff514e] hover:bg-white hover:text-[#ff514e]"
        >
          CHECKOUT
        </p>
      </div>
    </div>
  );
}

function InputCheckOut({
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
          className="bg-[#F8F8FF] py-3 px-2  w-full border-none outline-none"
          type={type}
          id={id}
          value={value || ""}
          name={text}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}

export default connect(componentSelector)(Checkout);
