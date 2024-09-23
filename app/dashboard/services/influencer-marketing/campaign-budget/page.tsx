"use client";
import React, { useEffect, useState } from "react";
import styles from "./campaignBudget.module.css";
import Link from "next/link";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";
// import CustomTypeRange from "@/app/_components/customTypeRange/CustomTypeRange";
import dynamic from "next/dynamic";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/Store/store";
import { useRouter } from "next/navigation";
import { addOption } from "@/app/reducers/serviceSlice";
const CustomTypeRange = dynamic(
  () => import("@/app/_components/customTypeRange/CustomTypeRange"),
  { ssr: false }
);

const Page = () => {

  const [num,setNum] = useState(0)
  const all = useSelector((state:RootState)=>state.service)
  const dispatch = useDispatch();
  const route = useRouter();
  const nextFunc = () => {
    const selected = document.querySelector(
      "input[type='radio']:checked"
    ) as HTMLInputElement;
    const storedItems = typeof window !== "undefined" && localStorage.getItem("selectedOption");
    const itemsArray = storedItems ? JSON.parse(storedItems) : [];
    if (num) {
      itemsArray.push({
        name: "budget",
        ans: `${String(num)} USD`,
      });
      localStorage.setItem("selectedOption", JSON.stringify(itemsArray));
        dispatch(addOption({
          name: "budget",
          ans: `${String(num)} USD`,
        }))
      route.push("/dashboard/services/influencer-marketing/promo-options");
    }
  };
  useEffect(()=>{
console.log(all);

  },[all])

  return (
    <NextPrevNav
      nextLink="/dashboard/services/influencer-marketing/promo-options" nextFunc={nextFunc}
      backLink="/dashboard/services/influencer-marketing/influencer-list"
    >
      <div className=" flex justify-center h-[50%] w-full">
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
            <CustomTypeRange word="USD" setNum={setNum}/>
          </div>
        </div>
      </div>
    </NextPrevNav>
  );
};

export default Page;
