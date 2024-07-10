import React from "react";
import styles from "./about.module.css";
import CustomCheckBoxText from "@/app/_components/customCheckBox/CustomCheckBoxText";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";

const page = () => {
  return (
    // Main container div
    <NextPrevNav nextLink="/dashboard/services/press-release/word-count" backLink="/dashboard/services/press-release/pr-ready">
      <div className=" flex items-center justify-center h-full">
      {/* Inner container for the video script section with custom styles */}
      <div className={`${styles.about} w-full`}>
        {/* Text center alignment and margin bottom */}
        <div className=" text-center mx-auto mb-[4.037vh]">
          {/* Main heading with margin bottom and embedded horizontal rule */}
          <h2 className=" mb-[2.667vh]">
          What is your press release about?
          </h2>
          {/* Subheading with embedded horizontal rule  */}
          <h4 >
          Select the type of press release you need us to write.
          </h4>
        </div>
        {/* Container for buttons with flexbox layout, width fit, margin auto, and gap between buttons */}
        <div className={`${styles.btns} flex w-fit mx-auto gap-[1.041vw]`}>
          {/* CustomCheckBoxText component for selecting options */}
          <CustomCheckBoxText btnSize="xl" inputType="radio" name="pressReleaseAbout">
          Update
          </CustomCheckBoxText>
          <CustomCheckBoxText btnSize="xl" inputType="radio" name="pressReleaseAbout">
          Event
          </CustomCheckBoxText>
          <CustomCheckBoxText btnSize="xl" inputType="radio" name="pressReleaseAbout">
          Release
          </CustomCheckBoxText>
        </div>
      </div>
    </div>
    </NextPrevNav>
  );
};

export default page;
