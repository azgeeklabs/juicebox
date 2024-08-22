"use client";
import React from "react";
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image from "@/public/assets/companyLogo1.png";
import image1 from "@/public/assets/companyLogo2.png";

export default function LogosSlider() {
  // settings that handle features of carousel by slack carousel
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
    swipeToSlide: false,
    centerMode: true,
  };
  return (
    <Slider {...settings}>
      <div>
        <img src={image.src} alt="companyLogo" />
      </div>
      <div>
        <img src={image1.src} alt="companyLogo" />
      </div>
      <div>
        <img src={image.src} alt="companyLogo" />
      </div>
      <div>
        <img src={image1.src} alt="companyLogo" />
      </div>
      <div>
        <img src={image.src} alt="companyLogo" />
      </div>
      <div>
        <img src={image1.src} alt="companyLogo" />
      </div>
      <div>
        <img src={image.src} alt="companyLogo" />
      </div>
      <div>
        <img src={image1.src} alt="companyLogo" />
      </div>
      <div>
        <img src={image.src} alt="companyLogo" />
      </div>
      <div>
        <img src={image1.src} alt="companyLogo" />
      </div>
    </Slider>
  );
}

// function LogosSlider() {
//   const settings = {
//     dots: true,
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     speed: 2000,
//     autoplaySpeed: 2000,
//     cssEase: "linear"
//   };
//   return (
//     <div className="slider-container">
//       <Slider {...settings}>
//         <div>
//           <h3>1</h3>
//         </div>
//         <div>
//           <h3>2</h3>
//         </div>
//         <div>
//           <h3>3</h3>
//         </div>
//         <div>
//           <h3>4</h3>
//         </div>
//         <div>
//           <h3>5</h3>
//         </div>
//         <div>
//           <h3>6</h3>
//         </div>
//       </Slider>
//     </div>
//   );
// }

// export default LogosSlider;
