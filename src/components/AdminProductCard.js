import React, { useState } from 'react'
import { MdEdit } from "react-icons/md";
import AdminProductCartEdit from './AdminProductCartEdit';
import { MdDelete } from "react-icons/md";
import summeryApi from '../common';
import DelelteProduct from './DelelteProduct';
import displayINRCurrency from '../helpers/DisplayCurrency.js';

const AdminProductCard = ({ productData ,fetchproduct }) => {
    const[openEdit,setOpenEdet]=useState(false)
    const[opneDelete,setOpenDelete]=useState(false)
   

//delete a product
   
    const onCloseDelete=()=>{setOpenDelete((e)=>!e)}
    
    const onClose= ()=>{setOpenEdet((e)=>!e)}
    return (

        <div className=' max-h-full  object-contain'>
        <div className=''>
       

            <div className="flex flex-col rounded-2xl w-60  bg-[#ffffff] shadow-xl hover:bg-slate-100">
            
            <figure className="flex justify-center items-center  rounded-2xl h-[calc(180px)]  pt-2">
                <img src={productData?.productImage[0] } className=' h-full object-fill rounded-sm' alt='product' />
            </figure>
            <div class="flex flex-col p-2 gap-1 relative h-[calc(110px)] ">
                <div class="text-lg font-bold  uppercase text-[#374151] pb-1">{productData?.productName}</div>
                <div class=" text-lg p-1 text-[#374151] h-[calc(20px)] capitalize ">{productData?.brandName}</div>
                {/* <div class=" text-md  p-1  text-[#374151] max-h-[calc(80px)] object-fill  overflow-x-hidden  ">{productData?.description}</div> */}
                
                <div class=" text-md  p-1  text-[#374151] h-[calc(80px)] ">{ displayINRCurrency(productData?.sellingPrice) }</div>
               
               
                <div class="absolute bottom-0 right-0 p-2">
                    <button class="bg-[#199b1f] text-[#ffffff]  font-bold text-sm  p-2 rounded-full hover:bg-purple-800 active:scale-95 transition-transform transform" onClick={()=>{onClose()}}><MdEdit /></button>
                </div>
                <div class="absolute bottom-0 right-8 p-2">
                    <button class="bg-red-600 text-[#ffffff]  font-bold text-sm  p-2 rounded-full hover:bg-purple-800 active:scale-95 transition-transform transform" onClick={()=>{onCloseDelete()}}><MdDelete /></button>
                </div>

            </div>
           
            </div>
                <div>
                {openEdit && (<AdminProductCartEdit productData={productData} onClose={onClose} fetchfux={fetchproduct} />)}
                </div>
          <div>
          {opneDelete && (<DelelteProduct  productData={productData} onClose={onCloseDelete} fetchfux={fetchproduct}/>)}
      
          </div>
     
          </div>
         
          </div>
       
        




    )
}

export default AdminProductCard
