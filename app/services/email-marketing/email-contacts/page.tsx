"use client";
import classNames from "classnames";
import styles from "./emailContacts.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import CustomCheckBox from "@/app/_components/customCheckBox/CustomCheckBox";
import CustomCheckBoxText from "@/app/_components/customCheckBox/CustomCheckBoxText";
import { useState } from "react";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";

function page() {
  const router = useRouter();
  const [num,setNum] = useState<number>(0)
  const [contactList,setContactList] = useState<boolean>(true)
  return (
    <NextPrevNav
      nextLink="/services/email-marketing/unknown"
      backLink="/services/email-marketing/landing-page-link"
    >
    <div
      className={`${styles.emailContacts} flex flex-col justify-between h-full`}
    >
      {/* Inner container with full height and center alignment */}
      <div className="h-full flex justify-center items-center">
        {/* Inner container with full width and custom styles for the footage editing section */}
        <div className={` w-full`}>
          {/* Header section with text centered, auto margins for horizontal centering, and vertical margins */}
          <div className="text-center mx-auto mb-[4.197271773347325vh]">
            {/* Main heading with bottom margin */}
            <h2 className="mb-[2.5vh]">
              Do you already have the emails you would like to <br />
              include in your campaign?
            </h2>

            {/* Subheading with text centered */}
            <h4 className="text-center">
              Our talented scriptwriters can create a script for your video in
              no time,
              <br />
              or you can provide your own!
            </h4>
          </div>
          <div
            className={`${styles.btns} flex w-fit mx-auto gap-[1.041vw] mb-[4.826862539349423vh] pb-[4.826862539349423vh] border-b-[1px] border-b-[#484848]`}
          >
            {/* CustomCheckBoxText component for selecting "Let's get started" option */}
            <CustomCheckBoxText
            onClick={()=>setContactList(true)}
              btnSize="xl"
              inputType="radio"
              name="contactsAnswer"
            >
              I have my contact list
            </CustomCheckBoxText>

            {/* CustomCheckBoxText component for selecting "I want to talk to someone first" option */}
            <CustomCheckBoxText
            onClick={()=>setContactList(false)}
              btnSize="xl"
              inputType="radio"
              name="contactsAnswer"
            >
              Provide email leads
            </CustomCheckBoxText>
          </div>
          <div className=" mx-auto w-fit">
            <ul className=" flex h-fit gap-4 items-center mb-[2.6232948583420774vh]">
              <li className={` text-[--16px] ${contactList ? "text-white font-bold" : "text-[#484848] font-normal"}`}>Number of Contacts</li>
              <hr className=" rotate-90 w-8 bg-white" />
              <li className={` text-[--16px] ${!contactList ? "text-white font-bold" : "text-[#484848] font-normal"}`}>Number of Leads</li>
            </ul>
            <div className=" w-full relative">
              <input
                type="number"
                value={num}
                onChange={(e : React.ChangeEvent<HTMLInputElement>)=>{setNum(Number(e?.target?.value))}}
                className="h-full w-full bg-[#484848] rounded-[8px] py-[--sy-10px] px-[0.946vw] text-center outline-none"
              />
              <svg
              onClick={() => {
                if (num > 0) {
                  setNum((prev) => (prev - 1));
                }
              }}
              className=" absolute left-[1vw] top-1/2 -translate-y-1/2 "
                width="18"
                height="11"
                viewBox="0 0 18 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.2794 0.402344H2.77698C1.2616 0.402344 0.412095 1.94 1.34836 2.98821L7.59955 9.9872C8.32597 10.8009 9.72835 10.8009 10.4568 9.9872L16.708 2.98618C17.6442 1.94 16.7947 0.402344 15.2794 0.402344Z"
                  fill="#F8F24B"
                />
              </svg>
              <svg
              onClick={() => {
                setNum((prev)=> (Number(prev) + 1))
              }}
              className="absolute right-[1vw] top-1/2 -translate-y-1/2 "
                width="18"
                height="11"
                viewBox="0 0 18 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.72064 10.5977L15.223 10.5977C16.7384 10.5977 17.5879 9.06 16.6516 8.01179L10.4004 1.0128C9.67403 0.199111 8.27165 0.199111 7.54322 1.0128L1.29203 8.01383C0.355759 9.06 1.20526 10.5977 2.72064 10.5977Z"
                  fill="#F8F24B"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Container for navigation links with flexbox layout and center alignment */}
      
    </div>
    </NextPrevNav>
  );
}

export default page;
