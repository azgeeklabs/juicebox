"use client";
import styles from "./follower-range.module.css";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";
import dynamic from "next/dynamic";
const CustomTypeRange = dynamic(
  () => import("@/app/_components/customTypeRange/CustomTypeRange"),
  { ssr: false }
);

function FollowerRange() {
  return (
    <NextPrevNav
      nextLink="/dashboard/services/influencer-marketing/influencer-list"
      backLink="/dashboard/services/influencer-marketing/niche-selection"
    >
      <div className=" flex justify-center h-[50%] w-full">
        <div
          className={`${styles.videoDuration} flex flex-col items-center justify-center  w-full`}
        >
          {/* Text center alignment and margin bottom */}
          <div className="text-center mx-auto mb-[5.333vh]">
            {/* Main heading with margin bottom */}
            <h2 className="mb-[2.667vh]">
              What is the Follower Range for Influencers in Your Campaign?
            </h2>

            {/* Subheading with embedded horizontal rule */}
            <p>Select the required range of follower you would like.</p>
          </div>

          {/* Container for the duration indicator with custom background, width, height, and margin */}
          <div className="flex flex-col gap-[var(--sy-25px)] w-full md:w-[70%] lg:w-[50%] ">
            <h3 className="text-[--20px] ml-[var(--16px)] font-bold">
              Follower Range
            </h3>
            <CustomTypeRange word="Follower" />
          </div>
        </div>
      </div>
    </NextPrevNav>
  );
}

export default FollowerRange;
