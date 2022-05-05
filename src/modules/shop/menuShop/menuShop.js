import react, { useState } from "react";
import DetailMenu from "./detailMenu";
import NavMenu from "./navMenu";

function MenuShop({ products }) {
  const [filterId, setFilterId] = useState(0);
  const _filterr = (id) => {
    setFilterId(id);
  };

  const [priceHandle, setPriceHandle] = useState(150);
  const handleInput = (e) => {
    setPriceHandle(e.target.value);
  };

  return (
    <div className="container lg:px-20 lg:pt-24 pt-3 flex justify-between">
      <div className="lg:w-[15%]">
        <NavMenu
          filterr={_filterr}
          priceHandle={priceHandle}
          handleInput={handleInput}
        />
      </div>
      <div className="w-full lg:w-[80%]">
        <DetailMenu
          priceHandle={priceHandle}
          products={products}
          filterId={filterId}
          handleInput={handleInput}
          filterr={_filterr}
        />
      </div>
    </div>
  );
}
export default MenuShop;
