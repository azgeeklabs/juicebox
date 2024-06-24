"use client";
import React, { useRef } from "react";
import styles from "./app-style.module.css";
import CustomCheckBoxText from "@/app/_components/customCheckBox/CustomCheckBoxText";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import SwiperCore from "swiper";

export default function page() {
  const options = [
    "Light Mode",
    "Dark Mode",
    "Playful",
    "Playful",
    "Dark Mode",
  ];

  const swiperRef = useRef<SwiperCore | null>(null);

  const slides = [
    "/assets/mobile-slide-1.png",
    "/assets/mobile-slide-2.png",
    "/assets/mobile-slide-3.png",
    "/assets/mobile-slide-4.png",
    "/assets/mobile-slide-1.png",
  ];

  return (
    <NextPrevNav
      nextLink="/dashboard/services/application-design-service/custom-ecommerce"
      backLink="/dashboard/services/application-design-service/service-projects"
      nextOnClick={() => setStep(step + 1)}
backOnClick={() => setStep(step - 1)}
    >
      <div className=" flex flex-col items-center justify-center h-full">
        <div className={`${styles.editing} w-full `}>
          <div className="flex flex-col justify-center items-center text-center mb-[2vw]">
            <h2 className=" mb-[1.041vw]">
              What type of video would you like to create?
            </h2>
            <h4>
              Our talented video editors possess a wide range of skills that can
              create <hr className="border-0" /> different genres of videos
              depending on your needs!
            </h4>
          </div>
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
              grabCursor={false}
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
              // modules={[EffectCoverflow, Pagination]}
              className="mySwiper mobile-swiper"
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
