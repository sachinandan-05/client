import React, { useState } from 'react'
import loginIcons from  "../assest/signin.gif"
import { Link } from 'react-router-dom'


const Signup = () => {

  const [data,setData]=useState(
    {
      email:"",
      password:"",
      name:"",
      confirmPassword:"",
      profilePic:""
    }
  )

  const handleOnChange=(e)=>{
    const {name,value}=e.target
    setData((prev)=>{
      return{
        ...prev,
      [name]:value
      }
    })

  }
  const handleSumbit=(e)=>{
    e.preventDefault()

  }
  console.log("data login",data)
  
  return (
    <section id='signup'>
      <div className='max-auto contsiner  p-4 mt-8 '>
        <div className='bg-white p-5 max-w-sm mx-auto mt-8 shadow-md'>
          <div className=' bg-red-300 h-25 w-20 p-1mx-auto min-w-sm flex align-middle mx-auto rounded-full relative overflow-hidden'>
          <div >
            <img src={ loginIcons} alt='login icon'/>
          </div>
          <div className='absolute bg-slate-200 p-3 text-sm bottom-0 text-center w-full overflow-hidden opacity-75 cursor-pointer' >
            <input type='file' className=' opacity-0 absolute hover:cursor-pointer'/>upload
          </div>

          </div>
          
          <form className='pt-4' onSubmit={handleSumbit}>
            <div className='grid gap-2'>
            <label>
              User Name
              </label>
              <div className='bg-slate-100 p-2 flex'>
                
                <input 
                type='text' 
                placeholder='sachii'
                name='name'
                value={data.name}
                onChange={handleOnChange}
                className='w-full h-full outline-none bg-transparent'/>
              </div>
              <label>
              Email
              </label>
              <div className='bg-slate-100 p-2 flex'>
                
                <input 
                type='email' 
                placeholder='name@addressgmail.com'
                name='email'
                value={data.email}
                onChange={handleOnChange}
                className='w-full h-full outline-none bg-transparent'/>
              </div>
              <label>
                Passward
              </label>
             
            
            <div>
              
              <div className='bg-slate-100 p-2'>
              <input 
              type='password'
              name='password'
              value={data.password}
              onChange={handleOnChange}
               placeholder='* * * * * *'
              className='w-full h-full outline-none bg-transparent'/>
              </div>
              <label>Confirm password</label>
              <div className='bg-slate-100 p-2'>
              <input 
              type='password'
              name='confirmPassword'
              value={data.confirmPassword}
              onChange={handleOnChange}
               placeholder='* * * * * *'
               className='w-full h-full outline-none bg-transparent'/>

              </div>
            </div>
              
            </div>
            
            
            
              
            <div className='mx-auto  flex justify-center'>
            <button className='bg-red-600 text-white px-6 rounded-full  mt-4 text-center py-1 hover:bg-red-700 hover:scale-110 transition-all'>Sign Up</button>
            </div>

            <p className='my-5' >Already have Account!<Link to={"/login"} className='text-red-600'>Login</Link></p>
            
          </form>

        </div>

      </div>

    </section>
  )
}

export default Signup

