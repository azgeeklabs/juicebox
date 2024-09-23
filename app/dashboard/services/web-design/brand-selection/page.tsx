"use client";
import React, { useEffect, useState } from "react";
import styles from "./brand-selection.module.css";
import CustomCheckBoxText from "@/app/_components/customCheckBox/CustomCheckBoxText";
import Link from "next/link";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/Store/store";
import { useRouter } from "next/navigation";
import { addOption } from "@/app/reducers/serviceSlice";

const Page = () => {
  const [haveBrand, setHaveBrand] = useState(false);
  const [inputVal, setInputVal] = useState("");
  const [doLater, setDoLater] = useState(false);
  const all = useSelector((state: RootState) => state.service);
  const route = useRouter();
  const [fileSrc, setFileSrc] = useState<any>(null);
  const dispatch = useDispatch();
  const handleFileChange = (event:any) => {
    const file = event.target.files[0];
    setInputVal(file.name)
    
    if (file) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        setFileSrc(fileReader.result);
      };
    }
  };

  const nextFunc = () => {
    const storedItems = typeof window !== "undefined" && localStorage.getItem("selectedOption");
    const itemsArray = storedItems ? JSON.parse(storedItems) : [];
    if (haveBrand && !doLater && inputVal) {
      itemsArray.push({
        name: "brand",
        choice: (
          document.querySelector(
            'input[type="radio"]:checked'
          ) as HTMLInputElement
        ).value,
        file: `${inputVal}`,
      });
      localStorage.setItem("selectedOption", JSON.stringify(itemsArray));
        dispatch(addOption({
          name: "brand",
          choice: (
            document.querySelector(
              'input[type="radio"]:checked'
            ) as HTMLInputElement
          ).value,
          file: `${inputVal}`,
        }))
      route.push("/dashboard/services/web-design/website-style");
    } else if (
      !haveBrand &&
      !doLater &&
      document.querySelector('input[type="radio"]:checked')
    ) {
      itemsArray.push({
        name: "brand",
        choice: (
          document.querySelector(
            'input[type="radio"]:checked'
          ) as HTMLInputElement
        ).value,
      });
      localStorage.setItem("selectedOption", JSON.stringify(itemsArray));
      
        dispatch(addOption({
          name: "brand",
          choice: (
            document.querySelector(
              'input[type="radio"]:checked'
            ) as HTMLInputElement
          ).value,
        }))
      route.push("/dashboard/services/web-design/website-style");
    } else if (doLater) {
      itemsArray.push({
        name: "brand",
        choice: (
          document.querySelector(
            'input[type="checkbox"]:checked'
          ) as HTMLInputElement
        ).value,
      });
      localStorage.setItem("selectedOption", JSON.stringify(itemsArray));
     
        dispatch(addOption({
          name: "brand",
          choice: (
            document.querySelector(
              'input[type="checkbox"]:checked'
            ) as HTMLInputElement
          ).value,
        }))
      route.push("/dashboard/services/web-design/website-style");
    }
  };
  useEffect(()=>{
    console.log(all);
    
    },[all])

  return (
    <NextPrevNav
      nextLink="/dashboard/services/web-design/website-style" nextFunc={()=>nextFunc()}
      backLink="/dashboard/services/web-design/website-technology"
    >
      {/* // Main container div with relative positioning */}
      <div className="h-full relative">
        {/* Inner container for the video end point section with custom styles */}
        <div
          className={`${styles.brandSelection} w-full h-full flex justify-center items-center`}
        >
          {/* Nested div for content */}
          <div>
            {/* Text center alignment and margin bottom */}
            <div className="text-center mx-auto mb-[--sy-48px]">
              {/* Main heading with margin bottom and underlined text */}
              <h2 className="mb-[--sy-8px]">
                Do you already have a brand identity, or would you like <br /> us to
                create one for you?
              </h2>
              <p>
                Our talented designers can create a brand identity for you in <br /> no
                time, or you can provide your own!
              </p>
            </div>

            {/* Container for buttons with flexbox layout, width fit, margin auto, and gap between buttons */}
            <div
              className={`${styles.btns} flex w-fit mx-auto gap-[--22px] mb-[--sy-55px]`}
            >
              {/* CustomCheckBoxText component for selecting options */}
              <CustomCheckBoxText
                onClick={() => setHaveBrand(true)}
                btnSize="xl"
                inputType="radio"
                name="styleAnswer"
                value={"I’ve got my own"}
              >
                I’ve got my own
              </CustomCheckBoxText>
              <CustomCheckBoxText
                onClick={() => {setHaveBrand(false);
                  if (document.querySelector('input[type="checkbox"]:checked')) {
                    (document.querySelector('input[type="checkbox"]:checked') as HTMLInputElement).checked = false;
                    setDoLater(false)
                  }
                  setInputVal("")
                }}
                btnSize="xl"
                inputType="radio"
                name="styleAnswer"
                value={"Create one for me!"}

              >
                Create one for me!
              </CustomCheckBoxText>
            </div>

            {/* Divider */}
            <hr className={styles.divider} />

            <div
              className={`mx-auto w-full ${
                haveBrand ? "" : "grayscale-[50%] opacity-50"
              }`}
            >
              {/* Product Link field with optional span */}
              <h3 className="mb-[--sy-14px] font-semibold text-[--20px]">Upload Your Brand Identity</h3>
              <div className="flex gap-[1vw] items-start mb-[--sy-24px]">
              {/* Input field for uploading footage with full height, bottom margin, specific width, background color, outline removal, rounded corners, padding, and placeholder styling */}
              <div className="relative h-full mb-[1.778vh] w-[28.477vw] bg-[var(--dark-gray-3)] outline-none rounded-[var(--71px)] px-[1.088vw] py-[0.889vh] text-[#FFFFFFCC] cursor-pointer">
                {inputVal ? inputVal : "Upload Brand Identity"}
                <input
                  type="file"
                  id="upload"
                  className="pointer-events-none absolute opacity-0 inset-0 cursor-pointer"
                  onChange={(e)=>{handleFileChange(e)}}
                  disabled={haveBrand ? false : true}
                  
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
                  haveBrand && "hover:bg-[#484848]"
                } rounded-[var(--32px)] transition-all duration-200 underline`}
              >
                I’ll do this later
                <input
                  disabled={haveBrand ? false : true}
                  type="checkbox"
                  name="I’ll do this later"
                  value="I’ll do this later"
                  className={`absolute opacity-0 inset-0 ${
                    haveBrand ? "cursor-pointer" : ""
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
