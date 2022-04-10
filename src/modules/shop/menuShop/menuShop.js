import react, { useState } from "react";
import DetailMenu from "./detailMenu";
import NavMenu from "./navMenu";

function MenuShop({ products }) {
  const [filterId, setFilterId] = useState(null);
  const _filterr = (key) => {
    setFilterId(key);
    console.log(key + 1, "id");
  };
  

  return (
    <div className="px-20 mt-24 flex justify-between">
      <div className="w-[15%]">
        <NavMenu filterr={_filterr} />
      </div>
      <div className="w-[80%]">
        <DetailMenu products={products} filterId={filterId} />
      </div>
    </div>
  );
}
export default MenuShop;
