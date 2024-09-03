"use client"
import React from "react";
import styles from "./interactionsTypes.module.css";
import CustomCheckBoxText from "@/app/_components/customCheckBox/CustomCheckBoxText";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";

const Page = () => {
  return (
    // Main container div
    <NextPrevNav nextLink="/dashboard/services/social-media/estimated-cost" backLink="/dashboard/services/social-media/audience-frequency">
      <div className=" flex items-center justify-center h-full mb-[--sy-40px]">
      {/* Inner container for the video script section with custom styles */}
      <div className={`${styles.interactionsTypes} w-full`}>
        {/* Text center alignment and margin bottom */}
        <div className=" text-center mx-auto mb-[--sy-64px]">
          {/* Main heading with margin bottom and embedded horizontal rule */}
          <h2 className=" mb-[--sy-8px]">
          What types of interactions do you want us to handle?
          </h2>
          {/* Subheading with embedded horizontal rule  */}
          <h4 className=" w-[73%] mx-auto">
          Select the types of interactions you want us to manage for your social media page. You can choose multiple options.
          </h4>
        </div>
        {/* Container for buttons with flexbox layout, width fit, margin auto, and gap between buttons */}
        <div className={`${styles.btns} flex w-fit mx-auto gap-[--8px]`}>
          {/* CustomCheckBoxText component for selecting options */}
          <CustomCheckBoxText btnSize="xl" inputType="radio" name="interactionType" >
          Message/Dm
          </CustomCheckBoxText>
          <CustomCheckBoxText btnSize="xl" inputType="radio" name="interactionType" >
          Comments
          </CustomCheckBoxText>
          <CustomCheckBoxText btnSize="xl" inputType="radio" name="interactionType" >
          Engaging with audience
          </CustomCheckBoxText>
        </div>
      </div>
    </div>
    </NextPrevNav>
  );
};

export default Page;
