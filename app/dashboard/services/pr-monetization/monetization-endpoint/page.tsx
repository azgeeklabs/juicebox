"use client";
import React from "react";
import styles from "./monetizationEndPoint.module.css";
import CustomCheckBoxText from "@/app/_components/customCheckBox/CustomCheckBoxText";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  return (
    <div className={`${styles.monetizationEndPoint} flex flex-col justify-between h-full w-full`}>
      {/* Inner container with relative positioning and full height */}
      <div className="h-full relative mb-[--sy-50px]">
        {/* Container for the video end point section with custom styles and flexbox centering */}
        <div
          className={`${styles.monetizationEndPoint} w-full h-full flex justify-center items-center`}
        >
          {/* Nested div for content */}
          <div>
            {/* Text center alignment with auto horizontal margins and bottom margin */}
            <div className="text-center mx-auto">
              {/* Main heading with bottom margin and underlined text */}
              <h2 className="mb-[--sy-48px]">
                Based on everything you told us, the estimated
                cost of this <br /> service is <span> $XXX </span> and would take around <span>40 Days</span> to finish.
              </h2>
            </div>

            {/* Container for buttons with flexbox layout, width fit, auto horizontal margins, and gap between buttons */}
            <div
              className={`${styles.btns} flex w-fit mx-auto gap-[1.041vw] mb-[--sy-25px]`}
            >
              {/* CustomCheckBoxText component for selecting "Let's get started" option */}
              <CustomCheckBoxText
                btnSize="xl"
                inputType="radio"
                name="styleAnswer"
              >
                Book a call
              </CustomCheckBoxText>

              {/* CustomCheckBoxText component for selecting "I want to talk to someone first" option */}
              <CustomCheckBoxText
                btnSize="xl"
                inputType="radio"
                name="styleAnswer"
              >
                Start now
              </CustomCheckBoxText>
            </div>

            {/* Button for saving progress with various styling */}
            <button className="cursor-pointer block w-fit mx-auto px-[0.52vw] relative py-[0.533vh] hover:bg-[#484848] rounded-[var(--32px)] transition-all duration-200 underline">
              Save my Progress
              <input type="checkbox" className=" inset-0 absolute opacity-0 cursor-pointer" />
            </button>
          </div>
        </div>
      </div>

      {/* Navigation buttons container with flexbox layout, center alignment, and justified space between */}
      <div className="flex justify-between items-center">
        {/* Link for going back, styled with background color, text color, padding, rounded corners, and font weight */}
        <button
          onClick={() => router.back()}
          className="bg-[#484848] text-white px-[2vw] py-[0.889vh] w-fit rounded-[var(--41px)] font-semibold"
        >
          Back
        </button>

        {/* Link for completing the process, styled with background color, text color, padding, rounded corners, and font weight */}
        <Link
          href={"/dashboard/services"}
          className="bg-[var(--highlight-yellow)] text-black px-[2vw] py-[0.889vh] w-fit rounded-[var(--41px)] font-bold"
        >
          All Done
        </Link>
      </div>
    </div>
  );
};

export default Page;
