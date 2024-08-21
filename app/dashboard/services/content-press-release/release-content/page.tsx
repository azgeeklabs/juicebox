"use client";
import React, { use, useState } from "react";
import styles from "./releaseContent.module.css";
import CustomCheckBoxText from "@/app/_components/customCheckBox/CustomCheckBoxText";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";

const Page = () => {
  const [answer, setAnswer] = useState("");
  return (
    // Main container div
    <NextPrevNav nextLink="/dashboard/services/content-press-release/word-count" backLink="/dashboard/services/content-press-release">
      <div className=" flex items-center justify-center h-full">
        {/* Inner container for the video script section with custom styles */}
        <div className={`${styles.releaseContent} w-full`}>
          {/* Text center alignment and margin bottom */}
          <div className=" text-center mx-auto mb-[4.037vh]">
            {/* Main heading with margin bottom and embedded horizontal rule */}
            <h2 className=" mb-[2.667vh]">
              Could you please specify the content of your press releases?
            </h2>
            {/* Subheading with embedded horizontal rule  */}
            <h4 className="text-[#FFFFFFCC]">
              Please select the option that best describes your project type.{" "}
              <br />
              This helps us understand the specific requirements for your
              project.
            </h4>
          </div>
          {/* Container for buttons with flexbox layout, width fit, margin auto, and gap between buttons */}
          <div className={`${styles.btns} flex w-fit mx-auto gap-[1.041vw]`}>
            {/* CustomCheckBoxText component for selecting options */}
            <CustomCheckBoxText
              btnSize="xl"
              inputType="radio"
              name="releaseContent"
            >
              Update
            </CustomCheckBoxText>
            <CustomCheckBoxText
              btnSize="xl"
              inputType="radio"
              name="releaseContent"
            >
              Event
            </CustomCheckBoxText>
            <CustomCheckBoxText
              btnSize="xl"
              inputType="radio"
              name="releaseContent"
            >
              Release
            </CustomCheckBoxText>
          </div>
        </div>
      </div>
    </NextPrevNav>
  );
};

export default Page;
