"use client";
import React from "react";
import "./aboutUs.css";
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function AboutUs() {
  // settings that handle features of carousel by slack carousel
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    speed: 4000,
    cssEase: "linear",
    pauseOnHover: false,
    swipeToSlide: false,
    centerMode: true,
  };

  return (
    <section className="home_aboutAs">
      <div className="home_aboutAs_sliderToken">
        <Slider {...settings}>
          <div>
            <img
              style={{ width: "var(--500px)" }}
              src="/home/02about-us/sliderToken-2.svg"
            />
          </div>
          <div>
            <img
              style={{ width: "var(--500px)" }}
              src="/home/02about-us/sliderToken-1.svg"
            />
          </div>
          <div>
            <img
              style={{ width: "var(--500px)" }}
              src="/home/02about-us/sliderToken-1.svg"
            />
          </div>
          <div>
            <img
              style={{ width: "var(--500px)" }}
              src="/home/02about-us/sliderToken-2.svg"
            />
          </div>
        </Slider>
      </div>
      <div className="home_aboutAs_sliderToken">
        <Slider {...settings}>
          <div>
            <img
              style={{ width: "var(--500px)" }}
              src="/home/02about-us/sliderToken-2.svg"
            />
          </div>
          <div>
            <img
              style={{ width: "var(--500px)" }}
              src="/home/02about-us/sliderToken-1.svg"
            />
          </div>
          <div>
            <img
              style={{ width: "var(--500px)" }}
              src="/home/02about-us/sliderToken-1.svg"
            />
          </div>
          <div>
            <img
              style={{ width: "var(--500px)" }}
              src="/home/02about-us/sliderToken-2.svg"
            />
          </div>
        </Slider>
      </div>
      <h2>About Us</h2>
      <p>
        At Juice Box, we believe in empowering businesses to thrive in the
        digital age. As a leading provider of SaaS solutions and a full-service
        digital agency, we offer a unique blend of innovative technology and
        creative expertise to help you achieve your business goals.
      </p>
      <h3>Our Values</h3>
      <div className="home_aboutAs_values">
        {/* Start Card */}
        <div className="home_aboutAs_values_cardWapper">
          <div className="home_aboutAs_values_card">
            <p>
              Lorem ipsum dolor sit amet consectetur. Vivamusid pellentesque
              molestie donec quis. Sed ut vulputate ante
            </p>
          </div>

          <div className="home_aboutAs_values_card">
            <span>1</span>
            <p>
              <span>Integrity and</span>
              <span>Transparency</span>
            </p>
          </div>
        </div>
        {/* End Card */}
        {/* Start Card */}
        <div className="home_aboutAs_values_cardWapper">
          <div className="home_aboutAs_values_card">
            <p>
              Lorem ipsum dolor sit amet consectetur. Vivamusid pellentesque
              molestie donec quis. Sed ut vulputate ante
            </p>
          </div>

          <div className="home_aboutAs_values_card">
            <span>1</span>
            <p>
              <span>User-Centric</span>
              <span>Innovation</span>
            </p>
          </div>
        </div>
        {/* End Card */}
        {/* Start Card */}
        <div className="home_aboutAs_values_cardWapper">
          <div className="home_aboutAs_values_card">
            <p>
              Lorem ipsum dolor sit amet consectetur. Vivamusid pellentesque
              molestie donec quis. Sed ut vulputate ante
            </p>
          </div>

          <div className="home_aboutAs_values_card">
            <span>1</span>
            <p>
              <span>Excellence in</span>
              <span>Execution</span>
            </p>
          </div>
        </div>
        {/* End Card */}
      </div>
    </section>
  );
}
