import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";
import React from "react";
import styles from "./wikipediaInfo.module.css"

const Page = () => {
  return (
    <>
      <NextPrevNav
        backLink="/dashboard/services/pr-creation/product-service"
        nextLink="/dashboard/services/pr-creation/estimated-cost"
      >
        <div className=" w-[75%] pt-[--sy-30px] mx-auto h-full flex items-center">
          <div className=" w-full">
            <h2 className=" text-[--32px] font-semibold w-[60%] mb-[--sy-16px]">
              Every piece of information on your Wikipedia page needs to be
              cited by a reliable and authoritative source.
            </h2>
            <p className="text-[--18px] text-[#FFFFFFCC] mb-[--sy-28px]">
              Here are some examples of the accepted and not accepted sources
            </p>
            <div className={` flex w-full h-full gap-[--30px] items-center ${styles.needs} needs`}>
              <div className={`${styles.needs} needs py-[--sy-27px] px-[--21px] rounded-[--15px] bg-[#484848] grow max-h-[50vh] overflow-y-auto`}>
                <h3 className=" text-[--24px] font-semibold mb-[--sy-16px]">
                  Accepted Sources
                </h3>
                <p className="text-[#FFFFFFCC] mb-[--sy-28px]">
                  Those are some of Wikipedia’s reliable sources
                </p>
                <ul className=" flex flex-col gap-[--sy-16px]">
                  <li className="text-[--18px]">Personal Blogs or Websites</li>
                  <div className=" w-full h-[1px] bg-[#878787]"></div>
                  <li className="text-[--18px]">Personal Blogs or Websites</li>
                  <div className=" w-full h-[1px] bg-[#878787]"></div>
                  <li className="text-[--18px]">Personal Blogs or Websites</li>
                  <div className=" w-full h-[1px] bg-[#878787]"></div>
                  <li className="text-[--18px]">Personal Blogs or Websites</li>
                  <div className=" w-full h-[1px] bg-[#878787]"></div>
                  <li className="text-[--18px]">Personal Blogs or Websites</li>
                  <div className=" w-full h-[1px] bg-[#878787]"></div>
                  <li className="text-[--18px]">Social Media Posts</li>
                  <div className=" w-full h-[1px] bg-[#878787]"></div>
                  <li className="text-[--18px]">Social Media Posts</li>
                  <div className=" w-full h-[1px] bg-[#878787]"></div>
                </ul>
              </div>
              <div className="w-[1px] h-[30vh] bg-[#484848]"></div>
              <div className={`${styles.needs} needs py-[--sy-27px] px-[--21px] rounded-[--15px] bg-[#353535] grow max-h-[50vh] overflow-y-auto`}>
                <h3 className=" text-[--24px] font-semibold mb-[--sy-16px]">
                  Accepted Sources
                </h3>
                <p className="text-[#FFFFFFCC] mb-[--sy-28px]">
                  Those are some of Wikipedia’s reliable sources
                </p>
                <ul className=" flex flex-col gap-[--sy-16px]">
                  <li className="text-[--18px]">Personal Blogs or Websites</li>
                  <div className=" w-full h-[1px] bg-[#878787]"></div>
                  <li className="text-[--18px]">Personal Blogs or Websites</li>
                  <div className=" w-full h-[1px] bg-[#878787]"></div>
                  <li className="text-[--18px]">Personal Blogs or Websites</li>
                  <div className=" w-full h-[1px] bg-[#878787]"></div>
                  <li className="text-[--18px]">Personal Blogs or Websites</li>
                  <div className=" w-full h-[1px] bg-[#878787]"></div>
                  <li className="text-[--18px]">Personal Blogs or Websites</li>
                  <div className=" w-full h-[1px] bg-[#878787]"></div>
                  <li className="text-[--18px]">Social Media Posts</li>
                  <div className=" w-full h-[1px] bg-[#878787]"></div>
                  <li className="text-[--18px]">Social Media Posts</li>
                  <div className=" w-full h-[1px] bg-[#878787]"></div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </NextPrevNav>
    </>
  );
};

export default Page;
