"use client";
import React, { useEffect } from "react";
import styles from "./checkout.module.css";
import CustomCheckBox from "@/app/_components/customCheckBox/CustomCheckBox";

const page = () => {
  useEffect(() => {
    (document.getElementById("cardNumber") as any).addEventListener(
      "input",
      function (e: InputEvent) {
        let input = (e.target as HTMLInputElement).value.replace(/\D/g, ""); // Remove all non-digit characters

        input = input.substring(0, 16); // Limit to 16 digits
        let formattedInput = input.match(/.{1,4}/g); // Match groups of 4 digits

        if (formattedInput) {
          (e.target as HTMLInputElement).value = formattedInput.join(" "); // Join groups with a space
        } else {
          (e.target as HTMLInputElement).value = input; // If no match, just use the input
        }
      }
    );
  }, []);
  return (
    <div className="h-full w-full">
      <h1 className=" text-[--32px] font-semibold mb-[--sy-18px]">
        Checkout Information
      </h1>
      <div className=" grid grid-cols-3 gap-[--22px] h-full">
        <div className=" col-span-2 flex flex-col gap-[--16px] h-full">
          <div className="bg-[#484848] px-[--22px] py-[--sy-20px] flex justify-between items-center rounded-[--15px]">
            <div className=" flex flex-col gap-[--sy-8px]">
              <h2 className=" text-[--24px] font-bold">SEO Service</h2>
              <div className=" flex gap-[--39px] justify-between items-center">
                <p>Subscription: Monthly</p>
                <p>Duration: 26 Days</p>
              </div>
            </div>
            <p className="flex items-center gap-[--8px] text-[--20px]">
              <span className=" text-[--32px] font-bold">$200 </span> /month
            </p>
          </div>
          <div className="px-[--22px] py-[--sy-20px] bg-[#353535] rounded-[--15px]">
            <h2 className=" text-[--24px] font-bold mb-[--sy-18px] ">
              Service Details
            </h2>
            <h3 className=" font-semibold mb-[--sy-12px]">
              What is this Service for?
            </h3>
            <span className=" mb-[--sy-20px] inline-block text-[#b1b1b1]">
              Brand
            </span>
            <h3 className="mb-[--sy-12px] font-semibold">
              Do you already have an article, or would you like us to create one
              for you?
            </h3>
            <span className=" mb-[--sy-20px] inline-block text-[#b1b1b1]">
              Make one for me
            </span>
            <h3 className="mb-[--sy-12px] font-semibold">
              What product/service are you advertising?
            </h3>
            <div className="text-[#b1b1b1] mb-[--sy-18px]">
              <p>Product Link: https://dskbproduct_link.com</p>
              <p className=" mb-[--sy-8px]">
                Anchor Text: Lrem emspsum veistrp sankretos mangalo
              </p>
              <p>
                Keywords:{" "}
                <span className=" inline-block px-[--16px] py-[--sy-8px] bg-[#484848] rounded-[--42px] mr-[--8px]">
                  Product
                </span>
                <span className=" inline-block px-[--16px] py-[--sy-8px] bg-[#484848] rounded-[--42px] mr-[--8px]">
                  Theme
                </span>
                <span className=" inline-block px-[--16px] py-[--sy-8px] bg-[#484848] rounded-[--42px] mr-[--8xp]">
                  SEO
                </span>
              </p>
            </div>
            <div className=" h-[1px] w-1/2 bg-[#484848] mx-auto mb-[--sy-18px]"></div>
            <h3 className="mb-[--sy-12px] font-semibold">
              Service Payment Transaction
            </h3>
            <p className="text-[#b1b1b1]">
              After completing your payment, you will receive an invoice and an
              OTP code via email for verification and security purposes.
            </p>
            <p className="text-[#b1b1b1] mb-[--sy-18px]">
              Our sales team will then contact you to follow up on your request
              and gather any additional information needed to achieve your
              goals.
            </p>
            <p className="text-[#b1b1b1] mb-[--sy-18px]">
              Once we have spoken with you, we will proceed with the service.
              You will have the opportunity to review each step of the process,
              including the KPIs and other relevant metrics.
            </p>
            <p className="text-[#b1b1b1] mb-[--sy-18px]">
              The duration of the service is an estimate. Our sales team will
              provide you with a more accurate timeline. To ensure exceptional
              KPIs, the timeline may be extended. Therefore, the monthly
              subscription will be renewed automatically until the service has
              been fully provided.
            </p>
          </div>
        </div>
        <div
          className={`${styles.card} col-span-1 px-[--30px] py-[--sy-28px] rounded-[--15px] relative self-start checkoutCard`}
        >
          <h2 className=" text-[#F8F24B] text-[--24px] font-bold relative z-[1] mb-[--sy-24px]">
            Payment Details
          </h2>
          <div className=" flex flex-col gap-[--sy-24px] mb-[--sy-24px]">
            <div className=" flex flex-col gap-[--sy-8px] z-[1] relative">
              <label className=" font-semibold ">Name on card:</label>
              <input
                type="text"
                placeholder="Shahenda El Naggar"
                className="px-[--10px] py-[--sy-10px] outline-none border-none rounded-[--5px] bg-[#484848]"
              />
            </div>
            <div className=" flex flex-col gap-[--sy-8px] z-[1] relative">
              <label className=" font-semibold ">Card Number</label>
              <input
                type="tel"
                id="cardNumber"
                placeholder="xxxx xxxx xxxx"
                className="px-[--10px] py-[--sy-10px] outline-none border-none rounded-[--5px] bg-[#484848]"
              />
            </div>
            <div className=" flex gap-[--27px]">
              <div className=" flex flex-col gap-[--sy-8px] z-[1] relative">
                <label className=" font-semibold ">Expiry Date</label>
                <input
                  type="number"
                  accept=""
                  placeholder="MM/YY"
                  className="px-[--10px] py-[--sy-10px] outline-none border-none rounded-[--5px] bg-[#484848] w-[6vw] placeholder:text-center"
                />
              </div>
              <div className=" flex flex-col gap-[--sy-8px] z-[1] relative">
                <label className=" font-semibold ">CVV</label>
                <input
                  type="tel"
                  placeholder="xxx"
                  className="px-[--10px] py-[--sy-10px] outline-none border-none rounded-[--5px] bg-[#484848] w-[4vw] placeholder:text-center"
                />
              </div>
            </div>
          </div>
          <div className=" flex items-center gap-[--8px] mb-[--sy-24px]">
            <div
              className={`${styles.checkbox} relative bg-[#1d1d1d] z-10 w-fit overflow-hidden`}
            >
              <input
                type="checkbox"
                className=" absolute w-full h-full opacity-0 left-0 top-0 z-[2]"
                id="cardInfo"
              />
              <span className=" w-full block p-1">
                <svg
                  viewBox="0 0 11 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.758 0.95616C11.0807 1.27865 11.0807 1.8015 10.758 2.12399L4.56523 8.31346C4.22108 8.65743 3.66307 8.65743 3.31891 8.31346L0.241995 5.23816C-0.080665 4.91572 -0.080665 4.39284 0.241995 4.07035C0.564649 3.74785 1.08778 3.74785 1.41044 4.07035L3.94208 6.60064L9.58956 0.95616C9.91223 0.633672 10.4354 0.633672 10.758 0.95616Z"
                  />
                </svg>
              </span>
            </div>
            <label
              htmlFor="cardInfo"
              className=" text-[--15px] font-medium z-[1] relative"
            >
              Save card information
            </label>
          </div>
          <div className=" flex items-center gap-[--8px] mb-[--sy-40px]">
            <div
              className={`${styles.checkbox} relative bg-[#1d1d1d] z-10 w-fit overflow-hidden`}
            >
              <input
                type="checkbox"
                className=" absolute w-full h-full opacity-0 left-0 top-0 z-[2]"
                id="subscribe"
              />
              <span className=" w-full block p-1">
                <svg
                  viewBox="0 0 11 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.758 0.95616C11.0807 1.27865 11.0807 1.8015 10.758 2.12399L4.56523 8.31346C4.22108 8.65743 3.66307 8.65743 3.31891 8.31346L0.241995 5.23816C-0.080665 4.91572 -0.080665 4.39284 0.241995 4.07035C0.564649 3.74785 1.08778 3.74785 1.41044 4.07035L3.94208 6.60064L9.58956 0.95616C9.91223 0.633672 10.4354 0.633672 10.758 0.95616Z"
                  />
                </svg>
              </span>
            </div>
            <label
              htmlFor="subscribe"
              className=" text-[--15px] font-medium z-[1] relative"
            >
              By clicking “Subscribe” you agree to the{" "}
              <span className="text-[#F8F24B] z-[1] relative">Terms & Agreements</span>
            </label>
          </div>
          <button className=" w-full text-black rounded-[--33px] relative z-[1] bg-[#F8F24B] py-[--sy-13px] font-bold">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default page;
