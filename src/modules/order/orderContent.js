import React from "react";
import { useSelector } from "react-redux";
import Link from "next/link";

function OrderContent() {
  const { order } = useSelector((state) => state.orders);
  const {accountLogin} = useSelector((state) => state.user)
  let userID
  accountLogin.map((value)=> userID = value.id)

  let new_Order = order.filter((val) =>  val.userId === userID)

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

      {new_Order.length > 0 ? (
        new_Order &&
        new_Order.map((value, key) => {
          return (
            <div
              key={key}
              className="flex justify-between shadow-xl mt-14 bg-gray-200 rounded-xl py-5 pr-5"
            >
              <p className="text-center w-[250px]">{value.name}</p>
              <p className="text-center w-[100px]">{value.address}</p>
              <p className="text-center w-[100px]">{value.phone}</p>
              <p className="text-center w-[100px]">{value.note}</p>
              <p className="text-center w-[300px]">{value.status}</p>
              <Link href={"/Order/orderProduct/" + value.id}>
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
