import {
  ADD_PRODUCTS,
  DELETE_PRODUCTS,
  QUANTITY_PRODUCTS,
  ADD_SALE,
  DELETE_SALE,
  UPDATE_QUANTITY_PRODUCTS,
  UPDATE_PRODUCTS,
} from "../types";

export const initialState = {
  products: [
    {
      id: 0,
      name: "Humberger",
      description: "ngon vuu vua",
      image: "/hum2-removebg-preview.png",
      price: 10,
      quantity: 20,
      categoryId: 1,
    },
    {
      id: 1,
      name: "Sandwitch",
      description: "re",
      image: "/san3-removebg-preview.png",
      price: 50,
      quantity: 10,
      categoryId: 3,
    },
    {
      id: 2,
      name: "Pepsi",
      description: "ngon",
      image: "/pepsi-removebg-preview.png",
      price: 5,
      quantity: 10,
      categoryId: 2,
    },
    {
      id: 3,
      name: "Piza",
      description: "ngon",
      image: "/piza1-removebg-preview.png",
      price: 80,
      quantity: 67,
      categoryId: 4,
    },
    {
      id: 4,
      name: "Sandwitch 2",
      description: "ngon",
      image: "/sandwich2.png",
      price: 80,
      quantity: 60,
      categoryId: 3,
    },
    {
      id: 5,
      name: "Humberger 2",
      description: "ngon",
      image: "/hum2-removebg-preview.png",
      price: 20,
      quantity: 50,
      categoryId: 1,
    },
    {
      id: 6,
      name: "Sandwitch 3",
      description: "re",
      image: "/sandwich3.png",
      price: 90,
      quantity: 70,
      categoryId: 3,
    },
    {
      id: 7,
      name: "Cocacola",
      description: "ngon",
      image: "/cocacola-removebg-preview.png",
      price: 15,
      quantity: 10,
      categoryId: 2,
    },
    {
      id: 8,
      name: "Piza 2",
      description: "ngon",
      image: "/piza2-removebg-preview.png",
      price: 60,
      quantity: 20,
      categoryId: 4,
    },
    {
      id: 9,
      name: "Humberger 3",
      description: "ngon vuu vua",
      image: "/hum3-removebg-preview.png",
      price: 40,
      quantity: 20,
      categoryId: 1,
    },
    {
      id: 10,
      name: "Sandwitch 4",
      description: "re",
      image: "/san3-removebg-preview.png",
      price: 70,
      quantity: 10,
      categoryId: 3,
    },
    {
      id: 11,
      name: "Fanta",
      description: "ngon",
      image: "/fanta-removebg-preview.png",
      price: 25,
      quantity: 10,
      categoryId: 2,
    },
    {
      id: 12,
      name: "Piza 3",
      description: "ngon",
      image: "/piza3-removebg-preview.png",
      price: 30,
      quantity: 67,
      categoryId: 4,
    },
    {
      id: 13,
      name: "Sandwitch 5",
      description: "ngon",
      image: "/sandwich4-removebg-preview.png",
      price: 90,
      quantity: 60,
      categoryId: 3,
    },
    {
      id: 14,
      name: "Sting",
      description: "ngon",
      image: "/sting-removebg-preview.png",
      price: 30,
      quantity: 15,
      categoryId: 2,
    },
    {
      id: 17,
      name: "Humberger 4",
      description: "ngon vuu vua",
      image: "/hum2-removebg-preview.png",
      price: 10,
      quantity: 20,
      categoryId: 1,
    },
    {
      id: 18,
      name: "Sandwitch 6",
      description: "re",
      image: "/sandwich5-removebg-preview.png",
      price: 50,
      quantity: 10,
      categoryId: 3,
    },
    {
      id: 19,
      name: "Pepsi 2",
      description: "ngon",
      image: "/pepsi-removebg-preview.png",
      price: 15,
      quantity: 40,
      categoryId: 2,
    },
    {
      id: 20,
      name: "Piza 4",
      description: "ngon",
      image: "/piza1-removebg-preview.png",
      price: 50,
      quantity: 67,
      categoryId: 4,
    },
    {
      id: 21,
      name: "Sandwitch 7",
      description: "ngon",
      image: "/sandwich4-removebg-preview.png",
      price: 90,
      quantity: 60,
      categoryId: 3,
    },
    {
      id: 22,
      name: "Humberger 5",
      description: "ngon",
      image: "/hum2-removebg-preview.png",
      price: 20,
      quantity: 50,
      categoryId: 1,
    },
    {
      id: 23,
      name: "Sandwitch 8",
      description: "re",
      image: "/san3-removebg-preview.png",
      price: 30,
      quantity: 10,
      categoryId: 3,
    },
    {
      id: 24,
      name: "Cocacola Chai",
      description: "ngon",
      image: "/cocacolaChai-removebg-preview.png",
      price: 35,
      quantity: 15,
      categoryId: 2,
    },
    {
      id: 25,
      name: "Piza 5",
      description: "ngon",
      image: "/piza2-removebg-preview.png",
      price: 20,
      quantity: 20,
      categoryId: 4,
    },
    {
      id: 26,
      name: "Humberger 6",
      description: "ngon vuu vua",
      image: "/hum3-removebg-preview.png",
      price: 40,
      quantity: 20,
      categoryId: 1,
    },
    {
      id: 27,
      name: "Sandwitch 9",
      description: "re",
      image: "/sandwich5-removebg-preview.png",
      price: 70,
      quantity: 10,
      categoryId: 3,
    },
    {
      id: 28,
      name: "Fanta Chai",
      description: "ngon",
      image: "/fantaChai-removebg-preview.png",
      price: 25,
      quantity: 20,
      categoryId: 2,
    },
    {
      id: 28,
      name: "Piza 6",
      description: "ngon",
      image: "/piza2-removebg-preview.png",
      price: 30,
      quantity: 67,
      categoryId: 4,
    },
    {
      id: 29,
      name: "Sandwitch 10",
      description: "re",
      image: "/sandwich4-removebg-preview.png",
      price: 40,
      quantity: 60,
      categoryId: 3,
    },
  ],
  quantityNumber: 1,
  sale: [
    {
      id: 1,
      gif: "sale25.gif",
      saleNumber: 25,
    },
  ],
  saleOptions: [],
};
export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCTS:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case UPDATE_PRODUCTS:
      const newDataProducts = [...state.products];
      newDataProducts.splice(action.payload.id, 1, action.payload.new_products);
      return {
        ...state,
        products: newDataProducts,
      };

    case DELETE_PRODUCTS:
      const newData = [...state.products];
      newData.splice(action.payload.key, 1);
      return {
        ...state,
        products: newData,
      };

    case QUANTITY_PRODUCTS:
      return {
        ...state,
        quantityNumber: action.payload,
      };
    case UPDATE_QUANTITY_PRODUCTS:
      const newDataQuantityProducts = [...state.products];
      let filterProduct = newDataQuantityProducts.filter(
        (e) => e.id === action.payload.id
      );
      const key = newDataQuantityProducts.indexOf(...filterProduct);
      newDataQuantityProducts[key].quantity = newDataQuantityProducts[
        key
      ].quantity -= action.payload.quantityNumber;
      return {
        ...state,
        products: newDataQuantityProducts,
      };
    case ADD_SALE:
      const newDataSaleAdd = [...state.sale];
      newDataSaleAdd.splice(action.payload.key, 1, action.payload.new_Sale);
      return {
        ...state,
        sale: newDataSaleAdd,
      };
    case DELETE_SALE:
      const newDataSale = [...state.sale];
      newDataSale.splice(action.payload.key, 1, action.payload.new_Sale);
      return {
        ...state,
        sale: newDataSale,
      };
    default:
      return state;
  }
};
