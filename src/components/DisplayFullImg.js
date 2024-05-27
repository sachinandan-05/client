
import { IoIosCloseCircleOutline } from "react-icons/io";

const DisplayFullImg = ({ImgUrl ,onClose}) => {
  return (
    <div className=' absolute bottom-[calc(100px)] top-[calc(100px)] right-[] left-[clac(300px)] h-[calc(400px)]  rounded-lg z-20'>
        
        <div className='max-w-[80vw]   '>
            <div className='w-fit relative '>
            <div className=' hover:cursor-pointer hover:text-red-500 h-fit flex right-0  top-0 absolute 'onClick={onClose}>
                <IoIosCloseCircleOutline size={40} />
            </div>
        <div className='bg-blue-200 rounded-xl max-h-[calc(500px)] object-contain overflow-x-auto ' >
            
          <img src={ImgUrl} height={5} width={300} className="object-contain" />
           
        </div>


            </div>
        
         </div>
           
  
    </div>
  )
}

export default DisplayFullImg
