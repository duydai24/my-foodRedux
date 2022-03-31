import react from "react";
import { BsSearch } from "react-icons/bs";
import { FaThList } from "react-icons/fa";
import { FaTh } from "react-icons/fa";
import ProductsMenu from "./productsMenu";

function DetailMenu({ products, filterId }) {
  return (
    <div className="">
      <div className="py-5 flex justify-between">
        <HandleMenu />
        <StylesHandleMenu />
      </div>
      <ProductsMenu products={products} filterId={filterId} />
    </div>
  );
}

function HandleMenu() {
  return (
    <form className="flex rounded-full py-1 px-4 items-center border-[1px] border-black w-[85%]">
      <input
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
    <div className="flex items-center">
      <span className="text-red-redd text-3xl mr-5">
        <FaThList />
      </span>
      <span className="text-3xl">
        <FaTh />
      </span>
    </div>
  );
}
export default DetailMenu;
