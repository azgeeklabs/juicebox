"use client";
import classNames from "classnames";
import styles from "./suspended-account.module.css";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";

function SuspendedAccount() {
  return (
    <NextPrevNav
      backLink="/services/orm-account-recovery/suspended-date"
      nextLink="/services/orm-account-recovery/suspension-approvel"
    >
      {/* Inner container with full height and center alignment */}
      <div className="h-full flex justify-center items-center">
        {/* Inner container with full width and custom styles for the footage editing section */}
        <div className={`${styles.addLinkEdit} w-full`}>
          {/* Header section with text centered, auto margins for horizontal centering, and vertical margins */}
          <div
            className={classNames(
              "text-center mx-auto mb-[3.556vh]",
              styles.container
            )}
          >
            {/* Main heading with bottom margin */}
            <h2 className="mb-[2.5vh]">
              Please provide the email associated with the suspended account
            </h2>

            {/* Subheading with text centered */}
            <h4 className="text-center">
              Drop the email of your suspended account, and we’ll work our magic
              to get you back online!
            </h4>
          </div>

          {/* Container for input and button with auto margins for horizontal centering and fit width */}
          <div className="mx-auto w-fit">
            {/* Subheading for input field */}
            <h3 className="mb-[1.067vh]">Email</h3>

            {/* Container for input field and button with flexbox layout, gap, and bottom margin */}
            <div className="flex gap-[1vw] items-start mb-[2.667vh]">
              {/* Input field with full height, bottom margin, specific width, background color, outline removal, rounded corners, padding, and placeholder styling */}
              <input
                type="text"
                placeholder="email"
                className="h-full mb-[1.778vh] w-[28.477vw] bg-[var(--dark-gray-3)] outline-none rounded-[--10px] pl-[--35px] px-[1.088vw] py-[1vh] placeholder:text-[#FFFFFF80]"
              />

              {/* Button with background color, padding, text color, and rounded corners */}
              <button className="bg-[var(--highlight-yellow)] font-bold px-[1.892vw] py-[0.711vh] text-black rounded-[var(--33px)]">
                Paste Email
              </button>
            </div>
          </div>
        </div>
      </div>
    </NextPrevNav>
  );
}

export default SuspendedAccount;
