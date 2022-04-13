import react, { useState } from "react";
import { MdFavorite } from "react-icons/md";
import { BsFillCartPlusFill } from "react-icons/bs";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../../../redux/action/cartAction";

function ProductsMenu({ products, filterId }) {
  if (filterId !== null) {
    products = products.filter((e) => {
      return e.categoryId === filterId + 1;
    });
  }

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-4 pb-24 mx-3">
      {products !== "" ? (
        products &&
        products.map((value, key) => (
          <ProductsMenuItems
            img={value.image}
            name={value.name}
            description={value.description}
            price={value.price}
            gif={"sale.gif"}
            id={key}
            key={key}
            products={products}
          />
        ))
      ) : (
        <img
          src="noData.png"
          className="rounded-xl w-full col-start-1 col-end-5"
        />
      )}
    </div>
  );
}

function ProductsMenuItems({
  img,
  name,
  description,
  price,
  gif,
  id,
  products,
}) {
  const dispatch = useDispatch();
  const { cartItem } = useSelector((state) => state.cart);

  const handleDetail = (id) => {
    let detailProduct = products.filter((e) => {
      return e.id === id;
    });
  };
  const addToCart = (id, name, img, price) => {
    const checkCart = cartItem.some((el) => el.id === id);
    if (!checkCart) {
      let quantity = 1;
      let new_cartItem = {
        id,
        name: name,
        image: img,
        price: price,
        quantity: quantity,
      };
      cartItem = [...cartItem, new_cartItem];
      let totalQuantity = 0;
      let totalPrice = 0
      cartItem.map(
        (value) => (
          (totalQuantity += value.quantity),
          (totalPrice += value.quantity * value.price)
        )
      );
      dispatch(addCart(cartItem, totalQuantity, totalPrice));
    } else {
      let filterCart = cartItem.filter((e) => {
        return e.id === id;
      });
      let key = cartItem.indexOf(...filterCart);
      cartItem[key].quantity = cartItem[key].quantity + 1;
      let totalQuantity = 0;
      let totalPrice = 0;
      cartItem.map(
        (value) => (
          (totalQuantity += value.quantity),
          (totalPrice += value.quantity * value.price)
        )
      );
      dispatch(addCart(cartItem, totalQuantity, totalPrice));
    }
    alert("Thêm vào giỏ hàng thành công");
  }
  return (
    <div
      key={id}
      className="relative cursor-pointer shadow-xl rounded-xl pb-4 ProductsMenuItems"
      onClick={() => handleDetail(id)}
    >
      <Link href={`/ProductsShop/${id}`}>
        <img className="h-32 w-full" src={img} />
      </Link>
      <img className="h-5 absolute top-2 rounded-xl" src={gif} />
      <div className="p-2">
        <Link href={`/ProductsShop/${id}`}>
          <p className="font-bold text-black text-2xl">{name}</p>
        </Link>
        <p className="">{description}</p>
      </div>
      <span className="font-bold text-red-redd text-2xl float-right mr-3">
        {price}
        {/* {""} */}
        <span className="font-bold text-red-redd text-2xl float-right mr-3">
          $
        </span>
      </span>
      <div className="lg:invisible absolute top-0 right-10 lg:right-2 SpanProductsMenuItemsHover">
        <span className="absolute top-1  rounded-full p-2 text-center text-white bg-[#222222] opacity-60">
          <MdFavorite />
        </span>
        <span
          onClick={() => addToCart(id, name, img, price)}
          className="absolute top-10 rounded-full p-2 text-center text-white bg-[#222222] opacity-60"
        >
          <BsFillCartPlusFill />
        </span>
      </div>
    </div>
  );
}

export default ProductsMenu;
