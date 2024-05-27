import React, { useState } from 'react'
import { IoIosCloseCircleOutline } from "react-icons/io";
import summeryApi from '../common';

const DelelteProduct = ({onClose,productData,fetchfux}) => {
    const[_id,setId]=useState(
        {_id:productData?._id})
    console.log("id",_id)
   

    const deleteProduct = async () => {
        
        try {
            const response = await fetch(summeryApi.deleteProduct.url, {
                method: summeryApi.deleteProduct.method,
                credentials: "include",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(_id)
            });

            onClose()
            fetchfux()
    
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
    
            const responseData = await response.json();
            console.log(responseData);
    
            return responseData;
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };


  return (
    
      <div className='fixed w-[calc(400px)] h-40 bg-slate-200 top-1/2 right-[calc(600px)] z-10 rounded-lg shadow-md'>
        <div>
            <div className=' grid' >
                <div className='w-full bg-teal-300 flex '>
                <div className='hover:cursor-pointer hover:text-red-500 h-fit w-fit   absolute right-0 p-2 '
                        onClick={onClose}>
                <IoIosCloseCircleOutline size={30} />
             </div >
                </div>
           
            <div className='font-bold p-4 mt-[calc(50px)]'><p className='font-mono'>Are you sure to delete this Item!</p></div>
            </div>
            <div className='w-full pl-[calc(120px)] pb-[calc(10px)]'>
            <div className=''>
            <button type="button" class="focus:outline-none  text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 shadow-md" onClick={deleteProduct}>yes I'm sure!</button>
            </div>
            </div>
            

        </div>
        


    </div>
  )
}

export default DelelteProduct
