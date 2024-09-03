import NextPrevNav from '@/app/_components/NextPrevNav/NextPrevNav'
import classNames from 'classnames'
import React from 'react'
import styles from "./productService.module.css"
import CustomCheckBoxText from '@/app/_components/customCheckBox/CustomCheckBoxText'

const Page = () => {


  return (
    <NextPrevNav nextLink="/dashboard/services/pr-creation/wikipedia-info" backLink='/dashboard/services/pr-creation/wikipedia-copy'>
        <div className="flex flex-col gap-[var(--32px)] justify-center items-center h-full mb-[--sy-50px]">
          <div
            className={classNames(
              "flex flex-col items-center gap-[var(--8px)] text-center",
              styles.container
            )}
          >
            <h2 className="text-[--32px] font-bold">
            Can you tell us more about your product/service?
            </h2>
            <p className="text-[--18px] w-[60%] text-[#FFFFFFCC]">
            Providing additional details will enable us to better understand how it aligns with our needs and how we can best utilize it to achieve our goals.
            </p>
          </div>
          <div
              className={`${styles.btns} flex w-fit mx-auto gap-[1.041vw] mb-[1.5vw]`}
            >
              {/* CustomCheckBoxText component for selecting options */}
              <CustomCheckBoxText
                btnSize="xl"
                inputType="radio"
                name="styleAnswer"
              >
                Healthcare
              </CustomCheckBoxText>
              <CustomCheckBoxText
                btnSize="xl"
                inputType="radio"
                name="styleAnswer"
              >
                Shipping
              </CustomCheckBoxText>
              <CustomCheckBoxText
                btnSize="xl"
                inputType="radio"
                name="styleAnswer"
              >
                Company
              </CustomCheckBoxText>
              <CustomCheckBoxText
                btnSize="xl"
                inputType="radio"
                name="styleAnswer"
              >
                Other
              </CustomCheckBoxText>
            </div>
        </div>
      </NextPrevNav>
  )
}

export default Page