"use client";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";
import React, { useState } from "react";
import styles from "./durationOfVideo.module.css";
import CustomTypeRange from "@/app/_components/customTypeRange/CustomTypeRange";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { addOption } from "@/app/reducers/serviceSlice";

const Page = () => {
  const [wordVal, setWordVal] = useState(0)
  const dispatch = useDispatch()
  const [duration,setDuration] = useState(0)
  const route = useRouter()
  function nextFunc() {
    const storedItems = typeof window !== "undefined" && localStorage.getItem("selectedOption");
     const itemsArray = storedItems ? JSON.parse(storedItems) : [];
     if (duration > 0) {
      itemsArray.push({
        name: "video duration",
        ans: `${duration} min`,
      });
      localStorage.setItem("selectedOption", JSON.stringify(itemsArray));
      
        dispatch(addOption({
          name: "video duration",
          ans: `${duration} min`,
        }))
     
      route.push("/dashboard/services/content-scripts/estimated-cost");
     }
    
  }
  return (
    // Custom component for navigation between pages, passing props for the next and back links
<NextPrevNav nextLink="/dashboard/services/content-scripts/estimated-cost" nextFunc={nextFunc} backLink="/dashboard/services/content-scripts/choose-niche" >
    {/* Main container for the content, styled using Tailwind CSS and custom styles */}
    <div className={`${styles.durationVideo} w-full h-full flex justify-center items-center mb-[--sy-30px]`}>
        <div className='w-full'>
            {/* Container for the heading and description */}
            <div className="mb-[--sy-48px]">
                {/* Heading for the section, centered text */}
                <h2 className="mb-[--sy-10px] text-[--32px] font-semibold text-center">
                How long would you like the video to be?
                </h2>
                {/* Description paragraph, centered text */}
                <p className="text-[--18px] text-center text-[#FFFFFFCC]">
                Slide to your required video duration. If you're not sure, that's okay! We can help <br /> determine the ideal length for your project.
                </p>
            </div>
            {/* Container for the custom input component, centered with margin */}
            <div className='w-[60%] mx-auto mb-[--sy-22px]'>
                {/* Custom range input component, passing props for word and max value */}
                <CustomTypeRange word='min' max={60} setWordVal={setWordVal} setNum={setDuration}/>
            </div>
            {/* Display of the current word count, styled with background, text color, and padding */}
            <span className='block w-fit mx-auto bg-[#484848] text-white rounded-[--10px] px-[--20px] py-[--sy-10px]'>
                Word Count: {wordVal}
            </span>
        </div>
      </div>
    </NextPrevNav>
  );
};

export default Page;
