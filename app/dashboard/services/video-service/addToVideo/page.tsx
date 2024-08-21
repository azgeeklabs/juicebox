"use client";
import CustomCheckBox from "@/app/_components/customCheckBox/CustomCheckBox";
import React, { useEffect, useRef } from "react";
import styles from "./addToVideo.module.css";
import CustomCheckBoxText from "@/app/_components/customCheckBox/CustomCheckBoxText";
import Link from "next/link";
import Image from "next/image";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import SwiperCore from "swiper";

export default function Page() {
  const options = [
    "Explainer",
    "Educational",
    "YouTube",
    "Social Media Ad",
    "Short Film",
  ];

  const swiperRef = useRef<SwiperCore | null>(null);

  const slides = [
    "/assets/desktop-slide-1.png",
    "/assets/desktop-slide-2.png",
    "/assets/desktop-slide-3.png",
    "/assets/desktop-slide-4.png",
    "/assets/desktop-slide-1.png",
  ];

  return (
    // Main container div with full height, flexbox layout, and content vertically and horizontally centered
    <NextPrevNav
      nextLink="/dashboard/services/video-service/videoScript"
      backLink="/dashboard/services/video-service/footage-edit"
    >
      <div className="flex items-center justify-center h-full w-full">
        {/* // Inner container with full width and custom styles for adding to the video section */}
        <div
          className={`${styles.addToVideo}  flex flex-col gap-[--98px] justify-around w-full`}
        >
          {/* // Header section with padding top, left padding, and bottom margin */}
          <div className="pl-[4.264vw]">
            {/* // Main heading with bottom margin and embedded horizontal rules */}
            <h2 className="mb-[1.851vh]">
              Would you like to include some add epic
              <hr className="border-0" />
              elements to your video?
            </h2>

            {/* // Subheading with embedded horizontal rules */}
            <h4>
              We have a variety of video styles, pick the one you think would
              complement <hr className="border-0" /> the video style you want!
            </h4>
          </div>

          {/* // Container for buttons and slider with flexbox layout, padding left, and padding right */}
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
              allowTouchMove={false} // Disable slide navigation by mouse drag
              grabCursor={false}
              // modules={[EffectCoverflow, Pagination]}
              className="mySwiper desktop-swiper"
            >
              {slides.map((e, i) => (
                <SwiperSlide key={i}>
                  <img src={e} className={`slide slide${i} `} />
                  <div className="custom-shadow"></div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </NextPrevNav>
  );
}
