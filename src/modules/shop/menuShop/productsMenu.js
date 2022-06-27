import react, { useState } from "react";
import { MdFavorite } from "react-icons/md";
import { BsFillCartPlusFill } from "react-icons/bs";
import Link from "next/link";
import { addCart, updateCart } from "../../../redux/action/cartAction";
import { updateQuantityNumberProducts } from "../../../redux/action/productsAction";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BiFirstPage } from "react-icons/bi";
import { BiLastPage } from "react-icons/bi";
import { toast } from "react-toastify";
import { createSelector } from "reselect";
import { batch, connect } from "react-redux";
import { cartSelector } from "../../../redux/selector/cartSelector";

const componentSelector = () =>
  createSelector([cartSelector], ({ cartItem }) => {
    return {
      cartItem,
    };
  });

function ProductsMenu({
  products,
  filterId,
  inputSearch,
  priceHandle,
  cartItem,
  dispatch,
}) {
  if (filterId !== 0) {
    products = products.filter((e) => e.categoryId === filterId);
  }
  products = products.filter((value) =>
    value.name?.toLowerCase().includes(inputSearch.toLowerCase())
  );
  products = products.filter((value) => value.price < priceHandle);

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
  return (
    <div className="pb-24 items-center flex flex-col">
      <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 pb-10 gap-4 mx-3">
        {products.length > 0 ? (
          products.map((value, key) => (
            <ProductsMenuItems
              key={key}
              img={value.image}
              name={value.name}
              quantity={value.quantity}
              price={value.price}
              gif={value.gif}
              id={value.id}
              saleNumber={value.saleNumber}
              cartItem={cartItem}
              dispatch={dispatch}
            />
          ))
        ) : (
          <img
            alt="img"
            src="/noData.png"
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
        {pageNumbers.map((value, key) => (
          <button
            key={key}
            onClick={() => handlePage(key)}
            className={
              key + 1 === currentPage
                ? "w-8 h-8 font-bold lg:hover:text-red-redd text-white bg-red-redd rounded-full"
                : "w-8 h-8 font-bold lg:hover:text-red-redd"
            }
          >
            {value}
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
  quantity,
  price,
  id,
  saleNumber,
  cartItem,
  dispatch,
}) {
  const quantityNumber = 1;
  const addToCart = (id, name, img, price) => {
    const checkCart = cartItem.some((e) => e.id === id);
    if (!checkCart) {
      if (saleNumber === undefined) {
        let new_cartItem = {
          id,
          name: name,
          image: img,
          price: price,
          quantity: 1,
        };
        dispatch(addCart(new_cartItem));
      } else {
        let new_cartItem = {
          id,
          name: name,
          image: img,
          price: (price * (100 - saleNumber)) / 100,
          quantity: 1,
        };
        dispatch(addCart(new_cartItem));
      }
    } else {
      dispatch(updateCart(id, quantityNumber));
    }
    toast.success("Thêm vào giỏ hàng thành công");
    dispatch(updateQuantityNumberProducts(id, quantityNumber));
  };
  return (
    <div className="relative cursor-pointer shadow-xl rounded-xl ProductsMenuItems flex flex-col justify-between p-4">
      <Link href={`/ProductsShop/${id}`} passHref>
        <img
          alt="img"
          className=" border-white rounded w-44 h-44"
          src={img}
          height={100}
          width={100}
        />
      </Link>
      <div>
        {saleNumber !== undefined ? (
          <span className="text-red-redd text-sm font-bold text-center w-0 h-8 absolute top-0 left-0 saleNumberProducts">
            <span className="absolute top-1 -left-[15px]">-{saleNumber}%</span>
          </span>
        ) : (
          ""
        )}

        <div>
          <Link href={`/ProductsShop/${id}`} passHref>
            <p className="font-bold text-black text-2xl">{name}</p>
          </Link>
          <p className="text-xs">Còn {quantity} sản phẩm</p>
        </div>
        {saleNumber !== undefined ? (
          <div className="flex h-10 justify-between items-center">
            <span className="font-bold text-gray-400 text-lg line-through float-right mr-3">
              $ {price}
            </span>
            <span className="font-bold text-red-redd text-2xl  mr-3">
              $ {(price * (100 - saleNumber)) / 100}
            </span>
          </div>
        ) : (
          <span className="font-bold h-10 text-red-redd float-right text-2xl  mr-3">
            $ {price}
          </span>
        )}
        <div className="lg:invisible absolute top-2 right-1zz lg:right-2 lg:opacity-10 opacity-60 SpanProductsMenuItemsHover">
          <button className="absolute top-3 rounded-full p-2 text-center text-white bg-[#222222] ">
            <MdFavorite />
          </button>
          <button
            onClick={() => addToCart(id, name, img, price, saleNumber)}
            className="absolute top-12 rounded-full p-2 text-center text-white bg-[#222222]"
          >
            <BsFillCartPlusFill />
          </button>
        </div>
      </div>
    </div>
  );
}

export default connect(componentSelector)(ProductsMenu);
