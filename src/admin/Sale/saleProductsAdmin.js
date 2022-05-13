import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { FiDelete } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import {
  addSale,
  deleteSale,
  updateProducts,
} from "../../redux/action/productsAction";
import { getBase64 } from "../../lib/getBase64";
import Link from "next/link";
import { ROUTER } from "../../routers/router";

function SaleProductsAdmin() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);
  const { sale } = useSelector((state) => state.product);
  const [inputSearch, setInputSearch] = useState("");
  const onChangeSearch = (e) => {
    setInputSearch(e.target.value);
  };
  const handleDeleteSearch = () => {
    inputSearch = "";
    setInputSearch(inputSearch);
  };
  let products2 = products.filter((val) =>
    val.name.toLowerCase().includes(inputSearch.toLowerCase())
  );
  let saleNumber;
  let gif;
  sale.map((value) => {
    saleNumber = value.saleNumber;
    gif = value.gif;
  });

  const addSale = (id) => {
    let products3 = products.filter((value) => value.id === id);
    let productItem;
    products3.map(
      (value) =>
        (productItem = {
          id: value.id,
          name: value.name,
          description: value.description,
          image: value.image,
          price: value.price,
          quantity: value.quantity,
          categoryId: value.categoryId,
          gif: gif,
          saleNumber: saleNumber,
        })
    );
    if (products3[0].saleNumber !== undefined) {
      let result = confirm(
        "Sản phẩm này hiện đang có 1 khuyến mãi khác, bạn có muốn tiếp tục không?"
      );
      if (result) {
        products.splice(id, 1, productItem);
        dispatch(updateProducts(products));
        alert("Thêm khuyến mãi cho sản phẩm id = " + id + " thành công");
      } else {
        alert("Khuyễn mãi được giữ nguyên");
      }
    } else {
      products.splice(id, 1, productItem);
      dispatch(updateProducts(products));
      alert("Thêm khuyến mãi cho sản phẩm id = " + id + " thành công");
    }
  };

  const deleteSale = (id) => {
    let products4 = products.filter((value) => value.id === id);
    let productItem2;
    products4.map(
      (value) =>
        (productItem2 = {
          id: value.id,
          name: value.name,
          description: value.description,
          image: value.image,
          price: value.price,
          quantity: value.quantity,
          categoryId: value.categoryId,
        })
    );
    products.splice(id, 1, productItem2);
    dispatch(updateProducts(products));
    alert("Xoá khuyến mãi cho sản phẩm id = " + id + " thành công");
  };

  return (
    <div className="container">
      <SaleOption />
      <form className="flex mt-10 rounded-full py-3 px-4 items-center border-[1px] border-black w-[70%] lg:w-full mx-3">
        <input
          id="filter"
          onChange={onChangeSearch}
          value={inputSearch}
          className="outline-none border-none w-full px-5"
          placeholder="Search your product sale"
        />
        {inputSearch.length > 0 ? (
          <span
            onClick={handleDeleteSearch}
            className="pr-5 text-center text-gray-700 cursor-pointer"
          >
            <FiDelete />
          </span>
        ) : (
          <span className="pr-5 text-center text-gray-700 cursor-pointer">
            <BsSearch />
          </span>
        )}
      </form>
      <div className="flex justify-between items-center text-center pt-10">
        <p className="font-bold w-[200px]">Name</p>
        <p className="font-bold w-[200px]">Image</p>
        <p className="font-bold w-[100px]">Price</p>
        <p className="font-bold w-[100px]">Status Sale</p>
        <p className="font-bold w-[100px]">Optional</p>
        <p className="font-bold w-[100px]">Optional</p>
      </div>
      {products2.map((value, key) => (
        <div
          key={key}
          className="flex justify-between items-center text-center pt-10"
        >
          <p className="w-[200px]">{value.name}</p>
          <img
            className="max-w-[200]"
            src={value.image}
            height={200}
            width={200}
          />
          <p className="w-[100px]">{value.price} $</p>
          {value.saleNumber > 0 ? (
            <p className="w-[100px]">Sale {value.saleNumber}%</p>
          ) : (
            <p className="w-[100px]">Không sale</p>
          )}
          <button
            onClick={() => addSale(value.id)}
            className="w-[100px] bg-red-redd py-1 px2 text-white rounded-lg"
          >
            Add Sale
          </button>
          {value.saleNumber !== undefined ? (
            <button
              onClick={() => deleteSale(value.id)}
              className="w-[100px] bg-red-redd py-1 px2 text-white rounded-lg"
            >
              Delete Sale
            </button>
          ) : (
            <span className="w-[100px] bg-red-redd py-1 px2 text-white rounded-lg"></span>
          )}
        </div>
      ))}
    </div>
  );
}

function SaleAdmin() {
  const dispatch = useDispatch();
  const { sale } = useSelector((state) => state.product);
  const [imageFile, setImageFile] = useState("");
  const [saleItem, setSaleItem] = useState({ gif: "", saleNumber: 0 });

  const onChange = (e) => {
    const { name, value } = e.target;
    setSaleItem({ ...saleItem, [name]: value });
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
        file[0].type == "image/jpg" ||
        file[0].type == "image/gif"
      ) {
        getBase64(file[0]).then((res) => {
          setSaleItem({ ...saleItem, image: res });
        });
      } else {
        return toast.warning(
          "The file is not in the correct format(must be jpg, jpeg, png, gif)"
        );
      }
    }
  };
  const handleDelete = (key) => {
    let new_Sale = {
      id: key + 1,
      gif: "",
      saleNumber: 0,
    };
    sale.splice(key, 1, new_Sale);
    dispatch(deleteSale(sale));
    alert("Xoá khuyến mãi thành công");
  };
  const handleAdd = (key) => {
    let new_Sale = {
      id: 1,
      gif: saleItem.image,
      saleNumber: Number(saleItem.saleNumber),
    };
    sale.splice(key, 1, new_Sale);
    dispatch(addSale(sale));
    alert("Thêm mới khuyến mãi thành công");
  };

  return (
    <div>
      {sale.map((val, key) => (
        <div key={key} className="flex flex-col items-center">
          {val.gif !== "" ? (
            <img
              className="rounded-lg"
              alt="img"
              height={200}
              width={200}
              src={val.gif}
            />
          ) : (
            ""
          )}
          {val.saleNumber == 0 ? (
            <div className="">
              <p className="my-5">Number Sale: (%)</p>
              <input
                className="bg-[#F8F8FF] py-3 pl-3 w-[30%] border-none outline-none mb-5"
                type="number"
                value={saleItem.saleNumber}
                name="saleNumber"
                onChange={onChange}
                placeholder="Nhập giảm giá(tính bằng đơn vị %)..."
              />
              <input
                className="ml-10"
                name="gif"
                onChange={onImageChange}
                type="file"
              />
              {imageFile !== "" ? (
                <img alt="img" src={imageFile.image} height={100} width={100} />
              ) : (
                ""
              )}
            </div>
          ) : (
            <p className="my-5 font-bold">Number Sale: {val.saleNumber} %</p>
          )}
          <div className="">
            {val.saleNumber == 0 ? (
              <div className="flex items-center justify-evenly">
                <button
                  onClick={() => handleAdd(key)}
                  className="bg-red-redd text-white mt-14 px-5 py-2 border-2 border-red-redd rounded-lg text-center font-bold"
                >
                  Thêm mới
                </button>
              </div>
            ) : (
              <div className="flex items-center justify-evenly">
                <button
                  onClick={() => handleDelete(key)}
                  className="bg-red-redd text-white mt-14 px-5 py-2 border-2 border-red-redd rounded-lg text-center font-bold"
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

function SaleOption() {
  return (
    <div className="flex justify-evenly items-center font-bold cursor-pointer py-10">
      <SaleAdmin />
      <Link href={ROUTER.Sale}>
        <p className="bg-red-redd text-white rounded-lg py-4 px-2">
          Quản lý Sale
        </p>
      </Link>
    </div>
  );
}
export default SaleProductsAdmin;
