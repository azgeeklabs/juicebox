"use client";
import React, { useEffect, useState } from "react";
import styles from "./orm-service.module.css";
import CustomCheckBoxText from "@/app/_components/customCheckBox/CustomCheckBoxText";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/Store/store";
import { useRouter } from "next/navigation";
import { addOption } from "@/app/reducers/serviceSlice";

const ORMService = () => {
  const data = [
    {
      title: "Google",
      image: (
        <svg viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_2635_2715)">
            <path
              d="M16.7687 2.46788C12.004 4.12082 7.89486 7.25815 5.04494 11.419C2.19502 15.5799 0.754525 20.5451 0.935034 25.5852C1.11554 30.6253 2.90755 35.4747 6.04782 39.421C9.1881 43.3674 13.5111 46.2027 18.3819 47.5106C22.3308 48.5295 26.468 48.5742 30.438 47.641C34.0344 46.8331 37.3594 45.1052 40.0874 42.6263C42.9266 39.9675 44.9874 36.5851 46.0483 32.8428C47.2015 28.7732 47.4067 24.4935 46.6482 20.3322H24.4733V29.5307H37.3155C37.0588 30.9978 36.5088 32.3981 35.6984 33.6477C34.888 34.8972 33.8338 35.9705 32.5989 36.8031C31.0307 37.8405 29.2629 38.5384 27.4091 38.8522C25.5498 39.198 23.6427 39.198 21.7834 38.8522C19.899 38.4626 18.1163 37.6848 16.5489 36.5684C14.031 34.786 12.1403 32.2539 11.1468 29.3333C10.1365 26.358 10.1365 23.1324 11.1468 20.1571C11.854 18.0716 13.0231 16.1727 14.5669 14.6022C16.3336 12.772 18.5702 11.4637 21.0314 10.821C23.4926 10.1782 26.0834 10.2258 28.5193 10.9586C30.4223 11.5427 32.1624 12.5633 33.6011 13.939C35.0491 12.4985 36.4946 11.0542 37.9377 9.60616C38.6828 8.82751 39.495 8.08611 40.2289 7.28883C38.0329 5.24524 35.4552 3.65507 32.6436 2.60945C27.5235 0.750335 21.9212 0.700373 16.7687 2.46788Z"
              fill="white"
            />
            <path
              d="M16.7668 2.46774C21.9189 0.699029 27.5212 0.747676 32.6417 2.60559C35.4538 3.65831 38.0304 5.25613 40.2233 7.30731C39.4782 8.10459 38.6921 8.84972 37.9321 9.62464C36.4865 11.0677 35.0422 12.5058 33.5992 13.9389C32.1605 12.5632 30.4204 11.5426 28.5174 10.9584C26.0823 10.2231 23.4916 10.1728 21.0298 10.8129C18.5679 11.453 16.3299 12.7589 14.5613 14.5872C13.0175 16.1576 11.8484 18.0565 11.1412 20.1421L3.41797 14.1624C6.18241 8.68043 10.9689 4.48711 16.7668 2.46774Z"
              fill="#E33629"
            />
            <path
              d="M1.37017 20.0858C1.78528 18.0285 2.47445 16.0362 3.41926 14.1621L11.1425 20.1566C10.1321 23.1319 10.1321 26.3575 11.1425 29.3328C8.5693 31.3198 5.9949 33.3167 3.41926 35.3236C1.05405 30.6156 0.332707 25.2514 1.37017 20.0858Z"
              fill="#F8BD00"
            />
            <path
              d="M24.4724 20.3281H46.6472C47.4057 24.4894 47.2005 28.7691 46.0474 32.8387C44.9865 36.581 42.9256 39.9634 40.0864 42.6222C37.594 40.6774 35.0904 38.7476 32.5979 36.8028C33.8336 35.9693 34.8883 34.8949 35.6988 33.644C36.5093 32.393 37.0588 30.9914 37.3146 29.5229H24.4724C24.4686 26.4605 24.4724 23.3943 24.4724 20.3281Z"
              fill="#587DBD"
            />
            <path
              d="M3.41602 35.3248C5.99166 33.3378 8.56606 31.3408 11.1392 29.334C12.1347 32.2556 14.0281 34.7879 16.5488 36.5691C18.121 37.6803 19.9076 38.4518 21.7945 38.8343C23.6538 39.18 25.5609 39.18 27.4202 38.8343C29.274 38.5205 31.0418 37.8225 32.6099 36.7852C35.1024 38.73 37.606 40.6599 40.0984 42.6046C37.3709 45.0849 34.0459 46.8141 30.4491 47.623C26.4791 48.5563 22.3419 48.5116 18.393 47.4926C15.2698 46.6587 12.3526 45.1887 9.82407 43.1746C7.14782 41.0499 4.96198 38.3722 3.41602 35.3248Z"
              fill="#319F43"
            />
          </g>
          <defs>
            <clipPath id="clip0_2635_2715">
              <rect
                width="47.6879"
                height="47.6879"
                fill="white"
                transform="translate(0.15625 0.900391)"
              />
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      title: "Facebook",
      image: (
        <svg viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_2635_46295)">
            <path
              d="M47.7015 24.7443C47.7015 11.5758 37.0262 0.900391 23.8576 0.900391C10.689 0.900391 0.0136719 11.5758 0.0136719 24.7443C0.0136719 36.6454 8.7331 46.5099 20.132 48.2986V31.6367H14.0779V24.7443H20.132V19.4912C20.132 13.5153 23.6918 10.2144 29.1383 10.2144C31.747 10.2144 34.4756 10.6801 34.4756 10.6801V16.548H31.469C28.507 16.548 27.5832 18.386 27.5832 20.2717V24.7443H34.1962L33.139 31.6367H27.5832V48.2986C38.9821 46.5099 47.7015 36.6456 47.7015 24.7443Z"
              fill="#1877F2"
            />
            <path
              d="M33.1393 31.6371L34.1964 24.7447H27.5835V20.2721C27.5835 18.3862 28.5072 16.5484 31.4693 16.5484H34.4759V10.6805C34.4759 10.6805 31.7472 10.2148 29.1384 10.2148C23.6921 10.2148 20.1322 13.5157 20.1322 19.4916V24.7447H14.0781V31.6371H20.1322V48.299C21.3647 48.4921 22.6104 48.589 23.8579 48.5887C25.1054 48.589 26.351 48.4921 27.5835 48.299V31.6371H33.1393Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_2635_46295">
              <rect
                width="47.6879"
                height="47.6879"
                fill="white"
                transform="translate(0.0136719 0.900391)"
              />
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      title: "AirBnB",
      image: (
        <svg viewBox="0 0 45 49" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_2635_36117)">
            <path
              d="M44.2457 34.6923C44.0322 34.093 43.7827 33.5131 43.5453 32.9759C43.1799 32.1494 42.7972 31.3214 42.427 30.5209L42.3976 30.4575C39.0959 23.3077 35.5523 16.0599 31.8651 8.91607L31.7085 8.6126C31.3323 7.88323 30.9435 7.1289 30.5445 6.38774C30.0712 5.44964 29.497 4.56593 28.8321 3.75225C28.0831 2.85905 27.1473 2.14087 26.0908 1.64826C25.0336 1.15551 23.8813 0.900241 22.7149 0.900391C21.5484 0.90054 20.3962 1.15611 19.3391 1.64913C18.2828 2.14202 17.3473 2.86044 16.5985 3.75381C15.9343 4.56761 15.3605 5.45111 14.887 6.38878C14.4846 7.1367 14.092 7.89797 13.7125 8.63427L13.5671 8.91607C9.87973 16.0606 6.33609 23.3081 3.03453 30.4573L2.98633 30.5613C2.62251 31.3486 2.24638 32.1629 1.88708 32.9755C1.64951 33.5124 1.40049 34.0918 1.18667 34.6927C0.574476 36.3293 0.37936 38.0926 0.618928 39.8235C0.873267 41.5732 1.58078 43.2259 2.67124 44.6176C3.76268 46.0104 5.1989 47.0941 6.83777 47.7614C8.07629 48.2624 9.4002 48.5185 10.7362 48.5155C11.1559 48.5155 11.5753 48.4909 11.9922 48.4424C13.6818 48.2272 15.3115 47.6773 16.7862 46.825C18.72 45.7386 20.6298 44.1465 22.7161 41.8713C24.8024 44.1465 26.7122 45.7386 28.646 46.825C30.1206 47.6773 31.7504 48.2272 33.44 48.4424C33.8569 48.4909 34.2764 48.5153 34.6962 48.5155C36.0321 48.5185 37.3559 48.2624 38.5944 47.7614C40.2333 47.0941 41.6695 46.0103 42.7609 44.6175C43.8515 43.2258 44.5591 41.5732 44.8134 39.8235C45.0527 38.0925 44.8576 36.3292 44.2457 34.6923ZM22.7161 37.1726C20.1335 33.899 18.4762 30.8589 17.8946 28.3103C17.6564 27.3553 17.6001 26.3641 17.7288 25.3883C17.8303 24.6728 18.0931 23.9897 18.4974 23.3906C18.995 22.7456 19.6341 22.2234 20.3653 21.8643C21.097 21.505 21.9013 21.3183 22.7165 21.3183C23.5316 21.3184 24.3359 21.5053 25.0675 21.8646C25.7987 22.2239 26.4376 22.7461 26.9352 23.3912C27.3392 23.9905 27.602 24.6736 27.7037 25.3892C27.8323 26.3653 27.7758 27.357 27.5372 28.3122C26.9549 30.8605 25.2982 33.8996 22.7161 37.1726ZM41.7968 39.3926C41.6188 40.6159 41.1241 41.7714 40.3618 42.7446C39.5985 43.7184 38.5944 44.4761 37.4485 44.9429C36.2892 45.4075 35.0314 45.572 33.7916 45.4212C32.5031 45.2553 31.2613 44.8312 30.1405 44.1742C28.4192 43.2071 26.6768 41.7225 24.7162 39.5449C27.8374 35.696 29.7866 32.1486 30.5081 28.9888C30.833 27.6603 30.9034 26.2822 30.7157 24.9274C30.5454 23.7601 30.1121 22.6468 29.4486 21.6714C28.6708 20.6184 27.6566 19.7628 26.4876 19.1735C25.3179 18.5837 24.0263 18.2765 22.7164 18.2764C21.4065 18.2764 20.1148 18.5835 18.9451 19.1731C17.7761 19.7623 16.7619 20.6178 15.9841 21.6707C15.3206 22.6458 14.8873 23.7588 14.7168 24.9258C14.529 26.28 14.599 27.6576 14.9232 28.9857C15.6446 32.1468 17.5937 35.695 20.7162 39.545C18.7554 41.7225 17.013 43.2071 15.2917 44.1744C14.1709 44.8313 12.9291 45.2554 11.6405 45.4212C10.4007 45.572 9.14285 45.4075 7.98349 44.9429C6.83766 44.4761 5.83348 43.7184 5.0702 42.7446C4.30805 41.7714 3.8135 40.6159 3.63557 39.3926C3.46476 38.1494 3.6101 36.8831 4.05818 35.7109C4.22864 35.2321 4.42789 34.7622 4.67482 34.204C5.02424 33.4141 5.395 32.6112 5.75361 31.835L5.80182 31.7306C9.085 24.6215 12.609 17.4142 16.2763 10.3087L16.4223 10.0259C16.7957 9.30138 17.1819 8.55242 17.5714 7.82878C17.944 7.08276 18.395 6.37851 18.9167 5.72791C19.3792 5.16916 19.9595 4.71948 20.6161 4.41104C21.6061 3.94566 22.7227 3.82241 23.7904 4.06065C24.8581 4.29889 25.8164 4.88512 26.5146 5.72722C27.0367 6.37735 27.4878 7.08141 27.8603 7.82739C28.2461 8.54462 28.6289 9.28682 28.9991 10.0046L29.1559 10.3091C32.823 17.4137 36.347 24.6208 39.6305 31.7313L39.66 31.7953C40.0249 32.5847 40.4022 33.4006 40.7574 34.2042C41.0046 34.7632 41.2042 35.2335 41.3742 35.7106C41.8219 36.883 41.9673 38.1492 41.7968 39.3926Z"
              fill="#FF385C"
            />
          </g>
          <defs>
            <clipPath id="clip0_2635_36117">
              <rect
                width="44.3931"
                height="47.6879"
                fill="white"
                transform="translate(0.519531 0.900391)"
              />
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      title: "Clutch",
      image: (
        <svg viewBox="0 0 43 49" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M33.4958 34.4746C31.0627 36.421 27.6565 37.8809 24.2502 37.8809C16.4644 37.8809 11.1117 32.0415 11.1117 24.2558C11.1117 16.47 16.4644 11.1173 24.2502 11.1173C27.6565 11.1173 31.0627 12.0905 33.4958 14.5235L34.9556 15.9834L42.7414 8.68421L40.795 7.22437C36.4155 3.33148 30.5761 0.898438 24.2502 0.898438C10.6251 0.898438 0.40625 11.1173 0.40625 24.7424C0.40625 38.3675 10.6251 48.5863 24.2502 48.5863C30.5761 48.5863 36.4155 46.1533 40.795 42.2604L42.7414 40.8005L34.9556 33.0148L33.4958 34.4746Z"
            fill="#17313B"
          />
          <path
            d="M23.7643 32.5266C28.0643 32.5266 31.5501 29.0408 31.5501 24.7409C31.5501 20.4409 28.0643 16.9551 23.7643 16.9551C19.4643 16.9551 15.9785 20.4409 15.9785 24.7409C15.9785 29.0408 19.4643 32.5266 23.7643 32.5266Z"
            fill="#EF4335"
          />
        </svg>
      ),
    },
  ];

  const [pastedText, setPastedText] = useState<string>("");

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setPastedText(text);
    } catch (error) {
      console.error("Failed to read clipboard contents: ", error);
    }
  };

  const all = useSelector((state: RootState) => state.service);
  const dispatch = useDispatch();
  const route = useRouter();
  const nextFunc = () => {
    const storedItems =
      typeof window !== "undefined" && localStorage.getItem("selectedOption");
    const itemsArray = storedItems ? JSON.parse(storedItems) : [];
    if (document.querySelector("input[type='radio']:checked") && pastedText) {
      const addedObj: {
        name: string;
        choice?: string;
        ans?: string;
      } = {
        name: "platform",
        choice: (
          document.querySelector(
            "input[type='radio']:checked"
          ) as HTMLInputElement
        ).value,
      };
      addedObj.ans = pastedText;

      itemsArray.push(addedObj);
      localStorage.setItem("selectedOption", JSON.stringify(itemsArray));
      dispatch(addOption(addedObj));
      route.push("/dashboard/services/orm-service/remove-reviews");
    }
  };
  useEffect(() => {
    console.log(all);
  }, [all]);

  return (
    <NextPrevNav
      nextLink="/dashboard/services/orm-service/remove-reviews"
      nextFunc={nextFunc}
    >
      {/* // Main container div with relative positioning */}
      <div className="h-full relative">
        {/* Inner container for the video end point section with custom styles */}
        <div
          className={`${styles.channelChoice} w-full h-full flex justify-center items-center`}
        >
          {/* Nested div for content */}
          <div>
            {/* Text center alignment and margin bottom */}
            <div className="flex flex-col gap-[var(--64px)] justify-center items-center h-full">
              <div
                className={classNames(
                  "flex flex-col items-center gap-[var(--16px)] text-center",
                  styles.container
                )}
              >
                <h1 className="text-[--30px] font-bold">
                  What is the platform you want to remove fake reviews from?
                </h1>
                <p className="text-[--18px] w-[60%]">
                  Please choose the platform you want
                </p>
              </div>
              <div className={classNames("flex ", styles.cards)}>
                {data.map((item, i) => (
                  <div
                    key={i}
                    className={classNames(
                      "flex flex-col justify-end items-center gap-[var(--8px)] group relative",
                      styles.card
                    )}
                  >
                    <div className="flex items-center grow justify-center relative">
                      {item.image}
                    </div>
                    <div>{item.title}</div>

                    <input
                      type="radio"
                      name="project"
                      className="absolute opacity-0 inset-0 cursor-pointer"
                      value={item.title}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Divider */}
            <hr className={`${styles.divider}`} />

            <div className="mx-auto w-full">
              {/* Product Link field with optional span */}
              <h3 className="mb-[0.6vw] font-semibold text-[--20px]">
                Account URL
              </h3>
              <div className="flex gap-[1vw] items-start">
                {/* Product Link input field */}
                <input
                  type="text"
                  placeholder="URL"
                  value={pastedText}
                  className="flex-grow h-full mb-[1vw] w-[19.773vw] bg-[var(--dark-gray-3)] outline-none rounded-[var(--10px)] px-[1.088vw] py-[0.5vw] placeholder:text-[#FFFFFFCC]"
                  onChange={(e) => setPastedText(e.target.value)}
                />

                {/* Paste Link button */}
                <button
                  onClick={handlePaste}
                  className="bg-[var(--highlight-yellow)] px-[1.892vw] py-[0.4vw] text-black rounded-[var(--33px)] font-bold"
                >
                  Paste Link
                </button>
              </div>
              {/* Link component for saving progress */}
              <div className="flex items-center gap-[--16px] bg-[#373737] py-[var(--sy-10px)] pl-[var(--20px)] pr-[var(--11px)] rounded-[--10px] text-[#E4E4E4]  max-w-[30vw] border-l-[--4px] border-[var(--highlight-yellow)]">
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
                  We retain the right to refuse service to anyone with or
                  without reason.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </NextPrevNav>
  );
};

export default ORMService;
