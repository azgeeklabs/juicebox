"use client"
import classNames from "classnames";
import styles from "./emailMarketing.module.css";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";
import CustomCheckBoxText from "@/app/_components/customCheckBox/CustomCheckBoxText";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/Store/store";
import { useRouter } from "next/navigation";
import { addOption } from "@/app/reducers/serviceSlice";

function Page() {

  const all = useSelector((state:RootState)=>state.service)
  const dispatch = useDispatch();
  const route = useRouter();
  const nextFunc = () => {
    console.log("//////////////////////");
    const selected = document.querySelector(
      "input[type='radio']:checked"
    ) as HTMLInputElement;
    const storedItems = localStorage.getItem("selectedOption");
    const itemsArray = storedItems ? JSON.parse(storedItems) : [];
    if (document.querySelector("input[type='radio']:checked")) {
      itemsArray.push({
        name: "campaign type",
        choice: (
          document.querySelector(
            "input[type='radio']:checked"
          ) as HTMLInputElement
        ).value,
      });
      localStorage.setItem("selectedOption", JSON.stringify(itemsArray));
        dispatch(addOption({
          name: "campaign type",
          choice: (
            document.querySelector(
              "input[type='radio']:checked"
            ) as HTMLInputElement
          ).value,
        }))
      route.push("/dashboard/services/email-marketing/email-campaign");
    }
  };
  useEffect(()=>{
console.log(all);

  },[all])

  return (
    <NextPrevNav
      nextLink="/dashboard/services/email-marketing/email-campaign" nextFunc={nextFunc}
      backLink="/dashboard/services"
    >
      <div
        className={`${styles.monetization} flex flex-col justify-between h-full`}
      >
        {/* Inner container with flexbox layout for column direction, gap between elements, center alignment, and full height */}
        <div className="flex flex-col gap-[var(--sy-32px)] items-center h-full justify-center mb-[--sy-40px]">
          {/* Content container with additional class names for styling */}
          <div
            className={classNames(
              "flex flex-col items-center gap-[var(--16px)] text-center",
              styles.container
            )}
          >
            {/* Heading with bold font */}
            <h2 className="font-bold text-[--32px]">What type of campaign you would like?</h2>

            {/* Paragraph with specified width for better readability */}
            <p className="w-[60%] text-[#FFFFFFCC]">
              Please choose whether you want to develop a regular app or a
              gamified app. This helps us tailor our recommendations to your
              project.
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
              name="campaignType"
              value={"Sales"}
            >
              Sales
            </CustomCheckBoxText>
            <CustomCheckBoxText
              btnSize="xl"
              inputType="radio"
              name="campaignType"
              value={"Informative"}
            >
              Informative
            </CustomCheckBoxText>
          </div>
        </div>
      </div>
    </NextPrevNav>
  );
}

export default Page;
