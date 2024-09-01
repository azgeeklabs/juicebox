import React from "react";
import styles from "./chooseNiche.module.css";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";

const Page = () => {
  return (
    // Custom component for navigation between pages, passing props for the next and back links
    <NextPrevNav
      nextLink="/dashboard/services/content-scripts/duration-of-video"
      backLink="/dashboard/services/content-scripts/product-advertising"
    >
      {/* Main container for the content, styled using Tailwind CSS and custom styles */}
      <div
        className={`${styles.niche} w-full h-full flex justify-center items-center`}
      >
        <div>
          {/* Container for the heading and description */}
          <div className="mb-[--sy-32px]">
            {/* Heading for the section, centered text */}
            <h2 className="mb-[--sy-18px] text-[--32px] font-semibold text-center">
              Do you have a specific niche for your video?
            </h2>
            {/* Description paragraph, centered text */}
            <p className="text-[--18px] text-center text-[#FFFFFFCC]">
              Specifying your niche enables us to tailor our approach for <br />
              maximum impact and engagement.
            </p>
          </div>
          {/* Container for the video niche selection */}
          <div>
            {/* Label for the video niche dropdown */}

            <form className=" mx-auto">
              <label htmlFor="countries" className="block mb-[--sy-16px] font-semibold">
                Video Niche
              </label>
              <select
                id="countries"
                className=" outline-none rounded-lg block w-full p-2.5 bg-[#484848]"
              >
                <option selected className=" text-[#FFFFFF80]"> Niche</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </form>
          </div>
        </div>
      </div>
    </NextPrevNav>
  );
};

export default Page;
