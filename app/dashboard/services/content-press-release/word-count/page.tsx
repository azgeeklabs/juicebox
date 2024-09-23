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
    const route = useRouter();
  const dispatch = useDispatch();
  const [haveWordCount, setHaveWordCount] = useState(false);
  const [num, setNum] = useState(0);

  const nextFunc = () => {
    const storedItems =
      typeof window !== "undefined" && localStorage.getItem("selectedOption");
    const itemsArray = storedItems ? JSON.parse(storedItems) : [];
    if (haveWordCount && num > 0) {
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
      route.push("/dashboard/services/content-press-release/estimated-cost");
    } else if (
      !haveWordCount &&
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
      route.push("/dashboard/services/content-press-release/estimated-cost");
    }
  };
  return (
    <NextPrevNav
      nextLink="/dashboard/services/content-press-release/estimated-cost" nextFunc={nextFunc}
      backLink="/dashboard/services/content-press-release/release-content"
    >
      <div
      className={`${styles.wordCount} flex flex-col justify-between h-full w-full relative`}
    >
      {/* Inner container with full height and center alignment */}
      <div className="h-full flex justify-center items-center ">
        {/* Inner container with full width and custom styles for the footage editing section */}
        <div className={` w-full`}>
          {/* Header section with text centered, auto margins for horizontal centering, and vertical margins */}
          <div className="text-center mx-auto mb-[4.197271773347325vh]">
            {/* Main heading with bottom margin */}
            <h2 className="mb-[2.5vh] text-[--32px] font-semibold">
            Do you have a specific word count you would like?
            </h2>

            {/* Subheading with text centered */}
            <p className=" text-[--18px] text-[#FFFFFFCC]">Let us know if you have a specific word count in mind for your content.</p>
          </div>
          <div
            className={`${styles.btns} flex w-[51%] justify-center mx-auto gap-[--8px] mb-[4.826862539349423vh] pb-[4.826862539349423vh] border-b-[1px] border-b-[#484848]`}
          >
            {/* CustomCheckBoxText component for selecting "Specific Word Count*/}
            <CustomCheckBoxText
              btnSize="xl"
              inputType="radio"
              name="countAnswer"
              onClick={() => setHaveWordCount(true)}
              value={"Specific Word Count"}
            >
              Specific Word Count
            </CustomCheckBoxText>

            {/* CustomCheckBoxText component for selecting "It doesn't matter" option */}
            <CustomCheckBoxText
              btnSize="xl"
              inputType="radio"
              name="countAnswer"
              value={"It doesn't matter"}
              onClick={() => setHaveWordCount(false)}
            >
              It doesn't matter
            </CustomCheckBoxText>
          </div>
          <div className=" w-[50%] mx-auto">
            <h3 className=" mb-[--sy-18px] text-[--20px] font-semibold">Word per Page</h3>
            <CustomTypeRange word="Words/Page" max={100} setNum={setNum}/>
          </div>
          
        </div>

      </div>    
      
    </div>
    </NextPrevNav>
  );
};

export default Page;
