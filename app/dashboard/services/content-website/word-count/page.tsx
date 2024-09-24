"use client";
import React, { useEffect, useState } from "react";
import styles from "./wordCount.module.css";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";
// import CustomTypeRange from "@/app/_components/customTypeRange/CustomTypeRange";
import dynamic from "next/dynamic";
import classNames from "classnames";
import CustomCheckBoxText from "@/app/_components/customCheckBox/CustomCheckBoxText";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { addOption } from "@/app/reducers/serviceSlice";
const CustomTypeRange = dynamic(
  () => import("@/app/_components/customTypeRange/CustomTypeRange"),
  { ssr: false }
);

const Page = () => {
    const router = useRouter()
    const [specifyWords,setSpecifyWords] = useState(false)
  const [num, setNum] = useState(0);
    const route = useRouter();
  const dispatch = useDispatch();
    const nextFunc = () => {
      const storedItems =
        typeof window !== "undefined" && localStorage.getItem("selectedOption");
      const itemsArray = storedItems ? JSON.parse(storedItems) : [];
      if (specifyWords && num > 0) {
        itemsArray.push({
          name: "word count",
          ans: `${num}`,
        });
        localStorage.setItem("selectedOption", JSON.stringify(itemsArray));
        dispatch(
          addOption({
            name: "word count",
            ans: `${num}`,
          })
        );
        route.push("/dashboard/services/content-website/sections-number");
      } else if (
        !specifyWords &&
        document.querySelector('input[type="radio"]:checked')
      ) {
        itemsArray.push({
          name: "word count",
          choice: (
            document.querySelector(
              'input[type="radio"]:checked'
            ) as HTMLInputElement
          ).value,
        });
        localStorage.setItem("selectedOption", JSON.stringify(itemsArray));
  
        dispatch(
          addOption({
            name: "word count",
            choice: (
              document.querySelector(
                'input[type="radio"]:checked'
              ) as HTMLInputElement
            ).value,
          })
        );
        route.push("/dashboard/services/content-website/sections-number");
      }
    };
  return (
    <NextPrevNav
      nextLink="/dashboard/services/content-website/sections-number" nextFunc={nextFunc}
      backLink="/dashboard/services/content-website/reference-sources"
    >
      <div
      className={`${styles.wordCount} flex flex-col justify-between h-full w-full relative`}
    >
      {/* Inner container with full height and center alignment */}
      <div className="h-full flex justify-center items-center ">
        {/* Inner container with full width and custom styles for the footage editing section */}
        <div className={` w-full`}>
          {/* Header section with text centered, auto margins for horizontal centering, and vertical margins */}
          <div className="text-center mx-auto mb-[--sy-38px]">
            {/* Main heading with bottom margin */}
            <h2 className="mb-[--sy-8px] text-[--32px] font-semibold">
            Do you have a specific word count you would like?
            </h2>

            {/* Subheading with text centered */}
            <p className=" text-[--18px] text-[#FFFFFFCC]">Let us know if you have a specific word count in mind for your content.</p>
          </div>
          <div
            className={`${styles.btns} flex w-[51%] justify-center mx-auto gap-[--8px] mb-[--sy-38px] pb-[4.826862539349423vh] border-b-[1px] border-b-[#484848]`}
          >
            {/* CustomCheckBoxText component for selecting "Specific Word Count*/}
            <CustomCheckBoxText
            onClick={()=>setSpecifyWords(true)}
              btnSize="xl"
              inputType="radio"
              name="countAnswer"
              value={"Specific Word Count"}
            >
              Specific Word Count
            </CustomCheckBoxText>

            {/* CustomCheckBoxText component for selecting "It doesn't matter" option */}
            <CustomCheckBoxText
            onClick={()=>setSpecifyWords(false)}
              btnSize="xl"
              inputType="radio"
              name="countAnswer"
              value={"It doesn't matter"}
            >
              It doesn't matter
            </CustomCheckBoxText>
          </div>
          <div className={` w-[50%] mx-auto ${specifyWords ? "" : "opacity-20 grayscale-[60%]"}`}>
            <h3 className=" mb-[--sy-16px] text-[--20px] font-semibold">Word per Page</h3>
            <CustomTypeRange word="Words/Page" max={100} isDisabled={!specifyWords} setNum={setNum}/>
          </div>
          
        </div>

      </div>    
      
    </div>
    </NextPrevNav>
  );
};

export default Page;
