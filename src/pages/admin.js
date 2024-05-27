import React, { useEffect }  from 'react'
// import Context from '../context'
import { useSelector } from 'react-redux'
import { RiAccountCircleLine } from "react-icons/ri";
import { Link, Outlet, useNavigate } from 'react-router-dom';
import ROLE from '../common/role';
const Admin = () => {

  const user= useSelector(state=>state?.user.user)
  const navigate= useNavigate()

  useEffect(()=>{
    if (user?.role!==ROLE.ADMIN) {
      navigate("/")
      
    }
        },[user])
  
  
  return (
    <div className='min-h-[calc(100vh-120px)]  w-full flex scrollbar-none'>

      <div className=' min-h-[calc(100vh-110px)] max-w-100 p-3 bg-slate-200 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]'>
          <div className='text-4xl cursor-pointer h-30 w-40 rounded-full flex justify-center  text-black '>
              { user?.profilePic ? (<img className='backdrop-brightness-125 bg-white/30 p-0.5 h-20 w-20 rounded-full' src={user?.profilePic} alt=''/>):(<div className='backdrop-brightness-125 bg-white/30 p-0.5 h-20 w-20 rounded-full items-center flex justify-center'>< RiAccountCircleLine size={85} fontSize={1}/></div>) }
          </div>
          <div className='text-center capitalize font-serif mt-1  text-black '>
            {user?.username}
          </div>
          <div className='text-center capitalize font-serif font-[1px] mt-1 shadow-sm  text-black '>
            {user?.role}
          </div>
          <div  className='text-center font-semibold my-2 p-2 hover:text-red-400 hover:bg-slate-300 rounded shadow-sm  text-black '>
            <Link to={"/"}>Home</Link>
          </div>
          <div className='text-center font-semibold my-2 p-2 hover:text-red-400 hover:bg-slate-300 rounded shadow-sm  text-black '>
            <Link to={"allusers"}>All users</Link>
          </div>
          
          <div className='text-center font-semibold my-1 p-2 hover:text-red-400 hover:bg-slate-300 rounded shadow-sm  text-black '>
            <Link to={"allproducts"}>Products</Link>
          </div>
          <div className='text-center font-semibold my-1 p-2 hover:text-red-400 hover:bg-slate-300 rounded shadow-sm  text-black '>
            Setting
          </div>
      </div>
      <div>
        <Outlet/>
        
      </div>
      
    </div>
  )
}

export default Admin
