import classNames from "classnames";
import styles from "./seo-campaign.module.css";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";
import Image from "next/image";
import CustomCheckBoxText from "@/app/_components/customCheckBox/CustomCheckBoxText";

function Page() {
  return (
    <NextPrevNav nextLink="/dashboard/services/seo-campaign/advertising-details">
      <div className="flex flex-col gap-[var(--sy-48px)] justify-center items-center h-full mb-[--sy-40px]">
        <div
          className={classNames(
            "flex flex-col items-center text-center",
            styles.container
          )}
        >
          <h2 className="font-semibold">
            What is the product you are trying to rank?
          </h2>
          <p className=" text-[#FFFFFFCC]">
            Please select the option that best describes your project type. <br /> This
            helps us understand the specific requirements for your project.
          </p>
        </div>
        <div
              className={`${styles.btns} flex w-fit mx-auto gap-[--12px] mb-[1.5vw]`}
            >
              {/* CustomCheckBoxText component for selecting options */}
              <CustomCheckBoxText
                btnSize="xl"
                inputType="radio"
                name="pressAnswer"
              >
                Product
              </CustomCheckBoxText>
              <CustomCheckBoxText
                btnSize="xl"
                inputType="radio"
                name="pressAnswer"
              >
                Service
              </CustomCheckBoxText>
              <CustomCheckBoxText
                btnSize="xl"
                inputType="radio"
                name="pressAnswer"
              >
                Content
              </CustomCheckBoxText>
            </div>
      </div>
    </NextPrevNav>
  );
}

export default Page;
