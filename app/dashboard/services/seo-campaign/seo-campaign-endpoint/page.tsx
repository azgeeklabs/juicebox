"use client"
import React, { useState } from "react";
import styles from "./seo-campaign-endpoint.module.css";
import CustomCheckBoxText from "@/app/_components/customCheckBox/CustomCheckBoxText";
import Link from "next/link";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";

const Page = () => {
  const [saveProgress, setSaveProgress] = useState(false);

  return (
    <NextPrevNav
      backLink="/dashboard/services/seo-campaign/analysis-estimate"
      nextLink="/dashboard/services/"
      nextText="All Done"
    >
      {/* // Main container div with relative positioning */}
      <div className="h-full relative">
        {/* Inner container for the video end point section with custom styles */}
        <div
          className={`${styles.seoCampaignEndPoint} w-full h-full flex justify-center items-center`}
        >
          {/* Nested div for content */}
          <div>
            {/* Text center alignment and margin bottom */}
            <div className="text-center mx-auto mb-[--sy-48px]">
              {/* Main heading with margin bottom and underlined text */}
              <h2 className="mb-[--sy-16px]">
                The cost for this campaign will be around <span>$1000</span> and
                will <span>15-20</span> <br /> Months to get you to the first page of
                Google.
              </h2>
              <p className=" text-[#FFFFFFCC]">
                The Keywords you picked are <span>Hard</span> keywords. Based on
                our analysis of your Domain strength and the strength of <br /> the
                page you submitted, along with the amount of content you have
                and your competitor's analysis
              </p>
            </div>

            {/* Container for buttons with flexbox layout, width fit, margin auto, and gap between buttons */}
            <div
              className={`${styles.btns} flex w-fit mx-auto gap-[--22px] mb-[1.5vw]`}
            >
              {/* CustomCheckBoxText component for selecting options */}
              <CustomCheckBoxText
                btnSize="xl"
                inputType="radio"
                name="styleAnswer"
              >
                Book a call with our experts
              </CustomCheckBoxText>
              <CustomCheckBoxText
                btnSize="xl"
                inputType="radio"
                name="styleAnswer"
              >
                Let's get started
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
