"use client";
import React, { useEffect, useState } from "react";
import styles from "./createWebsite.module.css";
import CustomCheckBoxText from "@/app/_components/customCheckBox/CustomCheckBoxText";
import Link from "next/link";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";

const LiveWebsite = () => {
  const [haveWebsite, setHaveWebsite] = useState(false);
  const [doLater, setDoLater] = useState(false);
  const [pastedText, setPastedText] = useState<string>("");
  const [checked,setChecked] = useState(false)

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setPastedText(text);
    } catch (error) {
      console.error("Failed to read clipboard contents: ", error);
    }
  };
 
  return (
    <NextPrevNav
      nextLink={
        haveWebsite
          ? "/dashboard/services/content-website/select-pages"
          : "/dashboard/services/content-website/website-niche"
      }
      backLink="/dashboard/services/content-website/rewrite-website"
    >
      {/* // Main container div with relative positioning */}
      <div className="h-full w-full md:w-[70%] lg:w-[60%] relative">
        {/* Inner container for the video end point section with custom styles */}
        <div
          className={`${styles.createWebsite} w-full h-full flex justify-center items-center`}
        >
          {/* Nested div for content */}
          <div className="w-full">
            {/* Text center alignment and margin bottom */}
            <div className="text-center mx-auto mb-[--sy-38px]">
              {/* Main heading with margin bottom and underlined text */}
              <h2 className="mb-[1vw] w-[60%] mx-auto">
                Do you have a live website?
              </h2>
              <p className=" w-[65%] mx-auto text-[#FFFFFFCC]">
                Please provide us with your website URL
              </p>
            </div>

            {/* Container for buttons with flexbox layout, width fit, margin auto, and gap between buttons */}
            <div
              className={`${styles.btns} flex w-fit mx-auto gap-[1.041vw] mb-[--sy-38px]`}
            >
              {/* CustomCheckBoxText component for selecting options */}
              <CustomCheckBoxText
                onClick={() => setHaveWebsite(true)}
                btnSize="xl"
                inputType="radio"
                name="creationAnswer"
              >
                I have a website
              </CustomCheckBoxText>
              <CustomCheckBoxText
                onClick={() => setHaveWebsite(false)}
                btnSize="xl"
                inputType="radio"
                name="creationAnswer"
              >
                Make one for me
              </CustomCheckBoxText>
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
                  disabled={haveWebsite ? false : true}
                  value={pastedText}
                  onChange={(e) => setPastedText(e.target.value)}
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
        </div>
      </div>
    </NextPrevNav>
  );
};

export default LiveWebsite;
