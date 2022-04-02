import react, { useState } from "react";
import { MdFavorite } from "react-icons/md";
import { BsFillCartPlusFill } from "react-icons/bs";
import Link from "next/link";
import Router from "next/router";

function ProductsMenu({ products, filterId }) {
  if (filterId !== null) {
    products = products.filter((e) => {
      return e.categoryId === filterId;
    });
  }
  
  return (
    <div className="grid grid-cols-4 gap-4 pb-24">
      {products.length > 0 ? (
        products.map((value, key) => (
          <ProductsMenuItems
            img={value.image}
            name={value.name}
            description={value.description}
            price={value.price}
            gif={"sale.gif"}
            id={key}
            key={key}
            products={products}
          />
        ))
      ) : (
        <img
          src="noData.png"
          className="rounded-xl w-full col-start-1 col-end-5"
        />
      )}
    </div>
  );
}

function ProductsMenuItems({
  products,
  img,
  name,
  description,
  price,
  gif,
  id,
}) {
  const handleDetail = (id) => {
    let detailProduct = products.filter((e) => {
      return e.id === id;
    });
    console.log(detailProduct);
    console.log(id);
    
  };
  return (
    <div 
      key={id}
      className="relative cursor-pointer shadow-xl rounded-xl pb-4 ProductsMenuItems"
      onClick={() => handleDetail(id)}
    >
      <Link href={`/ProductsShop/${id}`}>
        <img className="h-32 w-full" src={img} />
      </Link>
      <img className="h-5 absolute top-2 rounded-xl" src={gif} />
      <div className="p-2">
      <Link href={`/ProductsShop/${id}`}>
          <p className="font-bold text-black text-2xl">{name}</p>
        </Link>
        <p className="">{description}</p>
      </div>
      <span className="font-bold text-red-redd text-2xl float-right mr-3">
        {price}{" "}
        <span className="font-bold text-red-redd text-2xl float-right mr-3">
          $
        </span>
      </span>
      <div className="invisible absolute top-0 right-2 SpanProductsMenuItemsHover">
        <span className="absolute top-1  rounded-full p-2 text-center text-white bg-[#222222] opacity-60">
          <MdFavorite />
        </span>
        <span className="absolute top-10 rounded-full p-2 text-center text-white bg-[#222222] opacity-60">
          <BsFillCartPlusFill />
        </span>
      </div>
    </div>
  );
}

export default ProductsMenu;
