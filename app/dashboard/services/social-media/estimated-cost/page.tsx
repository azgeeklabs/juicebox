"use client";
import React, { useEffect, useState } from "react";
import styles from "./estimatedCost.module.css";
import CustomCheckBoxText from "@/app/_components/customCheckBox/CustomCheckBoxText";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/Store/store";
import axios from "axios";
import { addOption } from "@/app/reducers/serviceSlice";
import LoadingScreen from "@/app/_components/loadingScreen/LoadingScreen";

const Page = () => {
  const chosenRoute = useSelector(
    (state: RootState) => state.route.chosenRoute
  );
  const [saveProgress, setSaveProgress] = useState(false);
  const router = useRouter();
  const [serviceData, setServiceData] = useState<any>(null);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  async function makeService() {
    const optionsItems =
      typeof window !== "undefined" && localStorage.getItem("selectedOption");
    const optionsArray = optionsItems ? JSON.parse(optionsItems) : [];

    console.log({
      type: "social media",
      totalSteps:
        chosenRoute == "create"
          ? 5
          : chosenRoute == "audience"
          ? 4
          : chosenRoute == "post"
          ? 3
          : 0,
      options: optionsArray,
    });

    try {
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
          router.replace(`/dashboard/checkout/${serviceData?.data.data._id}`);
        }
        // router.push("/dashboard/services");
        if (
          (
            document.querySelector(
              "input[type='radio']:checked"
            ) as HTMLInputElement
          ).value !== "Start Now"
        ) {
          router.replace(
            `/dashboard/services/book-a-call/${serviceData?.data.data._id}`
          );
        }
      } else if (document.querySelector("input[type='checkbox']:checked")) {
        router.push("/dashboard/services");
      }
    } catch (error) {
      console.log(error, "////////////error////////////");
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
          type: "social media",
          totalSteps:
            chosenRoute == "create"
              ? 5
              : chosenRoute == "audience"
              ? 4
              : chosenRoute == "post"
              ? 3
              : 0,
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
      nextText="All Done"
      nextFunc={nextFunc}
    >
      <div className="h-full relative w-full">
        {/* Inner container for the video end point section with custom styles */}
        <div
          className={`${styles.estimatedCost} w-full h-full flex justify-center items-center relative `}
        >
          {/* Nested div for content */}
          <div className="mb-[--sy-40px]">
            {/* Text center alignment and margin bottom */}
            <div className="text-center mx-auto mb-[--sy-44px]">
              {/* Main heading with margin bottom and underlined text */}
              <h2>
                Based on your selections, the estimated cost for your project
                <hr className="border-0" /> is <span>${serviceData?.data.data.totalPrice}</span> and it will
                take approximately <span>{serviceData?.data.data.estimatedDuration}</span> days to complete.
              </h2>
            </div>

            {/* Container for buttons with flexbox layout, width fit, margin auto, and gap between buttons */}
            <div
              className={`${styles.btns} flex w-fit mx-auto gap-[--22px] mb-[--sy-16px]`}
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
        <button
          className=" absolute left-0 bottom-0 translate-y-full bg-[#484848] text-white py-[0.5vw] px-[--50px] rounded-[41px]"
          onClick={() => router.back()}
        >
          Back
        </button>
      </div>
    </NextPrevNav>
  );
};

export default Page;
