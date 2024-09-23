"use client"
import React from "react";
import styles from "./monetizeImpressions.module.css";
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
        name: "monetize impressions",
      });
      localStorage.setItem("selectedOption", JSON.stringify(itemsArray));
      dispatch(addOption({
        name: "monetize impressions",
      }));
      router.push("/dashboard/services/pr-monetization/monetize-followers");
    
  };
  return (
    <div className={`${styles.monetizeImpressions} h-full w-full flex flex-col justify-between`}>
      <div className="h-full relative mb-[--sy-50px]">
        <div
          className={` w-full h-full flex justify-center items-center`}
        >
          {/* Nested div for content */}
          <div>
            {/* Text center alignment and margin bottom */}
            <div className="text-center mx-auto mb-[1.778vh]">
              {/* Main heading with margin bottom and underlined text */}
              <h2 className="mb-[2.667vh]">
                To be monetized, You need <span>X</span> impressions more,<br />
                and we will help you with that.
              </h2>
            </div>

            <p className=" text-center">Hang on there</p>
          </div>
        </div>
      </div>
      <div className=" flex justify-between items-center">
        <Link
        onClick={()=>router.back()}
          href={""}
          className=" bg-[#484848] text-white px-[2vw] py-[0.889vh] w-fit rounded-[var(--41px)] font-semibold"
        >
          Back
        </Link>
        <Link
          href={"/dashboard/services/pr-monetization/monetize-followers"}
          onClick={(e)=>{
            e.preventDefault();
            nextFunc()
          }}
          className=" bg-[var(--highlight-yellow)] text-black px-[2vw] py-[0.889vh] w-fit rounded-[var(--41px)] font-semibold"
        >
          Next
        </Link>
      </div>
    </div>
  );
};

export default Page;
