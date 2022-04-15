import * as types from "../types";

export const initialState = {
  products: [
    {
      id: 0,
      name: "Humberger",
      description: "ngon vuu vua",
      image: "/hamber1.jpg",
      price: 1000,
      quantity: 100,
      categoryId: 1,
    },
    {
      id: 1,
      name: "Sandwitch",
      description: "re",
      image: "/hamber1.jpg",
      price: 100,
      quantity: 100,
      categoryId: 3,
    },
    {
      id: 2,
      name: "Drink",
      description: "ngon",
      image: "/hamber2.jpg",
      price: 2000,
      quantity: 100,
      categoryId: 2,
    },
    {
      id: 3,
      name: "Piza",
      description: "ngon",
      image: "/hamber3.jpg",
      price: 300,
      quantity: 100,
      categoryId: 4,
    },
    {
      id: 4,
      name: "Sandwitch",
      description: "ngon",
      image: "/hamber4.jpg",
      price: 200,
      quantity: 1000,
      categoryId: 3,
    },
    {
      id: 5,
      name: "Humberger",
      description: "ngon",
      image: "/hamber1.jpg",
      price: 100,
      quantity: 100,
      categoryId: 1,
    },
    {
      id: 6,
      name: "Sandwitch",
      description: "re",
      image: "/hamber1.jpg",
      price: 100,
      quantity: 100,
      categoryId: 3,
    },
    {
      id: 7,
      name: "Drink",
      description: "ngon",
      image: "/hamber2.jpg",
      price: 100,
      quantity: 10,
      categoryId: 2,
    },
    {
      id: 8,
      name: "Piza",
      description: "ngon",
      image: "/hamber3.jpg",
      price: 3000,
      quantity: 100,
      categoryId: 4,
    },
  ],
  quantityNumber: 1,
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
        quantityNumber:action.payload.quantityNumber
      };
    default:
      return state;
  }
};
