"use client";
import React, { useContext, useEffect, useState } from "react";
import styles from "./estimatedCost.module.css";
import CustomCheckBoxText from "@/app/_components/customCheckBox/CustomCheckBoxText";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";
import { useRouter } from "next/navigation";
import { accountRecoveryContext } from "../_accountRecoveryContext/_accountRecoveryContext";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { addOption } from "@/app/reducers/serviceSlice";
import { RootState } from "@/app/Store/store";
import LoadingScreen from "@/app/_components/loadingScreen/LoadingScreen";

const Page = () => {
  const [saveProgress, setSaveProgress] = useState(false);
  const { isSexual } = useContext(accountRecoveryContext);
  const [serviceData,setServiceData] = useState<any>()
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const file = useSelector((state:RootState) => state.service.file);
console.log(file);
//   useEffect(()=>{
// if (isSexual) {
//   router.push("/dashboard/services/orm-account-recovery/reject-recovery")
// }
//   },[])

  const dispatch = useDispatch();
  const route = useRouter();
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
     
    console.log({
      type:"orm-account-recovery",
      totalSteps:5,
      fileUrl_4:file,
      options:optionsArray
    })
    
    
    
      const storedItems = typeof window !== "undefined" && localStorage.getItem("selectedOption");
      const itemsArray = storedItems ? JSON.parse(storedItems) : [];
      if (document.querySelector("input[type='radio']:checked")) {
        
          if ((document.querySelector("input[type='radio']:checked") as HTMLInputElement).value === "Start Now!") {
            router.replace(`/dashboard/checkout/${serviceData?.data.data._id}`);
          }
      // router.push("/dashboard/services");
      if ((document.querySelector("input[type='radio']:checked") as HTMLInputElement).value !== "Start Now!") {
        router.replace(`/dashboard/services/book-a-call/${serviceData?.data.data._id}`);
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
      
    } 
  }
  const nextFunc = () => {
      makeService()
  };

  async function initializeService() {
    const optionsItems =
      typeof window !== "undefined" && localStorage.getItem("selectedOption");
    const optionsArray = optionsItems ? JSON.parse(optionsItems) : [];
    try {
      const data = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/services/initialize-service`,{
        type:"orm-account-recovery",
        totalSteps:5,
        fileUrl_4: (typeof window !== "undefined" && loadFileFromLocalStorage()),
        options:optionsArray
      },{
        headers:{
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      })
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
    isLoading ? <LoadingScreen /> : <NextPrevNav nextLink="/dashboard/services" nextText="All Done" nextFunc={nextFunc}>
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
              <h2 className="mb-[1.5vw]">
                Based on your selections, the estimated cost for your project
                <hr className="border-0" /> is <span>${serviceData?.data?.data?.totalPrice}</span> and it will
                take approximately <span>{serviceData?.data?.data?.estimatedDuration}</span> days to complete.
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
                onClick={()=> document.querySelectorAll("input[type='checkbox']:checked").forEach((e,i)=>(e as HTMLInputElement).checked = false)}
              >
                Book a call
              </CustomCheckBoxText>
              <CustomCheckBoxText
                btnSize="xl"
                inputType="radio"
                name="estimatedCost"
                value={"Start Now!"}
                onClick={()=> document.querySelectorAll("input[type='checkbox']:checked").forEach((e,i)=>(e as HTMLInputElement).checked = false)}
              >
                Start Now!
              </CustomCheckBoxText>
            </div>

            {/* Link component for saving progress */}
            <button className="cursor-pointer block w-fit mx-auto px-[0.52vw] relative py-[0.533vh] hover:bg-[#484848] !font-medium rounded-[var(--32px)] transition-all duration-200 underline">
              Save my Progress
              <input type="checkbox" className=" inset-0 absolute opacity-0 cursor-pointer" value={"Save my Progress"} onChange={() => {setSaveProgress((prev) => !prev)
                }}
                onClick={()=>document.querySelectorAll("input[type='radio']:checked").forEach((e,i)=>(e as HTMLInputElement).checked = false)}/>
            </button>
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
