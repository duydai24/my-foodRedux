import React, { useState, useEffect } from "react";
import { getBase64 } from "../lib/getBase64";
import { useDispatch, useSelector } from "react-redux";
import {
  createUser,
  deleteUser,
  editLogin,
  fetchUser,
  updateUser,
} from "../redux/action/userAction";

function UserAdmin() {
  const [imageFile, setImageFile] = useState("");
  const [editItem, setEditItem] = useState({});
  const [buttonEdit, setButtonEdit] = useState(false);
  const [buttonAdd, setButtonAdd] = useState(false);
  const [index, setIndex] = useState(0);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const onChange = (e) => {
    const { name, value } = e.target;
    setEditItem({ ...editItem, [name]: value });
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
        });
        console.log(editItem, "edit");
      } else {
        return toast.warning(
          "The file is not in the correct format(must be jpg, jpeg, png)"
        );
      }
    }
  };
  const handleView = (value) => {
    setEditItem(value);
    setButtonAdd(false);
    setButtonEdit(false);
  };
  const handleAdd = () => {
    let checkAccount =
      user && user.some((e) => e.userName == editItem.userName);
    if (!checkAccount) {
      if (editItem.userName && editItem.passWord && editItem.role) {
        let results = {
          id: user.length,
          image: editItem.image,
          userName: editItem.userName,
          passWord: editItem.passWord,
          role: editItem.role,
        };

        user.push(results);
        dispatch(fetchUser(user));
        setEditItem({
          image: "",
          userName: "",
          passWord: "",
          role: "",
        });
        alert("Thêm mới user thành công");
      } else {
        alert("Vui lòng nhập các trường");
      }
    } else {
      alert("Tên tài khoản đã tồn tại");
    }
    setButtonEdit(false);
  };
  const handleDeleteImage = () => {
    editItem.image = "";
    setEditItem(editItem.image);
  };
  const handleEdit = (value, key, index) => {
    setEditItem(value);
    setButtonEdit(true);
    setButtonAdd(false);
    setImageFile(value.image);
    index = key;
    setIndex(index);
  };
  const handlCancel = () => {
    setButtonEdit(false);
    setEditItem({
      image: "",
      userName: "",
      passWord: "",
      role: "",
    });
  };
  const handlUpdate = (id) => {
    let new_User = {
      id,
      image: editItem.image,
      userName: editItem.userName,
      passWord: editItem.passWord,
      role: editItem.role,
    };
    user.splice(id, 1, new_User);
    if (editItem.userName && editItem.passWord && editItem.role) {
      dispatch(updateUser(user));
      setButtonEdit(false);
      setEditItem({
        image: "",
        userName: "",
        passWord: "",
        role: "",
      });
      alert("Update user thành công");
    } else {
      alert("Vui lòng nhập các trường");
    }
  };
  const handleDelete = (value, key, index) => {
    user.splice(key, 1);
    dispatch(deleteUser(user));
    alert("Xoá user thành công");
  };
  const handleButtonAdd = () => {
    setEditItem({
      image: "",
      userName: "",
      passWord: "",
      role: "",
    });
    setButtonAdd(true);
    setButtonEdit(false);
  };
  return (
    <div className="flex px-32 justify-evenly">
      <div className="w-1/4">
        <p className="font-bold text-center text-xl">User information</p>
        <div className="flex flex-col justify-start mt-5">
          {user.map((value, key) => {
            return (
              <div key={key} className="flex justify-between items-center">
                <p className="p-1 bg-gray-100 rounded-lg my-2 px-5">
                  - {value.userName}
                </p>
                <div className="">
                  <button
                    onClick={() => handleView(value, key, index)}
                    className="bg-red-redd text-white px-2 mr-1 rounded-lg"
                  >
                    View
                  </button>
                  <button
                    onClick={() => handleDelete(value, key, index)}
                    className="bg-red-redd text-white px-2 rounded-lg mx-1"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => handleEdit(value, key, index)}
                    className="bg-red-redd text-white px-2 rounded-lg "
                  >
                    Edit
                  </button>
                </div>
              </div>
            );
          })}
          <button
            onClick={() => handleButtonAdd()}
            className="bg-red-redd text-white p-2 mt-5 rounded-lg"
          >
            add
          </button>
        </div>
      </div>
      <div className="w-1/4">
        <img
          className="w-full h-auto rounded-md shadow-md"
          src={editItem.image}
          width={200}
          height={200}
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
            {editItem.image !== undefined ? (
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
      </div>
      <div className="w-1/4">
        <div className="">
          <p className="m-0 font-bold">UserName:</p>
          <input
            className="bg-[#F8F8FF] py-3 pl-3 w-full border-none outline-none mb-5"
            type="text"
            value={editItem.userName}
            name="userName"
            onChange={onChange}
            placeholder="Nhập tên ..."
          />
          <p className="m-0 font-bold">PassWork:</p>
          <input
            className="bg-[#F8F8FF] py-3 pl-3 w-full border-none outline-none mb-5"
            type="text"
            value={editItem.passWord}
            name="passWord"
            onChange={onChange}
            placeholder="Nhập mật khẩu..."
          />
          <p className="m-0 font-bold">Role:</p>
          <input
            className="bg-[#F8F8FF] py-3 pl-3 w-full border-none outline-none mb-5"
            type="text"
            value={editItem.role}
            name="role"
            onChange={onChange}
            placeholder="Phân quyền..."
          />
        </div>
        {buttonAdd !== false ? (
          <button
            onClick={() => handleAdd()}
            className="bg-red-redd text-white px-5 py-2 border-2 border-red-redd rounded-lg text-center font-bold"
          >
            Thêm mới
          </button>
        ) : (
          ""
        )}

        {buttonEdit === false ? (
          ""
        ) : (
          <div className="flex">
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
        )}
      </div>
    </div>
  );
}
export default UserAdmin;
