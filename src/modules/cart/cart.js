import react, { useState } from "react";
import { RiDeleteBack2Line } from "react-icons/ri";
import { MdOutlineDeleteForever } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { updateCart, deleteCart } from "../../redux/action/cartAction";
import Link from "next/link";

function Cart({ className, onClick }) {
  const dispatch = useDispatch();
  const { cartItem } = useSelector((state) => state.cart);
  const { cart } = useSelector((state) => state);

  const handleAddQuantity = (id, key) => {
    cartItem[key].quantity = cartItem[key].quantity + 1;
    let totalQuantity = 0;
    let totalPrice = 0;
    cartItem.map(
      (value) => (
        (totalQuantity += value.quantity),
        (totalPrice += value.quantity * value.price)
      )
    );

    dispatch(updateCart(cartItem, totalQuantity, totalPrice));
  };
  const handleTruQuantity = (id, key) => {
    cartItem[key].quantity = cartItem[key].quantity - 1;

    let totalQuantity = 0;
    let totalPrice = 0;
    cartItem.map(
      (value) => (
        (totalQuantity += value.quantity),
        (totalPrice += value.quantity * value.price)
      )
    );

    dispatch(updateCart(cartItem, totalQuantity, totalPrice));
  };
  const handleDeleteCartItem = (id, key) => {
    cartItem.splice(key, 1);
    let totalQuantity = 0;
    let totalPrice = 0;
    cartItem.map((value) => {
      totalQuantity += value.quantity;
      totalPrice += value.price * value.quantity;
    });

    dispatch(deleteCart(cartItem, totalQuantity, totalPrice));
  };

  return (
    <div className={"hidden " + className}>
      <div
        className="fixed top-[4rem] left-0 bg-slate-400 transition-all z-10 opacity-50 overPlayCart "
        onClick={onClick}
      ></div>
      <div className="fixed top-[4rem] right-0 h-screen w-[90%] lg:w-[30%] transition-all bg-white shadow-2xl z-10 overflow-scroll">
        <HeadingCart onClick={onClick} />
        {cartItem &&
          cartItem.map((value, key) => (
            <CartItems
              id={key}
              key={key}
              img={value.image}
              name={value.name}
              price={value.price}
              quantity={value.quantity}
              addQuantityOnClick={() => handleAddQuantity(value.id, key)}
              truQuantityOnClick={() => handleTruQuantity(value.id, key)}
              deleteCartItem={() => handleDeleteCartItem(value.id, key)}
            />
          ))}
        <CartHanldle totalPrice={cart.totalPrice} onClick={onClick} />
      </div>
    </div>
  );
}

function HeadingCart({ onClick }) {
  return (
    <div
      className="flex justify-between m-5 border-b-[1px] border-gray-200
    pb-5"
    >
      <h2 className="uppercase font-bold text-2xl">Shopping Cart</h2>
      <span className="text-3xl" onClick={onClick}>
        <RiDeleteBack2Line />
      </span>
    </div>
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

function CartHanldle({ totalPrice, id, onClick }) {
  
  const { accountLogin } = useSelector((state) => state.user);
  let accountLoginLength = accountLogin.length;
  return (
    <div className="border-t-[1px] border-gray-200" key={id}>
      <div className="flex mx-8 my-5 justify-between">
        <h2 className="font-bold text-xl">Total</h2>
        <span className="font-bold text-red-redd text-xl">
          $<span className="font-bold text-red-redd text-xl">{totalPrice}</span>
        </span>
      </div>
      <div className="flex m-5 justify-between">
        {accountLoginLength === 0 ? (
          <Link href="/Login">
            <button className="bg-red-redd rounded-full px-5 lg:px-20 md:px-28 py-2 text-white font-bold uppercase shadowbtn">
              Checkout
            </button>
          </Link>
        ) : (
          <Link href="/Checkout">
        <button className="bg-red-redd rounded-full px-20 lg:px-20 md:px-28 py-2 text-white font-bold uppercase shadowbtn">
          Checkout
        </button>
        </Link>
        )}

        <Link href="/Shop">
          <button
            onClick={onClick}
            className="bg-white rounded-full px-10 lg:px-20 md:px-28 py-2 font-bold uppercase ml-2 shadowbtn"
          >
            buy more
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Cart;
