"use client"
import React from "react";
import styles from "./estimatedCost.module.css";
import CustomCheckBoxText from "@/app/_components/customCheckBox/CustomCheckBoxText";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter()
  return (
    // Main container div with relative positioning
    <NextPrevNav nextLink="/dashboard/services" nextText="All Done">
      <div className="h-full relative w-full">
      {/* Inner container for the video end point section with custom styles */}
      <div
        className={`${styles.estimatedCost} w-full h-full flex justify-center items-center relative`}
      >
        {/* Nested div for content */}
        <div>
          {/* Text center alignment and margin bottom */}
          <div className="text-center mx-auto mb-[2.271vw]">
            {/* Main heading with margin bottom and underlined text */}
            <h2 className="mb-[1.5vw]">
            Based on your selections, the estimated cost for your project 
              <hr className="border-0" /> is <span>$1000</span>  and it will take approximately <span>15-20</span> days to complete.
            </h2>
          </div>

          {/* Container for buttons with flexbox layout, width fit, margin auto, and gap between buttons */}
          <div
            className={`${styles.btns} flex w-fit mx-auto gap-[1.041vw] mb-[1.5vw]`}
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
          <button
            className="block w-fit mx-auto px-[0.52vw] py-[0.3vw] hover:bg-[#484848] rounded-[var(--32px)] transition-all duration-200"
          >
            Save my Progress
          </button>
        </div>
      </div>
      <button className=" absolute left-0 bottom-0 translate-y-full bg-[#484848] text-white py-[0.5vw] px-[--50px] rounded-[41px]" onClick={()=>router.back()}>Back</button>
    </div>
    
    </NextPrevNav>
  );
};

export default Page;
