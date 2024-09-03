"use client";
import classNames from "classnames";
import styles from "./landingPageLink.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";
import { useState } from "react";

function Page() {
  const router = useRouter();
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
      nextLink="/dashboard/services/email-marketing/email-contacts"
      backLink="/dashboard/services/email-marketing/email-campaign"
    >
      <div
        className={`${styles.landingPageLink} flex flex-col justify-between h-full mb-[--sy-40px]`}
      >
        {/* Inner container with full height and center alignment */}
        <div className="h-full flex justify-center items-center">
          {/* Inner container with full width and custom styles for the footage editing section */}
          <div className={`${styles.landingPageLinkEdit} w-full`}>
            {/* Header section with text centered, auto margins for horizontal centering, and vertical margins */}
            <div className="text-center mx-auto mb-[--sy-32px]">
              {/* Main heading with bottom margin */}
              <h2 className="mb-[--sy-8px]">
                Provide us with the landing page of your service!
              </h2>

              {/* Subheading with text centered */}
              <h4 className="text-center">
                Please provide the products landing page you are advertising.
              </h4>
            </div>

            {/* Container for input and button with auto margins for horizontal centering and fit width */}
            <div className="mx-auto w-fit">
              {/* Subheading for input field */}
              <h3 className="mb-[1.067vh]">
                Landing page Link <span>(if exists)</span>
              </h3>

              {/* Container for input field and button with flexbox layout, gap, and bottom margin */}
              <div className="flex gap-[1vw] items-start mb-[2.667vh]">
                {/* Input field with full height, bottom margin, specific width, background color, outline removal, rounded corners, padding, and placeholder styling */}
                <input
                value={pastedText}
                onChange={(e) => setPastedText(e.target.value)}
                  type="text"
                  placeholder="landing page"
                  className="h-full mb-[1.778vh] w-[28.477vw] bg-[var(--dark-gray-3)] outline-none rounded-[10px] px-[1.088vw] py-[0.889vh] placeholder:text-[#FFFFFFCC]"
                />

                {/* Button with background color, padding, text color, and rounded corners */}
                <button onClick={handlePaste} className="bg-[var(--highlight-yellow)] px-[1.892vw] py-[0.711vh] text-black rounded-[var(--33px)]">
                  Paste Link
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Container for navigation links with flexbox layout and center alignment */}
      </div>
    </NextPrevNav>
  );
}

export default Page;
