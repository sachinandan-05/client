import React, { useEffect, useState } from 'react'
import summeryApi from '../common'
import { json } from 'react-router-dom'

const ProductCatogry = () => {

    const[data,setData]=useState([])
    const[loading,setLoading]=useState(true)
    const loadingList = new Array(13).fill(null)
   
    // console.log("data",data)
    // console.log("data type",data instanceof Array)
    const handleProductCatogry=async()=>{
      setLoading(true)
// setTimeout(2000)
        const response= await fetch(summeryApi.getProductCatogryWise.url,{
            method:summeryApi.getProductCatogryWise.method
        }
        
    )
    const responseData= await response.json()
    setData(responseData.data)
    setLoading(false)
    // console.log("res",responseData)
    }
    // handleProductCatogry()
    useEffect(()=>{
      handleProductCatogry()

    },[])
  return (
  <div className=' h-40 gap-[calc(100px)] w-full px-5 overflow-x-scroll scrollbar-none  top-6   ' >
      <div className='flex justify-between p-2 gap-2 w-full '>
    {loading? (
      
       
      loadingList.map((e,i)=>(
        <div className=''>
          <div key={i} className=' p-3 rounded-full w-28 h-28 hover:bg-slate-200 animate-pulse bg-slate-200 flex justify-center items-center transition-all'>
             {/* <img src='' className='object-contain rounded-md h-16 w-16 p-2 mix-blend-multiply  hover:scale-125 transition-all'></img> */}
          </div>
        <div className=' pl-4 block    '>
        <p key={i} className='capitalize font-sans font-semibold block w-full h-6 animate-pulse bg-slate-300 rounded-lg text-black'> </p>
        </div>
        </div>
       ))
       
     
    ):(
    
       
        data.map((e,i)=>(
        <div className=''>
          <div key={i} className='bg-white p-3 rounded-full w-28 h-28 hover:bg-slate-200  flex justify-center items-center'>
             <img src={e.productImage[0]} className='object-contain rounded-md h-16 w-16 p-2 mix-blend-multiply  hover:scale-125 transition-all'></img>
          </div>
        <div className=' pl-6 w-full '>
        <p key={i} className='capitalize font-sans font-semibold text-black'>{e.catogry}</p>
        </div>
        </div>
       ))
       
     
    )
  }
    
    </div>
    </div>
  )
}

export default ProductCatogry
