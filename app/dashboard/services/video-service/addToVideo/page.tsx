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
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { addOption, incrementTotalSteps } from "@/app/reducers/serviceSlice";
import { RootState } from "@/app/Store/store";

export default function Page() {
  const options = [
    "2D Animations",
    "3D Animations",
    "Motion Graphics",
    "B Roll",
  ];

  const swiperRef = useRef<SwiperCore | null>(null);

  const slides = [
    "/assets/desktop-slide-1.png",
    "/assets/desktop-slide-2.png",
    "/assets/desktop-slide-3.png",
    "/assets/desktop-slide-4.png",
    "/assets/desktop-slide-1.png",
  ];
const all = useSelector((state:RootState)=>state.service)

  const dispatch = useDispatch();
  const route = useRouter();
  const nextFunc = () => {
    const storedItems = typeof window !== "undefined" && localStorage.getItem("selectedOption");
    const itemsArray = storedItems ? JSON.parse(storedItems) : [];
    if (document.querySelector("input[type='radio']:checked")) {
      itemsArray.push({
        name: "Would you like to include some add epic elements to your video?",
        choice: (
          document.querySelector(
            "input[type='radio']:checked"
          ) as HTMLInputElement
        ).value,
      });
      localStorage.setItem("selectedOption", JSON.stringify(itemsArray));
      
        dispatch(addOption({
          name: "Would you like to include some add epic elements to your video?",
          choice: (
            document.querySelector(
              "input[type='radio']:checked"
            ) as HTMLInputElement
          ).value,
        }))

      route.push("/dashboard/services/video-service/videoScript");
    }
  };
  useEffect(()=>{
    console.log(all);
    
    },[all])
  return (
    // Main container div with full height, flexbox layout, and content vertically and horizontally centered
    <NextPrevNav
      nextLink="/dashboard/services/video-service/videoScript" nextFunc={()=>nextFunc()}
      backLink="/dashboard/services/video-service/footage-edit"
    >
      <div className="flex items-center justify-center h-full w-full">
        {/* // Inner container with full width and custom styles for adding to the video section */}
        <div
          className={`${styles.addToVideo}  flex flex-col gap-[--sy-64px] justify-around w-full`}
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
            Our talented video editors possess a wide range of skills, from 2D animations to B-rolls and motion graphics. <br /> You are free to choose any of these options to enhance your project.
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
