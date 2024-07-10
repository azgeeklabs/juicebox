"use client";
import classNames from "classnames";
import styles from "./orm-negative-press-removal.module.css";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";
import { useRef, useState } from "react";

function ORMNegativePressRemoval() {
  const [links, setLinks] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleAddLink = () => {
    const link = inputRef.current?.value;
    if (link) {
      setLinks([...links, link]);
      inputRef.current!.value = "";
    }
  };

  return (
    <NextPrevNav nextLink="/dashboard/services/orm-negative-press-removal/removal-reason">
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
                  placeholder="URL"
                  ref={inputRef}
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
              <button
                className="bg-[var(--highlight-yellow)] font-extrabold px-[1.892vw] py-[0.711vh] text-black rounded-[var(--33px)]"
                onClick={handleAddLink}
              >
                Add
              </button>
            </div>

            <h3 className="mb-[1.067vh]">Added Links</h3>
            <div className="h-[clamp(10px,calc(28.03vh+0.1rem),1000px)] overflow-y-auto w-[calc(100%-var(--111px))] rounded-[--10px]">
              <div className="rounded-[--10px] bg-[--dark-gray-3]">
                <ul className="flex-col overflow-hidden">
                  {links.map((link, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-between px-[1.088vw] py-[1vh] border-b border-[#FFFFFF80] group hover:bg-[#353535] hover:border-transparent transition-colors"
                    >
                      <span className="ml-[--24px] text-[#B1B1B1] group-hover:text-white transition-color">
                        {link}
                      </span>
                      <button
                        className="focus:outline-none opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={() => {
                          setLinks(links.filter((_, i) => i !== index));
                        }}
                      >
                        <svg
                          className="w-[--28px] h-[--27px]"
                          viewBox="0 0 28 27"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.87909 17.6208L18.1207 9.37921M9.87909 9.37921L18.1207 17.6208"
                            stroke="white"
                            stroke-width="2.81671"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </button>
                    </li>
                  ))}
                </ul>

                {links.length === 0 && (
                  <div className="flex items-center justify-center h-full">
                    <span className="text-[#FFFFFF80] text-[--20px] p-[--15px]">
                      No links added
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </NextPrevNav>
  );
}

export default ORMNegativePressRemoval;
