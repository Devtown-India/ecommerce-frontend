import axios from "axios";
import toast from "react-hot-toast";

export const loginUser = (email, password) => async (dispatch) => {
  try {
    const res = await axios.post("http://localhost:8080/user/login", {
      email,
      password,
    });
    const { data, message, success } = res.data;

    if (success) {
      // save the token to local storage
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
  const token = localStorage.getItem("token");
  const base64 = token.split('.')[1]
  const {email,id} = JSON.parse(atob(base64))

  if (token) {
    dispatch({
      type: "LOAD_USER",
      payload: { token, user: {email,id} },
    });
  } else {
    dispatch({
      type: "LOAD_USER",
      payload: {},
    });
  }
};
