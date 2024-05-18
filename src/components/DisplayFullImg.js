
import { IoIosCloseCircleOutline } from "react-icons/io";

const DisplayFullImg = ({ImgUrl ,onClose}) => {
  return (
    <div className=' absolute bottom-[calc(100px)] top-[calc(100px)] right-[] left-[clac(300px)] h-[calc(400px)]  rounded-lg'>
        
        <div className='max-w-[80vw] max-h-[80vh] bg-white '>
            <div className='w-fit relative bg-white'>
            <div className=' hover:cursor-pointer hover:text-red-500 h-fit flex right-0  top-0 absolute 'onClick={onClose}>
                <IoIosCloseCircleOutline size={40} />
            </div>
        <div className='bg-white rounded-lg '>
            
            <img src={ImgUrl} alt='product' width={200} />
           
        </div>


            </div>
        
         </div>
           
  
    </div>
  )
}

export default DisplayFullImg
