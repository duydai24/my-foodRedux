import React, { useState, useEffect } from "react";
import { getBase64 } from "../../lib/getBase64";
import { updateUser, LogOut } from "../../redux/action/userAction";
import Router from "next/router";
import Layout from "../../layout/layout";
import { toast } from "react-toastify";
import { createSelector } from "reselect";
import { connect } from "react-redux";
import { userSelector } from "../../redux/selector/userSelector";

const componentSelector = () =>
  createSelector([userSelector, userSelector], ({ user }, { accountLogin }) => {
    return {
      user,
      accountLogin,
    };
  });

function UserCustom({ dispatch, user, accountLogin }) {
  const [imageFile, setImageFile] = useState("");
  const [editItem, setEditItem] = useState({});
  const [buttonEdit, setButtonEdit] = useState(false);
  const [index, setIndex] = useState(0);

  let UserName;
  let Password;
  let image;
  let idUser;
  let Role;
  accountLogin.forEach((value) => {
    idUser = value.id;
    UserName = value.userName;
    Password = value.passWord;
    image = value.image;
    Role = value.role;
  });

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
  const handleDeleteImage = () => {
    editItem.image = "";
    setEditItem(editItem.image);
  };
  const handleEdit = (value, key, index) => {
    setEditItem({ image: value.image });
    setButtonEdit(true);
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
  const handleLogOut = () => {
    dispatch(LogOut());
    Router.push("/");
  };
  const handlUpdate = (id) => {
    if (
      editItem.newPassWord !== "" &&
      editItem.oldPassWord !== "" &&
      editItem.passWord !== ""
    ) {
      if (editItem.oldPassWord == Password) {
        if (editItem.newPassWord === editItem.checkPassWord) {
          let new_User = {
            id,
            image: editItem.image,
            userName: UserName,
            passWord: editItem.newPassWord,
            role: Role,
          };
          dispatch(updateUser(id, new_User));
          setButtonEdit(false);
          setEditItem({
            image: "",
            userName: "",
            passWord: "",
          });
          toast.success("Update user th??nh c??ng");
          toast.warn("B???n ph???i ????ng nh???p l???i ????? ti???p t???c");
          dispatch(LogOut());
          Router.push("/Login");
        } else {
          toast.error("Nh???p l???i m???t kh???u kh??ng ????ng");
        }
      } else {
        toast.error("Nh???p m???t c?? kh???u kh??ng ????ng");
      }
    } else {
      toast.warn("Vui l??ng nh???p c??c tr?????ng");
    }
  };
  return (
    <Layout>
      <div className="container lg:flex-row md:flex-col flex-col flex lg:p-32 md:p-20 mt-10 p-10 justify-between ">
        <div className="lg:w-1/3 md:w-full w-full">
          {buttonEdit !== false ? (
            <img
              alt="img"
              className="w-1/3 h-auto rounded-md shadow-md"
              src={editItem.image}
              width={200}
              height={200}
            />
          ) : (
            <img
              alt="img"
              className="w-1/3 h-auto rounded-md shadow-md"
              src={image}
              width={200}
              height={200}
            />
          )}
          {buttonEdit !== false ? (
            <div className="flex justify-around mt-5 items-center">
              <input
                className=" py-1 w-[33%] border-none outline-none"
                type="file"
                name="image"
                onChange={onImageChange}
              />
              {editItem.image !== undefined ? (
                <button
                  onClick={() => handleDeleteImage()}
                  className="bg-gray-200 px-2 h-8 rounded"
                >
                  Deltete Image
                </button>
              ) : (
                "^^Vui l??ng ch???n ???nh"
              )}
            </div>
          ) : (
            ""
          )}
        </div>

        <div className="lg:w-1/3 md:w-full w-full">
          {buttonEdit == false ? (
            <div className="">
              <p className="m-0 font-bold">UserName: {UserName}</p>
              <p className="m-0 font-bold">PassWork: ******</p>
            </div>
          ) : (
            <div className="">
              <p className="m-0 font-bold">PassWork:</p>
              <input
                className="bg-[#F8F8FF] py-3 pl-3 w-full border-none outline-none mb-5"
                value={editItem.oldPassWord}
                name="oldPassWord"
                onChange={onChange}
                placeholder="Nh???p m???t kh???u c??..."
              />
              <p className="m-0 font-bold">New PassWork:</p>
              <input
                className="bg-[#F8F8FF] py-3 pl-3 w-full border-none outline-none mb-5"
                value={editItem.newPassWord}
                name="newPassWord"
                onChange={onChange}
                placeholder="Nh???p m???t kh???u m???i..."
              />
              <p className="m-0 font-bold">Check PassWork:</p>
              <input
                className="bg-[#F8F8FF] py-3 pl-3 w-full border-none outline-none mb-5"
                value={editItem.checkPassWord}
                name="checkPassWord"
                onChange={onChange}
                placeholder="Nh???p l???i m???t kh???u ..."
              />
            </div>
          )}
          {buttonEdit == false ? (
            <div>
              {accountLogin.map((value, key) => (
                <div key={key} className="flex items-center">
                  <button
                    onClick={() => handleEdit(value, key, index)}
                    className="bg-red-redd text-white px-2 rounded my-10 mr-5"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleLogOut()}
                    className="text-white px-2 bg-red-redd lg:block md:block rounded"
                  >
                    LogOut
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex">
              <button
                onClick={() => handlUpdate(idUser)}
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
    </Layout>
  );
}
export default connect(componentSelector)(UserCustom);
