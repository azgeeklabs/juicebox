"use client";
import React from "react";
import styles from "./monetizeNeeds.module.css";
import CustomCheckBoxText from "@/app/_components/customCheckBox/CustomCheckBoxText";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  return (
    <div
      className={`${styles.monetizeNeeds} h-full w-full flex flex-col justify-between`}
    >
      {/* Inner container with full height and relative positioning */}
      <div className="h-full relative">
        {/* Inner container with full width and height, center alignment for content */}
        <div className="w-full h-full flex justify-center items-center">
          {/* Nested div for content */}
          <div>
            {/* Text center alignment and bottom margin */}
            <div className="text-center mx-auto mb-[1.778vh]">
              {/* Main heading with bottom margin and underlined text */}
              <h2 className="mb-[2.667vh]">
                To be monetized, You need <span>X</span> views and{" "}
                <span>Y</span> subs, <br />
                and we will help you with that.
              </h2>
            </div>

            {/* Informational paragraph with center alignment */}
            <p className="text-center">Here is a detail you must know!</p>
          </div>
        </div>
      </div>

      {/* Container for navigation links with flexbox layout and center alignment */}
      <div className="flex justify-between items-center">
        {/* Back link with background color, text color, padding, fit width, rounded corners, and font styling */}
        <Link
          onClick={() => router.back()}
          href={""}
          className="bg-[#484848] text-white px-[2vw] py-[0.889vh] w-fit rounded-[var(--41px)] font-semibold"
        >
          Back
        </Link>

        {/* Next link with background color, text color, padding, fit width, rounded corners, and font styling */}
        <Link
          href={"/dashboard/services/pr-monetization/monetize-impressions"}
          className="bg-[var(--highlight-yellow)] text-black px-[2vw] py-[0.889vh] w-fit rounded-[var(--41px)] font-semibold"
        >
          Next
        </Link>
      </div>
    </div>
  );
};

export default Page;
