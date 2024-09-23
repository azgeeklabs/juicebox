"use client";
import React, { useEffect, useState } from "react";
import styles from "./videoScript.module.css";
import CustomCheckBoxText from "@/app/_components/customCheckBox/CustomCheckBoxText";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/Store/store";
import { useRouter } from "next/navigation";
import {
  addOption,
  incrementTotalSteps,
  selectType,
} from "@/app/reducers/serviceSlice";

const Page = () => {
  const [haveScript, setHaveScript] = useState(false);
  const [inputVal, setInputVal] = useState("");
  const [doLater, setDoLater] = useState(false);

  const [pastedText, setPastedText] = useState<string>("");

  const all = useSelector((state: RootState) => state.service);
  const route = useRouter();
  const dispatch = useDispatch();

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setPastedText(text);
      setInputVal(text);
    } catch (error) {
      console.error("Failed to read clipboard contents: ", error);
    }
  };
 

  const nextFunc = () => {
    console.log("//////////////////////");
    dispatch(incrementTotalSteps());
    dispatch(selectType("video"));
    const storedItems = typeof window !== "undefined" && localStorage.getItem("selectedOption");
    const itemsArray = storedItems ? JSON.parse(storedItems) : [];
    if (haveScript && !doLater && inputVal) {
      itemsArray.push({
        name: "video script",
        choice: (
          document.querySelector(
            'input[type="radio"]:checked'
          ) as HTMLInputElement
        ).value,
        ans: `${inputVal}`,
      });
      localStorage.setItem("selectedOption", JSON.stringify(itemsArray));
        dispatch(addOption({
          name: "video script",
          choice: (
            document.querySelector(
              'input[type="radio"]:checked'
            ) as HTMLInputElement
          ).value,
          ans: `${inputVal}`,
        }))
      route.push("/dashboard/services/video-service/video-duration");
    } else if (
      !haveScript &&
      !doLater &&
      document.querySelector('input[type="radio"]:checked')
    ) {
      itemsArray.push({
        name: "video script",
        choice: (
          document.querySelector(
            'input[type="radio"]:checked'
          ) as HTMLInputElement
        ).value,
      });
      localStorage.setItem("selectedOption", JSON.stringify(itemsArray));
      
        dispatch(addOption({
          name: "video script",
          choice: (
            document.querySelector(
              'input[type="radio"]:checked'
            ) as HTMLInputElement
          ).value,
        }))
      route.push("/dashboard/services/video-service/video-duration");
    } else if (doLater) {
      itemsArray.push({
        name: "video script",
        choice: (
          document.querySelector(
            'input[type="checkbox"]:checked'
          ) as HTMLInputElement
        ).value,
      });
      localStorage.setItem("selectedOption", JSON.stringify(itemsArray));
     
        dispatch(addOption({
          name: "video script",
          choice: (
            document.querySelector(
              'input[type="checkbox"]:checked'
            ) as HTMLInputElement
          ).value,
        }))
      route.push("/dashboard/services/video-service/video-duration");
    }
  };
  useEffect(()=>{
    console.log(all);
    
    },[all])
  return (
    // Main container div
    <NextPrevNav
      nextLink="/dashboard/services/video-service/video-duration"
      nextFunc={() => nextFunc()}
      backLink="/dashboard/services/video-service/addToVideo"
    >
      <div
        className={`flex flex-col items-center justify-center h-full ${styles.videoScript__container}`}
      >
        {/* Inner container for the video script section with custom styles */}
        <div className={`${styles.videoScript} w-full`}>
          {/* Text center alignment and margin bottom */}
          <div className=" text-center mx-auto mb-[--sy-48px]">
            {/* Main heading with margin bottom and embedded horizontal rule */}
            <h2 className=" mb-[--16px]">
              Do you already have a script for this video, or would
              <hr className=" border-0" />
              you like us to create one for you?
            </h2>
            {/* Subheading with embedded horizontal rule  */}
            <h4>
              Our talented scriptwriters can create a script for your video in
              no time, <hr className=" border-0" /> or you can provide your own!
            </h4>
          </div>
          {/* Container for buttons with flexbox layout, width fit, margin auto, and gap between buttons */}
          <div className={`${styles.btns} flex w-fit mx-auto gap-[--22px]`}>
            {/* CustomCheckBoxText component for selecting options */}
            <CustomCheckBoxText
              onClick={() => setHaveScript(true)}
              btnSize="xl"
              inputType="radio"
              name="styleAnswer"
              value={"I Have a script"}
            >
              I Have a script
            </CustomCheckBoxText>
            <CustomCheckBoxText
              onClick={() => {setHaveScript(false);
                if (document.querySelector('input[type="checkbox"]:checked')) {
                  (document.querySelector('input[type="checkbox"]:checked') as HTMLInputElement).checked = false;
                }
                setInputVal("")
                setPastedText("")
              }}
              btnSize="xl"
              inputType="radio"
              name="styleAnswer"
              value={"Make one for me!"}
            >
              Make one for me!
            </CustomCheckBoxText>
          </div>
        </div>
        {/* Divider */}
        <hr className={`${styles.divider}`} />

        <div
          className={`mx-auto w-full ${
            haveScript ? "" : "grayscale-[50%] opacity-50"
          }`}
        >
          {/* Product Link field with optional span */}
          <h3 className="mb-[--sy-14px] font-semibold text-[--20px]">
            Script URL
          </h3>
          <div className="flex gap-[1vw] items-start mb-[--sy-24px]">
            {/* Product Link input field */}
            <input
              value={pastedText}
              onChange={(e) => {
                setPastedText(e.target.value);
                setInputVal(e.target.value);
              }}
              disabled={haveScript ? false : true}
              type="text"
              placeholder="URL"
              className="flex-grow h-full mb-[1vw] w-[19.773vw] bg-[var(--dark-gray-3)] outline-none rounded-[var(--71px)] px-[1.088vw] py-[0.5vw] placeholder:text-[#FFFFFFCC]"
            />

            {/* Paste Link button */}
            <button
              onClick={handlePaste}
              disabled={haveScript ? false : true}
              className="bg-[var(--highlight-yellow)] px-[1.892vw] py-[0.4vw] text-black rounded-[var(--33px)] font-bold"
            >
              Paste Link
            </button>
          </div>

          {/* Link component for saving progress */}
          <div
            className={`relative block w-fit mx-auto px-[0.52vw] py-[0.3vw] ${
              haveScript && "hover:bg-[#484848]"
            } rounded-[var(--32px)] transition-all duration-200 underline`}
          >
            I’ll do this later
            <input
              disabled={haveScript ? false : true}
              type="checkbox"
              name="I’ll do this later"
              value={"I’ll do this later"}
              className={`absolute opacity-0 inset-0 ${
                haveScript ? "cursor-pointer" : ""
              }`}
              onChange={() => setDoLater((prev) => !prev)}
            />
          </div>
        </div>
      </div>
    </NextPrevNav>
  );
};

export default Page;
