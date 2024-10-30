"use client";
import { Divider } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import { useAuth } from "../_context/AuthContext";
import { useFormik, FormikHelpers } from "formik";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import * as Yup from "yup";
import { useGoogleLogin } from "@react-oauth/google";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { AxiosError } from "axios";
import image from "@/public/assets/bg-1.svg";

interface FormValues {
  email: string;
  password: string;
}

const Page = () => {
  const { login, googleLogin } = useAuth();
  const router = useRouter();
  const [forgetPassEmail, setForgetPassEmail] = useState<string>("");
  const [forgetModal, setForgetModal] = useState<boolean>(false);
  const [forgetErrorMsg, setForgetErrorMsg] = useState<string>("");
  const [resetCode, setResetCode] = useState<string>("");
  const [resetModal, setResetModal] = useState<boolean>(false);
  const [resetCodeMsg, setResetCodeMsg] = useState<string>("");
  const [resetCodeEmail, setResetCodeEmail] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [newPasswordModal, setNewPasswordModal] = useState<boolean>(false);
  const [resetPassMsg, setResetPassMsg] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const initialValues: FormValues = {
    email: "",
    password: "",
  };

  const onSubmit = async (
    values: FormValues,
    { setSubmitting }: FormikHelpers<FormValues>
  ) => {
    console.log(values);
    setIsLoading(true);
    try {
      await login(values);
    } catch (error) {
      console.error(error);
      if ((error as any)?.response?.data.message) {
        toast.error(
          (error as any)?.response?.data.message || "An error occurred"
        );
      }

      if (error instanceof AxiosError) {
        toast.error(
          error?.response?.data.errors[0]?.msg || "An error occurred"
        );
        toast.error(error?.response?.data.message || "An error occurred");
      } else {
        toast.error("An unexpected error occurred");
      }
    } finally {
      setIsLoading(false);
      setSubmitting(false);
    }
  };

  async function forgetPass() {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/forgot-password`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: forgetPassEmail, // assuming you need to pass the user's email for password recovery
          }),
        }
      );

      // Parse the response into JSON format
      const data = await response.json();

      // Check if the response contains a specific error message
      if (data?.status == "Success") {
        console.log(data);
        setForgetPassEmail("");
        setForgetErrorMsg("");
        setResetModal(true);
        setForgetModal(false);
      } else {
        console.log(data);
        setForgetErrorMsg(data?.message);
        setForgetPassEmail("");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }
  async function resetCodeFunc() {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/verify-reset-code`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            resetCode: resetCode, // assuming you need to pass the user's email for password recovery
          }),
        }
      );

      // Parse the response into JSON format
      const data = await response.json();
      console.log(data);

      // Check if the response contains a specific error message
      if (data?.status == "Success") {
        setResetCode("");
        setResetCodeMsg("");
        setNewPasswordModal(true);
        setResetModal(false);
      } else {
        setResetCode("");
        setResetCodeMsg(data?.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }
  async function resetPass() {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/reset-password`,
        {
          method: "put",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: resetCodeEmail,
            newPassword: newPassword, // assuming you need to pass the user's email for password recovery
          }),
        }
      );

      // Parse the response into JSON format
      const data = await response.json();
      console.log(data);

      // Check if the response contains a specific error message
      if (data?.status == "success") {
        setResetPassMsg("");
        setNewPassword("");
        setResetCodeEmail("");
        setNewPasswordModal(false);
      } else if (data?.status == "fail") {
        setResetPassMsg(data?.message);
        setResetCodeEmail("");
        setNewPassword("");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleGoogleLogin = useGoogleLogin({
    onSuccess: async (response: any) => {
      try {
        if (response?.access_token) {
          setIsLoading(true);
          const userInfoResponse = await fetch(
            "https://www.googleapis.com/oauth2/v3/userinfo",
            {
              headers: {
                Authorization: `Bearer ${response.access_token}`,
              },
            }
          )
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              const res = fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/with-google`,
                {
                  method: "POST",
                  body: JSON.stringify({
                    sub: data.sub,
                    email: data.email,
                    family_name: data.family_name,
                    given_name: data.given_name,
                    email_verified: data.email_verified,
                    // name: data.name,
                    picture: data.picture,
                  }),
                  headers: {
                    "Content-Type": "application/json",
                  },
                }
              )
                .then((response) => response.json())
                .then((response) => {
                  console.log(response, "post google");
                  console.log(response?.message);
                  if (response?.token) {
                    googleLogin(response);
                  } else {
                    console.log("error");
                  }
                })
                .catch((error) => console.error(error))
                .finally(() => setIsLoading(false));
              // try {
              //   // Fetch the picture as a blob
              //   const pictureResponse = fetch(data?.picture, {
              //     mode: "no-cors",
              //   })
              //     .then((pictureBlob) => {
              //       console.log(pictureBlob);
              //       const picBlob = pictureBlob.blob();
              //       console.log(picBlob);

              //       // Convert the blob to a File
              //       const pictureFile = new File(
              //         [picBlob as any],
              //         "profile_picture.jpg",
              //         {
              //           type: pictureBlob.type,
              //         }
              //       );
              //       console.log(pictureFile);

              //       // Create a FormData object to include the file
              //       const formData = new FormData();
              //       formData.append("sub", data.sub);
              //       formData.append("email", data.email);
              //       formData.append("family_name", data.family_name);
              //       formData.append("given_name", data.given_name);
              //       // formData.append("email_verified", data.email_verified);
              //       // formData.append("name", data.name);
              //       formData.append("picture", pictureFile);

              //       const res = fetch(
              //         `${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/with-google`,
              //         {
              //           method: "POST",

              //           body: formData,
              //           headers: {
              //             "Content-Type": "multipart/form-data",
              //           },
              //         }
              //       )
              //         .then((res) => res.json())
              //         .then((res) => {
              //           console.log(res, "post google");
              //           console.log(res?.data?.message);
              //           if (res?.data?.message == "loged in successfully!") {
              //           }
              //         })
              //         .catch((error) => console.error(error));
              //     })
              //     .catch((error) => console.error(error));
              // } catch (error) {
              //   console.log(error);
              // }
            })
            .catch((error) => console.error(error));
          // const userInfoResponseJson = await userInfoResponse.json();
          // // if (userInfoResponse?.name) {
          // console.log(userInfoResponseJson);
          // }
        } else {
          console.error("Access token is null or undefined");
          console.error(response);
        }
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    },
  });

  const {
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    errors,
    touched,
    isValid,
    dirty,
    setFieldValue,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values, helpers) => onSubmit(values, helpers),
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <img
          src={image.src}
          className="animate-pulse animat w-[--313px]"
          alt="logo"
        />
      </div>
    );
  }

  return (
    <div className=" bg-[#181818] h-full w-full grid place-items-center grid-cols-2 items-center gap-x-[--102px] px-[240px]">
      <div className="  col-span-1">
        <div className="flex justify-center items-center">
          <img src={image.src} className="w-[--542px]" alt="logo" />
        </div>
        <h1 className="text-[#F8F24B] text-[--60px] font-semibold mb-[-sy-28px]">
          Welcome Back!
        </h1>
        <p className="text-[--29px] font-medium mb-[--sy-80px]">
          You have new updates! Log back in to check out your ongoing projects!
        </p>
        <div className="relative flex flex-col gap-[--sy-19px]">
          {/* <div className=" bg-[#F8F24B] rounded-[--48px] px-[--40px] py-[--sy-22px] font-bold flex justify-between items-center text-[--17px] text-black">
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
          </div> */}
        </div>
      </div>
      <div className="col-span-1 w-full">
        <div className="bg-[#272727] px-[--40px] py-[--sy-60px] rounded-[--15px] w-full mb-[--sy-16px]">
          <form onSubmit={handleSubmit}>
            <h2 className=" text-center mb-[--sy-40px] text-[--32px]">Login</h2>
            <div className=" flex flex-col gap-[--sy-16px] mb-[--sy-15px]">
              <label htmlFor="Email" className=" font-medium">
                Email
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="Email"
                  name="email"
                  placeholder="John"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`${
                    errors.email && touched.email
                      ? "border-red-900 border-[2px]"
                      : ""
                  } w-full outline-none px-[--14px] py-[--sy-10px] bg-[#484848] rounded-[--3px]`}
                />
                {errors.email && touched.email ? (
                  <div className="absolute top-1/2 -translate-y-1/2 right-[--8px]">
                    <ErrorOutlineIcon
                      sx={{
                        color: "#991b1b",
                      }}
                    />
                  </div>
                ) : null}
              </div>
              {errors.email && touched.email ? (
                <p className=" text-red-800 font-semibold text-[--14px] -translate-y-[--sy-10px] pl-[--6px]">
                  {errors.email}
                </p>
              ) : null}
              <label htmlFor="Password" className=" font-medium">
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  id="Password"
                  name="password"
                  placeholder="***********"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`${
                    errors.password && touched.password
                      ? "border-red-900 border-[2px]"
                      : ""
                  } w-full outline-none px-[--14px] py-[--sy-10px] bg-[#484848] rounded-[--3px]`}
                />
                {errors.password && touched.password ? (
                  <div className="absolute top-1/2 -translate-y-1/2 right-[--8px]">
                    <ErrorOutlineIcon
                      sx={{
                        color: "#991b1b",
                      }}
                    />
                  </div>
                ) : null}
              </div>
              {errors.password && touched.password ? (
                <p className=" text-red-800 font-semibold text-[--14px] -translate-y-[--sy-10px] pl-[--6px]">
                  {errors.password}
                </p>
              ) : null}
            </div>
            <p
              onClick={() => setForgetModal(true)}
              className=" w-fit ml-auto cursor-pointer underline font-medium text-[--16px] tracking-tight mb-[--sy-25px]"
            >
              Forget Password?
            </p>
            <button
              disabled={!(isValid && dirty)}
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
              onClick={() => handleGoogleLogin()}
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
      <div
        className={`${
          forgetModal ? "absolute inset-0 flex overflow-hidden" : " hidden"
        }  flex justify-center items-center bg-transparent backdrop-blur-sm`}
      >
        <div className=" py-[--sy-15px] px-[--40px] rounded-[--12px] bg-[#272727] !min-w-[clamp(29vw,_30vw,_1000px)] min-h-[clamp(14vw,_15vw,_600px)] grid place-items-center relative">
          <div className=" w-full">
            <label htmlFor="email" className=" mb-[--sy-10px] block">
              Enter Your Email
            </label>
            <input
              type="text"
              id="email"
              value={forgetPassEmail}
              onChange={(e) => setForgetPassEmail(e.target.value)}
              className="w-full focus-within:border-[1px] outline-none mb-[--sy-30px] focus-within:border-solid focus-within:border-[#F8F24B] rounded-[--4px] bg-[#484848] placeholder:text-gray-400 py-[--sy-8px] px-[--14px]"
              placeholder="Email"
            />
            {forgetErrorMsg ? (
              <p className=" -translate-y-[--sy-25px] ml-[--2px] text-red-800">
                {forgetErrorMsg}
              </p>
            ) : null}
            <button
              onClick={() => forgetPass()}
              className=" w-fit mx-auto py-[--sy-6px] px-[--10px] rounded-[--4px] cursor-pointer text-black font-semibold bg-[#cac63d] flex justify-center items-center"
            >
              Confirm
            </button>
          </div>
          <span
            className=" text-[#F8F24B] font-medium text-[--14px] absolute right-[--12px] top-[--sy-12px] cursor-pointer"
            onClick={() => setForgetModal(false)}
          >
            Close
          </span>
        </div>
      </div>
      <div
        className={`${
          resetModal ? "absolute inset-0 flex overflow-hidden" : " hidden"
        } justify-center items-center bg-transparent backdrop-blur-sm`}
      >
        <div className=" py-[--sy-15px] px-[--40px] rounded-[--12px] bg-[#272727] !min-w-[clamp(29vw,_30vw,_1000px)] min-h-[clamp(14vw,_15vw,_600px)] grid place-items-center relative">
          <div className=" w-full">
            <label htmlFor="resetCode" className=" mb-[--sy-10px] block">
              Enter the reset code sent to your email
            </label>
            <input
              type="text"
              id="resetCode"
              value={resetCode}
              onChange={(e) => setResetCode(e.target.value)}
              className="w-full focus-within:border-[1px] outline-none mb-[--sy-30px] focus-within:border-solid focus-within:border-[#F8F24B] rounded-[--4px] bg-[#484848] placeholder:text-gray-400 py-[--sy-8px] px-[--14px]"
              placeholder="Reset Code"
            />
            {resetCodeMsg ? (
              <p className=" -translate-y-[--sy-25px] ml-[--2px] text-red-800">
                {resetCodeMsg}
              </p>
            ) : null}
            <button
              onClick={() => resetCodeFunc()}
              className=" w-fit mx-auto py-[--sy-6px] px-[--10px] rounded-[--4px] cursor-pointer text-black font-semibold bg-[#cac63d] flex justify-center items-center"
            >
              Confirm
            </button>
          </div>
          <span
            className=" text-[#F8F24B] font-medium text-[--14px] absolute right-[--12px] top-[--sy-12px] cursor-pointer"
            onClick={() => setResetModal(false)}
          >
            Close
          </span>
        </div>
      </div>
      <div
        className={`${
          newPasswordModal ? "absolute inset-0 flex overflow-hidden" : " hidden"
        } justify-center items-center bg-transparent backdrop-blur-sm`}
      >
        <div className=" py-[--sy-15px] px-[--40px] rounded-[--12px] bg-[#272727] !min-w-[clamp(29vw,_30vw,_1000px)] min-h-[clamp(14vw,_15vw,_600px)] grid place-items-center relative">
          <div className=" w-full">
            <div>
              <label htmlFor="email" className=" mb-[--sy-10px] block">
                Enter your email
              </label>
              <input
                type="text"
                id="email"
                value={resetCodeEmail}
                onChange={(e) => setResetCodeEmail(e.target.value)}
                className="w-full focus-within:border-[1px] outline-none mb-[--sy-20px] focus-within:border-solid focus-within:border-[#F8F24B] rounded-[--4px] bg-[#484848] placeholder:text-gray-400 py-[--sy-8px] px-[--14px]"
                placeholder="Email"
              />
            </div>
            <div className=" mb-[--sy-35px]">
              <label htmlFor="password" className=" mb-[--sy-10px] block">
                Enter your new password
              </label>
              <input
                type="password"
                id="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full focus-within:border-[1px] outline-none focus-within:border-solid focus-within:border-[#F8F24B] rounded-[--4px] bg-[#484848] placeholder:text-gray-400 py-[--sy-8px] px-[--14px]"
                placeholder="********"
              />
            </div>
            {resetPassMsg ? (
              <p className=" -translate-y-[--sy-25px] ml-[--2px] text-red-800">
                {resetPassMsg}
              </p>
            ) : null}
            <button
              onClick={() => resetPass()}
              className=" w-fit mx-auto py-[--sy-6px] px-[--10px] rounded-[--4px] cursor-pointer text-black font-semibold bg-[#cac63d] flex justify-center items-center"
            >
              Reset Password
            </button>
          </div>
          <span
            className=" text-[#F8F24B] font-medium text-[--14px] absolute right-[--12px] top-[--sy-12px] cursor-pointer"
            onClick={() => setNewPasswordModal(false)}
          >
            Close
          </span>
        </div>
      </div>
    </div>
  );
};

export default Page;
