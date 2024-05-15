import React, { useRef, useState } from 'react'
import loginIcons from  "../assets/signin.gif"
import { Link, useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify'
import summeryApi from '../common'
// import { json } from 'react-router-dom'
// import imageToBase64 from '../helpers/imageToBase64'


const Signup = () => {


  const [file, setFile] = useState(null); 

  console.log("image",file)
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    console.log("file",e.target.files[0])
  };

  // console.log("url",summeryApi.signUP.url,summeryApi.signUP.method)

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
  const formDataWithImage = new FormData();
    formDataWithImage.append('username', data.username);
    formDataWithImage.append('email', data.email);
    formDataWithImage.append('password', data.password);   
    formDataWithImage.append('profilePic', file);
    

    const plainObject = {"profilePic":file};
for (const [key, value] of formDataWithImage.entries()) {
  plainObject[key] = value;
}

// Convert plain object to JSON
const jsonData = JSON.stringify(plainObject);

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
      body:jsonData
      
    })
    const dataResponse= await response.json()
      toast(dataResponse.message)
    
      toast.success( dataResponse.message)
    
    
    navigate("/login")

    }
    
  }
 

  // const handleUploadPic= async(e)=>{
  //   const file= e.target.files
  //   // const imagePic=URL.createObjectURL(file);
  //   // const imagePic= await imageToBase64(file)
    
    
  //   setData((prev)=>{
  //     return{
  //       ...prev,
  //     profilePic:file}

  // })
  
    
      
    
    
  
  return (
    <section id='signup'>
      <div className='max-auto contsiner  p-4 mt-8 '>
        <div className='bg-white p-5 max-w-sm mx-auto mt-8 shadow-md'>
          <div className='  h-20 w-20 p-1mx-auto min-w-sm flex align-middle mx-auto rounded-full relative overflow-hidden '>
          <div onClick={handleClick} onSubmit={handleFileChange} className='h-20 w-20 '>
            {data.profilePic? (<img src={data.profilePic} alt='login img'/>):( <img src={(loginIcons)} alt='login icon'/>)}
          </div>
          <div className='absolute bg-slate-200 p-3 text-sm bottom-0 text-center w-full overflow-hidden opacity-75 cursor-pointer' onClick={handleClick}>
          
            <input type='file' 
            ref={inputRef} 
             accept="image/*"
             className=' opacity-0 absolute hover:cursor-pointer hidden' 
             name="profilePic" 
              onChange={handleFileChange}/>upload
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

