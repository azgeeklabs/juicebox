"use client"
import React, { useEffect } from "react";
import styles from "./rank-selection.module.css";
import CustomCheckBoxText from "@/app/_components/customCheckBox/CustomCheckBoxText";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";
import { addOption } from "@/app/reducers/serviceSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/Store/store";
import { useRouter } from "next/navigation";

const Page = () => {
  const all = useSelector((state:RootState)=>state.service)
  const dispatch = useDispatch();
  const route = useRouter();
  const nextFunc = () => {
    console.log("//////////////////////");
    const selected = document.querySelector(
      "input[type='radio']:checked"
    ) as HTMLInputElement;
    const storedItems = typeof window !== "undefined" && localStorage.getItem("selectedOption");
    const itemsArray = storedItems ? JSON.parse(storedItems) : [];
    if (document.querySelector("input[type='radio']:checked")) {
      itemsArray.push({
        name: "selected rank",
        choice: (
          document.querySelector(
            "input[type='radio']:checked"
          ) as HTMLInputElement
        ).value,
      });
      localStorage.setItem("selectedOption", JSON.stringify(itemsArray));
        dispatch(addOption({
          name: "selected rank",
          choice: (
            document.querySelector(
              "input[type='radio']:checked"
            ) as HTMLInputElement
          ).value,
        }))
      route.push("/dashboard/services/seo-campaign/keyword-selection");
    }
  };
  useEffect(()=>{
console.log(all);

  },[all])
  return (
    <NextPrevNav
      backLink="/dashboard/services/seo-campaign/advertising-details"
      nextLink="/dashboard/services/seo-campaign/keyword-selection" nextFunc={()=>nextFunc()}
    >
      <div className={`${styles.rankSelection} w-full mb-[--sy-50px]`}>
        <div className=" text-center mx-auto mb-[--sy-48px]">
          <h2 className=" mb-[--sy-16px]">I'm trying to rank for</h2>
          <p>
            Please select the desired position for your product to appear in <br />
            search engine results. The price may vary based on the selected
            rank.
          </p>
        </div>
        <div className="flex justify-center items-center gap-[1vw]">
          <CustomCheckBoxText btnSize="md" inputType="radio" name="position" value={"1"}>
            1
          </CustomCheckBoxText>
          <CustomCheckBoxText btnSize="md" inputType="radio" name="position" value={"3"}>
            3
          </CustomCheckBoxText>
          <CustomCheckBoxText btnSize="md" inputType="radio" name="position" value={"5"}>
            5
          </CustomCheckBoxText>
          <CustomCheckBoxText btnSize="md" inputType="radio" name="position" value={"5+"}>
            5+
          </CustomCheckBoxText>
        </div>
      </div>
    </NextPrevNav>
  );
};

export default Page;
