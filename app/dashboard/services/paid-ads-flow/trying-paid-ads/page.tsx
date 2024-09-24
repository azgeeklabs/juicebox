"use client"
import React from "react";
import styles from "./tryingPaidAds.module.css";
import CustomCheckBoxText from "@/app/_components/customCheckBox/CustomCheckBoxText";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { addOption } from "@/app/reducers/serviceSlice";

const Page = () => {
  const dispatch = useDispatch();
  const route = useRouter();
  const nextFunc = () => {
    const storedItems = typeof window !== "undefined" && localStorage.getItem("selectedOption");
    const itemsArray = storedItems ? JSON.parse(storedItems) : [];
    if (document.querySelector("input[type='radio']:checked")) {
      itemsArray.push({
        name: "Have you tried running paid ads before?",
        choice: (
          document.querySelector(
            "input[type='radio']:checked"
          ) as HTMLInputElement
        ).value,
      });
      localStorage.setItem("selectedOption", JSON.stringify(itemsArray));
        dispatch(addOption({
          name: "Have you tried running paid ads before?",
          choice: (
            document.querySelector(
              "input[type='radio']:checked"
            ) as HTMLInputElement
          ).value,
        }))
      route.push("/dashboard/services/paid-ads-flow/create-content");
    }
  };
  return (
    // Main outer container div
    <NextPrevNav nextLink="/dashboard/services/paid-ads-flow/create-content" nextFunc={nextFunc} backLink="/dashboard/services/paid-ads-flow/create-account"><div className=" h-full flex items-center justify-center">
    {/* Inner container with full width, custom video style styles, and top padding */}
    <div className={`${styles.tryingPaidAds} w-full mb-[--sy-50px]`}>
      {/* Header section with centered text, auto margins for centering, and bottom margin */}
      <div className="text-center mx-auto mb-[--sy-32px]">
        {/* Main heading with bottom margin */}
        <h2 className="mb-[--sy-8px] text-center">
        Have you tried running paid ads before?
        </h2>

        {/* Subheading with horizontal rule (line) */}
        <h4 className=" w-[70%] mx-auto text-[#FFFFFFCC]">
        Select 'Yes' if you have experience running ads. Select 'No' if this is your first time running ads.        </h4>
      </div>

      {/* Buttons container with custom styles, flexbox layout, width fit to content, auto margins for centering, and gap */}
      <div className={`${styles.btns} flex w-fit mx-auto gap-[--8px]`}>
        {/* Yes option with large button size and radio input type */}
        <CustomCheckBoxText btnSize="xl" inputType="radio" name="padiAdsAnswer" value={"Yes"}>
        Yes
        </CustomCheckBoxText>

        {/* No option with large button size and radio input type */}
        <CustomCheckBoxText btnSize="xl" inputType="radio" name="padiAdsAnswer" value={"No"}>
        No
        </CustomCheckBoxText>
      </div>
    </div>
  </div></NextPrevNav>
  );
};

export default Page;
