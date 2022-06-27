import react, { useState } from "react";
import { MdFavorite } from "react-icons/md";
import { BsFillCartPlusFill } from "react-icons/bs";
import { addCart, updateCart } from "../../../redux/action/cartAction";
import {
  quantityNumberProducts,
  updateProducts,
  updateQuantityNumberProducts,
} from "../../../redux/action/productsAction";
import Star from "../../../lib/star";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { createSelector } from "reselect";
import { batch, connect } from "react-redux";
import { cartSelector } from "../../../redux/selector/cartSelector";
import {
  productsSelector,
  saleSeclector,
} from "../../../redux/selector/productsSelector";

const componentSelector = () =>
  createSelector(
    [productsSelector, cartSelector, saleSeclector],
    ({ products }, { cartItem }, { sale }) => {
      return {
        products,
        cartItem,
        sale,
      };
    }
  );

function ProductsShopDetailContent({ dispatch, products, cartItem, sale }) {
  const router = useRouter();
  const { productShopDetailContent } = router.query;
  let new_product = products.filter((e) => {
    return e.id == productShopDetailContent;
  });
  const [quantityNumber, setQuantityNumber] = useState(1);
  const handleAddQuantity = () => {
    setQuantityNumber(quantityNumber + 1);
  };

  const handleTruQuantity = () => {
    if (quantityNumber > 1) {
      setQuantityNumber(quantityNumber - 1);
    }
  };

  const addToCart = (id, name, img, price) => {
    const checkCart = cartItem.some((e) => e.id === id);
    if (!checkCart) {
      let new_cartItem = {
        id,
        name: name,
        image: img,
        price: price,
        quantity: quantityNumber,
      };
      dispatch(addCart(new_cartItem));
    } else {
      dispatch(updateCart(id, quantityNumber));
    }
    toast.success("Thêm vào giỏ hàng thành công");
    dispatch(updateQuantityNumberProducts(id, quantityNumber));
    setQuantityNumber(1);
  };
  return (
    <div>
      {new_product?.map((value, key) => (
        <ProductsShopDetailContentItems
          id={key}
          key={key}
          name={value.name}
          img={value.image}
          description={value.description}
          quantityNumber={quantityNumber}
          price={value.price}
          addQuantityOnClick={() => handleAddQuantity()}
          truQuantityOnClick={() => handleTruQuantity()}
          addToCart={() =>
            addToCart(value.id, value.name, value.image, value.price)
          }
          sale={sale}
        />
      ))}
    </div>
  );
}

function ProductsShopDetailContentItems({
  name,
  price,
  description,
  quantityNumber,
  img,
  id,
  truQuantityOnClick,
  addQuantityOnClick,
  addToCart,
  sale,
}) {
  let saleNumber;
  sale.map((val) => (saleNumber = val.saleNumber));
  return (
    <div key={id} className="flex lg:flex-row flex-col items-center py-24">
      <div className="lg:w-1/2 w-10/12">
        <img
          alt="img"
          className="rounded-md w-full cursor-pointer overflow-hidden"
          src={img}
        />
      </div>
      <div className="lg:w-1/2 w-11/12 px-5">
        <div className="">
          <p className="font-bold text-2xl pt-5">{name}</p>
          <div className="flex py-5">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
            <p className="ml-5">Reviews</p>
          </div>
          <p className="font-bold text-red-redd text-xl mr-3 pb-5">
            $ {(price * (100 - saleNumber)) / 100}
          </p>
          <p>{description}</p>
        </div>
        <div className="border-y-[1px] border-gray-600 py-5 flex justify-around lg:mt-24 mt-5">
          <div className="flex">
            <span
              onClick={truQuantityOnClick}
              className="bg-gray-300 cursor-pointer text-2xl w-10 h-10 pt-[2px] text-center rounded-full hover:text-[#ff514e]"
            >
              -
            </span>
            <span className=" w-10 h-10 pt-2 text-center rounded-full">
              {quantityNumber}
            </span>
            <span
              onClick={addQuantityOnClick}
              className="bg-gray-300 cursor-pointer text-2xl w-10 h-10 pt-1 text-center  rounded-full hover:text-[#ff514e]"
            >
              +
            </span>
          </div>
          <button
            onClick={addToCart}
            className="bg-[#ff514e] items-center rounded-3xl font-bold text-white p-2 lg:px-20 text-xs lg:text-[20px] md:px-16 shadow-lg uppercase border-2 border-[#ff514e] hover:bg-white hover:text-[#ff514e] flex"
          >
            <span className="text-xl mr-1">
              <BsFillCartPlusFill />
            </span>
            ADD TO CART
          </button>
          <span className="bg-gray-300 p-3 rounded-full hover:text-[#ff514e]">
            <MdFavorite />
          </span>
        </div>
      </div>
    </div>
  );
}
export default connect(componentSelector)(ProductsShopDetailContent);
