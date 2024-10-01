"use client";
import React, { useEffect, useState } from "react";
import styles from "./article-selection.module.css";
import CustomCheckBoxText from "@/app/_components/customCheckBox/CustomCheckBoxText";
import Link from "next/link";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/Store/store";
import { useRouter } from "next/navigation";
import { addFile, addOption } from "@/app/reducers/serviceSlice";

const Page = () => {
  const [haveArticle, setHaveArticle] = useState(false);
  const [inputVal, setInputVal] = useState("");
  const [doLater, setDoLater] = useState(false);
  const all = useSelector((state: RootState) => state.service);
  const route = useRouter();
  const [fileSrc, setFileSrc] = useState<any>(null);
  const dispatch = useDispatch();

  const convertFileToBase64 = (file:any) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const handleFileChange = async (event:any) => {
    const file = event.target.files[0];
    setInputVal(file?.name)
    console.log(file);
    

    if (file) {
      // Convert file to Base64 for storing in localStorage
      const base64File = await convertFileToBase64(file);

      // Store file metadata and Base64 string in localStorage
      const fileData = {
        name: file.name,
        type: file.type,
        size: file.size,
        base64: base64File,
      };
      localStorage.setItem('uploadedFile', JSON.stringify(fileData));

      // Store the file in Redux
      dispatch(addFile(file));
    }
  };

  const nextFunc = () => {
    const storedItems = typeof window !== "undefined" && localStorage.getItem("selectedOption");
    const itemsArray = storedItems ? JSON.parse(storedItems) : [];
    if (haveArticle && !doLater && inputVal) {
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
      route.push("/dashboard/services/seo-link-building/advertising-details");
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
      route.push("/dashboard/services/seo-link-building/advertising-details");
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
      route.push("/dashboard/services/seo-link-building/advertising-details");
    }
  };
  useEffect(()=>{
    console.log(all);
    
    },[all])

  return (
    <NextPrevNav
      backLink="/dashboard/services/seo-link-building"
      nextLink="/dashboard/services/seo-link-building/advertising-details" nextFunc={()=>nextFunc()}
    >
      {/* // Main container div with relative positioning */}
      <div className="h-full relative">
        {/* Inner container for the video end point section with custom styles */}
        <div
          className={`${styles.articleSelection} w-full h-full flex justify-center items-center`}
        >
          {/* Nested div for content */}
          <div>
            {/* Text center alignment and margin bottom */}
            <div className="text-center mx-auto mb-[--sy-32px]">
              {/* Main heading with margin bottom and underlined text */}
              <h2 className="mb-[--sy-16px]">
                Do you already have an article, or would you like us to <br />{" "}
                create one for you?
              </h2>
              <p className=" text-[#FFFFFFCC]">
                Our talented writers can create an article for you in no time,
              </p>
            </div>

            {/* Container for buttons with flexbox layout, width fit, margin auto, and gap between buttons */}
            <div
              className={`${styles.btns} flex w-fit mx-auto gap-[--22px] mb-[--sy-48px]`}
            >
              {/* CustomCheckBoxText component for selecting options */}
              <CustomCheckBoxText
                onClick={() => setHaveArticle(true)}
                btnSize="xl"
                inputType="radio"
                name="articleSelectionAnswer"
                value={"I’ve got my own article"}
              >
                I’ve got my own article
              </CustomCheckBoxText>
              <CustomCheckBoxText
                onClick={() => {setHaveArticle(false);
                  if (document.querySelector('input[type="checkbox"]:checked')) {
                    (document.querySelector('input[type="checkbox"]:checked') as HTMLInputElement).checked = false;
                    setDoLater(false)
                  }
                  setInputVal("")
                }}
                btnSize="xl"
                inputType="radio"
                name="articleSelectionAnswer"
                value={"Make one for me!"}
              >
                Make one for me!
              </CustomCheckBoxText>
            </div>
            <div
              className={`mx-auto w-full border-t-[1px] border-t-[#484848] pt-[--sy-48px] ${
                haveArticle ? "" : "grayscale-[50%] opacity-50"
              }`}
            >
              {/* Product Link field with optional span */}
              <h3 className="mb-[--sy-14px] font-semibold text-[--20px]">
                Upload Your Copy
              </h3>
              <div className="flex gap-[1vw] items-start mb-[--sy-24px]">
              {/* Input field for uploading footage with full height, bottom margin, specific width, background color, outline removal, rounded corners, padding, and placeholder styling */}
              <div className="relative h-full mb-[1.778vh] w-[28.477vw] bg-[var(--dark-gray-3)] outline-none rounded-[var(--71px)] px-[1.088vw] py-[0.889vh] text-[#FFFFFFCC] cursor-pointer">
                {inputVal ? inputVal : "Upload Article"}
                <input
                  type="file"
                  id="upload"
                  className="pointer-events-none absolute opacity-0 inset-0 cursor-pointer"
                  onChange={(e)=>{handleFileChange(e)}}
                  disabled={haveArticle ? false : true}
                  
                />
              </div>

              {/* Button for uploading footage with background color, padding, text color, and rounded corners */}
              <label htmlFor="upload" className="cursor-pointer font-bold bg-[var(--highlight-yellow)] px-[1.892vw] py-[--sy-10px] text-black rounded-[var(--33px)]">
                Upload
              </label>
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
                  onClick={()=>{
                    typeof window !== "undefined" && localStorage.removeItem('uploadedFile');
                    dispatch(addFile(null))
                  }}
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
