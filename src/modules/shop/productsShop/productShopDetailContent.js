import react from "react";
import { MdFavorite } from "react-icons/md";
import { BsFillCartPlusFill } from "react-icons/bs";
import Star from "../../../lib/star";
import {cart} from '../../../db/db'
import ProductsShop from "./productShop";

function ProductsShopDetailContent() {
  console.log(cart)
  return (
  <>
  { cart && cart.map((value, key) => (
    <ProductsShopDetailContentItems name={value.name} img={value.image} quantity={value.totalQuantity} description={value.description} price={value.price}/>
  ))
    
  }
    </>
  );
}


function ProductsShopDetailContentItems({name, price, description, quantity, img}) {
  return(
<div className="flex py-24">
      <div className="w-1/2">
        <img
          className="rounded-md shadow-xlanh cursor-zoom-in overflow-hidden zoomImg"
          src={img}
        />
      </div>
      <div className="w-1/2 px-10">
        <div className="">
          <p className="font-bold text-2xl">{name}</p>
          <div className="flex py-5">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
            <p className="ml-5">Reviews</p>
          </div>
          <p className="font-bold text-red-redd text-2xl mr-3 pb-5">{price}</p>
          <p>{description}</p>
        </div>
        <div className="border-y-[1px] border-gray-600 py-5 flex justify-around mt-24">
          <div className="flex">
            <span className="bg-gray-300 w-10 h-10 pt-2 text-center rounded-full hover:text-[#ff514e]">
              -
            </span>
            <span className=" w-10 h-10 pt-2 text-center rounded-full">{quantity}</span>
            <span className="bg-gray-300 w-10 h-10 pt-2 text-center  rounded-full hover:text-[#ff514e]">
              +
            </span>
          </div>
          <button className="bg-[#ff514e] rounded-3xl font-bold text-white py-1 px-20 shadow-lg uppercase border-2 border-[#ff514e] hover:bg-white hover:text-[#ff514e] flex">
            <span className="text-xl">
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
  )
}
export default ProductsShopDetailContent;
