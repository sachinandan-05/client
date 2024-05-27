import React, { useRef, useState } from 'react'
import { IoIosCloseCircleOutline } from "react-icons/io";
import productCategory from '../helpers/Catogry';
import { FaCloudUploadAlt } from "react-icons/fa";
import uploadImage_Cloudinary from '../helpers/UploadImage';
import DisplayFullImg from './DisplayFullImg';
import { MdDelete } from "react-icons/md";
import summeryApi from '../common';
import { toast } from 'react-toastify';

const UploadProduct = ({onClose, fetchproduct}) => {
    const inputRef=useRef(null)

    const handleClick=()=>{
        inputRef.current.click()
    }
    
    const[data,setdata]=useState({
        productName:" ",
        brandName:" ",
        catogry:"",
        productImage:[],
        price:" ",
        sellingPrice:" ",
        description:""

    })
    
    const handleOnChange=(event)=>{
        const {name,value}=event.target
        setdata((prev)=>{
            return{
            ...prev,
            [name]:value
            }
        })
    }
    const [fullImage,setFullImage]=useState(false)
    console.log("fullImage status",fullImage)
        const[activeUrl,setActiveUrl]=useState("")
    const handleProductUpload=async(evnt)=>{
        const file=evnt.target.files[0]
        // const {name,value}=evnt.target
        const uplodImage=  await uploadImage_Cloudinary(file)
        console.log("uploaded image",uplodImage.secure_url)
        
        setdata((prev)=>{
            return {...prev,
                productImage:[...prev.productImage,uplodImage.secure_url]
            }
        
        
        

    })
   
}
    console.log("productImage url",activeUrl)

    const handleDelete =async(index)=>{
       const  productList=[...data.productImage]
       console.log("product List",productList)
       productList.splice(index,1)
       setdata((prev)=>{
        return{
            ...prev,
            productImage:[...productList]
        }
       })

    }

        // to avoid refresh onclicking sumbit button
        const handleSumbmit=async(e)=>{
            e.preventDefault()
            console.log("data",data)

             // sent data to backend

           const response= await fetch(summeryApi.uploadProduct.url,{
            method:"post",
            headers:{
                "content-type": "application/json"
            },
            body:JSON.stringify(data)
           })
            const dataResponse=await response.json()
            console.log("productData",response)

            if (dataResponse) {
                toast.success("product uploaded successfully")
                fetchproduct()
                onClose()
                
            } else {
                toast.error(response.error)
                
            }
        }
        
    

    return (
    <div>
        <div className='  bottom-0 top-0 left-0 right-0 absolute overscroll-none  '>
        <div className='  flex justify-center items-center h-full w-full '>
        <div className='  max-w-full bg-slate-300  w-[calc(600px)] p-6  rounded-md h-[calc(550px)] overflow-y-scroll  '>
            <div className=' flex justify-between '>
                <div className=' h-fit p-2 font-bold'>
                    upload products
                </div>
                <div className='hover:cursor-pointer hover:text-red-500 h-fit 'onClick={onClose}>
                    <IoIosCloseCircleOutline size={40} />
                </div>
            </div>
        <form className='grid p-2 my-1 gap-1 ' onSubmit={handleSumbmit}>
            <label htmlFor='productName'>product name: </label>
            <div onChange={handleOnChange} className='w-full '>
            <input
            id='productName' 
            placeholder='Enter product Name'
            value={data.productName}
            name='productName'
            className='rounded-md bg-slate-200 border-solid border-2 border-sky-500 p-2 w-full'/>


            </div>
            
            <label htmlFor='brandName'>Brand Name: </label>
            <div onChange={handleOnChange}>
            <input
                id='brandName' 
                placeholder='Enter brand Name'
                value={data.brandName}
                name='brandName'
                type='text'

            className='rounded-md bg-slate-200 border-solid border-2 border-sky-500 p-2 w-full'/>


            </div>
            
            <label htmlFor='catogry'>Catogry :</label>
            <select className='rounded-md bg-slate-200 border-solid border-2 border-sky-500 p-2'name='catogry' value={data.catogry} onChange={handleOnChange}>
            {
                productCategory.map((e,i)=>(<option value={e.value} key={e.value+i}>{e.label}</option>))
            }
            </select>
            <label htmlFor='productImage'>Product Image:</label>
        
            <div className=' w-full bg-slate-200 h-[clac(1000px)] rounded-md relative cursor-pointer'
            onClick={handleClick}>
                <div className=' flex justify-center '>
                <FaCloudUploadAlt size={60} />

                </div>
                <div className='text-center  ' >
                    upload Product Image
                </div>
                <input  type="file"
                name='productImage'  onChange={handleProductUpload}
                
                
                ref={inputRef}  className='hidden'/>
                

            </div>

            
                
  <div className='flex flex-wrap gap-2'>
  {
    data?.productImage && data.productImage.length > 0 ? (
      data.productImage.map((el, index) => (
        <div key={index} className='relative group my-auto w-8 bg-red-500'>
          <img 
            src={el} 
            alt={`Product ${index}`} 
            width={80} 
            height={80}  
            className='bg-slate-100 border cursor-pointer w-8 h-[calc(65px)] overflow-clip' 
            onClick={()=>{
                setFullImage(true)
                setActiveUrl(el)
            }}
          />
          <div className='absolute  bottom-0 right-0 bg-red-500 text-white rounded-full hidden group-hover:block hover:cursor-pointer p-1' key={index} onClick={()=>handleDelete(index)}>
          <MdDelete/>
          </div>
          
          
            
          
          
        </div>
       
        
      ))
    ) : (
      <p>*please upload picture</p>
    )
  }
</div>
<div className='gap-1'>
    <label htmlFor='price'>Price:</label>
    <div className='w-full  bg-blue-300'><input id='price' type='text'name='price'value={data.price} onChange={handleOnChange} className='w-full rounded-md py-1 border-2 border-sky-500'></input></div>
</div>
<div className='gap-1'>
    <label htmlFor='sprice'>Selling Price:</label>
    <div className='w-full  bg-blue-300'><input id='sprice' type='text'name='sellingPrice'value={data.sellingPrice} onChange={handleOnChange} className='w-full rounded-md py-1 border-2 border-sky-500'></input></div>
</div>
<div className='grid gap-1'>
    <label htmlFor='disc'>Description:</label>
    <textarea rows={4} id='disc' placeholder='Enter product details' name='description'value={data.description}  onChange={handleOnChange} className='w-full rounded-md py-1 border-2 border-sky-500 resize-none p-2'>

    </textarea>
</div>

<button className='rounded-md w-full bg-red-500 text-white hover:cursor-pointer p-3 hover:bg-red-600 '>Upload Product</button>


             
        
            
            
        </form>
       
        </div>
        {
        fullImage && (<DisplayFullImg ImgUrl={activeUrl} onClose={()=>setFullImage(false)}/>)
        }
        
        </div> 
      
        </div>
    
    </div>
    )

}

export default UploadProduct
 