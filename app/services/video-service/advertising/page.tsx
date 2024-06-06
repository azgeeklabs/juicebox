import React from "react";
import styles from "./advertising.module.css";

const page = () => {
  return (
    // Main outer container div
<div>
  
  {/* Inner container with full width and custom advertising styles */}
  <div className={`${styles.advertising} w-full`}>
    
    {/* Header section with centered text, auto margins for centering, and bottom margin */}
    <div className="text-center mx-auto mb-[2.271vw]">
      
      {/* Main heading with bottom margin */}
      <h2 className="mb-[1.5vw]">
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
      <h3 className="mb-[0.6vw]">Product Name</h3>
      <input
        type="text"
        placeholder="Product Name"
        className="mb-[1.2vw] w-[19.773vw] bg-[var(--dark-gray-3)] outline-none rounded-[71px] px-[1.088vw] py-[0.5vw] placeholder:text-[#FFFFFF80]"
      />
      
      {/* Product Link field with optional span */}
      <h3 className="mb-[0.6vw]">
        Product Link <span>(if exists)</span>
      </h3>
      <div className="flex gap-[1vw] items-start mb-[1.2vw]">
        
        {/* Product Link input field */}
        <input
          type="text"
          placeholder="Product Name"
          className="h-full mb-[1vw] w-[19.773vw] bg-[var(--dark-gray-3)] outline-none rounded-[71px] px-[1.088vw] py-[0.5vw] placeholder:text-[#FFFFFF80]"
        />
        
        {/* Paste Link button */}
        <button className="bg-[#F8F24B] px-[1.892vw] py-[0.4vw] text-black rounded-[33px]">
          Paste Link
        </button>
      </div>
      
      {/* Product Description field */}
      <h3 className="mb-[0.6vw]">Product Description</h3>
      <textarea
        rows={5}
        className="outline-none w-full rounded-[12px] bg-[var(--dark-gray-3)] px-[1.088vw] py-[0.5vw] resize-none"
        placeholder="Describe the product you need..."
      ></textarea>
    </div>
  </div>
</div>

  );
};

export default page;
