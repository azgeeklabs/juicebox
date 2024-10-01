"use client";
import React, { useEffect, useState } from "react";
import styles from "./NotificationWindow.module.css";
import Link from "next/link";
import { useAuth } from "@/app/_context/AuthContext";

const NotificationWindow = () => {
  const { user } = useAuth();
  const [openNotificationWindow, setOpenNotificationWindow] = useState(false);
  const toggleNotificationWindow = () => {
    setOpenNotificationWindow(!openNotificationWindow);
  };
  const [notifications, setNotifications] = useState([]);
  async function getNotifications() {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/users/get-all-user-notifications`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${user?.token}`,
        },
      }
    );
    const data = await res.json();
    console.log(data);
    setNotifications(data.data);
  }

  useEffect(() => {
    getNotifications();
  }, []);

  return (
    <div className="relative">
      {/* Notification button */}
      <button
        className={styles.notificationBtn + " notificationBtn"}
        type="button"
        onClick={toggleNotificationWindow}
      >
        <svg viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M9.16541 0C10.1887 0 11.031 0.764257 11.1374 1.74555C10.4428 2.44943 10.0154 3.41079 10.0154 4.47059C10.0154 6.631 11.7914 8.38235 13.9821 8.38235C14.3761 8.38235 14.7567 8.32569 15.116 8.22019L15.1154 12.8529H15.3987C16.4941 12.8529 17.3821 13.7286 17.3821 14.8088C17.3821 15.889 16.4941 16.7647 15.3987 16.7647L12.0885 16.7651C11.6216 18.0672 10.3623 19 8.88208 19C7.40184 19 6.14254 18.0672 5.67569 16.7651L2.36541 16.7647C1.27005 16.7647 0.38208 15.889 0.38208 14.8088C0.38208 13.7286 1.27005 12.8529 2.36541 12.8529H2.64875V7.82353C2.64875 5.21719 4.29359 2.9897 6.61544 2.09551L6.61541 1.95588C6.61541 0.911685 7.44517 0.0586026 8.48993 0.00289064L8.59875 0H9.16541ZM13.9821 1.67647C15.5469 1.67647 16.8154 2.92744 16.8154 4.47059C16.8154 6.01374 15.5469 7.26471 13.9821 7.26471C12.4173 7.26471 11.1487 6.01374 11.1487 4.47059C11.1487 2.92744 12.4173 1.67647 13.9821 1.67647ZM9.16541 1.11765H8.59875C8.19245 1.11765 7.85274 1.39877 7.76869 1.77452C8.13054 1.70996 8.50234 1.67647 8.88208 1.67647C9.26182 1.67647 9.63362 1.70995 9.99463 1.7741C9.91142 1.39876 9.57171 1.11765 9.16541 1.11765Z"
            fill="#F8F24B"
          />
        </svg>
      </button>
      {/* Notification window */}
      <div
        className={
          openNotificationWindow
            ? styles.notification_window + " notification_window " + styles.open
            : styles.notification_window + " notification_window "
        }
      >
        <div className=" flex justify-between items-center py-[--sy-9px]">
          <h3 className=" font-bold text-[--16px] text-[#F8F24B] leading-[19.36px]">
            Notifications
          </h3>
          <Link
            href={"#"}
            className=" leading-[14.52px] text-[--12px] font-medium"
          >
            View All
          </Link>
        </div>
        <div className={styles.tabs_content + " tabs-stage"}>
          <div id="Alerts" className="tab space-y-4 py-[--sy-8px]">
            {notifications?.map((n: any, i: any) => {
              return (
                <div key={i} className={styles.notification_item}>
                  <p className=" font-bold text-[--10px] mb-[--sy-12px] leading-[12.1px]">
                    {n.serviceId.type.replace(/service/ig,"")} Service update! Check it out now!
                  </p>
                  <div className=" flex items-center gap-[--9px]">
                    <span className=" font-medium text-[--10px] leading-[12.1px] px-[--9px] py-[--sy-5px] rounded-[--55px] bg-[#F8F24B] text-[#1D1D1D]">
                      Services
                    </span>
                    <span className="text-[--10px] leading-[12.1px]">
                      10 mins ago
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationWindow;
