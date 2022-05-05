import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSale, deleteSale } from "../redux/action/productsAction";
import { getBase64 } from "../lib/getBase64";

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
          setNameImage(file[0]?.name);
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
      saleNumber: saleItem.saleNumber,
    };
    sale.splice(key, 1, new_Sale);
    dispatch(addSale(sale));
    alert("Thêm mới khuyến mãi thành công");
  };

  return (
    <div>
      {sale.map((val, key) => (
        <div className="flex flex-col items-center">
          <img alt="img" key={key} src={val.gif} />
          {val.saleNumber == 0 ? (
            <div className="">
              <p className="my-5">Number Sale:</p>
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
                // value={saleItem.gif}
                type="file"
              />
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <p className="my-5">Number Sale:</p>
              <input
                className="bg-[#F8F8FF] py-3 pl-3 w-[30%] border-none outline-none mb-5"
                type="text"
                value={val.saleNumber}
                name="saleNumber"
                placeholder="Nhập giảm giá(tính bằng đơn vị %)..."
              />
            </div>
          )}
          <div className="">
            {val.saleNumber !== 0 ? (
              <div className="flex items-center justify-evenly">
                <button
                  onClick={() => handleDelete(key)}
                  className="bg-red-redd text-white mt-14 px-5 py-2 border-2 border-red-redd rounded-lg text-center font-bold"
                >
                  Delete
                </button>
              </div>
            ) : (
              <div className="flex items-center justify-evenly">
                <button
                  onClick={() => handleAdd(key)}
                  className="bg-red-redd text-white mt-14 px-5 py-2 border-2 border-red-redd rounded-lg text-center font-bold"
                >
                  Thêm mới
                </button>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
export default SaleAdmin;
