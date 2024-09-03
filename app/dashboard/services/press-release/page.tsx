"use client"
import NextPrevNav from '@/app/_components/NextPrevNav/NextPrevNav'
import { globalContext } from "@/app/_context/GlobalContext";
import classNames from 'classnames'
import React, { useContext } from 'react'
import styles from "./pressRelease.module.css"
import CustomCheckBoxText from '@/app/_components/customCheckBox/CustomCheckBoxText';

const Page = () => {
    const { step, setStep } = useContext(globalContext);



  return (
    <>
      <NextPrevNav nextLink="/dashboard/services/press-release/release-publishing" nextOnClick={() => setStep(step + 1)}>
        <div className="flex flex-col gap-[var(--55px)] justify-center items-center h-full mb-[--sy-50px]">
          <div
            className={classNames(
              "flex flex-col items-center gap-[var(--18px)] text-center",
              styles.container
            )}
          >
            <h2 className="text-[--32px] font-bold">
            What is your press release niche?
            </h2>
            <p className="text-[--18px] text-[#FFFFFFCC]">
            Select the niche that best describes the focus of your press release.
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
                Music
              </CustomCheckBoxText>
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
                Tech
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
  )
}

export default Page