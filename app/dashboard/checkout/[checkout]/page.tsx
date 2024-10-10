"use client";
import React, { useContext, useEffect, useState } from "react";
import styles from "./checkout.module.css";
import CustomCheckBox from "@/app/_components/customCheckBox/CustomCheckBox";
import { useAuth } from "@/app/_context/AuthContext";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from "@stripe/react-stripe-js";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { globalContext } from "@/app/_context/GlobalContext";
const stripePromise = loadStripe(
  "pk_test_51PuUZYRswDdUj3se7a6BDKPC5S12F0JUlTtn0ZT1DTf521dAkBSPSSKvg7oobLVKT9gTfCELUioNjPlS3yRHmZZ400dmJCi20w"
);

const Checkout = ({ params }: { params: { checkout: string } }) => {
  const [paymentError, setPaymentError] = useState<string | null>(null);
  const route = useRouter()
  const {setIsCheckout, isCheckout} = useContext(globalContext)

  const [checkoutData, setCheckoutData] = useState<any>({});
  const { checkout } = params;
  console.log(checkout);
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();
  // const [paymentMethodId, setPaymentMethodId] = useState<string | null>(null);
  // Initialize Stripe.js with your publishable key
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    // Retrieve individual elements
    const cardNumberElement = elements.getElement(CardNumberElement);
    const cardExpiryElement = elements.getElement(CardExpiryElement);
    const cardCvcElement = elements.getElement(CardCvcElement);

    if (!cardNumberElement || !cardExpiryElement || !cardCvcElement) return;

    // Create a payment method using the card information
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardNumberElement, // Ensure this is correctly bound to the card number
    });

    if (error) {
      console.error("[error]", error);
      setPaymentError(error?.message || "An error occurred");
      return;
    }

    if (paymentMethod && paymentMethod.id) {
      console.log("Payment Method ID:", paymentMethod.id);
      // setPaymentMethodId(paymentMethod.id);

      // Now you can call your backend with this paymentMethodId
      const token = user?.token; // Ensure token is correctly fetched
      const serviceId = checkout; // Make sure checkout is correctly passed

      console.log(serviceId, token);
      console.log(String(checkoutData?.userId)); // Ensure userId is a string

      try {
        console.log(serviceId, paymentMethod.id);

        // Call your backend API with the paymentMethodId
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/v1/services/purchase-service`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
              serviceId: serviceId,
              paymentMethodId: paymentMethod.id,
            }),
          }
        );

        const result = await response.json();
        console.log("Response from server:", result);

        const { data: clientSecret, status, success, message } = result;

        console.log(status);

        if (!success || status === "fail") {
          console.log(message);
          console.log(`[error] ${message}`);
          toast.error(message, {
            style: {
              borderRadius: "10px",
              background: "#333",
              color: "#fff",
            },
          });
          return;
        }

        if (success) {
          console.log(success, "success");
          toast.success(message, {
            style: {
              borderRadius: "10px",
              background: "#333",
              color: "#fff",
            },
          });
          setIsCheckout(!isCheckout)
          route.replace("/dashboard")
        } else {
          console.log("[error]", message);
          toast.error(message || "An error occurred", {
            style: {
              borderRadius: "10px",
              background: "#333",
              color: "#fff",
            },
          });

          return;
        }

        // console.log(clientSecret);

        // // Confirm the PaymentIntent with the card details
        // const { error: confirmError, paymentIntent } =
        //   await stripe.confirmCardPayment(clientSecret, {
        //     payment_method: {
        //       card: cardNumberElement,
        //       billing_details: {
        //         // Optional: add more billing details like name or email
        //         // name: user?.name,
        //         // email: user?.email,
        //       },
        //     },
        //   });

        // if (confirmError) {
        //   console.log("[error]", confirmError);
        //   toast.error("Payment failed", {
        //     style: {
        //       borderRadius: "10px",
        //       background: "#333",
        //       color: "#fff",
        //     },
        //   });
        // } else if (paymentIntent && paymentIntent.status === "succeeded") {
        //   toast.success("Payment successful", {
        //     style: {
        //       borderRadius: "10px",
        //       background: "#333",
        //       color: "#fff",
        //     },
        //   });
        //   console.log(
        //     "[PaymentIntent]",
        //     paymentIntent.status,
        //     paymentIntent.id
        //   );
        // }
      } catch (err) {
        console.error("Error during API call:", err);
      }
    }
  };

  async function getCheckoutData() {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/services/get-service/${checkout}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user?.token}`,
        },
      }
    );
    const data = await res.json();
    console.log(data);
    setCheckoutData(data.data);
  }
  useEffect(() => {
    getCheckoutData();
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
              {checkoutData && checkoutData?.type && (
                <h2 className="text-[--24px] font-bold">
                  {checkoutData?.type.includes("service")
                    ? checkoutData?.type.charAt(0).toUpperCase() +
                      checkoutData?.type.slice(1)
                    : `${
                        checkoutData?.type.charAt(0).toUpperCase() +
                        checkoutData?.type.slice(1)
                      } Service`}
                </h2>
              )}
              <div className=" flex gap-[--39px] justify-between items-center">
                <p>Subscription: Monthly</p>
                <p>Duration: {checkoutData?.estimatedDuration} Days</p>
              </div>
            </div>
            <p className="flex items-center gap-[--8px] text-[--20px]">
              <span className=" text-[--32px] font-bold">
                ${checkoutData?.totalPrice}{" "}
              </span>{" "}
              /month
            </p>
          </div>
          <div
            className={`px-[--22px] py-[--sy-20px] bg-[#353535] rounded-[--15px] h-[62vh] overflow-y-auto ${styles.detailsContainer}`}
          >
            {checkoutData?.options?.map(
              (option: any) =>
                !option.name.includes("estimated") && (
                  <div key={option.id}>
                    <h3 className=" text-[--24px] font-bold mb-[--sy-18px] ">
                      {option.name.charAt(0).toUpperCase() +
                        option.name.slice(1)}
                    </h3>
                    {option.choice && (
                      <p className="mb-[--sy-20px] inline-block text-[#b1b1b1]">
                        {option.choice}
                      </p>
                    )}
                    {option.ans && (
                      <p className="mb-[--sy-20px] inline-block text-[#b1b1b1]">
                        {option.ans}
                      </p>
                    )}
                    {option.fileUrl && (
                      <p className="mb-[--sy-20px] inline-block text-[#b1b1b1]">
                        {option.fileUrl}
                      </p>
                    )}
                    <ul>
                      {option?.data
                        ? Object.entries(
                            option?.data as Record<string, string>
                          ).map(([key, value]) => (
                            <li
                              key={key}
                              className="mb-[--sy-20px] block text-[#b1b1b1]"
                            >
                              {key}: {value}
                            </li>
                          ))
                        : null}
                    </ul>
                  </div>
                )
            )}
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
              <label className=" font-semibold ">Card Number</label>
              <CardNumberElement className="px-[--10px] py-[--sy-10px] outline-none border-none rounded-[--5px] bg-[#484848]" />
            </div>
            <div className=" flex gap-[--27px]">
              <div className=" flex flex-col gap-[--sy-8px] z-[1] relative">
                <label className=" font-semibold ">Expiry Date</label>
                <CardExpiryElement className="px-[--10px] py-[--sy-10px] outline-none border-none rounded-[--5px] bg-[#484848] w-[6vw] placeholder:text-center" />
              </div>
              <div className=" flex flex-col gap-[--sy-8px] z-[1] relative">
                <label className=" font-semibold ">CVV</label>
                <CardCvcElement className=" px-[--10px] py-[--sy-10px] outline-none border-none rounded-[--5px] bg-[#484848] w-[4vw] placeholder:text-center" />
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
              <span className="text-[#F8F24B] z-[1] relative">
                Terms & Agreements
              </span>
            </label>
          </div>
          <button
            onClick={handleSubmit}
            className=" w-full text-black rounded-[--33px] relative z-[1] bg-[#F8F24B] py-[--sy-13px] font-bold"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

const Page = ({ params }: { params: { checkout: string } }) => {
  return (
    <Elements stripe={stripePromise}>
      <Checkout params={params} />
    </Elements>
  );
};

export default Page;
