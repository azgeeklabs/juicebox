"use client";
import classNames from "classnames";
import styles from "./promoOptions.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import CustomCheckBox from "@/app/_components/customCheckBox/CustomCheckBox";
import CustomCheckBoxText from "@/app/_components/customCheckBox/CustomCheckBoxText";
import { useEffect, useState } from "react";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/Store/store";
import { addFile, addOption } from "@/app/reducers/serviceSlice";

function Page() {
  const router = useRouter();
  const [haveVideo, setHaveVideo] = useState(false);
  const [inputVal, setInputVal] = useState("");
  const [doLater, setDoLater] = useState(false);
  const all = useSelector((state: RootState) => state.service);
  const route = useRouter();
  const [fileSrc, setFileSrc] = useState<any>(null);
  const dispatch = useDispatch();
  const convertFileToBase64 = (file:any) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const handleFileChange = async (event:any) => {
    const file = event.target.files[0];
    setInputVal(file?.name)
    console.log(file);
    

    if (file) {
      // Convert file to Base64 for storing in localStorage
      const base64File = await convertFileToBase64(file);

      // Store file metadata and Base64 string in localStorage
      const fileData = {
        name: file.name,
        type: file.type,
        size: file.size,
        base64: base64File,
      };
      localStorage.setItem('uploadedFile', JSON.stringify(fileData));

      // Store the file in Redux
      dispatch(addFile(file));
    }
  };
  const nextFunc = () => {
    const storedItems = typeof window !== "undefined" && localStorage.getItem("selectedOption");
    const itemsArray = storedItems ? JSON.parse(storedItems) : [];
    if (haveVideo && !doLater && inputVal) {
      itemsArray.push({
        name: "Do you already have a video promo, or would you like us to create one for you?",
        choice: (
          document.querySelector(
            'input[type="radio"]:checked'
          ) as HTMLInputElement
        ).value,
      });
      localStorage.setItem("selectedOption", JSON.stringify(itemsArray));
        dispatch(addOption({
          name: "Do you already have a video promo, or would you like us to create one for you?",
          choice: (
            document.querySelector(
              'input[type="radio"]:checked'
            ) as HTMLInputElement
          ).value,
        }))
      route.push("/dashboard/services/influencer-marketing/influencerEndPoint");
    } else if (
      !haveVideo &&
      !doLater &&
      document.querySelector('input[type="radio"]:checked')
    ) {
      itemsArray.push({
        name: "Do you already have a video promo, or would you like us to create one for you?",
        choice: (
          document.querySelector(
            'input[type="radio"]:checked'
          ) as HTMLInputElement
        ).value,
      });
      localStorage.setItem("selectedOption", JSON.stringify(itemsArray));
      
        dispatch(addOption({
          name: "Do you already have a video promo, or would you like us to create one for you?",
          choice: (
            document.querySelector(
              'input[type="radio"]:checked'
            ) as HTMLInputElement
          ).value,
        }))
      route.push("/dashboard/services/influencer-marketing/influencerEndPoint");
    } else if (doLater) {
      itemsArray.push({
        name: "Do you already have a video promo, or would you like us to create one for you?",
        choice: (
          document.querySelector(
            'input[type="checkbox"]:checked'
          ) as HTMLInputElement
        ).value,
      });
      localStorage.setItem("selectedOption", JSON.stringify(itemsArray));
     
        dispatch(addOption({
          name: "Do you already have a video promo, or would you like us to create one for you?",
          choice: (
            document.querySelector(
              'input[type="checkbox"]:checked'
            ) as HTMLInputElement
          ).value,
        }))
      route.push("/dashboard/services/influencer-marketing/influencerEndPoint");
    }
  };
  useEffect(()=>{
    console.log(all);
    
    },[all])

  return (
    <NextPrevNav
      nextLink="/dashboard/services/influencer-marketing/influencerEndPoint" nextFunc={nextFunc}
      backLink="/dashboard/services/influencer-marketing/campaign-budget"
    >
      <div
        className={`${styles.promoOptions} flex flex-col justify-between h-full`}
      >
        {/* Inner container with full height and center alignment */}
        <div className="h-full flex justify-center items-center">
          {/* Inner container with full width and custom styles for the footage editing section */}
          <div className={` w-full`}>
            {/* Header section with text centered, auto margins for horizontal centering, and vertical margins */}
            <div className="text-center mx-auto mb-[--sy-32px]">
              {/* Main heading with bottom margin */}
              <h2 className="mb-[2.5vh] w-[70%] mx-auto">
                Do you already have a video promo, or would you like us to
                create one for you?
              </h2>

              {/* Subheading with text centered */}
              <h4 className="text-center">
                We can use your existing video or create a custom one to fit
                your campaign's needs.
                <br />
                Let us know how we can assist.
              </h4>
            </div>
            <div
              className={`${styles.btns} flex w-fit mx-auto gap-[1.041vw] mb-[--sy-32px] pb-[--sy-32px]
               border-b-[1px] border-b-[#484848] px-[4.825vw]`}
            >
              {/* CustomCheckBoxText component for selecting "Let's get started" option */}
              <CustomCheckBoxText
                onClick={() => setHaveVideo(true)}
                btnSize="xl"
                inputType="radio"
                name="contactsAnswer"
                value={"I have video promo"}
              >
                I have video promo
              </CustomCheckBoxText>

              {/* CustomCheckBoxText component for selecting "I want to talk to someone first" option */}
              <CustomCheckBoxText
                onClick={() => {setHaveVideo(false)
                  if (document.querySelector('input[type="checkbox"]:checked')) {
                    (document.querySelector('input[type="checkbox"]:checked') as HTMLInputElement).checked = false;
                    setDoLater(false)
                  }
                  setInputVal("")
                  typeof window !== "undefined" && localStorage.removeItem("uploadedFile")
                  dispatch(addFile(null))
                }}
                btnSize="xl"
                inputType="radio"
                name="contactsAnswer"
                value={"Make one for me!"}
              >
                Make one for me!
              </CustomCheckBoxText>
            </div>
            {/* Form container with auto margins for centering */}
            <div
              className={`mx-auto w-fit ${
                haveVideo ? "" : "grayscale-[50%] opacity-50"
              }`}
            >
              {/* Channel URL field */}
              <h3 className="mb-[1.067vh]">Add your video :</h3>
              <div className="flex gap-[1vw] items-start mb-[2.667vh]">
                {/* Channel URL input field */}
                <div className="relative h-full mb-[1.778vh] w-[28.477vw] bg-[var(--dark-gray-3)] outline-none rounded-[var(--71px)] px-[1.088vw] py-[0.889vh] text-[#FFFFFF80] cursor-pointer">
                  {inputVal ? inputVal : "Add website"}
                  <input
                    disabled={haveVideo ? false : true}
                    onChange={handleFileChange}
                    id="upload"
                    type="file"
                    className="absolute opacity-0 inset-0 cursor-pointer"
                  />
                </div>

                {/* Paste Link button */}
                <label htmlFor="upload" className="cursor-pointer font-bold bg-[var(--highlight-yellow)] px-[1.892vw] py-[--sy-10px] text-black rounded-[var(--33px)]">
                Upload
              </label>
              </div>

              {/* Link for users without a YouTube channel */}
              <div
                className={`relative block w-fit mx-auto px-[0.52vw] py-[0.3vw] ${
                  haveVideo && "hover:bg-[#484848]"
                } rounded-[var(--32px)] transition-all duration-200 underline`}
              >
                I’ll do this later
                <input
                  disabled={haveVideo ? false : true}
                  type="checkbox"
                  name="I’ll do this later"
                  value={"I’ll do this later"}
                  className={`absolute opacity-0 inset-0 ${
                    haveVideo ? "cursor-pointer" : ""
                  }`}
                  onChange={() => setDoLater((prev) => !prev)}
                  onClick={()=>{
                    typeof window !== "undefined" && localStorage.removeItem('uploadedFile');
                    dispatch(addFile(null))
                  }}
                />
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
