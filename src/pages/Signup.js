import React, { useRef, useState } from 'react'
import loginIcons from  "../assest/signin.gif"
import { Link, useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify'
// import summeryApi from '../common'
// import { json } from 'react-router-dom'
// import imageToBase64 from '../helpers/imageToBase64'


const Signup = () => {

  const navigate= useNavigate()
  const inputRef=useRef(null)
  const handleClick=()=>{
    inputRef.current.click()
  }

  const [data,setData]=useState(
    {
      email:"",
      password:"",
      username:"",
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
  const handleSumbit=async(e)=>{
    e.preventDefault()
    
    if (!(data.password===data.confirmPassword)) {
      console.log("password and confirm password is not match please re enter!!")

      toast("password and confirm password not match please re-enter!!")
    }else{
      const response= await fetch("http://localhost:8080/api/v1/user/signup",{
      method:"POST",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify(data)
      
    })
    const dataResponse= await response.json()
      toast(dataResponse.message)
    const dataResponse1= await JSON.stringify(dataResponse)
      toast.success( dataResponse.message)
    // console.log("data",dataResponse);
    console.log("data",dataResponse1);
    // console.log("data",dataResponse.message);
    
    navigate("/login")

    }
    
  }
  // console.log("data login",data)

  const handleUploadPic= async(e)=>{
    const file= e.target.files[0]
    const imagePic=URL.createObjectURL(file);
    // const imagePic= await imageToBase64(file)
    
    
    setData((prev)=>{
      return{
        ...prev,
      profilePic:imagePic}

  })
  console.log(data.profilePic)
    
      
    }
    
  
  return (
    <section id='signup'>
      <div className='max-auto contsiner  p-4 mt-8 '>
        <div className='bg-white p-5 max-w-sm mx-auto mt-8 shadow-md'>
          <div className='  h-20 w-20 p-1mx-auto min-w-sm flex align-middle mx-auto rounded-full relative overflow-hidden '>
          <div onClick={handleClick} onSubmit={handleUploadPic} className='h-20 w-20 '>
            {data.profilePic? (<img src={data.profilePic} alt='login img'/>):( <img src={(loginIcons)} alt='login icon'/>)}
          </div>
          <div className='absolute bg-slate-200 p-3 text-sm bottom-0 text-center w-full overflow-hidden opacity-75 cursor-pointer' onClick={handleClick}>
          
            <input type='file' ref={inputRef} className=' opacity-0 absolute hover:cursor-pointer hidden' name="profilePic"  onChange={handleUploadPic}/>upload
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
                name='username'
                value={data.username}
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

