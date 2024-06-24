"use client";
import React, { useEffect, useState } from "react";
import styles from "./campaignBudget.module.css";
import Link from "next/link";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";
// import CustomTypeRange from "@/app/_components/customTypeRange/CustomTypeRange";
import dynamic from "next/dynamic";
const CustomTypeRange = dynamic(
  () => import("@/app/_components/customTypeRange/CustomTypeRange"),
  { ssr: false }
);

const page = () => {
  return (
    <NextPrevNav
      nextLink="/dashboard/services/influencer-marketing/promo-options"
      backLink="/dashboard/services/influencer-marketing/influencer-list"
    >
      <div className=" flex justify-center items-center h-full w-full">
        <div className={`${styles.campaignBudget} w-full`}>
          {/* Text center alignment and margin bottom */}
          <div className="text-center mx-auto mb-[5.333vh]">
            {/* Main heading with margin bottom */}
            <h2 className="mb-[2.667vh] w-[38%] mx-auto">
              Whats your budget for your influencer marketing campaign?
            </h2>

            {/* Subheading with embedded horizontal rule */}
            <h4>Select the required budget range you would like.</h4>
          </div>

          {/* Container for the duration indicator with custom background, width, height, and margin */}

          <div className=" w-full md:w-1/2 mx-auto">
            <div className=" w-fit pl-[1vw]">
              <h5 className=" text-[--20px] mb-[3vh]">Budget Range</h5>
            </div>
            <CustomTypeRange word="USD" />
          </div>
        </div>
      </div>
    </NextPrevNav>
  );
};

export default page;
