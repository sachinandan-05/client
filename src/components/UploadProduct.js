import React, { useRef, useState } from 'react'
import { IoIosCloseCircleOutline } from "react-icons/io";
import productCategory from '../helpers/Catogry';
import { FaCloudUploadAlt } from "react-icons/fa";

const UploadProduct = ({onClose}) => {
    const inputRef=useRef(null)

    const handleClick=()=>{
        inputRef.current.click()
    }
    // console.log()
    const[data,setdata]=useState({
        productName:"",
        brandName:"",
        catogry:"",
        productImage:[],
        price:"",
        selling:""

    })
  return (
    <div>
     <div className=' absolute bottom-0 top-0 left-0 right-0'>
     <div className='  flex justify-center items-center h-full w-full '>
       <div className='  max-w-full bg-slate-300  w-[calc(600px)] p-6  rounded-md overflow-y-scroll '>
        <div className=' flex justify-between'>
            <div className=' h-fit p-2 font-bold'>
            upload products
            </div>
            <div className='hover:cursor-pointer hover:text-red-500 h-fit 'onClick={onClose}>
                <IoIosCloseCircleOutline size={40} />
            </div>
        </div>
        <form className='grid p-2 my-1 gap-1'>
            <label htmlFor='productName'>product name: </label>
            <input
             id='productName' 
             placeholder='Enter product Name'
             value={data.productName}
             name='productName'
             className='rounded-md bg-slate-200 border-solid border-2 border-sky-500 p-2'/>

            <label htmlFor='brandName'>Brand Name: </label>
            <input
             id='brandName' 
             placeholder='Enter brand Name'
             value={data.brandName}
             name='brandName'
             className='rounded-md bg-slate-200 border-solid border-2 border-sky-500 p-2'/>

            <label htmlFor='catogry'>Catogry :</label>
           <select className='rounded-md bg-slate-200 border-solid border-2 border-sky-500 p-2' value={data.catogry}>
            {
                productCategory.map((e,i)=>(<option value={e.value} key={e.value+i}>{e.label}</option>))
            }
           </select>
           <label htmlFor='productImage'>Product Image:</label>
           <div className=' w-full bg-slate-200 h-[clac(1000px)] rounded-md relative cursor-pointer' onClick={handleClick}>
                <div className=' flex justify-center '>
                <FaCloudUploadAlt size={60} />

                </div>
                <div className='text-center  '>
                    upload Product Image
                </div>
                <input ref={inputRef} type='file' className='hidden'/>
                

            </div>
            
            
            
        </form>
        </div>
       

     </div> 

     </div>
    
    </div>
  )
}

export default UploadProduct
 