const initialState = {
  products: []
};

const productReducer = (state = initialState, action) => {
  const { type, payload } = action;
  console.log(payload)
  switch (type) {
    case "FETCH_PRODUCTS_SUCCESS":
      return {...payload}
    case "FETCH_PRODUCTS_FAILED":
      return state
    case "ADD_PRODUCT_SUCCESS":
      return state
    case "ADD_PRODUCT_FAILED":
      return state
    default:
      return state;
  }
};

export default productReducer