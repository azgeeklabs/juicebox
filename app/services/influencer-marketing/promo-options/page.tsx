"use client";
import classNames from "classnames";
import styles from "./promoOptions.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import CustomCheckBox from "@/app/_components/customCheckBox/CustomCheckBox";
import CustomCheckBoxText from "@/app/_components/customCheckBox/CustomCheckBoxText";
import { useState } from "react";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";

function page() {
  const router = useRouter();

  return (
    <NextPrevNav
      nextLink="/services/influencer-marketing/influencerEndPoint"
      backLink="/services/influencer-marketing/landing-page-link"
    >
      <div
        className={`${styles.promoOptions} flex flex-col justify-between h-full`}
      >
        {/* Inner container with full height and center alignment */}
        <div className="h-full flex justify-center items-center">
          {/* Inner container with full width and custom styles for the footage editing section */}
          <div className={` w-full`}>
            {/* Header section with text centered, auto margins for horizontal centering, and vertical margins */}
            <div className="text-center mx-auto mb-[4.197271773347325vh]">
              {/* Main heading with bottom margin */}
              <h2 className="mb-[2.5vh] w-[70%] mx-auto">
                Do you already have a video promo, or would you like us to
                create one for you?
              </h2>

              {/* Subheading with text centered */}
              <h4 className="text-center">
              We can use your existing video or create a custom one to fit your campaign's needs. 
                <br />
                Let us know how we can assist.
              </h4>
            </div>
            <div
              className={`${styles.btns} flex w-fit mx-auto gap-[1.041vw] mb-[4.826862539349423vh] pb-[4.826862539349423vh] border-b-[1px] border-b-[#484848] px-[4.825vw]`}
            >
              {/* CustomCheckBoxText component for selecting "Let's get started" option */}
              <CustomCheckBoxText
                btnSize="xl"
                inputType="radio"
                name="contactsAnswer"
              >
                I have video promo
              </CustomCheckBoxText>

              {/* CustomCheckBoxText component for selecting "I want to talk to someone first" option */}
              <CustomCheckBoxText
                btnSize="xl"
                inputType="radio"
                name="contactsAnswer"
              >
                Make one for me!
              </CustomCheckBoxText>
            </div>
            {/* Form container with auto margins for centering */}
            <div className="mx-auto w-fit">
              {/* Channel URL field */}
              <h3 className="mb-[1.067vh]">Add your video :</h3>
              <div className="flex gap-[1vw] items-start mb-[2.667vh]">
                {/* Channel URL input field */}
                <input
                  type="text"
                  placeholder="Add website"
                  className="h-full mb-[1.778vh] w-[28.477vw] bg-[var(--dark-gray-3)] outline-none rounded-[var(--71px)] px-[1.088vw] py-[0.889vh] placeholder:text-[#FFFFFF80]"
                />

                {/* Paste Link button */}
                <button className="bg-[var(--highlight-yellow)] px-[1.892vw] py-[0.711vh] text-black rounded-[var(--33px)]">
                  Upload
                </button>
              </div>

              {/* Link for users without a YouTube channel */}
              <Link
                href={""}
                className="underline block w-fit mx-auto px-[0.52vw] py-[0.533vh] hover:bg-[#484848] rounded-[var(--32px)] transition-all duration-200"
              >
                I’ll do this later
              </Link>
            </div>
          </div>
        </div>

        {/* Container for navigation links with flexbox layout and center alignment */}
      </div>
    </NextPrevNav>
  );
}

export default page;
