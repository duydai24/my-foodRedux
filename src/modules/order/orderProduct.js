import React, { useState } from "react";
import { connect } from "react-redux";
import { useRouter } from "next/router";
import { handelOrder } from "../../redux/action/oderAction";
import Router from "next/router";
import Layout from "../../layout/layout";
import { toast } from "react-toastify";
import { createSelector } from "reselect";
import { orderSelector } from "../../redux/selector/orderSelector";

const componentSelector = () =>
  createSelector([orderSelector], ({ order }) => {
    return {
      order,
    };
  });

function OrderProduct({ dispatch, order }) {
  const router = useRouter();
  const { orderProduct } = router.query;

  let new_Order = order.filter((e) => e.id == orderProduct);
  let status;
  new_Order.forEach((value) => (status = value.status));

  const handleOrderProduct = (id) => {
    new_Order.forEach((value) => (value.status = "Đã huỷ đơn hàng"));
    dispatch(handelOrder(order));
    toast.success("Huỷ đơn hàng thành công");
    Router.push("/Order");
  };

  return (
    <Layout>
      <div className="bg-bg">
        <div className="container py-24">
          {status == "Đang chờ xác nhận đơn hàng" && (
            <h1 className="uppercase text-center font-bold">
              Chi tiết đơn hàng
            </h1>
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
                <div key={value.id} className="mt-20 mx-2">
                  {new_cartItem.map((value, key) => (
                    <div
                      key={key}
                      className="flex justify-between mt-5 shadow-sm items-center rounded-xl bg-white py-2"
                    >
                      <p className="text-center w-[250px]">{value.name}</p>
                      <img
                        alt="img"
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
      </div>
    </Layout>
  );
}

export default connect(componentSelector)(OrderProduct);
