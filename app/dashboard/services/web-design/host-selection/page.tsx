"use client"
import React, { useEffect } from "react";
import styles from "./seo-campaign-endpoint.module.css";
import CustomCheckBoxText from "@/app/_components/customCheckBox/CustomCheckBoxText";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/Store/store";
import { useRouter } from "next/navigation";
import { addOption } from "@/app/reducers/serviceSlice";

const Page = () => {

  const all = useSelector((state:RootState)=>state.service)
  const dispatch = useDispatch();
  const route = useRouter();
  const nextFunc = () => {
    const selected = document.querySelector(
      "input[type='radio']:checked"
    ) as HTMLInputElement;
    const storedItems = typeof window !== "undefined" && localStorage.getItem("selectedOption");
    const itemsArray = storedItems ? JSON.parse(storedItems) : [];
    if (document.querySelector("input[type='radio']:checked")) {
      itemsArray.push({
        name: "host selection",
        choice: (
          document.querySelector(
            "input[type='radio']:checked"
          ) as HTMLInputElement
        ).value,
      });
      localStorage.setItem("selectedOption", JSON.stringify(itemsArray));
        dispatch(addOption({
          name: "host selection",
          choice: (
            document.querySelector(
              "input[type='radio']:checked"
            ) as HTMLInputElement
          ).value,
        }))
      route.push("/dashboard/services/web-design/web-design-endpoint");
    }
  };
  useEffect(()=>{
console.log(all);

  },[all])

  return (
    <NextPrevNav
      backLink="/dashboard/services/web-design/additional-features"
      nextLink="/dashboard/services/web-design/web-design-endpoint" nextFunc={nextFunc}
    >
      {/* // Main container div with relative positioning */}
      <div className="h-full relative mb-[--sy-50px]">
        {/* Inner container for the video end point section with custom styles */}
        <div
          className={`${styles.hostSelection} w-full h-full flex justify-center items-center`}
        >
          {/* Nested div for content */}
          <div>
            {/* Text center alignment and margin bottom */}
            <div className="text-center mx-auto mb-[--sy-40px]">
              {/* Main heading with margin bottom and underlined text */}
              <h2 className="mb-[--sy-8px]">
                Do you want this website to run on your own server <br /> host or you
                want us to host it for you?
              </h2>
              <p className=" text-[#FFFFFFCC]">Please provide us with a domain for your website</p>
            </div>

            {/* Container for buttons with flexbox layout, width fit, margin auto, and gap between buttons */}
            <div
              className={`${styles.btns} flex w-fit mx-auto gap-[--22px]`}
            >
              {/* CustomCheckBoxText component for selecting options */}
              <CustomCheckBoxText
                btnSize="xl"
                inputType="radio"
                name="styleAnswer"
                value={"Host on my Server"}
              >
                Host on my Server
              </CustomCheckBoxText>
              <CustomCheckBoxText
                btnSize="xl"
                inputType="radio"
                name="styleAnswer"
                value={"Host it for me"}
              >
                Host it for me
              </CustomCheckBoxText>
            </div>
          </div>
        </div>
      </div>
    </NextPrevNav>
  );
};

export default Page;
