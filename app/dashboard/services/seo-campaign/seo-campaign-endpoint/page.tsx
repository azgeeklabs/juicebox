"use client";
import React, { useEffect, useState } from "react";
import styles from "./seo-campaign-endpoint.module.css";
import CustomCheckBoxText from "@/app/_components/customCheckBox/CustomCheckBoxText";
import Link from "next/link";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";
import { addOption } from "@/app/reducers/serviceSlice";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

const Page = () => {
  const [saveProgress, setSaveProgress] = useState(false);
  const dispatch = useDispatch();
  const route = useRouter();
  const [serviceData, setServiceData] = useState<any>(null);

  async function makeService() {
    const optionsItems = localStorage.getItem("selectedOption");
    const optionsArray = optionsItems ? JSON.parse(optionsItems) : [];
    console.log(optionsArray, "//////////optionsArray/////////////");

    const storedItems =
      typeof window !== "undefined" && localStorage.getItem("selectedOption");
    const itemsArray = storedItems ? JSON.parse(storedItems) : [];
    if (document.querySelector("input[type='radio']:checked")) {
      if (
        (
          document.querySelector(
            "input[type='radio']:checked"
          ) as HTMLInputElement
        ).value === "Let's get started"
      ) {
        route.replace(`/dashboard/checkout/${serviceData?.data.data._id}`);
      }
      // router.push("/dashboard/services");
      if (
        (
          document.querySelector(
            "input[type='radio']:checked"
          ) as HTMLInputElement
        ).value !== "Let's get started"
      ) {
        route.replace(
          `/dashboard/services/book-a-call/${serviceData?.data.data._id}`
        );
      }
    } else if (document.querySelector("input[type='checkbox']:checked")) {
      route.push("/dashboard/services");
    }
  }
  const nextFunc = () => {
    makeService();
  };

  async function initializeService() {
    const optionsItems =
      typeof window !== "undefined" && localStorage.getItem("selectedOption");
    const optionsArray = optionsItems ? JSON.parse(optionsItems) : [];
    try {
      const data = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/services/initialize-service`,
        {
          type: "SEO campaign",
          totalSteps: 5,
          options: optionsArray,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Token ${
              typeof window !== "undefined" && localStorage.getItem("token")
            }`,
          },
        }
      );
      console.log(data);
      setServiceData(data);
    } catch (error) {
      console.log(error, "////////////error////////////");
    }
  }

  useEffect(() => {
    initializeService();
  }, []);

  return (
    <NextPrevNav
      backLink="/dashboard/services/seo-campaign/analysis-estimate"
      nextLink="/dashboard/services/"
      nextFunc={() => nextFunc()}
      nextText="All Done"
    >
      {/* // Main container div with relative positioning */}
      <div className="h-full relative">
        {/* Inner container for the video end point section with custom styles */}
        <div
          className={`${styles.seoCampaignEndPoint} w-full h-full flex justify-center items-center`}
        >
          {/* Nested div for content */}
          <div>
            {/* Text center alignment and margin bottom */}
            <div className="text-center mx-auto mb-[--sy-48px]">
              {/* Main heading with margin bottom and underlined text */}
              <h2 className="mb-[--sy-16px]">
                The cost for this campaign will be around <span>${serviceData?.data?.data.totalPrice}</span> and
                will <span>{serviceData?.data?.data.estimatedDuration}</span> <br /> Months to get you to the first
                page of Google.
              </h2>
              <p className=" text-[#FFFFFFCC]">
                The Keywords you picked are <span>Hard</span> keywords. Based on
                our analysis of your Domain strength and the strength of <br />{" "}
                the page you submitted, along with the amount of content you
                have and your competitor's analysis
              </p>
            </div>

            {/* Container for buttons with flexbox layout, width fit, margin auto, and gap between buttons */}
            <div
              className={`${styles.btns} flex w-fit mx-auto gap-[--22px] mb-[1.5vw]`}
            >
              {/* CustomCheckBoxText component for selecting options */}
              <CustomCheckBoxText
                btnSize="xl"
                inputType="radio"
                name="styleAnswer"
                value={"Book a call with our experts"}
                onClick={() =>
                  document
                    .querySelectorAll("input[type='checkbox']:checked")
                    .forEach(
                      (e, i) => ((e as HTMLInputElement).checked = false)
                    )
                }
              >
                Book a call with our experts
              </CustomCheckBoxText>
              <CustomCheckBoxText
                btnSize="xl"
                inputType="radio"
                name="styleAnswer"
                value={"Let's get started"}
                onClick={() =>
                  document
                    .querySelectorAll("input[type='checkbox']:checked")
                    .forEach(
                      (e, i) => ((e as HTMLInputElement).checked = false)
                    )
                }
              >
                Let's get started
              </CustomCheckBoxText>
            </div>

            {/* Link component for saving progress */}
            <div
              className={`relative block w-fit mx-auto px-[0.52vw] py-[0.3vw] hover:bg-[#484848] rounded-[var(--32px)] transition-all duration-200 `}
            >
              Save my Progress
              <input
                type="checkbox"
                name="saveProgress"
                value={"Save my Progress"}
                className={`absolute opacity-0 inset-0 cursor-pointer`}
                onChange={() => {
                  setSaveProgress((prev) => !prev);
                }}
                onClick={() =>
                  document
                    .querySelectorAll("input[type='radio']:checked")
                    .forEach(
                      (e, i) => ((e as HTMLInputElement).checked = false)
                    )
                }
              />
            </div>
          </div>
        </div>
      </div>
    </NextPrevNav>
  );
};

export default Page;
