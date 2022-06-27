import react, { useState } from "react";
import { MdOutlineDeleteForever } from "react-icons/md";
import { updateCart, deleteCart } from "../../redux/action/cartAction";
import Link from "next/link";
import Router from "next/router";
import { ROUTER } from "../../routers/router";
import { toast } from "react-toastify";
import { createSelector } from "reselect";
import { connect } from "react-redux";
import { cartSelector, cartsSelector } from "../../redux/selector/cartSelector";
import { userSelector } from "../../redux/selector/userSelector";

const componentSelector = () =>
  createSelector(
    [cartSelector, cartsSelector, userSelector],
    ({ cartItem }, { cart }, { accountLogin }) => {
      return {
        cartItem,
        cart,
        accountLogin,
      };
    }
  );

function CartHover({ className, dispatch, cartItem, cart, accountLogin }) {
  const handleAddQuantity = (id) => {
    const quantityNumber = 1;
    dispatch(updateCart(id, quantityNumber));
  };
  const handleTruQuantity = (id, key) => {
    if (cartItem[key].quantity > 1) {
      const quantityNumber = -1;
      dispatch(updateCart(id, quantityNumber));
    }
  };
  const handleDeleteCartItem = (id) => {
    dispatch(deleteCart(id));
  };

  return (
    <div className="">
      <div
        className={
          "fixed top-[3rem] right-40 h-auto p-5 w-auto bg-white shadow-2xl z-60 rounded-xl transition-all hidden lg:block invisible translate-y-1/4 opacity-90 " +
          className
        }
      >
        <h2 className="uppercase font-bold text-2xl text-center py-3 pt-5 border-y-[1px] border-gray-300">
          Shopping Cart
        </h2>
        {cartItem?.length > 0 ? (
          cartItem?.map((value, key) => (
            <CartItems
              key={key}
              img={value?.image}
              name={value?.name}
              price={value?.price}
              quantity={value?.quantity}
              addQuantityOnClick={() => handleAddQuantity(value?.id, key)}
              truQuantityOnClick={() => handleTruQuantity(value?.id, key)}
              deleteCartItem={() => handleDeleteCartItem(value?.id, key)}
            />
          ))
        ) : (
          <p className="text-center font-bold p-3">
            Giỏ hàng trống - Mua hàng nào ^^
          </p>
        )}

        <CartHanldle
          totalPrice={cart.totalPrice}
          accountLogin={accountLogin}
          cartItem={cartItem}
        />
      </div>
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
        <img src={img} className="lg:w-36 lg:h-28 w-24 h-24" alt="" />
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
  );
}

function CartHanldle({ totalPrice, cartItem, accountLogin }) {
  let accountLoginLength = accountLogin?.length;
  const handleCheckout = () => {
    if (cartItem?.length === 0) {
      toast.warn("Vui lòng thêm sản phẩm vào giỏ hàng");
      Router.push("/Shop");
    } else {
      Router.push("/Checkout");
    }
  };
  return (
    <div className="border-t-[1px] border-gray-200 relative">
      <span className="rounded-lg bg-slate-300 w-32 h-2 left-1/2 top-1 -translate-x-1/2 absolute" />
      {cartItem?.length > 0 ? (
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
        ""
      )}
      <div className="flex m-5 pt-5 justify-between items-center">
        {cartItem?.length === 0 ? (
          ""
        ) : (
          <div>
            {accountLoginLength === 0 ? (
              <div className="">
                <Link href={ROUTER.Login} passHref>
                  <span className="bg-red-redd rounded-full px-5 lg:px-20 md:px-28 py-[10px] text-white font-bold uppercase cursor-pointer shadowbtn">
                    Checkout
                  </span>
                </Link>
              </div>
            ) : (
              <span
                onClick={() => handleCheckout()}
                className="bg-red-redd rounded-full px-5 lg:px-20 md:px-28 py-[10px] text-white font-bold cursor-pointer uppercase shadowbtn"
              >
                Checkout
              </span>
            )}
          </div>
        )}
        <Link href={ROUTER.Shop} passHref>
          <span className="bg-white rounded-full px-5 lg:px-20 md:px-28 py-2 font-bold uppercase ml-2 cursor-pointer shadowbtn">
            buy more
          </span>
        </Link>
      </div>
    </div>
  );
}

export default connect(componentSelector)(CartHover);
