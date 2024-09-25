"use client";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";
import CustomCheckBoxText from "@/app/_components/customCheckBox/CustomCheckBoxText";
import React, { useState } from "react";
import styles from "./wikipediaCopy.module.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/Store/store";
import { useRouter } from "next/navigation";
import { addFile, addOption } from "@/app/reducers/serviceSlice";

const Page = () => {
  const route = useRouter();
  const [file, setFile] = useState<any>(null);
  const [haveCopy, setHaveCopy] = useState(false);
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
    const fileUrl = event.target.files[0];
    setFile(fileUrl?.name)
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
      dispatch(addFile(fileUrl));
    }
  };

  const nextFunc = () => {
    const storedItems =
      typeof window !== "undefined" && localStorage.getItem("selectedOption");
    const itemsArray = storedItems ? JSON.parse(storedItems) : [];
    if (haveCopy && file) {
      itemsArray.push({
        name: "wikipedia copy",
        choice: (
          document.querySelector(
            'input[type="radio"]:checked'
          ) as HTMLInputElement
        ).value,
      });
      localStorage.setItem("selectedOption", JSON.stringify(itemsArray));
      dispatch(
        addOption({
          name: "wikipedia copy",
          choice: (
            document.querySelector(
              'input[type="radio"]:checked'
            ) as HTMLInputElement
          ).value,
        })
      );
      route.push("/dashboard/services/pr-creation/product-service");
    } else if (
      !haveCopy &&
      document.querySelector('input[type="radio"]:checked')
    ) {
      itemsArray.push({
        name: "wikipedia copy",
        choice: (
          document.querySelector(
            'input[type="radio"]:checked'
          ) as HTMLInputElement
        ).value,
      });
      localStorage.setItem("selectedOption", JSON.stringify(itemsArray));

      dispatch(
        addOption({
          name: "wikipedia copy",
          choice: (
            document.querySelector(
              'input[type="radio"]:checked'
            ) as HTMLInputElement
          ).value,
        })
      );
      route.push("/dashboard/services/pr-creation/product-service");
    }
  };
  return (
    <>
      <NextPrevNav
        nextLink="/dashboard/services/pr-creation/product-service" nextFunc={nextFunc}
        backLink="/dashboard/services/pr-creation/"
      >
        <div
          className={`${styles.wikipediaCopy} w-full h-full flex justify-center items-center`}
        >
          <div className=" w-full">
            <h2 className="mb-[--sy-16px] text-[--32px] font-semibold w-[40%] text-center mx-auto">
              Do you have a Wikipedia page copy available or you want it to be
              written for you?
            </h2>
            <p className=" text-[--18px] w-[28%] mx-auto text-center text-[#FFFFFFCC] mb-[--sy-32px]">
              Our writers can incorporate specific sources as content references
              for your blog.
            </p>
            <div className=" flex justify-center items-center mb-[--sy-32px] gap-[--22px]">
              <CustomCheckBoxText
                onClick={() => setHaveCopy(true)}
                btnSize="xl"
                inputType="radio"
                name="copyAnswer"
                value={"I have a copy"}
              >
                I have a copy
              </CustomCheckBoxText>
              <CustomCheckBoxText
                onClick={() => {setHaveCopy(false)
                  dispatch(addFile(null))
                  typeof window !== "undefined" && localStorage.removeItem("uploadedFile")
                }}
                btnSize="xl"
                inputType="radio"
                name="copyAnswer"
                value={"Write one for me"}
              >
                Write one for me
              </CustomCheckBoxText>
            </div>
            <div
              className={`${
                haveCopy ? "" : "opacity-20 grayscale-[60%]"
              } pt-[--sy-32px] border-t border-t-[#484848] w-[60%] mx-auto`}
            >
              <div className="bg-[#353535] px-[--25px] py-[--sy-25px] rounded-[--12px]">
                <label className="font-semibold block text-[--19px] mb-[--sy-20px]">
                  {" "}
                  Upload File
                </label>
                <div className="border-dashed border-2 border-gray-500 rounded-lg p-6 w-full flex justify-center items-center mb-[--sy-20px]">
                  <div className="text-center">
                    <label htmlFor="file-upload" className="cursor-pointer">
                      <div className="flex items-center gap-[--5px]">
                        {file ? (
                          file
                        ) : (
                          <>
                            <svg
                              className=" mr-[--10px]"
                              width="21"
                              height="21"
                              viewBox="0 0 21 21"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M0.798828 10.6575C0.798828 5.1294 5.27784 0.650391 10.806 0.650391C16.3341 0.650391 20.8131 5.1294 20.8131 10.6575C20.8131 16.1857 16.3341 20.6647 10.806 20.6647C5.27784 20.6647 0.798828 16.1857 0.798828 10.6575ZM6.59329 11.8237L9.51474 8.77717V16.1453C9.51474 16.682 9.9465 17.1138 10.4832 17.1138H11.1288C11.6655 17.1138 12.0972 16.682 12.0972 16.1453V8.77717L15.0187 11.8237C15.3939 12.2151 16.0194 12.2232 16.4027 11.8398L16.8426 11.396C17.2219 11.0167 17.2219 10.4033 16.8426 10.0281L11.492 4.67343C11.1127 4.29413 10.4993 4.29413 10.124 4.67343L4.76537 10.0281C4.38607 10.4074 4.38607 11.0207 4.76537 11.396L5.2052 11.8398C5.59258 12.2232 6.21803 12.2151 6.59329 11.8237Z"
                                fill="#F8F24B"
                              />
                            </svg>
                            Drag and drop files here or{" "}
                            <span className="underline text-[#F8F24B]">
                              choose file
                            </span>
                          </>
                        )}
                      </div>
                      <input
                        id="file-upload"
                        type="file"
                        className="hidden"
                        onChange={handleFileChange}
                        accept=".pdf,.xlsx,image/*,application/vnd.ms-excel"
                        disabled={!haveCopy}
                      />
                    </label>
                  </div>
                </div>
                <div className=" flex justify-between items-center">
                  <div className="text-gray-400 text-sm mt-4">
                    Files Supported: PDF, XLSX, Image, Scanner.
                  </div>
                  <div className="text-gray-400 text-sm">Maximum Size: 5MB</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </NextPrevNav>
    </>
  );
};

export default Page;
