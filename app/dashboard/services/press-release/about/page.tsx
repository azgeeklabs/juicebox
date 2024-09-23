"use client";
import React, { useEffect } from "react";
import styles from "./about.module.css";
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
    const storedItems =
      typeof window !== "undefined" && localStorage.getItem("selectedOption");
    const itemsArray = storedItems ? JSON.parse(storedItems) : [];
    if (document.querySelector("input[type='radio']:checked")) {
      itemsArray.push({
        name: "press release type",
        choice: (
          document.querySelector(
            "input[type='radio']:checked"
          ) as HTMLInputElement
        ).value,
      });
      localStorage.setItem("selectedOption", JSON.stringify(itemsArray));
      dispatch(
        addOption({
          name: "press release type",
          choice: (
            document.querySelector(
              "input[type='radio']:checked"
            ) as HTMLInputElement
          ).value,
        })
      );
      route.push("/dashboard/services/press-release/word-count");
    }
  };
  useEffect(() => {
    console.log(all);
  }, [all]);

  return (
    // Main container div
    <NextPrevNav
      nextLink="/dashboard/services/press-release/word-count"
      nextFunc={nextFunc}
      backLink="/dashboard/services/press-release/pr-ready"
    >
      <div className=" flex items-center justify-center h-full mb-[--sy-60px]">
        {/* Inner container for the video script section with custom styles */}
        <div className={`${styles.about} w-full`}>
          {/* Text center alignment and margin bottom */}
          <div className=" text-center mx-auto mb-[--sy-32px]">
            {/* Main heading with margin bottom and embedded horizontal rule */}
            <h2 className=" mb-[--sy-24px]">
              What is your press release about?
            </h2>
            {/* Subheading with embedded horizontal rule  */}
            <h4>Select the type of press release you need us to write.</h4>
          </div>
          {/* Container for buttons with flexbox layout, width fit, margin auto, and gap between buttons */}
          <div className={`${styles.btns} flex w-fit mx-auto gap-[--16px]`}>
            {/* CustomCheckBoxText component for selecting options */}
            <CustomCheckBoxText
              btnSize="xl"
              inputType="radio"
              name="pressReleaseAbout"
              value={"Update"}
            >
              Update
            </CustomCheckBoxText>
            <CustomCheckBoxText
              btnSize="xl"
              inputType="radio"
              name="pressReleaseAbout"
              value={"Event"}
            >
              Event
            </CustomCheckBoxText>
            <CustomCheckBoxText
              btnSize="xl"
              inputType="radio"
              name="pressReleaseAbout"
              value={"Release"}
            >
              Release
            </CustomCheckBoxText>
          </div>
        </div>
      </div>
    </NextPrevNav>
  );
};

export default Page;
