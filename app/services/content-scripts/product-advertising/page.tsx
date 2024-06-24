import React from "react";
import styles from "./productAdvertising.module.css";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";

const page = () => {
  return (
    // Main outer container div
<NextPrevNav nextLink="/services/content-scripts/choose-niche" backLink="/services/content-scripts/ad-platforms">
<div className=" w-full h-full flex justify-center items-center">
  
  {/* Inner container with full width and custom advertising styles */}
  <div className={`${styles.advertising} w-full`}>
    
    {/* Header section with centered text, auto margins for centering, and bottom margin */}
    <div className="text-center mx-auto mb-[4.037vh]">
      
      {/* Main heading with bottom margin */}
      <h2 className="mb-[2.667vh]">
        What product/service are you advertising?
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
      <h3 className="mb-[1.067vh]">Product Name</h3>
      <input
        type="text"
        placeholder="Product Name"
        className="mb-[2.133vh] w-[19.773vw] bg-[var(--dark-gray-3)] outline-none rounded-[--10px] px-[1.088vw] py-[0.889vh] placeholder:text-[#FFFFFF80]"
      />
      
      {/* Product Link field with optional span */}
      <h3 className="mb-[1.067vh]">
        Product Link <span>(if exists)</span>
      </h3>
      <div className="flex gap-[1vw] items-start mb-[2.133vh]">
        
        {/* Product Link input field */}
        <input
          type="text"
          placeholder="Product Name"
          className="h-full mb-[1.778vh] w-[19.773vw] bg-[var(--dark-gray-3)] outline-none rounded-[--10px] px-[1.088vw] py-[0.889vh] placeholder:text-[#FFFFFF80]"
        />
        
        {/* Paste Link button */}
        <button className="bg-[var(--highlight-yellow)] px-[1.892vw] py-[0.711vh] text-black rounded-[var(--33px)]">
          Paste Link
        </button>
      </div>
      
      {/* Product Description field */}
      <h3 className="mb-[0.6vw]">Product Description</h3>
      <textarea
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

export default page;
