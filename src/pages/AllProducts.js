import React, { useState } from 'react'
import UploadProduct from '../components/UploadProduct'

const AllProducts = () => {
    const [uploadProduct,setUploadProduct]=useState(false)
    
    
    return (
    <div >
        <div className=' absolute right-0 bottom-10 left-[calc(180px)] top-[calc(67px)] '>

        <div className='bg-blue-100 flex justify-between max-w-7xl w-full mx-2 shadow-md p-2 rounded-md'>
<div>
    All products
</div>
<div className=' rounded-full border-solid border-red-800 border-spacing-2 border-2 p-2 hover:cursor-pointer hover:bg-blue-600  hover:text-white transition duration-400 ease-in-out '>
    <button onClick={()=>setUploadProduct(true)}>
        upload products
    </button>
</div>

</div >
<>
{uploadProduct && ( <UploadProduct onClose={()=>setUploadProduct(false)} />)}
</> 

        </div>
    </div>
    )
}

export default AllProducts




