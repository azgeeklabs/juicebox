"use client";
import Link from "next/link";

interface nextPrevNavProps {
  backLink?: string;
  nextLink?: string;
  backText?: string;
  nextText?: string;
  backOnClick?: () => void;
  nextOnClick?: () => void;
  children: React.ReactNode;
}

function NextPrevNav({
  backLink,
  nextLink,
  backText,
  nextText,
  backOnClick,
  nextOnClick,
  children,
}: nextPrevNavProps) {
  return (
    <>
      <div className="flex justify-center items-center grow">{children}</div>
      <div className="w-[100%] pt-2">
        {(backLink || backOnClick) && (
          <Link
            href={backLink || ""}
            className=" bg-[#484848] px-[2vw] py-[0.5vw] font-semibold rounded-[41.03px] cursor-pointer float-start"
            onClick={() => backOnClick && backOnClick()}
          >
            {backText || "Back"}
          </Link>
        )}
        {(nextLink || nextOnClick) && (
          <Link
            href={nextLink || ""}
            className="bg-[#F8F24B] px-[2vw] py-[0.5vw] font-semibold rounded-[41.03px] text-[var(--primary-black)] cursor-pointer float-end"
            onClick={nextOnClick}
          >
            {nextText || "Next"}
          </Link>
        )}
      </div>
    </>
  );
}

export default NextPrevNav;
