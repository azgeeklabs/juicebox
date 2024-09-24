"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./footageEdit.module.css";
import CustomCheckBoxText from "@/app/_components/customCheckBox/CustomCheckBoxText";
import Link from "next/link";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/Store/store";
import { useRouter } from "next/navigation";
import { addOption, incrementTotalSteps, selectType } from "@/app/reducers/serviceSlice";

const Page = () => {
  const [inputVal, setInputVal] = useState("");
  const [doLater, setDoLater] = useState(false);
  const uploadRef = useRef(null)
  const all = useSelector((state: RootState) => state.service.options);
  const route = useRouter();
  const dispatch = useDispatch();

  const [fileSrc, setFileSrc] = useState<any>(null);

  

  const handleFileChange = (event:any) => {
    const file = event.target.files[0];
    setInputVal(file.name)
    
    if (file) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        
        
        setFileSrc(fileReader.result);
      };
    }
  };

  const nextFunc = () => {
    dispatch(incrementTotalSteps());
    dispatch(selectType("video"));
    const storedItems = typeof window !== "undefined" && localStorage.getItem("selectedOption");
    const itemsArray = storedItems ? JSON.parse(storedItems) : [];
    if (doLater) {
      itemsArray.push({
        name: "footage edit",
        choice: (
          document.querySelector(
            'input[type="checkbox"]:checked'
          ) as HTMLInputElement
        ).value,
      });
      localStorage.setItem("selectedOption", JSON.stringify(itemsArray));
      dispatch(addOption({
        name: "footage edit",
        choice: (
          document.querySelector(
            'input[type="checkbox"]:checked'
          ) as HTMLInputElement
        ).value,
      }))
    route.push("/dashboard/services/video-service/addToVideo");
    } else if (inputVal && !doLater) {
      itemsArray.push({
        name: "footage edit",
        file: `${inputVal}`,
      });
      localStorage.setItem("selectedOption", JSON.stringify(itemsArray));
      dispatch(addOption({
        name: "footage edit",
        file: `${inputVal}`,
      }))
    route.push("/dashboard/services/video-service/addToVideo");
    }
    
  };
  useEffect(()=>{
    console.log(all);
    
    },[all])
  return (
    // Main container div with full height, flexbox layout, centered content horizontally and vertically
    <NextPrevNav
      nextLink="/dashboard/services/video-service/addToVideo" nextFunc={()=>nextFunc()}
      backLink="/dashboard/services/video-service/channel-style"
    >
      <div className="h-[75%] flex justify-center">
        {/* Inner container with full width and custom styles for footage editing section */}
        <div className={`${styles.footageEdit} w-full `}>
          {/* Header section with text centered, auto margins for horizontal centering, and vertical margins */}
          <div className="text-center mx-auto mb-[--sy-48px] mt-14">
            {/* Main heading with bottom margin */}
            <h2 className="mb-[--sy-24px]">
              Do you have footage that you want us to edit?
            </h2>

            {/* Subheading with text centered and embedded horizontal rule */}
            <h4 className="text-center">
              You're welcome to upload your own footage to include in your
              video, or we can
              <hr className="border-0" />
              enhance your project using selections from our extensive footage
              library!
            </h4>
          </div>

          {/* Container for upload input and button with auto margins for horizontal centering and fit width */}
          <div className="mx-auto w-fit">
            {/* Upload input and button container with flexbox layout, gap, and bottom margin */}
            <div className="flex gap-[1vw] items-start mb-[--sy-24px]">
              {/* Input field for uploading footage with full height, bottom margin, specific width, background color, outline removal, rounded corners, padding, and placeholder styling */}
              <div className="relative h-full mb-[1.778vh] w-[28.477vw] bg-[var(--dark-gray-3)] outline-none rounded-[var(--71px)] px-[1.088vw] py-[0.889vh] text-[#FFFFFFCC] cursor-pointer">
                {inputVal ? inputVal : "Upload Footage"}
                <input
                ref={uploadRef}
                  type="file"
                  id="upload"
                  className="pointer-events-none absolute opacity-0 inset-0 cursor-pointer"
                  onChange={(e)=>{handleFileChange(e)}}
                  
                />
              </div>

              {/* Button for uploading footage with background color, padding, text color, and rounded corners */}
              <label onClick={()=>console.log(uploadRef.current)
              } htmlFor="upload" className="cursor-pointer font-bold bg-[var(--highlight-yellow)] px-[1.892vw] py-[--sy-10px] text-black rounded-[var(--33px)]">
                Upload Footage
              </label>
            </div>

            {/* Link for deferring the upload with underline, block display, fit width, auto margins for horizontal centering, padding, hover background color, rounded corners, and transition effect */}
            <div className="relative underline block w-fit mx-auto px-[0.52vw] py-[0.533vh] hover:bg-[#484848] rounded-[var(--32px)] transition-all duration-200">
              I’ll do this later
              <input
                type="checkbox"
                name="I’ll do this later"
                className="absolute opacity-0 inset-0 cursor-pointer"
                value={"I’ll do this later"}
                onChange={() => setDoLater((prev) => !prev)}
              />
            </div>
          </div>
        </div>
      </div>
    </NextPrevNav>
  );
};

export default Page;
