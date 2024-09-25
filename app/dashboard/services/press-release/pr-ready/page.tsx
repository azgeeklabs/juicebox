"use client";
import React, { useEffect, useState } from "react";
import styles from "./prReady.module.css";
import CustomCheckBoxText from "@/app/_components/customCheckBox/CustomCheckBoxText";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/Store/store";
import { useRouter } from "next/navigation";
import { addFile, addOption } from "@/app/reducers/serviceSlice";

const Page = () => {
  const [havePR, setHavePR] = useState(false);
  const [doLater, setDoLater] = useState(false);
  const [inputVal, setInputVal] = useState("");
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
    const storedItems =
      typeof window !== "undefined" && localStorage.getItem("selectedOption");
    const itemsArray = storedItems ? JSON.parse(storedItems) : [];
    if (havePR && !doLater && inputVal) {
      itemsArray.push({
        name: "Do you have a press release ready, or would you like us to write one for you?",
        choice: (
          document.querySelector(
            'input[type="radio"]:checked'
          ) as HTMLInputElement
        ).value,
        file: `${inputVal}`,
      });
      localStorage.setItem("selectedOption", JSON.stringify(itemsArray));
      dispatch(
        addOption({
          name: "Do you have a press release ready, or would you like us to write one for you?",
          choice: (
            document.querySelector(
              'input[type="radio"]:checked'
            ) as HTMLInputElement
          ).value,
          file: `${inputVal}`,
        })
      );
      route.push("/dashboard/services/press-release/about");
    } else if (
      !havePR &&
      !doLater &&
      document.querySelector('input[type="radio"]:checked')
    ) {
      itemsArray.push({
        name: "Do you have a press release ready, or would you like us to write one for you?",
        choice: (
          document.querySelector(
            'input[type="radio"]:checked'
          ) as HTMLInputElement
        ).value,
      });
      localStorage.setItem("selectedOption", JSON.stringify(itemsArray));

      dispatch(
        addOption({
          name: "Do you have a press release ready, or would you like us to write one for you?",
          choice: (
            document.querySelector(
              'input[type="radio"]:checked'
            ) as HTMLInputElement
          ).value,
        })
      );
      route.push("/dashboard/services/press-release/about");
    } else if (doLater) {
      itemsArray.push({
        name: "Do you have a press release ready, or would you like us to write one for you?",
        choice: (
          document.querySelector(
            'input[type="checkbox"]:checked'
          ) as HTMLInputElement
        ).value,
      });
      localStorage.setItem("selectedOption", JSON.stringify(itemsArray));

      dispatch(
        addOption({
          name: "Do you have a press release ready, or would you like us to write one for you?",
          choice: (
            document.querySelector(
              'input[type="checkbox"]:checked'
            ) as HTMLInputElement
          ).value,
        })
      );
      route.push("/dashboard/services/press-release/about");
    }
  };
  useEffect(() => {
    console.log(all);
  }, [all]);

  return (
    // Main container div
    <NextPrevNav
      nextLink="/dashboard/services/press-release/about"
      backLink="/dashboard/services/press-release/release-publishing" nextFunc={nextFunc}
    >
      <div className="h-full relative w-[90%]">
        {/* Inner container for the video end point section with custom styles */}
        <div
          className={`${styles.createWebsite} w-full h-full flex justify-center items-center`}
        >
          {/* Nested div for content */}
          <div className=" w-full">
            {/* Text center alignment and margin bottom */}
            <div className="text-center mx-auto mb-[--sy-32px]">
              {/* Main heading with margin bottom and underlined text */}
              <h2 className="mb-[--sy-24px] w-[100%] mx-auto text-[--32px] font-semibold">
                Do you have a press release ready, or would you <br /> like us
                to write one for you?
              </h2>
              <p className=" mx-auto text-[#FFFFFFCC] text-[--18px] text-center">
                Choose whether you want to upload your own press release or have
                us <br /> write one for you.
              </p>
            </div>

            {/* Container for buttons with flexbox layout, width fit, margin auto, and gap between buttons */}
            <div
              className={`${styles.btns} flex w-fit mx-auto gap-[--8px] mb-[--sy-60px]`}
            >
              {/* CustomCheckBoxText component for selecting options */}
              <CustomCheckBoxText
                onClick={() => setHavePR(true)}
                btnSize="xl"
                inputType="radio"
                name="creationAnswer"
                value={"I have my own"}
              >
                I have my own
              </CustomCheckBoxText>
              <CustomCheckBoxText
                onClick={() => {
                  setHavePR(false);
                  if (
                    document.querySelector('input[type="checkbox"]:checked')
                  ) {
                    (
                      document.querySelector(
                        'input[type="checkbox"]:checked'
                      ) as HTMLInputElement
                    ).checked = false;
                    setDoLater(false);
                  }
                  setInputVal("");
                }}
                btnSize="xl"
                inputType="radio"
                name="creationAnswer"
                value={"Make one for me"}
              >
                Make one for me
              </CustomCheckBoxText>
            </div>

            <div
              className={`mx-auto w-[65%] ${
                havePR ? "" : "grayscale-[50%] opacity-50"
              }`}
            >
              {/* Product Link field with optional span */}
              <h3 className="mb-[--sy-14px] font-semibold text-[--20px]">
                Upload Press Release
              </h3>
              <div className="flex gap-[1vw] items-start mb-[2.667vh]">
                {/* Channel URL input field */}
                <div className="relative h-full w-full bg-[var(--dark-gray-3)] outline-none rounded-[var(--71px)] px-[1.088vw] py-[0.889vh] text-[#FFFFFF80] cursor-pointer">
                  {inputVal ? inputVal : "Upload Press Release"}
                  <input
                    disabled={havePR ? false : true}
                    onChange={handleFileChange}
                    id="upload"
                    type="file"
                    className="absolute opacity-0 inset-0 cursor-pointer"
                  />
                </div>

                {/* Paste Link button */}
                <label htmlFor="upload" className="cursor-pointer flex justify-center items-center font-bold bg-[var(--highlight-yellow)] px-[1.892vw] self-stretch text-black align-middle rounded-[var(--33px)]">
                Upload
              </label>
              </div>
              {/* Link component for saving progress */}
              <div
                className={`relative block w-fit mx-auto px-[0.52vw] py-[0.3vw] ${
                  havePR && "hover:bg-[#484848]"
                } rounded-[var(--32px)] transition-all duration-200 underline`}
              >
                I’ll do this later
                <input
                  disabled={havePR ? false : true}
                  type="checkbox"
                  name="I’ll do this later"
                  value={"I’ll do this later"}
                  className={`absolute opacity-0 inset-0 ${
                    havePR ? "cursor-pointer" : ""
                  }`}
                  onChange={() => setDoLater((prev) => !prev)}
                  onClick={()=>{
                    dispatch(addFile(null))
                    localStorage.removeItem('uploadedFile');
                  }}
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
