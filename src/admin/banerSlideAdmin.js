import React, { useState } from "react";
import { getBase64 } from "../lib/getBase64";
import { useDispatch, useSelector } from "react-redux";
import {
  addBannerSlide,
  deleteBannerSlide,
  updateBannerSlide,
} from "../redux/action/dbAction";
import { useAlert } from "react-alert";

function BannerSlideAdmin() {
  const [buttonEdit, setButtonEdit] = useState(false);
  const { banerSlide } = useSelector((state) => state.db);
  const [index, setIndex] = useState(0);
  const [buttonAdd, setButtonAdd] = useState(false);
  const [imageFile, setImageFile] = useState("");
  const dispatch = useDispatch();

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
          setImageFile({ ...imageFile, image: res });
        });
      } else {
        return toast.warning(
          "The file is not in the correct format(must be jpg, jpeg, png)"
        );
      }
    }
  };
  const handlCancel = () => {
    setButtonEdit(false);
    setButtonAdd(false);
    setImageFile({ imageFile: "" });
  };
  const handleEdit = (value, key, index) => {
    setButtonEdit(true);
    setButtonAdd(false);
    index = key;
    setIndex(index);
    setImageFile(value);
  };
  const handleDeleteImage = () => {
    imageFile.image = "";
    setImageFile(imageFile.image);
  };
  const handleDelete = (value, key, index) => {
    banerSlide.splice(key, 1);
    dispatch(deleteBannerSlide(banerSlide));
  };
  const handleButtonAdd = () => {
    setImageFile({
      image: "",
    });
    setButtonAdd(true);
    setButtonEdit(false);
  };
  const handleAdd = () => {
    if (imageFile !== "") {
      let new_banner = {
        image: imageFile.image,
      };
      console.log(new_banner);
      banerSlide.push(new_banner);
      dispatch(addBannerSlide(banerSlide));
      setImageFile({
        image: "",
      });
      alert("Thêm mới banner thành công");
    } else {
      alert("Vui lòng nhập banner");
    }
    setButtonAdd(false);
  };
  const handlUpdate = (index) => {
    let new_banner = {
      image: imageFile.image,
    };
    banerSlide.splice(index, 1, new_banner);
    if (imageFile.image) {
      dispatch(updateBannerSlide(banerSlide));
      setButtonEdit(false);
      setImageFile({
        image: "",
      });
      alert("Update banner thành công");
    } else {
      alert("Vui lòng nhập banner");
    }
  };

  return (
    <div className="w-full py-10 flex justify-around">
      <div className="">
        {banerSlide.map((value, key) => (
          <BannerItem
            key={key}
            img={value.image}
            handleDelete={() => handleDelete(value, key, index)}
            handleEdit={() => handleEdit(value, key, index)}
          />
        ))}
      </div>
      <button
        onClick={() => handleButtonAdd()}
        className="bg-red-redd text-white h-10 px-20 py-1 mb-5 rounded-lg"
      >
        add
      </button>
      <div className="">
        <img
          alt="img"
          className="w-[500px] h-[300px]"
          src={imageFile.image}
          width={500}
          height={300}
        />
        {buttonEdit !== false || buttonAdd !== false ? (
          <div className="flex justify-around mt-5 items-center">
            <input
              className=" py-1 w-[30%] border-none outline-none"
              type="file"
              name="image"
              onChange={onImageChange}
              placeholder="Nhập ảnh sản phẩm..."
            />
            {imageFile.image !== undefined ? (
              <button
                onClick={() => handleDeleteImage()}
                className="bg-gray-200 px-2 h-8 rounded"
              >
                Deltete Image
              </button>
            ) : (
              "^^Vui lòng chọn ảnh"
            )}
          </div>
        ) : (
          ""
        )}
        {buttonAdd !== false ? (
          <div className="flex items-center">
            <button
              onClick={() => handleAdd()}
              className="bg-red-redd text-white mt-14 px-5 py-2 border-2 border-red-redd rounded-lg text-center font-bold mr-5"
            >
              Thêm mới
            </button>
            <button
              onClick={() => handlCancel()}
              className="bg-red-redd text-white mt-14 px-5 py-2 border-2 border-red-redd rounded-lg text-center font-bold"
            >
              Cancel
            </button>
          </div>
        ) : (
          ""
        )}
        {buttonEdit !== false ? (
          <div className="flex mt-20">
            <button
              onClick={() => handlUpdate(index)}
              className="bg-red-redd text-white px-5 py-1 border-2 border-red-redd rounded-lg text-center font-bold mr-5"
            >
              Update
            </button>
            <button
              onClick={() => handlCancel()}
              className="bg-red-redd text-white px-5 py-1 border-2 border-red-redd rounded-lg text-center font-bold"
            >
              Cancel
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

function BannerItem({ key, img, handleDelete, handleEdit }) {
  return (
    <div key={key} className="flex mb-10">
      <p className="mr-5 font-bold">Banner: </p>
      <img alt="img" src={img} width={400} height={200} />
      <div className="flex flex-col ml-10">
        <button
          onClick={handleDelete}
          className="bg-red-redd text-white px-3 py-1 mb-5 rounded-lg"
        >
          Delete
        </button>
        <button
          onClick={handleEdit}
          className="bg-red-redd text-white px-3 py-1 rounded-lg"
        >
          Edit
        </button>
      </div>
    </div>
  );
}
export default BannerSlideAdmin;
