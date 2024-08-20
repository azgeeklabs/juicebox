"use client";
import React from "react";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./clientReviews.css";
import Slider from "react-slick";
import image from "@/public/assets/companyLogo1.png";
import image1 from "@/public/assets/companyLogo2.png";

export default function ClientReviews() {
  // settings that handle features of carousel by slack carousel
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: true,
    speed: 8000,
    cssEase: "linear",
    pauseOnHover: true,
    swipeToSlide: true,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <section className="home_clientReviews">
      <div className="home_clientReviews_title">
        <h2>Client Reviews</h2>
      </div>

      <div className="home_clientReviewsWrapper">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          doloremque quisquam et ratione quod aspernatur saepe asperiores facere
          rerum ex eaque dolore, laborum quis iure delectus eum tempore incidunt
          itaque.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          doloremque quisquam et ratione quod aspernatur saepe asperiores facere
          rerum ex eaque dolore, laborum quis iure delectus eum tempore incidunt
          itaque.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          doloremque quisquam et ratione quod aspernatur saepe asperiores facere
          rerum ex eaque dolore, laborum quis iure delectus eum tempore incidunt
          itaque.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          doloremque quisquam et ratione quod aspernatur saepe asperiores facere
          rerum ex eaque dolore, laborum quis iure delectus eum tempore incidunt
          itaque.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          doloremque quisquam et ratione quod aspernatur saepe asperiores facere
          rerum ex eaque dolore, laborum quis iure delectus eum tempore incidunt
          itaque.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          doloremque quisquam et ratione quod aspernatur saepe asperiores facere
          rerum ex eaque dolore, laborum quis iure delectus eum tempore incidunt
          itaque.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          doloremque quisquam et ratione quod aspernatur saepe asperiores facere
          rerum ex eaque dolore, laborum quis iure delectus eum tempore incidunt
          itaque.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          doloremque quisquam et ratione quod aspernatur saepe asperiores facere
          rerum ex eaque dolore, laborum quis iure delectus eum tempore incidunt
          itaque.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          doloremque quisquam et ratione quod aspernatur saepe asperiores facere
          rerum ex eaque dolore, laborum quis iure delectus eum tempore incidunt
          itaque.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          doloremque quisquam et ratione quod aspernatur saepe asperiores facere
          rerum ex eaque dolore, laborum quis iure delectus eum tempore incidunt
          itaque.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          doloremque quisquam et ratione quod aspernatur saepe asperiores facere
          rerum ex eaque dolore, laborum quis iure delectus eum tempore incidunt
          itaque.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          doloremque quisquam et ratione quod aspernatur saepe asperiores facere
          rerum ex eaque dolore, laborum quis iure delectus eum tempore incidunt
          itaque.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          doloremque quisquam et ratione quod aspernatur saepe asperiores facere
          rerum ex eaque dolore, laborum quis iure delectus eum tempore incidunt
          itaque.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          doloremque quisquam et ratione quod aspernatur saepe asperiores facere
          rerum ex eaque dolore, laborum quis iure delectus eum tempore incidunt
          itaque.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          doloremque quisquam et ratione quod aspernatur saepe asperiores facere
          rerum ex eaque dolore, laborum quis iure delectus eum tempore incidunt
          itaque.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          doloremque quisquam et ratione quod aspernatur saepe asperiores facere
          rerum ex eaque dolore, laborum quis iure delectus eum tempore incidunt
          itaque.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          doloremque quisquam et ratione quod aspernatur saepe asperiores facere
          rerum ex eaque dolore, laborum quis iure delectus eum tempore incidunt
          itaque.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          doloremque quisquam et ratione quod aspernatur saepe asperiores facere
          rerum ex eaque dolore, laborum quis iure delectus eum tempore incidunt
          itaque.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          doloremque quisquam et ratione quod aspernatur saepe asperiores facere
          rerum ex eaque dolore, laborum quis iure delectus eum tempore incidunt
          itaque.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          doloremque quisquam et ratione quod aspernatur saepe asperiores facere
          rerum ex eaque dolore, laborum quis iure delectus eum tempore incidunt
          itaque.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          doloremque quisquam et ratione quod aspernatur saepe asperiores facere
          rerum ex eaque dolore, laborum quis iure delectus eum tempore incidunt
          itaque.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          doloremque quisquam et ratione quod aspernatur saepe asperiores facere
          rerum ex eaque dolore, laborum quis iure delectus eum tempore incidunt
          itaque.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          doloremque quisquam et ratione quod aspernatur saepe asperiores facere
          rerum ex eaque dolore, laborum quis iure delectus eum tempore incidunt
          itaque.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          doloremque quisquam et ratione quod aspernatur saepe asperiores facere
          rerum ex eaque dolore, laborum quis iure delectus eum tempore incidunt
          itaque.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          doloremque quisquam et ratione quod aspernatur saepe asperiores facere
          rerum ex eaque dolore, laborum quis iure delectus eum tempore incidunt
          itaque.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          doloremque quisquam et ratione quod aspernatur saepe asperiores facere
          rerum ex eaque dolore, laborum quis iure delectus eum tempore incidunt
          itaque.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          doloremque quisquam et ratione quod aspernatur saepe asperiores facere
          rerum ex eaque dolore, laborum quis iure delectus eum tempore incidunt
          itaque.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          doloremque quisquam et ratione quod aspernatur saepe asperiores facere
          rerum ex eaque dolore, laborum quis iure delectus eum tempore incidunt
          itaque.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          doloremque quisquam et ratione quod aspernatur saepe asperiores facere
          rerum ex eaque dolore, laborum quis iure delectus eum tempore incidunt
          itaque.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          doloremque quisquam et ratione quod aspernatur saepe asperiores facere
          rerum ex eaque dolore, laborum quis iure delectus eum tempore incidunt
          itaque.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          doloremque quisquam et ratione quod aspernatur saepe asperiores facere
          rerum ex eaque dolore, laborum quis iure delectus eum tempore incidunt
          itaque.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          doloremque quisquam et ratione quod aspernatur saepe asperiores facere
          rerum ex eaque dolore, laborum quis iure delectus eum tempore incidunt
          itaque.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          doloremque quisquam et ratione quod aspernatur saepe asperiores facere
          rerum ex eaque dolore, laborum quis iure delectus eum tempore incidunt
          itaque.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          doloremque quisquam et ratione quod aspernatur saepe asperiores facere
          rerum ex eaque dolore, laborum quis iure delectus eum tempore incidunt
          itaque.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          doloremque quisquam et ratione quod aspernatur saepe asperiores facere
          rerum ex eaque dolore, laborum quis iure delectus eum tempore incidunt
          itaque.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          doloremque quisquam et ratione quod aspernatur saepe asperiores facere
          rerum ex eaque dolore, laborum quis iure delectus eum tempore incidunt
          itaque.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          doloremque quisquam et ratione quod aspernatur saepe asperiores facere
          rerum ex eaque dolore, laborum quis iure delectus eum tempore incidunt
          itaque.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          doloremque quisquam et ratione quod aspernatur saepe asperiores facere
          rerum ex eaque dolore, laborum quis iure delectus eum tempore incidunt
          itaque.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          doloremque quisquam et ratione quod aspernatur saepe asperiores facere
          rerum ex eaque dolore, laborum quis iure delectus eum tempore incidunt
          itaque.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          doloremque quisquam et ratione quod aspernatur saepe asperiores facere
          rerum ex eaque dolore, laborum quis iure delectus eum tempore incidunt
          itaque.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          doloremque quisquam et ratione quod aspernatur saepe asperiores facere
          rerum ex eaque dolore, laborum quis iure delectus eum tempore incidunt
          itaque.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          doloremque quisquam et ratione quod aspernatur saepe asperiores facere
          rerum ex eaque dolore, laborum quis iure delectus eum tempore incidunt
          itaque.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          doloremque quisquam et ratione quod aspernatur saepe asperiores facere
          rerum ex eaque dolore, laborum quis iure delectus eum tempore incidunt
          itaque.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          doloremque quisquam et ratione quod aspernatur saepe asperiores facere
          rerum ex eaque dolore, laborum quis iure delectus eum tempore incidunt
          itaque.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          doloremque quisquam et ratione quod aspernatur saepe asperiores facere
          rerum ex eaque dolore, laborum quis iure delectus eum tempore incidunt
          itaque.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          doloremque quisquam et ratione quod aspernatur saepe asperiores facere
          rerum ex eaque dolore, laborum quis iure delectus eum tempore incidunt
          itaque.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          doloremque quisquam et ratione quod aspernatur saepe asperiores facere
          rerum ex eaque dolore, laborum quis iure delectus eum tempore incidunt
          itaque.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          doloremque quisquam et ratione quod aspernatur saepe asperiores facere
          rerum ex eaque dolore, laborum quis iure delectus eum tempore incidunt
          itaque.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          doloremque quisquam et ratione quod aspernatur saepe asperiores facere
          rerum ex eaque dolore, laborum quis iure delectus eum tempore incidunt
          itaque.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          doloremque quisquam et ratione quod aspernatur saepe asperiores facere
          rerum ex eaque dolore, laborum quis iure delectus eum tempore incidunt
          itaque.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          doloremque quisquam et ratione quod aspernatur saepe asperiores facere
          rerum ex eaque dolore, laborum quis iure delectus eum tempore incidunt
          itaque.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          doloremque quisquam et ratione quod aspernatur saepe asperiores facere
          rerum ex eaque dolore, laborum quis iure delectus eum tempore incidunt
          itaque.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          doloremque quisquam et ratione quod aspernatur saepe asperiores facere
          rerum ex eaque dolore, laborum quis iure delectus eum tempore incidunt
          itaque.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          doloremque quisquam et ratione quod aspernatur saepe asperiores facere
          rerum ex eaque dolore, laborum quis iure delectus eum tempore incidunt
          itaque.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          doloremque quisquam et ratione quod aspernatur saepe asperiores facere
          rerum ex eaque dolore, laborum quis iure delectus eum tempore incidunt
          itaque.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          doloremque quisquam et ratione quod aspernatur saepe asperiores facere
          rerum ex eaque dolore, laborum quis iure delectus eum tempore incidunt
          itaque.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          doloremque quisquam et ratione quod aspernatur saepe asperiores facere
          rerum ex eaque dolore, laborum quis iure delectus eum tempore incidunt
          itaque.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          doloremque quisquam et ratione quod aspernatur saepe asperiores facere
          rerum ex eaque dolore, laborum quis iure delectus eum tempore incidunt
          itaque.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          doloremque quisquam et ratione quod aspernatur saepe asperiores facere
          rerum ex eaque dolore, laborum quis iure delectus eum tempore incidunt
          itaque.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          doloremque quisquam et ratione quod aspernatur saepe asperiores facere
          rerum ex eaque dolore, laborum quis iure delectus eum tempore incidunt
          itaque.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          doloremque quisquam et ratione quod aspernatur saepe asperiores facere
          rerum ex eaque dolore, laborum quis iure delectus eum tempore incidunt
          itaque.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          doloremque quisquam et ratione quod aspernatur saepe asperiores facere
          rerum ex eaque dolore, laborum quis iure delectus eum tempore incidunt
          itaque.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          doloremque quisquam et ratione quod aspernatur saepe asperiores facere
          rerum ex eaque dolore, laborum quis iure delectus eum tempore incidunt
          itaque.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          doloremque quisquam et ratione quod aspernatur saepe asperiores facere
          rerum ex eaque dolore, laborum quis iure delectus eum tempore incidunt
          itaque.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          doloremque quisquam et ratione quod aspernatur saepe asperiores facere
          rerum ex eaque dolore, laborum quis iure delectus eum tempore incidunt
          itaque.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          doloremque quisquam et ratione quod aspernatur saepe asperiores facere
          rerum ex eaque dolore, laborum quis iure delectus eum tempore incidunt
          itaque.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          doloremque quisquam et ratione quod aspernatur saepe asperiores facere
          rerum ex eaque dolore, laborum quis iure delectus eum tempore incidunt
          itaque.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          doloremque quisquam et ratione quod aspernatur saepe asperiores facere
          rerum ex eaque dolore, laborum quis iure delectus eum tempore incidunt
          itaque.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          doloremque quisquam et ratione quod aspernatur saepe asperiores facere
          rerum ex eaque dolore, laborum quis iure delectus eum tempore incidunt
          itaque.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          doloremque quisquam et ratione quod aspernatur saepe asperiores facere
          rerum ex eaque dolore, laborum quis iure delectus eum tempore incidunt
          itaque.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          doloremque quisquam et ratione quod aspernatur saepe asperiores facere
          rerum ex eaque dolore, laborum quis iure delectus eum tempore incidunt
          itaque.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          doloremque quisquam et ratione quod aspernatur saepe asperiores facere
          rerum ex eaque dolore, laborum quis iure delectus eum tempore incidunt
          itaque.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          doloremque quisquam et ratione quod aspernatur saepe asperiores facere
          rerum ex eaque dolore, laborum quis iure delectus eum tempore incidunt
          itaque.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          doloremque quisquam et ratione quod aspernatur saepe asperiores facere
          rerum ex eaque dolore, laborum quis iure delectus eum tempore incidunt
          itaque.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          doloremque quisquam et ratione quod aspernatur saepe asperiores facere
          rerum ex eaque dolore, laborum quis iure delectus eum tempore incidunt
          itaque.
        </p>
      </div>

      <div className="home_clientReviews_logosSlider">
        <Slider {...settings}>
          {/* company logo */}
          <div>
            <img src="/assets/companyLogo1.png" alt="companyLogo" />
          </div>
          <div>
            <img src="/assets/companyLogo2.png" alt="companyLogo" />
          </div>
          <div>
            <img src="/assets/companyLogo1.png" alt="companyLogo" />
          </div>
          <div>
            <img src="/assets/companyLogo2.png" alt="companyLogo" />
          </div>
          <div>
            <img src="/assets/companyLogo1.png" alt="companyLogo" />
          </div>
          <div>
            <img src="/assets/companyLogo2.png" alt="companyLogo" />
          </div>
          <div>
            <img src="/assets/companyLogo1.png" alt="companyLogo" />
          </div>
          <div>
            <img src="/assets/companyLogo2.png" alt="companyLogo" />
          </div>
          <div>
            <img src="/assets/companyLogo1.png" alt="companyLogo" />
          </div>
          <div>
            <img src="/assets/companyLogo2.png" alt="companyLogo" />
          </div>
        </Slider>
      </div>
    </section>
  );
}
