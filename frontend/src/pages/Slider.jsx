import React, { useState, useEffect } from "react";
import "../pages/Slider.css";
import { Link } from "react-router-dom";
import image1 from "../assets/images/slider/hero-1.jpg";
import image2 from "../assets/images/slider/hero-2.jpg";
import image3 from "../assets/images/slider/hero-3.jpg";

function Slider() {
  const [slide, setSlide] = useState(0);

  const arr = [
    { url: image1, price: "$99" },
    { url: image2, price: "$129" },
    { url: image3, price: "$89" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((slide + 1) % arr.length);
      // console.log(setSlide);
    }, 2000); 

    return () => clearInterval(interval); //unmounting the setinterval here
  }, [slide]); // Re-run the depensency  effect whenever slide changes

  const previous = (e) => {
    e.preventDefault();
    setSlide(slide === 0 ? arr.length - 1 : slide - 1);
  };

  const next = (e) => {
    e.preventDefault();
    setSlide(slide==arr.length-1 ?  0 : slide + 1);

  };

  return (
    <div className="slider-container">
      <div className="slider">
        <img src={arr[slide].url} alt="" key={slide} width="100%" />
        <div className="price-heading">{arr[slide].price}</div>
        <div className="price-title"><p>Get  Up to 30%</p>
         <p>  Off on All Products</p>
        </div>
        <div className="price-tag">
          <Link to={"/shop"} className="shop-btn">SHOP NOW</Link>
        </div>
      
      </div>
      <div className="slider-buttons">
        <div className="left-button">
          <button className="prev" onClick={previous}>
            <i className="fa fa-arrow-left" aria-hidden="true"></i>
          </button>
        </div>
        <div className="right-button">
          <button className="next" onClick={next}>
            <i className="fa fa-arrow-right" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Slider;






