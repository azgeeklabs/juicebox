"use client"
import classNames from "classnames";
import styles from "./emailCampaign.module.css";
import Link from "next/link";
import Image from "next/image";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";
import CustomCheckBoxText from "@/app/_components/customCheckBox/CustomCheckBoxText";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/Store/store";
import { useRouter } from "next/navigation";
import { addOption } from "@/app/reducers/serviceSlice";
import { useEffect } from "react";


function Page() {

  const all = useSelector((state:RootState)=>state.service)
  const dispatch = useDispatch();
  const route = useRouter();
  const nextFunc = () => {
    const storedItems = typeof window !== "undefined" && localStorage.getItem("selectedOption");
    const itemsArray = storedItems ? JSON.parse(storedItems) : [];
    if (document.querySelector("input[type='radio']:checked")) {
      itemsArray.push({
        name: "What type of email campaign would you like to run?",
        choice: (
          document.querySelector(
            "input[type='radio']:checked"
          ) as HTMLInputElement
        ).value,
      });
      localStorage.setItem("selectedOption", JSON.stringify(itemsArray));
        dispatch(addOption({
          name: "What type of email campaign would you like to run?",
          choice: (
            document.querySelector(
              "input[type='radio']:checked"
            ) as HTMLInputElement
          ).value,
        }))
      route.push("/dashboard/services/email-marketing/landing-page-link");
    }
  };
  useEffect(()=>{
console.log(all);

  },[all])

  return (
    <NextPrevNav
      nextLink="/dashboard/services/email-marketing/landing-page-link" nextFunc={nextFunc}
      backLink="/dashboard/services/email-marketing"
    >
      <div
        className={`${styles.monetization} flex flex-col justify-between h-full mb-[--sy-40px]`}
      >
        {/* Outer container with flexbox layout for column direction, space between elements, and full height */}

        <div className="flex flex-col gap-[var(--32px)] items-center h-full justify-center">
          {/* Inner container with flexbox layout for column direction, gap between elements, center alignment, and full height */}

          <div
            className={classNames(
              "flex flex-col items-center gap-[var(--16px)] text-center",
              styles.container
            )}
          >
            {/* Content container with additional class names for styling */}

            <h2 className="font-bold">
              {/* Heading with bold font */}
              What type of email campaign would you like to run?
            </h2>

            <p className=" text-[#FFFFFFCC]">
              {/* Paragraph with specified width for better readability */}
              Please select the option that best describes your campaign type.
              <br />
              This helps us understand the specific requirements for your
              campaign.
            </p>
          </div>

          {/* Container for buttons with flexbox layout, width fit, margin auto, and gap between buttons */}
          <div
            className={`${styles.btns} flex w-fit mx-auto gap-[1.041vw] mb-[1.5vw]`}
          >
            {/* CustomCheckBoxText component for selecting options */}
            <CustomCheckBoxText
              btnSize="xl"
              inputType="radio"
              name="emailCampaignType"
              value={"Product"}
            >
              Product
            </CustomCheckBoxText>
            <CustomCheckBoxText
              btnSize="xl"
              inputType="radio"
              name="emailCampaignType"
              value={"Service"}
            >
              Service
            </CustomCheckBoxText>
          </div>
        </div>
      </div>
    </NextPrevNav>
  );
}

export default Page;
