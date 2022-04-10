import react, { useState, useEffect } from "react";
import { FaUserAlt } from "react-icons/fa";
import { FaRegAddressCard } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GiNotebook } from "react-icons/gi";
import Link from "next/link";
import Router from "next/router";
import { useDispatch, useSelector, connect } from "react-redux";
import { addCart } from "../../redux/action/cartAction";
import { addOrder } from "../../redux/action/oderAction";

function Checkout() {
  const [name, setName] = useState();
  const [address, setAddress] = useState();
  const [phone, setPhone] = useState();
  const [note, setNote] = useState();
  const [isCheckout, setIsCheckout] = useState(false);
  const { cartItem } = useSelector((state) => state.cart);
  const { orders } = useSelector((state) => state);
  const { order } = useSelector((state) => state.orders);

  const dispatch = useDispatch();

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
  const handleCheckout = () => {
    if (name && address && phone) {
      const status = "Đang chờ xác nhận đơn hàng";
      if (orders.length === 0) {
        let order = [
          {
            name: name,
            address: address,
            phone: phone,
            note: note,
            status: status,
            cartItem: cartItem,
          },
        ];
        dispatch(addOrder(order, cartItem));
      } else {
        let newOrder = {
          name,
          address,
          phone,
          note,
          status,
          cartItem,
        };
       order = [...order, newOrder]
        dispatch(addOrder(order, cartItem));
      }
      cartItem = [];
      dispatch(addCart(cartItem));
      setIsCheckout(true);
      alert("Đặt hàng thành công");
    } else {
      alert("Vui lòng điền các thông tin cần thiết(có dấu *)");
    }
  };
  useEffect(() => {
    if (isCheckout) {
      Router.push("/");
    }
  }, [isCheckout]);
  return (
    <div className="py-32 w-[70%] h-[600px] m-auto mt-[5%] shadow-2xl rounded-lg flex justify-evenly">
      <div className="">
        <p className="text-black uppercase text-center font-bold text-2xl">
          CHECK OUT
        </p>
        <div className="">
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
        <button
          onClick={handleCheckout}
          className="bg-[#ff514e] rounded-3xl font-bold text-white py-2 px-6 mt-5 ml-32 uppercase border-2 text-center border-[#ff514e] hover:bg-white hover:text-[#ff514e]"
        >
          CHECKOUT
        </button>
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
          className="bg-[#F8F8FF] py-3 pr-32 border-none outline-none"
          type={type}
          id={id}
          value={value}
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
    ADD_ORDER: (order, cartItem) => dispatch(addOrder(order, cartItem)),
    DELETE_ALL_CART: () => dispatch(removeAllCart()),
  };
};
let mapStateToProps = (state) => {
  return {
    order: state.order,
    cart: state.cart,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
