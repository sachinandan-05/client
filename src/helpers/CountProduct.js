import summeryApi from "../common"


const CountProduct = async() => {
    const response= await fetch(summeryApi.countCartProduct.url,{
        credentials:"include"

    })
    const dataresponse= await response.json()
    // console.log("numberOfProduct",dataresponse.data)
    return(
        dataresponse.data
    )


}

export default CountProduct