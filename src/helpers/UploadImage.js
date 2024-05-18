import { toast } from "react-toastify";



const uploadImage_Cloudinary = async (image) => {
    // const [image, setImage] = useState('');
    // const [url, setUrl] = useState('');
    const url=`https://api.cloudinary.com/v1_1/dna2fhyac/image/upload`
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "ecom_product");
    data.append("cloud_name", "dna2fhyac");

    try {
        if(image === null){
        return toast.error("Please Upload image")
        }

        const res = await fetch(url,{
        method : "POST",
        body : data
        })

        const cloudData = await res.json();

    
        
        console.log(cloudData.url);
        toast.success("Image Upload Successfully")

        console.log("cloudData",cloudData.url)
        return cloudData
    } catch (error) {
        
    }
    }

    export default uploadImage_Cloudinary