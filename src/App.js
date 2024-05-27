import React, { useEffect, useState } from 'react';
import { Outlet } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Context from "./context";
import { useDispatch } from 'react-redux';
import { setUserDetails } from "./store/userSlice";
import CountProduct from "./helpers/CountProduct";

function App() {
  const [numberOfProduct, setNumberOfProduct] = useState(0);
  const dispatch = useDispatch();

  const fetchProductInCart = async () => {
    try {
      const number = await CountProduct();
      setNumberOfProduct(number);
    } catch (error) {
      toast.error("Failed to fetch product count.");
      console.error("Error fetching product count:", error);
    }
  };

  const fetchUserDetails = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/v1/user/userdetail", {
        method: "GET",
        credentials: "include"
      });
      const responseData = await response.json();

      if (responseData.success) {
        dispatch(setUserDetails(responseData.data));
      } else {
        toast.error("Failed to fetch user details.");
      }
    } catch (error) {
      toast.error("Error fetching user details.");
      console.error("Error fetching user details:", error);
    }
  };

  useEffect(() => {
    fetchUserDetails();
    fetchProductInCart();
  }, []);

  return (
    <>
      <Context.Provider value={{
        fetchUserDetails, // user details
        fetchProductInCart, // count product
        numberOfProduct // number of products in cart
      }}>
        <Header />
        <main className="min-h-[calc(100vh-140px)] pt-16">
          <Outlet />
          <ToastContainer closeOnClick position='bottom-center' />
        </main>
        <Footer />
      </Context.Provider>
    </>
  );
}

export default App;
