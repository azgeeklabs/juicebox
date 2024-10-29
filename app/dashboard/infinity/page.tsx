import Link from "next/link";
import React from "react";
import styles from "./infinity.module.css";

const Page = () => {
  return (
    <div className="pt-[--sy-20px] flex w-full justify-center">
      <div className="w-full">
        <h3 className="text-[--38px] font-bold text-center mb-[--sy-32px]">
          Unlimited Services
        </h3>
        <p className="text-[--18px] text-center mb-[--sy-50px]">
          Overwhelmed by endless needs? Our Unlimited Services package squeezes
          out <br /> every frustration, giving you unlimited solutions across
          the board.
        </p>
        <div className="flex gap-[--26px] w-full justify-center">
          <div
            className={`${styles.card} w-[32%] bg-[#353535] rounded-[--20px] px-[--29px] py-[--30px] h-[55vh] overflow-y-auto`}
          >
            <h3 className="font-semibold text-[--22px] text-center mb-[--sy-26px]">
              Unlimited Designs
            </h3>
            <div className=" w-full flex flex-col gap-[--sy-27px]">
              <div className=" rounded-[--18px] bg-[#484848] px-[--28px] py-[--sy-21px]">
                <div className=" mb-[--sy-16px] px-[--15px] flex justify-between pb-[--sy-16px] border-b border-[#AFAFAF]">
                  <h4 className="font-medium text-[--20px]">Web Design</h4>
                  <Link
                    href="/dashboard/services/web-design"
                    className="text-[--16px] font-medium text-[#1d1d1d] px-[--15px] flex justify-center items-center py-[--sy-4px] bg-[#F8F24B] rounded-[--16px]"
                  >
                    Start Now
                  </Link>
                </div>
                <p className=" text-[--16px]">
                  Struggling with an outdated website that fails to engage your
                  audience?
                </p>
              </div>
              <div className=" rounded-[--18px] bg-[#484848] px-[--28px] py-[--sy-21px]">
                <div className=" mb-[--sy-16px] px-[--15px] flex justify-between pb-[--sy-16px] border-b border-[#AFAFAF]">
                  <h4 className="font-medium text-[--20px]">User Interface</h4>
                  <Link
                    href=""
                    className="text-[--16px] font-medium text-[#1d1d1d] px-[--15px] flex justify-center items-center py-[--sy-4px] bg-[#F8F24B] rounded-[--16px]"
                  >
                    Start Now
                  </Link>
                </div>
                <p className=" text-[--16px]">
                  Tired of confusing interfaces that frustrate your users?
                </p>
              </div>
              <div className=" rounded-[--18px] bg-[#484848] px-[--28px] py-[--sy-21px]">
                <div className=" mb-[--sy-16px] px-[--15px] flex justify-between pb-[--sy-16px] border-b border-[#AFAFAF]">
                  <h4 className="font-medium text-[--20px]">User Experience</h4>
                  <Link
                    href=""
                    className="text-[--16px] font-medium text-[#1d1d1d] px-[--15px] flex justify-center items-center py-[--sy-4px] bg-[#F8F24B] rounded-[--16px]"
                  >
                    Start Now
                  </Link>
                </div>
                <p className=" text-[--16px]">
                  Losing customers because of a frustrating user experience?
                </p>
              </div>
            </div>
          </div>
          <div
            className={`${styles.card} w-[32%] bg-[#353535] rounded-[--20px] px-[--29px] py-[--30px] h-[55vh] overflow-y-auto`}
          >
            <h3 className="font-semibold text-[--22px] text-center mb-[--sy-26px]">
              Unlimited Designs
            </h3>
            <div className=" w-full flex flex-col gap-[--sy-27px]">
              <div className=" rounded-[--18px] bg-[#484848] px-[--28px] py-[--sy-21px]">
                <div className=" mb-[--sy-16px] px-[--15px] flex justify-between pb-[--sy-16px] border-b border-[#AFAFAF]">
                  <h4 className="font-medium text-[--20px]">
                    Content Blog Post
                  </h4>
                  <Link
                    href=""
                    className="text-[--16px] font-medium text-[#1d1d1d] px-[--15px] flex justify-center items-center py-[--sy-4px] bg-[#F8F24B] rounded-[--16px]"
                  >
                    Start Now
                  </Link>
                </div>
                <p className=" text-[--16px]">
                  Struggling to engage your audience with compelling content? 
                </p>
              </div>
              <div className=" rounded-[--18px] bg-[#484848] px-[--28px] py-[--sy-21px]">
                <div className=" mb-[--sy-16px] px-[--15px] flex justify-between pb-[--sy-16px] border-b border-[#AFAFAF]">
                  <h4 className="font-medium text-[--20px]">Press Release</h4>
                  <Link
                    href=""
                    className="text-[--16px] font-medium text-[#1d1d1d] px-[--15px] flex justify-center items-center py-[--sy-4px] bg-[#F8F24B] rounded-[--16px]"
                  >
                    Start Now
                  </Link>
                </div>
                <p className=" text-[--16px]">
                  Finding it challenging to get your news noticed? 
                </p>
              </div>
              <div className=" rounded-[--18px] bg-[#484848] px-[--28px] py-[--sy-21px]">
                <div className=" mb-[--sy-16px] px-[--15px] flex justify-between pb-[--sy-16px] border-b border-[#AFAFAF]">
                  <h4 className="font-medium text-[--20px]">Copywriting</h4>
                  <Link
                    href=""
                    className="text-[--16px] font-medium text-[#1d1d1d] px-[--15px] flex justify-center items-center py-[--sy-4px] bg-[#F8F24B] rounded-[--16px]"
                  >
                    Start Now
                  </Link>
                </div>
                <p className=" text-[--16px]">
                  Frustrated with words that fail to connect? 
                </p>
              </div>
            </div>
          </div>
          <div
            className={`${styles.card} w-[32%] bg-[#353535] rounded-[--20px] px-[--29px] py-[--30px] h-[55vh] overflow-y-auto`}
          >
            <h3 className="font-semibold text-[--22px] text-center mb-[--sy-26px]">
              Unlimited Designs
            </h3>
            <div className=" w-full flex flex-col gap-[--sy-27px]">
              <div className=" rounded-[--18px] bg-[#484848] px-[--28px] py-[--sy-21px]">
                <div className=" mb-[--sy-16px] px-[--15px] flex justify-between pb-[--sy-16px] border-b border-[#AFAFAF]">
                  <h4 className="font-medium text-[--20px]">Motion Graphics</h4>
                  <Link
                    href=""
                    className="text-[--16px] font-medium text-[#1d1d1d] px-[--15px] flex justify-center items-center py-[--sy-4px] bg-[#F8F24B] rounded-[--16px]"
                  >
                    Start Now
                  </Link>
                </div>
                <p className=" text-[--16px]">
                  Are your visuals failing to capture your audience's
                  attention? 
                </p>
              </div>
              <div className=" rounded-[--18px] bg-[#484848] px-[--28px] py-[--sy-21px]">
                <div className=" mb-[--sy-16px] px-[--15px] flex justify-between pb-[--sy-16px] border-b border-[#AFAFAF]">
                  <h4 className="font-medium text-[--20px]">Animtations</h4>
                  <Link
                    href=""
                    className="text-[--16px] font-medium text-[#1d1d1d] px-[--15px] flex justify-center items-center py-[--sy-4px] bg-[#F8F24B] rounded-[--16px]"
                  >
                    Start Now
                  </Link>
                </div>
                <p className=" text-[--16px]">
                  Struggling to convey complex animations?
                </p>
              </div>
              <div className=" rounded-[--18px] bg-[#484848] px-[--28px] py-[--sy-21px]">
                <div className=" mb-[--sy-16px] px-[--15px] flex justify-between pb-[--sy-16px] border-b border-[#AFAFAF]">
                  <h4 className="font-medium text-[--20px]">Demos</h4>
                  <Link
                    href=""
                    className="text-[--16px] font-medium text-[#1d1d1d] px-[--15px] flex justify-center items-center py-[--sy-4px] bg-[#F8F24B] rounded-[--16px]"
                  >
                    Start Now
                  </Link>
                </div>
                <p className=" text-[--16px]">
                  Having trouble showcasing your product'?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
