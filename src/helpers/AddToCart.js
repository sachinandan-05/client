// import {  useNavigate } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify"

import CountProduct from "./CountProduct"

const AddToCart = async(e,product_id) => {
  console.log("productId",product_id)
 
  e?.preventDefault()
  e?.stopPropagation()
  const response = await fetch("http://localhost:8080/api/v1/cart/addtocart", {
        method: 'post',
        credentials :'include',
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify({
          productId:product_id
        })
      })
      const responseData = await response.json()
      console.log("data", responseData)
      
      if (responseData.success) {
        toast.success(responseData.message)
        
      }
      // console.log("hello")
      
      if (responseData.error) {
        toast(responseData.message)
       
        
      }
      
      
 

 
 
  

  
  
}

export default AddToCart
