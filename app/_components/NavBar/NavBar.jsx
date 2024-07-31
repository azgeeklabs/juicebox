import Link from "next/link";

const NavBar = () => {
  const navItems = [
    {
      name: "Home",
      link: "#",
    },
    {
      name: "About Us",
      link: "#about-us",
      onClick: () => {
        console.log("About Us");
        if (window.location.pathname === "/" && window.scrollY < innerHeight) {
          window.scrollBy({
            top: window.innerHeight + (100 - window.scrollY),
            behavior: "smooth",
          });
        }
      },
    },
    {
      name: "Services",
      link: "/#services",
    },
    {
      name: "Our Work",
      link: "/#our-work",
    },
  ];

  return (
    <div className="fixed inset-x-0 top-0 bg-[--primary-black] flex justify-between items-center py-[--19px] px-[--90px] z-[99999] [box-shadow:0px_4px_15.2px_0px_#00000040]">
      <svg
        className="w-[--98px]"
        viewBox="0 0 98 61"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.40442 22.9026C3.05141 22.5592 1.93716 22.0837 1.03516 21.5026V16.3779H6.87167V16.6685C6.87167 17.7251 7.37573 18.227 8.38386 18.227C8.91445 18.227 9.31239 18.0949 9.57769 17.8044C9.84298 17.5138 9.97563 17.0911 9.97563 16.4836V5.17761H7.3492V0.396347H19.6059V5.15119H18.1467V14.925C18.1467 17.7779 17.2978 19.8912 15.6264 21.2912C13.9551 22.6913 11.6205 23.4045 8.64915 23.4045C7.16349 23.4045 5.7309 23.246 4.37789 22.9026H4.40442Z"
          fill="#F8F24B"
        />
        <path
          d="M24.5662 21.4233C22.8948 20.0761 22.0724 17.91 22.0724 14.925V5.17761H20.6133V0.396347H31.4108V5.15119H30.2435V16.3779C30.2435 17.0119 30.3762 17.4874 30.668 17.7779C30.9598 18.0685 31.3843 18.227 31.9414 18.227C32.4985 18.227 32.923 18.0685 33.2148 17.7779C33.5067 17.4874 33.6393 17.0119 33.6393 16.3779V5.17761H32.472V0.396347H42.4737V5.15119H41.0145V14.8722C41.0145 17.8836 40.2187 20.0497 38.6004 21.3705C36.982 22.7177 34.674 23.3781 31.6496 23.3781C28.6252 23.3781 26.2376 22.7177 24.5662 21.3705V21.4233Z"
          fill="#F8F24B"
        />
        <path
          d="M43.5059 23.0083V18.2534H44.965V5.17761H43.5059V0.396347H54.5952V5.15119H53.1361V18.227H54.5952V22.9819H43.5059V23.0083Z"
          fill="#F8F24B"
        />
        <path
          d="M58.5779 20.6307C56.5882 18.7816 55.5801 15.7966 55.5801 11.7022C55.5801 3.88312 59.4003 0 67.0143 0C68.8714 0 70.5693 0.211326 72.1611 0.660395C73.7529 1.10946 74.9202 1.61136 75.716 2.13968V9.40403H68.7122V7.31718C68.7122 6.57753 68.553 6.04922 68.2082 5.6794C67.8898 5.33599 67.3857 5.15108 66.7225 5.15108C66.0593 5.15108 65.5552 5.33599 65.2369 5.6794C64.9185 6.0228 64.7328 6.57753 64.7328 7.31718V16.0872C64.7328 16.8269 64.892 17.3552 65.2369 17.725C65.5817 18.0948 66.0593 18.2533 66.7225 18.2533C67.3857 18.2533 67.8898 18.0684 68.2082 17.725C68.5265 17.3816 68.7122 16.8269 68.7122 16.0872V13.7362H75.716V21.2647C74.9202 21.8195 73.7263 22.2949 72.1611 22.744C70.5958 23.1931 68.8979 23.4044 67.0674 23.4044C63.3798 23.4044 60.5676 22.4798 58.5514 20.6043L58.5779 20.6307Z"
          fill="#F8F24B"
        />
        <path
          d="M76.8281 23.0083V18.2534H78.2873V5.17761H76.8281V0.396347H96.5131V9.16639H89.9868V5.15119H86.4584V9.74754H89.0317V13.0495H86.4584V18.227H89.9868V13.6307H96.5131V22.9819H76.8281V23.0083Z"
          fill="#F8F24B"
        />
        <path
          d="M0 53.0695H2.12237V34.0501H0V27.1292H19.4727C23.0012 27.1292 25.7602 27.8424 27.75 29.2952C29.7397 30.7217 30.7213 32.7821 30.7213 35.4765C30.7213 37.1407 30.3233 38.5408 29.5274 39.6767C28.7316 40.8125 27.803 41.6843 26.7418 42.2654C25.6807 42.8465 24.646 43.2428 23.6644 43.4277V43.8504C25.6807 44.0353 27.4847 44.6692 29.103 45.7523C30.7213 46.8353 31.5172 48.7373 31.5172 51.5109C31.5172 54.4695 30.4029 56.6356 28.1744 58.0092C25.9459 59.3828 23.0277 60.0696 19.4727 60.0696H0V53.1487V53.0695ZM16.2892 40.971C17.1116 40.971 17.7218 40.7597 18.1462 40.3106C18.5442 39.8616 18.7564 39.2012 18.7564 38.2502V36.7181C18.7564 35.7935 18.5442 35.1067 18.1462 34.6577C17.7483 34.2086 17.1116 33.9973 16.2892 33.9973H14.0076V40.9182H16.2892V40.971ZM16.581 53.0695C17.4034 53.0695 18.0136 52.8581 18.4381 52.4091C18.836 51.96 19.0483 51.2996 19.0483 50.3486V48.4995C19.0483 47.575 18.836 46.8882 18.4381 46.4391C18.0401 45.99 17.4034 45.7787 16.581 45.7787H13.9811V53.043H16.581V53.0695Z"
          fill="#F8F24B"
        />
        <path
          d="M36.8745 56.5299C34.0623 53.8355 32.6562 49.5033 32.6562 43.5597C32.6562 37.6162 34.0623 33.284 36.8745 30.5896C39.6866 27.8952 43.6926 26.5215 48.8658 26.5215C54.0391 26.5215 58.0451 27.8688 60.8572 30.5896C63.6693 33.284 65.0754 37.6162 65.0754 43.5597C65.0754 49.5033 63.6693 53.8355 60.8572 56.5299C58.0451 59.2243 54.0391 60.5979 48.8658 60.5979C43.6926 60.5979 39.6866 59.2507 36.8745 56.5299ZM51.0413 52.3034C51.5188 51.8015 51.7576 51.009 51.7576 49.9259V37.1671C51.7576 36.0841 51.5188 35.318 51.0413 34.7897C50.5637 34.2878 49.8474 34.0236 48.8658 34.0236C47.8842 34.0236 47.1945 34.2878 46.6904 34.7897C46.2129 35.2916 45.9741 36.0841 45.9741 37.1671V49.9259C45.9741 51.0354 46.2129 51.8279 46.6904 52.3034C47.1679 52.8053 47.8842 53.043 48.8658 53.043C49.8474 53.043 50.5372 52.7789 51.0413 52.277V52.3034Z"
          fill="#F8F24B"
        />
        <path
          d="M96.2229 53.0691H98.0004V59.99H81.95V53.0691H83.7009L81.2337 49.6086H80.8092L78.342 53.0691H80.0929V59.99H65.2363V53.0691H67.4383L75.5829 43.9292L67.0934 34.0497H65.3159V27.1288H81.2337V34.0497H79.6154L81.95 37.5102H82.3744L84.7091 34.0497H83.0907V27.1288H97.8147V34.0497H95.6127L87.6008 43.0575L96.2229 53.0691Z"
          fill="#F8F24B"
        />
      </svg>

      <ul className="flex gap-[--165px]">
        {navItems.map((item) => (
          <li key={item.name}>
            {item.onClick ? (
              <button
                className="no-underline text-[--20px] font-medium text-white hover:underline hover:text-[--highlight-yellow] transition-all duration-500"
                onClick={item.onClick ? item.onClick : null}
              >
                {item.name}
              </button>
            ) : (
              <Link
                href={item.link}
                className="no-underline text-[--20px] font-medium text-white hover:underline hover:text-[--highlight-yellow] transition-all duration-500"
              >
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ul>
      <div>
        <button className="mr-[--16px]">
          <Link
            href="/login"
            className="relative block overflow-hidden no-underline text-[--20px] font-medium text-white hover:text-[--primary-black] rounded-[--38px] border px-[--36px] py-[--10px] border-[--highlight-yellow] transition-all duration-500 group"
          >
            Login
            <svg
              viewBox="0 0 170 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-full top-full w-full h-full group-hover:left-0 group-hover:top-0 scale-x-150 scale-y-125 transition-all duration-700 -z-10 [transition-timing-function:cubic-bezier(0.175,_0.885,_0.32,_1.275)]"
              preserveAspectRatio="none"
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
          </Link>
        </button>

        <button>
          <Link
            href="/sign-up"
            className="relative block overflow-hidden no-underline bg-[--highlight-yellow] rounded-[--38px] border px-[--36px] py-[--10px] border-[--highlight-yellow] transition-all duration-500 group"
          >
            <span className="relative text-[--20px] font-medium text-[--primary-black] group-hover:text-white transition-all duration-500 z-10">
              Sign Up
            </span>
            <svg
              viewBox="0 0 170 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-full top-full w-full h-full group-hover:left-0 group-hover:top-0 scale-x-150 scale-y-125 transition-all duration-700 [transition-timing-function:cubic-bezier(0.175,_0.885,_0.32,_1.275)]"
              preserveAspectRatio="none"
            >
              <path
                d="M16.7327 7.51908L11.8206 10.4491C4.48999 14.8218 0 22.7281 0 31.2637C0 44.6491 10.8509 55.5 24.2363 55.5H131.017C144.538 55.5 155.5 44.5385 155.5 31.0167C155.5 22.604 151.181 14.7805 144.062 10.2981L141.759 8.84846C133.668 3.75376 123.36 3.79737 115.312 8.96036L114.919 9.21248C107.047 14.2626 96.9534 14.2626 89.0812 9.21248L87.4418 8.16075C80.2245 3.53083 70.9196 3.74448 63.9224 8.70077L63.658 8.88811C56.4028 14.0272 46.6684 13.9288 39.5186 8.64416C32.8442 3.71096 23.8606 3.26739 16.7327 7.51908Z"
                fill="url(#paint0_linear_3615_49916)"
              />
              <path
                d="M31.2327 7.01908L25.0763 10.6913C18.5174 14.6037 14.5 21.6778 14.5 29.3149C14.5 41.2913 24.2087 51 36.1851 51H148.094C160.192 51 170 41.1923 170 29.0939C170 21.5668 166.135 14.5668 159.766 10.5562L156.259 8.34846C148.168 3.25376 137.86 3.29737 129.812 8.46036L129.419 8.71248C121.547 13.7626 111.453 13.7626 103.581 8.71248L101.942 7.66075C94.7245 3.03083 85.4196 3.24448 78.4224 8.20077L78.158 8.38811C70.9028 13.5272 61.1684 13.4288 54.0186 8.14416C47.3442 3.21096 38.3606 2.76739 31.2327 7.01908Z"
                fill="#1D1D1D"
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
                  <stop stop-color="#1D1D1D" />
                  <stop offset="1" stop-color="#3F3F3F" />
                </linearGradient>
              </defs>
            </svg>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default NavBar;
