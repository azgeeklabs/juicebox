"use client";
import React, { useEffect, useState } from "react";
import "../../../../_components/dashboard/calender/Calender.css";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import dayjs from "dayjs";
import styles from "./BookACall.module.css";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { addOption } from "@/app/reducers/serviceSlice";
import axios from "axios";
import { useAuth } from "@/app/_context/AuthContext";
import toast from "react-hot-toast";
const Page = ({ params }: { params: { serviceId: string } }) => {
  const [hourVal, setHourVal] = useState("00");
  const [minuteVal, setMinuteVal] = useState("00");
  const [selectedDay, setSelectedDay] = useState<string>(
    `${new Date().getDate().toString()}${getOrdinal(new Date().getDate())}`
  );
  const [selectedMonth, setSelectedMonth] = useState<string>(
    `${(new Date().getMonth() + 1).toString()}`
  );
  const [selectedYear, setSelectedYear] = useState<string>(
    `${new Date().getFullYear().toString()}`
  );
  const [changedDate, setChangedDate] = useState<string>("");
  const [isChanged, setIsChanged] = useState<boolean>(false);

  const monthsDays = [
    {
      month: "January",
      days: Array.from(
        { length: 31 },
        (_, i) => `${i + 1}${getOrdinal(i + 1)}`
      ),
    },
    {
      month: "February",
      days: Array.from(
        { length: 28 },
        (_, i) => `${i + 1}${getOrdinal(i + 1)}`
      ),
    }, // 29 days for leap years
    {
      month: "March",
      days: Array.from(
        { length: 31 },
        (_, i) => `${i + 1}${getOrdinal(i + 1)}`
      ),
    },
    {
      month: "April",
      days: Array.from(
        { length: 30 },
        (_, i) => `${i + 1}${getOrdinal(i + 1)}`
      ),
    },
    {
      month: "May",
      days: Array.from(
        { length: 31 },
        (_, i) => `${i + 1}${getOrdinal(i + 1)}`
      ),
    },
    {
      month: "June",
      days: Array.from(
        { length: 30 },
        (_, i) => `${i + 1}${getOrdinal(i + 1)}`
      ),
    },
    {
      month: "July",
      days: Array.from(
        { length: 31 },
        (_, i) => `${i + 1}${getOrdinal(i + 1)}`
      ),
    },
    {
      month: "August",
      days: Array.from(
        { length: 31 },
        (_, i) => `${i + 1}${getOrdinal(i + 1)}`
      ),
    },
    {
      month: "September",
      days: Array.from(
        { length: 30 },
        (_, i) => `${i + 1}${getOrdinal(i + 1)}`
      ),
    },
    {
      month: "October",
      days: Array.from(
        { length: 31 },
        (_, i) => `${i + 1}${getOrdinal(i + 1)}`
      ),
    },
    {
      month: "November",
      days: Array.from(
        { length: 30 },
        (_, i) => `${i + 1}${getOrdinal(i + 1)}`
      ),
    },
    {
      month: "December",
      days: Array.from(
        { length: 31 },
        (_, i) => `${i + 1}${getOrdinal(i + 1)}`
      ),
    },
  ];

  function getOrdinal(n: number): string {
    const s = ["th", "st", "nd", "rd"],
      v = n % 100;
    return s[(v - 20) % 10] || s[v] || s[0];
  }
  const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMonth(e.target.value);
    setIsChanged(true);
  };

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 100 }, (_, i) =>
    (currentYear + i).toString()
  );

  const RightArrow = () => (
    <svg viewBox="0 0 11 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0.279785 2.15107L0.279785 14.2489C0.279785 15.7153 1.76769 16.5373 2.78199 15.6313L9.55453 9.5824C10.3419 8.87949 10.3419 7.52248 9.55453 6.81762L2.78002 0.768678C1.76769 -0.137296 0.279784 0.68472 0.279785 2.15107Z"
        fill="#616161"
      />
    </svg>
  );

  const LeftArrow = () => (
    <svg viewBox="0 0 11 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10.7202 2.15107L10.7202 14.2489C10.7202 15.7153 9.23231 16.5373 8.21801 15.6313L1.44547 9.5824C0.658107 8.87949 0.658107 7.52248 1.44547 6.81762L8.21998 0.768678C9.23231 -0.137296 10.7202 0.68472 10.7202 2.15107Z"
        fill="#616161"
      />
    </svg>
  );
  const { user } = useAuth();

  async function bookACall() {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/services/schedule-call`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user?.token}`,
          },
          body: JSON.stringify({
            serviceId: params.serviceId,
            date: `${
              Number(selectedDay.replace(/(st|nd|rd|th)$/i, "")) < 10
                ? "0" + Number(selectedDay.replace(/(st|nd|rd|th)$/i, ""))
                : Number(selectedDay.replace(/(st|nd|rd|th)$/i, ""))
            }-${
              Number(selectedMonth) < 10 ? "0" + selectedMonth : selectedMonth
            }-${selectedYear}`,
            time: `${hourVal}:${minuteVal}${
              Number(hourVal) >= 12 ? "PM" : "AM"
            }`,
          }),
        }
      );
      const data = await res.json();
      console.log(data);
      if (data.success) {
        toast.success(data.message, {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      } else {
        toast.error(data.message, {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      }
      route.replace("/dashboard/services");
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (selectedDay && selectedMonth && selectedYear) {
      setChangedDate(
        `${selectedYear}-${selectedMonth}-${parseInt(selectedDay)}`
      );
    }
  }, [selectedDay, selectedMonth, selectedYear]);
  const route = useRouter();
  const nextFunc = async () => {
    const itemsArray = [];
    if (isChanged) {
      itemsArray.push({
        name: "book a call",
        ans: `${
          Number(selectedDay.replace(/(st|nd|rd|th)$/i, "")) < 10
            ? "0" + Number(selectedDay.replace(/(st|nd|rd|th)$/i, ""))
            : Number(selectedDay.replace(/(st|nd|rd|th)$/i, ""))
        }-${
          Number(selectedMonth) < 10 ? "0" + selectedMonth : selectedMonth
        }-${selectedYear}`,
      });
      console.log(itemsArray);

      try {
        const data = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/api/v1/services/initialize-service`,
          {
            type: "book a call",
            totalSteps: 1,
            options: itemsArray,
          },
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Token ${
                typeof window !== "undefined" && localStorage.getItem("token")
              }`,
            },
          }
        );
        console.log(data);
        route.push("/dashboard/services");
      } catch (error) {
        console.log(error, "////////////error////////////");
      }
    }
  };
  return (
    <div
      className={`${styles.BookACall} flex w-full h-full justify-center items-center `}
    >
      {/* Container for the booking form */}
      <div>
        {/* Section with introductory text */}
        <div className="mb-[6vh]">
          <h2 className="font-semibold text-[--32px] mb-[--sy-16px] text-center">
            Excited to get started? <br />
            Book your appointment with us today!
          </h2>
          <p className="text-[--18px] text-center">
            Choose a date and time that works best for you and we’ll be there!
          </p>
        </div>
        {/* Grid layout for date and time selection */}
        <div className="grid grid-cols-3 gap-[--40px]">
          {/* Left column for date selection */}
          <div className="col-span-1">
            <h3 className="font-bold text-[--20px] mb-[--sy-24px]">
              Pick a date for your call
            </h3>
            <div className="mb-[2vh]">
              {/* Date selection inputs */}
              <label className="font-medium text-[--20px] mb-[--sy-16px] block">
                Date
              </label>
              <div className="flex gap-[--16px]">
                {/* Select inputs for day, month, and year */}
                <select
                  onChange={(e) => setSelectedDay(e.target.value)}
                  value={selectedDay}
                >
                  {/* Options dynamically generated based on selected month */}
                  {selectedMonth
                    ? monthsDays[parseInt(selectedMonth) - 1].days.map(
                        (day) => (
                          <option key={day} value={day}>
                            {day}
                          </option>
                        )
                      )
                    : monthsDays[0].days.map((day) => (
                        <option key={day} value={day}>
                          {day}
                        </option>
                      ))}
                </select>

                <select onChange={handleMonthChange} value={selectedMonth}>
                  {/* Options for selecting month */}
                  {monthsDays.map((month, index) => (
                    <option key={month.month} value={index + 1}>
                      {month.month}
                    </option>
                  ))}
                </select>

                <select
                  onChange={(e) => setSelectedYear(e.target.value)}
                  value={selectedYear}
                >
                  {/* Options for selecting year */}
                  {years.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="mb-[3vh]">
              {/* Time selection inputs */}
              <label className="font-medium text-[--20px] mb-[--sy-16px] block">
                Time
              </label>
              <div className="flex gap-[--16px] items-center">
                {/* Input fields for hours and minutes */}
                <input
                  type="number"
                  value={hourVal}
                  onChange={(e) => {
                    const newValue = e.target.value;
                    // Ensure the value is numeric and not more than 2 digits
                    if (/^\d{0,2}$/.test(newValue)) {
                      setHourVal(newValue);
                    }
                  }}
                  placeholder="00"
                  className="w-[3vw] text-center py-[--sy-10px] rounded-[5px] bg-[#484848] inline-block outline-none"
                />
                <span>:</span>
                <input
                  type="number"
                  value={minuteVal}
                  onChange={(e) => {
                    const newValue = e.target.value;
                    // Ensure the value is numeric and not more than 2 digits
                    if (/^\d{0,2}$/.test(newValue)) {
                      setMinuteVal(newValue);
                    }
                  }}
                  placeholder="00"
                  className="w-[3vw] py-[--sy-10px] text-center rounded-[5px] bg-[#484848] inline-block outline-none"
                />
                <span className="bg-[#484848] py-[--sy-10px] inline-block px-[--10px] rounded-[5px]">
                  {Number(hourVal) >= 12 ? "PM" : "AM"}
                </span>
              </div>
            </div>
            {/* Button to book the call */}
            <button
              className="bg-[--highlight-yellow] font-bold py-[--sy-15px] px-[--38px] rounded-[33px] text-black"
              onClick={() => bookACall()}
            >
              Book Call
            </button>
          </div>
          {/* Right column for calendar display */}
          <div className="col-span-2">
            <div className="rounded-[17px] bg-[--dark-gray-2] mb-[--sy-16px] flex justify-center items-center">
              {/* Calendar component */}
              <section className="overflow-x-hidden overflow-y-auto py-[--sy-5px] w-[90%]">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateCalendar
                    value={dayjs(changedDate)}
                    onChange={(e) => {
                      console.log(e);
                      setChangedDate(`${e.$y}-${e.$M + 1}-${e.$D}`);
                      setSelectedDay(`${e.$D}${getOrdinal(e.$D)}`);
                      setSelectedMonth(`${e.$M + 1}`);
                      setSelectedYear(`${e.$y}`);
                    }}
                    slots={{
                      rightArrowIcon: RightArrow,
                      leftArrowIcon: LeftArrow,
                    }}
                    dayOfWeekFormatter={(weekday) => `${weekday.format("ddd")}`}
                    className="custom-calender"
                  />
                </LocalizationProvider>
              </section>
            </div>
          </div>
        </div>
        {/* Message for unavailable time */}
        <div className="w-[65%] ml-auto">
          <div className="relative">
            <div className="bg-[#353535] rounded-[5px] py-[--sy-10px] px-[--23px] ml-[0.2vw] relative z-[10] text-[--18px] font-medium">
              Unfortunately, we’re unavailable at the time you selected. Could
              you please choose another time?
            </div>
            {/* Highlight overlay */}
            <div className="absolute w-full h-full bg-[--highlight-yellow] rounded-[7px] top-0 z-[0] left-0"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
