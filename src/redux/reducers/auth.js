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
    case "LOGIN_SUCCESS":
      return {...payload}
    case "LOGIN_FAILED":
      return state
    case "LOAD_USER":
      return {...payload}
    default:
      return state;
  }
};

export default authReducer