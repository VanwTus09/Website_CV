import { useEffect, useState } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Body from './components/Body';

function App() {
  const [activeBackground,setActiveBackground] = useState(0);
  const backgroundUrl = [
    "https://static.wixstatic.com/media/c837a6_238c2197e59148f5b6de4bab39d8ca50~mv2.png/v1/fill/w_1536,h_1584,q_90/c837a6_238c2197e59148f5b6de4bab39d8ca50~mv2.webp",
    "https://static.wixstatic.com/media/c837a6_d456d2657f6b4807b2592b99b12ae91e~mv2.png/v1/fill/w_768,h_792,q_90/c837a6_d456d2657f6b4807b2592b99b12ae91e~mv2.png",
    "https://static.wixstatic.com/media/c837a6_221e4310e9bc422cb8a38f39b09f8c76~mv2.png/v1/fill/w_768,h_792,q_90/c837a6_221e4310e9bc422cb8a38f39b09f8c76~mv2.png",
    "https://static.wixstatic.com/media/c837a6_57c417a5c4eb42059c0ac9c7cb8b9453~mv2.png/v1/fill/w_768,h_792,q_90/c837a6_57c417a5c4eb42059c0ac9c7cb8b9453~mv2.png"
  ]
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBackground((prev) => (prev === backgroundUrl.length - 1 ? 0 : prev + 1));
    }, 5000); // Thay đổi slide sau mỗi n giây

    return () => clearInterval(interval); // Dọn dẹp khi component bị hủy
  }, [backgroundUrl.length]);
  return (
    <>
      <div className="bg-cover text-white"  style={{ backgroundImage: `url(${backgroundUrl[activeBackground]})` }}>
        <div className='gap-10'>
        <Header/>
        <Body />
        <Footer/>
        
        </div>
      </div>
      
    </>
  )
}

export default App
