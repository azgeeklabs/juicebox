"use client";
import React, { useState } from "react";
import styles from "./createWebsite.module.css";
import CustomCheckBoxText from "@/app/_components/customCheckBox/CustomCheckBoxText";
import Link from "next/link";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { addOption } from "@/app/reducers/serviceSlice";

const CreateArtical = () => {
  const [choice, setChoice] = useState("");
  const [pastedText, setPastedText] = useState<string>("");
  const route = useRouter();
  const dispatch = useDispatch();

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setPastedText(text);
    } catch (error) {
      console.error("Failed to read clipboard contents: ", error);
    }
  };
  const nextFunc = () => {
    const storedItems = typeof window !== "undefined" && localStorage.getItem("selectedOption");
    const itemsArray = storedItems ? JSON.parse(storedItems) : [];
    if (choice == "brand" && pastedText) {
      itemsArray.push({
        name: "article centered about",
        choice: (
          document.querySelector(
            'input[type="radio"]:checked'
          ) as HTMLInputElement
        ).value,
        ans: `${pastedText}`,
      });
      localStorage.setItem("selectedOption", JSON.stringify(itemsArray));
        dispatch(addOption({
          name: "article centered about",
          choice: (
            document.querySelector(
              'input[type="radio"]:checked'
            ) as HTMLInputElement
          ).value,
          ans: `${pastedText}`,
        }))
        route.push(`/dashboard/services/pr-placement/estimated-cost`);
    } else if (
      choice == "person"
    ) {
      itemsArray.push({
        name: "article centered about",
        choice: (
          document.querySelector(
            'input[type="radio"]:checked'
          ) as HTMLInputElement
        ).value,
      });
      localStorage.setItem("selectedOption", JSON.stringify(itemsArray));
      
        dispatch(addOption({
          name: "article centered about",
          choice: (
            document.querySelector(
              'input[type="radio"]:checked'
            ) as HTMLInputElement
          ).value,
        }))
        route.push(`/dashboard/services/pr-placement/estimated-cost`);
    } 
  };

  return (
    <NextPrevNav
      nextLink="/dashboard/services/pr-placement/estimated-cost" nextFunc={nextFunc}
      backLink="/dashboard/services/pr-placement/questionnaire"
    >
      {/* // Main container div with relative positioning */}
      <div className="h-full relative">
        {/* Inner container for the video end point section with custom styles */}
        <div
          className={`${styles.createWebsite} w-full h-full flex justify-center items-center`}
        >
          {/* Nested div for content */}
          <div>
            {/* Text center alignment and margin bottom */}
            <div className="text-center mx-auto mb-[--sy-38px]">
              {/* Main heading with margin bottom and underlined text */}
              <h2 className="mb-[--sy-24px] w-[60%] mx-auto ">
                Would you like your article to be centered around a brand or a
                person?
              </h2>
              <p className=" w-[65%] mx-auto text-[#FFFFFFCC] text-[--18px]">
                Our talented writers can craft compelling content on nearly any
                topic! Whether you want your article to focus on a brand or a
                person, we've got you covered!
              </p>
            </div>

            {/* Container for buttons with flexbox layout, width fit, margin auto, and gap between buttons */}
            <div
              className={`${styles.btns} flex w-fit mx-auto gap-[--8px] mb-[--sy-38px]`}
            >
              {/* CustomCheckBoxText component for selecting options */}
              <CustomCheckBoxText
                onClick={() => setChoice("brand")}
                btnSize="xl"
                inputType="radio"
                name="creationAnswer"
                value={"brand"}
              >
                Brand
              </CustomCheckBoxText>
              <CustomCheckBoxText
                onClick={() => setChoice("person")}
                btnSize="xl"
                inputType="radio"
                name="creationAnswer"
                value={"person"}
              >
                Preson
              </CustomCheckBoxText>
            </div>

            {/* Divider */}
            <hr className={`${styles.divider}`} />

            <div
              className={`mx-auto w-full ${
                choice == "brand" ? "" : "grayscale-[50%] opacity-50"
              }`}
            >
              {/* Product Link field with optional span */}
              <h3 className="mb-[--sy-14px] font-semibold text-[--20px]">
                Please provide URL:
              </h3>
              <div className="flex gap-[1vw] items-start mb-[1.2vw]">
                {/* Product Link input field */}
                <input
                  disabled={choice == "brand" ? false : true}
                  value={pastedText}
                  onChange={(e) => setPastedText(e.target.value)}
                  type="text"
                  placeholder="URL"
                  className="flex-grow h-full mb-[1vw] w-[19.773vw] bg-[var(--dark-gray-3)] outline-none rounded-[var(--71px)] px-[1.088vw] py-[--sy-10px] placeholder:text-[#FFFFFFCC]"
                />

                {/* Paste Link button */}
                <button
                onClick={handlePaste}
                  disabled={choice == "brand" ? false : true}
                  className="bg-[var(--highlight-yellow)] px-[1.892vw] py-[--sy-10px] text-black rounded-[var(--33px)] font-bold"
                >
                  Paste Link
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </NextPrevNav>
  );
};

export default CreateArtical;
