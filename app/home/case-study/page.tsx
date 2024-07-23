import React from "react";
import styles from "./caseStudy.module.css";
import Link from "next/link";

const page = () => {
  return (
    <div className="w-full h-full pt-[--sy-100px] px-[--64px]">
      <h1 className=" [font-family:Alfa_Slab_One] text-[--102px] w-fit mx-auto text-[#F8F24B] mb-[--sy-40px]">
        Machine Genius
      </h1>
      <p className=" text-[--32px] font-bold text-center mb-[--sy-90px]">
        Web Development - UX/UI{" "}
      </p>
      <div className=" w-full border-[3px] border-[#353535] grid grid-cols-4">
        <div className=" col-span-3 w-full py-[--sy-64px] px-[--60px] border-r-[3px] border-[#353535]">
          <h3 className=" font-semibold text-[--40px] mb-[--sy-35px]" id="Project-Overview">
            Project overview
          </h3>
          <p className=" text-[--24px] mb-[--sy-40px]">
            Lorem ipsum dolor sit amet consectetur. Arcu odio et in aliquet
            lacus adipiscing neque volutpat. Sapien sed vulputate sapien nibh
            duis. Vulputate massa tristique donec laoreet sollicitudin sed
            rhoncus ipsum. Id sit at fermentum venenatis. Dolor non etiam
            pellentesque id in non amet odio.
          </p>
          <div className=" w-full h-[570px] bg-[#2b2b2b] rounded-[--25px] mb-[--sy-80px]"></div>
          <h3 id="Project-Objectives" className=" font-semibold text-[--40px] mb-[--sy-80px]">
          Project objectives
          </h3>
          <div className=" w-full flex flex-col gap-[--sy-15px] mb-[--sy-100px]">
            <div
              className={`${styles.objective} rounded-[--19px] bg-[#1d1d1d] flex items-center gap-[--60px]`}
            >
              <span className=" font-bold text-[--33px]">
                REVENUE <br />
                GROWTH
              </span>
              <p className=" pl-[--60px] py-[--sy-7px] border-l-[1px] border-white text-[--24px]">
                Lorem ipsum dolor sit amet consectetur. Arcu odio et in aliquet
                lacus adipiscing neque volutpat. Sapien sed vulputate sapien
                nibh duis.{" "}
              </p>
            </div>
            <div
              className={`${styles.objective} rounded-[--19px] bg-[#1d1d1d] flex items-center gap-[--60px]`}
            >
              <span className=" font-bold text-[--33px]">
                CUSTOMER <br />
                TRUST
              </span>
              <p className=" pl-[--60px] py-[--sy-7px] border-l-[1px] border-white text-[--24px]">
                Lorem ipsum dolor sit amet consectetur. Arcu odio et in aliquet
                lacus adipiscing neque volutpat. Sapien sed vulputate sapien
                nibh duis.{" "}
              </p>
            </div>
            <div
              className={`${styles.objective} rounded-[--19px] bg-[#1d1d1d] flex items-center gap-[--60px]`}
            >
              <span className=" font-bold text-[--33px]">
                SCORE <br />
                UPLIFT
              </span>
              <p className=" pl-[--60px] py-[--sy-7px] border-l-[1px] border-white text-[--24px]">
                Lorem ipsum dolor sit amet consectetur. Arcu odio et in aliquet
                lacus adipiscing neque volutpat. Sapien sed vulputate sapien
                nibh duis.{" "}
              </p>
            </div>
          </div>
          <h3 id="Project-Timeline" className=" font-semibold text-[--40px] mb-[--sy-64px]">
            Project Timeline:
          </h3>
          <div className=" rounded-[--35px] border-[3px] border-[#353535] overflow-hidden mb-[--sy-80px]">
            <div className=" flex border-b-[3px] border-b-[#353535]">
              <span className=" font-bold text-[--32px] shrink-0 w-[25%] text-center py-[--sy-40px]">
                Week 1
              </span>
              <p className=" flex items-center text-[--24px] px-[--44px] border-l-[3px] border-l-[#353535]">
                Lorem ipsum dolor sit amet consectetur. Arcu odio et in aliquet
                lacus adipiscing neque volutpat. Sapien sed vulputate sapien
                nibh duis.{" "}
              </p>
            </div>
            <div className=" flex border-b-[3px] border-b-[#353535]">
              <span className=" font-bold text-[--32px] shrink-0 w-[25%] text-center py-[--sy-40px]">
                Week 2
              </span>
              <p className=" flex items-center text-[--24px] px-[--44px] border-l-[3px] border-l-[#353535]">
                Lorem ipsum dolor sit amet consectetur. Arcu odio et in aliquet
                lacus adipiscing neque volutpat. Sapien sed vulputate sapien
                nibh duis.{" "}
              </p>
            </div>
            <div className=" flex border-b-[3px] border-b-[#353535]">
              <span className=" font-bold text-[--32px] shrink-0 w-[25%] text-center py-[--sy-40px]">
                Week 3
              </span>
              <p className=" flex items-center text-[--24px] px-[--44px] border-l-[3px] border-l-[#353535]">
                Lorem ipsum dolor sit amet consectetur. Arcu odio et in aliquet
                lacus adipiscing neque volutpat. Sapien sed vulputate sapien
                nibh duis.{" "}
              </p>
            </div>
            <div className=" flex border-b-[3px] border-b-[#353535]">
              <span className=" font-bold text-[--32px] shrink-0 w-[25%] text-center py-[--sy-40px]">
                Week 4
              </span>
              <p className=" flex items-center text-[--24px] px-[--44px] border-l-[3px] border-l-[#353535]">
                Lorem ipsum dolor sit amet consectetur. Arcu odio et in aliquet
                lacus adipiscing neque volutpat. Sapien sed vulputate sapien
                nibh duis.{" "}
              </p>
            </div>
            <div className=" flex border-b-[3px] border-b-[#353535]">
              <span className=" font-bold text-[--32px] shrink-0 w-[25%] text-center py-[--sy-40px]">
                Week 5
              </span>
              <p className=" flex items-center text-[--24px] px-[--44px] border-l-[3px] border-l-[#353535]">
                Lorem ipsum dolor sit amet consectetur. Arcu odio et in aliquet
                lacus adipiscing neque volutpat. Sapien sed vulputate sapien
                nibh duis.{" "}
              </p>
            </div>
            <div className=" flex">
              <span className=" font-bold text-[--32px] shrink-0 w-[25%] text-center py-[--sy-40px]">
                Week 6
              </span>
              <p className=" flex items-center text-[--24px] px-[--44px] border-l-[3px] border-l-[#353535]">
                Lorem ipsum dolor sit amet consectetur. Arcu odio et in aliquet
                lacus adipiscing neque volutpat. Sapien sed vulputate sapien
                nibh duis.{" "}
              </p>
            </div>
          </div>
          <h3 id="Service-Process" className=" font-semibold text-[--40px] mb-[148px]">
            Service Process
          </h3>
          <div className=" bg-[#7272722B] w-full rounded-[--25px] h-[31px] relative mb-[231px]">
            <div className=" absolute left-0 top-0 w-1/4 bg-[#F8F24B] h-full rounded-[--25px]"></div>
            <span className=" absolute bottom-full -translate-y-3/4 left-[10%] rounded-3xl py-[--sy-7px] px-[--39px] bg-[#F8F24B] font-semibold text-black text-[--26px]">
              Brief
              <svg
                className=" absolute left-1/2 top-full -translate-x-1/2 -translate-y-1/4"
                width="27"
                height="24"
                viewBox="0 0 27 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.8385 22.5632C14.814 24.3376 12.2529 24.3376 11.2284 22.5632L0.85577 4.59729C-0.168688 2.82288 1.11188 0.604857 3.1608 0.604857L23.9061 0.604855C25.955 0.604855 27.2356 2.82287 26.2111 4.59729L15.8385 22.5632Z"
                  fill="#F8F24B"
                />
              </svg>
            </span>
            <span className=" absolute bottom-full -translate-y-3/4 left-[35%] rounded-3xl py-[--sy-7px] px-[--39px] bg-[#484848] font-semibold text-[--26px]">
              Brief
              <svg
                className=" absolute left-1/2 top-full -translate-x-1/2 -translate-y-1/4"
                width="27"
                height="24"
                viewBox="0 0 27 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.8385 22.5632C14.814 24.3376 12.2529 24.3376 11.2284 22.5632L0.85577 4.59729C-0.168688 2.82288 1.11188 0.604857 3.1608 0.604857L23.9061 0.604855C25.955 0.604855 27.2356 2.82287 26.2111 4.59729L15.8385 22.5632Z"
                  fill="#484848"
                />
              </svg>
            </span>
            <span className=" absolute top-full translate-y-3/4 left-[25%] rounded-3xl py-[--sy-7px] px-[--39px] bg-[#484848] font-semibold text-[--26px]">
              Research
              <svg
                className=" absolute left-1/2 bottom-full -translate-x-1/2 translate-y-1/4"
                width="27"
                height="24"
                viewBox="0 0 27 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.9955 1.99243C12.02 0.218021 14.5811 0.218018 15.6056 1.99243L25.9782 19.9584C27.0027 21.7328 25.7221 23.9508 23.6732 23.9508H2.9279C0.878983 23.9508 -0.401594 21.7328 0.622864 19.9584L10.9955 1.99243Z"
                  fill="#484848"
                />
              </svg>
            </span>
            <span className=" absolute top-full translate-y-3/4 left-[55%] rounded-3xl py-[--sy-7px] px-[--39px] bg-[#484848] font-semibold text-[--26px]">
              Research
              <svg
                className=" absolute left-1/2 bottom-full -translate-x-1/2 translate-y-1/4"
                width="27"
                height="24"
                viewBox="0 0 27 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.9955 1.99243C12.02 0.218021 14.5811 0.218018 15.6056 1.99243L25.9782 19.9584C27.0027 21.7328 25.7221 23.9508 23.6732 23.9508H2.9279C0.878983 23.9508 -0.401594 21.7328 0.622864 19.9584L10.9955 1.99243Z"
                  fill="#484848"
                />
              </svg>
            </span>
            <span className=" absolute top-full translate-y-3/4 left-[80%] rounded-3xl py-[--sy-7px] px-[--39px] bg-[#484848] font-semibold text-[--26px]">
              Research
              <svg
                className=" absolute left-1/2 bottom-full -translate-x-1/2 translate-y-1/4"
                width="27"
                height="24"
                viewBox="0 0 27 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.9955 1.99243C12.02 0.218021 14.5811 0.218018 15.6056 1.99243L25.9782 19.9584C27.0027 21.7328 25.7221 23.9508 23.6732 23.9508H2.9279C0.878983 23.9508 -0.401594 21.7328 0.622864 19.9584L10.9955 1.99243Z"
                  fill="#484848"
                />
              </svg>
            </span>
          </div>
          <h3 id="Goals&Revenue" className=" font-semibold text-[--40px] mb-[--sy-60px]">
            Goals & Revenue
          </h3>
          <div className=" w-full grid grid-cols-2 gap-[--26px] mb-[--sy-64px]">
            <div className=" col-span-1">
              <div className="h-[320px] rounded-[--25px] bg-[#2b2b2b] relative mb-[--sy-26px]">
                <div className="bg-[#1d1d1d] rounded-[--25px] text-[--33px] w-fit font-bold p-4 absolute left-[25%] top-full -translate-y-1/2 z-10">
                  <span className=" text-[--80px]">50%</span> <br /> INCREASE{" "}
                  <br /> IN TRUST
                  <span
                    className=" w-[--28px] h-[--28px] rounded-full bg-transparent absolute left-full top-1/2 -translate-y-full"
                    style={{ boxShadow: "-10px 10px 0 #1d1d1d" }}
                  ></span>
                  <span
                    className=" w-[--28px] h-[--28px] rounded-full bg-transparent absolute left-full top-1/2 translate-y-full"
                    style={{ boxShadow: "-10px -10px 0 #1d1d1d" }}
                  ></span>
                  <span
                    className=" w-[--28px] h-[--28px] rounded-full bg-transparent absolute right-full top-1/2 translate-y-full"
                    style={{ boxShadow: "10px -10px 0 #1d1d1d" }}
                  ></span>
                  <span
                    className=" w-[--28px] h-[--28px] rounded-full bg-transparent absolute right-full top-1/2 -translate-y-full"
                    style={{ boxShadow: "10px 10px 0 #1d1d1d" }}
                  ></span>
                </div>
              </div>
              <div className="h-[600px] rounded-[--25px] bg-[#2b2b2b] relative">
                <div className="bg-[#1d1d1d] rounded-tl-[--25px] text-[--33px] w-fit font-bold p-4 absolute right-0 top-full -translate-y-full z-10">
                  <span className=" text-[--80px]">50%</span> <br /> INCREASE{" "}
                  <br /> IN TRUST
                  <span
                    className=" w-[--28px] h-[--28px] rounded-full bg-transparent absolute right-full top-full -translate-y-full"
                    style={{ boxShadow: "10px 10px 0 #1d1d1d" }}
                  ></span>
                  <span
                    className=" w-[--28px] h-[--28px] rounded-full bg-transparent absolute right-0 bottom-full"
                    style={{ boxShadow: "10px 10px 0 #1d1d1d" }}
                  ></span>
                </div>
              </div>
            </div>
            <div className=" col-span-1 flex h-full w-full gap-[--sy-26px] flex-col">
              <div className="h-[460px] rounded-[--25px] bg-[#2b2b2b] relative">
                <div className="bg-[#1d1d1d] rounded-tr-[--25px] text-[--33px] w-fit font-bold p-4 absolute left-0 top-full -translate-y-full z-10 pt-[--sy-30px]">
                  <span className=" text-[--35px]">
                    15% REVENUE <br /> INCREASE
                  </span>
                  <span
                    className=" w-[--28px] h-[--28px] rounded-full bg-transparent absolute left-0 bottom-full "
                    style={{ boxShadow: "-10px 10px 0 #1d1d1d" }}
                  ></span>
                  <span
                    className=" w-[--28px] h-[--28px] rounded-full bg-transparent absolute left-full bottom-0 "
                    style={{ boxShadow: "-10px 10px 0 #1d1d1d" }}
                  ></span>
                </div>
              </div>
              <div className=" rounded-[--25px] bg-[#2b2b2b] relative grow"></div>
            </div>
          </div>
          <Link
          id="Live-Project"
            href={""}
            className=" bg-[#F8F24B] rounded-[--71px] px-[--55px] py-[--sy-35px] text-black flex justify-between items-center"
          >
            <span className=" [font-family:Alfa_Slab_One] text-[--71px]">LIVE WEBSITE</span>
            <svg
              width="76"
              height="76"
              viewBox="0 0 76 76"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="76" height="76" rx="38" fill="#1D1D1D" />
              <g clip-path="url(#clip0_3249_53303)">
                <path
                  d="M41.2767 53.4115L56.9896 38.6277L42.2875 22.8382C42.1561 22.6533 41.9865 22.4988 41.7902 22.3852C41.5939 22.2715 41.3755 22.2013 41.1498 22.1794C40.924 22.1575 40.6962 22.1843 40.4817 22.2581C40.2672 22.3319 40.0711 22.4509 39.9066 22.6071C39.7421 22.7633 39.6131 22.953 39.5283 23.1634C39.4435 23.3738 39.4049 23.5999 39.4151 23.8265C39.4253 24.0531 39.484 24.2748 39.5874 24.4768C39.6907 24.6787 39.8362 24.856 40.0141 24.9968L51.0127 36.8459L20.7401 35.845C20.3204 35.8311 19.9124 35.9845 19.6058 36.2715C19.2992 36.5585 19.1192 36.9555 19.1053 37.3752C19.0914 37.7948 19.2448 38.2029 19.5318 38.5095C19.8188 38.816 20.2158 38.9961 20.6354 39.0099L50.9081 40.0108L39.1508 51.1075C38.8451 51.3957 38.6663 51.7936 38.6539 52.2136C38.6415 52.6335 38.7965 53.0412 39.0847 53.347C39.3729 53.6527 39.7707 53.8315 40.1907 53.8439C40.6107 53.8563 41.0184 53.7013 41.3241 53.4131L41.2767 53.4115Z"
                  fill="#F8F24B"
                />
              </g>
              <defs>
                <clipPath id="clip0_3249_53303">
                  <rect
                    width="57"
                    height="57"
                    fill="white"
                    transform="translate(67.4238 10.458) rotate(91.8936)"
                  />
                </clipPath>
              </defs>
            </svg>
          </Link>
        </div>
        <div className="col-span-1 w-full px-[--34px] py-[--sy-28px]">
          <h4 className=" font-semibold text-[--20px] mb-[--sy-35px]">
            Quick Index
          </h4>
          <div className=" w-full border-t-[1px] border-t-white">
            <div className=" flex justify-between items-center py-[--sy-35px] border-b-[1px] border-b-[#353535]">
              <Link href={"#Project-Overview"} className="text-[--20px] font-semibold">
                Project overview
              </Link>
              <svg
                width="8"
                height="16"
                viewBox="0 0 8 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L5.96222 6.09634C7.09634 7.2611 7.09634 9.11727 5.96223 10.282L1.36842 15"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </div>
            <div className=" flex justify-between items-center py-[--sy-35px] border-b-[1px] border-b-[#353535]">
              <Link href={"#Project-Objectives"} className="text-[--20px] font-semibold">
              Project Objectives
              </Link>
              <svg
                width="8"
                height="16"
                viewBox="0 0 8 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L5.96222 6.09634C7.09634 7.2611 7.09634 9.11727 5.96223 10.282L1.36842 15"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </div>
            <div className=" flex justify-between items-center py-[--sy-35px] border-b-[1px] border-b-[#353535]">
              <Link href={"#Project-Timeline"} className="text-[--20px] font-semibold">
              Project Timeline
              </Link>
              <svg
                width="8"
                height="16"
                viewBox="0 0 8 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L5.96222 6.09634C7.09634 7.2611 7.09634 9.11727 5.96223 10.282L1.36842 15"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </div>
            <div className=" flex justify-between items-center py-[--sy-35px] border-b-[1px] border-b-[#353535]">
              <Link href={"#Service-Process"} className="text-[--20px] font-semibold">
              Service Process
              </Link>
              <svg
                width="8"
                height="16"
                viewBox="0 0 8 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L5.96222 6.09634C7.09634 7.2611 7.09634 9.11727 5.96223 10.282L1.36842 15"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </div>
            <div className=" flex justify-between items-center py-[--sy-35px] border-b-[1px] border-b-[#353535]">
              <Link href={"#Goals&Revenue"} className="text-[--20px] font-semibold">
              Goals & Revenue
              </Link>
              <svg
                width="8"
                height="16"
                viewBox="0 0 8 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L5.96222 6.09634C7.09634 7.2611 7.09634 9.11727 5.96223 10.282L1.36842 15"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </div>
            <div className=" flex justify-between items-center py-[--sy-35px] border-b-[1px] border-b-[#353535]">
              <Link href={"#Live-Project"} className="text-[--20px] font-semibold">
              Live Project
              </Link>
              <svg
                width="8"
                height="16"
                viewBox="0 0 8 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L5.96222 6.09634C7.09634 7.2611 7.09634 9.11727 5.96223 10.282L1.36842 15"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
