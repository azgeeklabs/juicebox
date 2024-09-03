"use client";
import { Divider } from "@mui/material";
import Link from "next/link";
import React from "react";
import { useAuth } from "../_context/AuthContext";
import { useFormik, FormikHelpers } from "formik";
import * as Yup from "yup";

interface FormValues {
  email: string;
  password: string;
}

const Page = () => {
  const { login } = useAuth();

  const initialValues: FormValues = {
    email: "",
    password: "",
  };

  const onSubmit = async (
    values: FormValues,
    { setSubmitting }: FormikHelpers<FormValues>
  ) => {
    console.log(values);
    try {
      await login(values);
    } catch (error) {
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const handleGoogleLogin = async () => {
    // await window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/google`;
    // const response = await fetch(
    //   `${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/success`
    // );
    // const data = await response.json();
  };

  const { values, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues,
    onSubmit: (values, helpers) => onSubmit(values, helpers),
  });

  return (
    <div className=" bg-[#181818] h-full w-full grid place-items-center grid-cols-2 items-center gap-x-[--102px] px-[240px]">
      <div className="  col-span-1">
        <h1 className="text-[#F8F24B] text-[--40px] font-semibold mb-[-sy-28px]">
          Welcome Back!
        </h1>
        <p className="text-[--20px] font-medium mb-[--sy-80px]">
          You have new updates! Log back in to check out your ongoing projects!
        </p>
        <div className=" flex flex-col gap-[--sy-19px]">
          <div className=" bg-[#F8F24B] rounded-[--48px] px-[--40px] py-[--sy-22px] font-bold flex justify-between items-center text-[--17px] text-black">
            <h4>John Website</h4>
            <svg
              className="w-[--18px] h-[--18px]"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.375 13.0054H10.0417V8.00537H8.375V13.0054ZM9.20833 6.3387C9.44444 6.3387 9.6425 6.2587 9.8025 6.0987C9.9625 5.9387 10.0422 5.74093 10.0417 5.50537C10.0411 5.26982 9.96111 5.07204 9.80167 4.91204C9.64222 4.75204 9.44444 4.67204 9.20833 4.67204C8.97222 4.67204 8.77445 4.75204 8.615 4.91204C8.45556 5.07204 8.37556 5.26982 8.375 5.50537C8.37444 5.74093 8.45445 5.93898 8.615 6.09954C8.77556 6.26009 8.97333 6.33982 9.20833 6.3387ZM9.20833 17.172C8.05556 17.172 6.97222 16.9531 5.95833 16.5154C4.94445 16.0776 4.0625 15.484 3.3125 14.7345C2.5625 13.9851 1.96889 13.1031 1.53167 12.0887C1.09445 11.0743 0.875557 9.99093 0.875001 8.83871C0.874445 7.68648 1.09333 6.60315 1.53167 5.58871C1.97 4.57426 2.56361 3.69232 3.3125 2.94287C4.06139 2.19343 4.94334 1.59982 5.95833 1.16204C6.97333 0.72426 8.05667 0.505371 9.20833 0.505371C10.36 0.505371 11.4433 0.72426 12.4583 1.16204C13.4733 1.59982 14.3553 2.19343 15.1042 2.94287C15.8531 3.69232 16.4469 4.57426 16.8858 5.58871C17.3247 6.60315 17.5433 7.68648 17.5417 8.83871C17.54 9.99093 17.3211 11.0743 16.885 12.0887C16.4489 13.1031 15.8553 13.9851 15.1042 14.7345C14.3531 15.484 13.4711 16.0779 12.4583 16.5162C11.4456 16.9545 10.3622 17.1732 9.20833 17.172Z"
                fill="#181818"
              />
            </svg>
          </div>
          <div className=" bg-[#F8F24B] rounded-[--48px] px-[--40px] py-[--sy-22px] font-bold flex justify-between items-center text-[--17px] text-black">
            <h4>White Label</h4>
            <svg
              className="w-[--18px] h-[--18px]"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.375 13.0054H10.0417V8.00537H8.375V13.0054ZM9.20833 6.3387C9.44444 6.3387 9.6425 6.2587 9.8025 6.0987C9.9625 5.9387 10.0422 5.74093 10.0417 5.50537C10.0411 5.26982 9.96111 5.07204 9.80167 4.91204C9.64222 4.75204 9.44444 4.67204 9.20833 4.67204C8.97222 4.67204 8.77445 4.75204 8.615 4.91204C8.45556 5.07204 8.37556 5.26982 8.375 5.50537C8.37444 5.74093 8.45445 5.93898 8.615 6.09954C8.77556 6.26009 8.97333 6.33982 9.20833 6.3387ZM9.20833 17.172C8.05556 17.172 6.97222 16.9531 5.95833 16.5154C4.94445 16.0776 4.0625 15.484 3.3125 14.7345C2.5625 13.9851 1.96889 13.1031 1.53167 12.0887C1.09445 11.0743 0.875557 9.99093 0.875001 8.83871C0.874445 7.68648 1.09333 6.60315 1.53167 5.58871C1.97 4.57426 2.56361 3.69232 3.3125 2.94287C4.06139 2.19343 4.94334 1.59982 5.95833 1.16204C6.97333 0.72426 8.05667 0.505371 9.20833 0.505371C10.36 0.505371 11.4433 0.72426 12.4583 1.16204C13.4733 1.59982 14.3553 2.19343 15.1042 2.94287C15.8531 3.69232 16.4469 4.57426 16.8858 5.58871C17.3247 6.60315 17.5433 7.68648 17.5417 8.83871C17.54 9.99093 17.3211 11.0743 16.885 12.0887C16.4489 13.1031 15.8553 13.9851 15.1042 14.7345C14.3531 15.484 13.4711 16.0779 12.4583 16.5162C11.4456 16.9545 10.3622 17.1732 9.20833 17.172Z"
                fill="#181818"
              />
            </svg>
          </div>
          <div className=" bg-[#F8F24B] rounded-[--48px] px-[--40px] py-[--sy-22px] font-bold flex justify-between items-center text-[--17px] text-black">
            <h4>John Website</h4>
            <svg
              className="w-[--18px] h-[--18px]"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.375 13.0054H10.0417V8.00537H8.375V13.0054ZM9.20833 6.3387C9.44444 6.3387 9.6425 6.2587 9.8025 6.0987C9.9625 5.9387 10.0422 5.74093 10.0417 5.50537C10.0411 5.26982 9.96111 5.07204 9.80167 4.91204C9.64222 4.75204 9.44444 4.67204 9.20833 4.67204C8.97222 4.67204 8.77445 4.75204 8.615 4.91204C8.45556 5.07204 8.37556 5.26982 8.375 5.50537C8.37444 5.74093 8.45445 5.93898 8.615 6.09954C8.77556 6.26009 8.97333 6.33982 9.20833 6.3387ZM9.20833 17.172C8.05556 17.172 6.97222 16.9531 5.95833 16.5154C4.94445 16.0776 4.0625 15.484 3.3125 14.7345C2.5625 13.9851 1.96889 13.1031 1.53167 12.0887C1.09445 11.0743 0.875557 9.99093 0.875001 8.83871C0.874445 7.68648 1.09333 6.60315 1.53167 5.58871C1.97 4.57426 2.56361 3.69232 3.3125 2.94287C4.06139 2.19343 4.94334 1.59982 5.95833 1.16204C6.97333 0.72426 8.05667 0.505371 9.20833 0.505371C10.36 0.505371 11.4433 0.72426 12.4583 1.16204C13.4733 1.59982 14.3553 2.19343 15.1042 2.94287C15.8531 3.69232 16.4469 4.57426 16.8858 5.58871C17.3247 6.60315 17.5433 7.68648 17.5417 8.83871C17.54 9.99093 17.3211 11.0743 16.885 12.0887C16.4489 13.1031 15.8553 13.9851 15.1042 14.7345C14.3531 15.484 13.4711 16.0779 12.4583 16.5162C11.4456 16.9545 10.3622 17.1732 9.20833 17.172Z"
                fill="#181818"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="col-span-1 w-full">
        <div className="bg-[#272727] px-[--40px] py-[--sy-60px] rounded-[--15px] w-full mb-[--sy-16px]">
          <form onSubmit={handleSubmit}>
            <h2 className=" text-center mb-[--sy-40px] text-[--32px]">Login</h2>
            <div className=" flex flex-col gap-[--sy-16px] mb-[--sy-50px]">
              <label htmlFor="Email" className=" font-medium">
                Email
              </label>
              <input
                type="email"
                id="Email"
                name="email"
                placeholder="John"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className=" outline-none px-[--14px] py-[--sy-10px] bg-[#484848] rounded-[--3px]"
              />
              <label htmlFor="Password" className=" font-medium">
                Password
              </label>
              <input
                type="password"
                id="Password"
                name="password"
                placeholder="***********"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className=" outline-none px-[--14px] py-[--sy-10px] bg-[#484848] rounded-[--3px]"
              />
            </div>
            <button
              className=" block rounded-[--39px] text-black bg-[--highlight-yellow] w-full py-[--sy-19px] font-bold mb-[--sy-40px]"
              type="submit"
            >
              Log in
            </button>
          </form>
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
          <h2 className="text-[--20px] font-medium text-center mb-[--sy-32px]">
            Log in with:
          </h2>{" "}
          <div className=" flex flex-col gap-[--sy-16px] w-full">
            <button
              className=" flex items-center justify-center gap-[--15px] bg-[#353535] rounded-[--7px] grow py-[--sy-12px]"
              onClick={handleGoogleLogin}
            >
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
        <p className=" text-center text-[#F8F24B]">
          Don't have an account?{" "}
          <Link href={"/sign-up"} className="underline font-bold">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Page;
