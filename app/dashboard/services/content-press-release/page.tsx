"use client";
import classNames from "classnames";
import styles from "./contentBlog.module.css";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";
import { useContext } from "react";
import { globalContext } from "@/app/_context/GlobalContext";
import CustomCheckBoxText from "@/app/_components/customCheckBox/CustomCheckBoxText";



function Page() {
  const { step, setStep } = useContext(globalContext);

  return (
    <>
      <NextPrevNav
        nextLink="/dashboard/services/content-press-release/release-content"
        nextOnClick={() => setStep(step + 1)}
      >
        <div className={`flex flex-col gap-[var(--55px)] justify-center mb-[--sy-40px] items-center h-full ${styles.pressRelease}`}>
          <div
            className={classNames(
              "flex flex-col items-center gap-[var(--16px)] text-center",
              styles.container
            )}
          >
            <h2 className="text-[--30px] font-bold w-[73%] mx-auto mb-[--sy-8px]">
            Could you please specify the niche or focus area of your press releases?
            </h2>
            <p className="text-[--18px] text-[#FFFFFFCC]">
            Please select the option that best describes your project type. 
            <br />
            This helps us understand the specific requirements for your project.
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
                Finance
              </CustomCheckBoxText>
              <CustomCheckBoxText
                btnSize="xl"
                inputType="radio"
                name="pressAnswer"
              >
                Music
              </CustomCheckBoxText>
              <CustomCheckBoxText
                btnSize="xl"
                inputType="radio"
                name="pressAnswer"
              >
                Fashion
              </CustomCheckBoxText>
              <CustomCheckBoxText
                btnSize="xl"
                inputType="radio"
                name="pressAnswer"
              >
                Other
              </CustomCheckBoxText>
            </div>
        </div>
      </NextPrevNav>
    </>
  );
}

export default Page;
