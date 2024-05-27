import React, { useContext, useEffect, useRef, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FetchCategoryWiseProduct from '../helpers/FetchCategoryWiseProduct'
import displayINRCurrency from '../helpers/DisplayCurrency'
// import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6'
// import { Link, useParams } from 'react-router-dom'
// import AddToCart from '../helpers/AddToCart'
// import CountProduct from '../helpers/CountProduct'
// import addToCart from '../helpers/addToCart'
// import Context from '../context'
import scrollTop from '../helpers/ScrollTop'
import { Link } from 'react-router-dom'
import Context from '../context'
import AddToCart from '../helpers/AddToCart'


const RecommendationPage = ({ catogry, heading }) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const loadingList = new Array(13).fill(null)
    
    const context = useContext(Context)
    // console.log("cc",context)

    const handleAddToCart = async(e,product_id)=>{
        console.log("id",product_id)
        AddToCart(e,product_id)
    //   await CountProduct()
        context.fetchProductInCart()
    }
   



    const fetchData = async () => {
        setLoading(true)
        const categoryProduct = await FetchCategoryWiseProduct(catogry)
        setLoading(false)

        // console.log("horizontal data", categoryProduct.data)
        setData(categoryProduct?.data)
    }

    useEffect(() => {
        fetchData()
        scrollTop()
    }, [])




    return (
        <div className='container w-full   mx-auto px-4 my-6 relative p-3   h-full '>
             <ToastContainer closeOnClick position='bottom-center'/>

            <h2 className='text-2xl font-semibold py-4 text-black' key={heading+"s"}>{heading}</h2>


            <div className='flex flex-row  h-full flex-wrap rounded-sm justify-center md:justify-between md:gap-6  scrollbar-none transition-all  '>
                {

                    loading ? (
                        loadingList.map((product, index) => {
                            return (
                                <div className='w-full min-w-[280px]  md:min-w-[320px] max-w-[280px] md:max-w-[320px]  rounded-sm shadow ' key={index}>
                                    <div className='bg-slate-200 h-48 p-4 min-w-[280px] md:min-w-[145px] flex justify-center items-center animate-pulse'>
                                    </div>
                                    <div className='p-4 grid gap-3'>
                                        <h2 className='font-medium text-base md:text-lg text-ellipsis line-clamp-1 text-black p-1 py-2 animate-pulse rounded-full bg-slate-200'></h2>
                                        <p className='capitalize text-slate-500 p-1 animate-pulse rounded-full bg-slate-200  py-2'></p>
                                        <div className='flex gap-3'>
                                            <p className='text-red-600 font-medium p-1 animate-pulse rounded-full bg-slate-200 w-full  py-2'></p>
                                            <p className='text-slate-500 line-through p-1 animate-pulse rounded-full bg-slate-200 w-full  py-2'></p>
                                        </div>
                                        <button className='text-sm  text-white px-3  rounded-full bg-slate-200  py-2 animate-pulse'></button>
                                    </div>
                                </div>
                            )
                        })
                    ) : (
                        data.map((product, index) => {
                            return (
                                <Link to={"/product/" + product?._id} className='w-full   min-w-[280px]  md:min-w-[320px] max-w-[280px] md:max-w-[320px]  rounded-sm shadow ' onClick={scrollTop} key={index} >
                                    <div className='bg-slate-200 h-48 p-4 min-w-[280px] md:min-w-[145px] flex justify-center items-center rounded-md'>
                                        <img src={product.productImage[0]} className='object-scale-down h-full hover:scale-110 transition-all mix-blend-multiply' />
                                    </div>
                                    <div className='p-4 grid gap-3'>
                                        <h2 className='font-medium text-base md:text-lg text-ellipsis line-clamp-1 text-black'>{product?.productName}</h2>
                                        <p className='capitalize text-slate-500'>{product?.catogry}</p>
                                        {/* <div className="rating">
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        </div> */}
                                        <div className='flex gap-3'>
                                            <p className='text-red-600 font-medium'>{displayINRCurrency(product?.sellingPrice)}</p>
                                            <p className='text-slate-500 line-through'>{displayINRCurrency(product?.price)}</p>
                                        </div>
                                        <div >
                                        <button onClick={(e)=>{handleAddToCart(e,product?._id)}} className='text-sm bg-red-600 hover:bg-red-700 text-white px-3 py-0.5 h-7 rounded-full'>
                                            Add to Cart
                                            </button></div>
                                           
                                        
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

export default RecommendationPage
