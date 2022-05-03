import react, { useState } from "react";
import { MdFavorite } from "react-icons/md";
import { BsFillCartPlusFill } from "react-icons/bs";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../../../redux/action/cartAction";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BiFirstPage } from "react-icons/bi";
import { BiLastPage } from "react-icons/bi";

function ProductsMenu({ products, filterId, inputSearch, priceHandle }) {
  if (filterId !== 0) {
    products = products.filter((e) => e.categoryId === filterId);
  }
  products = products.filter((val) =>
    val.name.toLowerCase().includes(inputSearch.toLowerCase())
  );
  products = products.filter((val) => val.price < priceHandle);

  const [currentPage, setCurrentPage] = useState(1);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(products.length / 8); i++) {
    pageNumbers.push(i);
  }
  products = products.slice((currentPage - 1) * 8, currentPage * 8);

  const handlePage = (key) => {
    setCurrentPage(key + 1);
  };
  const handleFirstPage = () => {
    setCurrentPage(1);
  };
  const handleLastPage = () => {
    setCurrentPage(pageNumbers.length);
  };
  const handlePrePage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else {
      setCurrentPage(currentPage);
    }
  };
  const handleNextPage = () => {
    if (currentPage < pageNumbers.length) {
      setCurrentPage(currentPage + 1);
    } else {
      setCurrentPage(currentPage);
    }
  };
  handleNextPage;
  return (
    <div className="pb-24 items-center flex flex-col">
      <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 pb-10 gap-4 mx-3">
        {products.length > 0 ? (
          products.map((value, key) => (
            <ProductsMenuItems
              img={value.image}
              name={value.name}
              description={value.description}
              price={value.price}
              gif={"sale.gif"}
              id={value.id}
              keys={key}
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
      <div className="flex items-center">
        <button
          onClick={() => handleFirstPage()}
          className="p-1 text-3xl hover:text-red-redd"
        >
          <BiFirstPage />
        </button>
        <button
          onClick={() => handlePrePage()}
          className="p-1 mr-2 text-xl hover:text-red-redd"
        >
          <AiOutlineArrowLeft />
        </button>
        {pageNumbers.map((val, key) => (
          <button
            key={val}
            onClick={() => handlePage(key)}
            className={
              key + 1 === currentPage
                ? "w-8 h-8 font-bold hover:text-red-redd text-white bg-red-redd rounded-full"
                : "w-8 h-8 font-bold hover:text-red-redd"
            }
          >
            {val}
          </button>
        ))}
        <button
          onClick={() => handleNextPage()}
          className="p-1 ml-2 text-xl hover:text-red-redd"
        >
          <AiOutlineArrowRight />
        </button>
        <button
          onClick={() => handleLastPage()}
          className="p-1 text-3xl hover:text-red-redd"
        >
          <BiLastPage />
        </button>
      </div>
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
  keys,
  products,
}) {
  const dispatch = useDispatch();
  const { cartItem } = useSelector((state) => state.cart);

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
      let totalPrice = 0;
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
  };
  return (
    <div
      key={keys}
      className="relative cursor-pointer shadow-xl rounded-xl pb-4 ProductsMenuItems"
    >
      <Link href={`/ProductsShop/${id}`}>
        <img className="h-32 w-full border-white border-8 rounded" src={img} />
      </Link>
      <img className="h-5 absolute top-2 rounded-xl" src={gif} />
      <div className="p-2">
        <Link href={`/ProductsShop/${id}`}>
          <p className="font-bold text-black text-2xl">{name}</p>
        </Link>
        <p className="">{description}</p>
      </div>
      <span className="font-bold text-red-redd text-2xl float-right mr-3">
        $ {price}
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
