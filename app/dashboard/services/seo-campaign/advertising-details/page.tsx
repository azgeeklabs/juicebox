"use client"
import React, { useState } from "react";
import styles from "./advertising-details.module.css";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";

const Page = () => {
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
    <NextPrevNav
      backLink="/dashboard/services/seo-campaign"
      nextLink="/dashboard/services/seo-campaign/rank-selection"
    >
      <div className={`${styles.advertisingDetails} w-full mb-[--sy-40px]`}>
        <div className=" text-center mx-auto mb-[--sy-48px]">
          <h2 className=" mb-[--sy-16px]">
            What product/service are you advertising?
          </h2>
          <h4>
            Please provide the product link, name, and a brief description of
            the product or <br /> service you are advertising.
          </h4>
        </div>
        <div className="mx-auto w-fit">
          <h3 className=" mb-[--sy-16px]">
            Product Link <span>(if exists)</span>
          </h3>
          <div className=" flex gap-[1vw] items-start mb-[1.5vw]">
            <input
              type="text"
              value={pastedText}
                  onChange={(e) => setPastedText(e.target.value)}
              placeholder="Product Link"
              className="h-full mb-[1vw] w-[28.477vw] bg-[var(--dark-gray-3)] outline-none rounded-[var(--15px)] px-[1.088vw] py-[0.5vw] placeholder:text-[#FFFFFFCC]"
            />
            <button onClick={handlePaste} className=" bg-[var(--highlight-yellow)] px-[1.892vw] py-[0.4vw] text-black rounded-[var(--41px)]">
              Paste Link
            </button>
          </div>
          <div
                className={`relative block w-fit mx-auto px-[0.52vw] py-[0.3vw] hover:bg-[#484848] rounded-[var(--32px)] transition-all duration-200`}
              >
                I’ll do this later
                <input
                  type="checkbox"
                  name="dontHaveChannel"
                  className={`absolute opacity-0 inset-0 cursor-pointer`}
                />
              </div>
        </div>
      </div>
    </NextPrevNav>
  );
};

export default Page;
