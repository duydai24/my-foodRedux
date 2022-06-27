import React, { useState } from "react";
import { getBase64 } from "../lib/getBase64";
import { deleteUser, getUser, updateUser } from "../redux/action/userAction";
import { toast } from "react-toastify";
import Admin from "./admin";
import { createSelector } from "reselect";
import { connect } from "react-redux";
import { userSelector } from "../redux/selector/userSelector";

const componentSelector = () =>
  createSelector([userSelector], ({ user }) => {
    return {
      user,
    };
  });

function UserAdmin({ dispatch, user }) {
  const [imageFile, setImageFile] = useState("");
  const [editItem, setEditItem] = useState({});
  const [buttonEdit, setButtonEdit] = useState(false);
  const [buttonAdd, setButtonAdd] = useState(false);
  const [view, setView] = useState(false);
  const [index, setIndex] = useState(0);
  const [option, setOption] = useState();

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
      } else {
        return toast.warning(
          "The file is not in the correct format(must be jpg, jpeg, png)"
        );
      }
    }
  };
  const onChangeOption = (e) => {
    setOption(e.target.value);
  };
  const handleView = (value) => {
    setEditItem(value);
    setView(true);
    setButtonAdd(false);
    setButtonEdit(false);
  };
  const handleAdd = () => {
    let checkAccount = user?.some((e) => e.userName == editItem.userName);
    if (!checkAccount) {
      if (editItem.userName && editItem.passWord && option) {
        let results = {
          id: user.length,
          image: editItem.image,
          userName: editItem.userName,
          passWord: editItem.passWord,
          role: option,
        };
        dispatch(getUser(results));
        setEditItem({
          image: "",
          userName: "",
          passWord: "",
          role: "",
        });
        toast.success("Thêm mới user thành công");
      } else {
        toast.warn("Vui lòng nhập các trường");
      }
    } else {
      toast.warn("Tên tài khoản đã tồn tại");
    }
    setButtonEdit(false);
  };
  const handleDeleteImage = () => {
    setEditItem({
      id: user.length,
      image: "",
      userName: editItem.userName,
      passWord: editItem.passWord,
      role: option,
    });
  };
  const handleEdit = (value, key, index) => {
    setEditItem(value);
    setView(false);
    setButtonEdit(true);
    setButtonAdd(false);
    setImageFile(value.image);
    index = key;
    setIndex(index);
  };
  const handlCancel = () => {
    setButtonEdit(false);
    setView(false);
    setButtonAdd(false);
    setEditItem({
      image: "",
      userName: "",
      passWord: "",
      role: "",
    });
  };
  const handlUpdate = (id) => {
    if (editItem.userName && editItem.passWord && option) {
      let new_User = {
        id,
        image: editItem.image,
        userName: editItem.userName,
        passWord: editItem.passWord,
        role: option,
      };
      dispatch(updateUser(id, new_User));
      setButtonEdit(false);
      setEditItem({
        image: "",
        userName: "",
        passWord: "",
        role: "",
      });
      toast.success("Update user thành công");
    } else {
      toast.warn("Vui lòng nhập các trường");
    }
  };
  const handleDelete = (id, key) => {
    dispatch(deleteUser(key));
    toast.success("Xoá user thành công");
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
    setView(false);
  };
  return (
    <Admin>
      <div className="flex px-32 justify-around">
        <div className="w-2/5">
          <p className="font-bold text-center text-xl">User information</p>
          <div className="flex flex-col justify-start mt-5">
            {user?.map((value, key) => {
              return (
                <div key={key} className="flex justify-between items-center">
                  <p className="p-1 bg-gray-100 rounded-lg my-2 px-5">
                    - {value?.userName}
                  </p>
                  <div className="">
                    <button
                      onClick={() => handleView(value, key, index)}
                      className="bg-red-redd text-white px-2 mr-1 rounded-lg"
                    >
                      View
                    </button>
                    <button
                      onClick={() => handleDelete(value.id, key, index)}
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
        {view == true ? (
          <div className="w-1/2 flex justify-between">
            <div className="w-1/2 mr-10">
              <img
                alt="img"
                className="w-2/3 h-auto rounded-md shadow-md"
                src={editItem.image}
                width={200}
                height={200}
              />
            </div>
            <div className="w-1/2">
              <div className="">
                <p className="m-0 font-bold">UserName: {editItem.userName}</p>
                <p className="m-0 font-bold">PassWork: {editItem.passWord}</p>
                <p className="m-0 font-bold">Role: {editItem.role}</p>
                <button
                  onClick={() => handlCancel()}
                  className="bg-red-redd text-white mt-14 px-5 py-2 border-2 border-red-redd rounded-lg text-center font-bold"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        {buttonEdit == true || buttonAdd == true ? (
          <div className="w-1/2 flex justify-between">
            <div className="w-1/2 mr-10">
              <img
                alt="img"
                className="w-2/3 h-auto rounded-md shadow-md"
                src={editItem.image}
                width={200}
                height={200}
              />
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
            </div>
            <div className="w-1/2">
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
                <select
                  name="option"
                  onChange={onChangeOption}
                  className="bg-[#F8F8FF] py-3 pl-3 w-full border-none outline-none"
                >
                  <option>{editItem.role}</option>
                  <option value="user">user</option>
                  <option value="admin">admin</option>
                </select>
              </div>
              {buttonAdd !== false ? (
                <div className="flex justify-around items-center">
                  <button
                    onClick={() => handleAdd()}
                    className="bg-red-redd text-white mt-14 px-5 py-2 border-2 border-red-redd rounded-lg text-center font-bold"
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
              {buttonEdit === false ? (
                ""
              ) : (
                <div className="flex mt-14">
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
        ) : (
          ""
        )}
      </div>
    </Admin>
  );
}
export default connect(componentSelector)(UserAdmin);
