import React from "react";
import styles from "./app-wrapup.module.css";
import CustomCheckBoxText from "@/app/_components/customCheckBox/CustomCheckBoxText";
import Link from "next/link";

const page = () => {
  return (
    // Main container div with relative positioning
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
              Based on your selections, the estimated cost for your project is{" "}
              <span> $1000 </span> and it will take approximately
              <span> 15-20 </span> days to complete
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
          <Link
            href={""}
            className="block text-[0.813rem] underline w-fit mx-auto px-[0.52vw] py-[0.3vw] rounded-[32px] transition-all duration-200"
          >
            Save my Progress
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
