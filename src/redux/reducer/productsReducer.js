import * as types from "../types";

export const initialState = {
  products: [
    {
      id: 0,
      name: "Humberger",
      description: "ngon vuu vua",
      image: "/hum2.jpeg",
      price: 10,
      quantity: 20,
      categoryId: 1,
    },
    {
      id: 1,
      name: "Sandwitch",
      description: "re",
      image: "/san1.jpg",
      price: 50,
      quantity: 10,
      categoryId: 3,
    },
    {
      id: 2,
      name: "Pepsi",
      description: "ngon",
      image: "/pepsi.jpg",
      price: 5,
      quantity: 10,
      categoryId: 2,
    },
    {
      id: 3,
      name: "Piza",
      description: "ngon",
      image: "/piza1.jpg",
      price: 80,
      quantity: 67,
      categoryId: 4,
    },
    {
      id: 4,
      name: "Sandwitch2",
      description: "ngon",
      image: "/san2.webp",
      price: 80,
      quantity: 60,
      categoryId: 3,
    },
    {
      id: 5,
      name: "Humberger2",
      description: "ngon",
      image: "/hum2.jpeg",
      price: 20,
      quantity: 50,
      categoryId: 1,
    },
    {
      id: 6,
      name: "Sandwitch3",
      description: "re",
      image: "/san1.jpg",
      price: 90,
      quantity: 70,
      categoryId: 3,
    },
    {
      id: 7,
      name: "Cocacola",
      description: "ngon",
      image: "/cocacola.jpg",
      price: 15,
      quantity: 10,
      categoryId: 2,
    },
    {
      id: 8,
      name: "Piza2",
      description: "ngon",
      image: "/piza2.jpg",
      price: 60,
      quantity: 20,
      categoryId: 4,
    },
    {
      id: 9,
      name: "Humberger3",
      description: "ngon vuu vua",
      image: "/hum3.jpg",
      price: 40,
      quantity: 20,
      categoryId: 1,
    },
    {
      id: 10,
      name: "Sandwitch4",
      description: "re",
      image: "/san2.webp",
      price: 70,
      quantity: 10,
      categoryId: 3,
    },
    {
      id: 11,
      name: "Fanta",
      description: "ngon",
      image: "/fanta.jpg",
      price: 25,
      quantity: 10,
      categoryId: 2,
    },
    {
      id: 12,
      name: "Piza4",
      description: "ngon",
      image: "/piza4.jpeg",
      price: 30,
      quantity: 67,
      categoryId: 4,
    },
    {
      id: 13,
      name: "Sandwitch4",
      description: "ngon",
      image: "/san1.jpg",
      price: 90,
      quantity: 60,
      categoryId: 3,
    },
    {
      id: 16,
      name: "Sting",
      description: "ngon",
      image: "/sting.jpg",
      price: 30,
      quantity: 10,
      categoryId: 2,
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
};
export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_PRODUCTS:
      return {
        ...state,
        product: action.payload.state,
        products: action.payload.products,
      };
    case types.DELETE_PRODUCTS:
      return {
        ...state,
        product: action.payload.state,
        products: action.payload.products,
      };
    case types.UPDATE_PRODUCTS:
      return {
        ...state,
        product: action.payload.state,
        products: action.payload.products,
      };
    case types.QUANTITY_PRODUCTS:
      return {
        ...state,
        product: action.payload.state,
        quantityNumber: action.payload.quantityNumber,
      };
    case types.UPDATE_QUANTITY:
      return {
        ...state,
        product: action.payload.state,
        quantity: action.payload.products.quantity,
      };
    case types.ADD_SALE:
      return {
        ...state,
        sale: action.payload.sale,
      };
    case types.DELETE_SALE:
      return {
        ...state,
        sale: action.payload.sale,
      };
    default:
      return state;
  }
};
