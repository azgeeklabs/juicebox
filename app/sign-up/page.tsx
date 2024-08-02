import { Divider } from "@mui/material";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className=" bg-[#181818] h-full w-full flex justify-center items-center flex-col">
      <div className=" px-[--38px] py-[--sy-33px] rounded-[--14px] bg-[#272727] mb-[--sy-30px]">
        <h1 className=" font-semibold text-[--30px] mb-[--sy-20px]">
          Get Started Now
        </h1>
        <p className=" mb-[--sy-18px] text-[#b1b1b1]">
          Lorem ipsum dolor sit amet consectetur. Et amet suscipit quisque
          consectetur <br /> maecenas amet elit. Vitae orci fringilla commodo
          dignissim vulputate ac. Egestas.
        </p>
        <div className=" flex flex-col gap-[--sy-21px] mb-[--sy-40px]">
          <div className=" flex gap-[--30px] items-center">
            <div className=" flex flex-col gap-[--sy-16px] grow">
              <label htmlFor="First Name">First Name</label>
              <input
                type="text"
                id="First Name"
                placeholder="John"
                className=" bg-[#484848] outline-none px-[--11px] py-[--sy-8px] rounded-[--3px]"
              />
            </div>
            <div className=" flex flex-col gap-[--sy-16px] grow">
              <label htmlFor="Last Name">First Name</label>
              <input
                type="text"
                id="Last Name"
                placeholder="Doe"
                className=" bg-[#484848] outline-none px-[--11px] py-[--sy-8px] rounded-[--3px]"
              />
            </div>
          </div>
          <div className=" flex gap-[--30px] items-center">
            <div className=" flex flex-col gap-[--sy-16px] grow">
              <label htmlFor="Email">Email</label>
              <input
                type="email"
                id="Email"
                placeholder="John"
                className=" bg-[#484848] outline-none px-[--11px] py-[--sy-8px] rounded-[--3px]"
              />
            </div>
            <div className=" flex flex-col gap-[--sy-16px] grow">
              <label htmlFor="Date of birth">Date of birth</label>
              <input
                type="text"
                id="Date of birth"
                placeholder="15/2/1996"
                className=" bg-[#484848] outline-none px-[--11px] py-[--sy-8px] rounded-[--3px]"
              />
            </div>
          </div>
          <div className=" flex gap-[--30px] items-center">
            <div className=" flex flex-col gap-[--sy-16px] grow">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="*******"
                className=" bg-[#484848] outline-none px-[--11px] py-[--sy-8px] rounded-[--3px]"
              />
            </div>
            <div className=" flex flex-col gap-[--sy-16px] grow">
              <label htmlFor="repassword">Re-enter Password</label>
              <input
                type="password"
                id="repassword"
                placeholder="*******"
                className=" bg-[#484848] outline-none px-[--11px] py-[--sy-8px] rounded-[--3px]"
              />
            </div>
          </div>
        </div>
        <button className=" block rounded-[--39px] text-black bg-[--highlight-yellow] w-full py-[--sy-19px] font-bold mb-[--sy-23px]">
          Sign Up
        </button>
        <p className=" mb-[--sy-40px]">
          By signing up you agree to our{" "}
          <span className=" text-[--highlight-yellow]">Privacy Policy</span> and
          our{" "}
          <span className=" text-[--highlight-yellow]">Terms & Agreements</span>
        </p>
        <Divider
          sx={{
            "&.MuiDivider-root::before": {
              backgroundColor: "#353535",
            },
            "&.MuiDivider-root::after": {
              backgroundColor: "#353535",
            },
            marginBottom: "var(--sy-50px)",
          }}
        >
          OR
        </Divider>
        <h2 className="text-[--20px] font-medium text-center mb-[--sy-30px]">
          Register with:
        </h2>
        <div className=" flex items-center gap-[--16px]">
          <button className=" flex items-center justify-center gap-[--15px] bg-[#353535] rounded-[--7px] grow py-[--sy-12px]">
            <svg
              className="w-[--19px] h-[--18px]"
              viewBox="0 0 19 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18.0081 6.93033H9.68047C9.68047 7.79638 9.68046 9.52832 9.67516 10.3944H14.5008C14.3159 11.2604 13.6602 12.4731 12.7339 13.0837C12.7339 13.0837 12.7321 13.0888 12.7303 13.0879C11.4987 13.9011 9.87336 14.0857 8.66651 13.8432C6.77484 13.4673 5.27777 12.0954 4.66992 10.3529C4.67346 10.3503 4.67612 10.3263 4.67878 10.3246C4.29832 9.24372 4.29832 7.79638 4.67878 6.93033H4.67789C5.16806 5.33853 6.71024 3.88623 8.60456 3.48872C10.1282 3.16568 11.8473 3.51538 13.1117 4.6984C13.2798 4.53385 15.4386 2.42597 15.6006 2.25449C11.281 -1.65746 4.36467 -0.281347 1.77668 4.77033H1.77579C1.77579 4.77033 1.77668 4.77054 1.77138 4.78006C0.49109 7.2613 0.544176 10.185 1.78022 12.5476C1.77668 12.5502 1.77403 12.5518 1.77138 12.5544C2.89151 14.7282 4.93006 16.3953 7.38622 17.0301C9.99545 17.7143 13.316 17.2466 15.5404 15.2348L15.5431 15.2373C17.4277 13.5399 18.6009 10.6483 18.0081 6.93033Z"
                fill="white"
              />
            </svg>
            Google
          </button>
          <button className=" flex items-center justify-center gap-[--15px] bg-[#353535] rounded-[--7px] grow py-[--sy-12px]">
            <svg
              className="w-[--16px] h-[--18px]"
              viewBox="0 0 16 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.0595 2.76139C11.7202 2.02917 12.1655 1.00933 12.0437 -0.00537109C11.0916 0.0292906 9.93977 0.576206 9.2571 1.30756C8.64408 1.95659 8.10895 2.99364 8.25281 3.98842C9.31483 4.0638 10.3988 3.49446 11.0595 2.76139ZM13.441 9.20164C13.4676 11.8246 15.9518 12.6972 15.9793 12.7084C15.9591 12.7699 15.5825 13.9517 14.6708 15.1735C13.8818 16.2289 13.0635 17.2801 11.7742 17.3026C10.5079 17.3243 10.1001 16.6146 8.65141 16.6146C7.20362 16.6146 6.75096 17.28 5.5524 17.3242C4.30803 17.3667 3.35964 16.1823 2.56518 15.1303C0.939622 12.9787 -0.301997 9.05007 1.36571 6.39849C2.19407 5.08223 3.67393 4.24743 5.28117 4.22664C6.50263 4.20497 7.65629 4.97978 8.40309 4.97978C9.1499 4.97978 10.5519 4.04826 12.0253 4.18517C12.642 4.20857 14.3739 4.413 15.4854 5.90429C15.3956 5.95542 13.4191 7.00932 13.441 9.20164Z"
                fill="white"
              />
            </svg>
            Apple
          </button>
        </div>
      </div>
      <p>Already have an account? <Link href={"#"} className=" underline">Sign In</Link></p>
    </div>
  );
};

export default Page;
