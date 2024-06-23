import classNames from "classnames";
import styles from "./emailMarketing.module.css";
import Link from "next/link";
import Image from "next/image";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";
import CustomCheckBoxText from "@/app/_components/customCheckBox/CustomCheckBoxText";

function page() {
  return (
    <NextPrevNav
      nextLink="/services/email-marketing/email-campaign"
      backLink="/services"
    >
      <div
        className={`${styles.monetization} flex flex-col justify-between h-full`}
      >
        {/* Inner container with flexbox layout for column direction, gap between elements, center alignment, and full height */}
        <div className="flex flex-col gap-[var(--64px)] items-center h-full justify-center">
          {/* Content container with additional class names for styling */}
          <div
            className={classNames(
              "flex flex-col items-center gap-[var(--16px)] text-center",
              styles.container
            )}
          >
            {/* Heading with bold font */}
            <h2 className="font-bold">What type of campaign you would like?</h2>

            {/* Paragraph with specified width for better readability */}
            <p className="w-[60%]">
              Please choose whether you want to develop a regular app or a
              gamified app. This helps us tailor our recommendations to your
              project.
            </p>
          </div>
          {/* Container for buttons with flexbox layout, width fit, margin auto, and gap between buttons */}
          <div
            className={`${styles.btns} flex w-fit mx-auto gap-[1.041vw] mb-[1.5vw]`}
          >
            {/* CustomCheckBoxText component for selecting options */}
            <CustomCheckBoxText
              btnSize="xl"
              inputType="radio"
              name="campaignType"
            >
              Sales
            </CustomCheckBoxText>
            <CustomCheckBoxText
              btnSize="xl"
              inputType="radio"
              name="campaignType"
            >
              Informative
            </CustomCheckBoxText>
          </div>
        </div>
      </div>
    </NextPrevNav>
  );
}

export default page;
