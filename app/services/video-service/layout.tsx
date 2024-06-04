import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" px-[1vw] py-[0.85vw] ">
      <div className=" mb-[2.46vw] rounded-[72px] bg-[#353535] p-[0.497vw]  flex items-center">
        <div className=" w-fit  border-r-[#616161] border-r-[1px] mr-[1.069vw]">
          <button className="mr-[1.069vw] px-[0.993vw] py-[0.473vw] rounded-[26.06px] bg-[var(--highlight-yellow)] text-black">
            Video Editing
          </button>
        </div>
        <div className="relative rounded-[35px] bg-[#484848] h-[1.088vw] w-[80%] mr-[1.069vw]">
            <div className=" w-[4%] bg-[var(--highlight-yellow)] h-full rounded-[35px]"></div>
        </div>
        <button className="px-[0.993vw] py-[0.473vw] rounded-[26.06px] bg-[#272727] text-[#626262]">
            Horray!
          </button>
      </div>
      {children}
    </div>
  );
};

export default layout;
