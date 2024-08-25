import classNames from "classnames";
import styles from "./pr.module.css";
import Link from "next/link";
import Image from "next/image";
import CustomCheckBoxText from "@/app/_components/customCheckBox/CustomCheckBoxText";

function Page() {
  return (
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
          <h2 className="font-bold">
            What kind of application do you want to monetize?
          </h2>

          {/* Paragraph with specified width for better readability */}
          <p className="w-[60%]">
            Please choose whether you want to monetize a regular app or a
            gamified app. This helps us tailor our recommendations to your
            project.
          </p>
        </div>

        {/* Cards container with flexbox layout and gap between cards */}
        <div className={classNames("flex gap-[--16px]", styles.cards)}>
          {/* Game card with flexbox layout for column direction, gap between elements, and group styling */}
          <CustomCheckBoxText
                btnSize="xl"
                inputType="radio"
                name="styleAnswer"
              >
                Facebook Page
              </CustomCheckBoxText>

              {/* CustomCheckBoxText component for selecting "I want to talk to someone first" option */}
              <CustomCheckBoxText
                btnSize="xl"
                inputType="radio"
                name="styleAnswer"
              >
                YouTube Channel
              </CustomCheckBoxText>
              <CustomCheckBoxText
                btnSize="xl"
                inputType="radio"
                name="styleAnswer"
              >
                Twitter Account
              </CustomCheckBoxText>
        </div>
      </div>

      {/* Navigation link for proceeding to the next step, styled with background color, text color, padding, rounded corners, and margin-left auto for right alignment */}
      <Link
        href={"/dashboard/services/pr-monetization/add-link"}
        className="bg-[var(--highlight-yellow)] text-black px-[2vw] py-[0.5vw] w-fit rounded-[var(--41px)] font-semibold ml-auto"
      >
        Next
      </Link>
    </div>
  );
}

export default Page;
