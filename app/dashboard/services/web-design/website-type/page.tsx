import classNames from "classnames";
import styles from "./website-type.module.css";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";
import Image from "next/image";
import CustomCheckBoxText from "@/app/_components/customCheckBox/CustomCheckBoxText";

function Page() {
  return (
    <NextPrevNav
      nextLink="/dashboard/services/web-design/domain-selection"
      backLink="/dashboard/services/web-design"
    >
      <div className="flex flex-col gap-[var(--sy-50px)] justify-center items-center h-full mb-[--sy-40px]">
        <div
          className={classNames(
            "flex flex-col items-center text-center",
            styles.container
          )}
        >
          <h2 className="font-semibold">What is the type of your website?</h2>
          <p className="text-center text-[#FFFFFFCC]">
            Please select the option that best describes your project type.{" "}
            <br /> This helps us understand the specific requirements for your
            project.
          </p>
        </div>
        <div
          className={`${styles.btns} flex w-fit mx-auto gap-[--8px] mb-[1.5vw]`}
        >
          {/* CustomCheckBoxText component for selecting options */}
          <CustomCheckBoxText btnSize="xl" inputType="radio" name="typeAnswer">
            Health Care
          </CustomCheckBoxText>
          <CustomCheckBoxText btnSize="xl" inputType="radio" name="typeAnswer">
            Shipping
          </CustomCheckBoxText>
          <CustomCheckBoxText btnSize="xl" inputType="radio" name="typeAnswer">
            Company
          </CustomCheckBoxText>
          <CustomCheckBoxText btnSize="xl" inputType="radio" name="typeAnswer">
            Other
          </CustomCheckBoxText>
        </div>
      </div>
    </NextPrevNav>
  );
}

export default Page;
