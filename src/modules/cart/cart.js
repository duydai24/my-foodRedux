import react, { useState } from "react";
import { RiDeleteBack2Line } from "react-icons/ri";
import { MdOutlineDeleteForever } from "react-icons/md";
import { useSelector } from "react-redux";

function Cart({ className, onClick }) {
  const { cart } = useSelector((state) => state.cart);
  const { products } = useSelector((state) => state.products);


  // console.log(cart)
  // console.log(products)
  
  const handleQuantity = (key) => {
  };

  // let checkCart = cart && cart.some((e) => e.productId === key);
    // if (checkCart) {

// let a1 = cart.includes(productId)

      // let new_cart = products.filter((e) => {
      //   return e.id === 0;
        
      // });
      // console.log(new_cart);
    // }



  return (
    <div className={"hidden " + className}>
      <div
        className="fixed top-[4rem] left-0 bg-slate-400 transition-all z-10 opacity-50 overPlayCart "
        onClick={onClick}
      ></div>
      <div className="fixed top-[4rem] right-0 h-screen w-[35rem] transition-all bg-white shadow-2xl z-10">
        <HeadingCart onClick={onClick} />
        {cart &&
          cart.map((value, key) => (
            <div className="relative">
              <CartItems
                id={key}
                key={key}
                img={value.image}
                name={value.name}
                price={value.price}
                quantity={value.totalQuantity}
                setHandleQty={handleQuantity}
              />
              <CartHanldle id={key} key={key} totalPrice={value.price * value.totalQuantity} />
            </div>
          ))}
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

function CartItems({ name, img, price, quantity, setHandleQty, id }) {
  return (
    <div className="flex m-5 items-center justify-between" key={id}>
      <div className="flex">
        <img src={img} className="w-26 h-24" />
        <div className="ml-5">
          <h2 className="font-bold">{name}</h2>
          <span className="font-bold text-red-redd">
            $<span className="font-bold text-red-redd">{price}</span>
          </span>
          <div className="flex mt-5">
            <span
              onClick={setHandleQty(id)}
              className="bg-gray-200 w-8 h-8 text-center text-xl font-bold"
            >
              -
            </span>
            <span className="w-8 h-8 text-center mt-1">{quantity}</span>
            <span
              onClick={setHandleQty(id)}
              className="bg-gray-200 w-8 h-8 text-center text-xl font-bold"
            >
              +
            </span>
          </div>
        </div>
      </div>

      <span className="text-3xl text-gray-400">
        <MdOutlineDeleteForever />
      </span>
    </div>
  );
}

function CartHanldle({ totalPrice , id}) {
  return (
    <div className="" key={id}>
      <div className="flex mx-8 my-5 justify-between">
        <h2 className="font-bold text-xl">Total</h2>
        <span className="font-bold text-red-redd text-xl">
          $<span className="font-bold text-red-redd text-xl">{totalPrice}</span>
        </span>
      </div>
      <div className="flex m-5 justify-between">
        <button className="bg-red-redd rounded-full px-20 py-2 text-white font-bold uppercase shadowbtn">
          Checkout
        </button>
        <button className="bg-white rounded-full px-20 py-2 font-bold uppercase shadowbtn">
          buy more
        </button>
      </div>
    </div>
  );
}
export default Cart;
