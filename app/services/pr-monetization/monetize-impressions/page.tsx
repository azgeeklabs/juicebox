"use client"
import React from "react";
import styles from "./monetizeImpressions.module.css";
import CustomCheckBoxText from "@/app/_components/customCheckBox/CustomCheckBoxText";
import Link from "next/link";
import { useRouter } from "next/navigation";

const page = () => {
    const router = useRouter()
  return (
    <div className={`${styles.monetizeImpressions} h-full w-full flex flex-col justify-between`}>
      <div className="h-full relative">
        <div
          className={` w-full h-full flex justify-center items-center`}
        >
          {/* Nested div for content */}
          <div>
            {/* Text center alignment and margin bottom */}
            <div className="text-center mx-auto mb-[1vw]">
              {/* Main heading with margin bottom and underlined text */}
              <h2 className="mb-[1.5vw]">
                To be monetized, You need <span>X</span> impressions more,<br />
                and we will help you with that.
              </h2>
            </div>

            <p className=" text-center">Almost Done!</p>
          </div>
        </div>
      </div>
      <div className=" flex justify-between items-center">
        <Link
        onClick={()=>router.back()}
          href={""}
          className=" bg-[#484848] text-white px-[2vw] py-[0.5vw] w-fit rounded-[41.03px] font-semibold"
        >
          Back
        </Link>
        <Link
          href={"/services/pr-monetization/monetize-followers"}
          className=" bg-[var(--highlight-yellow)] text-black px-[2vw] py-[0.5vw] w-fit rounded-[41.03px] font-semibold"
        >
          Next
        </Link>
      </div>
    </div>
  );
};

export default page;
