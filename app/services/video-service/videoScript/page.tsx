import React from "react";
import styles from "./videoScript.module.css";
import CustomCheckBoxText from "@/app/_components/customCheckBox/CustomCheckBoxText";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";

const page = () => {
  return (
    // Main container div
    <NextPrevNav nextLink="/services/video-service/video-duration" backLink="/services/video-service/addToVideo">
      <div className=" flex items-center justify-center h-full">
      {/* Inner container for the video script section with custom styles */}
      <div className={`${styles.videoScript} w-full`}>
        {/* Text center alignment and margin bottom */}
        <div className=" text-center mx-auto mb-[4.037vh]">
          {/* Main heading with margin bottom and embedded horizontal rule */}
          <h2 className=" mb-[2.667vh]">
            Do you already have a script for this video, or would
            <hr className=" border-0" />
            you like us to create one for you?
          </h2>
          {/* Subheading with embedded horizontal rule  */}
          <h4>
            Our talented scriptwriters can create a script for your video in no
            time, <hr className=" border-0" /> or you can provide your own!
          </h4>
        </div>
        {/* Container for buttons with flexbox layout, width fit, margin auto, and gap between buttons */}
        <div className={`${styles.btns} flex w-fit mx-auto gap-[1.041vw]`}>
          {/* CustomCheckBoxText component for selecting options */}
          <CustomCheckBoxText btnSize="xl" inputType="radio" name="styleAnswer">
            I’ve got my own script
          </CustomCheckBoxText>
          <CustomCheckBoxText btnSize="xl" inputType="radio" name="styleAnswer">
            Make one for me!
          </CustomCheckBoxText>
        </div>
      </div>
    </div>
    </NextPrevNav>
  );
};

export default page;
