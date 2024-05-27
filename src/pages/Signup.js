import React, { useRef, useState } from 'react'
import loginIcons from  "../assets/signin.gif"
import { Link, useNavigate} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import summeryApi from '../common'
import uploadImage_Cloudinary from '../helpers/UploadImage'
// import { json } from 'react-router-dom'
// import imageToBase64 from '../helpers/imageToBase64'


const Signup = () => {
  const [data,setData]=useState(
    {
      email:"",
      password:"",
      username:"",
      confirmPassword:"",
      profilePic:''
     
    }
  )
  console.log("signup details",data)
  console.log("profile image",data.profilePic)

  const handleImageUpload=async(evnt)=>{
    const file=evnt.target.files[0]
    // const {name,value}=evnt.target
    const uplodImage=  await uploadImage_Cloudinary(file)
    console.log("uploaded image",uplodImage.secure_url)
    const final_image=uplodImage.secure_url

    // setData(data.profilePic=final_image)
    
    setData((prev)=>{
      return {...prev,
          profilePic:final_image
      }
})

}
// console.log("productImage url",activeUrl)
  // console.log("url",summeryApi.signUP.url,summeryApi.signUP.method)

  const navigate= useNavigate()
  const inputRef=useRef(null)
  const handleClick=()=>{
    inputRef.current.click()

  }

  

  
  // const files =  uploadImage_Cloudinary()
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
      const response= await fetch(summeryApi.signUP.url,{
      method:summeryApi.signUP.method,
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify(data)
      
    })
    const dataResponse= await response.json()
      
    
      toast.success("signupsucessfully")
    
    
    navigate("/login")

    }
    
  }
 

  
    
      
    
    
  
  return (
    <section id='signup'>
      <div className='max-auto contsiner  p-4 mt-8 '>
        <div className='bg-white p-5 max-w-sm mx-auto mt-8 shadow-md'>
          <div className='  h-20 w-20 p-1mx-auto min-w-sm flex align-middle mx-auto rounded-full relative overflow-hidden '>
          <div onClick={handleClick}  className='h-20 w-20 '>
            {data.profilePic? (<img src={data.profilePic} className='object-fill h-full w-full rounded-full' onClick={handleImageUpload}alt='login img'/>):( <img src={(loginIcons)} alt='login icon'/>)}
          </div>
          <div className='absolute bg-slate-200 p-3 text-sm bottom-0 text-center w-full overflow-hidden opacity-75 cursor-pointer' onClick={handleClick}>
          
            <input type='file' 
            ref={inputRef} 
             accept="image/*"
             className=' opacity-0 absolute hover:cursor-pointer hidden' 
             name="profilePic" 
              onChange={handleImageUpload}/>upload
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
            <ToastContainer position='bottom-center'/>
            </div>

            <p className='my-5' >Already have Account!<Link to={"/login"} className='text-red-600'>Login</Link></p>
            
          </form>

        </div>

      </div>

    </section>
  )
}

export default Signup

