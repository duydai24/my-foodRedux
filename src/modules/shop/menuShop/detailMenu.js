import react, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { BsHeart } from "react-icons/bs";
import { FiDelete } from "react-icons/fi";
import ProductsMenu from "./productsMenu";

function DetailMenu({ products, filterId, priceHandle }) {
  const [love, setLove] = useState();
  const handleLove = () => {
    setLove(!love);
  };
  const _love = love ? "active" : " ";

  const [inputSearch, setInputSearch] = useState("");
  const onChangeSearch = (e) => {
    setInputSearch(e.target.value);
  };
  const handleDeleteSearch = () => {
    inputSearch = "";
    setInputSearch(inputSearch);
  };
  return (
    <div className="">
      <div className="py-5 flex justify-between items-center">
        <HandleMenu
          onChangeSearch={onChangeSearch}
          handleDeleteSearch={() => handleDeleteSearch()}
          inputSearchLength={inputSearch.length}
          inputSearch={inputSearch}
        />
        <span
          onClick={() => handleLove()}
          className={"text-4xl mr-10 " + _love}
        >
          <BsHeart />
        </span>
      </div>
      <ProductsMenu
        products={products}
        inputSearch={inputSearch}
        filterId={filterId}
        priceHandle={priceHandle}
      />
    </div>
  );
}

function HandleMenu({
  onChangeSearch,
  handleDeleteSearch,
  inputSearchLength,
  inputSearch,
}) {
  return (
    <form className="flex rounded-full py-3 px-4 items-center border-[1px] border-black w-[85%] mx-3">
      <input
        id="filter"
        onChange={onChangeSearch}
        value={inputSearch}
        className="outline-none border-none w-full"
        placeholder="Search your product"
      />
      {inputSearchLength > 0 ? (
        <span
          onClick={handleDeleteSearch}
          className="pr-5 text-center text-gray-700 cursor-pointer"
        >
          <FiDelete />
        </span>
      ) : (
        <span className="pr-5 text-center text-gray-700 cursor-pointer">
          <BsSearch />
        </span>
      )}
    </form>
  );
}

export default DetailMenu;
