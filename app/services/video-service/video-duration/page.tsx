"use client"
import React, { useEffect, useState } from "react";
import styles from "./videoDuration.module.css";
import Link from "next/link";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";

const MAX = 3600;
const MIN = 0;
const marks = [
  {
    value: MIN,
    label: "",
  },
  {
    value: MAX,
    label: "",
  },
];

const page = () => {
  const [minut, setMinut] = useState("0");
  const [val, setVal] = React.useState(MIN);
  function toMinut(val:number){
    const minutes = Math.floor(val / 60);
    const seconds = val % 60;
    setMinut(`${minutes} min ${seconds} sec`)
  }
  const handleChange = (_: any, newValue: any) => {
    setVal(newValue);
    toMinut(val)
    // setMinut(`${newValue}`)

  
  };
  useEffect(() => {
    const style = document.createElement("style");
    document.head.appendChild(style);
    style?.sheet?.insertRule(
      `.MuiSlider-thumb::before { content: "${minut}"; }`,
      0
    );
    // document.querySelector(".MuiSlider-thumb").sheet;
    if (val == 0) {
      toMinut(val)  
    }
  }, [val]);
  return (
    <NextPrevNav
      nextLink="/services/video-service/video-endpoint"
      backLink="/services/video-service/videoScript"
    >
      <div className=" flex justify-center items-center h-full w-full">
        <div className={`${styles.videoDuration} w-full`}>
          {/* Text center alignment and margin bottom */}
          <div className="text-center mx-auto mb-[5.333vh]">
            {/* Main heading with margin bottom */}
            <h2 className="mb-[2.667vh]">
              How long would you like the video to be?
            </h2>

            {/* Subheading with embedded horizontal rule */}
            <h4>
              Slide to your required video duration. If you're not sure, that's
              okay! We can help <hr className="border-0" /> determine the ideal
              length for your project.
            </h4>
          </div>

          {/* Container for the duration indicator with custom background, width, height, and margin */}
          <Box sx={{ width: 250, margin: 10 }}>
            <Slider
              marks={marks}
              step={1}
              value={val}
              min={MIN}
              max={MAX}
              onChange={handleChange}
            />
          </Box>

          {/* Link component for users who are not sure about the duration */}
          <Link
            href={""}
            className="underline block w-fit mx-auto px-[0.52vw] py-[0.533vh] hover:bg-[#484848] rounded-[var(--32px)] transition-all duration-200 mt-[0.5vw]"
          >
            I’m not sure
          </Link>
        </div>
      </div>
    </NextPrevNav>
  );
};

export default page;
