const initialState = {
  isLoading: false,
};

const loaderReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    default:
      return state;
  }
};

export default loaderReducer