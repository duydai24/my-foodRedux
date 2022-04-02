import { useRouter } from "next/router";
import { useSelector } from "react-redux";


const Post = () => {
  const { products } = useSelector((state) => state.products);
  console.log(products);

  const router = useRouter();
  const { productsItem } = router.query;
  console.log(productsItem);
  let new_product = products.filter((e) => {
    return e.id == productsItem;
  });

  return <p>Post: {new_product.map((val, key) => (
    <div>{val.name}</div>
  ))}</p>;
};

export default Post;
