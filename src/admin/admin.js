import Link from "next/link";
import React, { useState } from "react";
import Header from "../modules/home/header/header";
import Footer from "../modules/home/footer/footer";
import CopyRight from "../modules/home/copyRight/copyRight";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useDispatch, useSelector, connect } from "react-redux";
import { addProducts, deleteProducts } from "../redux/action/productsAction";
import { handelOrder } from "../redux/action/oderAction";

function Admin() {
  const [onCart, setOnCart] = useState(false);
  const _className = onCart ? "onCart" : " ";

  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [description, setDescription] = useState();
  const [image, setImage] = useState();
  const [quantity, setQuantity] = useState();
  const [categoryId, setCategoryId] = useState();
  const [value, setValue] = useState();
  const [buttonAdd, setButtonAdd] = useState(false);
  const { products } = useSelector((state) => state.products);
  const { order } = useSelector((state) => state.orders);

  const dispatch = useDispatch();

  const handleName = (name) => {
    setName(name);
  };
  const handlePrice = (price) => {
    setPrice(price);
  };
  const handleDescription = (description) => {
    setDescription(description);
  };
  const handleImage = (image) => {
    setImage(image);
  };
  const handleQuantity = (quantity) => {
    setQuantity(quantity);
  };
  const handleCategoryId = (categoryId) => {
    setCategoryId(categoryId);
  };
  const handlAddProducts = () => {
    let new_products = {
      id: Math.floor(Math.random() * 999999),
      name: name,
      description: description,
      image: image,
      price: price,
      quantity: quantity,
      categoryId: categoryId,
    };
    if (
      name.length > 0 &&
      description.length > 0 &&
      image.length > 0 &&
      price.length > 0 &&
      quantity.length > 0 &&
      categoryId.length > 0
    ) {
      products = [...products, new_products];
      dispatch(addProducts(products));
      alert("Thêm mới sản phẩm thành công");
    } else {
      alert("Vui lòng nhập các trường");
    }
  };
  const handleDeleteProduct = (id) => {
    let filterProducts = products.filter((e) => {
      return e.id === id;
    });
    let keys = products.indexOf(...filterProducts);
    products.splice(keys, 1);
    console.log(keys, "keys");
    dispatch(deleteProducts(products));
    alert("Xoá sản phẩm thành công");
  };
  const handleEditProduct = (id) => {
    setButtonAdd(true);
    let filterProducts = products.filter((e) => {
      return e.id === id;
    });
    let keys = products.indexOf(...filterProducts);
    console.log(keys, "key");
  };
  const handlUpdateProducts = () => {};
  const handlCancelProducts = () => {
    setButtonAdd(false);
  };
  const cancelOrderProduct = (key) => {
    let key = order.indexOf(...order);
    order[key].status = "Đã huỷ đơn hàng";
    console.log(key, "huy");
    dispatch(handelOrder(order));
    alert("Huỷ đơn hàng thành công");
  };
  const doneOrderProduct = (key) => {
    let key = order.indexOf(...order);
    order[key].status = "Đã xác nhận đơn hàng";
    console.log(key, "done");
    dispatch(handelOrder(order));
    alert("Xác nhận đơn hàng thành công");
  };

  return (
    <>
      <Header className={_className} onClick={() => setOnCart(!onCart)} />
      <div className="pt-20 pb-32">
        <Tabs className="flex">
          <TabList className="pl-0">
            <Tab className="bg-black opacity-80 h-10 w-56 text-white text-center cursor-pointer">
              Home
            </Tab>
            <Tab className="bg-black opacity-80 h-10 w-56 text-white text-center cursor-pointer">
              Products
            </Tab>
            <Tab className="bg-black opacity-80 h-10 w-56 text-white text-center cursor-pointer">
              Order
            </Tab>
          </TabList>

          <TabPanel className="px-[50px] w-full">
            <h2>No data</h2>
          </TabPanel>
          <TabPanel className="px-[50px] w-full">
            <h2 className="font-bold mb-10">Products</h2>
            <div className="flex w-full justify-between">
              <div className="w-[45%]">
                <div className="mb-5">
                  <p className="m-0">Tên sản phẩm:</p>
                  <input
                    className="bg-[#F8F8FF] py-3 w-full border-none outline-none"
                    type="text"
                    value={name}
                    onChange={(e) => handleName(e.target.value)}
                    placeholder="Nhập tên sản phẩm..."
                  />
                </div>
                <div className="mb-5">
                  <p className="m-0">Giá sản phẩm:</p>
                  <input
                    className="bg-[#F8F8FF] py-3 w-full border-none outline-none"
                    type="number"
                    value={price}
                    onChange={(e) => handlePrice(e.target.value)}
                    placeholder="Nhập giá sản phẩm..."
                  />
                </div>
                <div className="mb-5">
                  <p className="m-0">Số lượng sản phẩm:</p>
                  <input
                    className="bg-[#F8F8FF] py-3 w-full border-none outline-none"
                    type="number"
                    value={quantity}
                    onChange={(e) => handleQuantity(e.target.value)}
                    placeholder="Nhập số lượng sản phẩm..."
                  />
                </div>
              </div>
              <div className="w-[45%]">
                <div className="mb-5">
                  <p className="m-0">Ảnh sản phẩm:</p>
                  <input
                    className="bg-[#F8F8FF] py-3 w-full border-none outline-none"
                    type="text"
                    value={image}
                    onChange={(e) => handleImage(e.target.value)}
                    placeholder="Nhập ảnh sản phẩm..."
                  />
                </div>
                <div className="mb-5">
                  <p className="m-0">Loại sản phẩm:</p>
                  <input
                    className="bg-[#F8F8FF] py-3 w-full border-none outline-none"
                    type="number"
                    value={categoryId}
                    onChange={(e) => handleCategoryId(e.target.value)}
                    placeholder="Nhập loại sản phẩm..."
                  />
                </div>
                <div className="mb-5">
                  <p className="m-0">Chi tiết sản phẩm:</p>
                  <textarea
                    className="bg-[#F8F8FF] py-3 w-full border-none outline-none"
                    type="text"
                    value={description}
                    onChange={(e) => handleDescription(e.target.value)}
                    placeholder="Nhập chi tiết sản phẩm..."
                  />
                </div>
              </div>
            </div>
            {buttonAdd === false ? (
              <button
                onClick={() => handlAddProducts()}
                className="bg-red-redd text-white px-5 py-2 border-2 border-red-redd rounded-lg text-center font-bold"
              >
                Thêm mới
              </button>
            ) : (
              <div className="flex">
                <button
                  onClick={() => handlUpdateProducts()}
                  className="bg-red-redd text-white px-5 py-2 border-2 border-red-redd rounded-lg text-center font-bold mr-5"
                >
                  Update
                </button>
                <button
                  onClick={() => handlCancelProducts()}
                  className="bg-red-redd text-white px-5 py-2 border-2 border-red-redd rounded-lg text-center font-bold"
                >
                  Cancel
                </button>
              </div>
            )}

            <div className="py-24">
              <div className="flex justify-between mb-5">
                <p className="font-bold w-[200px] text-center">Tên sản phẩm</p>
                <p className="font-bold w-[200px] text-center">Ảnh sản phẩm</p>
                <p className="font-bold w-[150px] text-center">Giá sản phẩm</p>
                <p className="font-bold w-[150px] text-center">
                  Số lượng sản phẩm
                </p>
                <p className="font-bold w-[150px] text-center">Loại sản phẩm</p>
                <p className="font-bold w-[200px] text-center">
                  Chi tiết sản phẩm
                </p>
                <p className="font-bold w-[200px] text-center">Handle</p>
              </div>
              {products &&
                products.map((value, key) => {
                  let id = value.id;
                  return (
                    <div
                      id={key}
                      className="flex justify-between items-center mb-5"
                    >
                      <p className=" w-[200px] text-center">{value.name}</p>
                      <img
                        src={value.image}
                        className="font-bold w-[200px] text-center"
                      />
                      <p className=" w-[150px] text-center">{value.price}</p>
                      <p className=" w-[150px] text-center">{value.quantity}</p>
                      <p className=" w-[150px] text-center">
                        {value.categoryId}
                      </p>
                      <p className=" w-[200px] text-center">
                        {value.description}
                      </p>
                      <div className="flex w-[200px] items-center justify-evenly">
                        <button
                          onClick={() => handleEditProduct(value, key)}
                          className="bg-red-redd text-white px-3 py-1 border-2 border-red-redd rounded-lg text-center font-bold"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteProduct(key)}
                          className="bg-red-redd text-white px-3 py-1 border-2 border-red-redd rounded-lg text-center font-bold"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  );
                })}
            </div>
          </TabPanel>
          <TabPanel className="px-[50px] w-full mr-[400px]">
            <h2>Order</h2>
            <>
              <div className="container py-24">
                <h1 className="uppercase text-center font-bold">
                  Danh sách sản phẩm đã mua
                </h1>
                <div className="flex justify-between mt-10">
                  <p className="font-bold text-center w-[250px]">Họ Tên</p>
                  <p className="font-bold text-center w-[100px]">Địa chỉ</p>
                  <p className="font-bold text-center w-[100px]">
                    Số điện thoại
                  </p>
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
                          <p className="text-center w-[100px]">
                            {value.address}
                          </p>
                          <p className="text-center w-[100px]">{value.phone}</p>
                          <p className="text-center w-[100px]">{value.note}</p>
                          <p className="text-center w-[300px]">
                            {value.status}
                          </p>
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
          </TabPanel>
        </Tabs>
      </div>
      <Footer />
      <CopyRight />
    </>
  );
}

let mapDispatchToProps = (dispatch) => {
  return {
    ADD_PRODUCTS: (products) => dispatch(addProducts(products)),
    DELETE_PRODUCTS: (products) => dispatch(deleteProducts(products)),
  };
};
let mapStateToProps = (state) => {
  return {
    products: state.products.products,
    order: state.user.order,
    cart: state.cart,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
