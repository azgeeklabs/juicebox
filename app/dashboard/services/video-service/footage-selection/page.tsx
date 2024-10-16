"use client";
import React, { useEffect, useState } from "react";
import styles from "./footageSelection.module.css";
import CustomCheckBox from "@/app/_components/customCheckBox/CustomCheckBox";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";
import img from "../../../../../public/assets/Frame0.svg";
import img2 from "../../../../../public/assets/Frame1.svg";
import img3 from "../../../../../public/assets/Frame2.svg";
import img4 from "../../../../../public/assets/Frame3.svg";
import img5 from "../../../../../public/assets/Frame4.svg";
import img6 from "../../../../../public/assets/Frame5.svg";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/Store/store";
import {
  addOption,
  incrementTotalSteps,
  selectType,
} from "@/app/reducers/serviceSlice";
import { useRouter } from "next/navigation";

const Page = () => {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);
  const [firstVal, setFirstVal] = useState("");
  const [secondVal, setSecondVal] = useState("");
  const route = useRouter();
  const platforms = [
    {
      img: img,
      title: "YouTube",
    },
    {
      img: img2,
      title: "Instagram reel",
    },
    {
      img: img3,
      title: "Instagram Post",
    },
    {
      img: img4,
      title: "Facebook Post",
    },
    {
      img: img5,
      title: "Facebook reel",
    },
    {
      img: img6,
      title: "Twitter Post",
    },
  ];
  const all = useSelector((state: RootState) => state.service.options);
  const nextFunc = () => {
    console.log("//////////////////////");
    const selected = document.querySelector(
      "input[type='radio']:checked"
    ) as HTMLInputElement;
    const dimension = document.querySelector("input[type='radio']:checked")
  ?.nextElementSibling
  ?.children[1] as HTMLElement;

console.log(dimension?.innerText);
    
    const storedItems = typeof window !== "undefined" && localStorage.getItem("selectedOption");
    const itemsArray = storedItems ? JSON.parse(storedItems) : [];
    if (!firstVal && !secondVal && !checked && document.querySelector("input[type='radio']:checked")) {
      itemsArray.push({
        name: "What platform are you running your ad on?",
        ans: `${selected.value} (${dimension?.innerText})`,
      });
      localStorage.setItem("selectedOption", JSON.stringify(itemsArray));
      dispatch(addOption({
        name: "What platform are you running your ad on?",
        ans: `${selected.value} (${dimension?.innerText})`,
      }));
    route.push("/dashboard/services/video-service/advertising");
    } else if (checked && firstVal && secondVal) {
      console.log(checked,firstVal,secondVal);
      
      itemsArray.push({
        name: "What platform are you running your ad on?",
        ans: `${firstVal} X ${secondVal}`,
      });
      localStorage.setItem("selectedOption", JSON.stringify(itemsArray));
      dispatch(addOption({
        name: "What platform are you running your ad on?",
        ans: `${firstVal} X ${secondVal}`,
      }));

    route.push("/dashboard/services/video-service/advertising");
    }
    
  };
useEffect(()=>{
console.log(all);

},[all])
  return (
    <NextPrevNav
      nextLink="/dashboard/services/video-service/advertising"
      nextFunc={() => nextFunc()}
      backLink="/dashboard/services/video-service"
    >
      <div className="flex justify-center items-center h-full">
        {/* Inner container with full width and custom footage styles */}
        <div className={`${styles.footage} w-full`}>
          {/* Header section with centered text and bottom margin */}
          <div className="text-center mx-auto mb-[2.271vw]">
            {/* Main heading with bottom margin */}
            <h2 className="mb-[1.041vw]">
              {" "}
              What platform are you running your ad on?{" "}
            </h2>

            {/* Subheading with horizontal rule (line) */}
            <h4>
              Please select the option that best describes your project type.{" "}
              <hr className="border-0" />
              This helps us understand the specific requirements for your
              project.
            </h4>
          </div>

          {/* Platform selection container with gap, padding, and bottom margin */}
          <div className="flex gap-[4vw] px-[2.129vw] justify-between mb-[2vw]">
            {/* Iterate over platforms array to create platform option elements */}
            {platforms.map((e, i) => (
              <div
                key={i} // Add key prop for React to uniquely identify each element
                className="relative w-[16.6667%] max-w-fit flex flex-col transition-all duration-300"
              >
                {/* Hidden radio input for platform selection */}
                <input
                  type="radio"
                  className="opacity-0 w-full h-full absolute"
                  name="platform"
                  value={e.title}
                  onClick={()=> {document.querySelectorAll("input[type='checkbox']:checked").forEach((e,i)=>(e as HTMLInputElement).checked = false)
                    setChecked(false)
                  setFirstVal("")
                setSecondVal("")}
                  }
                />

                {/* Platform image container with styles */}
                <div
                  className="mb-[1.778vh] py-[1.598vh] px-[1vw] bg-[#484848] mx-[0.615vw] h-[85%] transition-all duration-200"
                  style={{
                    borderRadius: "clamp(4px,calc(0.653vw + 0.1rem), 100px)",
                  }}
                >
                  <Image src={e.img} alt="" width={100} height={100} />
                  <span className=" block w-fit mx-auto -translate-y-[--sy-8px]">
                    1920x1080
                  </span>
                </div>

                {/* Platform title button with styles */}
                <button
                  className="w-[100%] py-[0.711vh] block text-center bg-[#484848] transition-all duration-200"
                  style={{
                    borderRadius: "clamp(4px,calc(1.742vw + 0.1rem), 100px)",
                  }}
                >
                  {e.title}
                </button>
              </div>
            ))}
          </div>

          {/* Custom dimensions input section with conditional styles */}
          <div
            className={`${styles.checking} flex px-[3vw] gap-[1vw] ${
              checked ? "text-white" : "text-[var(--dark-gray-3)]"
            } transition-all duration-300`}
          >
            {/* Custom checkbox component */}
            <CustomCheckBox onClick={() => {setChecked(!checked)
              document.querySelectorAll("input[type='radio']:checked").forEach((e,i)=>(e as HTMLInputElement).checked = false)
            }} />
            {/* Label for custom dimensions */}
            <p>I want specific dimensions:</p>
            {/* Width input field, disabled based on checked state */}
            <input
              type="number"
              className="firstInp w-[4vw] bg-[#353535] outline-none border-none rounded-[var(--22px)] caret-[var(--highlight-yellow)]"
              disabled={checked ? false : true}
              value={firstVal}
              onKeyDown={(e) => {
                if (e.key === 'e' || e.key === 'E' || e.key === '-' || e.key === '+') {
                  e.preventDefault(); // Prevent the user from typing 'e', 'E', '-' or '+'
                }
              }}
              onChange={(e) => {
                const newValue = e.target.value.replace(/e/gi, ""); // Remove any "e" or "E"
                setFirstVal(newValue);
              }}
            />
            {/* Text separator */}X
            {/* Height input field, disabled based on checked state */}
            <input
              type="number"
              className="secondInp w-[4vw] bg-[#353535] outline-none border-none rounded-[var(--22px)] caret-[var(--highlight-yellow)]"
              disabled={checked ? false : true}
              value={secondVal}
              onKeyDown={(e) => {
                if (e.key === 'e' || e.key === 'E' || e.key === '-' || e.key === '+') {
                  e.preventDefault(); // Prevent the user from typing 'e', 'E', '-' or '+'
                }
              }}
              onChange={(e) => {
                const newValue = e.target.value.replace(/e/gi, ""); // Remove any "e" or "E"
                setSecondVal(newValue);
              }}
            />
          </div>
        </div>
      </div>
    </NextPrevNav>
  );
};

export default Page;
