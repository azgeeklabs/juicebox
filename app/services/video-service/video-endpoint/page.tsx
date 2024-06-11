import React from "react";
import styles from "./videoEndPoint.module.css";
import CustomCheckBoxText from "@/app/_components/customCheckBox/CustomCheckBoxText";
import Link from "next/link";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";

const page = () => {
  return (
    // Main container div with relative positioning
    <NextPrevNav nextLink="/services" backLink="/services/video-service/video-duration" nextText="All Done">
      <div className="h-full relative">
      {/* Inner container for the video end point section with custom styles */}
      <div
        className={`${styles.videoEndPoint} w-full h-full flex justify-center items-center`}
      >
        {/* Nested div for content */}
        <div>
          {/* Text center alignment and margin bottom */}
          <div className="text-center mx-auto mb-[2.271vw]">
            {/* Main heading with margin bottom and underlined text */}
            <h2 className="mb-[1.5vw]">
              Based on everything you told us, <u>the estimated cost</u> of this{" "}
              <hr className="border-0" /> video is <span>$XXX</span> and would
              take around <span>40 Days</span> to finish.
            </h2>
          </div>

          {/* Container for buttons with flexbox layout, width fit, margin auto, and gap between buttons */}
          <div
            className={`${styles.btns} flex w-fit mx-auto gap-[1.041vw] mb-[1.5vw]`}
          >
            {/* CustomCheckBoxText component for selecting options */}
            <CustomCheckBoxText
              btnSize="xl"
              inputType="radio"
              name="styleAnswer"
            >
              Book a call with our experts
            </CustomCheckBoxText>
            <CustomCheckBoxText
              btnSize="xl"
              inputType="radio"
              name="styleAnswer"
            >
              Let's make this video!
            </CustomCheckBoxText>
          </div>

          {/* Link component for saving progress */}
          <button
            className="block w-fit mx-auto px-[0.52vw] py-[0.3vw] hover:bg-[#484848] rounded-[var(--32px)] transition-all duration-200 underline"
          >
            Save my Progress
          </button>
        </div>
      </div>
    </div>
    </NextPrevNav>
  );
};

export default page;
