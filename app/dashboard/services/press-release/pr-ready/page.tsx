"use client"
import React, { useState } from "react";
import styles from "./prReady.module.css";
import CustomCheckBoxText from "@/app/_components/customCheckBox/CustomCheckBoxText";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";

const Page = () => {
  const [haveWebsite, setHaveWebsite] = useState(false);
  const [doLater, setDoLater] = useState(false);

  return (
    // Main container div
    <NextPrevNav nextLink="/dashboard/services/press-release/about" backLink="/dashboard/services/press-release/release-publishing">
      <div className="h-full relative">
        {/* Inner container for the video end point section with custom styles */}
        <div
          className={`${styles.createWebsite} w-full h-full flex justify-center items-center`}
        >
          {/* Nested div for content */}
          <div>
            {/* Text center alignment and margin bottom */}
            <div className="text-center mx-auto mb-[--sy-32px]">
              {/* Main heading with margin bottom and underlined text */}
              <h2 className="mb-[--sy-24px] w-[100%] mx-auto text-[--32px] font-semibold">
              Do you have a press release ready, or would you like us to write one for you?
              </h2>
              <p className=" mx-auto text-[#FFFFFFCC] text-[--18px]">
              Choose whether you want to upload your own press release or have us write one for you.
              </p>
            </div>

            {/* Container for buttons with flexbox layout, width fit, margin auto, and gap between buttons */}
            <div
              className={`${styles.btns} flex w-fit mx-auto gap-[--8px] mb-[1.5vw]`}
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
              Upload Press Release
              </h3>
              <div className="flex gap-[1vw] items-start mb-[--sy-24px]">
                {/* Product Link input field */}
                <input
                  disabled={haveWebsite ? false : true}
                  type="text"
                  placeholder="Upload Press Release"
                  className="flex-grow h-full mb-[1vw] w-[19.773vw] bg-[var(--dark-gray-3)] outline-none rounded-[var(--71px)] px-[1.088vw] py-[--sy-10px] placeholder:text-[#FFFFFFCC]"
                />

                {/* Paste Link button */}
                <button
                  disabled={haveWebsite ? false : true}
                  className="bg-[var(--highlight-yellow)] px-[1.892vw] py-[--sy-10px] text-black rounded-[var(--33px)] font-bold"
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
