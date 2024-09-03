"use client";
import React, { useState } from "react";
import styles from "./brand-selection.module.css";
import CustomCheckBoxText from "@/app/_components/customCheckBox/CustomCheckBoxText";
import Link from "next/link";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";

const Page = () => {
  const [haveWebsite, setHaveWebsite] = useState(false);
  const [doLater, setDoLater] = useState(false);
  return (
    <NextPrevNav
      nextLink="/dashboard/services/web-design/website-style"
      backLink="/dashboard/services/web-design/website-technology"
    >
      {/* // Main container div with relative positioning */}
      <div className="h-full relative">
        {/* Inner container for the video end point section with custom styles */}
        <div
          className={`${styles.brandSelection} w-full h-full flex justify-center items-center`}
        >
          {/* Nested div for content */}
          <div>
            {/* Text center alignment and margin bottom */}
            <div className="text-center mx-auto mb-[--sy-48px]">
              {/* Main heading with margin bottom and underlined text */}
              <h2 className="mb-[--sy-8px]">
                Do you already have a brand identity, or would you like <br /> us to
                create one for you?
              </h2>
              <p>
                Our talented designers can create a brand identity for you in <br /> no
                time, or you can provide your own!
              </p>
            </div>

            {/* Container for buttons with flexbox layout, width fit, margin auto, and gap between buttons */}
            <div
              className={`${styles.btns} flex w-fit mx-auto gap-[--22px] mb-[--sy-55px]`}
            >
              {/* CustomCheckBoxText component for selecting options */}
              <CustomCheckBoxText
                onClick={() => setHaveWebsite(true)}
                btnSize="xl"
                inputType="radio"
                name="styleAnswer"
              >
                I’ve got my own
              </CustomCheckBoxText>
              <CustomCheckBoxText
                onClick={() => setHaveWebsite(false)}
                btnSize="xl"
                inputType="radio"
                name="styleAnswer"
              >
                Create one for me!
              </CustomCheckBoxText>
            </div>

            {/* Divider */}
            <hr className={styles.divider} />

            <div
              className={`mx-auto w-full ${
                haveWebsite ? "" : "grayscale-[50%] opacity-50"
              }`}
            >
              {/* Product Link field with optional span */}
              <h3 className="mb-[--sy-14px] font-semibold text-[--20px]">Upload Your Brand Identity</h3>
              <div className="flex gap-[1vw] items-start mb-[1.2vw]">
                {/* Product Link input field */}
                <input
                  disabled={haveWebsite ? false : true}
                  type="text"
                  placeholder="Upload Brand Identity"
                  className="flex-grow h-full mb-[1vw] w-[19.773vw] bg-[var(--dark-gray-3)] outline-none rounded-[var(--71px)] px-[1.088vw] py-[0.5vw] placeholder:text-[#FFFFFFCC]"
                />

                {/* Paste Link button */}
                <button
                  disabled={haveWebsite ? false : true}
                  className="bg-[var(--highlight-yellow)] px-[1.892vw] py-[0.4vw] text-black rounded-[var(--33px)]"
                >
                  Upload
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

export default Page;
