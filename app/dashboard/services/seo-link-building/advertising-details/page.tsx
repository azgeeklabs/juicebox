"use client"
import React, { useState } from "react";
import styles from "./advertising-details.module.css";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";

const Page = () => {
  const [pastedText, setPastedText] = useState<string>("");
  const [addedKeywords, setAddedKeywords] = useState<any[]>([]);
  const [keyword, setKeyword] = useState("");
  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setPastedText(text);
    } catch (error) {
      console.error("Failed to read clipboard contents: ", error);
    }
  };
  return (
    <NextPrevNav
      backLink="/dashboard/services/seo-link-building/article-selection"
      nextLink="/dashboard/services"
      nextText="All Done"
    >
      {/* // Main outer container div */}
      <div>
        {/* Inner container with full width and custom advertising styles */}
        <div className={`${styles.advertising} w-full`}>
          {/* Header section with centered text, auto margins for centering, and bottom margin */}
          <div className="text-center mx-auto mb-[--34px]">
            {/* Main heading with bottom margin */}
            <h2 className="mb-[--sy-16px]">
            Share with us more details about your product!
            </h2>

            {/* Subheading with horizontal rule (line) */}
            <h4 className=" text-center">
            Please provide the product link, name, and a brief description of the <br /> product or service you are advertising.
            </h4>
          </div>

          {/* Form container with auto margins for centering */}
          <div className="mx-auto w-fit">
            {/* Product Link field with optional span */}
            <h3 className="mb-[--sy-16px]">
              Product Link <span>(if exists)</span>
            </h3>
            <div className="flex gap-[--16px] items-start mb-[--sy-32px]">
              {/* Product Link input field */}
              <input
                type="text"
                value={pastedText}
                  onChange={(e) => setPastedText(e.target.value)}
                placeholder="Product Link"
                className="h-full mb-[1vw] w-[19.773vw] bg-[var(--dark-gray-3)] outline-none rounded-[var(--10px)] px-[1.088vw] py-[0.5vw] placeholder:text-[#FFFFFFCC]"
              />

              {/* Paste Link button */}
              <button onClick={handlePaste} className="bg-[var(--highlight-yellow)] px-[1.892vw] py-[0.4vw] text-black rounded-[var(--33px)] font-bold">
                Paste Link
              </button>
            </div>

            {/* Product Description field */}
            <h3 className="mb-[--sy-16px]">Anchor Text</h3>
            <textarea
              rows={4}
              className="outline-none w-full rounded-[var(--12px)] bg-[var(--dark-gray-3)] px-[1.088vw] py-[0.5vw] resize-none"
              placeholder="Anchor Text"
            ></textarea>
            {/* Keywords */}
            <div className={styles.keywords + " mt-[--sy-32px] max-w-[50vw] max-h-[21.5vh] overflow-y-auto"}>
              <div>
                <label htmlFor="keyword" className="">
                  Add Keyword <span className=" ml-2">(option)</span>
                </label>
                <div className="flex items-center !gap-[--14px] flex-wrap">
                  <input
                    type="text"
                    value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                    placeholder="Add a keyword"
                    name="keyword"
                    id="keyword"
                  />
                  <div className="flex gap-[--16px] items-center flex-wrap">
                  {addedKeywords?.map((e, i) => {
                    return (
                      <div className=" flex py-[--10px] text-black font-semibold px-[--24px] rounded-[--32px] bg-[#F8F24B] w-fit text-[--18px] items-center">
                        <span
                          onClick={(e) => {
                            console.log((e.target as any)?.innerText);

                            setAddedKeywords(
                              addedKeywords.filter((k, idx) => i !== idx)
                            );
                          }}
                          className="cursor-pointer w-[--22px] h-[--22px] flex justify-center items-start rounded-full bg-black text-white mr-[--8px] font-normal relative z-[100]"
                        >
                          x
                        </span>
                        {e}
                      </div>
                    );
                  })}
                  </div>
                  <button
                  className=" font-bold"
                  onClick={() => {
                    if (keyword && addedKeywords.length < 5) {
                      setAddedKeywords((prev: any) => {
                        const updated = [keyword, ...prev];
                        return updated;
                      });
                    }
                  }}
                >
                  Add
                </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </NextPrevNav>
  );
};

export default Page;
