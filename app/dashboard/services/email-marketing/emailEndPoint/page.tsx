"use client"
import NextPrevNav from '@/app/_components/NextPrevNav/NextPrevNav'
import React, { useState } from 'react'
import styles from "./emailEndPoint.module.css"
import CustomCheckBoxText from '@/app/_components/customCheckBox/CustomCheckBoxText'

const Page = () => {
  const [saveProgress, setSaveProgress] = useState(false);

  return (
    <NextPrevNav
      nextLink="/dashboard/services"
      backLink="/dashboard/services/email-marketing/campaign-followers"
      nextText='All Done'
    >
      <div className="h-full relative mb-[--sy-40px]">
      {/* Inner container for the video end point section with custom styles */}
      <div
        className={`${styles.emailEndPoint} w-full h-full flex justify-center items-center`}
      >
        {/* Nested div for content */}
        <div>
          {/* Text center alignment and margin bottom */}
          <div className="text-center mx-auto mb-[2.271vw]">
            {/* Main heading with margin bottom and underlined text */}
            <h2 className="mb-[--sy-46px]">
              Based on everything you told us, <u>the estimated cost</u> of this{" "}
              <hr className="border-0" /> video is <span>$XXX</span> and would
              take around <span>40 Days</span> to finish.
            </h2>
          </div>

          {/* Container for buttons with flexbox layout, width fit, margin auto, and gap between buttons */}
          <div
            className={`${styles.btns} flex w-fit mx-auto gap-[--22px] mb-[1.5vw]`}
          >
            {/* CustomCheckBoxText component for selecting options */}
            <CustomCheckBoxText
              btnSize="xl"
              inputType="radio"
              name="styleAnswer"
            >
              Book a call
            </CustomCheckBoxText>
            <CustomCheckBoxText
              btnSize="xl"
              inputType="radio"
              name="styleAnswer"
            >
              Start now
            </CustomCheckBoxText>
          </div>

          {/* Link component for saving progress */}
          <div
              className={`relative block w-fit mx-auto px-[0.52vw] py-[0.3vw] hover:bg-[#484848] rounded-[var(--32px)] transition-all duration-200 `}
            >
              Save my Progress
              <input
                type="checkbox"
                name="saveProgress"
                className={`absolute opacity-0 inset-0 cursor-pointer`}
                onChange={() => setSaveProgress((prev) => !prev)}
              />
            </div>
        </div>
      </div>
    </div>
    </NextPrevNav>
  )
}

export default Page