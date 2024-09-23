"use client"
import React from "react";
import styles from "./monetizeFollowers.module.css";
import CustomCheckBoxText from "@/app/_components/customCheckBox/CustomCheckBoxText";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/Store/store";
import { addOption } from "@/app/reducers/serviceSlice";

const Page = () => {
    const router = useRouter();
    const all = useSelector((state:RootState)=>state.service)
      const dispatch = useDispatch();
    const nextFunc = () => {
      const storedItems = typeof window !== "undefined" && localStorage.getItem("selectedOption");
      const itemsArray = storedItems ? JSON.parse(storedItems) : [];
    
        itemsArray.push({
          name: "monetize followers",
        });
        localStorage.setItem("selectedOption", JSON.stringify(itemsArray));
        dispatch(addOption({
          name: "monetize followers",
        }));
        router.push("/dashboard/services/pr-monetization/monetization-endpoint");
      
    };
  return (
<div className={`${styles.monetizeFollowers} h-full w-full flex flex-col justify-between`}>

{/* Inner container with relative positioning and full height */}
<div className="h-full relative mb-[--sy-50px]">

  {/* Centered content container with full width and height */}
  <div className={`w-full h-full flex justify-center items-center`}>
    
    {/* Nested div for content */}
    <div>
      
      {/* Text center alignment and margin bottom */}
      <div className="text-center mx-auto mb-[1.778vh]">
        
        {/* Main heading with margin bottom and underlined text */}
        <h2 className="mb-[--sy-36px]">
          To be monetized, You need <span>X</span> followers and{" "}
          <span>Y</span> views, <br />
          and we will help you with that.
        </h2>
      </div>

      {/* Center-aligned paragraph */}
      <p className="text-center">Almost Done!</p>
    </div>
  </div>
</div>

{/* Navigation buttons container with flexbox layout, center alignment, and justified space between */}
<div className="flex justify-between items-center">
  
  {/* Link for going back, styled with background color, text color, padding, rounded corners, and font weight */}
  <Link
    onClick={() => router.back()}
    href={""}
    className="bg-[#484848] text-white px-[2vw] py-[0.889vh] w-fit rounded-[var(--41px)] font-semibold"
  >
    Back
  </Link>
  
  {/* Link for proceeding to the next step, styled with background color, text color, padding, rounded corners, and font weight */}
  <Link
    href={"/dashboard/services/pr-monetization/monetization-endpoint"}
    onClick={(e)=>{
      e.preventDefault();
      nextFunc()
    }}
    className="bg-[var(--highlight-yellow)] text-black px-[2vw] py-[0.889vh] w-fit rounded-[var(--41px)] font-semibold"
  >
    Next
  </Link>
</div>
</div>

  );
};

export default Page;
