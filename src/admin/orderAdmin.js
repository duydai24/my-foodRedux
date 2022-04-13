import React from "react";
import Link from "next/link";
import { useDispatch, useSelector, connect } from "react-redux";
import { handelOrder } from "../redux/action/oderAction";

function OrderAdmin() {
  const { order } = useSelector((state) => state.orders);
  const dispatch = useDispatch();

  const cancelOrderProduct = (key) => {
    order[key].status = "Đã huỷ đơn hàng";
    dispatch(handelOrder(order));
    alert("Huỷ đơn hàng thành công");
  };
  const doneOrderProduct = (key) => {
    order[key].status = "Đã xác nhận đơn hàng";
    dispatch(handelOrder(order));
    alert("Xác nhận đơn hàng thành công");
  };
  return (
    <>
      <h2>Order</h2>
      <>
        <div className="container py-24">
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
                <>
                  <div className="flex justify-between mt-14 border-b-[1px] border-gray-600 pb-5">
                    <p className="text-center w-[250px]">{value.name}</p>
                    <p className="text-center w-[100px]">{value.address}</p>
                    <p className="text-center w-[100px]">{value.phone}</p>
                    <p className="text-center w-[100px]">{value.note}</p>
                    <p className="text-center w-[300px]">{value.status}</p>
                    <Link href={"/Order/orderProduct/" + key}>
                      <p className="text-blue-700 cursor-pointer">
                        Xem chi tiết
                      </p>
                    </Link>
                  </div>
                  <div className="flex justify-around">
                    {}
                    <button
                      onClick={() => doneOrderProduct(key)}
                      className="bg-red-redd text-white px-5 py-2 border-2 border-red-redd rounded-lg mt-10 text-center font-bold hover:bg-white hover:text-red-redd"
                    >
                      Xác nhận đơn hàng
                    </button>
                    <button
                      onClick={() => cancelOrderProduct(key)}
                      className="bg-red-redd text-white px-5 py-2 border-2 border-red-redd rounded-lg mt-10 text-center font-bold hover:bg-white hover:text-red-redd"
                    >
                      Huỷ đơn hàng
                    </button>
                  </div>
                </>
              );
            })}
        </div>
      </>
    </>
  );
}
export default OrderAdmin;
