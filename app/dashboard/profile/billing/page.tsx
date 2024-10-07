"use client"
import Link from "next/link";
import React, { useEffect } from "react";
import styles from "./billing.module.css";
import { useAuth } from "@/app/_context/AuthContext";
import { useState } from "react";
import { toast } from "react-hot-toast";

const Billing = () => {
  const { user, logout } = useAuth();
  const [userData, setUserData] = useState<any>(null);
  const [data, setData] = useState<any>(null);
  async function getMe() {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/users/get-me`,
      {
        headers: {
          Authorization: `Bearer ${user?.token}`,
        },
      }
    );
    const data = await response.json();
    console.log(data);
    if (data.message == "User recently changed his password. please login again..") {
      toast("Password recently changed. Please login again!", {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
      logout();
    }
    console.log(data.data);
    setUserData(data?.data.linkedCards[data?.data.linkedCards.length - 1]);
    setData(data?.data);
  }
  useEffect(() => {
    getMe();
  }, []);
  return (
    <div className=" w-full h-full">
      <h1 className=" text-[--32px] font-semibold mb-[--sy-24px]">
        Billing History
      </h1>
      <div className="bg-[#353535] rounded-[--7px] px-[--37px] py-[--sy-19px] mb-[--sy-8px]">
        <h3 className=" font-bold mb-[--sy-18px]">Payment methods</h3>
        <div className=" flex gap-[--28px] items-center">
          <div className=" relative w-fit">
            <svg
              className=" w-[--313px] h-[--167px]"
              viewBox="0 0 313 167"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_3488_49919)">
                <rect width="312.17" height="167" rx="18.5556" fill="#F8F24B" />
                <rect
                  x="203.297"
                  y="63.1714"
                  width="128.461"
                  height="27.2876"
                  rx="13.6438"
                  transform="rotate(-30 203.297 63.1714)"
                  fill="#272727"
                  fill-opacity="0.17"
                />
                <rect
                  x="174"
                  y="80.0898"
                  width="25.1046"
                  height="27.2876"
                  rx="12.5523"
                  transform="rotate(-30 174 80.0898)"
                  fill="#272727"
                  fill-opacity="0.17"
                />
                <rect
                  x="201.363"
                  y="22.6992"
                  width="231.399"
                  height="27.2876"
                  rx="13.6438"
                  transform="rotate(-30 201.363 22.6992)"
                  fill="#272727"
                  fill-opacity="0.17"
                />
                <rect
                  x="192.012"
                  y="111.283"
                  width="231.399"
                  height="27.2876"
                  rx="13.6438"
                  transform="rotate(-30 192.012 111.283)"
                  fill="#272727"
                  fill-opacity="0.17"
                />
              </g>
              <defs>
                <clipPath id="clip0_3488_49919">
                  <rect width="312.17" height="167" rx="18.5" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <div className="text-black flex justify-between items-center w-full absolute top-[15%] px-[--23px]">
              <span className=" font-medium">Card Number</span>
              <svg
                className=" w-[--34px] h-[--11px]"
                viewBox="0 0 34 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M30.8075 10.7575L30.5005 9.1751H27.0705L26.5247 10.7462L23.7755 10.7519C25.0843 7.5071 26.3959 4.26353 27.7104 1.02117C27.9341 0.471203 28.3312 0.191295 28.9165 0.194108C29.364 0.198328 30.0939 0.198327 31.1077 0.195514L33.2334 10.7533L30.8075 10.7575ZM27.8427 7.00756H30.053L29.2276 3.04102L27.8427 7.00756ZM10.1208 0.192701L12.885 0.195514L8.61179 10.7589L5.81345 10.7561C5.10977 7.96589 4.41485 5.17335 3.72868 2.37852C3.59224 1.82152 3.3221 1.43189 2.80227 1.24763C2.33974 1.08306 1.56887 0.82988 0.488281 0.485269V0.196921H4.90478C5.66883 0.196921 6.11498 0.578103 6.25824 1.36016C6.40286 2.14362 6.76579 4.13815 7.34974 7.34373L10.1208 0.192701ZM16.6835 0.195514L14.4977 10.7561L11.8672 10.7533L14.0502 0.192701L16.6835 0.195514ZM22.0182 0C22.8054 0 23.7973 0.253184 24.3676 0.485269L23.9065 2.67531C23.3907 2.46151 22.5421 2.17316 21.8285 2.18301C20.7916 2.20129 20.1503 2.64999 20.1503 3.0804C20.1503 3.78088 21.2637 4.13393 22.4098 4.89911C23.7182 5.77118 23.8901 6.55465 23.8737 7.40562C23.856 9.17228 22.4098 10.915 19.359 10.915C17.9673 10.8939 17.4653 10.773 16.3301 10.358L16.8103 8.07234C17.966 8.57168 18.4558 8.73062 19.4436 8.73062C20.3482 8.73062 21.1245 8.35366 21.1313 7.69679C21.1368 7.2298 20.8585 6.99772 19.8434 6.42102C18.8283 5.84292 17.4039 5.04258 17.423 3.43627C17.4461 1.37985 19.3358 0 22.0195 0H22.0182Z"
                  fill="#1D1D1D"
                />
              </svg>
            </div>
            <div className="text-black flex justify-between items-center w-full absolute bottom-[15%] px-[--23px]">
              <div className=" flex flex-col gap-[--sy-4px] font-medium">
                <span className=" font-medium">{data?.firstName} {data?.lastName}</span>
                <span className=" font-medium">{`XXXX XXXX XXXX ${userData?.last4}`}</span>
              </div>
             <span className=" font-medium">{userData?.expDate.split("/")[0] > 9 ? userData?.expDate.split("/")[0] : `0${userData?.expDate.split("/")[0]}`}/{userData?.expDate.split("/")[1].slice(2,)}</span>
            </div>

            <Link
              href={"#"}
              className=" underline text-sm right-0 bottom-full -translate-y-1/4 absolute"
            >
              Change Card
            </Link>
          </div>
          <div className=" w-full">
            <div className=" flex justify-between items-center w-full px-[--40px]">
              <div className=" flex flex-col gap-[--sy-20px] w-1/3">
                <h4 className=" font-semibold">Next Payment on</h4>
                <span className="text-[--32px] font-semibold">07 Feb 2025</span>
              </div>
              <div className=" flex justify-center w-1/3">
                <div className=" flex flex-col gap-[--sy-20px] w-1/3">
                  <h4 className=" font-semibold">Monthly Payment</h4>
                  <span className="text-[--32px] font-semibold">$200</span>
                </div>
              </div>
              <div className=" flex justify-end w-1/3">
                <div className=" flex flex-col gap-[--sy-20px] ">
                  <h4 className=" font-semibold">Total Amount Paid</h4>
                  <span className="text-[--32px] font-semibold">$600</span>
                </div>
              </div>
            </div>
            <div className=" w-full h-[1px] bg-[#b1b1b1] my-[--sy-25px]"></div>
            <div className=" flex justify-between items-center w-full px-[--40px]">
              <div className=" flex flex-col gap-[--sy-20px] w-1/3">
                <h4 className=" font-semibold">Total Orders</h4>
                <span className="text-[--32px] font-semibold">26</span>
              </div>
              <div className=" flex justify-center w-1/3">
                <div className=" flex flex-col gap-[--sy-20px] w-1/3">
                  <h4 className=" font-semibold">Total Ongoing Services</h4>
                  <span className="text-[--32px] font-semibold">25</span>
                </div>
              </div>
              <div className=" flex justify-end w-1/3">
                <div className=" flex flex-col gap-[--sy-20px]">
                  <h4 className=" font-semibold relative">
                    Overdue payment{" "}
                    <svg
                      className="absolute left-full translate-x-full top-1/2 -translate-y-1/2 w-[--17px] h-[--17px]"
                      viewBox="0 0 17 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.5 12.5H9.16667V7.5H7.5V12.5ZM8.33333 5.83333C8.56944 5.83333 8.7675 5.75333 8.9275 5.59333C9.0875 5.43333 9.16722 5.23556 9.16667 5C9.16611 4.76444 9.08611 4.56667 8.92667 4.40667C8.76722 4.24667 8.56944 4.16667 8.33333 4.16667C8.09722 4.16667 7.89945 4.24667 7.74 4.40667C7.58056 4.56667 7.50056 4.76444 7.5 5C7.49944 5.23556 7.57945 5.43361 7.74 5.59417C7.90056 5.75472 8.09833 5.83444 8.33333 5.83333ZM8.33333 16.6667C7.18056 16.6667 6.09722 16.4478 5.08333 16.01C4.06945 15.5722 3.1875 14.9786 2.4375 14.2292C1.6875 13.4797 1.09389 12.5978 0.656668 11.5833C0.219446 10.5689 0.00055661 9.48556 1.05485e-06 8.33333C-0.000554501 7.18111 0.218334 6.09778 0.656668 5.08333C1.095 4.06889 1.68861 3.18694 2.4375 2.4375C3.18639 1.68806 4.06834 1.09444 5.08333 0.656667C6.09833 0.218889 7.18167 0 8.33333 0C9.485 0 10.5683 0.218889 11.5833 0.656667C12.5983 1.09444 13.4803 1.68806 14.2292 2.4375C14.9781 3.18694 15.5719 4.06889 16.0108 5.08333C16.4497 6.09778 16.6683 7.18111 16.6667 8.33333C16.665 9.48556 16.4461 10.5689 16.01 11.5833C15.5739 12.5978 14.9803 13.4797 14.2292 14.2292C13.4781 14.9786 12.5961 15.5725 11.5833 16.0108C10.5706 16.4492 9.48722 16.6678 8.33333 16.6667Z"
                        fill="#F8F24B"
                      />
                    </svg>
                  </h4>
                  <span className="text-[--32px] font-semibold">1</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full  ">
        <ul className=" w-full flex justify-between items-center py-[--sy-6px] font-bold">
          <li className=" w-[20%] text-center">Invoice</li>
          <li className=" w-[20%] text-center">Billing Date</li>
          <li className=" w-[20%] text-center">Service</li>
          <li className=" w-[20%] text-center">Amount</li>
          <li className=" w-[20%] text-center">PDF</li>
        </ul>
        <div className={`${styles.tableBody} overflow-y-scroll h-[37vh]`}>
          {Array(6)
            .fill(0)
            .map((e) => (
              <ul className=" w-full flex justify-between items-center py-[--sy-16px] border-b-[1px] border-[#3f3f3f]">
                <li className=" w-[20%] text-center">Invoice 0001</li>
                <li className=" w-[20%] text-center">07 January 2025</li>
                <li className=" w-[20%] text-center">SEO</li>
                <li className=" w-[20%] text-center">$200</li>
                <li className=" w-[20%] text-center">
                  <button className=" px-[--24px] py-[--sy-8px] rounded-[--26px] text-black bg-[#F8F24B] font-semibold">
                    Download
                  </button>
                </li>
              </ul>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Billing;
