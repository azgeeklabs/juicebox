import React from "react";
import styles from "./createContent.module.css";
import CustomCheckBoxText from "@/app/_components/customCheckBox/CustomCheckBoxText";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";

const Page = () => {
  return (
    // Main outer container div
    <NextPrevNav nextLink="/dashboard/services/paid-ads-flow/estimated-cost" backLink="/dashboard/services/paid-ads-flow/trying-paid-ads"><div className=" h-full flex items-center justify-center">
    {/* Inner container with full width, custom video style styles, and top padding */}
    <div className={`${styles.createContent} w-full mb-[--sy-50px]`}>
      {/* Header section with centered text, auto margins for centering, and bottom margin */}
      <div className="text-center mx-auto mb-[--sy-32px]">
        {/* Main heading with bottom margin */}
        <h2 className="mb-[--sy-8px] text-center">
        Do you have contents ready for your ads?
        </h2>

        {/* Subheading with horizontal rule (line) */}
        <h4 className=" text-center text-[#FFFFFFCC]">
        No content? No problem! Our creative team can help you craft engaging ad content.       </h4>
      </div>

      {/* Buttons container with custom styles, flexbox layout, width fit to content, auto margins for centering, and gap */}
      <div className={`${styles.btns} flex w-fit mx-auto gap-[--8px]`}>
        {/* Yes option with large button size and radio input type */}
        <CustomCheckBoxText btnSize="xl" inputType="radio" name="padiAdsAnswer">
        I have content
        </CustomCheckBoxText>

        {/* No option with large button size and radio input type */}
        <CustomCheckBoxText btnSize="xl" inputType="radio" name="padiAdsAnswer">
        Create content
        </CustomCheckBoxText>
      </div>
    </div>
  </div></NextPrevNav>
  );
};

export default Page;
