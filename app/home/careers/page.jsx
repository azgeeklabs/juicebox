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
                  viewBox="0 0 164 190"
                  fill="none"
                  className="absolute -top-[75%] right-[calc(20%_-_50%)] w-[--165px]"
                >
                  <path
                    d="M46.3562 105.069L30.5 188.368H2.38672L17.2415 107.071C17.304 106.633 17.3666 106.227 17.3978 105.789L19.4618 82.5532C19.5244 81.8027 20.7127 77.0492 21.9949 72.3896C23.6211 66.6042 27.5927 61.757 32.9403 59.005L139.58 4.27808C141.143 2.99591 143.301 2.71445 145.177 3.43372C154.434 6.99879 158.499 13.2846 160.219 17.4438C161.189 19.7267 160.563 22.3536 158.624 23.886L51.2972 86.8688C50.0151 87.9321 49.2645 89.4957 49.2645 91.1844L47.3256 99.3466C47.3569 100.253 46.3562 102.036 46.3562 105.069Z"
                    fill="white"
                    stroke="#1D1D1D"
                    stroke-width="2.40168"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M32.0983 62.1361C32.0983 62.1361 31.7856 62.0423 31.6292 61.9798C31.2227 61.8547 30.7536 61.6983 30.3158 61.8234C29.8154 61.9798 29.4714 62.4176 29.19 62.8867C28.502 64.1063 28.1267 65.5449 28.158 66.9521C26.5631 65.6699 23.9987 65.795 22.5289 67.2023C21.0591 68.6096 20.8402 71.1739 22.0599 72.8001C20.465 72.4874 18.6199 72.4248 17.4315 73.5193C16.0243 74.8641 16.3057 77.2095 17.0875 78.9608C17.8693 80.712 19.089 82.432 19.1828 84.3709C17.7755 84.152 15.8366 84.8087 15.2112 86.3724C14.3981 88.4363 13.7101 89.8749 14.9923 91.7825C16.0555 93.3461 18.6512 95.7541 20.4024 96.4734C26.0002 98.7563 31.598 101.07 37.1645 103.353C38.3841 103.854 39.635 104.354 40.9485 104.604C41.9805 104.792 43.075 104.823 44.107 104.667C45.3266 104.479 46.6401 104.01 47.2342 102.916C47.8284 101.821 47.4219 101.321 46.0772 100.007C47.4532 100.476 49.1731 99.757 49.6422 98.381C50.1113 97.005 48.7979 96.6923 47.6095 95.2225C49.1731 95.6916 51.0808 95.1287 51.8626 93.6901C52.6444 92.2516 48.3288 90.344 47.672 88.9367C48.704 89.4371 49.955 92.5018 52.2066 91.032C52.488 90.8443 53.7077 89.5309 53.8953 89.2494C54.6458 87.936 55.0524 86.2785 54.4895 84.8713C53.9891 83.6204 52.832 82.776 51.7688 81.9629C46.9528 78.2102 44.0132 72.7375 40.0728 68.0779C39.0721 66.8896 35.0067 63.4183 33.3492 62.4176C31.8794 61.542 32.0358 62.0736 32.0358 62.0736L32.0983 62.1361Z"
                    fill="white"
                    stroke="#1D1D1D"
                    stroke-width="2.40168"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M27.8477 66.0749C30.7873 71.0473 37.073 77.8021 40.6694 82.3054C42.7334 84.8697 44.7974 87.4341 47.737 88.9977"
                    fill="white"
                  />
                  <path
                    d="M27.8477 66.0749C30.7873 71.0473 37.073 77.8021 40.6694 82.3054C42.7334 84.8697 44.7974 87.4341 47.737 88.9977"
                    stroke="#1D1D1D"
                    stroke-width="2.40168"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M21.1543 71.6744C25.3448 76.9595 30.2859 85.622 36.5091 89.6874C40.3556 92.2205 44.2647 94.7848 48.2363 95.4103"
                    fill="white"
                  />
                  <path
                    d="M21.1543 71.6744C25.3448 76.9595 30.2859 85.622 36.5091 89.6874C40.3556 92.2205 44.2647 94.7848 48.2363 95.4103"
                    stroke="#1D1D1D"
                    stroke-width="2.40168"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M18.6855 83.183C24.8462 89.9378 37.6054 96.9116 46.1428 100.07Z"
                    fill="white"
                  />
                  <path
                    d="M18.6855 83.183C24.8462 89.9378 37.6054 96.9116 46.1428 100.07"
                    stroke="#1D1D1D"
                    stroke-width="2.40168"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M159.337 24.2144C161.822 21.9931 159.797 15.6721 154.813 10.0962C149.829 4.52032 143.774 1.80093 141.289 4.0223C138.804 6.24366 140.829 12.5646 145.813 18.1405C150.796 23.7164 156.851 26.4358 159.337 24.2144Z"
                    fill="black"
                    stroke="#1D1D1D"
                    stroke-width="2.40168"
                    stroke-miterlimit="10"
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
