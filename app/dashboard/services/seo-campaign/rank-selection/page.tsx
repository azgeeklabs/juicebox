import React from "react";
import styles from "./rank-selection.module.css";
import CustomCheckBoxText from "@/app/_components/customCheckBox/CustomCheckBoxText";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";

const Page = () => {
  return (
    <NextPrevNav
      backLink="/dashboard/services/seo-campaign/advertising-details"
      nextLink="/dashboard/services/seo-campaign/keyword-selection"
    >
      <div className={`${styles.rankSelection} w-full `}>
        <div className=" text-center mx-auto mb-[2vw]">
          <h2 className=" mb-[1.5vw]">I'm trying to rank for</h2>
          <p>
            Please select the desired position for your product to appear in
            search engine results. The price may vary based on the selected
            rank.
          </p>
        </div>
        <div className="flex justify-center items-center gap-[1vw]">
          <CustomCheckBoxText btnSize="md" inputType="checkbox">
            1
          </CustomCheckBoxText>
          <CustomCheckBoxText btnSize="md" inputType="checkbox">
            3
          </CustomCheckBoxText>
          <CustomCheckBoxText btnSize="md" inputType="checkbox">
            5
          </CustomCheckBoxText>
          <CustomCheckBoxText btnSize="md" inputType="checkbox">
            5+
          </CustomCheckBoxText>
        </div>
      </div>
    </NextPrevNav>
  );
};

export default Page;
