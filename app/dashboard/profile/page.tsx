import Image from "next/image";
import React from "react";
import profile from "../../../public/assets/profile.png";
import styles from "./profile.module.css";

const page = () => {
  return (
    <>
      <div className={`${styles.profile} pt-[--sy-14px] h-full`}>
        <div className=" grid gap-[--24px] grid-cols-3 h-full">
          <div className=" col-span-1 rounded-[--15px] bg-[#353535] px-[--25px] pt-[--sy-18px] pb-[--sy-31px] relative h-full flex flex-col">
            <div className=" flex justify-between items-center mb-[--sy-31px]">
              <div className=" absolute -top-[30px] w-[--75px]">
              <Image
                src={profile}
                alt="profile"
                className="w-[--75px]"
              />
              </div>
              <div className=" ml-auto">
                <p className="text-[#B1B1B1] text-[--10px] mb-[--sy-8px] leading-[12px]">
                  Registered on January 2024
                </p>
                <p className="text-[#B1B1B1] text-[--10px] leading-[12px]">
                  Last login on January, 14th, 2024
                </p>
              </div>
            </div>
            <div className=" flex justify-between items-center mb-[--sy-40px]">
              <h1 className=" text-[--24px] font-semibold">Cameron Williamson</h1>
              <span className=" bg-[--highlight-yellow] rounded-[--30px] px-[--11px] py-[--sy-6px] text-black text-[--10px] leading-[11.2px] font-semibold">
                Entrepreneur
              </span>
            </div>
            <div className=" flex justify-between items-center gap-[--7px] mb-[--sy-23px]">
              <div className="grow bg-[#272727] rounded-[--37px] h-[--sy-8px]">
                <div className=" bg-[--highlight-yellow] rounded-[--37px] h-full w-[40%] relative">
                  <div
                    className={`${styles.tooltip} absolute right-0 translate-x-1/2 -top-[450%] bg-[#484848] rounded-[106px] text-[--10px] px-[--8px] py-[--sy-4px]`}
                  >
                    $20,361{" "}
                    <svg
                    className=" absolute left-1/2 -translate-x-1/2"
                      width="11"
                      height="10"
                      viewBox="0 0 11 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.36603 8.94446C5.98113 9.61113 5.01887 9.61113 4.63397 8.94446L0.736859 2.19446C0.351958 1.52779 0.833084 0.694459 1.60288 0.694459L9.39711 0.694458C10.1669 0.694458 10.648 1.52779 10.2631 2.19446L6.36603 8.94446Z"
                        fill="#484848"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <span className=" bg-[--highlight-yellow] rounded-[--4px] px-[--12px] py-[--sy-4px] text-black text-[--10px] leading-[12px] font-semibold">
                $50K
              </span>
            </div>
            <div className=" flex gap-[--12px] items-center mb-[--sy-23px]">
              <span className=" bg-[#484848] rounded-[--30px] px-[--29px] py-[--sy-8px] text-[--12px] text-[#B1B1B1] font-semibold flex items-center gap-[--6px]">
                <svg
                  className={`${styles.lock}`}
                  width="9"
                  height="11"
                  viewBox="0 0 9 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.96334 0.0742188C3.34407 0.0742188 1.86412 1.10434 1.86412 3.2215V4.46385C1.23729 4.53115 0.929688 4.86763 0.929688 5.53022V9.47985C0.929688 10.2253 1.31274 10.5617 2.08465 10.5617H7.84203C8.61394 10.5617 8.99699 10.2253 8.99699 9.47985V5.52503C8.99699 4.86244 8.68939 4.51043 8.06256 4.44832V3.2215C8.06256 1.10434 6.58261 0.0742188 4.96334 0.0742188ZM2.79852 3.10763C2.79852 1.66341 3.76194 0.871398 4.96334 0.871398C6.16471 0.871398 7.12816 1.66341 7.12816 3.10763V4.44316L2.79852 4.44832V3.10763Z"
                    fill="#B1B1B1"
                  />
                </svg>
                White Label
              </span>
              <span className=" bg-[#484848] text-[#B1B1B1] rounded-[--30px] px-[--29px] text-[--12px] py-[--sy-8px] font-semibold flex items-center gap-[--6px]">
                <svg
                  className={`${styles.lock}`}
                  width="9"
                  height="11"
                  viewBox="0 0 9 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.96334 0.0742188C3.34407 0.0742188 1.86412 1.10434 1.86412 3.2215V4.46385C1.23729 4.53115 0.929688 4.86763 0.929688 5.53022V9.47985C0.929688 10.2253 1.31274 10.5617 2.08465 10.5617H7.84203C8.61394 10.5617 8.99699 10.2253 8.99699 9.47985V5.52503C8.99699 4.86244 8.68939 4.51043 8.06256 4.44832V3.2215C8.06256 1.10434 6.58261 0.0742188 4.96334 0.0742188ZM2.79852 3.10763C2.79852 1.66341 3.76194 0.871398 4.96334 0.871398C6.16471 0.871398 7.12816 1.66341 7.12816 3.10763V4.44316L2.79852 4.44832V3.10763Z"
                    fill="#B1B1B1"
                  />
                </svg>
                Infinity Services
              </span>
            </div>
            <div className=" h-[1px] w-full bg-[#434343] mb-[--sy-25px]"></div>
            <div>
              <h4 className="mb-[--sy-14px] text-[--13px] font-semibold">
                Billings
              </h4>
              <div
                className={`${styles.hover} duration-300 transition-all bg-[#484848] rounded-[--37px] px-[--16px] py-[--sy-14px] flex justify-between items-center mb-[--sy-14px]`}
              >
                <h4 className="text-[--13px] font-semibold">Billings</h4>
                <span className="bg-[#353535] rounded-full flex justify-center items-center p-[--6px] ">
                  <svg
                    className="duration-500 transition-all"
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.8594 9.05571L9.99438 5.16522L6.12541 1.0101C6.09083 0.961444 6.04621 0.920782 5.99455 0.89087C5.9429 0.860958 5.88542 0.842494 5.82601 0.836727C5.7666 0.83096 5.70664 0.838025 5.6502 0.857444C5.59375 0.876863 5.54214 0.908183 5.49886 0.949283C5.45557 0.990383 5.42162 1.0403 5.3993 1.09567C5.37698 1.15103 5.36682 1.21054 5.36951 1.27017C5.37219 1.3298 5.38765 1.38816 5.41485 1.44129C5.44205 1.49442 5.48034 1.5411 5.52714 1.57814L8.42152 4.69632L0.455041 4.43293C0.344594 4.42928 0.237221 4.46965 0.156541 4.54517C0.0758623 4.62069 0.0284847 4.72516 0.0248332 4.8356C0.0211816 4.94605 0.0615552 5.05342 0.13707 5.1341C0.212585 5.21478 0.317058 5.26216 0.427504 5.26581L8.39398 5.5292L5.29997 8.44939C5.21951 8.52523 5.17248 8.62993 5.16921 8.74045C5.16595 8.85097 5.20672 8.95826 5.28257 9.03872C5.35841 9.11918 5.46311 9.16621 5.57363 9.16947C5.68415 9.17274 5.79144 9.13196 5.8719 9.05612L5.8594 9.05571Z"
                      fill="white"
                    />
                  </svg>
                </span>
              </div>
              <div
                className={`${styles.hover} duration-300 transition-all bg-[#484848] rounded-[--37px] px-[--16px] py-[--sy-14px] flex justify-between items-center mb-[--sy-14px]`}
              >
                <h4 className="text-[--13px] font-semibold">Subscriptions</h4>
                <span className="bg-[#353535] rounded-full flex justify-center items-center p-[--6px] ">
                  <svg
                    className="duration-500 transition-all"
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.8594 9.05571L9.99438 5.16522L6.12541 1.0101C6.09083 0.961444 6.04621 0.920782 5.99455 0.89087C5.9429 0.860958 5.88542 0.842494 5.82601 0.836727C5.7666 0.83096 5.70664 0.838025 5.6502 0.857444C5.59375 0.876863 5.54214 0.908183 5.49886 0.949283C5.45557 0.990383 5.42162 1.0403 5.3993 1.09567C5.37698 1.15103 5.36682 1.21054 5.36951 1.27017C5.37219 1.3298 5.38765 1.38816 5.41485 1.44129C5.44205 1.49442 5.48034 1.5411 5.52714 1.57814L8.42152 4.69632L0.455041 4.43293C0.344594 4.42928 0.237221 4.46965 0.156541 4.54517C0.0758623 4.62069 0.0284847 4.72516 0.0248332 4.8356C0.0211816 4.94605 0.0615552 5.05342 0.13707 5.1341C0.212585 5.21478 0.317058 5.26216 0.427504 5.26581L8.39398 5.5292L5.29997 8.44939C5.21951 8.52523 5.17248 8.62993 5.16921 8.74045C5.16595 8.85097 5.20672 8.95826 5.28257 9.03872C5.35841 9.11918 5.46311 9.16621 5.57363 9.16947C5.68415 9.17274 5.79144 9.13196 5.8719 9.05612L5.8594 9.05571Z"
                      fill="white"
                    />
                  </svg>
                </span>
              </div>
              <div className="px-[--14px] py-[--sy-11px] bg-[#1d1d1d] rounded-[7px] w-full flex justify-between items-center">
                <div>
                  <p className=" text-[--14px] mb-[--sy-11px]">
                    Next invoice will be on
                  </p>
                  <p className="text-[--highlight-yellow] text-[--14px] font-bold">
                    February, 17th, 2025
                  </p>
                </div>
                <svg
                  className={`${styles.info}`}
                  width="17"
                  height="18"
                  viewBox="0 0 17 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.5 13.2474H9.16667V8.24744H7.5V13.2474ZM8.33333 6.58077C8.56944 6.58077 8.7675 6.50077 8.9275 6.34077C9.0875 6.18077 9.16722 5.98299 9.16667 5.74744C9.16611 5.51188 9.08611 5.3141 8.92667 5.1541C8.76722 4.9941 8.56944 4.9141 8.33333 4.9141C8.09722 4.9141 7.89945 4.9941 7.74 5.1541C7.58056 5.3141 7.50056 5.51188 7.5 5.74744C7.49944 5.98299 7.57945 6.18105 7.74 6.3416C7.90056 6.50216 8.09833 6.58188 8.33333 6.58077ZM8.33333 17.4141C7.18056 17.4141 6.09722 17.1952 5.08333 16.7574C4.06945 16.3197 3.1875 15.726 2.4375 14.9766C1.6875 14.2272 1.09389 13.3452 0.656668 12.3308C0.219446 11.3163 0.00055661 10.233 1.05485e-06 9.08077C-0.000554501 7.92855 0.218334 6.84521 0.656668 5.83077C1.095 4.81633 1.68861 3.93438 2.4375 3.18494C3.18639 2.43549 4.06834 1.84188 5.08333 1.4041C6.09833 0.966326 7.18167 0.747437 8.33333 0.747437C9.485 0.747437 10.5683 0.966326 11.5833 1.4041C12.5983 1.84188 13.4803 2.43549 14.2292 3.18494C14.9781 3.93438 15.5719 4.81633 16.0108 5.83077C16.4497 6.84521 16.6683 7.92855 16.6667 9.08077C16.665 10.233 16.4461 11.3163 16.01 12.3308C15.5739 13.3452 14.9803 14.2272 14.2292 14.9766C13.4781 15.726 12.5961 16.3199 11.5833 16.7583C10.5706 17.1966 9.48722 17.4152 8.33333 17.4141Z"
                    fill="#F8F24B"
                  />
                </svg>
              </div>
            </div>
            <p className=" mt-auto text-center text-[#b1b1b1] text-[--14px] font-semibold">
              Creative Juice Box 0.1
            </p>
          </div>
          <div className=" col-span-2 flex flex-col gap-[--sy-20px] h-full">
            <div className="rounded-[--15px] bg-[#353535] px-[--34px] py-[--sy-24px] w-full">
              <h2 className="text-[--24px] mb-[--sy-20px] font-semibold">
                General Information
              </h2>
              <div className=" flex flex-col gap-[--sy-22px] w-full">
                <div className=" w-full flex justify-between items-center gap-[--42px]">
                  <div className=" w-full flex flex-col gap-[--sy-14px]">
                    <label className="text-[--14px] font-medium">
                      First Name
                    </label>
                    <input
                      placeholder="John"
                      type="text"
                      className="outline-none placeholder:text-[#b1b1b1] block w-full px-[--12px] py-[--sy-5px] rounded-[--3px] border-none bg-[#484848]"
                    />
                  </div>
                  <div className=" w-full flex flex-col gap-[--sy-14px]">
                    <label className="text-[--14px] font-medium">
                      Last Name
                    </label>
                    <input
                      placeholder="Doe"
                      type="text"
                      className="outline-none placeholder:text-[#b1b1b1] block w-full px-[--12px] py-[--sy-5px] rounded-[--3px] border-none bg-[#484848]"
                    />
                  </div>
                </div>
                <div className=" w-full flex justify-between items-center gap-[--42px]">
                  <div className=" w-full flex flex-col gap-[--sy-14px]">
                    <label className="text-[--14px] font-medium">Email</label>
                    <input
                      placeholder="Johndoe@gmail.com"
                      type="text"
                      className="outline-none placeholder:text-[#b1b1b1] block w-full px-[--12px] py-[--sy-5px] rounded-[--3px] border-none bg-[#484848]"
                    />
                  </div>
                  <div className=" w-full flex flex-col gap-[--sy-14px]">
                    <label className="text-[--14px] font-medium">
                      Phone Number
                    </label>
                    <input
                      placeholder="+02 115 486 632 059"
                      type="text"
                      className="outline-none placeholder:text-[#b1b1b1] block w-full px-[--12px] py-[--sy-5px] rounded-[--3px] border-none bg-[#484848]"
                    />
                  </div>
                </div>
                <div className=" w-full flex justify-between items-center gap-[--42px]">
                  <div className=" w-full flex flex-col gap-[--sy-14px]">
                    <label className="text-[--14px] font-medium">Address</label>
                    <input
                      placeholder="123, internet ST"
                      type="text"
                      className="outline-none placeholder:text-[#b1b1b1] block w-full px-[--12px] py-[--sy-5px] rounded-[--3px] border-none bg-[#484848]"
                    />
                  </div>
                  <div className=" w-full flex flex-col gap-[--sy-14px]">
                    <label className="text-[--14px] font-medium">
                      Date of birth
                    </label>
                    <input
                      placeholder="15/20/1996"
                      type="text"
                      className="outline-none placeholder:text-[#b1b1b1] block w-full px-[--12px] py-[--sy-5px] rounded-[--3px] border-none bg-[#484848]"
                    />
                  </div>
                </div>
                <div className=" w-full flex justify-between items-center gap-[--42px]">
                  <div className=" w-full flex flex-col gap-[--sy-14px]">
                    <label className="text-[--14px] font-medium">Country</label>
                    <input
                      placeholder="USA"
                      type="text"
                      className="outline-none placeholder:text-[#b1b1b1] block w-full px-[--12px] py-[--sy-5px] rounded-[--3px] border-none bg-[#484848]"
                    />
                  </div>
                  <div className=" w-full flex flex-col gap-[--sy-14px]">
                    <label className="text-[--14px] font-medium">City</label>
                    <input
                      placeholder="NYC"
                      type="text"
                      className="outline-none placeholder:text-[#b1b1b1] block w-full px-[--12px] py-[--sy-5px] rounded-[--3px] border-none bg-[#484848]"
                    />
                  </div>
                </div>
                <div className=" w-full flex justify-between items-center gap-[--42px]">
                  <div className=" w-full flex flex-col gap-[--sy-14px]">
                    <label className="text-[--14px] font-medium">
                      Organization
                    </label>
                    <input
                      placeholder="GEEKLABS"
                      type="text"
                      className="outline-none placeholder:text-[#b1b1b1] block w-full px-[--12px] py-[--sy-5px] rounded-[--3px] border-none bg-[#484848]"
                    />
                  </div>
                  <div className=" w-full flex flex-col gap-[--sy-14px]">
                    <label className="text-[--14px] font-medium">Role</label>
                    <input
                      placeholder="CEO"
                      type="text"
                      className="outline-none placeholder:text-[#b1b1b1] block w-full px-[--12px] py-[--sy-5px] rounded-[--3px] border-none bg-[#484848]"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-[--15px] bg-[#353535] px-[--34px] py-[--sy-24px] w-full h-full">
              <h2 className="text-[--24px] mb-[--sy-20px] font-semibold">
                Password Information
              </h2>
              <div className=" flex flex-col gap-[--sy-22px] w-full">
                <div className=" w-full flex justify-between items-center gap-[--42px]">
                  <div className=" w-full flex flex-col gap-[--sy-14px]">
                    <label className="text-[--14px] font-medium">
                      Current Password
                    </label>
                    <input
                      placeholder="**********"
                      type="password"
                      className="outline-none placeholder:text-[#b1b1b1] block w-full px-[--12px] py-[--sy-5px] rounded-[--3px] border-none bg-[#484848]"
                    />
                  </div>
                  <div className=" w-full flex flex-col gap-[--sy-14px]">
                    <label className="text-[--14px] font-medium">
                      New Password
                    </label>
                    <input
                      placeholder="**********"
                      type="password"
                      className="outline-none placeholder:text-[#b1b1b1] block w-full px-[--12px] py-[--sy-5px] rounded-[--3px] border-none bg-[#484848]"
                    />
                  </div>
                </div>
                <div className=" w-full flex justify-between items-center gap-[--42px]">
                  <div className=" w-full flex flex-col gap-[--sy-14px]">
                    <label className="text-[--14px] font-medium">
                      Security Question
                    </label>
                    <input
                      placeholder="What is my primary teacher name?"
                      type="text"
                      className="outline-none placeholder:text-[#b1b1b1] block w-full px-[--12px] py-[--sy-5px] rounded-[--3px] border-none bg-[#484848]"
                    />
                  </div>
                  <div className=" w-full flex flex-col gap-[--sy-14px]">
                    <label className="text-[--14px] font-medium">Answer</label>
                    <input
                      placeholder="*********"
                      type="text"
                      className="outline-none placeholder:text-[#b1b1b1] block w-full px-[--12px] py-[--sy-5px] rounded-[--3px] border-none bg-[#484848]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
