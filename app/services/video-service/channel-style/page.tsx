"use client";
import CustomCheckBox from "@/app/_components/customCheckBox/CustomCheckBox";
import React, { useEffect, useRef } from "react";
import styles from "./channelStyle.module.css";
import CustomCheckBoxText from "@/app/_components/customCheckBox/CustomCheckBoxText";
import Link from "next/link";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import SwiperCore from "swiper";

export default function page() {
  const options = [
    "Explainer",
    "Educational",
    "YouTube",
    "Social Media Ad",
    "Short Film",
  ];

  const swiperRef = useRef<SwiperCore | null>(null);

  const slides = [
    "https://swiperjs.com/demos/images/nature-1.jpg",
    "https://swiperjs.com/demos/images/nature-2.jpg",
    "https://swiperjs.com/demos/images/nature-3.jpg",
    "https://swiperjs.com/demos/images/nature-4.jpg",
    "https://swiperjs.com/demos/images/nature-5.jpg",
  ];
  return (
    // Main container div with flexbox layout, column direction, and full height
    <NextPrevNav nextLink="/services/video-service/footage-edit" backLink="/services/video-service/choose-kind">
      <div className="flex items-center justify-center h-full w-full">
      {/* Inner container with full width and custom styles for channel style selection */}
      <div className={`${styles.channelStyle} w-full `}>
        {/* Header section with top padding, left padding, and bottom margin */}
        <div className="pt-[2.667vh] pl-[4.264vw] mb-[2.667vh]">
          {/* Main heading with bottom margin and embedded horizontal rules */}
          <h2 className="mb-[1.851vh]">
            Gotcha! <hr className="border-0" />
            We can match your channel's style exactly, or if you want to mix
            <hr className="border-0" /> things up, we have other YouTube video
            styles to choose from.
          </h2>

          {/* Subheading with embedded horizontal rules */}
          <h4>
            We have a variety of video styles, pick the one you think would
            complement <hr className="border-0" /> the video style you want!
          </h4>
        </div>

        {/* Container for buttons and slider with flexbox layout, padding, and justified content */}
        <div className=" flex items-center justify-between pl-[4.021vw] pr-[1vw] w-full gap-[20vw]">
            <div className={`${styles.btns} flex flex-col gap-[1.041vw]`}>
              {/* Iterate over options array and create CustomCheckBoxText components */}
              {options.map((e, i) => (
                <CustomCheckBoxText
                  btnSize="xl"
                  inputType="radio"
                  name="type"
                  // Mouse move event to highlight the hovered item
                  onMouseOver={() => {
                    if (swiperRef.current) {
                      swiperRef.current.slideTo(i); // Slide index is 0-based
                    }
                  }}
                  onClick={() => {
                    document.querySelectorAll("img.slide").forEach((e) => {
                      e.classList.remove("selected");
                    });
                    document
                      .querySelector(`.slide${i}`)
                      ?.classList.add("selected");
                  }}
                >
                  {e}
                </CustomCheckBoxText>
              ))}
            </div>
            <Swiper
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              speed={500}
              initialSlide={2}
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              loop={false}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={true}
              // modules={[EffectCoverflow, Pagination]}
              className="mySwiper"
            >
              {slides.map((e, i) => (
                <SwiperSlide key={i}>
                  <img src={e} className={`slide slide${i} `} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
      </div>
    </div>
    </NextPrevNav>
  );
}
