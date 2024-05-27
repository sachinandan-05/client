import React, { useContext, useEffect, useState } from 'react'
import "../index.css"
import Logo from './Logo.js'
import { CiSearch } from "react-icons/ci";

import { RiAccountCircleLine } from "react-icons/ri";
import { FaCartShopping } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { setUserDetails } from "../store/userSlice";
import summeryApi from '../common/index.js';
import ROLE from '../common/role.js';
import Context from '../context/index.js';
// import CountProduct from '../helpers/CountProduct.js';

const Header = ({fux}) => {
  const context= useContext(Context)
  // console.log("context",context)

 const a=context?.numberOfProduct
//  console.log("a",a)

const [search,setSearch] = useState()
const  navigate=useNavigate()
  
  useEffect(()=>{
    context.fetchProductInCart()
    
    
    
  })
 

  

  const dispatch=useDispatch()
  const user= useSelector(state=>state?.user.user)
  // console.log("users header:",user);
  const handleLogout=async()=>{
    const fetchLogout= await fetch(summeryApi.logOut.url,
    { method:summeryApi.logOut.method,
    credentials:'include'
    
    }
    )

    const response= await fetchLogout.json()
    console.log("logout fetched successfully",response)

    if (response.success) {
      toast.success(response.message)
      dispatch(setUserDetails(null))
    }
    if(response.error){
      toast.error(response.message)
    }
  }
  const handleSearch=(e)=>{
    const {value}=e.target
    setSearch(value)

    if(value){
      navigate(`/search?q=${value}`)
    }else{
      navigate("/search")
    }

  }
   
   
  
  return (
    <header className='h-16 shadow-md   w-full  z-40 bg-white fixed '>
      <div className='container-max h-full flex items-center w-100vh justify-between '>
          <div>
            <Link to={"/"}>
            <Logo h={50} w={100}/>

            </Link>
            
          </div>

          <div className='hidden  lg:flex w-full justify-between max-w-sm border rounded-full  focus-within:shadow-md pl-2'>
            <input type='text' placeholder='search' className=' w-full outline-none pl-2 bg-white rounded-md' onChange={handleSearch} value={search}/>
            <div className='text-xl min-w-[50px] h-9 bg-red-500 items-center pt-1 rounded-r-full flex justify-center cursor-pointer hover:bg-red-600 text-white text-bold '>
            <CiSearch />

            </div>
            

          </div>

          <div className='flex gap-7'>

           {user?._id && ( <div className='relative group flex justify-center '>
              <Link to={"/admin"}>
              <div className='text-4xl cursor-pointer h-10 w-10 rounded-full flex justify-center'>
                { user?.profilePic ? (<img className=' h-10 w-10 rounded-full' src={user?.profilePic} alt=''/>):(<RiAccountCircleLine size={40} />) }
              </div>
              
              </Link>
              
             {user?.role===ROLE.ADMIN && ( <div className=' absolute hidden group-hover:block rounded shadow-sm p-1 bottom-0 top-11 h-fit bg-slate-300 text-slate-400 hover:bg-slate-100 hover:text-slate-500'>
                <nav>
                  <Link to="/admin" className=' whitespace-nowrap'> Admin pannel</Link>
                </nav>
              </div>)}


            </div>)}
              
            {user?._id && (
               <Link to={'product/addedtocart'} className='text-3xl pt-2 flex relative cursor-pointer text-black'>
               <span >
                 <FaCartShopping />
               </span>
             <div className='text-white rounded-full bg-red-500 h-5 items-center flex justify-center w-5  absolute -top-1 -right-2'>
               <p className=' text-xs'>{context?.numberOfProduct}</p>
             </div>
           </Link>
            )}
             
            <div className='items-center '>
              {user?._id ? (
                    <button onClick={handleLogout} className='bg-red-600 text-white px-4 py-1 rounded-full text-center hover:bg-red-700 mr-1 '>logot</button>
              ):(
                <Link to={"/login"}>
                <button className='bg-red-600 text-white px-4 py-1 rounded-full text-center hover:bg-red-800  '>login</button>
                </Link>

              ) 
              }
                
              </div>

          
        </div>

    </div>
    </header>
  )
}

export default Header
