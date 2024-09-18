"use client";
import React, { useState } from "react";
import styles from "./advertising-details.module.css";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/Store/store";
import { useRouter } from "next/navigation";
import { addOption } from "@/app/reducers/serviceSlice";

const Page = () => {
  const [pastedText, setPastedText] = useState<string>("");
  const optionss = useSelector((state: RootState) => state.service.options);
  const [inputVal, setInputVal] = useState("");
  const [doLater, setDoLater] = useState(false);
  const route = useRouter();
  const dispatch = useDispatch();
  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setPastedText(text);
      setInputVal(text);
      const selectedCheckbox = document.querySelector(
        'input[type="checkbox"]:checked'
      ) as HTMLInputElement | null;
    
      // Ensure inputVal is truthy and a checkbox is selected
      if (selectedCheckbox) {
        selectedCheckbox.checked = false; // Uncheck the checkbox
        setDoLater(false)
      }
    } catch (error) {
      console.error("Failed to read clipboard contents: ", error);
    }
  };
  const nextFunc = () => {
    console.log("//////////////////////");
    const storedItems = localStorage.getItem("selectedOption");
    const itemsArray = storedItems ? JSON.parse(storedItems) : [];
    if (doLater) {
      itemsArray.push({
        name: "advertising service",
        choice: (
          document.querySelector(
            'input[type="checkbox"]:checked'
          ) as HTMLInputElement
        ).value,
      });
      localStorage.setItem("selectedOption", JSON.stringify(itemsArray));
      dispatch(
        addOption({
          name: "advertising service",
          choice: (
            document.querySelector(
              'input[type="checkbox"]:checked'
            ) as HTMLInputElement
          ).value,
        })
      );

      route.push("/dashboard/services/seo-campaign/rank-selection");
    } else if (inputVal) {
      itemsArray.push({
        name: "advertising service",
        ans: `${inputVal}`,
      });
      localStorage.setItem("selectedOption", JSON.stringify(itemsArray));
      dispatch(
        addOption({
          name: "advertising service",
          ans: `${inputVal}`,
        })
      );
      route.push("/dashboard/services/seo-campaign/rank-selection");
    }
  };
  return (
    <NextPrevNav
      backLink="/dashboard/services/seo-campaign"
      nextFunc={() => nextFunc()}
      nextLink="/dashboard/services/seo-campaign/rank-selection"
    >
      <div className={`${styles.advertisingDetails} w-full mb-[--sy-40px]`}>
        <div className=" text-center mx-auto mb-[--sy-48px]">
          <h2 className=" mb-[--sy-16px]">
            What product/service are you advertising?
          </h2>
          <h4>
            Please provide the product link, name, and a brief description of
            the product or <br /> service you are advertising.
          </h4>
        </div>
        <div className="mx-auto w-fit">
          <h3 className=" mb-[--sy-16px]">
            Product Link <span>(if exists)</span>
          </h3>
          <div className=" flex gap-[1vw] items-start mb-[1.5vw]">
            <input
              type="text"
              value={pastedText}
              onChange={(e) => {
                setPastedText(e.target.value);
                setInputVal(e.target.value);
                const selectedCheckbox = document.querySelector(
                  'input[type="checkbox"]:checked'
                ) as HTMLInputElement | null;
              
                // Ensure inputVal is truthy and a checkbox is selected
                if (inputVal && selectedCheckbox) {
                  selectedCheckbox.checked = false; // Uncheck the checkbox
                  setDoLater(false)
                }
              }}
              placeholder="Product Link"
              className="h-full mb-[1vw] w-[28.477vw] bg-[var(--dark-gray-3)] outline-none rounded-[var(--15px)] px-[1.088vw] py-[0.5vw] placeholder:text-[#FFFFFFCC]"
            />
            <button
              onClick={handlePaste}
              className=" bg-[var(--highlight-yellow)] px-[1.892vw] py-[0.4vw] text-black rounded-[var(--41px)]"
            >
              Paste Link
            </button>
          </div>
          <div
            className={`relative block w-fit mx-auto px-[0.52vw] py-[0.3vw] hover:bg-[#484848] rounded-[var(--32px)] transition-all duration-200`}
          >
            I’ll do this later
            <input
              type="checkbox"
              name="I’ll do this later"
              className={`absolute opacity-0 inset-0 cursor-pointer`}
              value={"I’ll do this later"}
              onChange={()=>{setInputVal("");
                setPastedText("");
                setDoLater((prev)=>!prev)
                console.log(doLater);
                
              }}
            />
          </div>
        </div>
      </div>
    </NextPrevNav>
  );
};

export default Page;
