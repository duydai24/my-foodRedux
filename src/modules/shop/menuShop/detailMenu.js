import react, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { BsFileArrowUpFill } from "react-icons/bs";
import { BsFileArrowDownFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import ProductsMenu from "./productsMenu";

function DetailMenu({ products, filterId }) {
  const [lowToHigh, setLowToHigh] = useState();
  const [highTolow, setHighTolow] = useState();

  const HandleLowToHigh = () => {
    setLowToHigh(!lowToHigh);
  };
  const HandleHighTolow = () => {
    setHighTolow(!highTolow);
  };
  const _lowToHigh = lowToHigh ? "active" : " ";
  const _highTolow = highTolow ? "active" : " ";


  return (
    <div className="">
      <div className="py-5 flex justify-between">
        <HandleMenu products={products} />
        <StylesHandleMenu
          className={_lowToHigh}
          className2={_highTolow}
          handleLowToHigh={() => HandleLowToHigh()}
          handleHighTolow={() => HandleHighTolow()}
        />
      </div>
      <ProductsMenu products={products} filterId={filterId} />
    </div>
  );
}

function HandleMenu({ products }) {
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

function StylesHandleMenu({ handleHighTolow, handleLowToHigh, className, className2 }) {
  return (
    <div className="flex items-center mr-2">
      <span
        onClick={handleLowToHigh}
        className={"text-3xl lg:mr-5 mr-2 " + className}
      >
        <BsFileArrowUpFill />
      </span>
      <span onClick={handleHighTolow} className={"text-3xl " + className2}>
        <BsFileArrowDownFill />
      </span>
    </div>
  );
}
export default DetailMenu;
