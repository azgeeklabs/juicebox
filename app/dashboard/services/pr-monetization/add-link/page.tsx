"use client"
import classNames from "classnames";
import styles from "./addLink.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { addOption } from "@/app/reducers/serviceSlice";
import { RootState } from "@/app/Store/store";
import { useDispatch, useSelector } from "react-redux";

function Page() {
    const router = useRouter()
    const [pastedText, setPastedText] = useState<string>("");
    const all = useSelector((state:RootState)=>state.service)
    const dispatch = useDispatch();
  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setPastedText(text);
    } catch (error) {
      console.error("Failed to read clipboard contents: ", error);
    }
  };
  const nextFunc = () => {
    const storedItems = typeof window !== "undefined" && localStorage.getItem("selectedOption");
    const itemsArray = storedItems ? JSON.parse(storedItems) : [];
   if (pastedText) {
      itemsArray.push({
        name: "add account link",
        ans: `${pastedText}`,
      });
      localStorage.setItem("selectedOption", JSON.stringify(itemsArray));
      dispatch(addOption({
        name: "add account link",
        ans: `${pastedText}`,
      }));
      router.push("/dashboard/services/pr-monetization/monetize-needs");
    }
  };

  return (
<div className={`${styles.addLink} flex flex-col justify-between h-full`}>

{/* Inner container with full height and center alignment */}
<div className="h-full flex justify-center items-center mb-[--sy-50px]">
  
  {/* Inner container with full width and custom styles for the footage editing section */}
  <div className={`${styles.addLinkEdit} w-full`}>
    
    {/* Header section with text centered, auto margins for horizontal centering, and vertical margins */}
    <div className="text-center mx-auto mb-[--sy-32px]">
      
      {/* Main heading with bottom margin */}
      <h2 className="mb-[--sy-24px]">Add a link to account</h2>

      {/* Subheading with text centered */}
      <h4 className="text-center">
        Almost done! Please provide the account link.
      </h4>
    </div>

    {/* Container for input and button with auto margins for horizontal centering and fit width */}
    <div className="mx-auto w-fit">
      
      {/* Subheading for input field */}
      <h3 className="mb-[--sy-16px]">
        Product Link <span>(if exists)</span>
      </h3>
      
      {/* Container for input field and button with flexbox layout, gap, and bottom margin */}
      <div className="flex gap-[1vw] items-center mb-[2.667vh]">
        
        {/* Input field with full height, bottom margin, specific width, background color, outline removal, rounded corners, padding, and placeholder styling */}
        <input
        value={pastedText}
        onChange={(e) => setPastedText(e.target.value)}
          type="text"
          placeholder="Product Name"
          className="h-full mb-[1.778vh] w-[28.477vw] bg-[var(--dark-gray-3)] outline-none rounded-[var(--10px)] px-[1.088vw] py-[--sy-10px] placeholder:text-[#FFFFFFCC]"
        />

        {/* Button with background color, padding, text color, and rounded corners */}
        <button onClick={handlePaste} className="bg-[var(--highlight-yellow)] px-[1.892vw] py-[--sy-10px] text-black rounded-[var(--33px)] self-start">
          Paste Link
        </button>
      </div>
    </div>
  </div>
</div>

{/* Container for navigation links with flexbox layout and center alignment */}
<div className="flex justify-between items-center">
  
  {/* Back link with background color, text color, padding, fit width, rounded corners, and font styling */}
  <Link
    onClick={() => router.back()}
    href={""}
    className="bg-[#484848] text-white px-[2vw] py-[0.889vh] w-fit rounded-[var(--41px)] font-semibold"
  >
    Back
  </Link>
  
  {/* Next link with background color, text color, padding, fit width, rounded corners, and font styling */}
  <Link
    href={"/dashboard/services/pr-monetization/monetize-needs"}
    onClick={(e)=>{e.preventDefault();
      nextFunc()
    }}
    className="bg-[var(--highlight-yellow)] text-black px-[2vw] py-[0.889vh] w-fit rounded-[var(--41px)] font-semibold"
  >
    Next
  </Link>
</div>
</div>

  );
}

export default Page;
