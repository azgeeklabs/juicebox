"use client";
import classNames from "classnames";
import styles from "./orm-negative-press-removal.module.css";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";

function ORMNegativePressRemoval() {
  return (
    <NextPrevNav nextLink="/services/orm-negative-press-removal/removal-reason">
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
            <h2 className="mb-[2.5vh]">What links would you like to remove?</h2>

            {/* Subheading with text centered */}
            <h4 className="text-center">
              Please provide the specific links you want removed. This
              information will help us address your request promptly and
              effectively.
            </h4>
          </div>

          {/* Container for input and button with auto margins for horizontal centering and fit width */}
          <div className="mx-auto w-fit">
            {/* Subheading for input field */}
            <h3 className="mb-[1.067vh]">Links</h3>

            {/* Container for input field and button with flexbox layout, gap, and bottom margin */}
            <div className="flex gap-[1vw] items-start mb-[2.667vh]">
              {/* Input field with full height, bottom margin, specific width, background color, outline removal, rounded corners, padding, and placeholder styling */}
              <div className="relative mb-[1.778vh]">
                <input
                  type="text"
                  placeholder="URL
                "
                  className="h-full  w-[28.477vw] bg-[var(--dark-gray-3)] outline-none rounded-[--10px] pl-[--35px] px-[1.088vw] py-[1vh] placeholder:text-[#FFFFFF80]"
                />
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-[50%] transform -translate-y-1/2 right-[1.088vw]"
                >
                  <path
                    d="M14.5835 8.33398H4.16683C3.01787 8.33398 2.0835 9.26836 2.0835 10.4173V20.834C2.0835 21.9829 3.01787 22.9173 4.16683 22.9173H14.5835C15.7325 22.9173 16.6668 21.9829 16.6668 20.834V10.4173C16.6668 9.26836 15.7325 8.33398 14.5835 8.33398Z"
                    fill="#353535"
                  />
                  <path
                    d="M20.8335 2.08398H10.4168C9.8643 2.08398 9.33439 2.30348 8.94369 2.69418C8.55299 3.08488 8.3335 3.61478 8.3335 4.16732V6.25065H16.6668C17.2194 6.25065 17.7493 6.47014 18.14 6.86085C18.5307 7.25155 18.7502 7.78145 18.7502 8.33398V16.6673H20.8335C21.386 16.6673 21.9159 16.4478 22.3066 16.0571C22.6973 15.6664 22.9168 15.1365 22.9168 14.584V4.16732C22.9168 3.61478 22.6973 3.08488 22.3066 2.69418C21.9159 2.30348 21.386 2.08398 20.8335 2.08398Z"
                    fill="#353535"
                  />
                </svg>
              </div>

              {/* Button with background color, padding, text color, and rounded corners */}
              <button className="bg-[var(--highlight-yellow)] font-extrabold px-[1.892vw] py-[0.711vh] text-black rounded-[var(--33px)]">
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </NextPrevNav>
  );
}

export default ORMNegativePressRemoval;
