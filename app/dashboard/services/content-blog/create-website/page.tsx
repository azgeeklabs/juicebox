"use client"
import React, { useState } from "react";
import styles from "./createWebsite.module.css";
import CustomCheckBoxText from "@/app/_components/customCheckBox/CustomCheckBoxText";
import Link from "next/link";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";

const page = () => {
    const [haveWebsite,setHaveWebsite] = useState(false)
  return (
    <NextPrevNav nextLink={haveWebsite ? "/dashboard/services/content-blog/blog-write-style" : "/dashboard/services/content-blog/word-count"} backLink="/dashboard/services/content-blog">
      {/* // Main container div with relative positioning */}
      <div className="h-full relative">
        {/* Inner container for the video end point section with custom styles */}
        <div
          className={`${styles.createWebsite} w-full h-full flex justify-center items-center`}
        >
          {/* Nested div for content */}
          <div>
            {/* Text center alignment and margin bottom */}
            <div className="text-center mx-auto mb-[2.271vw]">
              {/* Main heading with margin bottom and underlined text */}
              <h2 className="mb-[1.5vw] w-[60%] mx-auto">
              Do you currently have a account to run ads on?
              </h2>
              <p className=" w-[65%] mx-auto text-[#FFFFFFCC]">
              If you're looking to run ads but don't yet have a page or account set up, don't worry! We're here to help you every step of the way.
              </p>
            </div>

            {/* Container for buttons with flexbox layout, width fit, margin auto, and gap between buttons */}
            <div
              className={`${styles.btns} flex w-fit mx-auto gap-[1.041vw] mb-[1.5vw]`}
            >
              {/* CustomCheckBoxText component for selecting options */}
              <CustomCheckBoxText
              onClick={()=>setHaveWebsite(true)}
                btnSize="xl"
                inputType="radio"
                name="creationAnswer"
              >
                I have an account
              </CustomCheckBoxText>
              <CustomCheckBoxText
              onClick={()=>setHaveWebsite(false)}
                btnSize="xl"
                inputType="radio"
                name="creationAnswer"
              >
                Make one for me
              </CustomCheckBoxText>
            </div>

            {/* Divider */}
            <hr className={`${styles.divider}`} />

            <div className={`mx-auto w-full ${haveWebsite ? "" : "grayscale-[50%] opacity-50"}`}>
              {/* Product Link field with optional span */}
              <h3 className="mb-[0.6vw] font-semibold text-[--20px]">Website URL</h3>
              <div className="flex gap-[1vw] items-start mb-[1.2vw]">
                {/* Product Link input field */}
                <input
                disabled={haveWebsite ? false : true}
                  type="text"
                  placeholder="URL"
                  className="flex-grow h-full mb-[1vw] w-[19.773vw] bg-[var(--dark-gray-3)] outline-none rounded-[var(--71px)] px-[1.088vw] py-[0.5vw] placeholder:text-[#FFFFFF80]"
                />

                {/* Paste Link button */}
                <button disabled={haveWebsite ? false : true} className="bg-[var(--highlight-yellow)] px-[1.892vw] py-[0.4vw] text-black rounded-[var(--33px)] font-bold">
                  Paste Link
                </button>
              </div>
              {/* Link component for saving progress */}
              <Link
                href={""}
                className="block w-fit mx-auto px-[0.52vw] py-[0.3vw] hover:bg-[#484848] rounded-[var(--32px)] transition-all duration-200 underline"
              >
                I’ll do this later
              </Link>
            </div>
          </div>
        </div>
      </div>
    </NextPrevNav>
  );
};

export default page;
