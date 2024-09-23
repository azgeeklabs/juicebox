"use client"
import React, { useEffect } from "react";
import styles from "./adType.module.css";
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
        name: "ad type",
        choice: selected.value,
      });
      
      localStorage.setItem("selectedOption", JSON.stringify(itemsArray));
      dispatch(
        addOption({
          name: "ad type",
          choice: selected.value,
        })
      );

      route.push("/dashboard/services/social-media/ad-style");
    }
  };

  useEffect(() => {
    console.log(all);
  }, [all]);

  return (
    // Main container div
    <NextPrevNav nextLink="/dashboard/services/social-media/ad-style" nextFunc={nextFunc} backLink="/dashboard/services/social-media/creation-frequency">
      <div className=" flex items-center justify-center h-full mb-[--sy-50px]">
      {/* Inner container for the video script section with custom styles */}
      <div className={`${styles.adType} w-full`}>
        {/* Text center alignment and margin bottom */}
        <div className=" text-center mx-auto mb-[--55px]">
          {/* Main heading with margin bottom and embedded horizontal rule */}
          <h2 className=" mb-[--sy-8px]">
          What type of Ad you would like?
          </h2>
          {/* Subheading with embedded horizontal rule  */}
          <h4>
          We can create image based content or video, the choice is yours!
          </h4>
        </div>
        {/* Container for buttons with flexbox layout, width fit, margin auto, and gap between buttons */}
        <div className={`${styles.btns} flex w-fit mx-auto gap-[--32px]`}>
          {/* CustomCheckBoxText component for selecting options */}
          <CustomCheckBoxText btnSize="xl" inputType="radio" name="adType" value={"Images"}>
          Images
          </CustomCheckBoxText>
          <CustomCheckBoxText btnSize="xl" inputType="radio" name="adType" value={"Videos"}>
          Videos
          </CustomCheckBoxText>
        </div>
      </div>
    </div>
    </NextPrevNav>
  );
};

export default Page;
