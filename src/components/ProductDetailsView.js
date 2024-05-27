import React, { useCallback, useContext, useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate, useParams }from 'react-router-dom'
import summeryApi from '../common'
import displayINRCurrency from '../helpers/DisplayCurrency'
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";

import RecommendationPage from '../pages/RecommendationPage';
import Context from '../context';
import AddToCart from '../helpers/AddToCart';
import 'react-toastify/dist/ReactToastify.css';

const ProductDetailsView = () => {

  const[data,setData]=useState({
    
    productName: '',
    brandName: '',
    catogry: '',
    productImage:[""],
    price: '',
    sellingPrice: '',
    description: ''
  })
  console.log("data",data.productImage[0])

  const [loading,setLoading] = useState(true)
  const productImageListLoading = new Array(4).fill(null)
  const [activeImage,setActiveImage] = useState("")

  const [zoomImageCoordinate,setZoomImageCoordinate] = useState({
    x : 0,
    y : 0
  })
  const [zoomImage,setZoomImage] = useState(false)

  const context = useContext(Context)
  // console.log("cc",context)

  const handleAddToCart = async(e,product_id)=>{
      console.log("id",product_id)
     await AddToCart(e,product_id)
  //   await CountProduct()
await   context.fetchProductInCart()
  }
 

  const navigate = useNavigate()
  const handleMouseEnterProduct = (imageURL)=>{
    setActiveImage(imageURL)
  }

  const handleZoomImage = useCallback((e) =>{
    setZoomImage(true)
    const { left , top, width , height } = e.target.getBoundingClientRect()
    console.log("coordinate", left, top , width , height)

    const x = (e.clientX - left) / width
    const y = (e.clientY - top) / height

    setZoomImageCoordinate({
      x,
      y
    })
  },[zoomImageCoordinate])

  const handleLeaveImageZoom = ()=>{
    setZoomImage(false)
  }
 

  // const handleAddToCart = async(e,id) =>{
  //   await addToCart(e,id)
  //   fetchUserAddToCart()
  // }

  // const handleBuyProduct = async(e,id)=>{
  //   await addToCart(e,id)
  //   fetchUserAddToCart()
  //   navigate("/cart")

  // }


const Params=useParams()
console.log("productId",Params.id)
 const  body=JSON.stringify({
  productId: Params.id
})
console.log("id",body)
 
const fetchData=async()=>{
  setLoading(true)
  console.log("fetchingStart")
  const response=await fetch(summeryApi.productDetails.url,{
    method:"POST",
    credentials:'include',
    headers : {
        "content-type" : "application/json"
    },
    body:JSON.stringify({
      productId: Params.id
    })
  })
  const responseData=await response.json()
  console.log("fetcging end")
  console.log(responseData)
  setData(responseData.data)
  setActiveImage(responseData?.data?.productImage[0])
  setLoading(false)
}


useEffect(()=>{
  fetchData()
},[Params])

return (
  
    <div className='container mx-auto p-4'>
      
      <ToastContainer closeOnClick position='bottom-center' />

    <div className='min-h-[200px] flex flex-col lg:flex-row gap-4'>
        {/***product Image */}
        <div className='h-96 flex flex-col lg:flex-row-reverse gap-4'>

            <div className='h-[300px] w-[300px] lg:h-96 lg:w-96 bg-slate-200 relative p-2'>
                <img src={activeImage} className='h-full w-full object-scale-down mix-blend-multiply' onMouseMove={handleZoomImage} onMouseLeave={handleLeaveImageZoom}/>

                  {/**product zoom */}
                  {
                    zoomImage && (
                      <div className='hidden lg:block absolute min-w-[500px] overflow-hidden min-h-[400px] bg-slate-200 p-1 -right-[510px] top-0'>
                        <div
                          className='w-full h-full min-h-[400px] min-w-[500px] mix-blend-multiply scale-150'
                          style={{
                            background : `url(${activeImage})`,
                            backgroundRepeat : 'no-repeat',
                            backgroundPosition : `${zoomImageCoordinate.x * 100}% ${zoomImageCoordinate.y * 100}% `
  
                          }}
                        >
  
                        </div>
                      </div>
                    )
                  }
                
            </div>

            <div className='h-full'>
                {
                  loading ? (
                    <div className='flex gap-2 lg:flex-col overflow-scroll scrollbar-none h-full'>
                      {
                        productImageListLoading.map((el,index) =>{
                          return(
                            <div className='h-20 w-20 bg-slate-200 rounded animate-pulse' key={"loadingImage"+index}>
                            </div>
                          )
                        })
                      }
                    </div>
                    
                  ) : (
                    <div className='flex gap-2 lg:flex-col overflow-scroll scrollbar-none h-full'>
                      {
                        data?.productImage?.map((imgURL,index) =>{
                          return(
                            <div className='h-20 w-20 bg-slate-200 rounded p-1' key={imgURL}>
                              <img src={imgURL} className='w-full h-full object-scale-down mix-blend-multiply cursor-pointer' onMouseEnter={()=>handleMouseEnterProduct(imgURL)}  onClick={()=>handleMouseEnterProduct(imgURL)}/>
                            </div>
                          )
                        })
                      }
                    </div>
                  )
                }
            </div>
        </div>

         {/***product details */}
         {
          loading ? (
            <div className='grid gap-1 w-full'>
              <p className='bg-slate-200 animate-pulse  h-6 lg:h-8 w-full rounded-full inline-block'></p>
              <h2 className='text-2xl lg:text-4xl font-medium h-6 lg:h-8  bg-slate-200 animate-pulse w-full'></h2>
              <p className='capitalize text-slate-400 bg-slate-200 min-w-[100px] animate-pulse h-6 lg:h-8  w-full'></p>

              <div className='text-red-600 bg-slate-200 h-6 lg:h-8  animate-pulse flex items-center gap-1 w-full'>
  
              </div>

              <div className='flex items-center gap-2 text-2xl lg:text-3xl font-medium my-1 h-6 lg:h-8  animate-pulse w-full'>
                <p className='text-red-600 bg-slate-200 w-full'></p>
                <p className='text-slate-400 line-through bg-slate-200 w-full'></p>
              </div>

              <div className='flex items-center gap-3 my-2 w-full'>
                <button className='h-6 lg:h-8  bg-slate-200 rounded animate-pulse w-full'></button>
                <button className='h-6 lg:h-8  bg-slate-200 rounded animate-pulse w-full'></button>
              </div>

              <div className='w-full'>
                <p className='text-slate-600 font-medium my-1 h-6 lg:h-8   bg-slate-200 rounded animate-pulse w-full'></p>
                <p className=' bg-slate-200 rounded animate-pulse h-10 lg:h-12  w-full'></p>
              </div>
            </div>
          ) : 
          (
            <div className='flex flex-col gap-1'>
              <p className='bg-red-200 text-red-600 px-2 rounded-full inline-block w-fit'>{data?.brandName}</p>
              <h2 className='text-2xl lg:text-4xl font-medium text-black'>{data?.productName}</h2>
              <p className='capitalize text-slate-400'>{data?.catogry}</p>

              <div className='text-red-600 flex items-center gap-1'>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                  <FaStarHalf/>
              </div>

              <div className='flex items-center gap-2 text-2xl lg:text-3xl font-medium my-1'>
                <p className='text-red-600'>{displayINRCurrency(data.sellingPrice)}</p>
                <p className='text-slate-400 line-through'>{displayINRCurrency(data.price)}</p>
              </div>

              <div className='flex items-center gap-3 my-2'>
                <button className='border-2 border-red-600 rounded px-3 py-1 min-w-[120px] text-red-600 font-medium hover:bg-red-600 hover:text-white' >Buy</button>
                <button onClick={(e)=>{handleAddToCart(e,data?._id)}} className='border-2 border-red-600 rounded px-3 py-1 min-w-[120px] font-medium text-white bg-red-600 hover:text-red-600 hover:bg-white' >Add To Cart</button>
              </div>

              <div>
                <p className='text-slate-600 font-medium my-1'>Description : </p>
                <p>{data?.description}</p>
              </div>
            </div>
          )
         }

    </div>
      


    {
      data.catogry && (
        <RecommendationPage catogry={data.catogry} heading={"Recomended Products"}/>
      )
    }
   



  </div>
  )
}

export default ProductDetailsView




  
    

  


 