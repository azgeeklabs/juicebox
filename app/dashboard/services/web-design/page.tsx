"use client";
import React, { useEffect, useState } from "react";
import styles from "./web-design.module.css";
import CustomCheckBoxText from "@/app/_components/customCheckBox/CustomCheckBoxText";
import Link from "next/link";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";

const Page = () => {
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
  useEffect(() => {
    if (checked) {
      // Select radio inputs
      const radios = document.querySelectorAll<HTMLInputElement>('input[type="radio"]');
      radios.forEach((radio) => {
        radio.checked = false;
        radio.disabled = true;
      });
    } else {
      const radios = document.querySelectorAll<HTMLInputElement>('input[type="radio"]');
      radios.forEach((radio) => {
        radio.disabled = false;
      });
    }
  }, [checked]);

  return (
    <NextPrevNav nextLink="/dashboard/services/web-design/website-type">
      {/* // Main container div with relative positioning */}
      <div className="h-full relative">
        {/* Inner container for the video end point section with custom styles */}
        <div
          className={`${styles.webDesign} w-full h-full flex justify-center items-center`}
        >
          {/* Nested div for content */}
          <div>
            {/* Text center alignment and margin bottom */}
            <div className="text-center mx-auto mb-[2.271vw]">
              {/* Main heading with margin bottom and underlined text */}
              <h2 className="mb-[1.5vw]">
                Do you want to redesign an existing website or build your
                website from scratch?
              </h2>
              <p>
                Our design team can create a new epic website for you, or you
                can revamp your current website with us for a new look and user
                experience!
              </p>
            </div>

            {/* Container for buttons with flexbox layout, width fit, margin auto, and gap between buttons */}
            <div
              className={`${styles.btns} flex w-fit mx-auto gap-[1.041vw] mb-[1.5vw]`}
            >
              {/* CustomCheckBoxText component for selecting options */}
              <CustomCheckBoxText
                onClick={() => setHaveWebsite(true)}
                btnSize="xl"
                inputType="radio"
                name="styleAnswer"
              >
                Redesign my Website
              </CustomCheckBoxText>
              <CustomCheckBoxText
                onClick={() => setHaveWebsite(false)}
                btnSize="xl"
                inputType="radio"
                name="styleAnswer"
              >
                Build my website
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
              <h3 className="mb-[0.6vw]">Website URL</h3>
              <div className="flex gap-[1vw] items-start mb-[1.2vw]">
                {/* Product Link input field */}
                <input
                  disabled={haveWebsite ? false : true}
                  value={pastedText}
                  onChange={(e) => setPastedText(e.target.value)}
                  type="text"
                  placeholder="Product Link"
                  className="flex-grow h-full mb-[1vw] w-[19.773vw] bg-[var(--dark-gray-3)] outline-none rounded-[var(--71px)] px-[1.088vw] py-[0.5vw] placeholder:text-[#FFFFFF80]"
                />

                {/* Paste Link button */}
                <button
                  onClick={handlePaste}
                  disabled={haveWebsite ? false : true}
                  className="bg-[var(--highlight-yellow)] px-[1.892vw] py-[0.4vw] text-black rounded-[var(--33px)]"
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
                  onClick={()=>setChecked(!checked)}
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
