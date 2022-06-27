import react, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { BsHeart } from "react-icons/bs";
import { FiDelete } from "react-icons/fi";
import { BsArrowDownShort } from "react-icons/bs";
import ProductsMenu from "./productsMenu";
import { createSelector } from "reselect";
import { connect } from "react-redux";
import { categorySelector } from "../../../redux/selector/categorySelector";

const componentSelector = () =>
  createSelector([categorySelector], ({ category }) => {
    return {
      category,
    };
  });

function DetailMenu({ products, filterId, priceHandle, filterr, category }) {
  const [love, setLove] = useState();
  const handleLove = () => {
    setLove(!love);
  };
  const _love = love ? "active" : " ";
  const [onCategory, setOnCategory] = useState();
  const _onCategory = onCategory ? "block" : "";
  const [inputSearch, setInputSearch] = useState("");
  const onChangeSearch = (e) => {
    setInputSearch(e.target.value);
  };
  const handleDeleteSearch = () => {
    setInputSearch("");
  };

  const handleCategory = (id) => {
    setOnCategory(!onCategory);
    filterr(id);
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
          className={"text-4xl mr-10 hidden lg:block " + _love}
        >
          <BsHeart />
        </span>
        <div className="relative block lg:hidden">
          <div
            onClick={() => setOnCategory(!onCategory)}
            className="flex items-center transition-all mr-3 border-[1px] border-black py-3 px-2 md:px-14 rounded-full cursor-pointer"
          >
            Category <BsArrowDownShort />
          </div>
          <div
            className={
              "flex flex-col bg-white border-[1px] border-black absolute top-14 transition-all right-3 z-30 rounded-lg invisible opacity-0 -translate-y-10 " +
              _onCategory
            }
          >
            {category.map((value, index) => (
              <a
                key={index}
                onClick={() => handleCategory(value.id, index)}
                className="px-2 md:px-12 py-1 hover:text-red-redd"
              >
                {value.name}
              </a>
            ))}
          </div>
        </div>
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
    <form className="flex rounded-full py-3 px-4 items-center border-[1px] border-black w-[70%] lg:w-[85%] mx-3">
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

export default connect(componentSelector)(DetailMenu);
