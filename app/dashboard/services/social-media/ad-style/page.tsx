"use client"
import React from "react";
import styles from "./adStyle.module.css";
import CustomCheckBoxText from "@/app/_components/customCheckBox/CustomCheckBoxText";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";

const Page = () => {
  return (
    // Main container div
    <NextPrevNav nextLink="/dashboard/services/social-media/estimated-cost" backLink="/dashboard/services/social-media/ad-type">
      <div className=" flex items-center justify-center h-full mb-[--sy-50px]">
      {/* Inner container for the video script section with custom styles */}
      <div className={`${styles.adStyle} w-full`}>
        {/* Text center alignment and margin bottom */}
        <div className=" text-center mx-auto mb-[--sy-40px]">
          {/* Main heading with margin bottom and embedded horizontal rule */}
          <h2 className=" mb-[--sy-8px]">
          Do you have a specific style for your ads?
          </h2>
          {/* Subheading with embedded horizontal rule  */}
          <h4 className=" w-[70%] mx-auto">
          We can follow your current branding or we can create a new style that est fit to your content!
          </h4>
        </div>
        {/* Container for buttons with flexbox layout, width fit, margin auto, and gap between buttons */}
        <div className={`${styles.btns} flex w-fit mx-auto gap-[--16px]`}>
          {/* CustomCheckBoxText component for selecting options */}
          <CustomCheckBoxText btnSize="xl" inputType="radio" name="adStyle" >
          Follow my branding
          </CustomCheckBoxText>
          <CustomCheckBoxText btnSize="xl" inputType="radio" name="adStyle" >
          Make one for me
          </CustomCheckBoxText>
        </div>
      </div>
    </div>
    </NextPrevNav>
  );
};

export default Page;
