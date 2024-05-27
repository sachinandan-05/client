import React, { useContext, useEffect, useRef, useState } from 'react'
import FetchCategoryWiseProduct from '../helpers/FetchCategoryWiseProduct'
import displayINRCurrency from '../helpers/DisplayCurrency'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import AddToCart from '../helpers/AddToCart'
import Context from '../context'
import { ToastContainer } from 'react-toastify'
// import addToCart from '../helpers/addToCart'
// import Context from '../context'
// import scrollTop from '../helpers/scrollTop'

const  VerticalProductCard = ({catogry, heading}) => {
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(true)
    const loadingList = new Array(13).fill(null)

    const context=useContext(Context)

    const handleAddToCart = async(e,product_id)=>{
        console.log("id",product_id)
       await AddToCart(e,product_id)
    //   await CountProduct()
await   context.fetchProductInCart()
    }


    const fetchData = async() =>{
        setLoading(true)
        const categoryProduct = await FetchCategoryWiseProduct(catogry)
        setLoading(false)

        // console.log("horizontal data",categoryProduct.data)
        setData(categoryProduct?.data)
    }

    useEffect(()=>{
        fetchData()
    },[])




  return (
    <div className='container mx-auto px-3 my-6 relative'>

            <h2 className='text-2xl font-semibold py-4 text-black'>{heading}</h2>

                
           <div className='flex items-center gap-4 md:gap-6 overflow-scroll scrollbar-none transition-all' >

            <button  className='bg-white shadow-md rounded-full p-1 absolute left-0 text-lg hidden md:block' ><FaAngleLeft/></button>
            <button  className='bg-white shadow-md rounded-full p-1 absolute right-0 text-lg hidden md:block' ><FaAngleRight/></button> 

           {   loading ? (
                loadingList.map((product,index)=>{
                    return(
                        <div className='w-full min-w-[280px] md:min-w-[320px] max-w-[280px] md:max-w-[320px] h-36 bg-white rounded-sm shadow flex'>
                            <div className='bg-slate-200 h-full p-4 min-w-[120px] md:min-w-[145px] animate-pulse'>

                            </div>
                            <div className='p-4 grid w-full gap-2'>
                                <h2 className='font-medium text-base md:text-lg text-ellipsis line-clamp-1 text-black bg-slate-200 animate-pulse p-1 rounded-full'></h2>
                                <p className='capitalize text-slate-500 p-1 bg-slate-200 animate-pulse rounded-full'></p>
                                <div className='flex gap-3 w-full'>
                                    <p className='text-red-600 font-medium p-1 bg-slate-200 w-full animate-pulse rounded-full'></p>
                                    <p className='text-slate-500 line-through p-1 bg-slate-200 w-full animate-pulse rounded-full'></p>
                                </div>
                                <button className='text-sm  text-white px-3 py-0.5 rounded-full w-full bg-slate-200 animate-pulse'></button>
                            </div>
                        </div>
                    )
                })
           ) : (
            data.map((product,index)=>{
                return(
                    <Link to={"product/"+product?._id} className='w-full min-w-[280px] md:min-w-[320px] max-w-[280px] md:max-w-[320px] h-36 bg-white rounded-sm shadow flex'>
                        <div className='bg-slate-200 h-full p-3 min-w-[120px] md:min-w-[145px]'>
                            <img src={product.productImage[0]} className='object-scale-down h-full hover:scale-110 transition-all'/>
                        </div>
                        <div className='p-1 grid '>
                            <div className=' object-fill'><h2 className='font-medium text-base md:text-lg text-ellipsis line-clamp-1 text-black'>{product?.productName}</h2></div>
                            <p className='capitalize text-slate-500 '>{product?.category}</p>
                            <div className='flex gap-3'>
                                <p className='text-red-600 font-medium'>{ displayINRCurrency(product?.sellingPrice) }</p>
                                <p className='text-slate-500 line-through'>{ displayINRCurrency(product?.price)  }</p>
                            </div>
                            <button className='text-sm bg-red-600 hover:bg-red-700 text-white px-3 py-0.5 rounded-full' onClick={(e)=>{handleAddToCart(e,product?._id)}} >Add to Cart</button>
                            <ToastContainer position='bottom-center'/>
                        </div>
                    </Link>
                )
            })
           )
               
            }
           </div>
            

    </div>
  )
}

export default VerticalProductCard
