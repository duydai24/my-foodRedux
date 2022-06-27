import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { FiDelete } from "react-icons/fi";
import Layout from "../../layout/layout";
import { useRouter } from "next/router";
import { updateProducts } from "../../redux/action/productsAction";
import { toast } from "react-toastify";
import { createSelector } from "reselect";
import { connect } from "react-redux";
import {
  productsSelector,
  saleSeclector,
} from "../../redux/selector/productsSelector";

const componentSelector = () =>
  createSelector(
    [productsSelector, saleSeclector],
    ({ products }, { sale }) => {
      return {
        products,
        sale,
      };
    }
  );

function SaleDetail({ sale, products, dispatch }) {
  console.log(sale);
  const [inputSearch, setInputSearch] = useState("");
  const onChangeSearch = (e) => {
    setInputSearch(e.target.value);
  };
  const handleDeleteSearch = () => {
    setInputSearch("");
  };
  let products2 = products.filter((val) =>
    val.name.toLowerCase().includes(inputSearch.toLowerCase())
  );
  const router = useRouter();
  const { saleDetail } = router.query;

  const a = products.filter((x) => x.saleNumber == saleDetail);
  let saleNumbers = [];
  a.map((value) => saleNumbers.push(Number(value.saleNumber)));

  let new_SaleNumber = saleNumbers.reduce((x, element) => {
    if (x.indexOf(element) === -1) {
      x.push(element);
    }
    return x;
  }, []);

  const saleOption = [];
  for (let index = 0; index < new_SaleNumber.length; index++) {
    const elementAr = new_SaleNumber[index];
    const getData = products.filter((x) => x.saleNumber == elementAr);
    saleOption.push({
      id: elementAr,
      sale: elementAr,
      data: getData,
    });
  }
  let gif;
  sale.map((value) => {
    gif = value.gif;
  });

  const addSale = (id) => {
    let products3 = products.filter((value) => value.id === id);
    let new_products;
    products3.map(
      (value) =>
        (new_products = {
          id: value.id,
          name: value.name,
          description: value.description,
          image: value.image,
          price: value.price,
          quantity: value.quantity,
          categoryId: value.categoryId,
          gif: gif,
          saleNumber: saleDetail,
        })
    );
    if (products3[0].saleNumber !== undefined) {
      let result = confirm(
        "Sản phẩm này hiện đang có 1 khuyến mãi khác, bạn có muốn tiếp tục không?"
      );
      if (result) {
        dispatch(updateProducts(id, new_products));
        toast.success(
          "Thêm khuyến mãi cho sản phẩm id = " + id + " thành công"
        );
      } else {
        toast("Khuyễn mãi được giữ nguyên");
      }
    } else {
      dispatch(updateProducts(id, new_products));
      toast.success("Thêm khuyến mãi cho sản phẩm id = " + id + " thành công");
    }
  };

  const deleteSale = (id) => {
    let products4 = products.filter((value) => value.id === id);
    let new_products;
    products4.map(
      (value) =>
        (new_products = {
          id: value.id,
          name: value.name,
          description: value.description,
          image: value.image,
          price: value.price,
          quantity: value.quantity,
          categoryId: value.categoryId,
        })
    );
    dispatch(updateProducts(id, new_products));
    toast.success("Xoá khuyến mãi cho sản phẩm id = " + id + " thành công");
  };

  return (
    <Layout>
      <div className="py-24 pb-96 container">
        <div className="h-20 relative">
          <form className="flex rounded-full py-2 m-2 items-center border-[1px] border-black max-w-full">
            <input
              id="filter"
              onChange={onChangeSearch}
              value={inputSearch}
              className="outline-none border-none w-full mx-5"
              placeholder="Search..."
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
          {saleOption.map((value, key) => {
            let dataItem = value.data;
            return (
              <div key={key} className="flex flex-col items-start">
                <div className="flex items-center w-full h-auto mb-10">
                  <p className="bg-yellow-700 w-full h-full rounded px-4 py-2 text-white">
                    Sale {value.sale} %
                  </p>
                </div>
                {dataItem.map((value, key) => (
                  <div
                    className="flex w-full justify-between items-center mb-5 px-5"
                    key={key}
                  >
                    <p className="w-24">{value.name}</p>
                    <img
                      className="mx-5"
                      alt="img"
                      src={value.image}
                      height={50}
                      width={50}
                    />
                    <button
                      onClick={() => deleteSale(value.id)}
                      className="w-[100px] text-sm bg-red-redd py-1 text-white rounded-lg"
                    >
                      Delete Sale
                    </button>
                  </div>
                ))}
              </div>
            );
          })}
          {inputSearch.length > 0 ? (
            <div className="w-full h-80 overflow-y-scroll rounded-xl bg-white shadow-2xl z-40 absolute top-24 left-0">
              {products2.map((value, key) => (
                <div
                  key={key}
                  className="flex justify-between items-center text-center p-10"
                >
                  <p className="w-[100px]">{value.name}</p>
                  <img
                    className="max-w-[200]"
                    src={value.image}
                    height={100}
                    width={100}
                    alt="img"
                  />
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
                </div>
              ))}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </Layout>
  );
}
export default connect(componentSelector)(SaleDetail);
