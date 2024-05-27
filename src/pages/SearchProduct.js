import React, { useEffect, useState } from 'react'
import summeryApi from '../common'
import { useLocation } from 'react-router-dom'
import SearchCard from './SearchCard'

const SearchProduct = () => {

    const[data,setData]=useState([])
    const [loading,setLoading]=useState(false)
    const query=useLocation()
    console.log("querry",query.search
    )

    const fetchsearchedProduct=async()=>{
        const response=await fetch(summeryApi.searchProduct.url+query.search
            )
        const dataResponse= await response.json()
        console.log( "data",dataResponse.data)
        setData(dataResponse.data)
    }
    useEffect(()=>{fetchsearchedProduct()},[query])
   
  return (
    <div className='container mx-auto p-4'>
    {
      loading && (
        <p className='text-lg text-center'>Loading ...</p>
      )
    }

    <p className='text-lg font-semibold my-3'>Search Results : {data.length}</p>

    {
      data.length === 0 && !loading && (
         <p className='bg-white text-lg text-center p-4'>No Data Found....</p>
      )
    }


    {
      data.length !==0 && !loading && (
        <SearchCard loading={ loading} data={data}/>
      )
    }

  </div>
  )
}

export default SearchProduct
