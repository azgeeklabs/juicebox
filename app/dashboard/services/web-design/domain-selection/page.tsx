"use client";
import React, { useEffect, useState } from "react";
import styles from "./domain-selection.module.css";
import CustomCheckBoxText from "@/app/_components/customCheckBox/CustomCheckBoxText";
import Link from "next/link";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/Store/store";
import { useRouter } from "next/navigation";
import { addOption } from "@/app/reducers/serviceSlice";

const Page = () => {
  const [haveWebsite, setHaveWebsite] = useState(false);
  const [doLater, setDoLater] = useState(false);
  const [pastedText, setPastedText] = useState<string>("");
  const [mesg,setMesg] = useState("")
  const all = useSelector((state: RootState) => state.service);
  const route = useRouter();
  const dispatch = useDispatch();

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setPastedText(text);
    } catch (error) {
      console.error("Failed to read clipboard contents: ", error);
    }
  };

  const nextFunc = () => {
    const storedItems = typeof window !== "undefined" && localStorage.getItem("selectedOption");
    const itemsArray = storedItems ? JSON.parse(storedItems) : [];
    if (haveWebsite && !doLater && pastedText) {
      itemsArray.push({
        name: "website domain",
        choice: (
          document.querySelector(
            'input[type="radio"]:checked'
          ) as HTMLInputElement
        ).value,
        ans: `${pastedText}`,
      });
      localStorage.setItem("selectedOption", JSON.stringify(itemsArray));
        dispatch(addOption({
          name: "website domain",
          choice: (
            document.querySelector(
              'input[type="radio"]:checked'
            ) as HTMLInputElement
          ).value,
          ans: `${pastedText}`,
        }))
      route.push("/dashboard/services/web-design/website-technology");
    } else if (
      !haveWebsite &&
      !doLater &&
      document.querySelector('input[type="radio"]:checked') &&
      pastedText &&
      mesg == "Domain available"
    ) {
      itemsArray.push({
        name: "website domain",
        choice: (
          document.querySelector(
            'input[type="radio"]:checked'
          ) as HTMLInputElement
        ).value,
        ans: `${pastedText}`,
      });
      localStorage.setItem("selectedOption", JSON.stringify(itemsArray));
      
        dispatch(addOption({
          name: "website domain",
          choice: (
            document.querySelector(
              'input[type="radio"]:checked'
            ) as HTMLInputElement
          ).value,
          ans: `${pastedText}`,
        }))
      route.push("/dashboard/services/web-design/website-technology");
    } else if (doLater) {
      itemsArray.push({
        name: "website domain",
        choice: (
          document.querySelector(
            'input[type="checkbox"]:checked'
          ) as HTMLInputElement
        ).value,
      });
      localStorage.setItem("selectedOption", JSON.stringify(itemsArray));
     
        dispatch(addOption({
          name: "website domain",
          choice: (
            document.querySelector(
              'input[type="checkbox"]:checked'
            ) as HTMLInputElement
          ).value,
        }))
      route.push("/dashboard/services/web-design/website-technology");
    }
  };
  useEffect(()=>{
    console.log(all);
    
    },[all])

  async function checkDomain() {
    try {
      const data:any = await axios.post('https://api.creativejuicebox.com/api/v1/services/validate-domain',{
        domain:pastedText
      },{
        headers:{
          Authorization:`Bearer ${typeof window !== "undefined" && localStorage.getItem("token")}`
        }
      })
      console.log(data);
      setMesg(data?.data?.message)
      
    } catch (error:any) {
      console.log(error,"//////error//////");
      setMesg(error?.response?.data?.message)
    }
  }

  return (
    <NextPrevNav
      backLink="/dashboard/services/web-design/website-type" nextFunc={()=>nextFunc()}
      nextLink="/dashboard/services/web-design/website-technology"
    >
      {/* // Main container div with relative positioning */}
      <div className="h-full relative w-[50%]">
        {/* Inner container for the video end point section with custom styles */}
        <div
          className={`${styles.domainSelection} w-full h-full flex justify-center items-center`}
        >
          {/* Nested div for content */}
          <div className=" w-full">
            {/* Text center alignment and margin bottom */}
            <div className="text-center mx-auto mb-[--sy-33px]">
              {/* Main heading with margin bottom and underlined text */}
              <h2 className="mb-[--sy-8px]">
                Do you have a domain for your website?
              </h2>
              <p className=" text-[#FFFFFFCC]">Please provide us with a domain for your website</p>
            </div>

            {/* Container for buttons with flexbox layout, width fit, margin auto, and gap between buttons */}
            <div
              className={`${styles.btns} flex mx-auto gap-[--22px] mb-[--sy-45px] w-fit`}
            >
              {/* CustomCheckBoxText component for selecting options */}
              <CustomCheckBoxText
                onClick={() => setHaveWebsite(true)}
                btnSize="xl"
                inputType="radio"
                name="styleAnswer"
                value={"I have a domain"}
              >
                I have a domain
              </CustomCheckBoxText>
              <CustomCheckBoxText
                onClick={() => setHaveWebsite(false)}
                btnSize="xl"
                inputType="radio"
                name="styleAnswer"
                value={"Make one for me"}
              >
                Make one for me
              </CustomCheckBoxText>
            </div>

            {/* Divider */}
            <hr className={styles.divider} />

            <div
              className={`mx-auto w-full`}
            >
              {/* Product Link field with optional span */}
              <h3 className="mb-[--sy-14px] text-[--20px] font-semibold">{haveWebsite ? "Website URL" : "Enter your domain"}</h3>
              <div className="flex gap-[1vw] items-start mb-[1.2vw]">
                {/* Product Link input field */}
                <input
                  value={pastedText}
                  onChange={(e) => setPastedText(e.target.value)}
                  onKeyDown={()=>{if (!haveWebsite) {
                    checkDomain()
                  }}}
                  type="text"
                  placeholder="URL"
                  className="flex-grow h-full mb-[1vw] w-[19.773vw] bg-[var(--dark-gray-3)] outline-none rounded-[var(--71px)] px-[1.088vw] py-[0.5vw] placeholder:text-[#FFFFFFCC]"
                />

                {/* Paste Link button */}
                <button
                onClick={handlePaste}
                  disabled={haveWebsite ? false : true}
                  className="bg-[var(--highlight-yellow)] px-[1.892vw] py-[0.4vw] text-black rounded-[var(--33px)]"
                >
                  {haveWebsite ? "Paste Link" : "checking domain"}
                </button>
              </div>
              <p className=" text-[--10px] text-[#F8F24B] -translate-y-[--sy-30px] ml-[--8px]">{mesg}</p>
              {/* Link component for saving progress */}
              <div
                className={`relative block w-fit mx-auto px-[0.52vw] py-[0.3vw] rounded-[var(--32px)] transition-all duration-200 underline`}
              >
                I’ll do this later
                <input
                  type="checkbox"
                  name="I’ll do this later"
                  value={"I’ll do this later"}
                  className={`absolute opacity-0 inset-0 cursor-pointer`}
                  onChange={() => setDoLater((prev) => !prev)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </NextPrevNav>
  );
};

export default Page;
