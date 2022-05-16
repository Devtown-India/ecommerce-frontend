import { useEffect } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Loader from "../../layout/Loader";

const AdminWrapper = (props) => {
  const {
    user: { role },
    isLoaded,
  } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoaded && role < 1) {
      navigate("/");
      toast.error("Access Denied");
    }
  }, [role,isLoaded]);

  return isLoaded?props.children:<Loader/>
};

export default AdminWrapper;
