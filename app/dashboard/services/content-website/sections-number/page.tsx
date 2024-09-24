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
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { addOption } from "@/app/reducers/serviceSlice";

function ORMNegativePressRemoval() {
  const [num, setNum] = useState(0);
  const [haveSpecificNum, setHaveSpecificNum] = useState<boolean>(false);
  const itemsRef = useRef<any[]>([])

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

  const dispatch = useDispatch()
  const route = useRouter()
  function nextFunc() {
    const storedItems = typeof window !== "undefined" && localStorage.getItem("selectedOption");
    const itemsArray = storedItems ? JSON.parse(storedItems) : []; 
    const sentArr: { page: string; numberOfSections: string }[] = [];
    if (haveSpecificNum) {
      console.log(Array.from(document.querySelectorAll(".pageTitle")));
      console.log(Array.from(document.querySelectorAll(".sectionNumber")));
      const pageTitles = Array.from(document.querySelectorAll(".pageTitle"))
      const sectionNumbers = Array.from(document.querySelectorAll(".sectionNumber"))
      console.log(pageTitles.length);
      
      Array.from({ length: pageTitles.length }, (_, idx) => {
        sentArr.push({
          page: (pageTitles[idx] as HTMLSpanElement).innerText,
          numberOfSections: (sectionNumbers[idx] as HTMLInputElement).value,
        });
      });
      console.log(sentArr);
      
      itemsArray.push({
        name:"Preferred Number of Sections per Page",
        choice:((document.querySelector("input[type='radio']:checked") as HTMLInputElement).value),
        ans:JSON.stringify(sentArr)
      })
      localStorage.setItem("selectedOption", JSON.stringify(itemsArray));
      dispatch(addOption({
        name:"Preferred Number of Sections per Page",
        choice:((document.querySelector("input[type='radio']:checked") as HTMLInputElement).value),
        ans:JSON.stringify(sentArr)
      }))
      route.push("/dashboard/services/content-website/estimated-cost")
    } else if (!haveSpecificNum && document.querySelector("input[type='radio']:checked")) {
      itemsArray.push({
        name:"Preferred Number of Sections per Page",
        choice:((document.querySelector("input[type='radio']:checked") as HTMLInputElement).value),
      })
      localStorage.setItem("selectedOption", JSON.stringify(itemsArray));
      dispatch(addOption({
        name:"Preferred Number of Sections per Page",
        choice:((document.querySelector("input[type='radio']:checked") as HTMLInputElement).value),
      }))
      route.push("/dashboard/services/content-website/estimated-cost")
    }
  }

  return (
    <NextPrevNav
      nextLink="/dashboard/services/content-website/estimated-cost" nextFunc={nextFunc}
      backLink="/dashboard/services/content-website/word-count"
    >
      {/* Inner container with full height and center alignment */}
      <div className="sectionsNumber h-full flex justify-center items-center w-full">
        {/* Inner container with full width and custom styles for the footage editing section */}
        <div className={`${styles.sectionsNumber} w-full pt-[--sy-40px]`}>
          {/* Header section with text centered, auto margins for horizontal centering, and vertical margins */}
          <div>
            <div
              className={classNames(
                "text-center mx-auto mb-[--sy-38px]",
                styles.container
              )}
            >
              {/* Main heading with bottom margin */}
              <h2 className="mb-[--sy-8px]">
              Do You Have a Preferred Number of Sections per Page?
              </h2>

              {/* Subheading with text centered */}
              <h4 className="text-center w-[65%] mx-auto text-[#FFFFFFCC]">
              Let us know if you have a specific number of sections in mind for each page of your website.
              </h4>
            </div>
            <div className=" flex gap-[--8px] items-center justify-center border-b border-b-[#484848] pb-[--sy-38px] mb-[--sy-38px] w-[60%] mx-auto px-[5vw]">
              <CustomCheckBoxText
                btnSize="xl"
                inputType="radio"
                name="sourcesAnswer"
                onClick={() => setHaveSpecificNum(true)}
                value={"Yes"}
              >
                Yes
              </CustomCheckBoxText>
              <CustomCheckBoxText
                btnSize="xl"
                inputType="radio"
                name="sourcesAnswer"
                onClick={() => setHaveSpecificNum(false)}
                value={"No"}
              >
                No
              </CustomCheckBoxText>
            </div>
          </div>
          <div>
            <div className=" flex justify-between items-center mx-auto mb-[--sy-15px] w-[85%]">
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
                    <SwiperSlide >
                      <div  ref={(el: any) => {
                        if (el) {
                          itemsRef.current[i] = itemsRef?.current[i] || 0
                          console.log(itemsRef.current[i]);
                        }
                      }}  className={`flex flex-col gap-[--sy-10px] ${haveSpecificNum ? "" : "grayscale"}`}>
                        <div className=" w-full bg-[#484848] p-[--16px] rounded-[10px]">
                          <img
                            src="/assets/website-page.png"
                            alt=""
                            className="w-full mb-[--sy-16px]"
                          />
                          <span className={` text-[--20px] pageTitle`}>About us</span>
                        </div>
                        <div className="text-[--20px] flex gap-[--24px] items-center bg-[#484848] rounded-[8px] px-[--10px]">
                          Sections{" "}
                          <div className=" w-fit relative inline-block ">
                            <input
                              type="number"
                              value={itemsRef.current[i] || 0}
                              onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                              ) => {
                                setNum(Number(e?.target?.value));
                              }}
                              className={`sectionNumber h-full rounded-[8px] py-[--sy-10px] text-center outline-none w-[5vw] bg-transparent caret-transparent`}
                            />
                            <svg
                              onClick={() => {
                                if (itemsRef.current[i] > 0 && haveSpecificNum) {
                                  --itemsRef.current[i]
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
                               if (haveSpecificNum) {
                                ++itemsRef.current[i]
                                setNum((prev) => Number(prev) + 1);
                               }
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

                width="15"
                height="22"
                viewBox="0 0 15 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.232421 2.48037L0.232422 19.5196C0.232422 21.5849 2.32806 22.7427 3.75666 21.4667L13.2954 12.947C14.4044 11.957 14.4044 10.0457 13.2954 9.05297L3.75388 0.533336C2.32807 -0.742684 0.232421 0.415087 0.232421 2.48037Z"
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
