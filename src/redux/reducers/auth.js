const initialState = {
  token: null,
  user: {
      email:null,
      id:null
  },
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    default:
      return state;
  }
};

export default authReducer