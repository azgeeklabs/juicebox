import React from "react";
import styles from "./web-design-endpoint.module.css";
import CustomCheckBoxText from "@/app/_components/customCheckBox/CustomCheckBoxText";
import Link from "next/link";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";

const page = () => {
  return (
    <NextPrevNav
      backLink="/services/web-design/host-selection"
      nextLink="/services/web-design/"
      nextText="All Done"
    >
      {/* Main container div with relative positioning */}
      <div className="h-full relative">
        {/* Inner container for the video end point section with custom styles */}
        <div
          className={`${styles.seoCampaignEndPoint} w-full h-full flex justify-center items-center`}
        >
          {/* Nested div for content */}
          <div>
            {/* Text center alignment and margin bottom */}
            <div className="text-center mx-auto mb-[2.271vw]">
              {/* Main heading with margin bottom and underlined text */}
              <h2 className="mb-[1.5vw]">
                The cost for this website will be around <span>$1000</span> and
                will <span>15-20</span> Months to be fully depolyed
              </h2>
            </div>

            {/* Container for buttons with flexbox layout, width fit, margin auto, and gap between buttons */}
            <div
              className={`${styles.btns} flex w-fit mx-auto gap-[1.041vw] mb-[1.5vw]`}
            >
              {/* CustomCheckBoxText component for selecting options */}
              <CustomCheckBoxText
                btnSize="xl"
                inputType="radio"
                name="styleAnswer"
              >
                Book a call with our experts
              </CustomCheckBoxText>
              <CustomCheckBoxText
                btnSize="xl"
                inputType="radio"
                name="styleAnswer"
              >
                Let's make this website!
              </CustomCheckBoxText>
            </div>

            {/* Link component for saving progress */}
            <Link
              href={""}
              className="block w-fit mx-auto px-[0.52vw] py-[0.3vw] hover:bg-[#484848] rounded-[32px] transition-all duration-200 underline"
            >
              Save my progress for later
            </Link>
          </div>
        </div>
      </div>
    </NextPrevNav>
  );
};

export default page;
