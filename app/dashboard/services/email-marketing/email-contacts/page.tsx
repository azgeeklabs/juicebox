"use client";
import classNames from "classnames";
import styles from "./emailContacts.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import CustomCheckBox from "@/app/_components/customCheckBox/CustomCheckBox";
import CustomCheckBoxText from "@/app/_components/customCheckBox/CustomCheckBoxText";
import { useEffect, useState } from "react";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/Store/store";
import { addOption } from "@/app/reducers/serviceSlice";

function Page() {
  const router = useRouter();
  const [num1, setNum1] = useState<number>(0);
  const [num2, setNum2] = useState<number>(0);
  const [contactList, setContactList] = useState<boolean>(true);
  const [showDropdown, setShowDropdown] = useState(false);
  const [shownValue, setShownValue] = useState(0);

  const all = useSelector((state:RootState)=>state.service)
  const dispatch = useDispatch();
  const nextFunc = () => {
    const selected = document.querySelector(
      "input[type='radio']:checked"
    ) as HTMLInputElement;
    const storedItems = localStorage.getItem("selectedOption");
    const itemsArray = storedItems ? JSON.parse(storedItems) : [];
    
    if ((document.querySelector("input[type='radio']:checked") as HTMLInputElement)?.value == "I have a list") {
      itemsArray.push({
        name: "email contacts",
        choice:(document.querySelector("input[type='radio']:checked") as HTMLInputElement).value,
        ans: String(shownValue),
      });
      localStorage.setItem("selectedOption", JSON.stringify(itemsArray));
        dispatch(addOption({
          name: "email contacts",
          choice: (
            document.querySelector(
              "input[type='radio']:checked"
            ) as HTMLInputElement
          ).value,
          ans:String(shownValue)
        }))
      router.push("/dashboard/services/email-marketing/campaign-implementation");
    } else if ((document.querySelector("input[type='radio']:checked") as HTMLInputElement)?.value == "Provide email leads") {
      itemsArray.push({
        name: "email contacts",
        choice: (
          document.querySelector(
            "input[type='radio']:checked"
          ) as HTMLInputElement
        ).value,
        ans:String(shownValue)
      });
      localStorage.setItem("selectedOption", JSON.stringify(itemsArray));
        dispatch(addOption({
          name: "email contacts",
          choice: (
            document.querySelector(
              "input[type='radio']:checked"
            ) as HTMLInputElement
          ).value,
        ans:String(shownValue)
        }))
      router.push("/dashboard/services/email-marketing/campaign-implementation");
    }
  };
  useEffect(()=>{
console.log(all);

  },[all])

  return (
    <NextPrevNav
      nextLink="/dashboard/services/email-marketing/campaign-implementation" nextFunc={nextFunc}
      backLink="/dashboard/services/email-marketing/landing-page-link"
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
              <h4 className="text-center w-[70%] mx-auto">
                Do you already have emails you'd like to include in your
                campaign, or would you like us to provide you with leads?
              </h4>
            </div>
            <div className=" w-fit mx-auto">
              <div
                className={`${styles.btns} flex w-fit mx-auto gap-[1.041vw] mb-[4.826862539349423vh] pb-[4.826862539349423vh] border-b-[1px] border-b-[#484848] `}
              >
                {/* CustomCheckBoxText component for selecting "Let's get started" option */}
                <CustomCheckBoxText
                  onClick={() => setContactList(true)}
                  btnSize="xl"
                  inputType="radio"
                  name="contactsAnswer"
                  checked = {contactList}
                  value={"I have a list"}
                >
                  I have a list
                </CustomCheckBoxText>

                {/* CustomCheckBoxText component for selecting "I want to talk to someone first" option */}
                <CustomCheckBoxText
                  onClick={() => setContactList(false)}
                  btnSize="xl"
                  inputType="radio"
                  name="contactsAnswer"
                  checked = {!contactList}
                  value={"Provide email leads"}

                >
                  Provide email leads
                </CustomCheckBoxText>
              </div>
              <div className=" mr-auto">
                <ul className=" flex h-fit gap-4 items-center justify-start mb-[2.6232948583420774vh] w-full ">
                  <li
                  onClick={() => setContactList(true)}
                    className={` text-[--16px] cursor-pointer ${
                      contactList
                        ? "text-white font-bold"
                        : "text-[#484848] font-normal"
                    }`}
                  >
                    Emails
                  </li>
                  <hr className=" rotate-90 w-8 bg-white" />
                  <li
                  onClick={() => setContactList(false)}
                    className={` text-[--16px] cursor-pointer ${
                      !contactList
                        ? "text-white font-bold"
                        : "text-[#484848] font-normal"
                    }`}
                  >
                    Provide Leads
                  </li>
                </ul>
                {contactList ? <div className=" w-full bg-[#353535] flex justify-center items-center rounded-[8px] py-[--sy-13px]">
                  {" "}
                  I have{" "}
                  <div
                    className={`${styles.customSelect} relative w-[--60px] mx-[--14px]`}
                  >
                    <button onClick={(e)=>{
                      e.preventDefault()
                      setShowDropdown(!showDropdown)
                    }} className=" flex items-center relative w-full rounded-[--7px] py-[--sy-10px] px-[--12px] bg-[#484848] text-[#FFFFFF] font-normal">
                      {shownValue}
                      <svg
                        className=" right-[--10px] top-1/2 -translate-y-1/2 absolute w-[--10px]"
                        viewBox="0 0 16 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.0707 0.550781H1.93204C0.460743 0.550781 -0.364044 2.04371 0.544985 3.06143L6.61432 9.8568C7.3196 10.6468 8.68119 10.6468 9.38843 9.8568L15.4578 3.05945C16.3668 2.04371 15.542 0.550781 14.0707 0.550781Z"
                          fill="white"
                        />
                      </svg>
                    </button>
                    <ul className={`${showDropdown ? "block" : "hidden"} w-full absolute top-full translate-y-2 bg-[#484848] rounded-[--6px] overflow-x-hidden overflow-y-auto max-h-[--sy-165px] text-[#FFFFFF]`}>
                      <li
                        className="py-[--sy-8px] px-[--12px] hover:cursor-pointer hover:bg-[#353535]"
                        onClick={(e) => {
                          const target = e.target as HTMLInputElement;
                          setShownValue(Number(target.innerText));
                          setShowDropdown(false);
                        }}
                      >
                        1
                      </li>
                      <li
                        className="py-[--sy-8px] px-[--12px] hover:cursor-pointer hover:bg-[#353535]"
                        onClick={(e) => {
                          const target = e.target as HTMLInputElement;
                          setShownValue(Number(target.innerText));
                          setShowDropdown(false);
                        }}
                      >
                        2
                      </li>
                      <li
                        className="py-[--sy-8px] px-[--12px] hover:cursor-pointer hover:bg-[#353535]"
                        onClick={(e) => {
                          const target = e.target as HTMLInputElement;
                          setShownValue(Number(target.innerText));
                          setShowDropdown(false);
                        }}
                      >
                        3
                      </li>
                      <li
                        className="py-[--sy-8px] px-[--12px] hover:cursor-pointer hover:bg-[#353535]"
                        onClick={(e) => {
                          const target = e.target as HTMLInputElement;
                          setShownValue(Number(target.innerText));
                          setShowDropdown(false);
                        }}
                      >
                        4
                      </li>
                    </ul>
                  </div>
                  contacts to email
                </div> : <div className=" w-full bg-[#353535] flex justify-center items-center rounded-[8px] py-[--sy-13px]">
                  {" "}
                  I have{" "}
                  <div
                    className={`${styles.customSelect} relative w-[--60px] mx-[--14px]`}
                  >
                    <button onClick={(e)=>{
                      e.preventDefault()
                      setShowDropdown(!showDropdown)
                    }} className=" flex items-center relative w-full rounded-[--7px] py-[--sy-10px] px-[--12px] bg-[#484848] text-[#FFFFFF] font-normal">
                      {shownValue}
                      <svg
                        className=" right-[--10px] top-1/2 -translate-y-1/2 absolute w-[--10px]"
                        viewBox="0 0 16 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.0707 0.550781H1.93204C0.460743 0.550781 -0.364044 2.04371 0.544985 3.06143L6.61432 9.8568C7.3196 10.6468 8.68119 10.6468 9.38843 9.8568L15.4578 3.05945C16.3668 2.04371 15.542 0.550781 14.0707 0.550781Z"
                          fill="white"
                        />
                      </svg>
                    </button>
                    <ul className={`${showDropdown ? "block" : "hidden"} w-full absolute top-full translate-y-2 bg-[#484848] rounded-[--6px] overflow-x-hidden overflow-y-auto max-h-[--sy-165px] text-[#FFFFFF]`}>
                      <li
                        className="py-[--sy-8px] px-[--12px] hover:cursor-pointer hover:bg-[#353535]"
                        onClick={(e) => {
                          const target = e.target as HTMLInputElement;
                          setShownValue(Number(target.innerText));
                          setShowDropdown(false);
                        }}
                      >
                        1
                      </li>
                      <li
                        className="py-[--sy-8px] px-[--12px] hover:cursor-pointer hover:bg-[#353535]"
                        onClick={(e) => {
                          const target = e.target as HTMLInputElement;
                          setShownValue(Number(target.innerText));
                          setShowDropdown(false);
                        }}
                      >
                        2
                      </li>
                      <li
                        className="py-[--sy-8px] px-[--12px] hover:cursor-pointer hover:bg-[#353535]"
                        onClick={(e) => {
                          const target = e.target as HTMLInputElement;
                          setShownValue(Number(target.innerText));
                          setShowDropdown(false);
                        }}
                      >
                        3
                      </li>
                      <li
                        className="py-[--sy-8px] px-[--12px] hover:cursor-pointer hover:bg-[#353535]"
                        onClick={(e) => {
                          const target = e.target as HTMLInputElement;
                          setShownValue(Number(target.innerText));
                          setShowDropdown(false);
                        }}
                      >
                        4
                      </li>
                    </ul>
                  </div>
                  leads to email
                </div>}
              </div>
            </div>
          </div>
        </div>

        {/* Container for navigation links with flexbox layout and center alignment */}
      </div>
    </NextPrevNav>
  );
}

export default Page;
