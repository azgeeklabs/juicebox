import NavBar from "../../_components/NavBar/NavBar";

const Careers = () => {
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
      <main className="flex w-full gap-[--sy-20px] py-20">
        <div className="flex flex-col gap-[--sy-20px]">
          <h2 className="text-[--highlight-yellow] text-[--35px] [font-family:Alfa_Slab_One]">
            Open Vacancies
          </h2>

          <div className="flex flex-col gap-[--sy-20px]">
            <button className="relative block overflow-hidden no-underline text-[--20px] font-medium text-white hover:text-[--primary-black] rounded-[--38px] border px-[--36px] py-[--10px] border-[--highlight-yellow] transition-all duration-500 group">
              Login
              <svg
                preserveAspectRatio="none"
                viewBox="0 0 170 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-full top-full w-full h-full group-hover:left-0 group-hover:top-0 scale-x-150 scale-y-125 transition-all duration-500 -z-10"
              >
                <path
                  d="M16.7327 7.51908L11.8206 10.4491C4.48999 14.8218 0 22.7281 0 31.2637C0 44.6491 10.8509 55.5 24.2363 55.5H131.017C144.538 55.5 155.5 44.5385 155.5 31.0167C155.5 22.604 151.181 14.7805 144.062 10.2981L141.759 8.84846C133.668 3.75376 123.36 3.79737 115.312 8.96036L114.919 9.21248C107.047 14.2626 96.9534 14.2626 89.0812 9.21248L87.4418 8.16075C80.2245 3.53083 70.9196 3.74448 63.9224 8.70077L63.658 8.88811C56.4028 14.0272 46.6684 13.9288 39.5186 8.64416C32.8442 3.71096 23.8606 3.26739 16.7327 7.51908Z"
                  fill="url(#paint0_linear_3615_49913)"
                />
                <path
                  d="M31.2327 7.01908L25.0763 10.6913C18.5174 14.6037 14.5 21.6778 14.5 29.3149C14.5 41.2913 24.2087 51 36.1851 51H148.094C160.192 51 170 41.1923 170 29.0939C170 21.5668 166.135 14.5668 159.766 10.5562L156.259 8.34846C148.168 3.25376 137.86 3.29737 129.812 8.46036L129.419 8.71248C121.547 13.7626 111.453 13.7626 103.581 8.71248L101.942 7.66075C94.7245 3.03083 85.4196 3.24448 78.4224 8.20077L78.158 8.38811C70.9028 13.5272 61.1684 13.4288 54.0186 8.14416C47.3442 3.21096 38.3606 2.76739 31.2327 7.01908Z"
                  fill="#F8F24B"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_3615_49913"
                    x1="100.5"
                    y1="37"
                    x2="100.5"
                    y2="5.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#F8F24B" />
                    <stop offset="1" stop-color="#D8D241" />
                  </linearGradient>
                </defs>
              </svg>
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Careers;
