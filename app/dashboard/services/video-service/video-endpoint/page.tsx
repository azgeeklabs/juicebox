"use client"
import React, { useState } from "react";
import styles from "./videoEndPoint.module.css";
import CustomCheckBoxText from "@/app/_components/customCheckBox/CustomCheckBoxText";
import Link from "next/link";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { addOption, incrementTotalSteps } from "@/app/reducers/serviceSlice";
import axios from "axios";

const Page = () => {
  const [saveProgress, setSaveProgress] = useState(false);
  const dispatch = useDispatch();
  const route = useRouter();
  async function makeService() {
    const optionsItems = localStorage.getItem("selectedOption");
    const optionsArray = optionsItems ? JSON.parse(optionsItems) : [];
    console.log(optionsArray,"//////////optionsArray/////////////");
    console.log({
      type:"video",
      totalSteps:13,
      options:optionsArray
    })
    console.log("adel");
    
    
    try {
      const data = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/services/initialize-service`,{
        type:"video",
        totalSteps:13,
        options:optionsArray
      })
      console.log(data);
      route.push("/dashboard/services");
      
    } catch (error) {
      console.log(error,"////////////error////////////");
      
    }
  }
  const nextFunc = () => {
    console.log("//////////////////////");
    const selected = document.querySelector(
      "input[type='radio']:checked"
    ) as HTMLInputElement;
    const storedItems = localStorage.getItem("selectedOption");
    const itemsArray = storedItems ? JSON.parse(storedItems) : [];
    if (document.querySelector("input[type='radio']:checked")) {
      itemsArray.push({
        name: "estimated cost",
        choice: (
          document.querySelector(
            "input[type='radio']:checked"
          ) as HTMLInputElement
        ).value,
      });
      localStorage.setItem("selectedOption", JSON.stringify(itemsArray));
      dispatch(incrementTotalSteps());
      const storedOptionString = localStorage.getItem("selectedOption");
      console.log(storedOptionString);

      if (storedOptionString) {
        const storedOption = JSON.parse(storedOptionString);
        dispatch(addOption(storedOption));
      }
      
      makeService()
    } else if (document.querySelector("input[type='checkbox']:checked")) {
      itemsArray.push({
        name: "estimated cost",
        choice: (
          document.querySelector(
            "input[type='checkbox']:checked"
          ) as HTMLInputElement
        ).value,
      });
      localStorage.setItem("selectedOption", JSON.stringify(itemsArray));
      dispatch(incrementTotalSteps());
      const storedOptionString = localStorage.getItem("selectedOption");
      console.log(storedOptionString);

      if (storedOptionString) {
        const storedOption = JSON.parse(storedOptionString);
        dispatch(addOption(storedOption));
      }
      makeService()
    }
  };
  return (
    // Main container div with relative positioning
    <NextPrevNav nextLink="/dashboard/services" backLink="/dashboard/services/video-service/video-duration" nextText="All Done" nextFunc={()=>nextFunc()}>
      <div className="h-full relative">
      {/* Inner container for the video end point section with custom styles */}
      <div
        className={`${styles.videoEndPoint} w-full h-full flex justify-center items-center`}
      >
        {/* Nested div for content */}
        <div>
          {/* Text center alignment and margin bottom */}
          <div className="text-center mx-auto mb-[--46px]">
            {/* Main heading with margin bottom and underlined text */}
            <h2 >
              Based on everything you told us, <u>the estimated cost</u> of this{" "}
              <hr className="border-0" /> video is <span>$XXX</span> and would
              take around <span>40 Days</span> to finish.
            </h2>
          </div>

          {/* Container for buttons with flexbox layout, width fit, margin auto, and gap between buttons */}
          <div
            className={`${styles.btns} flex w-fit mx-auto gap-[--22px] mb-[--sy-16px]`}
          >
            {/* CustomCheckBoxText component for selecting options */}
            <CustomCheckBoxText
              btnSize="xl"
              inputType="radio"
              name="styleAnswer"
              value={"Book a call with our experts"}
            >
              Book a call with our experts
            </CustomCheckBoxText>
            <CustomCheckBoxText
              btnSize="xl"
              inputType="radio"
              name="styleAnswer"
              value={"Let's make this video!"}
            >
              Let's make this video!
            </CustomCheckBoxText>
          </div>

          {/* Link component for saving progress */}
          <div
              className={`relative block w-fit mx-auto px-[0.52vw] py-[0.3vw] hover:bg-[#484848] rounded-[var(--32px)] transition-all duration-200 `}
            >
              Save my Progress
              <input
                type="checkbox"
                name="saveProgress"
                value={"Save my Progress"}
                className={`absolute opacity-0 inset-0 cursor-pointer`}
                onChange={() => setSaveProgress((prev) => !prev)}
              />
            </div>
        </div>
      </div>
    </div>
    </NextPrevNav>
  );
};

export default Page;
