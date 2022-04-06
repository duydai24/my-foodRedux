import react, { useState } from "react";
import { RiDeleteBack2Line } from "react-icons/ri";
import { MdOutlineDeleteForever } from "react-icons/md";
import { useDispatch, useSelector, connect } from "react-redux";
import { updateCart, deleteCart } from "../../redux/action/cartAction";

function Cart({ className, onClick }) {
  const dispatch = useDispatch();
  const { cartItem } = useSelector((state) => state.cart);
  const { cart } = useSelector((state) => state);

  const [addQuantity, setAddQuantity] = useState();
  const [truQuantity, setTruQuantity] = useState();

  const handleDeleteCartItem = (id) => {
    cartItem.splice(cartItem.id, 1);
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
      <div className="fixed top-[4rem] right-0 h-screen w-[35rem] transition-all bg-white shadow-2xl z-10 overflow-scroll">
        <HeadingCart onClick={onClick} />
        {cartItem &&
          cartItem.map((value, key) => (
            <div className="relative">
              <CartItems
                id={key}
                key={key}
                img={value.image}
                name={value.name}
                price={value.price}
                quantity={value.quantity}
                addQuantityOnClick={() => setAddQuantity(addQuantity + 1)}
                truQuantityOnClick={() => setTruQuantity(truQuantity - 1)}
                deleteCartItem={() => handleDeleteCartItem(value.id)}
              />
            </div>
          ))}
        <CartHanldle totalPrice={cart.totalPrice} />
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
        <img src={img} className="w-36 h-24" />
        <div className="ml-5">
          <h2 className="font-bold">{name}</h2>
          <span className="font-bold text-red-redd">
            $<span className="font-bold text-red-redd">{price}</span>
          </span>
          <div className="flex mt-5">
            <span
              onClick={truQuantityOnClick}
              className="bg-gray-200 w-8 h-8 text-center text-xl font-bold"
            >
              -
            </span>
            <span className="w-8 h-8 text-center mt-1">{quantity}</span>
            <span
              onClick={addQuantityOnClick}
              className="bg-gray-200 w-8 h-8 text-center text-xl font-bold"
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
  return (
    <div className="border-t-[1px] border-black absolute top-[700px]" key={id}>
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
        <button className="bg-white rounded-full px-20 py-2 font-bold uppercase ml-2 shadowbtn">
          buy more
        </button>
      </div>
    </div>
  );
}

let mapDispatchToProps = (dispatch) => {
  return {
    ADD_CART: (productId, totalQuantity, totalPrice) =>
      dispatch(addCart(productId, totalQuantity, totalPrice)),
    UPDATE_CART: (cart) => dispatch(updateCart(cart)),
    DELETE_CART: (cartItem, totalQuantity, totalPrice) =>
      dispatch(deleteCart(cartItem, totalQuantity, totalPrice)),
  };
};
let mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
