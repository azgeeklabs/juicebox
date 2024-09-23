"use client";
import React, { useEffect, useState } from "react";
import styles from "./web-design.module.css";
import CustomCheckBoxText from "@/app/_components/customCheckBox/CustomCheckBoxText";
import Link from "next/link";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/Store/store";
import { useRouter } from "next/navigation";
import { addOption } from "@/app/reducers/serviceSlice";

const Page = () => {
  const [haveWebsite, setHaveWebsite] = useState(false);

  const [doLater, setDoLater] = useState(false);

  const [pastedText, setPastedText] = useState<string>("");
  const [inputVal, setInputVal] = useState("");

  
  const all = useSelector((state: RootState) => state.service);
  const route = useRouter();
  const dispatch = useDispatch();

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setPastedText(text);
      setInputVal(text);
    } catch (error) {
      console.error("Failed to read clipboard contents: ", error);
    }
  };
 

  console.log(document.querySelector('input[type="checkbox"]:checked'));

  const nextFunc = () => {
    const storedItems = typeof window !== "undefined" && localStorage.getItem("selectedOption");
    const itemsArray = storedItems ? JSON.parse(storedItems) : [];
    if (haveWebsite && !doLater && pastedText) {
      itemsArray.push({
        name: "redesign or build website",
        choice: (
          document.querySelector(
            'input[type="radio"]:checked'
          ) as HTMLInputElement
        ).value,
        ans: `${pastedText}`,
      });
      localStorage.setItem("selectedOption", JSON.stringify(itemsArray));
        dispatch(addOption({
          name: "redesign or build website",
          choice: (
            document.querySelector(
              'input[type="radio"]:checked'
            ) as HTMLInputElement
          ).value,
          ans: `${pastedText}`,
        }))
      route.push("/dashboard/services/web-design/website-type");
    } else if (
      !haveWebsite &&
      !doLater &&
      document.querySelector('input[type="radio"]:checked')
    ) {
      itemsArray.push({
        name: "redesign or build website",
        choice: (
          document.querySelector(
            'input[type="radio"]:checked'
          ) as HTMLInputElement
        ).value,
      });
      localStorage.setItem("selectedOption", JSON.stringify(itemsArray));
      
        dispatch(addOption({
          name: "redesign or build website",
          choice: (
            document.querySelector(
              'input[type="radio"]:checked'
            ) as HTMLInputElement
          ).value,
        }))
      route.push("/dashboard/services/web-design/website-type");
    } else if (doLater) {
      itemsArray.push({
        name: "redesign or build website",
        choice: (
          document.querySelector(
            'input[type="checkbox"]:checked'
          ) as HTMLInputElement
        ).value,
      });
      localStorage.setItem("selectedOption", JSON.stringify(itemsArray));
     
        dispatch(addOption({
          name: "redesign or build website",
          choice: (
            document.querySelector(
              'input[type="checkbox"]:checked'
            ) as HTMLInputElement
          ).value,
        }))
      route.push("/dashboard/services/web-design/website-type");
    }
  };
  useEffect(()=>{
    console.log(all);
    
    },[all])

  return (
    <NextPrevNav nextLink="/dashboard/services/web-design/website-type" nextFunc={()=>nextFunc()}>
      {/* // Main container div with relative positioning */}
      <div className="h-full relative">
        {/* Inner container for the video end point section with custom styles */}
        <div
          className={`${styles.webDesign} w-full h-full flex justify-center items-center`}
        >
          {/* Nested div for content */}
          <div>
            {/* Text center alignment and margin bottom */}
            <div className="text-center mx-auto mb-[--43px]">
              {/* Main heading with margin bottom and underlined text */}
              <h2 className="mb-[--sy-16px]">
                Do you want to redesign an existing website or build your <br />
                website from scratch?
              </h2>
              <p className=" text-center">
                Our design team can create a new epic website for you, or you
                can revamp your <br /> current website with us for a new look and user
                experience!
              </p>
            </div>

            {/* Container for buttons with flexbox layout, width fit, margin auto, and gap between buttons */}
            <div
              className={`${styles.btns} flex w-fit mx-auto gap-[--22px] mb-[1.5vw]`}
            >
              {/* CustomCheckBoxText component for selecting options */}
              <CustomCheckBoxText
                onClick={() => setHaveWebsite(true)}
                btnSize="xl"
                inputType="radio"
                name="styleAnswer"
                value={"Redesign my Website"}
              >
                Redesign my Website
              </CustomCheckBoxText>
              <CustomCheckBoxText
                onClick={() => {setHaveWebsite(false);
                  if (document.querySelector('input[type="checkbox"]:checked')) {
                    (document.querySelector('input[type="checkbox"]:checked') as HTMLInputElement).checked = false;
                    setDoLater(false)
                  }
                  setInputVal("")
                  setPastedText("")
                }}
                btnSize="xl"
                inputType="radio"
                name="styleAnswer"
                value={"Build my website"}
              >
                Build my website
              </CustomCheckBoxText>
            </div>

            {/* Divider */}
            <hr className={styles.divider} />

            <div
              className={`mx-auto w-full ${
                haveWebsite ? "" : "grayscale-[50%] opacity-50"
              }`}
            >
              {/* Product Link field with optional span */}
              <h3 className="mb-[0.6vw] font-semibold text-[--20px]">Website URL</h3>
              <div className="flex gap-[1vw] items-start mb-[--sy-24px]">
                {/* Product Link input field */}
                <input
                  disabled={haveWebsite ? false : true}
                  value={pastedText}
                  onChange={(e) => setPastedText(e.target.value)}
                  type="text"
                  placeholder="Product Link"
                  className="flex-grow h-full mb-[1vw] w-[19.773vw] bg-[var(--dark-gray-3)] outline-none rounded-[var(--71px)] px-[1.088vw] py-[--sy-10px] placeholder:text-[#FFFFFFCC]"
                />

                {/* Paste Link button */}
                <button
                  onClick={handlePaste}
                  disabled={haveWebsite ? false : true}
                  className="bg-[var(--highlight-yellow)] px-[1.892vw] py-[--sy-10px] text-black rounded-[var(--33px)]"
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
