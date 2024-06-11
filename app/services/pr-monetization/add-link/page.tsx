"use client"
import classNames from "classnames";
import styles from "./addLink.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

function page() {
    const router = useRouter()
  return (
<div className={`${styles.addLink} flex flex-col justify-between h-full`}>

{/* Inner container with full height and center alignment */}
<div className="h-full flex justify-center items-center">
  
  {/* Inner container with full width and custom styles for the footage editing section */}
  <div className={`${styles.addLinkEdit} w-full`}>
    
    {/* Header section with text centered, auto margins for horizontal centering, and vertical margins */}
    <div className="text-center mx-auto mb-[3.556vh]">
      
      {/* Main heading with bottom margin */}
      <h2 className="mb-[2.5vh]">Add a link to account</h2>

      {/* Subheading with text centered */}
      <h4 className="text-center">
        Almost done! Please provide the account link.
      </h4>
    </div>

    {/* Container for input and button with auto margins for horizontal centering and fit width */}
    <div className="mx-auto w-fit">
      
      {/* Subheading for input field */}
      <h3 className="mb-[1.067vh]">
        Product Link <span>(if exists)</span>
      </h3>
      
      {/* Container for input field and button with flexbox layout, gap, and bottom margin */}
      <div className="flex gap-[1vw] items-start mb-[2.667vh]">
        
        {/* Input field with full height, bottom margin, specific width, background color, outline removal, rounded corners, padding, and placeholder styling */}
        <input
          type="text"
          placeholder="Product Name"
          className="h-full mb-[1.778vh] w-[28.477vw] bg-[var(--dark-gray-3)] outline-none rounded-[var(--71px)] px-[1.088vw] py-[0.889vh] placeholder:text-[#FFFFFF80]"
        />

        {/* Button with background color, padding, text color, and rounded corners */}
        <button className="bg-[var(--highlight-yellow)] px-[1.892vw] py-[0.711vh] text-black rounded-[var(--33px)]">
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
    className="bg-[#484848] text-white px-[2vw] py-[0.889vh] w-fit rounded-[41.03px] font-semibold"
  >
    Back
  </Link>
  
  {/* Next link with background color, text color, padding, fit width, rounded corners, and font styling */}
  <Link
    href={"/services/pr-monetization/monetize-needs"}
    className="bg-[var(--highlight-yellow)] text-black px-[2vw] py-[0.889vh] w-fit rounded-[41.03px] font-semibold"
  >
    Next
  </Link>
</div>
</div>

  );
}

export default page;
