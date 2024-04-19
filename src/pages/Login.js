import React, { useState } from 'react'
import loginIcons from  "../assest/signin.gif"
import { Link } from 'react-router-dom'


const Login = () => {

  const [data,setData]=useState(
    {
      email:"",
      password:""
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
    <section id='login'>
      <div className='max-auto contsiner  p-4 mt-8 '>
        <div className='bg-white p-5 max-w-sm mx-auto mt-8 shadow-md'>
          <div className='mx-auto w-20 h-20 '>
            <img src={ loginIcons} alt='login icon'/>
          </div>
          <form className='pt-4' onSubmit={handleSumbit}>
            <div className='grid gap-2'>
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
              
            </div>
            <div>
              <label>
                Passward
              </label>
              <div className='bg-slate-100 p-2'>
              <input 
              type='password'
              name='password'
              value={data.password}
              onChange={handleOnChange}
               placeholder='* * * * * *'
                className='w-full h-full outline-none bg-transparent'/>

              </div>
              
            </div>
            
            <Link to={'/forgot-password'} className='block w-fit ml-auto hover:underline text-red-600 hover:text-red-800'>Forgot password?</Link>
            
              
            <div className='mx-auto  flex justify-center'>
            <button className='bg-red-600 text-white px-6 rounded-full  mt-4 text-center py-1 hover:bg-red-700 hover:scale-110 transition-all'>Login</button>
            </div>

            <p className='my-5' >Don't have Account!?<Link to={"/signup"} className='text-red-600'>signup</Link></p>
            
          </form>

        </div>

      </div>

    </section>
  )
}

export default Login
