import react from "react";
import { MdFavorite } from "react-icons/md";
import { BsFillCartPlusFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../../../redux/action/cartAction";
import { quantityNumberProducts } from "../../../redux/action/productsAction";
import Star from "../../../lib/star";
import { useRouter } from "next/router";
import { prototype } from "router";

function ProductsShopDetailContent() {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  const { products } = useSelector((state) => state.product);
  const { cartItem } = useSelector((state) => state.cart);
  const { cart } = useSelector((state) => state);
  const  quantityNumber2 = useSelector((state) => state.product.quantityNumber);
  const router = useRouter();
  const { productShopDetailContent } = router.query;
  let new_product = products.filter((e) => {
    return e.id == productShopDetailContent;
  });
// console.log(quantityNumber);
  let quantityNumber = 1;

  const handleAddQuantity = (id, key) => {
    quantityNumber += product.quantityNumber;
    dispatch(quantityNumberProducts(product, quantityNumber));
    console.log("q", quantityNumber);
  };

  const handleTruQuantity = (id, key) => {
    quantityNumber = product.quantityNumber - 1;
    dispatch(quantityNumberProducts(product, quantityNumber));
  };

  const addToCart = (id, key, name, img, price) => {
    const checkCart = cartItem.some((el) => el.id === id);
    if (!checkCart) {
      let totalQuantity = 0;
      let totalPrice = 0;
      let new_cartItem = {
        id,
        name: name,
        image: img,
        price: price,
        quantity: product.quantityNumber,
      };
      cartItem = [...cartItem, new_cartItem];
      cartItem.map(
        (value) => (
          (totalQuantity += value.quantity),
          (totalPrice += value.quantity * value.price)
        )
      );
      dispatch(addCart(cartItem, totalQuantity, totalPrice));
      quantityNumber = 1;
     dispatch(quantityNumberProducts(product, quantityNumber));
    } else {
      let filterCart = cartItem.filter((e) => {
        return e.id === id;
      });
      let key = cartItem.indexOf(...filterCart);
      console.log("quantityNumber", quantityNumber2);
      cartItem[key].quantity = cartItem[key].quantity + quantityNumber2;
      let totalQuantity = 0;
      let totalPrice = 0;
      cartItem.map(
        (value) => (
          (totalQuantity += value.quantity),
          (totalPrice += value.quantity * value.price)
        )
      );
      quantityNumber = 1;
      dispatch(quantityNumberProducts(product, quantityNumber));
      dispatch(addCart(cartItem, totalQuantity, totalPrice));
    }
    alert("Thêm vào giỏ hàng thành công");
  };
  return (
    <>
      {new_product &&
        new_product.map((value, key) => (
          <ProductsShopDetailContentItems
            id={key}
            key={key}
            name={value.name}
            img={value.image}
            description={value.description}
            quantity={product.quantityNumber}
            price={value.price}
            addQuantityOnClick={() => handleAddQuantity(value.id, key)}
            truQuantityOnClick={() => handleTruQuantity(value.id, key)}
            addToCart={() =>
              addToCart(value.id, key, value.name, value.image, value.price)
            }
          />
        ))}
    </>
  );
}

function ProductsShopDetailContentItems({
  name,
  price,
  description,
  quantity,
  img,
  id,
  truQuantityOnClick,
  addQuantityOnClick,
  addToCart,
}) {
  const { product } = useSelector((state) => state);
  return (
    <div key={id} className="flex lg:flex-row flex-col items-center py-24">
      <div className="lg:w-1/2 w-10/12">
        <img
          className="rounded-md shadow-xl w-full cursor-pointer overflow-hidden"
          src={img}
        />
      </div>
      <div className="lg:w-1/2 w-11/12 px-5">
        <div className="">
          <p className="font-bold text-2xl">{name}</p>
          <div className="flex py-5">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
            <p className="ml-5">Reviews</p>
          </div>
          <p className="font-bold text-red-redd text-2xl mr-3 pb-5">$ {price}</p>
          <p>{description}</p>
        </div>
        <div className="border-y-[1px] border-gray-600 py-5 flex justify-around lg:mt-24 mt-5">
          <div className="flex">
            <span
              onClick={truQuantityOnClick}
              className="bg-gray-300 cursor-pointer w-10 h-10 pt-2 text-center rounded-full hover:text-[#ff514e]"
            >
              -
            </span>
            <span className=" w-10 h-10 pt-2 text-center rounded-full">
              {quantity}
            </span>
            <span
              onClick={addQuantityOnClick}
              className="bg-gray-300 cursor-pointer w-10 h-10 pt-2 text-center  rounded-full hover:text-[#ff514e]"
            >
              +
            </span>
          </div>
          <button
            onClick={addToCart}
            className="bg-[#ff514e] rounded-3xl font-bold text-white p-2 lg:px-20 text-xs lg:text-xl md:px-16 shadow-lg uppercase border-2 border-[#ff514e] hover:bg-white hover:text-[#ff514e] flex"
          >
            <span className="text-xl">
              <BsFillCartPlusFill />
            </span>
            ADD TO CART
          </button>
          <span className="bg-gray-300 p-3 rounded-full hover:text-[#ff514e]">
            <MdFavorite />
          </span>
        </div>
      </div>
    </div>
  );
}
export default ProductsShopDetailContent;
