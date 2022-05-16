import axios from "axios";
import toast from "react-hot-toast";

export const loginUser = (email, password) => async (dispatch) => {
  try {
    const res = await axios.post("http://localhost:8080/user/login", {
      email,
      password,
    });
    const { data, message, success } = res.data;
    console.log(data)

    if (success) {
       localStorage.setItem("token", data.token);
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: data,
      });
      toast.success(message);
    } else {
      dispatch({
        type: "LOGIN_FAILED",
        payload: {},
      });
      toast.error(message);
    }
  } catch (error) {
    console.log(error);
    toast.error(error.message);

    dispatch({
      type: "LOGIN_FAILED",
      payload: {},
    });
  }
};

export const loadUser = () => async (dispatch) => {
  const token = localStorage.getItem("token")??null;


  if (token) {
    const base64 = token.split('.')[1]
    const {email,id,role} = JSON.parse(atob(base64))
    dispatch({
      type: "LOAD_USER",
      payload: { token, user: {email,id,role} },
    });
  } else {
    dispatch({
      type: "LOAD_USER",
      payload: {},
    });
  }
};



export const logout = () => (dispatch) => {
    localStorage.removeItem('token')
    dispatch({
      type: "LOGOUT",
    });
    toast.success("User logged out")
};
