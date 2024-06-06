import React from "react";
import styles from "./videoStyle.module.css";
import CustomCheckBoxText from "@/app/_components/customCheckBox/CustomCheckBoxText";

const page = () => {
  return (
    // Main outer container div
    <div className=" h-full flex items-center justify-center">
      {/* Inner container with full width, custom video style styles, and top padding */}
      <div className={`${styles.videoStyle} w-full`}>
        {/* Header section with centered text, auto margins for centering, and bottom margin */}
        <div className="text-center mx-auto mb-[2.271vw]">
          {/* Main heading with bottom margin */}
          <h2 className="mb-[1.5vw]">
            Would you like this video to match the style of the videos
            <hr className="border-0" /> you've already published on your
            channel?
          </h2>

          {/* Subheading with horizontal rule (line) */}
          <h4>
            This helps ensure consistency with your existing content, or we can
            let our <hr className="border-0" /> creative juices flow to create
            an exceptional video for your channel!
          </h4>
        </div>

        {/* Buttons container with custom styles, flexbox layout, width fit to content, auto margins for centering, and gap */}
        <div className={`${styles.btns} flex w-fit mx-auto gap-[1.041vw]`}>
          {/* Yes option with large button size and radio input type */}
          <CustomCheckBoxText btnSize="xl" inputType="radio" name="styleAnswer">
            Yes!
          </CustomCheckBoxText>

          {/* No option with large button size and radio input type */}
          <CustomCheckBoxText btnSize="xl" inputType="radio" name="styleAnswer">
            Nah, impress me!
          </CustomCheckBoxText>
        </div>
      </div>
    </div>
  );
};

export default page;
