"use client";
import React, { useState } from "react";
import styles from "./videoScript.module.css";
import CustomCheckBoxText from "@/app/_components/customCheckBox/CustomCheckBoxText";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";

const Page = () => {
  const [haveWebsite, setHaveWebsite] = useState(false);
  const [doLater, setDoLater] = useState(false);

  const [pastedText, setPastedText] = useState<string>("");

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setPastedText(text);
    } catch (error) {
      console.error("Failed to read clipboard contents: ", error);
    }
  };

  return (
    // Main container div
    <NextPrevNav
      nextLink="/dashboard/services/video-service/video-duration"
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
              onClick={() => setHaveWebsite(true)}
              btnSize="xl"
              inputType="radio"
              name="styleAnswer"
            >
              I’ve got my own script
            </CustomCheckBoxText>
            <CustomCheckBoxText
              onClick={() => setHaveWebsite(false)}
              btnSize="xl"
              inputType="radio"
              name="styleAnswer"
            >
              Make one for me!
            </CustomCheckBoxText>
          </div>
        </div>
        {/* Divider */}
        <hr className={`${styles.divider}`} />

        <div
          className={`mx-auto w-full ${
            haveWebsite ? "" : "grayscale-[50%] opacity-50"
          }`}
        >
          {/* Product Link field with optional span */}
          <h3 className="mb-[--sy-14px] font-semibold text-[--20px]">
            Website URL
          </h3>
          <div className="flex gap-[1vw] items-start mb-[--sy-24px]">
            {/* Product Link input field */}
            <input
              value={pastedText}
              onChange={(e) => setPastedText(e.target.value)}
              disabled={haveWebsite ? false : true}
              type="text"
              placeholder="URL"
              className="flex-grow h-full mb-[1vw] w-[19.773vw] bg-[var(--dark-gray-3)] outline-none rounded-[var(--71px)] px-[1.088vw] py-[0.5vw] placeholder:text-[#FFFFFFCC]"
            />

            {/* Paste Link button */}
            <button
              onClick={handlePaste}
              disabled={haveWebsite ? false : true}
              className="bg-[var(--highlight-yellow)] px-[1.892vw] py-[0.4vw] text-black rounded-[var(--33px)] font-bold"
            >
              Paste Link
            </button>
          </div>

          {/* Link component for saving progress */}
          <div
            className={`relative block w-fit mx-auto px-[0.52vw] py-[0.3vw] ${
              haveWebsite && "hover:bg-[#484848]"
            } rounded-[var(--32px)] transition-all duration-200 underline`}
          >
            I’ll do this later
            <input
              disabled={haveWebsite ? false : true}
              type="checkbox"
              name="dontHaveChannel"
              className={`absolute opacity-0 inset-0 ${
                haveWebsite ? "cursor-pointer" : ""
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
