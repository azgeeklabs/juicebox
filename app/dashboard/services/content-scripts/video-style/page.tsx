"use client"
import React from "react";
import styles from "./videoStyle.module.css";
import CustomCheckBoxText from "@/app/_components/customCheckBox/CustomCheckBoxText";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { addOption } from "@/app/reducers/serviceSlice";

const Page = () => {

  const dispatch = useDispatch();
  const route = useRouter();
  const nextFunc = () => {
    const storedItems = typeof window !== "undefined" && localStorage.getItem("selectedOption");
    const itemsArray = storedItems ? JSON.parse(storedItems) : [];
    if (document.querySelector("input[type='radio']:checked")) {
      itemsArray.push({
        name: "matching video style",
        choice: (
          document.querySelector(
            "input[type='radio']:checked"
          ) as HTMLInputElement
        ).value,
      });
      localStorage.setItem("selectedOption", JSON.stringify(itemsArray));
        dispatch(addOption({
          name: "matching video style",
          choice: (
            document.querySelector(
              "input[type='radio']:checked"
            ) as HTMLInputElement
          ).value,
        }))
      route.push("/dashboard/services/content-scripts/kind-of-video");
    }
  };
  return (
    // Main outer container div
    <NextPrevNav
      nextLink="/dashboard/services/content-scripts/kind-of-video" nextFunc={nextFunc}
      backLink="/dashboard/services/content-scripts/channel-choice"
    >
      <div className=" h-full flex items-center justify-center">
        {/* Inner container with full width, custom video style styles, and top padding */}
        <div className={`${styles.videoStyle} w-full mb-[--sy-50px]`}>
          {/* Header section with centered text, auto margins for centering, and bottom margin */}
          <div className="text-center mx-auto mb-[4.037vh]">
            {/* Main heading with bottom margin */}
            <h2 className="mb-[2.667vh]">
              Would you like this video to match the style of the videos
              <hr className="border-0" /> you've already published on your
              channel?
            </h2>

            {/* Subheading with horizontal rule (line) */}
            <h4>
              This helps ensure consistency with your existing content, or we
              can let our creative juices <hr className="border-0" /> flow to
              create an exceptional video for your channel!
            </h4>
          </div>

          {/* Buttons container with custom styles, flexbox layout, width fit to content, auto margins for centering, and gap */}
          <div className={`${styles.btns} flex w-fit mx-auto gap-[1.041vw]`}>
            {/* Yes option with large button size and radio input type */}
            <CustomCheckBoxText
              btnSize="xl"
              inputType="radio"
              name="styleAnswer"
              value={"Yes"}
            >
              Yes!
            </CustomCheckBoxText>

            {/* No option with large button size and radio input type */}
            <CustomCheckBoxText
              btnSize="xl"
              inputType="radio"
              name="styleAnswer"
              value={"Nah, impress me"}
            >
              Nah, impress me!
            </CustomCheckBoxText>
          </div>
        </div>
      </div>
    </NextPrevNav>
  );
};

export default Page;
