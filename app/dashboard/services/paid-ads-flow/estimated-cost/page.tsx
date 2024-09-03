"use client"
import React, { useState } from "react";
import styles from "./estimatedCost.module.css";
import CustomCheckBoxText from "@/app/_components/customCheckBox/CustomCheckBoxText";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";
import { useRouter } from "next/navigation";

const Page = () => {
  const [saveProgress, setSaveProgress] = useState(false);

  return (
    // Main container div with relative positioning
    <NextPrevNav nextLink="/dashboard/services" nextText="All Done" backLink="/dashboard/services/paid-ads-flow/create-content">
      <div className="h-full relative w-full">
      {/* Inner container for the video end point section with custom styles */}
      <div
        className={`${styles.estimatedCost} w-full h-full flex justify-center items-center relative `}
      >
        {/* Nested div for content */}
        <div className="mb-[--sy-50px]">
          {/* Text center alignment and margin bottom */}
          <div className="text-center mx-auto mb-[--sy-48px] ">
            {/* Main heading with margin bottom and underlined text */}
            <h2 className="w-[55%] mx-auto">
            Based on your selections, the estimated cost for your project is <span>$100</span> and it will take approximately <span>20 days</span> to complete
            </h2>
          </div>

          {/* Container for buttons with flexbox layout, width fit, margin auto, and gap between buttons */}
          <div
            className={`${styles.btns} flex w-fit mx-auto gap-[1.041vw] mb-[--sy-16px]`}
          >
            {/* CustomCheckBoxText component for selecting options */}
            <CustomCheckBoxText
              btnSize="xl"
              inputType="radio"
              name="estimatedCost"
            >
              Book a call
            </CustomCheckBoxText>
            <CustomCheckBoxText
              btnSize="xl"
              inputType="radio"
              name="estimatedCost"
            >
              Start Now
            </CustomCheckBoxText>
          </div>

          {/* Link component for saving progress */}
          <div
              className={`relative block w-fit mx-auto px-[0.52vw] py-[0.3vw] hover:bg-[#484848] rounded-[var(--32px)] transition-all duration-200 `}
            >
              Save my Progress
              <input
                type="checkbox"
                name="saveProgress"
                className={`absolute opacity-0 inset-0 cursor-pointer`}
                onChange={() => setSaveProgress((prev) => !prev)}
              />
            </div>
        </div>
      </div>
    </div>
    
    </NextPrevNav>
  );
};

export default Page;
