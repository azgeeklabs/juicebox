import classNames from "classnames";
import styles from "./website-technology.module.css";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";
import Image from "next/image";
import CustomCheckBoxText from "@/app/_components/customCheckBox/CustomCheckBoxText";

function Page() {
 

  return (
    <NextPrevNav
      backLink="/dashboard/services/web-design/domain-selection"
      nextLink="/dashboard/services/web-design/brand-selection"
    >
      <div className="flex flex-col gap-[var(--sy-40px)] justify-center items-center h-full mb-[--sy-40px]">
        <div
          className={classNames(
            "flex flex-col items-center gap-[var(--16px)] text-center",
            styles.container
          )}
        >
          <h1 className="text-[--32px] font-semibold">
          How would you like to build your website?
          </h1>
          <p className="text-[--18px] text-[#FFFFFFCC]">
          Choose the technology you want your website to be build with 
          </p>
        </div>
        <div
          className={`${styles.btns} flex w-fit mx-auto gap-[--16px]`}
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
