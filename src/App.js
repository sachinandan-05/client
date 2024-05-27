import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from "react";
import Context from "./context";
import { useDispatch} from 'react-redux'
import { setUserDetails } from "./store/userSlice";
import CountProduct from "./helpers/CountProduct";



function App() {

  const[ numberOfProduct,setNumberOfProduct]=useState(0)
  // console.log("numberof product",numberOfProduct)
  const fetchProductInCart=async()=>{
   const number= await CountProduct()
   setNumberOfProduct(number)
  
  }


  
  useEffect(()=>{

    fetchUserDetails()
    fetchProductInCart()
      },[])
  const dispatch= useDispatch()

  const fetchUserDetails=async()=>{
    const response =await fetch("http://localhost:8080/api/v1/user/userdetail",{
      method:"get",
      credentials:"include"
    })
    const responseData= await response.json()

    if (responseData.success) {
      dispatch(setUserDetails(responseData.data))
      
    }
    // console.log("respose data:-",responseData)
  }
 useEffect(()=>{
  // fetchUserDetails()

  // console.log("refreshed")
 },[])

  return (
    <>
    <Context.Provider value={{
      fetchUserDetails ,//user details
      fetchProductInCart,//count product
      numberOfProduct //numberof products in cart
    }}>
    <ToastContainer/>

    
    <Header />
    
     
      <main className=" min-h-[calc(100vh-140px)] pt-16  ">

        <Outlet/>

      </main>
      
      <Footer/>
      </Context.Provider>
    </>
  );
}

export default App;
