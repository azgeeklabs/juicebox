"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useAuth } from "@/app/_context/AuthContext";
import styles from "./whiteLabel.module.css";

const Page = () => {
  const { user, logout } = useAuth();
  const [services, setServices] = useState<any>([]);
  const [totalPrice, setTotalPrice] = useState<any>(0);

  async function getSubscriptions() {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/services/get-purchased-services`,
      {
        method: "GET",
        credentials: 'include',  // Important to include cookies in the request
      }
    );
    const data = await response.json();
    console.log(data);
    setServices(data?.data);
    setTotalPrice(
      data?.data?.reduce(
        (acc: any, curr: any) => acc + curr.service.totalPrice,
        0
      )
    );
  }

  useEffect(() => {
    getSubscriptions();
  }, []);

  return (
    <div className="pt-[--sy-20px] flex w-full justify-center relative">
      <div
        className={`${
          totalPrice < 50000 ? "absolute" : "hidden"
        } inset-0 bg-[#272727] bg-opacity-[0.97]`}
      >
        <svg
          width="69"
          height="77"
          viewBox="0 0 69 77"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mx-auto mt-[--sy-80px] mb-[--sy-20px]"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.316 32.3V22.1C12.316 16.2387 14.6444 10.6175 18.789 6.47295C22.9335 2.32839 28.5548 0 34.416 0C40.2773 0 45.8985 2.32839 50.0431 6.47295C54.1877 10.6175 56.516 16.2387 56.516 22.1V32.3H58.216C63.8495 32.3 68.416 36.8665 68.416 42.5V66.3C68.416 71.9335 63.8495 76.5 58.216 76.5H10.616C4.98273 76.5 0.416016 71.9335 0.416016 66.3V42.5C0.416016 36.8665 4.98273 32.3 10.616 32.3H12.316ZM26.0015 13.6854C28.2331 11.4538 31.2598 10.2 34.416 10.2C37.5722 10.2 40.5989 11.4538 42.8307 13.6854C45.0624 15.9171 46.316 18.9439 46.316 22.1V32.3H22.516V22.1C22.516 18.9439 23.7698 15.9171 26.0015 13.6854Z"
            fill="#616161"
          />
        </svg>
        <h3
          className={`text-[--64px] font-bold text-center text-white text-opacity-10 mb-[--sy-20px] ${styles.infinityText}`}
        >
          White Label
        </h3>
        <p className="text-[--24px] text-center font-medium mb-[--sy-80px]">
          To be eligible for White Label pricing, service, and dedicated <br />{" "}
          customer support, you need to either deposit $50,000 in your <br />{" "}
          account or have bought $50,000 in your account.
        </p>
        <div className="w-[60%] flex gap-[--17px] items-center mx-auto justify-center">
          <div className="w-[78%] bg-[#616161] rounded-[136px] h-[--sy-30px]">
            <div className="w-[70%] bg-[#F8F24B] rounded-[136px] h-full relative">
              <div
                className={` absolute right-0 translate-x-1/2 text-[#1d1d1d] -top-[200%] bg-[#f8f24b] font-semibold rounded-[106px] text-[--21px] px-[--17px] py-[--sy-5px]`}
              >
                ${totalPrice}
                <svg
                  className=" absolute left-1/2 -translate-x-1/2 w-[--15px] h-[--28px] top-[76%]"
                  viewBox="0 0 11 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.36603 8.94446C5.98113 9.61113 5.01887 9.61113 4.63397 8.94446L0.736859 2.19446C0.351958 1.52779 0.833084 0.694459 1.60288 0.694459L9.39711 0.694458C10.1669 0.694458 10.648 1.52779 10.2631 2.19446L6.36603 8.94446Z"
                    fill="#f8f24b"
                  />
                </svg>
              </div>
            </div>
          </div>
          <span className="px-[--23px] py-[--sy-7px] bg-[#616161] rounded-[--39px]">
            $50K
          </span>
        </div>
      </div>
    </div>
  );
};

export default Page;
