import react, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { FaThList } from "react-icons/fa";
import { FaTh } from "react-icons/fa";
import { useSelector } from "react-redux";
import ProductsMenu from "./productsMenu";

function DetailMenu({ products, filterId }) {
  return (
    <div className="">
      <div className="py-5 flex justify-between">
        <HandleMenu products={products} />
        <StylesHandleMenu />
      </div>
      <ProductsMenu products={products} filterId={filterId} />
    </div>
  );
}

function HandleMenu({products}) {
  const [inputShare, setInputShare] = useState("");
  let searchString = inputShare;
  let shareProducts;
  if (searchString.length > 0) {
    shareProducts = products.filter((value) => {
      console.log(value.name.toLowerCase().match(searchString));
    });
  }
  return (
    <form className="flex rounded-full py-1 px-4 items-center border-[1px] border-black w-[85%] mx-3">
      <input
        id="filter"
        onChange={(e) => setInputShare(e.target.value)}
        className="outline-none border-none w-full"
        placeholder="Search your product"
      />
      <button className="w-10 h-10 cursor-pointer">
        <span className="w-8 text-center text-gray-700">
          <BsSearch />
        </span>
      </button>
    </form>
  );
}

function StylesHandleMenu() {
  return (
    <div className="flex items-center mr-2">
      <span className="text-red-redd text-3xl lg:mr-5 mr-2">
        <FaThList />
      </span>
      <span className="text-3xl">
        <FaTh />
      </span>
    </div>
  );
}
export default DetailMenu;
