

const CountProduct = async() => {
    const response= await fetch("http://localhost:8080/api/v1/cart//countCartProduct",{
        credentials:"include"

    })
    const dataresponse= await response.json()
    // console.log("numberOfProduct",dataresponse.data)
    return(
        dataresponse.data
    )


}

export default CountProduct
