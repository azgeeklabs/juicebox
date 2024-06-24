import React from "react";
import styles from "./chooseNiche.module.css";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";

const page = () => {
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
          <div className="mb-[--sy-64px]">
            {/* Heading for the section, centered text */}
            <h2 className="mb-[--sy-10px] text-[--32px] font-semibold text-center">
              Do you have a specific niche for your video?
            </h2>
            {/* Description paragraph, centered text */}
            <p className="text-[--18px] text-center">
              Specifying your niche enables us to tailor our approach for <br />
              maximum impact and engagement.
            </p>
          </div>
          {/* Container for the video niche selection */}
          <div>
            {/* Label for the video niche dropdown */}
            <label className="mb-[--sy-16px] inline-block font-semibold">
              Video Niche
            </label>
            {/* Dropdown for selecting a video niche, styled with background color */}
            <select className="select w-full bg-[#484848] block">
              <option disabled selected>
                Pick your favorite Niche
              </option>
              {/* Options for selecting a specific niche */}
              <option>Niche</option>
              <option>Niche</option>
              <option>Niche</option>
              <option>Niche</option>
              <option>Niche</option>
            </select>
          </div>
        </div>
      </div>
    </NextPrevNav>
  );
};

export default page;
