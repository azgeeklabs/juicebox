"use client";

import styles from "./app-wrapup.module.css";
import CustomCheckBoxText from "@/app/_components/customCheckBox/CustomCheckBoxText";
import Link from "next/link";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";
import { globalContext } from "@/app/_context/GlobalContext";
import { useContext, useEffect, useState } from "react";
import { addOption } from "@/app/reducers/serviceSlice";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

const Page = () => {
  const { step, setStep } = useContext(globalContext);
  const [saveProgress, setSaveProgress] = useState(false);
  const [serviceData,setServiceData] = useState<any>(null)

  const dispatch = useDispatch();
  const route = useRouter();

  async function makeService() {
    const optionsItems = localStorage.getItem("selectedOption");
    const optionsArray = optionsItems ? JSON.parse(optionsItems) : [];
    console.log(optionsArray,"//////////optionsArray/////////////");
    
    console.log({
      type:"application design flow",
      totalSteps:5,
      options:optionsArray
    })
    
    
    try {
      
      const storedItems = typeof window !== "undefined" && localStorage.getItem("selectedOption");
      const itemsArray = storedItems ? JSON.parse(storedItems) : [];
      if (document.querySelector("input[type='radio']:checked")) {
        
          if ((document.querySelector("input[type='radio']:checked") as HTMLInputElement).value === "Let's build this app!") {
            route.replace(`/dashboard/checkout/${serviceData?.data.data._id}`);
          }
      // router.push("/dashboard/services");
      if ((document.querySelector("input[type='radio']:checked") as HTMLInputElement).value !== "Let's build this app!") {
        route.replace(`/dashboard/services/book-a-call/${serviceData?.data.data._id}`);
      }

      } else if (document.querySelector("input[type='checkbox']:checked")) {
      route.push("/dashboard/services");
      }
      
    } catch (error) {
      console.log(error,"////////////error////////////");
      
    }
  }
  const nextFunc = () => {
      makeService()
  };

  async function initializeService(){
    const optionsItems = typeof window !== "undefined" && localStorage.getItem("selectedOption");
    const optionsArray = optionsItems ? JSON.parse(optionsItems) : [];
    try {
      const data = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/services/initialize-service`,{
        type:"application design flow",
        totalSteps:5,
        options:optionsArray
      },{
        headers:{
          "Content-Type": "multipart/form-data",
            Authorization: `Token ${typeof window !== "undefined" && localStorage.getItem("token")}`,
        }
      })
      console.log(data);
      
      setServiceData(data)
      
    } catch (error) {
      console.log(error,"////////////error////////////");
      
    }
  }
  useEffect(()=>{
    initializeService()
  },[])

  return (
    <NextPrevNav
      nextLink="/dashboard/services" nextFunc={()=>nextFunc()}
      nextText="All Done"
      backLink="/dashboard/services/application-design-service/additional-features"
      nextOnClick={() => setStep(0)}
      backOnClick={() => setStep(step - 1)}
    >
      {/* // Main container div with relative positioning */}
      <div className=" h-full relative">
        {/* Inner container for the video end point section with custom styles */}
        <div
          className={`${styles.videoEndPoint} w-full h-full flex flex-col justify-center items-center`}
        >
          {/* Nested div for content */}
          {/* Text center alignment and margin bottom */}
          <div className="text-center mx-auto mb-[2.271vw]">
            {/* Main heading with margin bottom and underlined text */}
            <h2 className="mb-[1.5vw]">
              Based on your selections, the estimated cost for your project is{" "}
              <span> ${serviceData?.data?.data?.totalPrice} </span> and it will take approximately
              <span> {serviceData?.data?.data?.estimatedDuration} </span> days to complete
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
              name="styleAnswer"
              value={"Book a call"}
              onClick={()=> document.querySelectorAll("input[type='checkbox']:checked").forEach((e,i)=>(e as HTMLInputElement).checked = false)}
            >
              Book a call
            </CustomCheckBoxText>
            <CustomCheckBoxText
              btnSize="xl"
              inputType="radio"
              name="styleAnswer"
              value={"Let's build this app!"}
              onClick={()=> document.querySelectorAll("input[type='checkbox']:checked").forEach((e,i)=>(e as HTMLInputElement).checked = false)}
            >
              Let's build this app!
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
                onChange={() => {setSaveProgress((prev) => !prev)
                  }}
                  onClick={()=>document.querySelectorAll("input[type='radio']:checked").forEach((e,i)=>(e as HTMLInputElement).checked = false)}
                
              />
            </div>
        </div>
      </div>
    </NextPrevNav>
  );
};

export default Page;
