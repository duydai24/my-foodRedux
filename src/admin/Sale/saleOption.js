import React, { useState } from "react";
import Layout from "../../layout/layout";
import { useDispatch, useSelector } from "react-redux";
import {
  addSaleOption,
  updateProducts,
} from "../../redux/action/productsAction";
import { IoMdAddCircle } from "react-icons/io";
import Link from "next/link";

function SaleOption() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);

  const a = products.filter((x) => x.saleNumber !== undefined);
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
  const { sale } = useSelector((state) => state.product);
  let saleNumber;
  let gif;
  sale.map((value) => {
    saleNumber = value.saleNumber;
    gif = value.gif;
  });

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
    <Layout>
      <div className="py-24 pb-96 container">
        <div className="grid grid-cols-3 gap-y-32 gap-x-10">
          {saleOption.map((value, key) => {
            let dataItem = value.data;
            return (
              <div key={key} className="flex flex-col items-start">
                <div className="flex items-center w-full h-auto mb-10">
                  <p className="bg-yellow-700 w-4/5 h-full rounded px-4 py-2 text-white">
                    Sale {value.sale}%
                  </p>
                  <Link href={`/Admin/Sale/${value.id}`}>
                    <span className="w-1/5 text-3xl ml-3 hover:text-red-redd">
                      <IoMdAddCircle />
                    </span>
                  </Link>
                </div>
                {dataItem.map((value, key) => (
                  <div className="flex items-center mb-5 px-5" key={key}>
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
        </div>
      </div>
    </Layout>
  );
}
export default SaleOption;
