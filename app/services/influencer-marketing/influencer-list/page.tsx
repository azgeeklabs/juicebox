"use client";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";
import styles from "./influencer-list.module.css";
import { useState } from "react";

function InfluencerList() {
  const [selectedInfluencers, setSelectedInfluencers] = useState<string[]>([]);
  const handleSelectInfluencer = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setSelectedInfluencers([...selectedInfluencers, e.target.value]);
    } else {
      setSelectedInfluencers(
        selectedInfluencers.filter(
          (influencer) => influencer !== e.target.value
        )
      );
    }
  };

  return (
    <NextPrevNav
      nextLink="/influencer-marketing/influencer-list/step-2"
      backLink="/influencer-marketing/influencer-list/step-1"
    >
      <div
        className={`flex flex-col items-center justify-center py-[--sy-20px] gap-[--sy-20px] h-full w-full ${styles.container}`}
      >
        <div className="flex justify-between items-end w-full">
          <div className="flex flex-col gap-[--16px] items-center w-full md:w-1/2 lg:w-1/3">
            <h1 className="text-[--32px] font-bold w-full">Influencer List</h1>
            <p className="text-[#AFAFAF] w-full">
              Those ae the lis of influencers available based on your previous
              selections, you can multi-select influencers or regenerated more
              influencers!
            </p>
          </div>
          <button className="px-[--50px] py-[--sy-16px] bg-[--highlight-yellow] text-[var(--primary-black)] font-bold rounded-[--41px]">
            Regenerate
          </button>
        </div>
        <div className="flex gap-[--16px] max-h-[50vh] grow items-center w-full">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="flex flex-col gap-[--16px] bg-[#353535] px-[--19px] pt-[--19px] items-center w-1/4 h-full rounded-[--15px]"
            >
              <div className="flex justify-between items-center w-full">
                <h2 className="font-bold">Male Influencers</h2>
                <span className="px-[--10px] py-[--sy-6px] bg-[#616161] rounded-[--14px]">
                  Marketing
                </span>
              </div>
              <div className="w-full grow max-h-[90%] ">
                <div className="flex flex-col gap-[--10px] pb-[--19px] pt-[--2px] items-center h-full overflow-y-auto">
                  {Array.from({ length: 10 }).map((_, index) => (
                    <div
                      key={index}
                      className={`flex flex-col items-center w-full bg-[--dark-gray-3] px-[--17px] py-[--14px] rounded-[--15px] ${styles.influencerCard}`}
                    >
                      <div className="flex justify-around items-center w-full">
                        <div className="relative w-[--71px] h-[--71px] aspect-square rounded-full bg-[#616161]">
                          <div className="absolute w-[--10px] h-[--10px] aspect-square bg-[#FFD700] rounded-full bottom-1 right-1">
                            <img
                              src="/assets/Instagramig.png"
                              alt="Instagram"
                            />
                          </div>
                        </div>
                        <div className="w-[--1px] h-[90%] bg-[#616161]"></div>
                        <div className="flex flex-col gap-[--10px] text-center font-medium">
                          <div>
                            <p className="font-bold">Ronald Richards</p>
                            <p className="text-[#AFAFAF]">@Richardinfu</p>
                          </div>
                          <p className="text-[--highlight-yellow]">
                            200k Followers
                          </p>
                        </div>
                      </div>
                      <div className="flex font-light flex-col justify-around items-center pt-[--15px] text-center px-[--20px]  gap-[--15px] w-full">
                        <div className="w-[90%] h-[--1px] bg-[#616161]"></div>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Impedit officiis qui quidem corrupti ipsam! Cum,
                          suscipit? Et, veritatis molestias?
                        </p>
                        <p>
                          soluta eius repellat quidem voluptatem architecto
                          nesciunt repudiandae placeat natus dolore, modi
                          ratione dicta illum sequi sed reiciendis consequatur!
                        </p>

                        <button className="relative px-[--30px] py-[--sy-7px] bg-[--highlight-yellow] text-[var(--primary-black)] font-bold rounded-[--41px] w-fit cursor-pointer">
                          Select Influencer
                          <input
                            type="checkbox"
                            className="absolute inset-0 opacity-0 cursor-pointer"
                            value={`Ronald Richards ${i + "" + index}`}
                            onChange={handleSelectInfluencer}
                          />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center text-[--highlight-yellow] ml-auto w-[var(--252px)]">
          <span>Selected Influencers</span>
          <span>({selectedInfluencers.length})</span>
        </div>
      </div>
    </NextPrevNav>
  );
}

export default InfluencerList;
