

const backendDomain="http://localhost:8080/api/v1"

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

        
    }
}

export default summeryApi 

