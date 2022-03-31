let initialState = {
cart,
}

const listCart = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_CART":
        return {
            ...state,
            cart: action.payload
        };
    
      default:
        return state;
    }
  }

  export default listCart;