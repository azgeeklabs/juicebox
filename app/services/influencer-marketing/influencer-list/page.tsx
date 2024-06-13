import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";

function InfluencerList() {
  return (
    <NextPrevNav
      nextLink="/influencer-marketing/influencer-list/step-2"
      backLink="/influencer-marketing/influencer-list/step-1"
    >
      <div className="flex flex-col items-center justify-center py-[--sy-20px] gap-[--sy-20px] h-full w-full">
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
        <div className="flex gap-[--16px] grow items-center w-full">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="flex flex-col gap-[--16px] bg-[#353535] p-[--19px] items-center w-1/4 h-full rounded-[--15px]"
            >
              <div className="flex justify-between items-center w-full">
                <h2 className="font-bold">Male Influencers</h2>
                <span className="px-[--10px] py-[--sy-6px] bg-[#616161] rounded-[--14px]">
                  Marketing
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </NextPrevNav>
  );
}

export default InfluencerList;
