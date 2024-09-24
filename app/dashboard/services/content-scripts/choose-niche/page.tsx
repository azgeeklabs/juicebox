"use client"
import React, { useState } from "react";
import styles from "./chooseNiche.module.css";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { addOption } from "@/app/reducers/serviceSlice";

const Page = () => {
  const [haveWebsite, setHaveWebsite] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [shownValue, setShownValue] = useState("e-commerce");
  const dispatch = useDispatch();
  const route = useRouter()
  const nextFunc = () => {
    if (shownValue) {
     const storedItems = typeof window !== "undefined" && localStorage.getItem("selectedOption");
     const itemsArray = storedItems ? JSON.parse(storedItems) : [];
     itemsArray.push({
       name:"video's niche",
       choice:shownValue
     })
     localStorage.setItem("selectedOption", JSON.stringify(itemsArray));
       dispatch(addOption({
         name:"video's niche",
         choice:shownValue
       }))
     route.push("/dashboard/services/content-scripts/duration-of-video")
    }
   };
  return (
    // Custom component for navigation between pages, passing props for the next and back links
    <NextPrevNav
      nextLink="/dashboard/services/content-scripts/duration-of-video" nextFunc={nextFunc}
      backLink="/dashboard/services/content-scripts/product-advertising"
    >
      {/* Main container for the content, styled using Tailwind CSS and custom styles */}
      <div
        className={`${styles.niche} w-full h-full flex justify-center items-center mb-[--sy-40px]`}
      >
        <div>
          {/* Container for the heading and description */}
          <div className="mb-[--sy-32px]">
            {/* Heading for the section, centered text */}
            <h2 className="mb-[--sy-18px] text-[--32px] font-semibold text-center">
              Do you have a specific niche for your video?
            </h2>
            {/* Description paragraph, centered text */}
            <p className="text-[--18px] text-center text-[#FFFFFFCC]">
              Specifying your niche enables us to tailor our approach for <br />
              maximum impact and engagement.
            </p>
          </div>
          {/* Container for the video niche selection */}
          <div>
            {/* Label for the video niche dropdown */}

            <form className=" mx-auto">
              <label htmlFor="countries" className="block mb-[--sy-16px] font-semibold">
                Video Niche
              </label>
              <div
                    className={`${styles.customSelect} relative w-full`}
                  >
                    <button onClick={(e)=>{
                      e.preventDefault()
                      setShowDropdown(!showDropdown)
                    }} className=" flex items-center relative w-full rounded-[--7px] py-[--sy-10px] px-[--12px] bg-[#484848] text-[#FFFFFFCC]">
                      {shownValue}
                      <svg
                        className=" right-[--19px] top-1/2 -translate-y-1/2 absolute w-[--16px]"
                        viewBox="0 0 16 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.0707 0.550781H1.93204C0.460743 0.550781 -0.364044 2.04371 0.544985 3.06143L6.61432 9.8568C7.3196 10.6468 8.68119 10.6468 9.38843 9.8568L15.4578 3.05945C16.3668 2.04371 15.542 0.550781 14.0707 0.550781Z"
                          fill="white"
                        />
                      </svg>
                    </button>
                    <ul className={`${showDropdown ? "block" : "hidden"} w-full absolute top-full translate-y-2 bg-[#484848] rounded-[--10px] overflow-x-hidden overflow-y-auto max-h-[--sy-165px] text-[#FFFFFF]`}>
                      <li
                        className="py-[--sy-8px] px-[--12px] hover:cursor-pointer hover:bg-[#353535]"
                        onClick={(e) => {
                          const target = e.target as HTMLInputElement;
                          setShownValue(target.innerText);
                          setShowDropdown(false);
                        }}
                      >
                        aaaa
                      </li>
                      <li
                        className="py-[--sy-8px] px-[--12px] hover:cursor-pointer hover:bg-[#353535]"
                        onClick={(e) => {
                          const target = e.target as HTMLInputElement;
                          setShownValue(target.innerText);
                          setShowDropdown(false);
                        }}
                      >
                        dddd
                      </li>
                      <li
                        className="py-[--sy-8px] px-[--12px] hover:cursor-pointer hover:bg-[#353535]"
                        onClick={(e) => {
                          const target = e.target as HTMLInputElement;
                          setShownValue(target.innerText);
                          setShowDropdown(false);
                        }}
                      >
                        cccc
                      </li>
                      <li
                        className="py-[--sy-8px] px-[--12px] hover:cursor-pointer hover:bg-[#353535]"
                        onClick={(e) => {
                          const target = e.target as HTMLInputElement;
                          setShownValue(target.innerText);
                          setShowDropdown(false);
                        }}
                      >
                        aaaa
                      </li>
                    </ul>
                  </div>
            </form>
          </div>
        </div>
      </div>
    </NextPrevNav>
  );
};

export default Page;
