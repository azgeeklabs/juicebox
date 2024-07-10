"use client";
import React, { useEffect, useState } from "react";
import styles from "./videoDuration.module.css";
import Link from "next/link";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";
// import CustomTypeRange from "@/app/_components/customTypeRange/CustomTypeRange";
import dynamic from "next/dynamic";
const CustomTypeRange = dynamic(() => import('@/app/_components/customTypeRange/CustomTypeRange'), { ssr: false })


const page = () => {

  return (
    <NextPrevNav
      nextLink="/dashboard/services/video-service/video-endpoint"
      backLink="/dashboard/services/video-service/videoScript"
    >
      <div className=" flex justify-center items-center h-full w-full">
        <div className={`${styles.videoDuration} w-full`}>
          {/* Text center alignment and margin bottom */}
          <div className="text-center mx-auto mb-[5.333vh]">
            {/* Main heading with margin bottom */}
            <h2 className="mb-[2.667vh]">
              How long would you like the video to be?
            </h2>

            {/* Subheading with embedded horizontal rule */}
            <h4>
              Slide to your required video duration. If you're not sure, that's
              okay! We can help <hr className="border-0" /> determine the ideal
              length for your project.
            </h4>
          </div>

          {/* Container for the duration indicator with custom background, width, height, and margin */}
          
          <CustomTypeRange />

          {/* Link component for users who are not sure about the duration */}
          <Link
            href={""}
            className="underline block w-fit mx-auto px-[0.52vw] py-[0.533vh] hover:bg-[#484848] rounded-[var(--32px)] transition-all duration-200 mt-[0.5vw]"
          >
            I’m not sure
          </Link>
        </div>
      </div>
    </NextPrevNav>
  );
};

export default page;
