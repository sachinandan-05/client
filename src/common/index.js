

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
    }
}

export default summeryApi 

