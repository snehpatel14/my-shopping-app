import React, { useState } from 'react';
import "./Slider.scss";
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import WestOutlinedIcon from '@mui/icons-material/WestOutlined';
import "./Slider.scss";

const Slider = () => {

    const [currentSlide, setCurrentSlide] = useState(0)
    
    const data = [
        "https://images.unsplash.com/photo-1507470621209-f8bae4a8b40e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTh8MzM1NDM0fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1544980919-e17526d4ed0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTl8MzM1NDM0fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1501959181532-7d2a3c064642?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MjB8MzM1NDM0fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    ]
    
    const prevSlide = () =>{
        setCurrentSlide(currentSlide === 0 ? 2: (prev) => prev - 1)
    };
    const nextSlide = () =>{
        setCurrentSlide(currentSlide === 2 ? 0: (prev) => prev + 1)
    
    };
        
  return (
    <div className="slider">
        <div className="container" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
            <img src={data[0]} alt="" />
            <img src={data[1]} alt="" />
            <img src={data[2]} alt="" />
        </div>
        <div className="icons">
            <div className="icon" onClick={prevSlide}>
                <WestOutlinedIcon/>
            </div>
            <div className="icon" onClick={nextSlide}>
                <EastOutlinedIcon/>
            </div>
        </div>
    </div>
  )
}

export default Slider
