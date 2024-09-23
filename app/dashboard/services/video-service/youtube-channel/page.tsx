"use client";
import React, { useEffect, useState } from "react";
import styles from "./youtubeChannel.module.css";
import CustomCheckBoxText from "@/app/_components/customCheckBox/CustomCheckBoxText";
import Link from "next/link";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/Store/store";
import {
  addOption,
  incrementTotalSteps,
  selectType,
} from "@/app/reducers/serviceSlice";
import { useRouter } from "next/navigation";

const Page = () => {
  const [dontHaveChannel, setDontHaveChannel] = React.useState(false);
  const [inputVal, setInputVal] = useState("");
  const [pastedText, setPastedText] = useState<string>("");
  const optionss = useSelector((state: RootState) => state.service.options);
  const route = useRouter();
  const dispatch = useDispatch();

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setPastedText(text);
      setInputVal(text);
      const selectedCheckbox = document.querySelector(
        'input[type="checkbox"]:checked'
      ) as HTMLInputElement | null;
    
      // Ensure inputVal is truthy and a checkbox is selected
      if (selectedCheckbox) {
        selectedCheckbox.checked = false; // Uncheck the checkbox
        setDontHaveChannel(false)
      }
    } catch (error) {
      console.error("Failed to read clipboard contents: ", error);
    }
  };
  useEffect(() => {
    console.log(optionss);
  }, [optionss]);

  

  useEffect(() => {
    console.log(optionss);
  }, [optionss]);
  
  console.log(document.querySelector('input[type="checkbox"]:checked'));

  const nextFunc = () => {
    console.log("//////////////////////");
    dispatch(incrementTotalSteps());
    dispatch(selectType("video"));
    const storedItems = typeof window !== "undefined" && localStorage.getItem("selectedOption");
    const itemsArray = storedItems ? JSON.parse(storedItems) : [];
    if (dontHaveChannel) {
      itemsArray.push({
        name: "youtube channel",
        choice: (
          document.querySelector(
            'input[type="checkbox"]:checked'
          ) as HTMLInputElement
        ).value,
      });
      localStorage.setItem("selectedOption", JSON.stringify(itemsArray));
    dispatch(addOption({
      name: "youtube channel",
      choice: (
        document.querySelector(
          'input[type="checkbox"]:checked'
        ) as HTMLInputElement
      ).value,
    }));

      route.push("/dashboard/services/video-service/video-style");
    } else if (inputVal) {
      itemsArray.push({
        name: "youtube channel",
        ans: `${inputVal}`,
      });
      localStorage.setItem("selectedOption", JSON.stringify(itemsArray));
      dispatch(addOption({
        name: "youtube channel",
        ans: `${inputVal}`,
      }));
      route.push("/dashboard/services/video-service/video-style");
    }
  };
  return (
    // Main outer container div
    <NextPrevNav
      nextLink="/dashboard/services/video-service/video-style" nextFunc={()=>nextFunc()}
      backLink="/dashboard/services/video-service/advertising"
    >
      <div className="  h-[55%] flex justify-center">
        {/* Inner container with full width and custom YouTube channel styles */}
        <div className={`${styles.youtubeChannel} w-full`}>
          {/* Header section with centered text, auto margins for centering, and vertical margins */}
          <div className="text-center mx-auto mb-[--sy-48px]">
            {/* Main heading with bottom margin */}
            <h2 className="mb-[--sy-16px]">
              Do you have an existing YouTube channel?
            </h2>

            {/* Subheading with horizontal rule (line) */}
            <h4>
              If you have a YouTube channel, please provide us with the link.
              <br />
              This will help us align the video with your existing content and
              style.
            </h4>
          </div>

          {/* Form container with auto margins for centering */}
          <div className="mx-auto w-fit">
            {/* Channel URL field */}
            <h3 className="mb-[1.067vh]">Channel URL</h3>
            <div className="flex gap-[1vw] items-start mb-[2.667vh]">
              {/* Channel URL input field */}
              <input
                type="text"
                value={pastedText}
                onChange={(e) => {
                  setPastedText(e.target.value);
                  setInputVal(e.target.value);
                  const selectedCheckbox = document.querySelector(
                    'input[type="checkbox"]:checked'
                  ) as HTMLInputElement | null;
                
                  // Ensure inputVal is truthy and a checkbox is selected
                  if (inputVal && selectedCheckbox) {
                    selectedCheckbox.checked = false; // Uncheck the checkbox
                    setDontHaveChannel(false)
                  }
                }}
                placeholder="Channel"
                className="h-full mb-[1.778vh] w-[28.477vw] bg-[var(--dark-gray-3)] outline-none rounded-[var(--71px)] px-[1.088vw] py-[0.889vh] placeholder:text-[#FFFFFFCC]"
              />

              {/* Paste Link button */}
              <button
                onClick={handlePaste}
                className="bg-[var(--highlight-yellow)] px-[1.892vw] py-[0.711vh] text-black rounded-[var(--33px)]"
              >
                Paste Link
              </button>
            </div>

            {/* Link for users without a YouTube channel */}
            <div className="underline block w-fit mx-auto px-[0.52vw] relative py-[0.533vh] hover:bg-[#484848] rounded-[var(--32px)] transition-all duration-200">
              I don't have a channel
              <input
                type="checkbox"
                name="dontHaveChannel"
                value={"I don't have a channel"}
                className="absolute opacity-0 inset-0 cursor-pointer"
                onChange={() => {setDontHaveChannel((prev) => !prev)
                  setInputVal("");
                setPastedText("");
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </NextPrevNav>
  );
};

export default Page;
