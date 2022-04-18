import React from "react";
import { useSelector } from "react-redux";
import Link from "next/link";

function OrderContent() {
  const { order } = useSelector((state) => state.orders);

  return (
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

      {order.length > 0 ? (
        order &&
        order.map((value, key) => {
          return (
            <div
              id={key}
              className="flex justify-between mt-14 border-b-[1px] border-gray-600 pb-5"
            >
              <p className="text-center w-[250px]">{value.name}</p>
              <p className="text-center w-[100px]">{value.address}</p>
              <p className="text-center w-[100px]">{value.phone}</p>
              <p className="text-center w-[100px]">{value.note}</p>
              <p className="text-center w-[300px]">{value.status}</p>
              <Link href={"/Order/orderProduct/" + key}>
                <p className="text-blue-700 cursor-pointer">Xem chi tiết</p>
              </Link>
            </div>
          );
        })
      ) : (
        <p className="text-center font-bold py-10">^^Chưa có Order^^</p>
      )}
    </div>
  );
}

export default OrderContent;
