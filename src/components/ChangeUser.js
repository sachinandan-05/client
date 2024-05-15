import React, { useState } from 'react'
import ROLE from '../common/role'
import { IoIosCloseCircleOutline } from "react-icons/io";
// import { useNavigate } from 'react-router-dom';
import summeryApi from '../common/index.js';
import { toast } from 'react-toastify';

const ChangeUser = ({username,email,role,onClose,_id,callfux}) => {

  // const navigate= useNavigate()
  

  const[userrole,setuserrole]=useState(role)
  const handleRoleChange=(e)=>{
    setuserrole(e.target.value)
    
    console.log("value",e.target.value)
    // console.log("setrole",setuserrole)
  

  }
  const updateUserRole=async()=>{
    const response=await fetch(summeryApi.updateUser.url,{
      method:summeryApi.updateUser.method,
      credentials:'include',
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify({
        userId:_id,
        role:userrole
      })
      
    })
    const resposeData= await response.json()
    console.log("responseDara",resposeData)
    if (resposeData.success) {
      toast.success(resposeData.message)
      onClose()
      callfux()

      
    }
  }

  return (
    <div className='fixed top-0 bottom-0 left-0 right-0 w-full h-full flex justify-between items-center opacity-125 bg-opacity-60 bg-slate-200 z-10'>
      <div className=' h-[300px] w-[500px] mx-auto py-3  ml-[500px] shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] z-20'>
          <div className='text-right flex justify-end pr-3'>
          <IoIosCloseCircleOutline size={35} onClick={onClose}/>
          </div>
          <div className='text-pretty mx-auto pl-12 gap-2'>
          <h1>change user profile</h1>
          <p>name:{username}</p>
        <p>Email:{email}</p>
        <p>Role</p>
      <select value={userrole} onChange={handleRoleChange}>
      
            {
              Object.values(ROLE).map((el,i)=>(
                <option value={el} key={i}>{el}</option>
              ))
            }
      </select>

      </div>
        <button class="font-bold rounded-lg text-sm p-2 hover:bg-red-700 hover:text-white  w-25 h-10 bg-[#d5382d]  justify-center" onClick={updateUserRole}>Change role</button>
        
        </div>
    </div>
  )
}

export default ChangeUser
