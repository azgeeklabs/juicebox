"use client"
import React, { useEffect, useState } from "react";
import styles from "./advertising.module.css";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/Store/store";
import { addOption, incrementTotalSteps, selectType } from "@/app/reducers/serviceSlice";
import { useRouter } from "next/navigation";

const Page = () => {
  const [pastedText, setPastedText] = useState<string>("");
  const dispatch = useDispatch();
  const all = useSelector((state: RootState) => state.service.options);
  const [name,setName] = useState("")
  const [link,setLink] = useState("")
  const [text,setText] = useState("")
  const route = useRouter()
  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setPastedText(text);
      setText(text)
    } catch (error) {
      console.error("Failed to read clipboard contents: ", error);
    }
  };

  
  const nextFunc = () => {
   if (name && link && text) {
    console.log("//////////////////////");

    dispatch(incrementTotalSteps());
    dispatch(selectType("video"));
    const storedItems = typeof window !== "undefined" && localStorage.getItem("selectedOption");
    const itemsArray = storedItems ? JSON.parse(storedItems) : [];
    itemsArray.push({
      name:"What are you advertising?",
      data:{
        fieldOne:name,
        fieldTwo:link,
        fieldThree:text,
      }
    })
    localStorage.setItem("selectedOption", JSON.stringify(itemsArray));
      dispatch(addOption({
        name:"What are you advertising?",
        data:{
          fieldOne:name,
          fieldTwo:link,
          fieldThree:text,
        }
      }))
    route.push("/dashboard/services/video-service/youtube-channel")
   }
  };
  
  useEffect(()=>{
    console.log(all);
    
    },[all])
  return (
    // Main outer container div
    <NextPrevNav
      nextLink="/dashboard/services/video-service/youtube-channel" nextFunc={()=>nextFunc()}
      backLink="/dashboard/services/video-service/footage-selection"
    >
      <div className=" w-full h-full flex justify-center items-center">
        {/* Inner container with full width and custom advertising styles */}
        <div className={`${styles.advertising} w-full`}>
          {/* Header section with centered text, auto margins for centering, and bottom margin */}
          <div className="text-center mx-auto mb-[--48px]">
            {/* Main heading with bottom margin */}
            <h2 className="mb-[--sy-16px]">
            What are you advertising?
            </h2>

            {/* Subheading with horizontal rule (line) */}
            <h4>
              Almost done! Please provide the product link, name, and a brief
              description of the <hr className="border-0" /> product or service
              you are advertising.
            </h4>
          </div>

          {/* Form container with auto margins for centering */}
          <div className="mx-auto w-fit">
            {/* Product Name field */}
            <h3 className="mb-[--16px]">Product Name</h3>
            <input
              type="text"
              placeholder="Product Name"
              className="Name mb-[--32px] w-[19.773vw] bg-[var(--dark-gray-3)] outline-none rounded-[var(--71px)] px-[1.088vw] py-[0.889vh] placeholder:text-[#FFFFFFCC]"
              onChange={(e)=>setName(e.target.value)}
            />

            {/* Product Link field with optional span */}
            <h3 className="mb-[--16px]">
              Product Link <span>(if exists)</span>
            </h3>
            <div className="flex gap-[1vw] items-start mb-[--32px]">
              {/* Product Link input field */}
              <input
                type="text"
                value={pastedText}
                onChange={(e) => {setPastedText(e.target.value)
                  setLink(e.target.value)
                }}
                placeholder="Product Link"
                className="Link h-full w-[19.773vw] bg-[var(--dark-gray-3)] outline-none rounded-[var(--71px)] px-[1.088vw] py-[0.889vh] placeholder:text-[#FFFFFFCC]"
              />

              {/* Paste Link button */}
              <button onClick={handlePaste} className="bg-[var(--highlight-yellow)] px-[1.892vw] py-[0.711vh] text-black rounded-[var(--33px)]">
                Paste Link
              </button>
            </div>

            {/* Product Description field */}
            <h3 className="mb-[--16px]">Product Description</h3>
            <textarea
              rows={5}
              className="outline-none w-full rounded-[var(--12px)] bg-[var(--dark-gray-3)] px-[1.088vw] py-[0.889vh] resize-none"
              placeholder="Describe the product you need..."
              onChange={(e)=>setText(e.target.value)}
            ></textarea>
          </div>
        </div>
      </div>
    </NextPrevNav>
  );
};

export default Page;
