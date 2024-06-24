"use client";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";
import CustomCheckBoxText from "@/app/_components/customCheckBox/CustomCheckBoxText";
import React, { useState } from "react";

const page = () => {
  const [file, setFile] = useState<any>(null);

  const handleFileChange = (e: any) => {
    setFile(e.target.files[0]);
  };
  return (
    <>
      <NextPrevNav nextLink="" backLink="">
        <div className=" w-full h-full flex justify-center items-center">
          <div className=" w-full">
            <h2 className="mb-[--sy-16px] text-[--32px] font-semibold w-[40%] text-center mx-auto">
              Do you have a Wikipedia page copy available or you want it to be
              written for you?
            </h2>
            <p className=" text-[--18px] w-[28%] mx-auto text-center text-[#FFFFFFCC] mb-[5vh]">
              Our writers can incorporate specific sources as content references
              for your blog.
            </p>
            <div className=" flex justify-center items-center mb-[4.4vh] gap-[--22px]">
              <CustomCheckBoxText
                btnSize="xl"
                inputType="radio"
                name="copyAnswer"
              >
                I have a copy
              </CustomCheckBoxText>
              <CustomCheckBoxText
                btnSize="xl"
                inputType="radio"
                name="copyAnswer"
              >
                Write one for me
              </CustomCheckBoxText>
            </div>
            <div className=" pt-[3.3vh] border-t border-t-[#484848] w-[60%] mx-auto">
              <div className="bg-[#353535] px-[--26px] py-[--sy-25px] rounded-[--12px]">
                <label className="font-semibold block text-[--19px] mb-[--sy-20px]"> Upload File</label>
                <div className="border-dashed border-2 border-gray-500 rounded-lg p-6 w-full bg-gray-800">
                  <div className="text-center">
                    <label
                      htmlFor="file-upload"
                      className="cursor-pointer text-yellow-500"
                    >
                      <div className="flex flex-col items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-10 h-10 mb-3"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 4v16m8-8H4"
                          />
                        </svg>
                        Drag and drop files here or{" "}
                        <span className="underline">choose file</span>
                      </div>
                      <input
                        id="file-upload"
                        type="file"
                        className="hidden"
                        onChange={handleFileChange}
                      />
                    </label>
                    {file && (
                      <p className="text-gray-300 mt-2">
                        Selected file: {file?.name}
                      </p>
                    )}
                  </div>
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

export default page;
