"use client";
import React, { useEffect, useState } from "react";
import styles from "./campaignFollowers.module.css";
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
      nextLink="/services/email-marketing/emailEndPoint"
      backLink="/services/video-service/videoScript"
    >
      <div className=" flex justify-center items-center h-full w-full">
        <div className={`${styles.campaignFollowers} w-full`}>
          {/* Text center alignment and margin bottom */}
          <div className="text-center mx-auto mb-[5.333vh]">
            {/* Main heading with margin bottom */}
            <h2 className="mb-[2.667vh]">
              How many follow ups would you like your <br /> campaign to have?
            </h2>

            {/* Subheading with embedded horizontal rule */}
            <h4>
              Please select the desired number of follow ups for your campagin.{" "}
              <hr className="border-0" /> The price may vary based on the
              selected rank.
            </h4>
          </div>

          {/* Container for the duration indicator with custom background, width, height, and margin */}

          <div className=" w-full md:w-1/2 mx-auto">
            <CustomTypeRange />
          </div>
        </div>
      </div>
    </NextPrevNav>
  );
};

export default page;
