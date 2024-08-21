"use client";
import React from "react";
import styles from "./youtubeChannel.module.css";
import CustomCheckBoxText from "@/app/_components/customCheckBox/CustomCheckBoxText";
import Link from "next/link";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";

const Page = () => {
  const [dontHaveChannel, setDontHaveChannel] = React.useState(false);

  return (
    // Main outer container div
    <NextPrevNav
      nextLink="/dashboard/services/video-service/video-style"
      backLink="/dashboard/services/video-service/advertising"
    >
      <div className="  h-full flex justify-center items-center">
        {/* Inner container with full width and custom YouTube channel styles */}
        <div className={`${styles.youtubeChannel} w-full`}>
          {/* Header section with centered text, auto margins for centering, and vertical margins */}
          <div className="text-center mx-auto mb-[5.333vh]">
            {/* Main heading with bottom margin */}
            <h2 className="mb-[2.667vh]">
              Do you have an existing YouTube channel?
            </h2>

            {/* Subheading with horizontal rule (line) */}
            <h4>
              If you have a YouTube channel, please provide us with the link.
              <br />
              This will help us align the video with your existing content and
              style.
            </h4>
          </div>

          {/* Form container with auto margins for centering */}
          <div className="mx-auto w-fit">
            {/* Channel URL field */}
            <h3 className="mb-[1.067vh]">Channel URL</h3>
            <div className="flex gap-[1vw] items-start mb-[2.667vh]">
              {/* Channel URL input field */}
              <input
                type="text"
                placeholder="Channel"
                className="h-full mb-[1.778vh] w-[28.477vw] bg-[var(--dark-gray-3)] outline-none rounded-[var(--71px)] px-[1.088vw] py-[0.889vh] placeholder:text-[#FFFFFF80]"
              />

              {/* Paste Link button */}
              <button className="bg-[var(--highlight-yellow)] px-[1.892vw] py-[0.711vh] text-black rounded-[var(--33px)]">
                Paste Link
              </button>
            </div>

            {/* Link for users without a YouTube channel */}
            <div className="underline block w-fit mx-auto px-[0.52vw] relative py-[0.533vh] hover:bg-[#484848] rounded-[var(--32px)] transition-all duration-200">
              I don't have a channel
              <input
                type="checkbox"
                name="dontHaveChannel"
                className="absolute opacity-0 inset-0 cursor-pointer"
                onChange={() => setDontHaveChannel((prev) => !prev)}
              />
            </div>
          </div>
        </div>
      </div>
    </NextPrevNav>
  );
};

export default Page;
