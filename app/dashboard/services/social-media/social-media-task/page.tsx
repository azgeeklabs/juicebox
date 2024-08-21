"use client"
import React, { use, useState } from "react";
import styles from "./socialMediaTask.module.css";
import CustomCheckBoxText from "@/app/_components/customCheckBox/CustomCheckBoxText";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";

const Page = () => {
    const [answer,setAnswer] = useState("")
  return (
    // Main container div
    <NextPrevNav nextLink={answer == "Create" ? "/dashboard/services/social-media/creation-frequency" : answer == "Audience" ? "/dashboard/services/social-media/audience-frequency" : answer == "Post" ? "/dashboard/services/social-media/post-frequency" : "#"} backLink="/dashboard/services/social-media">
      <div className=" flex items-center justify-center h-full">
      {/* Inner container for the video script section with custom styles */}
      <div className={`${styles.socialMediaTask} w-full`}>
        {/* Text center alignment and margin bottom */}
        <div className=" text-center mx-auto mb-[4.037vh]">
          {/* Main heading with margin bottom and embedded horizontal rule */}
          <h2 className=" mb-[2.667vh]">
          What do you want us to do for your social media page?
          </h2>
          {/* Subheading with embedded horizontal rule  */}
          <h4 >
          Select the tasks you want us to handle. You can choose multiple options.
          </h4>
        </div>
        {/* Container for buttons with flexbox layout, width fit, margin auto, and gap between buttons */}
        <div className={`${styles.btns} flex w-fit mx-auto gap-[1.041vw]`}>
          {/* CustomCheckBoxText component for selecting options */}
          <CustomCheckBoxText btnSize="xl" inputType="radio" name="socialMediaTask" onClick={()=>setAnswer("Create")}>
          Create posts for me
          </CustomCheckBoxText>
          <CustomCheckBoxText btnSize="xl" inputType="radio" name="socialMediaTask" onClick={()=>setAnswer("Audience")}>
          Engage with my audience
          </CustomCheckBoxText>
          <CustomCheckBoxText btnSize="xl" inputType="radio" name="socialMediaTask" onClick={()=>setAnswer("Post")}>
          Post for me
          </CustomCheckBoxText>
        </div>
      </div>
    </div>
    </NextPrevNav>
  );
};

export default Page;
