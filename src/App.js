import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from "react";
import Context from "./context";
import { useDispatch} from 'react-redux'
import { setUserDetails } from "./store/userSlice";


function App() {

  useEffect(()=>{

    fetchUserDetails()
    // user details
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
 

  return (
    <>
    <Context.Provider value={{
      fetchUserDetails //user details
    }}>
    <ToastContainer/>
    
      <Header/>
      <main className=" min-h-[calc(100vh-140px)] ">

        <Outlet/>

      </main>
      
      <Footer/>
      </Context.Provider>
    </>
  );
}

export default App;
