"use client";
import React, { useState } from "react";
import styles from "./article-selection.module.css";
import CustomCheckBoxText from "@/app/_components/customCheckBox/CustomCheckBoxText";
import Link from "next/link";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";

const Page = () => {
  const [haveArticle, setHaveArticle] = useState(false);
  const [doLater, setDoLater] = useState(false);

  return (
    <NextPrevNav
      backLink="/dashboard/services/seo-link-building"
      nextLink="/dashboard/services/seo-link-building/advertising-details"
    >
      {/* // Main container div with relative positioning */}
      <div className="h-full relative">
        {/* Inner container for the video end point section with custom styles */}
        <div
          className={`${styles.articleSelection} w-full h-full flex justify-center items-center`}
        >
          {/* Nested div for content */}
          <div>
            {/* Text center alignment and margin bottom */}
            <div className="text-center mx-auto mb-[--sy-32px]">
              {/* Main heading with margin bottom and underlined text */}
              <h2 className="mb-[--sy-16px]">
                Do you already have an article, or would you like us to <br />{" "}
                create one for you?
              </h2>
              <p className=" text-[#FFFFFFCC]">
                Our talented writers can create an article for you in no time,
              </p>
            </div>

            {/* Container for buttons with flexbox layout, width fit, margin auto, and gap between buttons */}
            <div
              className={`${styles.btns} flex w-fit mx-auto gap-[--22px] mb-[--sy-48px]`}
            >
              {/* CustomCheckBoxText component for selecting options */}
              <CustomCheckBoxText
                onClick={() => setHaveArticle(true)}
                btnSize="xl"
                inputType="radio"
                name="articleSelectionAnswer"
              >
                I’ve got my own article
              </CustomCheckBoxText>
              <CustomCheckBoxText
                onClick={() => setHaveArticle(false)}
                btnSize="xl"
                inputType="radio"
                name="articleSelectionAnswer"
              >
                Make one for me!
              </CustomCheckBoxText>
            </div>
            <div
              className={`mx-auto w-full border-t-[1px] border-t-[#484848] pt-[--sy-48px] ${
                haveArticle ? "" : "grayscale-[50%] opacity-50"
              }`}
            >
              {/* Product Link field with optional span */}
              <h3 className="mb-[--sy-14px] font-semibold text-[--20px]">
                Upload Your Copy
              </h3>
              <div className="flex gap-[1vw] items-start mb-[1.2vw]">
                {/* Product Link input field */}
                <input
                  disabled={haveArticle ? false : true}
                  type="text"
                  placeholder="Upload Article"
                  className="flex-grow h-full mb-[1vw] w-[19.773vw] bg-[var(--dark-gray-3)] outline-none rounded-[var(--71px)] px-[1.088vw] py-[0.5vw] placeholder:text-[#FFFFFFCC]"
                />

                {/* Paste Link button */}
                <button
                  disabled={haveArticle ? false : true}
                  className="bg-[var(--highlight-yellow)] px-[1.892vw] py-[0.4vw] text-black rounded-[var(--33px)] font-bold"
                >
                  Upload
                </button>
              </div>
              {/* Link component for saving progress */}
              <div
                className={`relative block w-fit mx-auto px-[0.52vw] py-[0.3vw] ${
                  haveArticle && "hover:bg-[#484848]"
                } rounded-[var(--32px)] transition-all duration-200 underline`}
              >
                I’ll do this later
                <input
                  disabled={haveArticle ? false : true}
                  type="checkbox"
                  name="dontHaveChannel"
                  className={`absolute opacity-0 inset-0 ${
                    haveArticle ? "cursor-pointer" : ""
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
