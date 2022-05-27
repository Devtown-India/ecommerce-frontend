import { Route, Routes } from "react-router";

import {Toaster} from 'react-hot-toast'
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadUser, logout } from "./redux/actions/auth";

import Loader from "./layout/Loader";
import Home from './components/Home'
import Login from "./components/auth/Login";
import Admin from "./components/admin/Admin";
import AdminWrapper from "./components/HOC/AdminWrapper";
import Navbar from "./layout/Navbar";
import { getProducts } from "./redux/actions/product";
import Products from "./components/product/Products";
import Product from "./components/product/Product";
import Footer from "./layout/Footer";
import Cart from "./components/cart/Cart";
import { loadCart } from "./redux/actions/cart";

const App = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(loadUser())
    dispatch(getProducts())
    dispatch(loadCart())
  },[])


  return ( 
    <div>
      <Toaster/>
      {/* <button onClick={e=>{
        dispatch(logout())
        window.location.reload()
      }} >Logout</button> */}
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}  />
        <Route path="/shop" element={<Products/>}  />
        <Route path="/shop/:id" element={<Product/>}  />
        <Route path="/login" element={<Login/>}  />
        <Route path='/cart' element={<Cart />} />
        <Route path="/admin" element={<AdminWrapper><Admin/></AdminWrapper>}  />
      </Routes>
      <Footer/>
    </div>
   );
}
 
export default App;