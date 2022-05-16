const initialState = {
  token: null,
  user: {
      email:null,
      id:null,
      role:0
  },
  isLoaded:false
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "LOGIN_SUCCESS":
      return {...payload,isLoaded:true}
    case "LOGIN_FAILED":
      return {...state,isLoaded:true}
    case "LOAD_USER":
      return {...state,...payload,isLoaded:true}
    case "LOGOUT":
      return {...state,isLoaded:true}
    default:
      return state;
  }
};

export default authReducer