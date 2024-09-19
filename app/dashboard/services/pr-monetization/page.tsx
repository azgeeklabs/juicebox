"use client"
import classNames from "classnames";
import styles from "./pr.module.css";
import Link from "next/link";
import Image from "next/image";
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
        name: "what to monetize",
        choice: (
          document.querySelector(
            "input[type='radio']:checked"
          ) as HTMLInputElement
        ).value,
      });
      localStorage.setItem("selectedOption", JSON.stringify(itemsArray));
        dispatch(addOption({
          name: "what to monetize",
          choice: (
            document.querySelector(
              "input[type='radio']:checked"
            ) as HTMLInputElement
          ).value,
        }))
      route.push("/dashboard/services/pr-monetization/add-link");
    }
  };
  useEffect(()=>{
console.log(all);

  },[all])
  return (
    <div
      className={`${styles.monetization} flex flex-col justify-between h-full`}
    >
      {/* Inner container with flexbox layout for column direction, gap between elements, center alignment, and full height */}
      <div className="flex flex-col gap-[var(--sy-48px)] items-center h-full justify-center mb-[--sy-50px]">
        {/* Content container with additional class names for styling */}
        <div
          className={classNames(
            "flex flex-col items-center gap-[var(--24px)] text-center",
            styles.container
          )}
        >
          {/* Heading with bold font */}
          <h2 className="font-bold">What do you want to monetize?</h2>

          {/* Paragraph with specified width for better readability */}
          <p className="w-[60%] text-[#FFFFFFCC]">
            Please choose whether you want to monetize a regular app or a
            gamified app. This helps us tailor our recommendations to your
            project.
          </p>
        </div>

        {/* Cards container with flexbox layout and gap between cards */}
        <div className={classNames("flex gap-[--16px]", styles.cards)}>
          {/* Game card with flexbox layout for column direction, gap between elements, and group styling */}
          <CustomCheckBoxText btnSize="xl" inputType="radio" name="styleAnswer" value={"Facebook Page"}>
            Facebook Page
          </CustomCheckBoxText>

          {/* CustomCheckBoxText component for selecting "I want to talk to someone first" option */}
          <CustomCheckBoxText btnSize="xl" inputType="radio" name="styleAnswer" value={"YouTube Channel"}>
            YouTube Channel
          </CustomCheckBoxText>
          <CustomCheckBoxText btnSize="xl" inputType="radio" name="styleAnswer" value={"Twitter Account"}>
            Twitter Account
          </CustomCheckBoxText>
        </div>
      </div>

      {/* Navigation link for proceeding to the next step, styled with background color, text color, padding, rounded corners, and margin-left auto for right alignment */}
      <Link
        href={"/dashboard/services/pr-monetization/add-link"}
        onClick={(e)=>{e.preventDefault();
          nextFunc()
        }}
        className="bg-[var(--highlight-yellow)] text-black px-[2vw] py-[0.5vw] w-fit rounded-[var(--41px)] font-semibold ml-auto"
      >
        Next
      </Link>
    </div>
  );
}

export default Page;
