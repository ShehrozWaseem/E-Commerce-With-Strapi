import React, { useState } from 'react'
import './slider.scss'
const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const data = [
      "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ];

    const nextSlide = () => {
        setCurrentSlide(currentSlide === 2 ? 0 : currentSlide+1)
    }
    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 2 : currentSlide-1)
    }
  
  return (
    <div className="slider">
    <div className="container">
        {/* {data.map(item=>(
            <img src={item} alt="" />
        ))} */}
      {/* <img src={data[0]} alt="" />
      <img src={data[1]} alt="" />*/}
      <img src={data[currentSlide]} alt="" /> 
    </div>
    <div className="icons">
      <div className="icon" onClick={nextSlide}>
        {/* <WestOutlinedIcon /> */}
      </div>
      <div className="icon" onClick={prevSlide}>
        {/* <EastOutlinedIcon /> */}
      </div>
    </div>
  </div>
  )
}

export default Slider