let user = [
  {
    id: 0,
    userName: "dai",
    passWord: "123456",
    role: "admin",
  },
  {
    id: 1,
    userName: "dai1",
    passWord: "123456",
    role: "user",
  },
];

let products = [
  {
    id: 0,
    name: "Humberger",
    description: "ngon",
    image: "./hamber1.jpg",
    price: 100,
    quantity: 100,
    categoryId: 1,
  },
  {
    id: 1,
    name: "Sandwitch",
    description: "re",
    image: "./hamber1.jpg",
    price: 100,
    quantity: 100,
    categoryId: 2,
  },
  {
    id: 2,
    name: "Drink",
    description: "ngon",
    image: "./hamber2.jpg",
    price: 100,
    quantity: 100,
    categoryId: 1,
  },
  {
    id: 3,
    name: "Piza",
    description: "ngon",
    image: "./hamber3.jpg",
    price: 3000,
    quantity: 100,
    categoryId: 1,
  },
  {
    id: 4,
    name: "Sandwitch",
    description: "ngon",
    image: "./hamber4.jpg",
    price: 200,
    quantity: 100,
    categoryId: 3,
  },
  {
    id: 5,
    name: "Humberger",
    description: "ngon",
    image: "./hamber1.jpg",
    price: 100,
    quantity: 100,
    categoryId: 1,
  },
  {
    id: 6,
    name: "Sandwitch",
    description: "re",
    image: "./hamber1.jpg",
    price: 100,
    quantity: 100,
    categoryId: 2,
  },
  {
    id: 7,
    name: "Drink",
    description: "ngon",
    image: "./hamber2.jpg",
    price: 100,
    quantity: 10,
    categoryId: 2,
  },
  {
    id: 8,
    name: "Piza",
    description: "ngon",
    image: "./hamber3.jpg",
    price: 3000,
    quantity: 100,
    categoryId: 1,
  },
  {
    id: 9,
    name: "Sandwitch",
    description: "ngon",
    image: "./hamber4.jpg",
    price: 200,
    quantity: 100,
    categoryId: 3,
  },
  {
    id: 10,
    name: "Piza",
    description: "ngon",
    image: "./hamber3.jpg",
    price: 3000,
    quantity: 100,
    categoryId: 1,
  },
  {
    id: 11,
    name: "Sandwitch",
    description: "ngon",
    image: "./hamber4.jpg",
    price: 200,
    quantity: 100,
    categoryId: 3,
  },
  {
    id: 12,
    name: "Piza",
    description: "ngon",
    image: "./hamber3.jpg",
    price: 3000,
    quantity: 100,
    categoryId: 1,
  },
  {
    id: 13,
    name: "Sandwitch",
    description: "ngon",
    image: "./hamber4.jpg",
    price: 200,
    quantity: 100,
    categoryId: 3,
  },
];

let category = [
  {
    id: 1,
    name: "Hamburger",
  },
  {
    id: 2,
    name: "Drink",
  },
  {
    id: 3,
    name: "Sandwich",
  },
  {
    id: 4,
    name: "Piza",
  },
];

let cart = [
  {
    id: 0,
    userId: 1,
    productId: 1,
    totalPrice: 300,
    totalQuantity: 2,
  },
];

let order = [
  {
    id: 0,
    userId: 1,
    name: "Nam",
    phone: "09879888988",
    address: "03, nguyen trai",
    cartId: 0,
  },
];

export { user, products, cart, order, category };
