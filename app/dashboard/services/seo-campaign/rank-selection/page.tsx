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
      <div className={`${styles.rankSelection} w-full mb-[--sy-50px]`}>
        <div className=" text-center mx-auto mb-[--sy-48px]">
          <h2 className=" mb-[--sy-16px]">I'm trying to rank for</h2>
          <p>
            Please select the desired position for your product to appear in <br />
            search engine results. The price may vary based on the selected
            rank.
          </p>
        </div>
        <div className="flex justify-center items-center gap-[1vw]">
          <CustomCheckBoxText btnSize="md" inputType="radio" name="position">
            1
          </CustomCheckBoxText>
          <CustomCheckBoxText btnSize="md" inputType="radio" name="position">
            3
          </CustomCheckBoxText>
          <CustomCheckBoxText btnSize="md" inputType="radio" name="position">
            5
          </CustomCheckBoxText>
          <CustomCheckBoxText btnSize="md" inputType="radio" name="position">
            5+
          </CustomCheckBoxText>
        </div>
      </div>
    </NextPrevNav>
  );
};

export default Page;
