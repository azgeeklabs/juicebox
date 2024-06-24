"use client";
import React, { useEffect, useState } from "react";
import "../../../_components/dashboard/calender/calender.css";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import dayjs from "dayjs";
import styles from "./suspended-date.module.css";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";
import classNames from "classnames";
const suspendedDate = () => {
  const [selectedDay, setSelectedDay] = useState<string>("");
  const [selectedMonth, setSelectedMonth] = useState<string>("");
  const [selectedYear, setSelectedYear] = useState<string>("");
  const [changedDate, setChangedDate] = useState<string>("");

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
  useEffect(() => {
    if (selectedDay && selectedMonth && selectedYear) {
      console.log(
        `Selected Date: ${selectedDay.replace(
          "th" || "st" || "rd" || "nd",
          ""
        )}-${selectedMonth}-${selectedYear}`
      );
      setChangedDate(
        `${selectedYear}-${selectedMonth}-${parseInt(selectedDay)}`
      );
      console.log(`${selectedYear}-${selectedMonth}-${parseInt(selectedDay)}`);
    }
  }, [selectedDay, selectedMonth, selectedYear]);

  const [disabled, setDisabled] = useState(false);

  return (
    <NextPrevNav
      nextLink="/services/orm-account-recovery/suspended-account"
      backLink="/services/orm-account-recovery/suspension-reason"
    >
      <div
        className={`${styles.BookACall} flex w-full h-full justify-center items-center `}
      >
        <div>
          <div className=" mb-[6vh]">
            <h2 className=" font-semibold text-[--32px] mb-[--sy-16px]">
              Please provide the date your account was suspended
            </h2>
            <p className=" text-[--18px]">
              Share the date your account was suspended, and we'll work on
              getting you back in no time!
            </p>
          </div>
          <div className="grid grid-cols-2 gap-[--40px]">
            <div className=" col-span-1">
              <h3 className=" font-bold text-[--20px] mb-[--sy-24px]">
                Pick a date for your call
              </h3>
              <div className=" mb-[2vh]">
                <label className="font-medium text-[--20px] mb-[--sy-16px] block">
                  Date
                </label>
                <div className=" flex items-center gap-[--16px]">
                  <select
                    onChange={(e) => setSelectedDay(e.target.value)}
                    value={selectedDay}
                  >
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
                    {years.map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                  <svg
                    width="29"
                    height="29"
                    viewBox="0 0 29 29"
                    fill="none"
                    onClick={() => setDisabled(!disabled)}
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-[--16px] cursor-pointer"
                  >
                    <path
                      d="M1.76367 10.5931H26.7637M7.31923 2.25977V5.03754M21.2081 2.25977V5.03754M5.93034 14.7598H8.70812M12.8748 14.7598H15.6526M19.8192 14.7598H22.597M5.93034 18.9264H8.70812M12.8748 18.9264H15.6526M19.8192 18.9264H22.597M5.93034 23.0931H8.70812M12.8748 23.0931H15.6526M19.8192 23.0931H22.597M6.20812 27.2598H22.3192C23.8749 27.2598 24.6528 27.2598 25.247 26.957C25.7696 26.6907 26.1946 26.2657 26.4609 25.7431C26.7637 25.1489 26.7637 24.371 26.7637 22.8153V9.48199C26.7637 7.92628 26.7637 7.14843 26.4609 6.55424C26.1946 6.03156 25.7696 5.60661 25.247 5.34031C24.6528 5.03754 23.8749 5.03754 22.3192 5.03754H6.20812C4.65242 5.03754 3.87456 5.03754 3.28037 5.34031C2.75769 5.60661 2.33274 6.03156 2.06644 6.55424C1.76367 7.14843 1.76367 7.92628 1.76367 9.48199V22.8153C1.76367 24.371 1.76367 25.1489 2.06644 25.7431C2.33274 26.2657 2.75769 26.6907 3.28037 26.957C3.87456 27.2598 4.65241 27.2598 6.20812 27.2598Z"
                      stroke={disabled ? "#484848" : "#F8F24B"}
                      stroke-width="2.88889"
                      stroke-linecap="round"
                    />
                  </svg>
                </div>
              </div>
              <span className="flex justify-center items-center gap-[--16px] bg-[#373737] py-[var(--sy-10px)] pl-[var(--20px)] pr-[var(--11px)] rounded-[--15px] text-[#E4E4E4]  max-w-[30vw] border-l-[--3px] border-[var(--highlight-yellow)]">
                <svg
                  viewBox="0 0 18 18"
                  fill="none"
                  className="h-[var(--18px)] w-[var(--18px)]"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.16797 13.167H9.83464V8.16699H8.16797V13.167ZM9.0013 6.50033C9.23741 6.50033 9.43547 6.42033 9.59547 6.26033C9.75547 6.10033 9.83519 5.90255 9.83464 5.66699C9.83408 5.43144 9.75408 5.23366 9.59464 5.07366C9.43519 4.91366 9.23741 4.83366 9.0013 4.83366C8.76519 4.83366 8.56741 4.91366 8.40797 5.07366C8.24853 5.23366 8.16852 5.43144 8.16797 5.66699C8.16741 5.90255 8.24741 6.1006 8.40797 6.26116C8.56852 6.42171 8.7663 6.50144 9.0013 6.50033ZM9.0013 17.3337C7.84853 17.3337 6.76519 17.1148 5.7513 16.677C4.73741 16.2392 3.85547 15.6456 3.10547 14.8962C2.35547 14.1467 1.76186 13.2648 1.32464 12.2503C0.887414 11.2359 0.668525 10.1525 0.66797 9.00033C0.667414 7.8481 0.886303 6.76477 1.32464 5.75033C1.76297 4.73588 2.35658 3.85394 3.10547 3.10449C3.85436 2.35505 4.7363 1.76144 5.7513 1.32366C6.7663 0.885881 7.84964 0.666992 9.0013 0.666992C10.153 0.666992 11.2363 0.885881 12.2513 1.32366C13.2663 1.76144 14.1482 2.35505 14.8971 3.10449C15.646 3.85394 16.2399 4.73588 16.6788 5.75033C17.1177 6.76477 17.3363 7.8481 17.3346 9.00033C17.333 10.1525 17.1141 11.2359 16.678 12.2503C16.2419 13.2648 15.6482 14.1467 14.8971 14.8962C14.146 15.6456 13.2641 16.2395 12.2513 16.6778C11.2385 17.1162 10.1552 17.3348 9.0013 17.3337Z"
                    fill="#484848"
                    className="fill-[--highlight-yellow]"
                  />
                </svg>
                <p className="w-max max-w-full">
                  We require proof of hack to ensure that your case is genuine
                </p>
              </span>
            </div>
            <div
              className={classNames(
                " col-span-1",
                disabled && "opacity-50 filter grayscale"
              )}
            >
              <div className="rounded-[17px] bg-[--dark-gray-2] mb-[--sy-16px] flex justify-center items-center">
                <section className="overflow-x-hidden overflow-y-auto py-[--sy-5px] w-[90%]">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateCalendar
                      value={dayjs(changedDate)}
                      disabled={disabled}
                      onChange={(e) => {
                        console.log(e);
                        setChangedDate(`${e.$y}-${e.$M + 1}-${e.$D}`);
                      }}
                      slots={{
                        rightArrowIcon: RightArrow,
                        leftArrowIcon: LeftArrow,
                      }}
                      dayOfWeekFormatter={(weekday) =>
                        `${weekday.format("ddd")}`
                      }
                      className="custom-calender"
                    />
                  </LocalizationProvider>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </NextPrevNav>
  );
};

export default suspendedDate;
