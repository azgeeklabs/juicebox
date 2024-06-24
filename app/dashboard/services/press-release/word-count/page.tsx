"use client";
import React, { useEffect, useState } from "react";
import styles from "./wordCount.module.css";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";
// import CustomTypeRange from "@/app/_components/customTypeRange/CustomTypeRange";
import dynamic from "next/dynamic";
import classNames from "classnames";
import CustomCheckBoxText from "@/app/_components/customCheckBox/CustomCheckBoxText";
const CustomTypeRange = dynamic(
  () => import("@/app/_components/customTypeRange/CustomTypeRange"),
  { ssr: false }
);

const page = () => {
  return (
    <NextPrevNav
      nextLink="/dashboard/services/press-release/estimated-cost"
      backLink="/dashboard/services/press-release/about"
    >
      <div
      className={`${styles.wordCount} flex flex-col justify-between h-full`}
    >
      {/* Inner container with full height and center alignment */}
      <div className="h-full flex justify-center items-center">
        {/* Inner container with full width and custom styles for the footage editing section */}
        <div className={` w-full`}>
          {/* Header section with text centered, auto margins for horizontal centering, and vertical margins */}
          <div className="text-center mx-auto mb-[4.197271773347325vh]">
            {/* Main heading with bottom margin */}
            <h2 className="mb-[2.5vh] text-[--32px] font-semibold">
            Do you have a specific word count you would like?
            </h2>

            {/* Subheading with text centered */}
            <p className=" text-[--18px]">Let us know if you have a specific word count in mind for your content.</p>
          </div>
          <div
            className={`${styles.btns} flex w-[100%] justify-center mx-auto gap-[1.041vw] mb-[4.826862539349423vh] pb-[4.826862539349423vh] border-b-[1px] border-b-[#484848]`}
          >
            {/* CustomCheckBoxText component for selecting "Specific Word Count*/}
            <CustomCheckBoxText
              btnSize="xl"
              inputType="radio"
              name="countAnswer"
            >
              Specific Word Count
            </CustomCheckBoxText>

            {/* CustomCheckBoxText component for selecting "It doesn't matter" option */}
            <CustomCheckBoxText
              btnSize="xl"
              inputType="radio"
              name="countAnswer"
            >
              It doesn't matter
            </CustomCheckBoxText>
          </div>
          <div>
            <h3 className=" mb-[--sy-18px] text-[--20px] font-semibold">Word per Page</h3>
            <CustomTypeRange word="Words/Page" max={100}/>
          </div>
          
        </div>
      </div>    
    </div>
    </NextPrevNav>
  );
};

export default page;
