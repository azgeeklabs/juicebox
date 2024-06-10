"use client";
import CustomCheckBox from "@/app/_components/customCheckBox/CustomCheckBox";
import React, { useEffect, useRef } from "react";
import styles from "./videoService.module.css";
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

  // useEffect(() => {
  //   let items = document.getElementsByClassName("item") as any;
  //   let next = document.getElementById("next");
  //   let prev = document.getElementById("prev");

  //   let active = 3;
  //   function loadShow() {
  //     let stt = 0;
  //     items[active].style.transform = `none`;
  //     items[active].style.zIndex = 1;
  //     items[active].style.filter = "none";
  //     items[active].style.opacity = 1;
  //     for (var i = active + 1; i < items.length; i++) {
  //       stt++;
  //       items[i].style.transform = `translateX(${120 * stt}px) scale(${
  //         1 - 0.2 * stt
  //       }) perspective(16px) rotateY(-1deg)`;
  //       items[i].style.zIndex = -stt;
  //       items[i].style.filter = "blur(5px)";
  //       items[i].style.opacity = stt > 2 ? 0 : 0.6;
  //     }
  //     stt = 0;
  //     for (var i = active - 1; i >= 0; i--) {
  //       stt++;
  //       items[i].style.transform = `translateX(${-120 * stt}px) scale(${
  //         1 - 0.2 * stt
  //       }) perspective(16px) rotateY(1deg)`;
  //       items[i].style.zIndex = -stt;
  //       items[i].style.filter = "blur(5px)";
  //       items[i].style.opacity = stt > 2 ? 0 : 0.6;
  //     }
  //   }

  //   console.log(items);

  //   // loadShow();
  // }, []);

  return (
    // Main container div with full height, column flex direction, and space-between alignment
    <NextPrevNav nextLink="/services/video-service/footage-selection">
      <div className="flex items-center justify-center h-full w-full">
        {/* Inner container with full width and custom editing styles */}
        <div className={`${styles.editing} w-full`}>
          {/* Header section with padding and bottom margin */}
          <div className="pt-[2.667vh] pl-[4.264vw] mb-[6.222vh]">
            {/* Main heading with bottom margin */}
            <h2 className="mb-[1.851vh]">
              {" "}
              What type of video would you like to create?
            </h2>

            {/* Subheading with horizontal rule (line) */}
            <h4>
              Our talented video editors possess a wide range of skills that can
              create <hr className="border-0" /> different genres of videos
              depending on your needs!
            </h4>
          </div>

          {/* Container for options and slider with padding */}
          <div className=" flex items-center justify-between pl-[4.021vw] pr-[1vw] w-full gap-[20vw]">
            <div className={`${styles.btns} flex flex-col gap-[1.851vh]`}>
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
