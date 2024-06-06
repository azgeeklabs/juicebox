import React from "react";
import styles from "./youtubeChannel.module.css";
import CustomCheckBoxText from "@/app/_components/customCheckBox/CustomCheckBoxText";
import Link from "next/link";

const page = () => {
  return (
    // Main outer container div
    <div className="  h-full flex justify-center items-center">
      {/* Inner container with full width and custom YouTube channel styles */}
      <div className={`${styles.youtubeChannel} w-full`}>
        {/* Header section with centered text, auto margins for centering, and vertical margins */}
        <div className="text-center mx-auto mb-[3vw]">
          {/* Main heading with bottom margin */}
          <h2 className="mb-[1.5vw]">
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
          <h3 className="mb-[0.6vw]">Channel URL</h3>
          <div className="flex gap-[1vw] items-start mb-[1.5vw]">
            {/* Channel URL input field */}
            <input
              type="text"
              placeholder="Channel"
              className="h-full mb-[1vw] w-[28.477vw] bg-[var(--dark-gray-3)] outline-none rounded-[71px] px-[1.088vw] py-[0.5vw] placeholder:text-[#FFFFFF80]"
            />

            {/* Paste Link button */}
            <button className="bg-[#F8F24B] px-[1.892vw] py-[0.4vw] text-black rounded-[33px]">
              Paste Link
            </button>
          </div>

          {/* Link for users without a YouTube channel */}
          <Link
            href={""}
            className="underline block w-fit mx-auto px-[0.52vw] py-[0.3vw] hover:bg-[#484848] rounded-[32px] transition-all duration-200"
          >
            I don't have a channel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
