import react, { useState, useEffect } from "react";
import { FaUserAlt } from "react-icons/fa";
import { FaRegAddressCard } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GiNotebook } from "react-icons/gi";
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
            id,
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
          id: Math.floor(Math.random() * 999999),
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
    <div className="py-20 lg:w-3/4 lg:h-11/12 w-11/12 h-3/4 mx-auto lg:mt-[7%] mt-[30%] shadow-2xl rounded-lg flex justify-evenly items-center">
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
          className="bg-[#ff514e] rounded-3xl font-bold text-white py-2 mt-5 mx-7  uppercase border-2 text-center border-[#ff514e] hover:bg-white hover:text-[#ff514e]"
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
          className="bg-[#F8F8FF] py-3 w-full border-none outline-none"
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
