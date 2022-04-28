import react, { useState } from "react";
import { RiDeleteBack2Line } from "react-icons/ri";
import { MdOutlineDeleteForever } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { updateCart, deleteCart } from "../../redux/action/cartAction";
import Link from "next/link";

function CartHover({ className }) {
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
    <div
      className={
        "fixed -top-[4.5rem] right-40 h-auto pb-10 w-[30%] bg-[#FFFBD1] shadow-2xl z-60 rounded-xl transition-all -translate-y-full " +
        className
      }
    >
      <h2 className="uppercase font-bold text-2xl text-center py-3 pt-5 border-y-[1px] border-gray-300">
        Shopping Cart
      </h2>
      {cartItem.length > 0 ? (
        cartItem &&
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
        ))
      ) : (
        <p className="text-center font-bold p-3">Giỏ hàng trống ^^</p>
      )}

      <CartHanldle totalPrice={cart.totalPrice} />
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

function CartHanldle({ totalPrice, id }) {
  const { accountLogin } = useSelector((state) => state.user);
  let accountLoginLength = accountLogin.length;
  return (
    <div className="border-t-[1px] border-gray-200 relative" key={id}>
      <button className="rounded-lg bg-slate-300 w-32 h-2 left-1/2 top-1 -translate-x-1/2 absolute" />
      <div className="flex mx-8 my-5 justify-between">
        <h2 className="font-bold text-xl">Total</h2>
        <span className="font-bold text-red-redd text-xl">
          $<span className="font-bold text-red-redd text-xl">{totalPrice}</span>
        </span>
      </div>
      <div className="flex m-5 justify-between">
        {accountLoginLength === 0 ? (
          <Link href="/Login">
            <button className="bg-red-redd rounded-full px-5 py-0 lg:px-20 md:px-28 text-base text-white font-bold uppercase shadowbtn">
              Checkout
            </button>
          </Link>
        ) : (
          <Link href="/Checkout">
            <button className="bg-red-redd rounded-full px-20 lg:px-20 md:px-28 py-2 text-base text-white font-bold uppercase shadowbtn">
              Checkout
            </button>
          </Link>
        )}

        <Link href="/Shop">
          <button className="bg-white rounded-full px-10 lg:px-20 md:px-28 py-2 font-bold uppercase ml-2 shadowbtn">
            buy more
          </button>
        </Link>
      </div>
    </div>
  );
}

export default CartHover;