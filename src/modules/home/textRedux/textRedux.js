import react, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchcart } from "../../../redux/action/cartAction";

function TextRedux() {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);
  const { products } = useSelector((state) => state.products);

  console.log(products);
  

  useEffect(() => {
    dispatch(fetchcart());
  }, []);

  return <>{cart && cart.map((value, key) => <h1 key={key}>{value.totalPrice}</h1>)}</>;
}
export default TextRedux;
