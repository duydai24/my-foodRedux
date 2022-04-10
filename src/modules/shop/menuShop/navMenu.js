import react, { useState } from "react";
import { useSelector } from "react-redux";
import { MdFastfood } from "react-icons/md";

function NavMenu({ filterr }) {
  const [active, setActive] = useState(0);
  const handleCategory = (key) => {
    setActive(key);
    filterr(key);
  };
  const { category } = useSelector((state) => state.categorys);
  return (
    <div className="">
      <h2 className="text-2xl text-black font-bold border-b-[1px] border-black py-5">
        Popular
      </h2>
      <ul className="list-none">
        {category &&
          category.map((value, key) => (
            <LiNavMenu
              id={key}
              key={key}
              icon={<MdFastfood />}
              text={value.name}
              className={key === active ? "active" : ""}
              onClick={() => handleCategory(key)}
            />
          ))}
      </ul>
      <h2 className="text-2xl text-black font-bold border-b-[1px] border-black py-5">
        Price
      </h2>
      <form>
        <FormNavMenu text={"Under $100"} />
        <FormNavMenu text={"$50 to $100"} />
        <FormNavMenu text={"Under $50"} />
        <FormNavMenu text={"Above $100"} />
      </form>
    </div>
  );
}

function LiNavMenu({ icon, text, onClick, className, id }) {
  return (
    <li
      key={id}
      className={
        "flex items-center py-3 cursor-pointer hover:text-red-redd " + className
      }
      onClick={onClick}
    >
      <a className="text-3xl mr-5">{icon}</a>
      <span className="fob">{text}</span>
    </li>
  );
}

function FormNavMenu({ value, text }) {
  return (
    <label className="flex items-center py-3">
      <input
        className="text-4xl mr-5"
        type="radio"
        name="radio"
        value={value}
      />
      <span className="">{text}</span>
    </label>
  );
}
export default NavMenu;
