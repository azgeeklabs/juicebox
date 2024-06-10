import React from "react";
import styles from "./youtubeChannel.module.css";
import CustomCheckBoxText from "@/app/_components/customCheckBox/CustomCheckBoxText";
import Link from "next/link";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";

const page = () => {
  return (
    // Main outer container div
    <NextPrevNav nextLink="/services/video-service/video-style" backLink="/services/video-service/advertising"><div className="  h-full flex justify-center items-center">
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
          Almost done! Please provide the product link, name, and a brief
          description of the <hr className="border-0" /> product or service
          you are advertising.
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
            className="h-full mb-[1.778vh] w-[28.477vw] bg-[var(--dark-gray-3)] outline-none rounded-[71px] px-[1.088vw] py-[0.889vh] placeholder:text-[#FFFFFF80]"
          />

          {/* Paste Link button */}
          <button className="bg-[var(--highlight-yellow)] px-[1.892vw] py-[0.711vh] text-black rounded-[33px]">
            Paste Link
          </button>
        </div>

        {/* Link for users without a YouTube channel */}
        <Link
          href={""}
          className="underline block w-fit mx-auto px-[0.52vw] py-[0.533vh] hover:bg-[#484848] rounded-[32px] transition-all duration-200"
        >
          I don't have a channel
        </Link>
      </div>
    </div>
  </div></NextPrevNav>
  );
};

export default page;
