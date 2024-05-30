

const backendDomain="https://z-cart-server.vercel.app//api/v1"

const summeryApi={
    signUP : {
        url : `${backendDomain}/user/signup`,
        method : "post"
    },
    login:{
        url:`${backendDomain}/user/login`,
        method:`POST`
    },
    logOut:{
        url:`${backendDomain}/user/logout`,
        method:'get'
    },
    updateUser:{
        url:`${backendDomain}/user/updateusers`,
        method:"post"
    },
    alluser:{
        url:`${backendDomain}/user/allusers`,
        method:"get"
    },
    uploadProduct:{
        url:`${backendDomain}/product/uploadproduct`,
        method:"post"
    },
    allProductsDetail:{
        url:`${backendDomain}/product/allproduct`,
        method:"get"

    },
    updateproductdetail:{
        url:`${backendDomain}/product/updateProduct`,
        method:"post"


    },
    deleteProduct:{
        url:`${backendDomain}/product/deleteproduct`,
        method:"delete"

        
    },
    getProductCatogryWise:{
        url:`${backendDomain}/product/getaproduct`,
        method:"get"

        
    },
    getListOfproductCatogryWise:{
        url:`${backendDomain}/product/getalistofproductcatogrywise`,
        method:"post"

        
    },
    productDetails:{
        url:`${backendDomain}/product/productdetails`,
        method:"post"

        
    },
    searchProduct:{
        url:`${backendDomain}/product/search`,
        method:"get"
    }
    ,
    filterproduct:{
        url:`${backendDomain}/product/filter`,
        method:"post"
    },
    
    
    numberOfProduct:{
        url:`${backendDomain}/cart/numberofproduct`,
        method:"get"
    }
    ,
    updateCartProduct:{
        url:`${backendDomain}/cart/updatecartproduct`,
        method:"post"
    }
    ,
    deleteFromCart:{
        url:`${backendDomain}/cart/delete-from-cart`,
        method:"delete"
    }
    ,
    addtocart:{
        url:`${backendDomain}/cart/addtocart`,
        method:"post"
    }
    ,
    countCartProduct:{
        url:`${backendDomain}/cart//countCartProduct`,

    }
}

export default summeryApi 

