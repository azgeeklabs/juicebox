import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import React, { useEffect, useState } from 'react'
import "./typeRange.css"

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

const CustomTypeRange = () => {
    const [minut, setMinut] = useState("0");
  const [val, setVal] = React.useState(MIN);
  function toMinut(val: number) {
    const minutes = Math.floor(val / 60);
    const seconds = val % 60;
    console.log(`${minutes} min ${seconds} sec`);

    setMinut(`${minutes} min ${seconds} sec`);
  }
  const handleChange = (_: any, newValue: any) => {
    console.log(newValue);
    setVal(newValue);
  };
  useEffect(() => {
    toMinut(val);
  }, [val]);

  useEffect(() => {
    const style = document.createElement("style");
    document.head.appendChild(style);
    style?.sheet?.insertRule(
      `.MuiSlider-thumb::before { content: "${minut}"; }`,
      0
    );
  }, [minut]);
  return (
    <Box sx={{ width: "80%", margin: "auto" }}>
            <Slider
            className="customInputRange"
              marks={marks}
              step={1}
              value={val}
              min={MIN}
              max={MAX}
              onChange={handleChange}
            />
          </Box>
  )
}

export default CustomTypeRange