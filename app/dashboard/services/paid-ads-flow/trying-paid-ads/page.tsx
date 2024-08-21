import React from "react";
import styles from "./tryingPaidAds.module.css";
import CustomCheckBoxText from "@/app/_components/customCheckBox/CustomCheckBoxText";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";

const Page = () => {
  return (
    // Main outer container div
    <NextPrevNav nextLink="/dashboard/services/paid-ads-flow/create-content" backLink="/dashboard/services/paid-ads-flow/create-account"><div className=" h-full flex items-center justify-center">
    {/* Inner container with full width, custom video style styles, and top padding */}
    <div className={`${styles.tryingPaidAds} w-full`}>
      {/* Header section with centered text, auto margins for centering, and bottom margin */}
      <div className="text-center mx-auto mb-[4.037vh]">
        {/* Main heading with bottom margin */}
        <h2 className="mb-[2.667vh] text-center">
        Have you tried running paid ads before?
        </h2>

        {/* Subheading with horizontal rule (line) */}
        <h4 className=" w-[70%] mx-auto text-[#FFFFFFCC]">
        Select 'Yes' if you have experience running ads. Select 'No' if this is your first time running ads.        </h4>
      </div>

      {/* Buttons container with custom styles, flexbox layout, width fit to content, auto margins for centering, and gap */}
      <div className={`${styles.btns} flex w-fit mx-auto gap-[1.041vw]`}>
        {/* Yes option with large button size and radio input type */}
        <CustomCheckBoxText btnSize="xl" inputType="radio" name="padiAdsAnswer">
        Yes
        </CustomCheckBoxText>

        {/* No option with large button size and radio input type */}
        <CustomCheckBoxText btnSize="xl" inputType="radio" name="padiAdsAnswer">
        No
        </CustomCheckBoxText>
      </div>
    </div>
  </div></NextPrevNav>
  );
};

export default Page;
