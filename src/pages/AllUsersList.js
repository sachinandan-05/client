import React, { useEffect, useState } from 'react'
import moment from "moment"
import { MdModeEdit } from "react-icons/md";
import ChangeUser from '../components/ChangeUser';
const AllUsersList = () => {

    const [openChangeUser,setOpenchangeUser]=useState(false)

    const [updateUserDetails,setUpdateUserDetails]=useState({
        email:"",
        username:"",
        role:'',
        _id:''
    })
    console.log("userss",updateUserDetails);
    const openAlluser=()=>{
        setOpenchangeUser((e)=>!e)
    }
    useEffect(()=>{
                fetchAllUsers()
            },[])
    const [allUsers,setallUsers]=useState([])

    const fetchAllUsers= async ()=>{
                const response = await fetch("http://localhost:8080/api/v1/user/allusers",{
                    method:"get",
                    credentials:'include'

        
                })
                const dataResponse= await response.json()
                if(dataResponse.success){
                    setallUsers(dataResponse.data)
                    // console.log("userslist:",allUsers)
                    // console.log("data",dataResponse)
                }

            }
return (
    <div className='relative  h-screen'>


        <div>
        <div className="relative overflow-hidden shadow-md rounded-lg">
    <table className="table-fixed w-full text-left">
        <thead className=" bg-black text-white " >
            <tr>
                <td className="py-0 border text-center font-bold p-4" contenteditable="true">Sr.</td>
                <td className="py-0 border text-center font-bold p-4" contenteditable="true">User Name</td>
                <td className="py-0 border text-center font-bold p-4" contenteditable="true">Email</td>
                <td className="py-0 border text-center font-bold p-4" contenteditable="true">Role</td>
                <td className="py-0 border text-center font-bold p-4" contenteditable="true">Created Date</td>
                <td className="py-0 border text-center font-bold p-4" contenteditable="true">Edit</td>
            </tr>
        </thead>
        <tbody className="bg-white text-black-500 " >
        { allUsers.map((e,i)=>(
     
     <tr className="py-2">
     <td className="py-2 border text-center  p-4" contenteditable="true">{i+1}</td>
     <td className="py-2 border text-center  p-4" contenteditable="true">{e.username}</td>
     <td className="py-2 border text-center  " contenteditable="true">{e.email}</td>
     <td className="py-2 border text-center  p-4" contenteditable="true">{e.role}</td>
     <td className="py-2 border text-center  p-4" contenteditable="true">{moment(e?.createdAt).format('LL')}</td>
     <td className="py-2 border text-center  " contenteditable="true">
        <button className='bg-green-200 rounded-full p-2 hover:bg-green-500 hover:text-white' onClick={()=>{
            setUpdateUserDetails(e)
            openAlluser()
        }}>
            
            <diV>
            <MdModeEdit/>
            </diV>
        </button>
        
        </td>


     
    
 </tr>
       
        
                                ))}

            
        </tbody>
        
    </table>
</div>
        </div>
        <div className='' >
        <div className=' text-center'>
            {
                    openChangeUser && ( < ChangeUser onClose={()=>setOpenchangeUser(false)}
                    username={updateUserDetails.username}
                    email={updateUserDetails.email}
                    role={updateUserDetails.role}
                    _id={updateUserDetails._id}
                    callfux={fetchAllUsers}/>)

            }
        
        </div>
        </div>
        
        

    </div> 
        )
}

export default AllUsersList














// 
// import { MdOutlineEdit } from "react-icons/md";

// const AllUsersList = () => {

    
//     useEffect(()=>{
//         fetchAllUsers()
//     },[])
//     
//     
            
            
            
//             )
//         }
        
//     return (
//         <>
//          all users
        
//         </>
    

//     )
// }
// }

// export default AllUsersList
