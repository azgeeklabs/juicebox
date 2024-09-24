"use client";
import React from "react";
import styles from "./contentScripts.module.css";
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
        name: "script type",
        choice: (
          document.querySelector(
            "input[type='radio']:checked"
          ) as HTMLInputElement
        ).value,
      });
      localStorage.setItem("selectedOption", JSON.stringify(itemsArray));
        dispatch(addOption({
          name: "script type",
          choice: (
            document.querySelector(
              "input[type='radio']:checked"
            ) as HTMLInputElement
          ).value,
        }))
      route.push("/dashboard/services/content-scripts/channel-choice");
    }
  };
  return (
    // Main container div
    <NextPrevNav
      nextLink="/dashboard/services/content-scripts/channel-choice" nextFunc={nextFunc}
    >
      <div className=" flex items-center justify-center h-full">
        {/* Inner container for the video script section with custom styles */}
        <div className={`${styles.contentScripts} w-full mb-[--sy-50px]`}>
          {/* Text center alignment and margin bottom */}
          <div className=" text-center mx-auto mb-[--sy-50px]">
            {/* Main heading with margin bottom and embedded horizontal rule */}
            <h2 className=" mb-[2.667vh]">
              What type of script would you like?
            </h2>
            {/* Subheading with embedded horizontal rule  */}
            <h4>
              Please select the option that best describes your project type.
              <br />
              This helps us understand the specific requirements for your
              project.
            </h4>
          </div>
          {/* Container for buttons with flexbox layout, width fit, margin auto, and gap between buttons */}
          <div className={`${styles.btns} flex w-fit mx-auto gap-[1.041vw]`}>
            {/* CustomCheckBoxText component for selecting options */}
            <CustomCheckBoxText
              btnSize="xl"
              inputType="radio"
              name="scriptType"
              value={"YouTube Videos"}
            >
              YouTube Videos
            </CustomCheckBoxText>
            <CustomCheckBoxText
              btnSize="xl"
              inputType="radio"
              name="scriptType"
              value={"Video Ad"}
            >
              Video Ad
            </CustomCheckBoxText>
            <CustomCheckBoxText
              btnSize="xl"
              inputType="radio"
              name="scriptType"
              value={"Short Film"}
            >
              Short Film
            </CustomCheckBoxText>
          </div>
        </div>
      </div>
    </NextPrevNav>
  );
};

export default Page;
