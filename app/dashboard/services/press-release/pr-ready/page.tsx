import React from "react";
import styles from "./prReady.module.css";
import CustomCheckBoxText from "@/app/_components/customCheckBox/CustomCheckBoxText";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";

const page = () => {
  return (
    // Main container div
    <NextPrevNav nextLink="/dashboard/services/press-release/about" backLink="/dashboard/services/press-release/release-publishing">
      <div className=" flex items-center justify-center h-full">
      {/* Inner container for the video script section with custom styles */}
      <div className={`${styles.prReady} w-full`}>
        {/* Text center alignment and margin bottom */}
        <div className=" text-center mx-auto mb-[4.037vh]">
          {/* Main heading with margin bottom and embedded horizontal rule */}
          <h2 className=" mb-[2.667vh] w-[70%] mx-auto">
          Do you have a press release ready, or would you like us to write one for you?
          </h2>
          {/* Subheading with embedded horizontal rule  */}
          <h4 className="w-[60%] mx-auto">
          Choose whether you want to upload your own press release or have us write one for you.
          </h4>
        </div>
        {/* Container for buttons with flexbox layout, width fit, margin auto, and gap between buttons */}
        <div className={`${styles.btns} flex w-fit mx-auto gap-[1.041vw]`}>
          {/* CustomCheckBoxText component for selecting options */}
          <CustomCheckBoxText btnSize="xl" inputType="radio" name="pressReleaseReady">
          I have my own
          </CustomCheckBoxText>
          <CustomCheckBoxText btnSize="xl" inputType="radio" name="pressReleaseReady">
          Make one for me
          </CustomCheckBoxText>
        </div>
      </div>
    </div>
    </NextPrevNav>
  );
};

export default page;
