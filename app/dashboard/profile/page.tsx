"use client";
import React, { useEffect, useState } from "react";
import styles from "./profile.module.css";
import { useRouter } from "next/navigation";
import Image from "next/image";
import profile from "../../../public/assets/profile.png";
import { useAuth } from "@/app/_context/AuthContext";
import { jwtDecode } from "jwt-decode";
import { useFormik } from "formik";
import toast from "react-hot-toast";
import * as Yup from "yup";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

const Page = () => {
  const { user, logout } = useAuth();
  console.log(user);

  const router = useRouter();
  const [userData, setUserData] = useState<any>(null);
  async function getMe() {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/users/get-me`, {
        credentials: 'include',  // Important to include cookies in the request
      }
      
    );
    const data = await response.json();
    console.log(data);
    if (
      data.message == "User recently changed his password. please login again.."
    ) {
      toast("Password recently changed. Please login again!", {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
      logout();
    }
    setUserData(data.data);
  }

  async function updateMe(values: any) {
    // Create an object with only the changed fields
    const changedValues = Object.keys(values).reduce((acc, key) => {
      if (values[key] !== "" && values[key] !== userData[key]) {
        acc[key] = values[key];
      }
      return acc;
    }, {} as Record<string, any>);

    // Only send the request if there are changed values
    if (Object.keys(changedValues).length > 0) {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/users/update-me`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify(changedValues),
        }
      );
      const res = await response.json();
      console.log(res);
      if (res.message == "User updated") {
        setUserData({ ...userData, ...changedValues });
        formik.resetForm();
        toast("Profile updated successfully!", {
          icon: "👏",
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      } else {
        toast("Failed to update profile", {
          icon: "🚨",
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      }
    } else {
      console.log("No changes to update");
    }
  }
  const validationSchema = Yup.object().shape({
    currentPassword: Yup.string()
      .min(8, "Password must be at least 8 characters long")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .matches(/\d/, "Password must contain at least one number")
      .matches(
        /[@$!%*?&]/,
        "Password must contain at least one special character"
      )
      .required("Password is required"),
    newPassword: Yup.string()
      .min(8, "Password must be at least 8 characters long")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .matches(/\d/, "Password must contain at least one number")
      .matches(
        /[@$!%*?&]/,
        "Password must contain at least one special character"
      )
      .required("Password is required"),
  });

  async function updatePassword(values: any) {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/users/change-my-password`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(values),
      }
    );
    const data = await response.json();
    console.log(data);
    if (data.message == "Password updated successfully") {
      passwordFormik.resetForm();
      toast("Password updated successfully!", {
        icon: "🔒",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    } else {
      toast(data.message, {
        icon: "🚨",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    }
  }

  const formik = useFormik({
    initialValues: {
      firstName: userData?.firstName || "",
      lastName: userData?.lastName || "",
      email: userData?.email || "",
      phoneNumber: userData?.phoneNumber || "",
      address: userData?.address || "",
      DOB: userData?.DOB || "",
      country: userData?.country || "",
      org: userData?.org || "",
      city: userData?.city || "",
      role: userData?.role || "",
    },
    onSubmit: updateMe,
  });
  const passwordFormik = useFormik({
    initialValues: {
      currentPassword: "",
      newPassword: "",
    },
    validationSchema,
    onSubmit: updatePassword,
  });

  useEffect(() => {
    getMe();
  }, []);

  return (
    <>
      <div className={`${styles.profile} pt-[--sy-14px] h-full`}>
        <div className=" grid gap-[--24px] grid-cols-3 h-full">
          <div className=" col-span-1 rounded-[--15px] bg-[#353535] px-[--25px] pt-[--sy-18px] pb-[--sy-31px] relative h-full flex flex-col">
            <div className=" flex justify-between items-center mb-[--sy-31px]">
              <div className=" absolute -top-[30px] w-[--75px]">
                {userData?.avatar ? (
                  <Image
                    src={userData?.avatar}
                    width={75}
                    height={75}
                    alt="profile"
                    className="w-[--75px] rounded-full"
                  />
                ) : (
                  <div className=" w-[--75px] h-[--75px] rounded-full bg-black"></div>
                )}
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
              <h1 className=" text-[--24px] font-semibold">
                {userData?.firstName} {userData?.lastName}
              </h1>
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
                      className=" absolute left-1/2 -translate-x-1/2 w-[--13px] h-[--13px]"
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
                  className={`${styles.lock} w-[9px] h-[11px]`}
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
                  className={`${styles.lock} w-[9px] h-[11px]`}
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
                className={`${styles.hover} duration-300 transition-all bg-[#484848] rounded-[--37px] px-[--16px] py-[--sy-14px] flex justify-between items-center mb-[--sy-14px] cursor-pointer`}
                onClick={() => {
                  router.push("/dashboard/profile/billing");
                }}
              >
                <h4 className="text-[--13px] font-semibold">Billings</h4>
                <span className="bg-[#353535] rounded-full flex justify-center items-center p-[--6px] ">
                  <svg
                    className="duration-500 transition-all w-[10px] h-[10px]"
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
                className={`${styles.hover} duration-300 transition-all bg-[#484848] rounded-[--37px] px-[--16px] py-[--sy-14px] flex justify-between items-center mb-[--sy-14px] cursor-pointer`}
                onClick={() => {
                  router.push("/dashboard/profile/subscriptions");
                }}
              >
                <h4 className="text-[--13px] font-semibold">Subscriptions</h4>
                <span className="bg-[#353535] rounded-full flex justify-center items-center p-[--6px] ">
                  <svg
                    className="duration-500 transition-all w-[10px] h-[10px]"
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
                  className={`${styles.info} w-[17px] h-[18px]`}
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
            <div className="rounded-[--15px] bg-[#353535] px-[--34px] py-[--sy-14px] w-full">
              <div className="flex justify-between items-center mb-[--sy-10px]">
                <h2 className="text-[--24px] font-semibold">
                  Personal Information
                </h2>
                <button
                  onClick={() => formik.handleSubmit()}
                  className="bg-[--highlight-yellow] rounded-[--6px] px-[--20px] py-[--sy-8px] text-black text-[--14px] leading-[11.2px] font-bold"
                >
                  Edit
                </button>
              </div>
              <div className=" flex flex-col gap-[--sy-22px] w-full">
                <div className=" w-full flex justify-between items-center gap-[--42px]">
                  <div className=" w-full flex flex-col gap-[--sy-14px]">
                    <label className="text-[--14px] font-medium">
                      First Name
                    </label>
                    <input
                      placeholder={
                        userData?.firstName ? userData?.firstName : "John"
                      }
                      value={formik.values.firstName}
                      onChange={formik.handleChange}
                      name="firstName"
                      type="text"
                      className="outline-none placeholder:text-[#b1b1b1] block w-full px-[--12px] py-[--sy-5px] rounded-[--3px] border-none bg-[#484848]"
                    />
                  </div>
                  <div className=" w-full flex flex-col gap-[--sy-14px]">
                    <label className="text-[--14px] font-medium">
                      Last Name
                    </label>
                    <input
                      placeholder={
                        userData?.lastName ? userData?.lastName : "Doe"
                      }
                      value={formik.values.lastName}
                      onChange={formik.handleChange}
                      name="lastName"
                      type="text"
                      className="outline-none placeholder:text-[#b1b1b1] block w-full px-[--12px] py-[--sy-5px] rounded-[--3px] border-none bg-[#484848]"
                    />
                  </div>
                </div>
                <div className=" w-full flex justify-between items-center gap-[--42px]">
                  <div className=" w-full flex flex-col gap-[--sy-14px]">
                    <label className="text-[--14px] font-medium">Email</label>
                    <input
                      placeholder={
                        userData?.email ? userData?.email : "Johndoe@gmail.com"
                      }
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      name="email"
                      type="text"
                      className="outline-none placeholder:text-[#b1b1b1] block w-full px-[--12px] py-[--sy-5px] rounded-[--3px] border-none bg-[#484848]"
                    />
                  </div>
                  <div className=" w-full flex flex-col gap-[--sy-14px]">
                    <label className="text-[--14px] font-medium">
                      Phone Number
                    </label>
                    <input
                      placeholder={
                        userData?.phoneNumber
                          ? userData?.phoneNumber
                          : "+02 115 486 632 059"
                      }
                      value={formik.values.phoneNumber}
                      onChange={formik.handleChange}
                      name="phoneNumber"
                      type="text"
                      className="outline-none placeholder:text-[#b1b1b1] block w-full px-[--12px] py-[--sy-5px] rounded-[--3px] border-none bg-[#484848]"
                    />
                  </div>
                </div>
                <div className=" w-full flex justify-between items-center gap-[--42px]">
                  <div className=" w-full flex flex-col gap-[--sy-14px]">
                    <label className="text-[--14px] font-medium">Address</label>
                    <input
                      placeholder={
                        userData?.address
                          ? userData?.address
                          : "123, internet ST"
                      }
                      value={formik.values.address}
                      onChange={formik.handleChange}
                      name="address"
                      type="text"
                      className="outline-none placeholder:text-[#b1b1b1] block w-full px-[--12px] py-[--sy-5px] rounded-[--3px] border-none bg-[#484848]"
                    />
                  </div>
                  <div className=" w-full flex flex-col gap-[--sy-14px]">
                    <label className="text-[--14px] font-medium">
                      Date of birth
                    </label>
                    <input
                      placeholder={
                        userData?.DOB
                          ? userData?.DOB.split("T")[0]
                          : "15/20/1996"
                      }
                      name="DOB"
                      value={formik.values.DOB}
                      onChange={formik.handleChange}
                      type="text"
                      className="outline-none placeholder:text-[#b1b1b1] block w-full px-[--12px] py-[--sy-5px] rounded-[--3px] border-none bg-[#484848]"
                    />
                  </div>
                </div>
                <div className=" w-full flex justify-between items-center gap-[--42px]">
                  <div className=" w-full flex flex-col gap-[--sy-14px]">
                    <label className="text-[--14px] font-medium">Country</label>
                    <input
                      placeholder={
                        userData?.country ? userData?.country : "USA"
                      }
                      name="country"
                      type="text"
                      value={formik.values.country}
                      onChange={formik.handleChange}
                      className="outline-none placeholder:text-[#b1b1b1] block w-full px-[--12px] py-[--sy-5px] rounded-[--3px] border-none bg-[#484848]"
                    />
                  </div>
                  <div className=" w-full flex flex-col gap-[--sy-14px]">
                    <label className="text-[--14px] font-medium">City</label>
                    <input
                      placeholder={userData?.city ? userData?.city : "NYC"}
                      name="city"
                      type="text"
                      value={formik.values.city}
                      onChange={formik.handleChange}
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
                      placeholder={userData?.org ? userData?.org : "GEEKLABS"}
                      name="org"
                      type="text"
                      value={formik.values.org}
                      onChange={formik.handleChange}
                      className="outline-none placeholder:text-[#b1b1b1] block w-full px-[--12px] py-[--sy-5px] rounded-[--3px] border-none bg-[#484848]"
                    />
                  </div>
                  <div className=" w-full flex flex-col gap-[--sy-14px]">
                    <label className="text-[--14px] font-medium">Role</label>
                    <input
                      placeholder={userData?.role ? userData?.role : "CEO"}
                      name="role"
                      type="text"
                      value={formik.values.role}
                      onChange={formik.handleChange}
                      className="outline-none placeholder:text-[#b1b1b1] block w-full px-[--12px] py-[--sy-5px] rounded-[--3px] border-none bg-[#484848]"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-[--15px] bg-[#353535] px-[--34px] py-[--sy-24px] w-full h-full">
              <div className="flex justify-between items-center mb-[--sy-10px]">
                <h2 className="text-[--24px] font-semibold">
                  Password Information
                </h2>
                <button
                  onClick={() => passwordFormik.handleSubmit()}
                  className="bg-[--highlight-yellow] rounded-[--6px] px-[--20px] py-[--sy-8px] text-black text-[--14px] leading-[11.2px] font-bold"
                >
                  Change
                </button>
              </div>
              <div className=" flex flex-col gap-[--sy-22px] w-full">
                {userData && !userData.googleId ? (
                  <div className="w-full flex justify-between items-start gap-[--42px]">
                    <div className="w-full flex flex-col gap-[--sy-14px]">
                      <label className="text-[--14px] font-medium">
                        Current Password
                      </label>
                      <div className="relative">
                        <input
                          placeholder="**********"
                          value={passwordFormik.values.currentPassword}
                          onChange={passwordFormik.handleChange}
                          onBlur={passwordFormik.handleBlur}
                          type="password"
                          name="currentPassword"
                          className="outline-none placeholder:text-[#b1b1b1] block w-full px-[--12px] py-[--sy-5px] rounded-[--3px] border-none bg-[#484848]"
                        />
                        {passwordFormik.errors.currentPassword &&
                        passwordFormik.touched.currentPassword ? (
                          <div className="absolute top-1/2 -translate-y-1/2 right-[--8px]">
                            <ErrorOutlineIcon
                              sx={{
                                color: "#991b1b",
                              }}
                            />
                          </div>
                        ) : null}
                      </div>
                      {passwordFormik.errors.currentPassword &&
                      passwordFormik.touched.currentPassword ? (
                        <p className="text-red-800 font-semibold text-[--14px] -translate-y-[--sy-10px] pl-[--6px]">
                          {passwordFormik.errors.currentPassword}
                        </p>
                      ) : null}
                    </div>
                    <div className="w-full flex flex-col gap-[--sy-14px]">
                      <label className="text-[--14px] font-medium">
                        New Password
                      </label>
                      <div className="relative">
                        <input
                          placeholder="**********"
                          type="password"
                          name="newPassword"
                          value={passwordFormik.values.newPassword}
                          onChange={passwordFormik.handleChange}
                          onBlur={passwordFormik.handleBlur}
                          className="outline-none placeholder:text-[#b1b1b1] block w-full px-[--12px] py-[--sy-5px] rounded-[--3px] border-none bg-[#484848]"
                        />
                        {passwordFormik.errors.newPassword &&
                        passwordFormik.touched.newPassword ? (
                          <div className="absolute top-1/2 -translate-y-1/2 right-[--8px]">
                            <ErrorOutlineIcon
                              sx={{
                                color: "#991b1b",
                              }}
                            />
                          </div>
                        ) : null}
                      </div>
                      {passwordFormik.errors.newPassword &&
                      passwordFormik.touched.newPassword ? (
                        <p className="text-red-800 font-semibold text-[--14px] -translate-y-[--sy-10px] pl-[--6px]">
                          {passwordFormik.errors.newPassword}
                        </p>
                      ) : null}
                    </div>
                  </div>
                ) : null}
                <div className=" w-full flex justify-between items-start gap-[--42px]">
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

export default Page;
