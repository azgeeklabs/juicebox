"use client"
import React, { use, useState } from "react";
import styles from "./creationFrequency.module.css";
import CustomCheckBoxText from "@/app/_components/customCheckBox/CustomCheckBoxText";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";

const Page = () => {
  return (
    // Main container div
    <NextPrevNav nextLink="/dashboard/services/social-media/ad-type" backLink="/dashboard/services/social-media/social-media-task">
      <div className=" flex items-center justify-center h-full mb-[--sy-50px]">
      {/* Inner container for the video script section with custom styles */}
      <div className={`${styles.creationFrequency} w-full`}>
        {/* Text center alignment and margin bottom */}
        <div className=" text-center mx-auto mb-[--58px]">
          {/* Main heading with margin bottom and embedded horizontal rule */}
          <h2 className=" mb-[--sy-8px]">
          How often do you want us to create posts for you?
          </h2>
          {/* Subheading with embedded horizontal rule  */}
          <h4 className=" w-[55%] text-center mx-auto">
          Select the frequency at which you want us to create posts for your social media page.
          </h4>
        </div>
        {/* Container for buttons with flexbox layout, width fit, margin auto, and gap between buttons */}
        <div className={`${styles.btns} flex w-fit mx-auto gap-[--8px]`}>
          {/* CustomCheckBoxText component for selecting options */}
          <CustomCheckBoxText btnSize="xl" inputType="radio" name="frequency" >
          Many times daily
          </CustomCheckBoxText>
          <CustomCheckBoxText btnSize="xl" inputType="radio" name="frequency" >
          Every other day
          </CustomCheckBoxText>
          <CustomCheckBoxText btnSize="xl" inputType="radio" name="frequency" >
          Weekly
          </CustomCheckBoxText>
          <CustomCheckBoxText btnSize="xl" inputType="radio" name="frequency" >
          Daily
          </CustomCheckBoxText>
        </div>
      </div>
    </div>
    </NextPrevNav>
  );
};

export default Page;
