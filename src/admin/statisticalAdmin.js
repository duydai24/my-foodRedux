import React from "react";
import { useSelector } from "react-redux";

function StatisticalAdmin() {
  const { user } = useSelector((state) => state.user);
  const { products } = useSelector((state) => state.product);
  const { statistica } = useSelector((state) => state);
  const { statisticaItem } = useSelector((state) => state.statistica);

  let adminQuantity = user.filter((e) => e.role == "admin");
  let userQuantity = user.filter((e) => e.role == "user");
  let quantityTotal = 0;
  products.map((val) => {
    quantityTotal += val.quantity;
  });
  // statistica.totalQuantity = 0;
  return (
    <div className="grid grid-cols-2 px-20 gap-10">
      <UserStatistica
        totalUser={user.length}
        adminQuantity={adminQuantity.length}
        userQuantity={userQuantity.length}
      />
      <ProductsStatistica
        quantityCategory={products.length}
        quantityTotal={quantityTotal}
        quantityHot={statistica.totalQuantity}
        quantityOut={statistica.totalPrice}
      />
      <A1 />
      <OrderStatistical />
    </div>
  );
}

function UserStatistica({ totalUser, adminQuantity, userQuantity }) {
  return (
    <div className="bg-slate-100 p-5 rounded-lg">
      <p className="font-bold pb-10">Thống kê tài khoản</p>
      <p>- Số lương tài khoản hiện có: {totalUser}</p>
      <p>- Số lượng admin: {adminQuantity}</p>
      <p>- Số lượng user: {userQuantity}</p>
    </div>
  );
}
function ProductsStatistica({
  quantityCategory,
  quantityHot,
  quantityOut,
  quantityTotal,
}) {
  return (
    <div className="bg-slate-100 p-5 rounded-lg">
      <p className="font-bold pb-10">Thống kê sản phẩm</p>
      <p>- Các mặt hàng đang được bán: {quantityCategory}</p>
      <p>- Số lương sản phẩm còn lại trong shop: {quantityTotal}</p>
      <p>- Số lượng sản phẩm bán được: {quantityHot}</p>
      <p>- Tống doanh thu: {quantityOut}$</p>
    </div>
  );
}
/*tạo hàm tìm phần tử xuất hiện nhiều nhất trong mảng JavaScript*/
function A1() {
  const { statisticaItem } = useSelector((state) => state.statistica);
  // let statisticaItem = [1, 3, 3, 3, 3, 2, 3, 8];
  statisticaItem.sort();

  let max = [0, 0];

  //So sánh số lần xuất hiện và thay đổi max khi cần.
  let count = 1;
  for (let i = statisticaItem.length - 1; i > 1; --i) {
    if (statisticaItem[i].id == statisticaItem[i - 1].id)
      ++count; //Thấy phần tử trùng nhau thì tiếp tục đếm
    else {
      //So sánh số lần xuất hiện với max[1]
      if (max[1] < count) {
        //Nếu tìm thấy phần tử xuất hiện nhiều hơn thì gán phần tử vào max[0]
        //Và gán số lần xuất hiện vào max[1]
        max[0] = statisticaItem[i];
        max[1] = count;
      }
      count = 1;
    }
  }
  // console.log(statisticaItem);
  // console.log(
  //   "Phần tử " + max[0].name + " xuất hiện nhiều nhất với " + max[1] + " lần"
  // );

  return (
    <div className="bg-slate-100 p-5 rounded-lg">
      <p className="font-bold pb-10">Thống kê sản phẩm bán chạy</p>
      <p>Sản phẩm bán chạy nhất: {max[0].name}</p>
      <p>Với {max[1]} lần được mua</p>
      <img
        alt="img"
        className="mt-10 rounded-md"
        src={max[0].image}
        width={300}
        h={300}
      />
    </div>
  );
}

function OrderStatistical() {
  const { order } = useSelector((state) => state.orders);
  let order_wait = order.filter(
    (e) => e.status == "Đang chờ xác nhận đơn hàng"
  );
  let order_done = order.filter((e) => e.status == "Đã xác nhận đơn hàng");
  let order_cancel = order.filter((e) => e.status == "Đã huỷ đơn hàng");

  return (
    <div className="bg-slate-100 p-5 rounded-lg">
      <p className="font-bold pb-10">Thống kê đơn hàng</p>
      <p>Tống số lượng đơn hàng: {order.length}</p>
      <p>Tống số lượng đơn hàng đang chờ xác nhận: {order_wait.length}</p>
      <p>Tống số lượng đơn hàng đã xác nhận: {order_done.length}</p>
      <p>Tống số lượng đơn hàng đã huỷ: {order_cancel.length}</p>
    </div>
  );
}
export default StatisticalAdmin;
