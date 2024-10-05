"use client"
import React, { useState } from "react";
import styles from "./web-design-endpoint.module.css";
import CustomCheckBoxText from "@/app/_components/customCheckBox/CustomCheckBoxText";
import Link from "next/link";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { addOption } from "@/app/reducers/serviceSlice";
import { RootState } from "@/app/Store/store";

const Page = () => {
  const [saveProgress, setSaveProgress] = useState(false);

  const dispatch = useDispatch();
  const route = useRouter();
  const file = useSelector((state:RootState) => state.service.file);
console.log(file);
const loadFileFromLocalStorage = () => {
  const fileData = typeof window !== "undefined" && localStorage.getItem('uploadedFile');
  if (fileData) {
    const { name, type, size, base64 } = JSON.parse(fileData);

    // Convert Base64 back to a File object (this isn't exact but provides structure)
    const byteString = atob(base64.split(',')[1]);
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
    console.log(optionsArray,"//////////optionsArray/////////////");
    if (document.querySelector("input[type='radio']:checked")) {
      optionsArray.push({
        name: "estimated cost",
        choice: (
          document.querySelector(
            "input[type='radio']:checked"
          ) as HTMLInputElement
        ).value,
      });
    } else if (document.querySelector("input[type='checkbox']:checked")) {
      optionsArray.push({
        name: "estimated cost",
        choice: (
          document.querySelector(
            "input[type='checkbox']:checked"
          ) as HTMLInputElement
        ).value,
      });
    }
    console.log({
      type:"Web design",
      fileUrl_4:file,
      totalSteps:10,
      options:optionsArray
    })
    
    
    try {
      const data = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/services/initialize-service`,{
        type:"Web design",
        totalSteps:10,
        fileUrl_4:(typeof window !== "undefined" && loadFileFromLocalStorage()),
        options:optionsArray
      },{
        headers:{
          "Content-Type": "multipart/form-data",
            Authorization: `Token ${typeof window !== "undefined" && localStorage.getItem("token")}`,
        }
      })
      console.log(data);
      const storedItems = typeof window !== "undefined" && localStorage.getItem("selectedOption");
      const itemsArray = storedItems ? JSON.parse(storedItems) : [];
      if (document.querySelector("input[type='radio']:checked")) {
        itemsArray.push({
          name: "estimated cost",
          choice: (
            document.querySelector(
              "input[type='radio']:checked"
            ) as HTMLInputElement
          ).value,
        });
        localStorage.setItem("selectedOption", JSON.stringify(itemsArray));
       
          dispatch(addOption({
            name: "estimated cost",
            choice: (
              document.querySelector(
                "input[type='radio']:checked"
              ) as HTMLInputElement
            ).value,
          }))
          if ((document.querySelector("input[type='radio']:checked") as HTMLInputElement).value === "Let's make this website!") {
            route.replace(`/dashboard/${data.data.data._id}`);
          }
      // route.push("/dashboard/services");
      if ((document.querySelector("input[type='radio']:checked") as HTMLInputElement).value !== "Let's make this website!") {
        try {
          const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/services/call-sales`, JSON.stringify({
            serviceId: data.data.data._id,
          }),{
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${
            typeof window !== "undefined" && localStorage.getItem("token")
          }`,
            },
          })
          console.log(response);
          route.replace("/dashboard/services");
        } catch (error) {
          console.log(error);
          
        }
      }

      } else if (document.querySelector("input[type='checkbox']:checked")) {
        itemsArray.push({
          name: "estimated cost",
          choice: (
            document.querySelector(
              "input[type='checkbox']:checked"
            ) as HTMLInputElement
          ).value,
        });
        localStorage.setItem("selectedOption", JSON.stringify(itemsArray));
        dispatch(addOption({
          name: "estimated cost",
          choice: (
            document.querySelector(
              "input[type='checkbox']:checked"
            ) as HTMLInputElement
          ).value,
        }))
      route.push("/dashboard/services");
      }
      
    } catch (error) {
      console.log(error,"////////////error////////////");
      
    }
  }
  const nextFunc = () => {
      makeService()
  };
  return (
    <NextPrevNav
      backLink="/dashboard/services/web-design/host-selection"
      nextLink="/dashboard/services" nextFunc={nextFunc}
      nextText="All Done"
    >
      {/* Main container div with relative positioning */}
      <div className="h-full relative mb-[--sy-40px]">
        {/* Inner container for the video end point section with custom styles */}
        <div
          className={`${styles.seoCampaignEndPoint} w-full h-full flex justify-center items-center`}
        >
          {/* Nested div for content */}
          <div>
            {/* Text center alignment and margin bottom */}
            <div className="text-center mx-auto mb-[--sy-40px]">
              {/* Main heading with margin bottom and underlined text */}
              <h2>
                The cost for this website will be around <span>$1000</span> and
                will <span>15-20</span> <br /> Months to be fully depolyed
              </h2>
            </div>

            {/* Container for buttons with flexbox layout, width fit, margin auto, and gap between buttons */}
            <div
              className={`${styles.btns} flex w-fit mx-auto gap-[--22px] mb-[--sy-26px]`}
            >
              {/* CustomCheckBoxText component for selecting options */}
              <CustomCheckBoxText
                btnSize="xl"
                inputType="radio"
                name="styleAnswer"
                value={"Book a call with our experts"}
                onClick={()=> document.querySelectorAll("input[type='checkbox']:checked").forEach((e,i)=>(e as HTMLInputElement).checked = false)}
              >
                Book a call with our experts
              </CustomCheckBoxText>
              <CustomCheckBoxText
                btnSize="xl"
                inputType="radio"
                name="styleAnswer"
                value={"Let's make this website!"}
                onClick={()=> document.querySelectorAll("input[type='checkbox']:checked").forEach((e,i)=>(e as HTMLInputElement).checked = false)}
              >
                Let's make this website!
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
                onChange={() => {setSaveProgress((prev) => !prev);
                  document.querySelectorAll("input[type='radio']:checked").forEach((e,i)=>(e as HTMLInputElement).checked = false)
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </NextPrevNav>
  );
};

export default Page;
