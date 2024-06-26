"use client";
import classNames from "classnames";
import styles from "./sectionsNumber.module.css";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";
import { useRef, useState } from "react";
import CustomCheckBoxText from "@/app/_components/customCheckBox/CustomCheckBoxText";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";

import "./styles.css";

function ORMNegativePressRemoval() {
  const [num, setNum] = useState(0);
  const [haveSources, setHaveSources] = useState<boolean>(false);

  const [links, setLinks] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleAddLink = () => {
    const link = inputRef.current?.value;
    if (link) {
      setLinks([...links, link]);
      inputRef.current!.value = "";
    }
  };

  const swiperRef = useRef<any>(null);

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiperRef.current) {
      console.log(swiperRef);
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <NextPrevNav
      nextLink="/dashboard/services/content-website/estimated-cost"
      backLink="/dashboard/services/content-website/word-count"
    >
      {/* Inner container with full height and center alignment */}
      <div className="sectionsNumber h-full flex justify-center items-center w-full">
        {/* Inner container with full width and custom styles for the footage editing section */}
        <div className={`${styles.sectionsNumber} w-full `}>
          {/* Header section with text centered, auto margins for horizontal centering, and vertical margins */}
          <div>
            <div
              className={classNames(
                "text-center mx-auto mb-[3.556vh]",
                styles.container
              )}
            >
              {/* Main heading with bottom margin */}
              <h2 className="mb-[2.5vh]">
                Do you have specific sources you would like us to reference?
              </h2>

              {/* Subheading with text centered */}
              <h4 className="text-center w-[65%] mx-auto text-[#FFFFFFCC]">
                Please let us know if there are specific sources you'd like us
                to reference in your content.
              </h4>
            </div>
            <div className=" flex gap-[--8px] items-center justify-center border-b border-b-[#484848] pb-[--sy-33px] mb-[--sy-33px] w-fit mx-auto px-[5vw]">
              <CustomCheckBoxText
                btnSize="xl"
                inputType="radio"
                name="sourcesAnswer"
                onClick={() => setHaveSources(true)}
              >
                Input sources
              </CustomCheckBoxText>
              <CustomCheckBoxText
                btnSize="xl"
                inputType="radio"
                name="sourcesAnswer"
                onClick={() => setHaveSources(false)}
              >
                I have no sources
              </CustomCheckBoxText>
            </div>
          </div>
          <div>
            <div className=" flex justify-between items-center mx-auto mb-[3vh] w-[85%]">
              <h5 className="text-[--20px] font-medium">
                Please specify number of sections per page
              </h5>
              <span className=" px-[--16px] py-[--sy-8px] rounded-[8px] flex justify-between items-center gap-[3vw] bg-[#353535]">
                {" "}
                Number of sections <span>(3)</span>
              </span>
            </div>
            <div className="px-[--50px] py-[--sy-24px] bg-[#353535] rounded-[10px] w-[85%] mx-auto relative">
              <Swiper
                slidesPerView={5}
                // spaceBetween={1}
                navigation={true}
                className="mySwiper"
                modules={[Navigation]}
                ref={swiperRef}
              >
                {Array(6)
                  .fill(0)
                  .map((e, i) => (
                    <SwiperSlide>
                      <div className=" flex flex-col gap-[--sy-10px]">
                        <div className=" w-full bg-[#484848] p-[--16px] rounded-[10px]">
                          <img
                            src="/assets/website-page.png"
                            alt=""
                            className="w-full mb-[--sy-16px]"
                          />
                          <span className=" text-[--20px]">About us</span>
                        </div>
                        <div className="text-[--20px] flex gap-[--24px] items-center bg-[#484848] rounded-[8px] px-[--10px]">
                          Sections{" "}
                          <div className=" w-fit relative inline-block ">
                            <input
                              type="number"
                              value={num}
                              onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                              ) => {
                                setNum(Number(e?.target?.value));
                              }}
                              className="h-full rounded-[8px] py-[--sy-10px] text-center outline-none w-[5vw] bg-transparent caret-transparent"
                            />
                            <svg
                              onClick={() => {
                                if (num > 0) {
                                  setNum((prev) => prev - 1);
                                }
                              }}
                              className=" absolute left-[0.3vw] top-1/2 -translate-y-1/2 "
                              width="18"
                              height="11"
                              viewBox="0 0 18 11"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M15.2794 0.402344H2.77698C1.2616 0.402344 0.412095 1.94 1.34836 2.98821L7.59955 9.9872C8.32597 10.8009 9.72835 10.8009 10.4568 9.9872L16.708 2.98618C17.6442 1.94 16.7947 0.402344 15.2794 0.402344Z"
                                fill="white"
                              />
                            </svg>
                            <svg
                              onClick={() => {
                                setNum((prev) => Number(prev) + 1);
                              }}
                              className="absolute right-[0.3vw] top-1/2 -translate-y-1/2 "
                              width="18"
                              height="11"
                              viewBox="0 0 18 11"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M2.72064 10.5977L15.223 10.5977C16.7384 10.5977 17.5879 9.06 16.6516 8.01179L10.4004 1.0128C9.67403 0.199111 8.27165 0.199111 7.54322 1.0128L1.29203 8.01383C0.355759 9.06 1.20526 10.5977 2.72064 10.5977Z"
                                fill="white"
                              />
                            </svg>
                          </div>{" "}
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
              </Swiper>
              <svg
                onClick={handlePrev}
                className=" absolute left-[--14px] top-1/2 -translate-y-1/2 cursor-pointer"
                width="14"
                height="22"
                viewBox="0 0 14 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.8945 2.48037L13.8945 19.5196C13.8945 21.5849 11.7989 22.7427 10.3703 21.4667L0.831515 12.947C-0.277451 11.957 -0.277451 10.0457 0.831515 9.05297L10.3731 0.533336C11.7989 -0.742684 13.8945 0.415087 13.8945 2.48037Z"
                  fill="white"
                />
              </svg>
              <svg
              onClick={handleNext}
              className=" absolute right-[--14px] top-1/2 -translate-y-1/2 cursor-pointer"
                width="27"
                height="34"
                viewBox="0 0 27 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.23242 8.48037L6.23242 25.5196C6.23242 27.5849 8.32806 28.7427 9.75666 27.4667L19.2954 18.947C20.4044 17.957 20.4044 16.0457 19.2954 15.053L9.75388 6.53334C8.32807 5.25732 6.23242 6.41509 6.23242 8.48037Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </NextPrevNav>
  );
}

export default ORMNegativePressRemoval;
