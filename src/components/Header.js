import React from 'react'
import "../index.css"
import Logo from './Logo.js'
import { CiSearch } from "react-icons/ci";

import { RiAccountCircleLine } from "react-icons/ri";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from 'react-router-dom';



const Header = () => {
  return (
    <header className='h-16 shadow-md bg-white'>
      <div className='container-max-auto h-full flex items-center px-4 justify-between '>
          <div>
           <Link to={"/"}>
           <Logo h={50} w={100}/>

           </Link>
            
          </div>

          <div className='hidden  lg:flex w-full justify-between max-w-sm border rounded-full focus-within:shadow-md pl-2'>
            <input type='text' placeholder='search' className=' w-full outline-none pl-2 '/>
            <div className='text-xl min-w-[50px] h-9 bg-red-400 items-center pt-1 rounded-r-full flex justify-center '>
            <CiSearch />

            </div>
            

          </div>

          <div className='flex gap-7'>
              <div className='text-4xl'>
                <RiAccountCircleLine />
              </div>
              <div className='text-3xl pt-2 flex relative'>
                <span>
                  <FaCartShopping />
                </span>

              <div className='text-white rounded-full bg-red-500 h-5 items-center flex justify-center w-5  absolute -top-1 -right-2'>
                <p className=' text-xs'>0</p>
              </div>

              
          
            </div>
            <div className='items-center '>
               <Link to={"/login"}>
               <button className='bg-red-600 text-white px-4 py-1 rounded-full text-center hover:bg-red-800  '>login</button>
               </Link>
              </div>

          
        </div>

    </div>
    </header>
  )
}

export default Header
