import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBase64 } from "../lib/getBase64";
import {
  addProducts,
  deleteProducts,
  updateProducts,
} from "../redux/action/productsAction";
import { useAlert } from "react-alert";

function ProductsAdmin() {
  const [buttonAdd, setButtonAdd] = useState(false);
  const [editItem, setEditItem] = useState({});
  const [nameImage, setNameImage] = useState();
  const [imageFile, setImageFile] = useState("");
  const [index, setIndex] = useState(0);
  const [option, setOption] = useState();
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
      categoryId: Number(option),
    };
    if (
      editItem.name &&
      editItem.description &&
      editItem.image &&
      editItem.price &&
      editItem.quantity &&
      option
    ) {
      products = [...products, new_products];
      dispatch(addProducts(products));
      setEditItem({
        name: "",
        price: "",
        editItem: "",
        image: "",
        description: "",
        quantity: "",
        categoryId: "",
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
  const onChangeOption = (e) => {
    setOption(e.target.value);
  };
  const onImageChange = (e) => {
    let file = e.target.files;

    setImageFile({
      image: URL.createObjectURL(file[0]),
    });
    if (file) {
      if (
        file[0].type == "image/png" ||
        file[0].type == "image/jpeg" ||
        file[0].type == "image/jpg"
      ) {
        getBase64(file[0]).then((res) => {
          setEditItem({ ...editItem, image: res });
          setNameImage(file[0]?.name);
        });
      } else {
        return toast.warning(
          "The file is not in the correct format(must be jpg, jpeg, png)"
        );
      }
    }
  };
  const handleEditProduct = (value, key, index) => {
    setButtonAdd(true);
    setEditItem(value);
    setImageFile(value.image);
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
      categoryId: Number(option),
    };
    products.splice(idd, 1, new_products);
    if (
      editItem.name &&
      editItem.description &&
      editItem.image &&
      editItem.price &&
      editItem.quantity &&
      option
    ) {
      dispatch(updateProducts(products));
      setButtonAdd(false);
      setEditItem({
        name: "",
        price: "",
        image: "",
        description: "",
        quantity: "",
        categoryId: "",
      });
      alert("Update sản phẩm thành công");
    } else {
      alert("Vui lòng nhập các trường");
    }
  };
  const handlCancelProducts = () => {
    setButtonAdd(false);
    setEditItem({
      name: "",
      price: "",
      image: "",
      description: "",
      quantity: "",
      categoryId: "",
    });
  };
  const handleDeleteImage = () => {
    editItem.image = "";
    setEditItem(editItem.image);
  };
  return (
    <div>
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
            <div className="flex justify-between">
              <input
                className=" py-1 w-[15%] border-none outline-none"
                type="file"
                name="image"
                onChange={onImageChange}
                placeholder="Nhập ảnh sản phẩm..."
              />
              {editItem.image !== undefined ? (
                <button
                  onClick={() => handleDeleteImage()}
                  className="bg-gray-200 px-2 h-8 rounded"
                >
                  Deltete Image
                </button>
              ) : (
                ""
              )}
              <img
                alt="img"
                className="max-h-24"
                height={50}
                width={100}
                src={editItem.image}
              />
            </div>
          </div>
          <div className="mb-5">
            <p className="m-0">Loại sản phẩm:</p>
            <select
              name="option"
              onChange={onChangeOption}
              className="bg-[#F8F8FF] py-3 w-full border-none outline-none"
            >
              <option>{editItem.categoryId}</option>
              <option value={1}>1: Hamberger</option>
              <option value={2}>2: Drink</option>
              <option value={3}>3: Sanwich</option>
              <option value={4}>4: Piza</option>
            </select>
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
          <p className="font-bold h-28 w-[200px] text-center">Ảnh sản phẩm</p>
          <p className="font-bold w-[150px] text-center">Giá sản phẩm</p>
          <p className="font-bold w-[150px] text-center">Số lượng sản phẩm</p>
          <p className="font-bold w-[150px] text-center">Loại sản phẩm</p>
          <p className="font-bold w-[200px] text-center">Chi tiết sản phẩm</p>
          <p className="font-bold w-[200px] text-center">Handle</p>
        </div>
        {products &&
          products.map((value, key) => {
            return (
              <div key={key} className="flex justify-between items-center mb-5">
                <p className=" w-[200px] text-center">{value.name}</p>
                <img
                  alt="img"
                  src={value.image}
                  height={100}
                  className="font-bold h-[100px] w-[200px] text-center"
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
    </div>
  );
}
export default ProductsAdmin;
