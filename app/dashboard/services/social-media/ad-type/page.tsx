"use client"
import React from "react";
import styles from "./adType.module.css";
import CustomCheckBoxText from "@/app/_components/customCheckBox/CustomCheckBoxText";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";

const Page = () => {
  return (
    // Main container div
    <NextPrevNav nextLink="/dashboard/services/social-media/ad-style" backLink="/dashboard/services/social-media/creation-frequency">
      <div className=" flex items-center justify-center h-full">
      {/* Inner container for the video script section with custom styles */}
      <div className={`${styles.adType} w-full`}>
        {/* Text center alignment and margin bottom */}
        <div className=" text-center mx-auto mb-[4.037vh]">
          {/* Main heading with margin bottom and embedded horizontal rule */}
          <h2 className=" mb-[2.667vh]">
          What type of Ad you would like?
          </h2>
          {/* Subheading with embedded horizontal rule  */}
          <h4>
          We can create image based content or video, the choice is yours!
          </h4>
        </div>
        {/* Container for buttons with flexbox layout, width fit, margin auto, and gap between buttons */}
        <div className={`${styles.btns} flex w-fit mx-auto gap-[1.041vw]`}>
          {/* CustomCheckBoxText component for selecting options */}
          <CustomCheckBoxText btnSize="xl" inputType="radio" name="adType" >
          Images
          </CustomCheckBoxText>
          <CustomCheckBoxText btnSize="xl" inputType="radio" name="adType" >
          Videos
          </CustomCheckBoxText>
        </div>
      </div>
    </div>
    </NextPrevNav>
  );
};

export default Page;
