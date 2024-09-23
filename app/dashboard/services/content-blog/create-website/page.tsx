"use client";
import React, { useEffect, useState } from "react";
import styles from "./createWebsite.module.css";
import CustomCheckBoxText from "@/app/_components/customCheckBox/CustomCheckBoxText";
import Link from "next/link";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/Store/store";
import { useRouter } from "next/navigation";
import { addOption } from "@/app/reducers/serviceSlice";
import { setContentBlogRoute } from "@/app/reducers/contentBlogSlice";

const Page = () => {
  const [haveWebsite, setHaveWebsite] = useState(false);
  const [doLater, setDoLater] = useState(false);
  const [pastedText, setPastedText] = useState<string>("");
  const all = useSelector((state: RootState) => state.service);
  const contentBlog = useSelector((state: RootState) => state.contentBlog.contentBlogRoute);
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
    if (haveWebsite && !doLater && pastedText) {
      itemsArray.push({
        name: "have website or not",
        choice: (
          document.querySelector(
            'input[type="radio"]:checked'
          ) as HTMLInputElement
        ).value,
        ans: `${pastedText}`,
      });
      localStorage.setItem("selectedOption", JSON.stringify(itemsArray));
        dispatch(addOption({
          name: "have website or not",
          choice: (
            document.querySelector(
              'input[type="radio"]:checked'
            ) as HTMLInputElement
          ).value,
          ans: `${pastedText}`,
        }))
        route.push(`${
          haveWebsite
            ? "/dashboard/services/content-blog/blog-write-style"
            : "/dashboard/services/content-blog/word-count"
        }`);
    } else if (
      !haveWebsite &&
      !doLater &&
      document.querySelector('input[type="radio"]:checked')
    ) {
      itemsArray.push({
        name: "have website or not",
        choice: (
          document.querySelector(
            'input[type="radio"]:checked'
          ) as HTMLInputElement
        ).value,
      });
      localStorage.setItem("selectedOption", JSON.stringify(itemsArray));
      
        dispatch(addOption({
          name: "have website or not",
          choice: (
            document.querySelector(
              'input[type="radio"]:checked'
            ) as HTMLInputElement
          ).value,
        }))
        route.push(`${
          haveWebsite
            ? "/dashboard/services/content-blog/blog-write-style"
            : "/dashboard/services/content-blog/word-count"
        }`);
    } else if (doLater) {
      itemsArray.push({
        name: "have website or not",
        choice: (
          document.querySelector(
            'input[type="checkbox"]:checked'
          ) as HTMLInputElement
        ).value,
      });
      localStorage.setItem("selectedOption", JSON.stringify(itemsArray));
     
        dispatch(addOption({
          name: "have website or not",
          choice: (
            document.querySelector(
              'input[type="checkbox"]:checked'
            ) as HTMLInputElement
          ).value,
        }))
      route.push(`${
        haveWebsite
          ? "/dashboard/services/content-blog/blog-write-style"
          : "/dashboard/services/content-blog/word-count"
      }`);
    }
  };
  useEffect(()=>{
    console.log(all);
    
    },[all])



  return (
    <NextPrevNav
      nextLink={
        haveWebsite
          ? "/dashboard/services/content-blog/blog-write-style"
          : "/dashboard/services/content-blog/word-count"
      }
      nextFunc={nextFunc}
      backLink="/dashboard/services/content-blog"
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
              <h2 className="mb-[--sy-24px] w-[63%] mx-auto">
                Do you already have an website, or would you like us to create
                one for you?
              </h2>
              <p className=" w-[65%] mx-auto text-[#FFFFFFCC]">
                Our expert developers can craft a website for you in no time, or
                you can provide your own design!
              </p>
            </div>

            {/* Container for buttons with flexbox layout, width fit, margin auto, and gap between buttons */}
            <div
              className={`${styles.btns} flex w-fit mx-auto gap-[--8px] mb-[1.5vw]`}
            >
              {/* CustomCheckBoxText component for selecting options */}
              <CustomCheckBoxText
                onClick={() => {setHaveWebsite(true)
                  dispatch(setContentBlogRoute("haveWebsite"))
                }}
                btnSize="xl"
                inputType="radio"
                name="creationAnswer"
                value={"I have a website"}
              >
                I have a website
              </CustomCheckBoxText>
              <CustomCheckBoxText
                btnSize="xl"
                inputType="radio"
                name="creationAnswer"
                value={"Make one for me"}
                onClick={() => {setHaveWebsite(false);
                  dispatch(setContentBlogRoute("don'tHaveWebsite"))
                  if (document.querySelector('input[type="checkbox"]:checked')) {
                    (document.querySelector('input[type="checkbox"]:checked') as HTMLInputElement).checked = false;
                  }
                  setPastedText("")
                }}
              >
                Make one for me
              </CustomCheckBoxText>
            </div>

            {/* Divider */}
            <hr className={`${styles.divider}`} />

            <div
              className={`mx-auto w-full ${
                haveWebsite ? "" : "grayscale-[50%] opacity-50"
              }`}
            >
              {/* Product Link field with optional span */}
              <h3 className="mb-[0.6vw] font-semibold text-[--20px]">
                Website URL
              </h3>
              <div className="flex gap-[1vw] items-start mb-[1.2vw]">
                {/* Product Link input field */}
                <input
                  disabled={haveWebsite ? false : true}
                  value={pastedText}
                  onChange={(e) => setPastedText(e.target.value)}
                  type="text"
                  placeholder="URL"
                  className="flex-grow h-full mb-[1vw] w-[19.773vw] bg-[var(--dark-gray-3)] outline-none rounded-[var(--71px)] px-[1.088vw] py-[0.5vw] placeholder:text-[#FFFFFFCC]"
                />

                {/* Paste Link button */}
                <button
                onClick={handlePaste}
                  disabled={haveWebsite ? false : true}
                  className="bg-[var(--highlight-yellow)] px-[1.892vw] py-[0.4vw] text-black rounded-[var(--33px)] font-bold"
                >
                  Paste Link
                </button>
              </div>
              {/* Link component for saving progress */}
              <div
                className={`relative block w-fit mx-auto px-[0.52vw] py-[0.3vw] ${
                  haveWebsite && "hover:bg-[#484848]"
                } rounded-[var(--32px)] transition-all duration-200 underline`}
              >
                I’ll do this later
                <input
                  disabled={haveWebsite ? false : true}
                  type="checkbox"
                  name="I’ll do this later"
                  value={"I’ll do this later"}
                  className={`absolute opacity-0 inset-0 ${
                    haveWebsite ? "cursor-pointer" : ""
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

export default Page;
