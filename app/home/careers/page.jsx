"use client";
import { useState } from "react";
import NavBar from "../../_components/NavBar/NavBar";
import styles from "./careers.module.css";

const FilterBtn = ({ children, active, handClick }) => {
  return (
    <button
      className={`relative block overflow-hidden no-underline 
      ${active ? "bg-[--highlight-yellow]" : "bg-[--primary-black]"}
      rounded-[--38px] border px-[--36px] py-[--10px] border-[--highlight-yellow] transition-all duration-500 group`}
      onClick={() => {
        handClick();
      }}
    >
      <span
        className={`relative text-[--20px] font-medium 
        ${
          active
            ? "text-[--primary-black] group-hover:text-white"
            : "text-white group-hover:text-[--primary-black]"
        }
         transition-all duration-500 z-10`}
      >
        {children}
      </span>
      <svg
        viewBox="0 0 170 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-full top-full w-full h-full group-hover:left-0 group-hover:top-0 scale-x-150 scale-y-125 transition-all duration-500"
        preserveAspectRatio="none"
      >
        <path
          d="M16.7327 7.51908L11.8206 10.4491C4.48999 14.8218 0 22.7281 0 31.2637C0 44.6491 10.8509 55.5 24.2363 55.5H131.017C144.538 55.5 155.5 44.5385 155.5 31.0167C155.5 22.604 151.181 14.7805 144.062 10.2981L141.759 8.84846C133.668 3.75376 123.36 3.79737 115.312 8.96036L114.919 9.21248C107.047 14.2626 96.9534 14.2626 89.0812 9.21248L87.4418 8.16075C80.2245 3.53083 70.9196 3.74448 63.9224 8.70077L63.658 8.88811C56.4028 14.0272 46.6684 13.9288 39.5186 8.64416C32.8442 3.71096 23.8606 3.26739 16.7327 7.51908Z"
          fill={
            active
              ? "url(#paint0_linear_3615_49916)"
              : "url(#paint0_linear_615_49913)"
          }
        />
        <path
          d="M31.2327 7.01908L25.0763 10.6913C18.5174 14.6037 14.5 21.6778 14.5 29.3149C14.5 41.2913 24.2087 51 36.1851 51H148.094C160.192 51 170 41.1923 170 29.0939C170 21.5668 166.135 14.5668 159.766 10.5562L156.259 8.34846C148.168 3.25376 137.86 3.29737 129.812 8.46036L129.419 8.71248C121.547 13.7626 111.453 13.7626 103.581 8.71248L101.942 7.66075C94.7245 3.03083 85.4196 3.24448 78.4224 8.20077L78.158 8.38811C70.9028 13.5272 61.1684 13.4288 54.0186 8.14416C47.3442 3.21096 38.3606 2.76739 31.2327 7.01908Z"
          fill={active ? "#1D1D1D" : "#F8F24B"}
        />
        <defs>
          <linearGradient
            id="paint0_linear_3615_49916"
            x1="100.5"
            y1="37"
            x2="100.5"
            y2="5.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color={active ? "#F8F24B" : "#1D1D1D"} />
            <stop offset="1" stop-color={active ? "#D8D241" : "#3F3F3F"} />
          </linearGradient>
        </defs>
      </svg>
    </button>
  );
};

const Careers = () => {
  const [filter, setFilter] = useState("Web Development");

  const jobs = ["Web Development", "UI/UX", "Front-End"];

  return (
    <>
      <NavBar />
      <header className="flex flex-col items-center justify-center gap-[--sy-20px] h-[40vh]">
        <h1 className="text-[--highlight-yellow] text-[--98px] [font-family:Alfa_Slab_One]">
          Careers
        </h1>
        <p className="text-[--24px] mt-4 w-full md:w-[55%] lg:w-[45%] text-center">
          Unlock new potential for your business with our comprehensive white
          label solutions. Our ready-to-deploy products and services allow you
          to quickly enhance your offerings without the hassle of in-house
          development.
        </p>
      </header>
      <main className="flex justify-center w-full py-20">
        <div className="flex flex-col gap-[--sy-38px]">
          <header className="flex flex-col gap-[--sy-44px]">
            <h2 className="text-[--highlight-yellow] text-[--35px] [font-family:Alfa_Slab_One]">
              Open Vacancies
            </h2>

            <div className="flex gap-[--sy-20px]">
              {jobs.map((job) => (
                <FilterBtn
                  key={job}
                  handClick={() => {
                    setFilter(job);
                    console.log(filter);
                  }}
                  active={filter === job}
                >
                  {job}
                </FilterBtn>
              ))}
            </div>
          </header>

          <div className="flex justify-center items-center w-full gap-[--163px]">
            <div className="flex flex-col gap-[--sy-48px] border-[--2px] border-[--highlight-yellow] rounded-[--32px] px-[--55px] py-[--41px]">
              <header>
                <h3 className="text-[--highlight-yellow] text-[--28px] font-bold">
                  {filter}
                </h3>
                <p className="text-[--15px] mt-4 max-w-[450px] ">
                  We're seeking a Senior Backend Developer to join our team and
                  contribute to the development of our cutting-edge products and
                  services.
                </p>
              </header>
              <div className="flex flex-col gap-[--sy-20px]">
                <h4 className="text-[--22px] font-bold">Responsibilities</h4>
                <ul className="list-disc pl-6">
                  <li className="text-[--17px]">
                    Develop and maintain backend services
                  </li>
                  <li className="text-[--17px]">
                    Collaborate with the front-end team to develop APIs
                  </li>
                  <li className="text-[--17px]">
                    Optimize application performance
                  </li>
                  <li className="text-[--17px]">
                    Write clean, maintainable code
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-[--sy-20px]">
                <h4 className="text-[--22px] font-bold">Benefits</h4>
                <ul className="list-disc pl-6">
                  <li className="text-[--17px]">
                    Competitive salary and benefits.{" "}
                  </li>
                  <li className="text-[--17px]">
                    Opportunities for professional growth and remote work
                    options.{" "}
                  </li>
                  <li className="text-[--17px]">
                    Dynamic work environment focused on innovation and
                    collaboration.{" "}
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-[--sy-20px]">
                <h4 className="text-[--22px] font-bold">Requirement</h4>
                <ul className="list-disc pl-6">
                  <li className="text-[--17px]">
                    3 years of backend development experience.
                  </li>
                  <li className="text-[--17px]">
                    Proficiency in Java, Python, or Node.js.
                  </li>
                  <li className="text-[--17px]">
                    Strong understanding of software architecture and cloud
                    platforms.
                  </li>
                  <li className="text-[--17px]">
                    Problem-solving and communication skills.{" "}
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative h-fit flex flex-col items-center justify-center">
              <svg
                viewBox="0 0 546 482"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute w-[--542px] -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              >
                <path
                  d="M60.9308 99.0757C28.2553 116.19 31.0374 160.264 31.0374 191.848C31.0374 228.119 9.87773 260.901 4.24216 295.839C-0.604572 325.887 2.9147 357.752 9.93612 387.104C18.1072 421.261 34.0623 452.638 65.3687 471.252C103.809 494.107 162.654 467.069 197.168 448.394C217.255 437.524 236.075 423.32 258.462 417.33C277.164 412.326 296.836 415.618 315.234 420.344C349.648 429.184 379.538 447.211 412.367 459.948C441.832 471.381 472.659 473.921 499.451 454.506C521.992 438.172 543.828 410.302 543.998 381.243C544.124 359.694 537.215 335.071 526.246 316.604C513.553 295.234 490.011 283.953 472.656 267.036C455.587 250.399 448.191 231.244 449.545 207.421C451.552 172.124 472.754 141.703 473.661 106.779C474.325 81.2153 468.998 55.8106 454.067 34.6044C437.202 10.6525 415.655 1.36338 386.828 2.03373C354.129 2.79411 322.715 11.991 293.965 27.4036C269.806 40.3554 249.494 59.6346 225.303 72.2824C184.906 93.4037 136.971 91.0936 92.7501 92.4611C81.4738 92.8099 71.0626 93.769 60.9308 99.0757Z"
                  fill="#F8F24B"
                  stroke="#F8F24B"
                  stroke-width="2.29075"
                  stroke-linecap="round"
                />
              </svg>
              <div className="relative w-[--366px] bg-[--primary-black] [box-shadow:0px_4px_12.2px_0px_#000000A3] rounded-[--20px] px-[--36px] py-[--43px]">
                <form className="flex flex-col gap-[--sy-20px]">
                  <div>
                    <label className="text-[--15px]" htmlFor="name">
                      Full Name*
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Enter your full name"
                      className="w-full px-[--13px] py-[--8px] rounded-[--5px] text-[#B1B1B1] mt-[--16px] bg-[--dark-gray-2]"
                    />
                  </div>
                  <div>
                    <label className="text-[--15px]" htmlFor="email">
                      Email*
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Enter your email address"
                      className="w-full px-[--13px] py-[--8px] rounded-[--5px] text-[#B1B1B1] mt-[--16px] bg-[--dark-gray-2]"
                    />
                  </div>
                  <div>
                    <label className="text-[--15px]" htmlFor="phone">
                      Phone Number*
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      placeholder="Enter your phone number"
                      required
                      className="w-full px-[--13px] py-[--8px] rounded-[--5px] text-[#B1B1B1] mt-[--16px] bg-[--dark-gray-2]"
                    />
                  </div>
                  <div>
                    <label className="text-[--15px]" htmlFor="cv">
                      Upload CV*
                    </label>
                    <div className="relative cursor-pointer text-center w-full px-[--13px] py-[--8px] rounded-[--5px] text-[#4F4F4F] mt-[--16px] border border-[#4F4F4F]">
                      Attach PDF
                      <input
                        type="file"
                        id="cv"
                        accept=".pdf"
                        className="absolute w-full h-full opacity-0"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-[--15px]" htmlFor="portfolio">
                      Portfolio Link
                    </label>
                    <input
                      type="url"
                      id="portfolio"
                      placeholder="Enter your portfolio link"
                      className="w-full px-[--13px] py-[--8px] rounded-[--5px] text-[#B1B1B1] mt-[--16px] bg-[--dark-gray-2]"
                    />
                  </div>

                  <div>
                    <label className="text-[--15px]" htmlFor="linkedin">
                      LinkedIn Profile
                    </label>
                    <input
                      type="url"
                      id="linkedin"
                      placeholder="Enter your LinkedIn profile link"
                      className="w-full px-[--13px] py-[--8px] rounded-[--5px] text-[#B1B1B1] mt-[--16px] bg-[--dark-gray-2]"
                    />
                  </div>

                  <button className="mx-auto text-[--14px] w-fit font-bold bg-[--highlight-yellow] text-[--primary-black] rounded-[--30px] px-[--45px] py-[--13px] mt-[--16px]">
                    Submit Application
                  </button>
                </form>
              </div>
              <div className="absolute -z-10 top-0 -translate-y-[68%] w-[74%] h-[--150px] left-1/2 -translate-x-1/2">
                <div
                  className={`w-full h-full bg-[--primary-black] [box-shadow:0px_0px_12.22px_0px_#000000A3] rounded-t-[--20px] ${styles.topJuiceBox}`}
                ></div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 166 195"
                  fill="none"
                  className="absolute -top-[75%] right-[calc(20%_-_50%)] w-[--165px]"
                >
                  <path
                    d="M49.3562 104.069L33.5 187.368H5.38672L20.2415 106.071C20.304 105.633 20.3666 105.227 20.3978 104.789L22.4618 81.5532C22.5244 80.8027 23.7127 76.0493 24.9949 71.3897C26.6211 65.6043 30.5927 60.757 35.9403 58.005L142.58 3.27811C144.143 1.99594 146.301 1.71448 148.177 2.43375C157.434 5.99882 161.499 12.2846 163.219 16.4438C164.189 18.7267 163.563 21.3536 161.624 22.886L54.2972 85.8689C53.0151 86.9321 52.2645 88.4957 52.2645 90.1845L50.3256 98.3466C50.3569 99.2535 49.3562 101.036 49.3562 104.069Z"
                    fill="white"
                    stroke="#1D1D1D"
                    stroke-width="2.40168"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M35.0983 61.1362C35.0983 61.1362 34.7856 61.0424 34.6292 60.9798C34.2227 60.8547 33.7536 60.6984 33.3158 60.8235C32.8154 60.9798 32.4714 61.4176 32.19 61.8867C31.502 63.1063 31.1267 64.5449 31.158 65.9522C29.5631 64.67 26.9987 64.7951 25.5289 66.2023C24.0591 67.6096 23.8402 70.1739 25.0599 71.8001C23.465 71.4874 21.6199 71.4248 20.4315 72.5194C19.0243 73.8641 19.3057 76.2095 20.0875 77.9608C20.8693 79.7121 22.089 81.432 22.1828 83.3709C20.7755 83.152 18.8366 83.8088 18.2112 85.3724C17.3981 87.4364 16.7101 88.8749 17.9923 90.7825C19.0555 92.3462 21.6512 94.7541 23.4024 95.4734C29.0002 97.7563 34.598 100.07 40.1645 102.353C41.3841 102.854 42.635 103.354 43.9485 103.604C44.9805 103.792 46.075 103.823 47.107 103.667C48.3266 103.479 49.6401 103.01 50.2342 101.916C50.8284 100.821 50.4219 100.321 49.0772 99.0072C50.4532 99.4763 52.1731 98.757 52.6422 97.381C53.1113 96.005 51.7979 95.6923 50.6095 94.2225C52.1731 94.6916 54.0808 94.1287 54.8626 92.6902C55.6444 91.2516 51.3288 89.344 50.672 87.9367C51.704 88.4371 52.955 91.5018 55.2066 90.032C55.488 89.8444 56.7077 88.5309 56.8953 88.2495C57.6458 86.936 58.0524 85.2786 57.4895 83.8713C56.9891 82.6204 55.832 81.776 54.7688 80.963C49.9528 77.2103 47.0132 71.7376 43.0728 67.078C42.0721 65.8896 38.0067 62.4184 36.3492 61.4176C34.8794 60.542 35.0358 61.0736 35.0358 61.0736L35.0983 61.1362Z"
                    fill="white"
                    stroke="#1D1D1D"
                    stroke-width="2.40168"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M30.8477 65.075C33.7873 70.0473 40.073 76.8021 43.6694 81.3054C45.7334 83.8697 47.7974 86.4341 50.737 87.9977"
                    fill="white"
                  />
                  <path
                    d="M30.8477 65.075C33.7873 70.0473 40.073 76.8021 43.6694 81.3054C45.7334 83.8697 47.7974 86.4341 50.737 87.9977"
                    stroke="#1D1D1D"
                    stroke-width="2.40168"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M24.1543 70.6744C28.3448 75.9595 33.2859 84.622 39.5091 88.6874C43.3556 91.2205 47.2647 93.7848 51.2363 94.4103"
                    fill="white"
                  />
                  <path
                    d="M24.1543 70.6744C28.3448 75.9595 33.2859 84.622 39.5091 88.6874C43.3556 91.2205 47.2647 93.7848 51.2363 94.4103"
                    stroke="#1D1D1D"
                    stroke-width="2.40168"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M21.6855 82.183C27.8462 88.9378 40.6054 95.9116 49.1428 99.0701L21.6855 82.183Z"
                    fill="white"
                  />
                  <path
                    d="M21.6855 82.183C27.8462 88.9378 40.6054 95.9116 49.1428 99.0701"
                    stroke="#1D1D1D"
                    stroke-width="2.40168"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M160.73 21.4077C163.215 19.1864 161.761 13.5047 157.482 8.7173C153.203 3.92994 147.72 1.84979 145.234 4.07116C142.749 6.29252 144.203 11.9742 148.482 16.7616C152.761 21.5489 158.244 23.6291 160.73 21.4077Z"
                    fill="black"
                    stroke="#141414"
                    stroke-width="2.40168"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M2 179.5C5 189 12 190 37.5 185.5"
                    stroke="black"
                    stroke-width="2.28428"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Careers;
