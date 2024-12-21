import { useEffect, useState } from "react"

const Body = () => {
    const [activeImages,setActiveImages] = useState(0);
    const ImageUrl = [
        "https://static.wixstatic.com/media/c837a6_1a32beb1b88c40f2a63872d101e9a454~mv2.jpg/v1/fill/w_395,h_395,q_90/c837a6_1a32beb1b88c40f2a63872d101e9a454~mv2.jpg",
        "https://static.wixstatic.com/media/c837a6_213cbaa5620b488995b8e8587e948c95~mv2.png/v1/fill/w_395,h_395,q_90/c837a6_213cbaa5620b488995b8e8587e948c95~mv2.png",
        "https://static.wixstatic.com/media/c837a6_1280d46ba8ca45b3a79e44dcb436205e~mv2.png/v1/fill/w_395,h_395,q_90/c837a6_1280d46ba8ca45b3a79e44dcb436205e~mv2.png",
        "https://static.wixstatic.com/media/c837a6_2dc9ab10015240648bc2922e5b566738~mv2.png/v1/fill/w_395,h_395,q_90/c837a6_2dc9ab10015240648bc2922e5b566738~mv2.png"
    ]
    useEffect(() =>{
        const interval = setInterval(() =>{
        setActiveImages((prev) => (prev === ImageUrl.length - 1 ? 0 : prev + 1))    
    },5000); 
    return () => clearInterval(interval)
    },[ImageUrl.length])
  return (
    <div className="relative w-full h-full mx-auto my-10">
    <div 
        style={{
            backgroundImage: `url(${ImageUrl[activeImages]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "450px",
            height: "400px",
            margin: "0 auto",
            minWidth : "290px"
        }}
    ></div>
               <div
    className="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-center lg:text-[400px]  sm:text-[200px] text-[110px]"
   
  >
    vantus
  </div>

</div>
  )
}

export default Body