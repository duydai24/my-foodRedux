import react, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { BsHeart } from "react-icons/bs";
import { useSelector } from "react-redux";
import ProductsMenu from "./productsMenu";

function DetailMenu({ products, filterId }) {
  const [love, setLove] = useState();

  const handleLove = () => {
    setLove(!love);
  };
  const _love = love ? "active" : " ";

  const [inputSearch, setInputSearch] = useState("");
  const onChangeSearch = (e) => {
    setInputSearch(e.target.value);
  };
  return (
    <div className="">
      <div className="py-5 flex justify-between items-center">
        <HandleMenu onChangeSearch={onChangeSearch} />
        <span onClick={() => handleLove()} className={"text-4xl mr-10 " + _love}>
          <BsHeart />
        </span>
      </div>
      <ProductsMenu
        products={products}
        inputSearch={inputSearch}
        filterId={filterId}
      />
    </div>
  );
}

function HandleMenu({ onChangeSearch }) {
  return (
    <form className="flex rounded-full py-1 px-4 items-center border-[1px] border-black w-[85%] mx-3">
      <input
        id="filter"
        onChange={onChangeSearch}
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

export default DetailMenu;
