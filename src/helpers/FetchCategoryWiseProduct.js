import React from 'react'
import summeryApi from '../common'


const FetchCategoryWiseProduct = async(catogry) => {

    // console.log("fetching start")
    const requestedData= JSON.stringify({
        catogry:catogry})

    //    console.log("body",requestedData)

    const response = await fetch(summeryApi.getListOfproductCatogryWise.url,{
        method:"POST",
        // credentials:'include',
        headers : {
            "content-type" : "application/json"
        },
        body:requestedData
    })
   
    const responseData= await response.json()
    // console.log("fetching end")

   
  return (
   responseData
  )
}

export default FetchCategoryWiseProduct
