const initialState = {
  categories: []
};

const categoryReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "FETCH_CATEGORIES_SUCCESS":
      return {...payload}
    case "FETCH_CATEGORIES_FAILED":
      return state
    case "ADD_CATEGORY_SUCCESS":
      return state
    case "ADD_CATEGORY_FAILED":
      return state
    default:
      return state;
  }
};

export default categoryReducer