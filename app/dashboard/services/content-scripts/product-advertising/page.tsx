"use client"
import React, { useState } from "react";
import styles from "./productAdvertising.module.css";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";
import { useDispatch } from "react-redux";
import { addOption } from "@/app/reducers/serviceSlice";
import { useRouter } from "next/navigation";

const Page = () => {
  const [pastedText, setPastedText] = useState<string>("");
  const dispatch = useDispatch();
  const [name,setName] = useState("")
  const [text,setText] = useState("")
  const route = useRouter()

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setPastedText(text);
    } catch (error) {
      console.error("Failed to read clipboard contents: ", error);
    }
  };
  const nextFunc = () => {
    if (name && pastedText && text) {
     const storedItems = typeof window !== "undefined" && localStorage.getItem("selectedOption");
     const itemsArray = storedItems ? JSON.parse(storedItems) : [];
     itemsArray.push({
       name:"product advertising",
       data:{
         fieldOne:name,
         fieldTwo:pastedText,
         fieldThree:text,
       }
     })
     localStorage.setItem("selectedOption", JSON.stringify(itemsArray));
       dispatch(addOption({
         name:"product advertising",
         data:{
           fieldOne:name,
           fieldTwo:pastedText,
           fieldThree:text,
         }
       }))
     route.push("/dashboard/services/content-scripts/choose-niche")
    }
   };
  return (
    // Main outer container div
    <NextPrevNav
      nextLink="/dashboard/services/content-scripts/choose-niche" nextFunc={nextFunc}
      backLink="/dashboard/services/content-scripts/ad-platforms"
    >
      <div className=" w-full h-full flex justify-center items-center">
        {/* Inner container with full width and custom advertising styles */}
        <div className={`${styles.advertising} w-full`}>
          {/* Header section with centered text, auto margins for centering, and bottom margin */}
          <div className="text-center mx-auto mb-[4.037vh]">
            {/* Main heading with bottom margin */}
            <h2 className="mb-[--sy-16px]">
              What product/service are you advertising?
            </h2>

            {/* Subheading with horizontal rule (line) */}
            <h4 className="text-[#FFFFFFCC]">
              Almost done! Please provide the product link, name, and a brief
              description of the <hr className="border-0" /> product or service
              you are advertising.
            </h4>
          </div>

          {/* Form container with auto margins for centering */}
          <div className="mx-auto w-fit">
            {/* Product Name field */}
            <h3 className="mb-[--sy-16px]">Product Name</h3>
            <input
              type="text"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              placeholder="Product Name"
              className="mb-[--sy-32px] w-[19.773vw] bg-[var(--dark-gray-3)] outline-none rounded-[--10px] px-[1.088vw] py-[0.889vh] placeholder:text-[#FFFFFFCC]"
            />

            {/* Product Link field with optional span */}
            <h3 className="mb-[--sy-16px]">
              Product Link <span>(if exists)</span>
            </h3>
            <div className="flex gap-[1vw] items-start mb-[--sy-32px]">
              {/* Product Link input field */}
              <input
                type="text"
                value={pastedText}
                  onChange={(e) => setPastedText(e.target.value)}
                placeholder="Product Link"
                className="h-full mb-[1.778vh] w-[19.773vw] bg-[var(--dark-gray-3)] outline-none rounded-[--10px] px-[1.088vw] py-[0.889vh] placeholder:text-[#FFFFFFCC]"
              />

              {/* Paste Link button */}
              <button className="bg-[var(--highlight-yellow)] px-[1.892vw] py-[0.711vh] text-black rounded-[var(--33px)]" onClick={handlePaste}>
                Paste Link
              </button>
            </div>

            {/* Product Description field */}
            <h3 className="mb-[--sy-16px]">Product Description</h3>
            <textarea
            value={text}
            onChange={(e)=>setText(e.target.value)}
              rows={5}
              className="outline-none w-full rounded-[--10px] bg-[var(--dark-gray-3)] px-[1.088vw] py-[0.889vh] resize-none"
              placeholder="Describe the product you need..."
            ></textarea>
          </div>
        </div>
      </div>
    </NextPrevNav>
  );
};

export default Page;
