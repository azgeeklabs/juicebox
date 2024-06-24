"use client";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";
import styles from "@/app/dashboard/services/orm-service/remove-reviews/remove-reviews.module.css";
import classNames from "classnames";
import { useState } from "react";

const RemoveReviews = () => {
  // State to keep track of selected reviews
  const [selectedReviews, setSelectedReviews] = useState<string[]>([]);

  // Handle selecting and deselecting reviews
  const handleSelectReview = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      // Add influencer to the list if checked
      setSelectedReviews([...selectedReviews, e.target.value]);
    } else {
      // Remove reviews from the list if unchecked
      setSelectedReviews(
        selectedReviews.filter((review) => review !== e.target.value)
      );
    }
  };

  const STAR_COUNT = 5;

  const rating = (value: number) => {
    // Create an array of length STAR_COUNT, each element is a default (empty) star SVG

    const stars = Array.from({ length: STAR_COUNT }, () => (
      <svg
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[--11px] h-[--10px]"
      >
        <path
          d="M0.0225353 7.23255C0.0764637 7.07602 0.213829 6.96299 0.377325 6.94122L6.67488 6.10642L9.61063 0.221093C9.75672 -0.0736975 10.2428 -0.0736975 10.3889 0.221093L13.3246 6.10646L19.6222 6.94126C19.7857 6.96299 19.9239 7.07606 19.9769 7.23259C20.03 7.38911 19.99 7.56215 19.8726 7.67954L15.2542 12.2979L16.5125 18.5911C16.5447 18.7546 16.4821 18.9207 16.3499 19.0224C16.2177 19.1233 16.0386 19.1398 15.8916 19.0659L9.99929 16.1197L4.10696 19.0659C4.0452 19.0963 3.97913 19.112 3.91305 19.112C3.81999 19.112 3.72608 19.0815 3.64871 19.0224C3.51742 18.9216 3.45391 18.7546 3.48611 18.5911L4.74439 12.2979L0.12603 7.67958C0.0103874 7.563 -0.0296402 7.38997 0.0225353 7.23255ZM3.84873 8.94129L6.63314 11.7266L5.91226 15.331C5.88096 15.391 5.86355 15.4589 5.86355 15.5311C5.86355 15.7711 6.05835 15.9659 6.29836 15.9659H6.31576C6.38184 15.9659 6.44795 15.9502 6.51056 15.9198L10.0011 14.1754L13.4916 15.9198C13.6403 15.9937 13.8186 15.978 13.9499 15.8763C14.0812 15.7754 14.1447 15.6084 14.1125 15.445L13.369 11.7257L16.1534 8.94043C16.2708 8.82304 16.3108 8.65 16.2578 8.49347C16.2038 8.33695 16.0665 8.22392 15.903 8.20215L12.1829 7.70909L10.3906 4.11769C10.2446 3.8229 9.75847 3.8229 9.61238 4.11769L7.82016 7.70909L4.10007 8.20215C3.93657 8.22388 3.79831 8.33695 3.74528 8.49347C3.69135 8.65086 3.73134 8.82389 3.84873 8.94129Z"
          fill="#E1C655"
        />
      </svg>
    ));
    let i;
    for (i = 0; i < value; i++) {
      // this will loop Math.floor(value) times
      stars[i] = (
        <svg
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[--11px] h-[--10px]"
        >
          <path
            d="M7.85846 0.00390625L10.738 5.3874L15.8711 6.13858L12.4908 9.89451V15.278L7.85846 13.2748L2.85056 14.652L4.22773 9.89451L0.722199 6.13858L5.10411 5.01181L7.85846 0.00390625Z"
            fill="#E1C655"
          />
        </svg>
      );
    }

    if (value % 1 != 0)
      // if value is a decimal, add a half star
      stars[i - 1] = (
        <svg
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[--11px] h-[--10px]"
        >
          <path
            d="M0.0225353 7.23255C0.0764637 7.07602 0.213829 6.96299 0.377325 6.94122L6.67488 6.10642L9.61063 0.221093C9.75672 -0.0736975 10.2428 -0.0736975 10.3889 0.221093L13.3246 6.10646L19.6222 6.94126C19.7857 6.96299 19.9239 7.07606 19.9769 7.23259C20.03 7.38911 19.99 7.56215 19.8726 7.67954L15.2542 12.2979L16.5125 18.5911C16.5447 18.7546 16.4821 18.9207 16.3499 19.0224C16.2177 19.1233 16.0386 19.1398 15.8916 19.0659L9.99929 16.1197L4.10696 19.0659C4.0452 19.0963 3.97913 19.112 3.91305 19.112C3.81999 19.112 3.72608 19.0815 3.64871 19.0224C3.51742 18.9216 3.45391 18.7546 3.48611 18.5911L4.74439 12.2979L0.12603 7.67958C0.0103874 7.563 -0.0296402 7.38997 0.0225353 7.23255ZM9.56538 13.6892C9.56538 13.8536 9.65844 14.0049 9.80539 14.0779L13.4898 15.9197C13.5516 15.9502 13.6176 15.9658 13.6846 15.9658C13.7777 15.9658 13.8716 15.9354 13.949 15.8763C14.0803 15.7754 14.1438 15.6084 14.1116 15.445L13.3681 11.7257L16.1525 8.94043C16.2699 8.82304 16.3099 8.65 16.2569 8.49347C16.2029 8.33695 16.0656 8.22392 15.9021 8.20215L12.182 7.70909L10.3898 4.11769C10.3002 3.93683 10.0976 3.84291 9.90106 3.88811C9.70365 3.93422 9.56538 4.10986 9.56538 4.31159V13.6892Z"
            fill="#E1C655"
          />
        </svg>
      );

    return <div className="flex gap-[--6px] ">{stars}</div>;
  };

  return (
    <NextPrevNav
      backLink="/dashboard/services/orm-service"
      nextLink="/dashboard/services/orm-service/remove-reviews"
    >
      {/* // Main container div with relative positioning */}
      {/* Inner container for the video end point section with custom styles */}
      <div
        className={`${styles.channelChoice} w-full md:w-[70%] lg:w-[60%] h-full flex flex-col justify-center items-center gap-[--60px]`}
      >
        {/* Text center alignment and margin bottom */}
        <div className="flex flex-col gap-[var(--64px)] justify-center items-center">
          <div
            className={classNames(
              "flex flex-col items-center gap-[var(--16px)] text-center",
              styles.container
            )}
          >
            <h1 className="text-[--30px] font-bold">
              Please select the reviews that you want to delete
            </h1>
            <p className="text-[--18px] w-[60%]">
              Please choose the platform you want
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-[--20px]">
          {/* grid container for the reviews */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[--16px]">
            {Array(9)
              .fill(0)
              .map((_, index) => (
                <div
                  className={classNames(
                    "relative flex flex-col bg-[#484848] py-[--11px] px-[--18px] rounded-[--11px] cursor-pointer gap-[--sy-10px]",
                    styles.reviewCard
                  )}
                  key={index}
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-[--10px]">
                      <div className="w-[--23px] aspect-square flex justify-center items-center bg-[#D9D9D9] rounded-full overflow-hidden">
                        <img
                          src="/assets/dashboard/services/orm-service/remove-reviews/instagram.svg"
                          alt="instagram"
                          className="w-full h-full object-cover hidden"
                        />
                      </div>
                      <span className="text-[--13px] font-semibold">
                        Jane L.
                      </span>
                    </div>
                    <div>{rating(3)}</div>
                  </div>
                  <p className="text-[--12px]">
                    “Lorem ipsum dolor sit amet consectetur. Sed dignissim
                    tincidunt purus et purus tincidunt. Sed dignissim tincidunt”
                  </p>
                  <div className="text-[--10px] text-[#A3A3A3] ml-auto">
                    16/02/2024
                  </div>
                  <input
                    type="checkbox"
                    className="absolute inset-0 opacity-0 cursor-pointer"
                    value={`Jane L. ${index}`}
                    onChange={handleSelectReview}
                  />
                </div>
              ))}
          </div>

          <div className="flex justify-between items-center bg-[#484848] py-[--11px] px-[--18px] rounded-[--5px]">
            <div className="flex items-center gap-[--30px]">
              <span className="font-semibold">Current Account Rate</span>
              <span className="flex items-center gap-[--5px] text-[--13px]">
                4.2
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[--11px] h-[--10px]"
                >
                  <path
                    d="M7.85846 0.00390625L10.738 5.3874L15.8711 6.13858L12.4908 9.89451V15.278L7.85846 13.2748L2.85056 14.652L4.22773 9.89451L0.722199 6.13858L5.10411 5.01181L7.85846 0.00390625Z"
                    fill="#E1C655"
                  />
                </svg>
              </span>
            </div>
            <div className="flex items-center font-semibold gap-[--30px]">
              <span>Selected Reviews</span>
              <span>({selectedReviews.length})</span>
            </div>
          </div>
        </div>
      </div>
    </NextPrevNav>
  );
};

export default RemoveReviews;
