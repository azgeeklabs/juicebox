"use client";
import React, { useEffect } from "react";
import styles from "./videoStyle.module.css";
import CustomCheckBoxText from "@/app/_components/customCheckBox/CustomCheckBoxText";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";
import { useDispatch, useSelector } from "react-redux";
import { addOption, incrementTotalSteps } from "@/app/reducers/serviceSlice";
import { useRouter } from "next/navigation";
import { RootState } from "@/app/Store/store";

const Page = () => {
  const all = useSelector((state:RootState)=>state.service)
  const dispatch = useDispatch();
  const route = useRouter();
  const nextFunc = () => {
    console.log("//////////////////////");
    const selected = document.querySelector(
      "input[type='radio']:checked"
    ) as HTMLInputElement;
    const storedItems = typeof window !== "undefined" && localStorage.getItem("selectedOption");
    const itemsArray = storedItems ? JSON.parse(storedItems) : [];
    if (document.querySelector("input[type='radio']:checked")) {
      itemsArray.push({
        name: "Would you like this video to match the style of the videos you've already published on your channel?",
        choice: (
          document.querySelector(
            "input[type='radio']:checked"
          ) as HTMLInputElement
        ).value,
      });
      localStorage.setItem("selectedOption", JSON.stringify(itemsArray));
        dispatch(addOption({
          name: "Would you like this video to match the style of the videos you've already published on your channel?",
          choice: (
            document.querySelector(
              "input[type='radio']:checked"
            ) as HTMLInputElement
          ).value,
        }))
      route.push("/dashboard/services/video-service/choose-kind");
    }
  };
  useEffect(()=>{
console.log(all);

  },[all])
  return (
    // Main outer container div
    <NextPrevNav
      nextLink="/dashboard/services/video-service/choose-kind"
      nextFunc={() => nextFunc()}
      backLink="/dashboard/services/video-service/youtube-channel"
    >
      <div className=" h-full flex items-center justify-center">
        {/* Inner container with full width, custom video style styles, and top padding */}
        <div className={`${styles.videoStyle} w-full h-[60%]`}>
          {/* Header section with centered text, auto margins for centering, and bottom margin */}
          <div className="text-center mx-auto mb-[4.037vh]">
            {/* Main heading with bottom margin */}
            <h2 className="mb-[--sy-24px]">
              Would you like this video to match the style of the videos
              <hr className="border-0" /> you've already published on your
              channel?
            </h2>

            {/* Subheading with horizontal rule (line) */}
            <h4 className=" mb-[--sy-48px]">
              This helps ensure consistency with your existing content, or we
              can let our <hr className="border-0" /> creative juices flow to
              create an exceptional video for your channel!
            </h4>
          </div>

          {/* Buttons container with custom styles, flexbox layout, width fit to content, auto margins for centering, and gap */}
          <div className={`${styles.btns} flex w-fit mx-auto gap-[--22px]`}>
            {/* Yes option with large button size and radio input type */}
            <CustomCheckBoxText
              btnSize="xl"
              inputType="radio"
              name="styleAnswer"
              value={"yes"}
            >
              Yes!
            </CustomCheckBoxText>

            {/* No option with large button size and radio input type */}
            <CustomCheckBoxText
              btnSize="xl"
              inputType="radio"
              name="styleAnswer"
              value={"no"}
            >
              Nah, impress me!
            </CustomCheckBoxText>
          </div>
        </div>
      </div>
    </NextPrevNav>
  );
};

export default Page;
