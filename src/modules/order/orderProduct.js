import React, { useState, useEffect } from "react";
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
  let { cartItem } = order[orderProduct];

  const handleOrderProduct = () => {
    let key = order.indexOf(...order);
    order[key].status = "Đã huỷ đơn hàng";
    dispatch(handelOrder(order));
    alert("Huỷ đơn hàng thành công");
    Router.push("/Order");
  };
  let statusLength = order[orderProduct].status;

  return (
    <>
      <Header className={_className} onClick={() => setOnCart(!onCart)} />
      <Cart className={_className} onClick={() => setOnCart(!onCart)} />
      <div className="container py-24">
        {statusLength == "Đang chờ xác nhận đơn hàng" && (
          <h1 className="uppercase text-center font-bold">Chi tiết đơn hàng</h1>
        )}
        {statusLength == "Đã huỷ đơn hàng" && (
          <h1 className="uppercase text-center font-bold">
            Chi tiết đơn hàng đã huỷ
          </h1>
        )}
        {statusLength == "Đã xác nhận đơn hàng" && (
          <h1 className="uppercase text-center font-bold">
            Chi tiết đơn hàng đã xác nhận
          </h1>
        )}

        <div className="flex justify-between mt-10">
          <p className="font-bold text-center w-[250px]">Tên sản phẩm</p>
          <p className="font-bold text-center w-[200px]">Hình ảnh</p>
          <p className="font-bold text-center w-[100px]">Số lượng</p>
          <p className="font-bold text-center w-[100px]">Giá cả</p>
          <p className="font-bold text-center w-[300px]">Thành Tiền</p>
        </div>
        {cartItem &&
          cartItem.map((val) => {
            return (
              <div className="flex justify-between mt-14 items-center border-b-[1px] border-gray-600 pb-10">
                <p className="text-center w-[250px]">{val.name}</p>
                <img className="max-w-[200px]" src={val.image} />
                <p className="text-center w-[100px]">{val.quantity}</p>
                <p className="text-center w-[100px]">
                  <span>$</span>
                  {val.price}
                </p>
                <p className="text-center w-[300px]">
                  <span>$</span>
                  {val.price * val.quantity}
                </p>
              </div>
            );
          })}
        {statusLength == "Đang chờ xác nhận đơn hàng" ? (
          <button
            onClick={() => handleOrderProduct()}
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
    </>
  );
}

let mapDispatchToProps = (dispatch) => {
  return {
    HANDLE_ORDER: (order) => dispatch(handelOrder(order)),
  };
};
let mapStateToProps = (state) => {
  return {
    order: state.user.order,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderProduct);
