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
  const [haveArticle, setHaveArticle] = useState(false);
  const [doLater, setDoLater] = useState(false);
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
    if (haveArticle && !doLater && pastedText) {
      itemsArray.push({
        name: "Do you already have an article, or would you like us to create one for you?",
        choice: (
          document.querySelector(
            'input[type="radio"]:checked'
          ) as HTMLInputElement
        ).value,
        ans: `${pastedText}`,
      });
      localStorage.setItem("selectedOption", JSON.stringify(itemsArray));
        dispatch(addOption({
          name: "Do you already have an article, or would you like us to create one for you?",
          choice: (
            document.querySelector(
              'input[type="radio"]:checked'
            ) as HTMLInputElement
          ).value,
          ans: `${pastedText}`,
        }))
        route.push(`/dashboard/services/pr-placement/questionnaire`);
    } else if (
      !haveArticle &&
      !doLater &&
      document.querySelector('input[type="radio"]:checked')
    ) {
      itemsArray.push({
        name: "Do you already have an article, or would you like us to create one for you?",
        choice: (
          document.querySelector(
            'input[type="radio"]:checked'
          ) as HTMLInputElement
        ).value,
      });
      localStorage.setItem("selectedOption", JSON.stringify(itemsArray));
      
        dispatch(addOption({
          name: "Do you already have an article, or would you like us to create one for you?",
          choice: (
            document.querySelector(
              'input[type="radio"]:checked'
            ) as HTMLInputElement
          ).value,
        }))
        route.push(`/dashboard/services/pr-placement/questionnaire`);
    } else if (doLater) {
      itemsArray.push({
        name: "Do you already have an article, or would you like us to create one for you?",
        choice: (
          document.querySelector(
            'input[type="checkbox"]:checked'
          ) as HTMLInputElement
        ).value,
      });
      localStorage.setItem("selectedOption", JSON.stringify(itemsArray));
     
        dispatch(addOption({
          name: "Do you already have an article, or would you like us to create one for you?",
          choice: (
            document.querySelector(
              'input[type="checkbox"]:checked'
            ) as HTMLInputElement
          ).value,
        }))
      route.push(`/dashboard/services/pr-placement/questionnaire`);
    }
  };

  return (
    <NextPrevNav
      nextLink="/dashboard/services/pr-placement/questionnaire" nextFunc={nextFunc}
      backLink="/dashboard/services/pr-placement"
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
              <h2 className="mb-[--sy-24px] w-[60%] mx-auto">
                Do you already have an article, or would you like us to create
                one for you?
              </h2>
              <p className=" w-[65%] mx-auto text-[#FFFFFFCC]">
                Our talented writers can create an article for you in no time,
                or you can provide your own!
              </p>
            </div>

            {/* Container for buttons with flexbox layout, width fit, margin auto, and gap between buttons */}
            <div
              className={`${styles.btns} flex w-fit mx-auto gap-[1.041vw] mb-[--sy-38px]`}
            >
              {/* CustomCheckBoxText component for selecting options */}
              <CustomCheckBoxText
                onClick={() => setHaveArticle(true)}
                btnSize="xl"
                inputType="radio"
                name="creationAnswer"
                value={"I have an article"}
              >
                I have an article
              </CustomCheckBoxText>
              <CustomCheckBoxText
                onClick={() => {setHaveArticle(false)
                  if (document.querySelector('input[type="checkbox"]:checked')) {
                    (document.querySelector('input[type="checkbox"]:checked') as HTMLInputElement).checked = false;
                    setDoLater(false)
                  }
                  setPastedText("")
                }}
                btnSize="xl"
                inputType="radio"
                name="creationAnswer"
                value={"Write one for me"}
              >
                Write one for me
              </CustomCheckBoxText>
            </div>

            {/* Divider */}
            <hr className={`${styles.divider}`} />

            <div
              className={`mx-auto w-full ${
                haveArticle ? "" : "grayscale-[50%] opacity-50"
              }`}
            >
              {/* Product Link field with optional span */}
              <h3 className="mb-[--sy-14px] font-semibold text-[--20px]">
                Upload Your Article
              </h3>
              <div className="flex gap-[1vw] items-start mb-[1.2vw]">
                {/* Product Link input field */}
                <input
                  disabled={haveArticle ? false : true}
                  value={pastedText}
                  onChange={(e) => setPastedText(e.target.value)}
                  type="text"
                  placeholder="URL"
                  className="flex-grow h-full mb-[1vw] w-[19.773vw] bg-[var(--dark-gray-3)] outline-none rounded-[var(--71px)] px-[1.088vw] py-[--sy-10px] placeholder:text-[#FFFFFFCC]"
                />

                {/* Paste Link button */}
                <button
                onClick={handlePaste}
                  disabled={haveArticle ? false : true}
                  className="bg-[var(--highlight-yellow)] px-[1.892vw] py-[--sy-10px] text-black rounded-[var(--33px)] font-bold"
                >
                  Paste Link
                </button>
              </div>
              {/* Link component for saving progress */}
              <div
                className={`relative block w-fit mx-auto px-[0.52vw] py-[0.3vw] ${
                  haveArticle && "hover:bg-[#484848]"
                } rounded-[var(--32px)] transition-all duration-200 underline`}
              >
                I’ll do this later
                <input
                  disabled={haveArticle ? false : true}
                  type="checkbox"
                  name="I’ll do this later"
                  value={"I’ll do this later"}
                  className={`absolute opacity-0 inset-0 ${
                    haveArticle ? "cursor-pointer" : ""
                  }`}
                  onChange={() => setDoLater((prev) => !prev)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </NextPrevNav>
  );
};

export default CreateArtical;
