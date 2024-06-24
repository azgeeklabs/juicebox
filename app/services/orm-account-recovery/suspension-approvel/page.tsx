"use client";
import classNames from "classnames";
import styles from "./suspension-approvel.module.css";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";
import { useContext, useEffect, useState } from "react";
import { accountRecoveryContext } from "../_accountRecoveryContext/_accountRecoveryContext";

function SuspensionApprovel() {
  const { isSexual } = useContext(accountRecoveryContext);

  useEffect(() => {
    console.log(isSexual);
  }, []);
  return (
    <NextPrevNav
      backLink="/services/orm-account-recovery/suspended-account/"
      nextLink={
        isSexual
          ? "/services/orm-account-recovery/reject-recovery"
          : "/services/orm-account-recovery/estimated-cost"
      }
    >
      {/* Inner container with full height and center alignment */}
      <div className="h-full relative flex justify-center items-center">
        {/* Inner container with full width and custom styles for the footage editing section */}
        <div className={`${styles.addLinkEdit} w-full`}>
          {/* Header section with text centered, auto margins for horizontal centering, and vertical margins */}
          <div
            className={classNames(
              "text-center mx-auto mb-[4.556vh]",
              styles.container
            )}
          >
            {/* Main heading with bottom margin */}
            <h2 className="mb-[2.5vh]">Got a Suspension Email?</h2>

            {/* Subheading with text centered */}
            <h4 className="text-center">
              Upload a screenshot of the message you received when your account
              was suspended.
            </h4>
          </div>

          {/* Container for input and button with auto margins for horizontal centering and fit width */}
          <div className="mx-auto w-fit">
            {/* Subheading for input field */}
            <h3 className="mb-[1.067vh]">Upload Screenshot</h3>

            {/* Container for input field and button with flexbox layout, gap, and bottom margin */}
            <div className="flex gap-[1vw] items-start mb-[2.667vh]">
              {/* Input field with full height, bottom margin, specific width, background color, outline removal, rounded corners, padding, and placeholder styling */}
              <div className="relative h-full mb-[1.778vh] bg-[var(--dark-gray-3)] outline-none rounded-[--10px] pl-[--35px] px-[1.088vw] py-[1vh] placeholder:text-[#FFFFFF80]">
                <input
                  type="file"
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <p>email</p>
              </div>

              {/* Button with background color, padding, text color, and rounded corners */}
              <button className="bg-[var(--highlight-yellow)] font-bold px-[1.3vw] py-[0.911vh] text-black rounded-[var(--33px)]">
                Upload
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-[--25px]">
          <span className="flex justify-center items-center gap-[--16px] bg-[#373737] py-[var(--sy-10px)] pl-[var(--20px)] pr-[var(--11px)] rounded-[--15px] text-[#E4E4E4]  max-w-[30vw] border-l-[--3px] border-[var(--highlight-yellow)]">
            <svg
              viewBox="0 0 18 18"
              fill="none"
              className="h-[var(--18px)] w-[var(--18px)]"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.16797 13.167H9.83464V8.16699H8.16797V13.167ZM9.0013 6.50033C9.23741 6.50033 9.43547 6.42033 9.59547 6.26033C9.75547 6.10033 9.83519 5.90255 9.83464 5.66699C9.83408 5.43144 9.75408 5.23366 9.59464 5.07366C9.43519 4.91366 9.23741 4.83366 9.0013 4.83366C8.76519 4.83366 8.56741 4.91366 8.40797 5.07366C8.24853 5.23366 8.16852 5.43144 8.16797 5.66699C8.16741 5.90255 8.24741 6.1006 8.40797 6.26116C8.56852 6.42171 8.7663 6.50144 9.0013 6.50033ZM9.0013 17.3337C7.84853 17.3337 6.76519 17.1148 5.7513 16.677C4.73741 16.2392 3.85547 15.6456 3.10547 14.8962C2.35547 14.1467 1.76186 13.2648 1.32464 12.2503C0.887414 11.2359 0.668525 10.1525 0.66797 9.00033C0.667414 7.8481 0.886303 6.76477 1.32464 5.75033C1.76297 4.73588 2.35658 3.85394 3.10547 3.10449C3.85436 2.35505 4.7363 1.76144 5.7513 1.32366C6.7663 0.885881 7.84964 0.666992 9.0013 0.666992C10.153 0.666992 11.2363 0.885881 12.2513 1.32366C13.2663 1.76144 14.1482 2.35505 14.8971 3.10449C15.646 3.85394 16.2399 4.73588 16.6788 5.75033C17.1177 6.76477 17.3363 7.8481 17.3346 9.00033C17.333 10.1525 17.1141 11.2359 16.678 12.2503C16.2419 13.2648 15.6482 14.1467 14.8971 14.8962C14.146 15.6456 13.2641 16.2395 12.2513 16.6778C11.2385 17.1162 10.1552 17.3348 9.0013 17.3337Z"
                fill="#484848"
                className="fill-[--highlight-yellow]"
              />
            </svg>
            <p className="w-max max-w-full">
              We require proof of hack to ensure that your case is genuine
            </p>
          </span>
        </div>
      </div>
    </NextPrevNav>
  );
}

export default SuspensionApprovel;
