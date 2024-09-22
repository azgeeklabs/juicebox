"use client";
import classNames from "classnames";
import styles from "./suspension-approvel.module.css";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";
import { useContext, useEffect, useState } from "react";
import { accountRecoveryContext } from "../_accountRecoveryContext/_accountRecoveryContext";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/Store/store";
import { useRouter } from "next/navigation";
import { addOption } from "@/app/reducers/serviceSlice";

function SuspensionApprovel() {
  const { isSexual } = useContext(accountRecoveryContext);
  const [inputVal, setInputVal] = useState("");
  const all = useSelector((state: RootState) => state.service);
  const route = useRouter();
  const [fileSrc, setFileSrc] = useState<any>(null);
  const dispatch = useDispatch();

  const handleFileChange = (event:any) => {
    const file = event.target.files[0];
    setInputVal(file.name)
    
    if (file) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        setFileSrc(fileReader.result);
      };
    }
  };

  const nextFunc = () => {
    const storedItems = localStorage.getItem("selectedOption");
    const itemsArray = storedItems ? JSON.parse(storedItems) : [];
    if (inputVal) {
      itemsArray.push({
        name: "suspended email",
        file: `${inputVal}`,
      });
      localStorage.setItem("selectedOption", JSON.stringify(itemsArray));
        dispatch(addOption({
          name: "suspended email",
          file: `${inputVal}`,
        }))
      route.push(`${
        isSexual
          ? "/dashboard/services/orm-account-recovery/reject-recovery"
          : "/dashboard/services/orm-account-recovery/estimated-cost"
      }`);
    }
  };
  useEffect(()=>{
    console.log(all);
    
    },[all])

  return (
    <NextPrevNav
      backLink="/dashboard/services/orm-account-recovery/suspended-account/" nextFunc={nextFunc}
      nextLink={
        isSexual
          ? "/dashboard/services/orm-account-recovery/reject-recovery"
          : "/dashboard/services/orm-account-recovery/estimated-cost"
      }
    >
      {/* Inner container with full height and center alignment */}
      <div className="h-[50%] flex">
        {/* Inner container with full width and custom styles for the footage editing section */}
        <div className={`${styles.addLinkEdit} w-full`}>
          {/* Header section with text centered, auto margins for horizontal centering, and vertical margins */}
          <div
            className={classNames(
              "text-center mx-auto mb-[4.556vh]",
              styles.container
            )}
          >
            {/* Main heading with bottom margin */}
            <h2 className="mb-[--24px]">Got a Suspension Email?</h2>

            {/* Subheading with text centered */}
            <h4 className="text-center w-[--400px] mx-auto">
              Upload a screenshot of the message you received when your account
              was suspended.
            </h4>
          </div>

          {/* Container for input and button with auto margins for horizontal centering and fit width */}
          <div className="mx-auto w-fit mb-[--32px]">
            {/* Subheading for input field */}
            <h3 className="mb-[--24px]">Upload Screenshot</h3>

            {/* Container for input field and button with flexbox layout, gap, and bottom margin */}
            <div className="flex gap-[1vw] items-start mb-[2.667vh]">
                {/* Channel URL input field */}
                <div className="relative h-full mb-[1.778vh] w-[28.477vw] bg-[var(--dark-gray-3)] outline-none rounded-[var(--71px)] px-[1.088vw] py-[0.889vh] text-[#FFFFFF80] cursor-pointer">
                  {inputVal ? inputVal : "email"}
                  <input
                    onChange={handleFileChange}
                    id="upload"
                    type="file"
                    className="absolute opacity-0 inset-0 cursor-pointer"
                  />
                </div>

                {/* Paste Link button */}
                <label htmlFor="upload" className="cursor-pointer font-bold bg-[var(--highlight-yellow)] px-[1.892vw] py-[--sy-10px] text-black rounded-[var(--33px)]">
                Upload
              </label>
              </div>
          </div>
          <div className="w-full">
            <span className="flex items-center gap-[--16px] bg-[#373737] py-[var(--sy-10px)] pl-[var(--20px)] pr-[var(--11px)] rounded-[--15px] text-[#E4E4E4]  w-full border-l-[--3px] border-[var(--highlight-yellow)]">
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
        </div>
      </div>
    </NextPrevNav>
  );
}

export default SuspensionApprovel;
