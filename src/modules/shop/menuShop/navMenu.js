import react, { useState } from "react";
import { IoFastFood } from "react-icons/io5";
import { createSelector } from "reselect";
import { connect } from "react-redux";
import { categorySelector } from "../../../redux/selector/categorySelector";

const componentSelector = () =>
  createSelector([categorySelector], ({ category }) => {
    return {
      category,
    };
  });

function NavMenu({ filterr, handleInput, priceHandle, category }) {
  const [active, setActive] = useState(0);
  const handleCategory = (id) => {
    setActive(id);
    filterr(id);
  };

  return (
    <div className="hidden lg:block">
      <p className="text-2xl text-black  font-bold border-b-[1px] border-black py-5">
        Popular
      </p>
      <ul className="list-none">
        {category &&
          category.map((value, key) => (
            <LiNavMenu
              id={key}
              key={key}
              icon={<IoFastFood />}
              text={value.name}
              className={value.id === active ? "text-red-redd" : ""}
              onClick={() => handleCategory(value.id, key)}
            />
          ))}
      </ul>
      <p className="text-2xl text-black font-bold border-b-[1px] border-black py-5">
        Price
      </p>
      <div className="py-5 flex flex-col items-center relative">
        <div className="flex items-center py-3">
          <span className="text-xs">0</span>
          <span className="text-xs px-16">150</span>
          <span className="text-xs">200</span>
        </div>
        <input
          className="w-44 text-red-redd cursor-pointer accent-red-redd"
          min="1"
          max="200"
          type="range"
          onInput={handleInput}
        />

        <p className="text-red-redd font-bold pt-5">Price: {priceHandle}</p>
      </div>
    </div>
  );
}

function LiNavMenu({ icon, text, onClick, className, id }) {
  return (
    <li
      key={id}
      className={"flex items-center py-3 cursor-pointer " + className}
      onClick={onClick}
    >
      <span className="text-3xl mr-5">{icon}</span>
      <p className="fob">{text}</p>
    </li>
  );
}

export default connect(componentSelector)(NavMenu);
