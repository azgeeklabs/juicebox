"use client";
import React, { useState } from "react";
import styles from "./createWebsite.module.css";
import CustomCheckBoxText from "@/app/_components/customCheckBox/CustomCheckBoxText";
import Link from "next/link";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { addOption } from "@/app/reducers/serviceSlice";

const WebsiteNiche = () => {
  const [niche, setNiche] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [shownValue, setShownValue] = useState("e-commerce");
  const dispatch = useDispatch();
  const route = useRouter()
  const nextFunc = () => {
    if (shownValue && niche) {
     const storedItems = typeof window !== "undefined" && localStorage.getItem("selectedOption");
     const itemsArray = storedItems ? JSON.parse(storedItems) : [];
     itemsArray.push({
       name:"website's niche",
       choice:niche,
       ans:shownValue
     })
     localStorage.setItem("selectedOption", JSON.stringify(itemsArray));
       dispatch(addOption({
         name:"website's niche",
         choice:niche,
         ans:shownValue
       }))
     route.push("/dashboard/services/content-website/custom-ecommerce")
    }
   };
  return (
    <NextPrevNav
      nextLink="/dashboard/services/content-website/custom-ecommerce" nextFunc={nextFunc}
      backLink="/dashboard/services/content-website/live-website"
    >
      {/* // Main container div with relative positioning */}
      <div className="h-full w-full md:w-[70%] lg:w-[60%] relative">
        {/* Inner container for the video end point section with custom styles */}
        <div
          className={`${styles.createWebsite} w-full h-full flex justify-center items-center`}
        >
          {/* Nested div for content */}
          <div className="w-full">
            {/* Text center alignment and margin bottom */}
            <div className="text-center mx-auto mb-[--55px]">
              {/* Main heading with margin bottom and underlined text */}
              <h2 className="mb-[--sy-8px] mx-auto">
                What Is the Focus and Niche of Your Website?
              </h2>
              <p className=" mx-auto text-[#FFFFFFCC]">
                Please select the type of your website.
              </p>
            </div>

            {/* Container for buttons with flexbox layout, width fit, margin auto, and gap between buttons */}
            <div
              className={`${styles.btns} flex w-fit mx-auto gap-[--16px] mb-[--47px]`}
            >
              {/* CustomCheckBoxText component for selecting options */}
              <CustomCheckBoxText
                onClick={() => setNiche("Service")}
                btnSize="xl"
                inputType="radio"
                name="creationAnswer"
                value={"Service"}
              >
                Service
              </CustomCheckBoxText>
              <CustomCheckBoxText
                onClick={() => setNiche("Product")}
                btnSize="xl"
                inputType="radio"
                name="creationAnswer"
                value={"Product"}
              >
                Product
              </CustomCheckBoxText>
            </div>

            {/* Divider */}
            <hr className={`${styles.divider}`} />

            <div className="mx-auto w-full md:w-[90%] lg:w-[80%]">
              {/* Container for the video niche selection */}
              <div>
                {/* Label for the video niche dropdown */}

                <form className=" mx-auto">
                  <label
                    htmlFor="countries"
                    className="block mb-[--sy-20px] font-bold"
                  >
                    Niche
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
        </div>
      </div>
    </NextPrevNav>
  );
};

export default WebsiteNiche;
