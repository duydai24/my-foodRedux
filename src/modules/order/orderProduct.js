import React, { useState } from "react";
import { useDispatch, useSelector, connect } from "react-redux";
import Header from "../home/header/header";
import Footer from "../home/footer/footer";
import CopyRight from "../home/copyRight/copyRight";
import Cart from "../cart/cart";
import { useRouter } from "next/router";
import { handelOrder } from "../../redux/action/oderAction";
import Router from "next/router";

function OrderProduct() {
  const dispatch = useDispatch();
  const { order } = useSelector((state) => state.orders);

  const [onCart, setOnCart] = useState(false);
  const _className = onCart ? "onCart" : " ";

  const router = useRouter();
  const { orderProduct } = router.query;
  // let { cartItem } = order[orderProduct] ? order[orderProduct] : { cartItem: [] };
  // let statusLength = order[orderProduct] ? order[orderProduct].status : "";

  let new_Order = order.filter((e) => e.id == orderProduct);
  let status;
  new_Order.map((value) => (status = value.status));

  const handleOrderProduct = (id) => {
    new_Order.map((value) => value.status = "Đã huỷ đơn hàng")
    dispatch(handelOrder(order));
    alert("Huỷ đơn hàng thành công");
    Router.push("/Order");
  };

  return (
    <div>
      <Header className={_className} onClick={() => setOnCart(!onCart)} />
      <Cart className={_className} onClick={() => setOnCart(!onCart)} />
      <div className="container py-24">
        {status == "Đang chờ xác nhận đơn hàng" && (
          <h1 className="uppercase text-center font-bold">Chi tiết đơn hàng</h1>
        )}
        {status == "Đã huỷ đơn hàng" && (
          <h1 className="uppercase text-center font-bold">
            Chi tiết đơn hàng đã huỷ
          </h1>
        )}
        {status == "Đã xác nhận đơn hàng" && (
          <h1 className="uppercase text-center font-bold">
            Chi tiết đơn hàng đã xác nhận
          </h1>
        )}

        <div className="flex justify-between mt-10">
          <p className="font-bold text-center w-[250px]">Tên sản phẩm</p>
          <p className="font-bold text-center lg:max-w-[200px] max-w-[100px]">
            Hình ảnh
          </p>
          <p className="font-bold text-center w-[100px]">Số lượng</p>
          <p className="font-bold text-center w-[100px]">Giá cả</p>
          <p className="font-bold text-center w-[300px]">Thành Tiền</p>
        </div>
        {new_Order &&
          new_Order.map((value, key) => {
            let new_cartItem = value.cartItem;
            return (
              <div key={value.id} className="mt-20">
                {new_cartItem.map((value, key) => (
                  <div
                    key={value.id}
                    className="flex justify-between mt-5 shadow-xl items-center rounded-xl bg-gray-200 py-2"
                  >
                    <p className="text-center w-[250px]">{value.name}</p>
                    <img
                      className="lg:max-w-[200px] lg:max-h-[150px] max-w-[100px]"
                      src={value.image}
                    />
                    <p className="text-center w-[100px]">{value.quantity}</p>
                    <p className="text-center w-[100px]">
                      <span>$</span>
                      {value.price}
                    </p>
                    <p className="text-center w-[300px]">
                      <span>$</span>
                      {value.price * value.quantity}
                    </p>
                  </div>
                ))}
              </div>
            );
          })}

        {status == "Đang chờ xác nhận đơn hàng" ? (
          <button
            onClick={() => handleOrderProduct(orderProduct)}
            className="bg-red-redd text-white px-5 py-2 border-2 border-red-redd rounded-lg mt-10 text-center font-bold hover:bg-white hover:text-red-redd"
          >
            Huỷ đơn hàng
          </button>
        ) : (
          ""
        )}
      </div>
      <Footer />
      <CopyRight />
    </div>
  );
}

export default OrderProduct;
