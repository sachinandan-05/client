import React, { useEffect, useState } from "react";
import UploadProduct from "../components/UploadProduct";
import summeryApi from "../common";
import AdminProductCard from "../components/AdminProductCard";

const AllProducts = () => {
  const [uploadProduct, setUploadProduct] = useState(false);

  const [allProduct, setAllProduct] = useState([]);
  // console.log(products)
  useEffect(() => {
    productsDetails();
  }, []);

  const productsDetails = async () => {
    const response = await fetch(summeryApi.allProductsDetail.url, {
      credentials: "include",
      method: "get",
    });
    let responseData = await response.json();
    console.log("response data:", responseData);
    setAllProduct(responseData?.data);
  };

  return (
    <div>
      <div className=' absolute right-0 bottom-10 left-[calc(179px)] top-[calc(67px)] object-contain'>
        <div className='bg-slate-200 flex justify-between max-w-8xl w-full mx-1  shadow-md p-2 '>
          <div className="text-black font-bold">All products</div>
           <div className=' rounded-full border-solid border-red-800 border-spacing-2 border-2 p-2 hover:cursor-pointer  text-white hover:bg-red-700  bg-red-600 transition duration-400 ease-in-out '>
            <button onClick={() => setUploadProduct(true)}>
                upload products
            </button>
          </div>
          
        </div>
        <div className="   w-[calc(1300px)] h-[calc(540px)]  gap-3 p-3 object-fill  absolute flex flex-wrap  overflow-y-scroll scrollbar-none"> 
       
        {
          allProduct.map((element,index)=>(
            <AdminProductCard productData={element} key={index} fetchproduct={productsDetails}/>

          ))
}
        
       </div>
       
       
        
        <>
          {uploadProduct && (
            <UploadProduct fetchproduct={productsDetails} onClose={() => setUploadProduct(false)} />
          )}
        </>
      </div>
    </div>
  );
};

export default AllProducts;
