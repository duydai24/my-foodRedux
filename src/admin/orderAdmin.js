import React from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { handelOrder } from "../redux/action/oderAction";

function OrderAdmin() {
  const { order } = useSelector((state) => state.orders);
  const dispatch = useDispatch();

  const cancelOrderProduct = (id) => {
    let new_order = order.filter((e) => e.id == id);
    new_order.map((value) => (value.status = "Đã huỷ đơn hàng"));
    dispatch(handelOrder(order));
    alert("Huỷ đơn hàng thành công");
  };
  const doneOrderProduct = (id) => {
    let new_order = order.filter((e) => e.id == id);
    new_order.map((value) => (value.status = "Đã xác nhận đơn hàng"));
    dispatch(handelOrder(order));
    alert("Xác nhận đơn hàng thành công");
  };
  let status;
  order.map((value) => (status = value.status));
  return (
    <div>
      <h2>Order</h2>
      <div>
        <div className="container py-24 lg:pl-24 mx-2">
          <h1 className="uppercase text-center font-bold">
            Danh sách sản phẩm đã mua
          </h1>
          <div className="flex justify-between mt-10">
            <p className="font-bold text-center w-[250px]">Họ Tên</p>
            <p className="font-bold text-center w-[100px]">Địa chỉ</p>
            <p className="font-bold text-center w-[100px]">Số điện thoại</p>
            <p className="font-bold text-center w-[100px]">Ghi chú</p>
            <p className="font-bold text-center w-[300px]">Trạng thái</p>
            <p className="font-bold text-center w-[100px]">Tuỳ chọn</p>
          </div>
          {order &&
            order.map((value, key) => {
              return (
                <div key={key}>
                  <div className="flex justify-between mt-14 bg-gray-100 rounded-xl py-5 shadow-xl pr-5">
                    <p className="text-center w-[250px]">{value.name}</p>
                    <p className="text-center w-[100px]">{value.address}</p>
                    <p className="text-center w-[100px]">{value.phone}</p>
                    <p className="text-center w-[100px]">{value.note}</p>
                    <p className="text-center w-[300px]">{value.status}</p>
                    <Link href={"/Order/orderProduct/" + value.id}>
                      <p className="text-blue-700 cursor-pointer">
                        Xem chi tiết
                      </p>
                    </Link>
                  </div>
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
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
export default OrderAdmin;
