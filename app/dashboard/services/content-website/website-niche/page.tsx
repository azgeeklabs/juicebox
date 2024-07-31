"use client";
import React, { useState } from "react";
import styles from "./createWebsite.module.css";
import CustomCheckBoxText from "@/app/_components/customCheckBox/CustomCheckBoxText";
import Link from "next/link";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";

const WebsiteNiche = () => {
  const [haveWebsite, setHaveWebsite] = useState(false);
  return (
    <NextPrevNav
      nextLink="/dashboard/services/content-website/custom-ecommerce"
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
            <div className="text-center mx-auto mb-[2.271vw]">
              {/* Main heading with margin bottom and underlined text */}
              <h2 className="mb-[.6vw] w-[60%] mx-auto">
                What Is the Focus and Niche of Your Website?
              </h2>
              <p className=" w-[65%] mx-auto text-[#FFFFFFCC]">
                Please select the type of your website.
              </p>
            </div>

            {/* Container for buttons with flexbox layout, width fit, margin auto, and gap between buttons */}
            <div
              className={`${styles.btns} flex w-fit mx-auto gap-[1.041vw] mb-[1.5vw]`}
            >
              {/* CustomCheckBoxText component for selecting options */}
              <CustomCheckBoxText
                onClick={() => setHaveWebsite(true)}
                btnSize="xl"
                inputType="radio"
                name="creationAnswer"
              >
                Service
              </CustomCheckBoxText>
              <CustomCheckBoxText
                onClick={() => setHaveWebsite(false)}
                btnSize="xl"
                inputType="radio"
                name="creationAnswer"
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
                  <select
                    id="countries"
                    className=" outline-none rounded-lg block w-full p-2.5 bg-[#484848]"
                  >
                    <option selected className=" text-[#A3A3A3]">
                      e-commerce
                    </option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                  </select>
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
