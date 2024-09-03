import classNames from "classnames";
import styles from "./content-website.module.css";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";
import CustomCheckBoxText from "@/app/_components/customCheckBox/CustomCheckBoxText";



function ContentWebsite() {
  return (
    <>
      <NextPrevNav nextLink="/dashboard/services/content-website/rewrite-website">
        <div className="flex flex-col gap-[var(--55px)] justify-center items-center h-full mb-[--sy-50px]">
          <div
            className={classNames(
              "flex flex-col items-center gap-[var(--sy-24px)] text-center",
              styles.container
            )}
          >
            <h2 className="text-[--32px] font-bold">
              Please select you website niche:
            </h2>
            <p className="text-[--18px] w-[60%] text-[#FFFFFFCC]">
              Select the option that best describes your project type. This
              helps us understand the specific requirements for your project.
            </p>
          </div>
          <div
              className={`${styles.btns} flex w-fit mx-auto gap-[1.041vw] mb-[1.5vw]`}
            >
              {/* CustomCheckBoxText component for selecting options */}
              <CustomCheckBoxText
                btnSize="xl"
                inputType="radio"
                name="pressAnswer"
              >
                E-commerce
              </CustomCheckBoxText>
              <CustomCheckBoxText
                btnSize="xl"
                inputType="radio"
                name="pressAnswer"
              >
                Landing Page
              </CustomCheckBoxText>
              <CustomCheckBoxText
                btnSize="xl"
                inputType="radio"
                name="pressAnswer"
              >
                Company site
              </CustomCheckBoxText>
            </div>
        </div>
      </NextPrevNav>
    </>
  );
}

export default ContentWebsite;
