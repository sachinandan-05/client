import React from 'react'
// import { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProductCatogry from '../components/ProductCatogry';
import Banner from '../components/Banner';
import HorizontalCardProduct from '../components/HorizontalCardProduct';
import VerticalProductCard from '../components/VerticalPtoductCard';



const Home = () => {

  
    return (
        <div className='scrollbar-none  '>
          <ToastContainer closeOnClick position='bottom-center' />

          <ProductCatogry/>
          <Banner/>
          <VerticalProductCard catogry={"mobiles"} heading={"Top's Mobiles"}/>
          <VerticalProductCard catogry={"camera"} heading={"Top's Camera"}/>
        
         
          <HorizontalCardProduct catogry={"trimmers"} heading={"Trimmers"}/>
          <HorizontalCardProduct catogry={"mobiles"} heading={"Top's Mobiles"}/>
          <HorizontalCardProduct catogry={"televisions"} heading={" Telivisions"}/>
          <HorizontalCardProduct catogry={"watches"} heading={" Watches"}/>
          <HorizontalCardProduct catogry={"refrigerator"} heading={"Refregerator"}/>
          <HorizontalCardProduct catogry={"Mouse"} heading={"Mouse"}/>
          <HorizontalCardProduct catogry={"printers"} heading={" printers"}/>
          <HorizontalCardProduct catogry={"processor"} heading={"Processor"}/>
          <HorizontalCardProduct catogry={"earphones"} heading={"Earphones"}/>
          <HorizontalCardProduct catogry={"airpodes"} heading={"Airpodes"}/>
          <HorizontalCardProduct catogry={"speakers"} heading={"Airpodes"}/>
         
    
        </div>
    )
}

export default Home
