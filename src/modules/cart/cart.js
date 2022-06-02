import react, { useState, useEffect } from "react";
import { RiDeleteBack2Line } from "react-icons/ri";
import { MdOutlineDeleteForever } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { updateCart, deleteCart } from "../../redux/action/cartAction";
import Link from "next/link";
import Router from "next/router";
import Layout from "../../layout/layout";
import { Helmet } from "react-helmet";
import { ROUTER } from "../../routers/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TITLE = "My Food - Cart";

function Cart({ className, onClick }) {
  const dispatch = useDispatch();
  const { cartItem } = useSelector((state) => state.cart);
  const { cart } = useSelector((state) => state);
  // const { googleUser } = useSelector((state) => state.user);

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
    if (cartItem[key].quantity > 1) {
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
    }
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
    <Layout>
      <ToastContainer />
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      {/* {cartItem.length > 0 ? ( */}
      <div className="container pb-24 pt-40">
        <div className="transition-all bg-white shadow-2xl rounded-2xl z-60">
          <h2 className="uppercase font-bold text-2xl text-center">
            Shopping Cart
          </h2>
          {cartItem.length > 0 ? (
            cartItem &&
            cartItem.map((value, key) => (
              <CartItems
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
            <p className="text-center font-bold p-3">
              Giỏ hàng trống - Mua hàng nào ^^
            </p>
          )}
          <CartHanldle totalPrice={cart.totalPrice} onClick={onClick} />
        </div>
      </div>
    </Layout>
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
    <div className="container">
      <div className="flex m-5 items-center justify-between" key={id}>
        <div className="flex">
          <img
            alt="img"
            src={img}
            className="lg:w-36 lg:h-28 w-24 h-24 rounded-md"
          />
          <div className="ml-5">
            <h2 className="font-bold">{name}</h2>
            <span className="font-bold text-red-redd">
              $<span className="font-bold text-red-redd">{price}</span>
            </span>
            <div className="flex mt-5">
              <span
                onClick={truQuantityOnClick}
                className="border-gray-200 border-[1px] rounded-md w-8 h-8 text-center text-xl cursor-pointer hover:border-red-redd hover:text-red-redd"
              >
                -
              </span>
              <span className="w-8 h-8 text-center mt-1">{quantity}</span>
              <span
                onClick={addQuantityOnClick}
                className="border-gray-200 border-[1px] rounded-md w-8 h-8 text-center text-xl cursor-pointer hover:border-red-redd hover:text-red-redd"
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
    </div>
  );
}

function CartHanldle({ totalPrice, id, onClick }) {
  const { accountLogin } = useSelector((state) => state.user);
  const { cartItem } = useSelector((state) => state.cart);
  // const { googleUser } = useSelector((state) => state.user);

  let accountLoginLength = accountLogin.length;
  // let googleUserLoginLength = googleUser.length;
  const handleCheckout = () => {
    if (cartItem.length < 1) {
      toast.success("Vui lòng thêm sản phẩm vào giỏ hàng");
      Router.push("/Shop");
    } else {
      Router.push("/Checkout");
    }
  };

  return (
    <div className="border-t-[1px] border-gray-200 relative p-5" key={id}>
      <button className="rounded-lg bg-slate-300 w-32 h-2 left-1/2 top-1 -translate-x-1/2 absolute" />
      {cartItem.length > 0 ? (
        <div className="flex mx-8 my-5 justify-between">
          <h2 className="font-bold text-xl">Total</h2>
          <span className="font-bold text-red-redd text-xl">
            $
            <span className="font-bold text-red-redd text-xl">
              {totalPrice}
            </span>
          </span>
        </div>
      ) : (
        <span className="bg-white py-52"></span>
      )}
      <div className="flex m-5 justify-evenly">
        {cartItem.length === 0 ? (
          ""
        ) : (
          <div>
            {accountLoginLength === 0 ? (
              <div className="">
                <Link href={ROUTER.Login}>
                  <button className="bg-red-redd rounded-full px-5 lg:px-20 md:px-28 py-2 text-white font-bold uppercase shadowbtn">
                    Checkout
                  </button>
                </Link>
              </div>
            ) : (
              <button
                onClick={() => handleCheckout()}
                className="bg-red-redd rounded-full px-10 lg:px-20 md:px-28 py-2 text-white font-bold uppercase shadowbtn"
              >
                Checkout
              </button>
            )}
          </div>
        )}

        <Link href={ROUTER.Shop}>
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
