"use client"
import React, { useEffect } from "react";
import styles from "./adStyle.module.css";
import CustomCheckBoxText from "@/app/_components/customCheckBox/CustomCheckBoxText";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/Store/store";
import { useRouter } from "next/navigation";
import { addOption } from "@/app/reducers/serviceSlice";

const Page = () => {

  const all = useSelector((state: RootState) => state.service);
  const dispatch = useDispatch();
  const route = useRouter();

  const nextFunc = () => {
    const selected = document.querySelector(
      "input[type='radio']:checked"
    ) as HTMLInputElement;

    if (selected) {
      const storedItems =
        typeof window !== "undefined" && localStorage.getItem("selectedOption");
      const itemsArray = storedItems ? JSON.parse(storedItems) : [];
      
      itemsArray.push({
        name: "Do you have a specific style for your ads?",
        choice: selected.value,
      });
      
      localStorage.setItem("selectedOption", JSON.stringify(itemsArray));
      dispatch(
        addOption({
          name: "Do you have a specific style for your ads?",
          choice: selected.value,
        })
      );

      route.push("/dashboard/services/social-media/estimated-cost");
    }
  };

  useEffect(() => {
    console.log(all);
  }, [all]);

  return (
    // Main container div
    <NextPrevNav nextLink="/dashboard/services/social-media/estimated-cost" nextFunc={nextFunc} backLink="/dashboard/services/social-media/ad-type">
      <div className=" flex items-center justify-center h-full mb-[--sy-50px]">
      {/* Inner container for the video script section with custom styles */}
      <div className={`${styles.adStyle} w-full`}>
        {/* Text center alignment and margin bottom */}
        <div className=" text-center mx-auto mb-[--sy-40px]">
          {/* Main heading with margin bottom and embedded horizontal rule */}
          <h2 className=" mb-[--sy-8px]">
          Do you have a specific style for your ads?
          </h2>
          {/* Subheading with embedded horizontal rule  */}
          <h4 className=" w-[70%] mx-auto">
          We can follow your current branding or we can create a new style that est fit to your content!
          </h4>
        </div>
        {/* Container for buttons with flexbox layout, width fit, margin auto, and gap between buttons */}
        <div className={`${styles.btns} flex w-fit mx-auto gap-[--16px]`}>
          {/* CustomCheckBoxText component for selecting options */}
          <CustomCheckBoxText btnSize="xl" inputType="radio" name="adStyle" value={"Follow my branding"}>
          Follow my branding
          </CustomCheckBoxText>
          <CustomCheckBoxText btnSize="xl" inputType="radio" name="adStyle" value={"Make one for me"}>
          Make one for me
          </CustomCheckBoxText>
        </div>
      </div>
    </div>
    </NextPrevNav>
  );
};

export default Page;
