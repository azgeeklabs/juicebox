"use client";
import React, { useEffect, useState } from "react";
import styles from "./videoDuration.module.css";
import Link from "next/link";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";
// import CustomTypeRange from "@/app/_components/customTypeRange/CustomTypeRange";
import dynamic from "next/dynamic";
const CustomTypeRange = dynamic(() => import('@/app/_components/customTypeRange/CustomTypeRange'), { ssr: false })


const Page = () => {
  const [saveProgress, setSaveProgress] = useState(false);

  return (
    <NextPrevNav
      nextLink="/dashboard/services/video-service/video-endpoint"
      backLink="/dashboard/services/video-service/videoScript"
    >
      <div className=" flex justify-center items-center h-full w-full">
        <div className={`${styles.videoDuration} w-full`}>
          {/* Text center alignment and margin bottom */}
          <div className="text-center mx-auto mb-[--54px]">
            {/* Main heading with margin bottom */}
            <h2 className="mb-[--sy-16px]">
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
          
          <div className=" w-[85%] mx-auto mb-[--35px]">
          <CustomTypeRange />
          </div>

          {/* Link component for users who are not sure about the duration */}
          <div
              className={`relative block w-fit mx-auto px-[0.52vw] py-[0.3vw] hover:bg-[#484848] rounded-[var(--32px)] transition-all duration-200 `}
            >
              I’m not sure
              <input
                type="checkbox"
                name="saveProgress"
                className={`absolute opacity-0 inset-0 cursor-pointer`}
                onChange={() => setSaveProgress((prev) => !prev)}
              />
            </div>
        </div>
      </div>
    </NextPrevNav>
  );
};

export default Page;
