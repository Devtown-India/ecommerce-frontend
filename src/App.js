import { Route, Routes } from "react-router";
import Loader from "./layout/Loader";
import Home from './components/Home'
import Login from "./components/auth/Login";
import {Toaster} from 'react-hot-toast'
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadUser } from "./redux/actions/auth";

const App = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(loadUser())
  },[])
  return ( 
    <div>
      <Toaster/>
      <Routes>
        <Route path="/" element={<Home/>}  />
        <Route path="/login" element={<Login/>}  />
      </Routes>
    </div>
   );
}
 
export default App;