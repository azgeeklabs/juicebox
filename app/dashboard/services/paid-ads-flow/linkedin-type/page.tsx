"use client";
import React, { useContext, useRef } from "react";
import styles from "./adType.module.css";
import CustomCheckBoxText from "@/app/_components/customCheckBox/CustomCheckBoxText";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import SwiperCore from "swiper";
import { globalContext } from "@/app/_context/GlobalContext";
import "./adType.css";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { addOption } from "@/app/reducers/serviceSlice";

export default function Page() {
  const { step, setStep } = useContext(globalContext);

  const options = [
    "Single Image Ads",
    "Video Ads",
    "Carousel Ads",
    "Event Ads",
    "Message Ads",
  ];

  const swiperRef = useRef<SwiperCore | null>(null);

  const slides = [
    "/assets/mobile-slide-1.png",
    "/assets/mobile-slide-2.png",
    "/assets/mobile-slide-3.png",
    "/assets/mobile-slide-4.png",
    "/assets/mobile-slide-1.png",
  ];
  const dispatch = useDispatch();
  const route = useRouter();
  const nextFunc = () => {
    const storedItems =
      typeof window !== "undefined" && localStorage.getItem("selectedOption");
    const itemsArray = storedItems ? JSON.parse(storedItems) : [];
    if (document.querySelector("input[type='radio']:checked")) {
      itemsArray.push({
        name: "What type of LinkedIn ads would you like to run?",
        choice: (
          document.querySelector(
            "input[type='radio']:checked"
          ) as HTMLInputElement
        ).value,
      });
      localStorage.setItem("selectedOption", JSON.stringify(itemsArray));
      dispatch(
        addOption({
          name: "What type of LinkedIn ads would you like to run?",
          choice: (
            document.querySelector(
              "input[type='radio']:checked"
            ) as HTMLInputElement
          ).value,
        })
      );
      route.push("/dashboard/services/paid-ads-flow/create-account");
    }
  };

  return (
    <NextPrevNav
      nextLink="/dashboard/services/paid-ads-flow/create-account"
      nextFunc={nextFunc}
      backLink="/dashboard/services/paid-ads-flow/"
      nextOnClick={() => setStep(step + 1)}
      backOnClick={() => setStep(step - 1)}
    >
      <div className=" flex flex-col items-center justify-center h-full w-full">
        <div className={`${styles.editing} w-full editing`}>
          <div className="flex flex-col justify-center items-center text-center mb-[2vw]">
            <h2 className=" mb-[1.041vw]">
              What type of LinkedIn ads would you like to run?
            </h2>
            <h4>
              Select the social media platforms where you would like to run your
              ads. Choose as many as you like.
            </h4>
          </div>
          <div className=" flex items-center justify-between pl-[4.021vw] pr-[1vw] w-full ">
            <div className={`${styles.btns} flex flex-col gap-[1.041vw]`}>
              {/* Iterate over options array and create CustomCheckBoxText components */}
              {options.map((e, i) => (
                <div className=" flex gap-[1vw]">
                  <div className=" relative w-fit">
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
                    <div className=" bg-[--highlight-yellow] pl-[0.2vw] rounded-[7px] absolute left-[110%] top-1/2 -translate-y-1/2 w-[22vw] opacity-0 duration-300">
                      <div className=" w-[22vw] bg-black rounded-[7px] py-[--sy-12px] px-[--23px] hovered">
                        These are single-image ads that appear in the Facebook
                        News Feed. They can include a headline, text, and a
                        call-to-action button.
                      </div>
                    </div>
                  </div>
                </div>
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
