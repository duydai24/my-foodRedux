import React from "react";
import Link from "next/link";
import { handelOrder } from "../redux/action/oderAction";
import { toast } from "react-toastify";
import Admin from "./admin";
import { createSelector } from "reselect";
import { connect } from "react-redux";
import { orderSelector } from "../redux/selector/orderSelector";

const componentSelector = () =>
  createSelector([orderSelector], ({ order }) => {
    return {
      order,
    };
  });

function OrderAdmin({ dispatch, order }) {
  const cancelOrderProduct = (id) => {
    let new_order = order.filter((e) => e.id == id);
    new_order.forEach((value) => (value.status = "Đã huỷ đơn hàng"));
    dispatch(handelOrder(order));
    toast.success("Huỷ đơn hàng thành công");
  };
  const doneOrderProduct = (id) => {
    let new_order = order.filter((e) => e.id == id);
    new_order.forEach((value) => (value.status = "Đã xác nhận đơn hàng"));
    dispatch(handelOrder(order));
    toast.success("Xác nhận đơn hàng thành công");
  };
  return (
    <Admin>
      <div className="container pb-24 pt-10">
        <h1 className="uppercase text-center font-bold">
          Danh sách sản phẩm đã mua
        </h1>
        <div className="flex justify-between mt-10">
          <p className="font-bold text-center w-[250px]">Họ Tên</p>
          <p className="font-bold text-center w-[100px]">Địa chỉ</p>
          <p className="font-bold text-center w-[200px]">Số điện thoại</p>
          <p className="font-bold text-center w-[100px]">Ghi chú</p>
          <p className="font-bold text-center w-[300px]">Trạng thái</p>
          <p className="font-bold text-center w-[100px]">Tuỳ chọn</p>
        </div>
        {order &&
          order.map((value, key) => {
            return (
              <div key={key}>
                <div className="flex justify-between mt-14 rounded-xl py-5 shadow-xl pr-5 bg-white">
                  <p className="text-center w-[250px]">{value.name}</p>
                  <p className="text-center w-[100px]">{value.address}</p>
                  <p className="text-center w-[200px]">{value.phone}</p>
                  <p className="text-center w-[100px]">{value.note}</p>
                  <p className="text-center w-[300px]">{value.status}</p>
                  <Link href={"/Order/orderProduct/" + value.id} passHref>
                    <p className="text-blue-700 cursor-pointer">Xem chi tiết</p>
                  </Link>
                </div>
                {value.status == "Đang chờ xác nhận đơn hàng" && (
                  <div className="flex justify-around">
                    <button
                      onClick={() => doneOrderProduct(value.id)}
                      className="bg-red-redd text-white px-5 py-2 border-2 border-red-redd rounded-lg mt-10 text-center font-bold hover:bg-white hover:text-red-redd"
                    >
                      Xác nhận đơn hàng
                    </button>
                    <button
                      onClick={() => cancelOrderProduct(value.id)}
                      className="bg-red-redd text-white px-5 py-2 border-2 border-red-redd rounded-lg mt-10 text-center font-bold hover:bg-white hover:text-red-redd"
                    >
                      Huỷ đơn hàng
                    </button>
                  </div>
                )}
                {value.status == "Đã huỷ đơn hàng" && (
                  <div className="flex justify-around">
                    <button
                      onClick={() => doneOrderProduct(value.id)}
                      className="bg-red-redd text-white px-5 py-2 border-2 border-red-redd rounded-lg mt-10 text-center font-bold hover:bg-white hover:text-red-redd"
                    >
                      Xác nhận đơn hàng
                    </button>
                  </div>
                )}
                {value.status == "Đã xác nhận đơn hàng" && (
                  <div className="flex justify-around">
                    <button
                      onClick={() => cancelOrderProduct(value.id)}
                      className="bg-red-redd text-white px-5 py-2 border-2 border-red-redd rounded-lg mt-10 text-center font-bold hover:bg-white hover:text-red-redd"
                    >
                      Huỷ đơn hàng
                    </button>
                  </div>
                )}
              </div>
            );
          })}
      </div>
    </Admin>
  );
}
export default connect(componentSelector)(OrderAdmin);
