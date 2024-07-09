"use client";
import CustomCheckBoxText from "@/app/_components/customCheckBox/CustomCheckBoxText";
import React from "react";
import VerificationInput from "react-verification-input";

const page = () => {
  return (
    <div className="otp-verification flex w-full h-full justify-center items-center">
      <div className=" w-full">
        <h1 className=" text-[--40px] font-semibold mb-[--sy-16px] text-center">
          OTP Verification
        </h1>
        <p className=" mx-auto text-center text-[#FFFFFFCC] text-[--18px] mb-[--sy-50px]">
          Please enter the OTP code that has been sent to <br />{" "}
          useremail@gmail.com.
        </p>
        <div className=" w-fit mx-auto mb-[--sy-64px]">
          <VerificationInput placeholder="" validChars="0-9" length={4} />
        </div>
        <div className=" flex items-center gap-[--16px] justify-center">
            <CustomCheckBoxText btnSize="xl" inputType="radio" name="submit verification">
            Submit
            </CustomCheckBoxText>
            <CustomCheckBoxText btnSize="xl" inputType="radio" name="submit verification">
            Resend Code
            </CustomCheckBoxText>
        </div>
      </div>
    </div>
  );
};

export default page;
