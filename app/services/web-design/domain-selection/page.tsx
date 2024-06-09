import React from "react";
import styles from "./domain-selection.module.css";
import CustomCheckBoxText from "@/app/_components/customCheckBox/CustomCheckBoxText";
import Link from "next/link";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";

const page = () => {
  return (
    <NextPrevNav
      backLink="/services/web-design/website-type"
      nextLink="/services/web-design/website-technology"
    >
      {/* // Main container div with relative positioning */}
      <div className="h-full relative">
        {/* Inner container for the video end point section with custom styles */}
        <div
          className={`${styles.domainSelection} w-full h-full flex justify-center items-center`}
        >
          {/* Nested div for content */}
          <div>
            {/* Text center alignment and margin bottom */}
            <div className="text-center mx-auto mb-[2.271vw]">
              {/* Main heading with margin bottom and underlined text */}
              <h2 className="mb-[1.5vw]">
                Do you have a domain for your website?
              </h2>
              <p>Please provide us with a domain for your website</p>
            </div>

            {/* Container for buttons with flexbox layout, width fit, margin auto, and gap between buttons */}
            <div
              className={`${styles.btns} flex w-fit mx-auto gap-[1.041vw] mb-[1.5vw]`}
            >
              {/* CustomCheckBoxText component for selecting options */}
              <CustomCheckBoxText
                btnSize="xl"
                inputType="radio"
                name="styleAnswer"
              >
                I have a domain
              </CustomCheckBoxText>
              <CustomCheckBoxText
                btnSize="xl"
                inputType="radio"
                name="styleAnswer"
              >
                Make one for me
              </CustomCheckBoxText>
            </div>

            {/* Divider */}
            <hr className={styles.divider} />

            <div className="mx-auto w-full opacity-10">
              {/* Product Link field with optional span */}
              <h3 className="mb-[0.6vw]">Website URL</h3>
              <div className="flex gap-[1vw] items-start mb-[1.2vw]">
                {/* Product Link input field */}
                <input
                  type="text"
                  placeholder="Product Link"
                  className="flex-grow h-full mb-[1vw] w-[19.773vw] bg-[var(--dark-gray-3)] outline-none rounded-[71px] px-[1.088vw] py-[0.5vw] placeholder:text-[#FFFFFF80]"
                />

                {/* Paste Link button */}
                <button className="bg-[var(--highlight-yellow)] px-[1.892vw] py-[0.4vw] text-black rounded-[33px]">
                  Paste Link
                </button>
              </div>
              {/* Link component for saving progress */}
              <Link
                href={""}
                className="block w-fit mx-auto px-[0.52vw] py-[0.3vw] hover:bg-[#484848] rounded-[32px] transition-all duration-200 underline"
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
