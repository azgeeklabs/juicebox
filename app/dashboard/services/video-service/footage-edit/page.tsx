import React from "react";
import styles from "./footageEdit.module.css";
import CustomCheckBoxText from "@/app/_components/customCheckBox/CustomCheckBoxText";
import Link from "next/link";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";

const page = () => {
  return (
    // Main container div with full height, flexbox layout, centered content horizontally and vertically
    <NextPrevNav nextLink="/dashboard/services/video-service/addToVideo" backLink="/dashboard/services/video-service/channel-style">
      <div className="h-full flex justify-center items-center">
      {/* Inner container with full width and custom styles for footage editing section */}
      <div className={`${styles.footageEdit} w-full `}>
        {/* Header section with text centered, auto margins for horizontal centering, and vertical margins */}
        <div className="text-center mx-auto mb-[5.333vh] mt-14">
          {/* Main heading with bottom margin */}
          <h2 className="mb-[2.667vh]">
            Do you have footage that you want us to edit?
          </h2>

          {/* Subheading with text centered and embedded horizontal rule */}
          <h4 className="text-center">
            You're welcome to upload your own footage to include in your video,
            or we can
            <hr className="border-0" />
            enhance your project using selections from our extensive footage
            library!
          </h4>
        </div>

        {/* Container for upload input and button with auto margins for horizontal centering and fit width */}
        <div className="mx-auto w-fit">
          {/* Upload input and button container with flexbox layout, gap, and bottom margin */}
          <div className="flex gap-[1vw] items-start mb-[2.667vh]">
            {/* Input field for uploading footage with full height, bottom margin, specific width, background color, outline removal, rounded corners, padding, and placeholder styling */}
            <input
              type="text"
              placeholder="Upload Footage"
              className="h-full mb-[1.778vh] w-[28.477vw] bg-[var(--dark-gray-3)] outline-none rounded-[var(--71px)] px-[1.088vw] py-[0.889vh] placeholder:text-[#FFFFFF80]"
            />

            {/* Button for uploading footage with background color, padding, text color, and rounded corners */}
            <button className="bg-[var(--highlight-yellow)] px-[1.892vw] py-[0.711vh] text-black rounded-[var(--33px)]">
              Upload Footage
            </button>
          </div>

          {/* Link for deferring the upload with underline, block display, fit width, auto margins for horizontal centering, padding, hover background color, rounded corners, and transition effect */}
          <Link
            href={""}
            className="underline block w-fit mx-auto px-[0.52vw] py-[0.533vh] hover:bg-[#484848] rounded-[var(--32px)] transition-all duration-200"
          >
            I’ll do this later
          </Link>
        </div>
      </div>
    </div>
    </NextPrevNav>
  );
};

export default page;
