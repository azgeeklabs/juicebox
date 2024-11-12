"use client";
import React, { useContext, useEffect, useRef, useState } from "react";
import styles from "./SubscribedServices.module.css";
import ServiceCard from "../serviceCard/ServiceCard";
import NotificationWindow from "./NotificationWindow";
import CustomBtn from "../btn/CustomBtn";
import classNames from "classnames";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/_context/AuthContext";
import { toast } from "react-hot-toast";
import { globalContext } from "@/app/_context/GlobalContext";

export default function SubscribedServices() {
  const router = useRouter();
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const {isCheckout} = useContext(globalContext)

  const profilePic = (
    <svg
      viewBox="0 0 42 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-[var(--42px)] w-[var(--42px)]"
    >
      <circle cx="20.691" cy="21.0001" r="20.691" fill="#1C1C1C" />
      <path
        d="M22.2142 28.3742C20.3074 28.1227 18.4214 27.7335 16.5709 27.2095C12.8194 26.1245 9.2209 24.3208 6.4297 21.5899C9.07731 19.0242 10.5236 17.5358 12.6377 14.5186C14.2062 12.2795 16.1785 8.31314 18.9641 7.37587C23.3305 5.90626 29.0854 7.70749 30.1287 12.596C30.5691 14.6621 30.5086 16.8038 30.1383 18.8745C29.9702 19.808 28.6785 28.9342 28.1344 28.9047C26.1575 28.796 24.1791 28.6412 22.2142 28.3742Z"
        fill="#F2D4CF"
      />
      <path
        d="M33.7172 31.4486C30.2959 33.8852 26.1606 35.1128 21.9641 34.9376C17.7675 34.7624 13.7489 33.1945 10.5427 30.4813L15.6097 28.3327C15.7648 28.2663 15.9164 28.1919 16.0638 28.1098L16.1811 28.0425C16.223 28.0184 16.2639 27.9933 16.3049 27.9672C16.9493 27.5572 17.4858 26.9983 17.8691 26.3376C18.3073 25.5802 18.4743 24.7317 18.5129 23.8621C18.5347 23.2767 18.5249 22.6901 18.5406 22.1034C18.5486 21.7792 18.5573 21.4547 18.5667 21.1298L18.7676 21.2398L19.2895 21.5349L22.3707 22.1788L25.5353 22.84L25.5093 26.1185L25.4968 27.7445L26.6529 28.2632L27.5601 28.6701L33.7172 31.4486Z"
        fill="#F2A196"
      />
      <path
        d="M25.5129 25.5943C25.2281 25.7558 24.9621 25.8268 24.7327 25.7937C23.2252 25.5745 20.3169 24.2781 18.5403 22.0135C18.5443 21.9057 18.5463 21.7982 18.5462 21.6909C18.5542 21.366 18.5629 21.0415 18.5723 20.7173L18.7731 20.8273L19.295 21.1224L22.3753 21.7652L25.5399 22.4265L25.5129 25.5943Z"
        fill="#E88870"
      />
      <path
        d="M16.065 19.4982C17.0259 19.534 17.8339 18.7842 17.8698 17.8233C17.9056 16.8624 17.1558 16.0544 16.1949 16.0185C15.234 15.9827 14.426 16.7326 14.3901 17.6934C14.3543 18.6543 15.1042 19.4623 16.065 19.4982Z"
        fill="#F2A196"
      />
      <path
        d="M16.6881 19.3165C17.6489 19.3524 18.4569 18.6025 18.4928 17.6416C18.5287 16.6808 17.7788 15.8728 16.8179 15.8369C15.8571 15.801 15.0491 16.5509 15.0132 17.5118C14.9773 18.4726 15.7272 19.2807 16.6881 19.3165Z"
        fill="#E88870"
      />
      <path
        d="M28.0493 15.5643C29.0953 19.7734 26.3541 24.7113 24.7852 24.6527C22.636 24.5725 17.4806 22.6615 16.4346 18.4523C15.3885 14.2432 17.1397 10.1857 20.3465 9.3881C23.5532 8.59055 27.0062 11.3563 28.0493 15.5643Z"
        fill="#F2A196"
      />
      <path
        d="M21.4634 18.6237C22.5373 18.6637 23.4404 17.8257 23.4805 16.7517C23.5206 15.6778 22.6825 14.7748 21.6086 14.7347C20.5346 14.6946 19.6316 15.5327 19.5915 16.6066C19.5514 17.6805 20.3895 18.5836 21.4634 18.6237Z"
        stroke="white"
        stroke-width="0.118241"
        stroke-miterlimit="10"
      />
      <path
        d="M26.9126 18.5197C27.9865 18.5597 28.8896 17.7216 28.9297 16.6477C28.9698 15.5738 28.1317 14.6708 27.0578 14.6307C25.9839 14.5906 25.0808 15.4287 25.0407 16.5026C25.0006 17.5765 25.8387 18.4796 26.9126 18.5197Z"
        stroke="white"
        stroke-width="0.118241"
        stroke-miterlimit="10"
      />
      <path
        d="M24.2973 9.88214C23.7858 11.7795 22.7641 13.3688 20.9628 14.4863C19.0184 15.7286 16.8337 15.8315 14.6346 16.183C14.7399 14.8433 14.8233 13.4076 15.5608 12.236C16.3956 10.9373 17.5827 9.9028 18.9834 9.25338C20.5273 8.52597 22.9006 7.84592 24.5833 8.45291C24.5182 8.93488 24.4227 9.41224 24.2973 9.88214Z"
        fill="#F2D4CF"
      />
      <path
        d="M24.2636 15.6176C24.2541 15.6531 24.9506 18.9586 24.9506 18.9586L23.6714 18.9108"
        stroke="#00214E"
        stroke-width="0.118241"
        stroke-miterlimit="10"
      />
      <path
        d="M25.4734 14.6167C26.2105 14.2754 27.05 14.2276 27.8211 14.483"
        stroke="#00214E"
        stroke-width="0.118241"
        stroke-miterlimit="10"
      />
      <path
        d="M19.8207 14.7851C20.3225 14.5527 20.8694 14.4337 21.4225 14.4366C21.9756 14.4396 22.5212 14.5643 23.0206 14.802"
        stroke="#00214E"
        stroke-width="0.118241"
        stroke-miterlimit="10"
      />
      <path
        d="M23.4814 16.7517L25.0358 16.6775"
        stroke="white"
        stroke-width="0.118241"
        stroke-miterlimit="10"
      />
      <path
        d="M33.7163 31.4491C30.2951 33.8856 26.1597 35.1132 21.9632 34.9381C17.7667 34.7629 13.748 33.1949 10.5418 30.4817L15.6089 28.3331C15.8502 28.2305 16.0827 28.1082 16.304 27.9676C16.3712 27.925 16.4384 27.8804 16.5027 27.8336C17.0602 27.4391 17.526 26.929 17.8683 26.3381C18.1273 25.8839 18.3067 25.3886 18.3984 24.8739C18.4681 24.9466 18.5415 25.0157 18.6182 25.0809C19.2284 25.5683 19.895 25.9807 20.6036 26.309C20.9477 26.4678 21.3004 26.6072 21.66 26.7266C22.7436 27.0869 23.8828 27.2505 25.024 27.2098C25.182 27.2034 25.3412 27.194 25.4993 27.1886L25.4952 27.709L25.494 27.7428L26.7135 28.2926L33.7163 31.4491Z"
        fill="#00214E"
      />
      <path
        d="M21.4382 19.9847C21.4528 19.9629 21.4718 19.9443 21.494 19.9303C21.5162 19.9162 21.5411 19.9069 21.567 19.9029C21.593 19.899 21.6195 19.9005 21.6449 19.9074C21.6703 19.9142 21.6939 19.9263 21.7144 19.9427C21.9216 20.1011 22.2987 20.4319 22.8473 20.563C23.5949 20.7406 24.2591 20.4641 24.4084 20.6643C24.4923 20.7771 24.3799 20.9062 24.1678 21.0704C23.9461 21.2233 23.6962 21.3303 23.4326 21.3852C23.1691 21.4401 22.8972 21.4419 22.6329 21.3903C21.9134 21.2281 21.4003 20.3676 21.4114 20.0708C21.4124 20.0402 21.4216 20.0105 21.4382 19.9847Z"
        fill="white"
      />
      <path
        d="M21.659 16.0332C22.2831 16.0616 22.2474 17.0165 21.623 16.9983L21.5943 16.9972C20.9702 16.9688 21.0058 16.0139 21.6303 16.0321L21.659 16.0332Z"
        fill="#00214E"
      />
      <path
        d="M26.8068 16.1573C27.386 16.179 27.3528 17.0693 26.7733 17.0528L26.7467 17.0518C26.1677 17.0251 26.2007 16.1398 26.7801 16.1564L26.8068 16.1573Z"
        fill="#00214E"
      />
    </svg>
  );

  const [finished, setFinished] = useState<any>([]);
  const { user } = useAuth();

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement> ) => {
    setIsDown(true);
    setStartX(e.pageX - e.currentTarget.offsetLeft);
    setScrollLeft(e.currentTarget.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDown(false);
  };

  const handleMouseUp = () => {
    setIsDown(false);
  };
  const scroll = (e: React.WheelEvent) => {
    if (carouselRef.current === null) return;
    if (e.deltaY == 0) return;
    e.preventDefault();
    carouselRef.current.scrollTo({
      left: carouselRef.current.scrollLeft + e.deltaY * 3,
      behavior: "smooth",
    });
  };


  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - e.currentTarget.offsetLeft;
    const walk = (x - startX) * 2; // Multiply by 2 for faster scrolling
    e.currentTarget.scrollLeft = scrollLeft - walk;
  };

  const [userData, setUserData] = useState<any>(null);
  async function getMe() {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/users/get-me`,
      {
        credentials: "include",
      }
    );
    const data = await response.json();
    console.log(data?.data);
    setUserData(data?.data);
  }




  async function getSubscriptions() {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/services/get-purchased-services`,
      {
        method: "GET",
        credentials: "include",
      }
    );
    const data = await response.json();
    console.log(data);
    setFinished(data.data);
  }

  useEffect(() => {
    getSubscriptions();
    getMe();
  }, []);

  useEffect(()=>{
    console.log(isCheckout);
    
      getSubscriptions();
  },[isCheckout])

  return (
    <div
      className={
        styles.subscribedServices + " flex justify-between items-center gap-x-2"
      }
    >
      {/* ===== Start Services Cards ===== */}
      <div
        className={classNames(
          styles.servicesCards,
          "flex items-center gap-[1vw] cursor-pointer overflow-x-hidden"
        )}
      >
        {/* Profile Card */}
        <div
          className={classNames(styles.profileCard, "flex items-center")}
          onClick={() => {
            router.push("/dashboard/profile");
          }}
        >
          <div className={classNames(styles.profilePic)}>{profilePic}</div>
          <div className={classNames(styles.profileInfo)} onClick={()=>router.replace("/dashboard/profile")}>
            <span className={classNames(styles.profileName)}>{userData?.firstName} {userData?.lastName}</span>
            <span className={classNames(styles.profileBalance)}>${userData?.balance}</span>
          </div>
        </div>

        {/* Services Cards */}
        <div
            className={`${styles.services} px-[--20px] py-[--sy-16px] w-full overflow-x-hidden cursor-pointer services h-full`} onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onWheel={scroll}
            ref={carouselRef}
          >
            <div className=" flex gap-[--8px] w-full">
            {finished?.map((s: any, i: any) => {
              return (
                <ServiceCard
                  title={(s?.service?.type ? s.service.type.replace(/service/gi, "") : "")}
                  phase="Ideation Phase"
                  timeleft={`${s?.service?.estimatedDuration} Days Left`}
                />
              );
            })}
            </div>
          </div>
        {/* Add Service Button */}
        <CustomBtn onClick={()=>router.push("/dashboard/services")}>
          <svg viewBox="0 0 19 19" xmlns="http://www.w3.org/2000/svg" onClick={()=>router.push("/dashboard/services")}>
            <path
              d="M1.88208 9.5H16.8821M9.38208 2V17"
              stroke="white"
              stroke-width="3.625"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </CustomBtn>
      </div>
      {/* ===== End Services Cards ===== */}
      {/* ===== Start Notifications Icon ===== */}
      <div className={classNames(styles.notificationsIcon, "cursor-pointer")}>
        <NotificationWindow />
      </div>
      {/* ===== End Notifications Icon ===== */}
    </div>
  );
}
