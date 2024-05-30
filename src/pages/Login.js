import React, { useContext,  useEffect,  useState } from 'react'
import loginIcons from  "../assets/signin.gif"
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import Context from '../context'
import summeryApi from '../common'

// import { Navigate } from 'react-router-dom'



const Login =() => {



  const fetchData= useContext(Context)
  console.log("fetchdata",fetchData.fetchUserDetails())

  


 
  useEffect(()=>{
    // fetchData.fetchUserDetails()
    
  },[])

  

  
 

  const navigate= useNavigate();

  const [data,setData]=useState(
    {
      email:"",
      password:""
    }
  )

  const handleOnChange=(event)=>{
    const {name,value}=event.target
  
    setData((prev)=>{
      return{
        ...prev,
        [name]:value

      }
    })
   
  }
  
  const handleSumbit=async(e)=>{
    e.preventDefault()
   

   

    const response= await fetch(summeryApi.login.url,{
      method:summeryApi.login.method,
      mode:"no-cors",
      credentials:'include',
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify(data)
      
    })
    const dataResponse= await response.json()
  console.log(dataResponse);

    if (dataResponse.success) {
    toast.success("login succefully")
    await fetchData.fetchUserDetails()
   console.log("fetchedsuccessfully")
    navigate("/")
    
  }
  if (dataResponse.error) {
    toast(dataResponse.message)
    
  }

  }
  
  
  return (
    <section id='login'>
      <div className='max-auto contsiner  p-4 mt-8 bg-slate-100 h-screen '>
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
                name="email"
                value={data.email}
                onChange={handleOnChange}
                placeholder='name@addressgmail.com'
                className='w-full h-full outline-none bg-transparent bg-white'/>
              </div>
              
            </div>
            <div>
              <label>
                Passward
              </label>
              <div className='bg-slate-100 p-2'>
              <input 
              type='password'
              name="password"
              value={data.password}
              onChange={handleOnChange}
               placeholder='* * * * * *'
                className='w-full h-full outline-none bg-transparent'/>

              </div>
              
            </div>
            
            <Link to={'/forgot-password'} className='block w-fit ml-auto hover:underline text-red-600 hover:text-red-800'>Forgot password?</Link>
            
              
            <div className='mx-auto  flex justify-center'>
            <button className='bg-red-600 text-white px-6 rounded-full  mt-4 text-center py-1 hover:bg-red-700 hover:scale-110 transition-all' onClick={handleOnChange}>Login</button>
            <ToastContainer position='bottom-center'/>
            </div>

            <p className='my-5' >Don't have Account!?<Link to={"/signup"} className='text-red-600'>signup</Link></p>
        
            
          </form>

        </div>

      </div>
      
    </section>
  )
}

export default Login
