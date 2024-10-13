"use client";
import React, { useEffect, useState } from "react";
import styles from "./videoEndPoint.module.css";
import CustomCheckBoxText from "@/app/_components/customCheckBox/CustomCheckBoxText";
import Link from "next/link";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { addOption, incrementTotalSteps } from "@/app/reducers/serviceSlice";
import axios from "axios";
import { RootState } from "@/app/Store/store";

const Page = () => {
  const [saveProgress, setSaveProgress] = useState(false);
  const dispatch = useDispatch();
  const route = useRouter();
  const file = useSelector((state: RootState) => state.service.file);
  const [serviceData, setServiceData] = useState<any>(null);
  console.log(file);
  const loadFileFromLocalStorage = () => {
    const fileData =
      typeof window !== "undefined" && localStorage.getItem("uploadedFile");
    if (fileData) {
      const { name, type, size, base64 } = JSON.parse(fileData);

      // Convert Base64 back to a File object (this isn't exact but provides structure)
      const byteString = atob(base64.split(",")[1]);
      const ab = new ArrayBuffer(byteString.length);
      const ia = new Uint8Array(ab);
      for (let i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
      }
      const blob = new Blob([ab], { type });
      const file = new File([blob], name, { type });

      return file;
    }
    return null;
  };

  async function makeService() {
    const optionsItems = localStorage.getItem("selectedOption");
    const optionsArray = optionsItems ? JSON.parse(optionsItems) : [];
    
    console.log({
      type: "video",
      totalSteps: 12,
      options: optionsArray,
    });

    try {
      if (file) {
        console.log(file);
        
      }
      const data = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/services/initialize-service`,
        {
          type: "video",
          totalSteps: 11,
          fileUrl_7:
            (typeof window !== "undefined" && loadFileFromLocalStorage()),
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
      const storedItems =
        typeof window !== "undefined" && localStorage.getItem("selectedOption");
      const itemsArray = storedItems ? JSON.parse(storedItems) : [];
      if (document.querySelector("input[type='radio']:checked")) {
        
        
        if ((document.querySelector("input[type='radio']:checked") as HTMLInputElement).value === "Make this video!") {
          route.replace(`/dashboard/checkout/${data.data.data._id}`);
        }
        if ((document.querySelector("input[type='radio']:checked") as HTMLInputElement).value !== "Make this video!") {
          route.replace(`/dashboard/services/book-a-call/${data.data.data._id}`);
        }
        // route.push("/dashboard/services");
      } else if (document.querySelector("input[type='checkbox']:checked")) {
        
        route.push("/dashboard/services");
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
          type: "video",
          totalSteps: 11,
          fileUrl_7:
            (typeof window !== "undefined" && loadFileFromLocalStorage()),
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
    // Main container div with relative positioning
    <NextPrevNav
      nextLink="/dashboard/services"
      backLink="/dashboard/services/video-service/video-duration"
      nextText="All Done"
      nextFunc={() => nextFunc()}
    >
      <div className="h-full relative">
        {/* Inner container for the video end point section with custom styles */}
        <div
          className={`${styles.videoEndPoint} w-full h-full flex justify-center items-center`}
        >
          {/* Nested div for content */}
          <div>
            {/* Text center alignment and margin bottom */}
            <div className="text-center mx-auto mb-[--46px]">
              {/* Main heading with margin bottom and underlined text */}
              <h2>
                Based on everything you told us, <u>the estimated cost</u> of
                this <hr className="border-0" /> video is <span>${serviceData?.data.data.totalPrice}</span> and
                would take around <span>{serviceData?.data.data.estimatedDuration}</span> Days to finish.
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
                name="styleAnswer"
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
                name="styleAnswer"
                value={"Make this video!"}
                onClick={() =>
                  document
                    .querySelectorAll("input[type='checkbox']:checked")
                    .forEach(
                      (e, i) => ((e as HTMLInputElement).checked = false)
                    )
                }
              >
                Make this video!
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
