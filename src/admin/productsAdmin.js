import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addProducts,
  deleteProducts,
  updateProducts,
} from "../redux/action/productsAction";

function ProductsAdmin() {
  const [buttonAdd, setButtonAdd] = useState(false);
  const [editItem, setEditItem] = useState({});
  const [index, setIndex] = useState(0);
  const { product } = useSelector((state) => state);
  const { products } = useSelector((state) => state.product);

  const dispatch = useDispatch();

  const handlAddProducts = (e) => {
    let new_products = {
      id: Math.floor(Math.random() * 999999),
      name: editItem.name,
      description: editItem.description,
      image: editItem.image,
      price: Number(editItem.price),
      quantity: Number(editItem.quantity),
      categoryId: Number(editItem.categoryId),
    };
    if (
      editItem.name !== "" &&
      editItem.description !== "" &&
      editItem.image !== "" &&
      editItem.price !== "" &&
      editItem.quantity !== "" &&
      editItem.categoryId !== ""
    ) {
      products = [...products, new_products];
      dispatch(addProducts(products));
      setEditItem({
        name: "",
        price: "",
        image: "",
        description: "",
        quantity: "",
        categoryId: ""
      });
      alert("Thêm mới sản phẩm thành công");
    } else {
      alert("Vui lòng nhập các trường");
    }
  };
  const handleDeleteProduct = (key) => {
    products.splice(key, 1);
    dispatch(deleteProducts(products));
    alert("Xoá sản phẩm thành công");
  };
  const onChange = (e) => {
    const { name, value } = e.target;
    setEditItem({ ...editItem, [name]: value });
  };
  const handleEditProduct = (value, key, index) => {
    setButtonAdd(true);
    setEditItem(value);
    index = key;
    setIndex(index);
  };

  const handlUpdateProducts = (idd) => {
    let new_products = {
      id: editItem.id,
      name: editItem.name,
      description: editItem.description,
      image: editItem.image,
      price: editItem.price,
      quantity: editItem.quantity,
      categoryId: Number(editItem.categoryId),
    };
    products.splice(idd, 1, new_products);
    if (
      editItem.name !== "" &&
      editItem.description !== "" &&
      editItem.image !== "" &&
      editItem.price !== "" &&
      editItem.quantity !== "" &&
      editItem.categoryId !== ""
    ) {
      dispatch(updateProducts(products));
      setButtonAdd(false);
      setEditItem({
        name: "",
        price: "",
        image: "",
        description: "",
        quantity: "",
        categoryId: ""
      });
      alert("Update sản phẩm thành công");
    } else {
      alert("Vui lòng nhập các trường");
    }
  };
  const handlCancelProducts = () => {
    setButtonAdd(false);
  };
  return (
    <>
      <h2 className="font-bold mb-10">Products</h2>
      <div className="flex w-full justify-between">
        <div className="w-[45%]">
          <div className="mb-5">
            <p className="m-0">Tên sản phẩm:</p>
            <input
              className="bg-[#F8F8FF] py-3 w-full border-none outline-none"
              type="text"
              value={editItem.name}
              name="name"
              onChange={onChange}
              placeholder="Nhập tên sản phẩm..."
            />
          </div>
          <div className="mb-5">
            <p className="m-0">Giá sản phẩm:</p>
            <input
              className="bg-[#F8F8FF] py-3 w-full border-none outline-none"
              type="number"
              value={editItem.price}
              name="price"
              onChange={onChange}
              placeholder="Nhập giá sản phẩm..."
            />
          </div>
          <div className="mb-5">
            <p className="m-0">Số lượng sản phẩm:</p>
            <input
              className="bg-[#F8F8FF] py-3 w-full border-none outline-none"
              type="number"
              name="quantity"
              value={editItem.quantity}
              onChange={onChange}
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
              name="image"
              value={editItem.image}
              onChange={onChange}
              placeholder="Nhập ảnh sản phẩm..."
            />
          </div>
          <div className="mb-5">
            <p className="m-0">Loại sản phẩm:</p>
            <input
              className="bg-[#F8F8FF] py-3 w-full border-none outline-none"
              type="number"
              name="categoryId"
              value={editItem.categoryId}
              onChange={onChange}
              placeholder="Nhập loại sản phẩm..."
            />
            {/* <select>
                    <option value={categoryId}>1: Hamberger</option>
                    <option value={categoryId}>2: Drink</option>
                    <option value={categoryId}>3: Sanwich</option>
                    <option value={categoryId}>4: Piza</option>
                  </select> */}
          </div>
          <div className="mb-5">
            <p className="m-0">Chi tiết sản phẩm:</p>
            <textarea
              className="bg-[#F8F8FF] py-3 w-full border-none outline-none"
              type="text"
              value={editItem.description}
              name="description"
              onChange={onChange}
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
            onClick={() => handlUpdateProducts(index)}
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
          <p className="font-bold w-[150px] text-center">Số lượng sản phẩm</p>
          <p className="font-bold w-[150px] text-center">Loại sản phẩm</p>
          <p className="font-bold w-[200px] text-center">Chi tiết sản phẩm</p>
          <p className="font-bold w-[200px] text-center">Handle</p>
        </div>
        {products &&
          products.map((value, key) => {
            return (
              <div id={key} className="flex justify-between items-center mb-5">
                <p className=" w-[200px] text-center">{value.name}</p>
                <img
                  src={value.image}
                  className="font-bold w-[200px] text-center"
                />
                <p className=" w-[150px] text-center">{value.price}</p>
                <p className=" w-[150px] text-center">{value.quantity}</p>
                <p className=" w-[150px] text-center">{value.categoryId}</p>
                <p className=" w-[200px] text-center">{value.description}</p>
                <div className="flex w-[200px] items-center justify-evenly">
                  <button
                    onClick={() => handleEditProduct(value, key, index)}
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
    </>
  );
}
export default ProductsAdmin;
