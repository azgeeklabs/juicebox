"use client";
import CustomCheckBox from "@/app/_components/customCheckBox/CustomCheckBox";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addOption,
  incrementTotalSteps,
  initializeService,
  selectType,
} from "../../../reducers/serviceSlice";
import { RootState } from "../../../Store/store";
import styles from "./videoService.module.css";
import CustomCheckBoxText from "@/app/_components/customCheckBox/CustomCheckBoxText";
import Link from "next/link";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import SwiperCore from "swiper";
import { useRouter } from "next/navigation";

export default function Page() {
  const route = useRouter()
  const dispatch = useDispatch();
  const all = useSelector((state: RootState) => state.service.options);
  const options = [
    "Explainer",
    "Educational",
    "YouTube",
    "Social Media Ad",
    "Short Film",
  ];
  const [wait,setWait] = useState(true)

  const swiperRef = useRef<SwiperCore | null>(null);

  const slides = [
    "/assets/desktop-slide-1.png",
    "/assets/desktop-slide-2.png",
    "/assets/desktop-slide-3.png",
    "/assets/desktop-slide-4.png",
    "/assets/desktop-slide-1.png",
  ];
  console.log(document.querySelectorAll("input[type='radio']:checked"));
  const nextFunc = () => {
    if (document.querySelector("input[type='radio']:checked")) {
      console.log("//////////////////////");
      localStorage.setItem(
        "selectedOption",
        JSON.stringify([
          {
            name: "video",
            choice: (document.querySelector("input[type='radio']:checked") as HTMLInputElement).value,
          },
        ])
      );
        dispatch(addOption({
          name: "video",
          choice: (document.querySelector("input[type='radio']:checked") as HTMLInputElement).value,
        },))
      console.log(all);
      
      route.push("/dashboard/services/video-service/footage-selection")
    }
  };
  return (
    // Main container div with full height, column flex direction, and space-between alignment
    <NextPrevNav
      nextLink="/dashboard/services/video-service/footage-selection"
      nextFunc={() => nextFunc()}
    >
      <div className="flex items-center justify-center h-full w-full">
        {/* Inner container with full width and custom editing styles */}
        <div
          className={`${styles.editing} flex flex-col gap-[--sy-80px] justify-around w-full pt-[--sy-20px]`}
        >
          {/* Header section with padding and bottom margin */}
          <div className="pl-[4.264vw]">
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
                  btnSize="lg"
                  inputType="radio"
                  name="type"
                  value={e}
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
