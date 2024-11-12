"use client";
import React, { useEffect, useState } from "react";
import styles from "./estimatedCost.module.css";
import CustomCheckBoxText from "@/app/_components/customCheckBox/CustomCheckBoxText";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import axios from "axios";
import { addOption } from "@/app/reducers/serviceSlice";
import LoadingScreen from "@/app/_components/loadingScreen/LoadingScreen";

const Page = () => {
  const [saveProgress, setSaveProgress] = useState(false);
  const dispatch = useDispatch();
  const route = useRouter();
  const [serviceData, setServiceData] = useState<any>();
  const [isLoading, setIsLoading] = useState(true);
  async function makeService() {
    const optionsItems = localStorage.getItem("selectedOption");
    const optionsArray = optionsItems ? JSON.parse(optionsItems) : [];

    console.log({
      type: "content press release",
      totalSteps: 3,
      options: optionsArray,
    });

    const storedItems =
      typeof window !== "undefined" && localStorage.getItem("selectedOption");
    const itemsArray = storedItems ? JSON.parse(storedItems) : [];
    if (document.querySelector("input[type='radio']:checked")) {
      if (
        (
          document.querySelector(
            "input[type='radio']:checked"
          ) as HTMLInputElement
        ).value === "Start Now"
      ) {
        route.replace(`/dashboard/checkout/${serviceData?.data.data._id}`);
      }
      // router.push("/dashboard/services");
      if (
        (
          document.querySelector(
            "input[type='radio']:checked"
          ) as HTMLInputElement
        ).value !== "Start Now"
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
          type: "content press release",
          totalSteps: 3,
          options: optionsArray,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );
      console.log(data);
      setServiceData(data);
      if (data?.data?.data) {
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error, "////////////error////////////");
    }
  }

  useEffect(() => {
    initializeService();
  }, []);

  return (
    // Main container div with relative positioning
    isLoading ? <LoadingScreen /> : <NextPrevNav
      nextLink="/dashboard/services"
      nextFunc={nextFunc}
      nextText="All Done"
      backLink="/dashboard/services/content-press-release/word-count"
    >
      <div className="h-full relative w-full">
        {/* Inner container for the video end point section with custom styles */}
        <div
          className={`${styles.estimatedCost} w-full h-full flex justify-center items-center relative`}
        >
          {/* Nested div for content */}
          <div>
            {/* Text center alignment and margin bottom */}
            <div className="text-center mx-auto mb-[2.271vw]">
              {/* Main heading with margin bottom and underlined text */}
              <h2 className="mb-[1.5vw] w-[55%] mx-auto">
                Based on everything you told us, <u>the estimated cost</u> of
                this service is <span>$XXX</span> and would take around{" "}
                <span>40 Days</span> to finish.
              </h2>
            </div>

            {/* Container for buttons with flexbox layout, width fit, margin auto, and gap between buttons */}
            <div
              className={`${styles.btns} flex w-fit mx-auto gap-[1.041vw] mb-[1.5vw]`}
            >
              {/* CustomCheckBoxText component for selecting options */}
              <CustomCheckBoxText
                btnSize="xl"
                inputType="radio"
                name="estimatedCost"
                value={"Book a call"}
                onClick={() =>
                  document
                    .querySelectorAll("input[type='checkbox']:checked")
                    .forEach(
                      (e, i) => ((e as HTMLInputElement).checked = false)
                    )
                }
              >
                Book a call
              </CustomCheckBoxText>
              <CustomCheckBoxText
                btnSize="xl"
                inputType="radio"
                name="estimatedCost"
                value={"Start Now"}
                onClick={() =>
                  document
                    .querySelectorAll("input[type='checkbox']:checked")
                    .forEach(
                      (e, i) => ((e as HTMLInputElement).checked = false)
                    )
                }
              >
                Start Now
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
                onChange={() => setSaveProgress((prev) => !prev)}
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
