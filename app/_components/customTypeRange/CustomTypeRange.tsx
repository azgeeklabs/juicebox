import Box from "@mui/material/Box"; // Importing the Box component from MUI for layout.
import Slider from "@mui/material/Slider"; // Importing the Slider component from MUI for creating a range slider.
import React, { useEffect, useState } from "react"; // Importing React and necessary hooks.
import "./typeRange.css"; // Importing custom CSS for styling.

const MAX = 3600; // Maximum value for the slider, representing 3600 seconds (1 hour).
const MIN = 0; // Minimum value for the slider, representing 0 seconds.

const marks = [
  {
    value: MIN,
    label: "", // No label for the minimum value.
  },
  {
    value: MAX,
    label: "", // No label for the maximum value.
  },
];

const CustomTypeRange = ({
  max,
  width,
  minWidth,
}: {
  max?: number;
  width?: string;
  minWidth?: string;
}) => {
  const [minut, setMinut] = useState("0"); // State for displaying time in minutes and seconds.
  const [val, setVal] = React.useState(MIN); // State for the current slider value.

  // Function to convert seconds to "minutes min seconds sec" format.
  function toMinut(val: number) {
    const minutes = Math.floor(val / 60); // Calculate minutes.
    const seconds = val % 60; // Calculate remaining seconds.
    console.log(`${minutes} min ${seconds} sec`); // Log the result for debugging.
    setMinut(`${minutes} min ${seconds} sec`); // Update the state with the formatted time.
  }

  // Handler for slider value change.
  const handleChange = (_: any, newValue: any) => {
    console.log(newValue); // Log the new value for debugging.
    setVal(newValue); // Update the slider value state.
  };

  // Effect to update the formatted time whenever the slider value changes.
  useEffect(() => {
    toMinut(val); // Convert the current value to formatted time.
  }, [val]); // Dependency array includes 'val', so this effect runs whenever 'val' changes.

  // Effect to update the slider thumb label with the formatted time.
  useEffect(() => {
    const style = document.createElement("style"); // Create a new style element.
    document.head.appendChild(style); // Append the style element to the document head.
    style?.sheet?.insertRule(
      `.MuiSlider-thumb::before { content: "${minut}"; }`, // CSS rule to display the formatted time.
      0 // Insert at the first position.
    );
  }, [minut]); // Dependency array includes 'minut', so this effect runs whenever 'minut' changes.

  return (
    <Box
      sx={{ width: width ? width : "80%", margin: "auto", minWidth: minWidth }}
    >
      {" "}
      {/* Container for the slider with width and margin styling. */}
      <Slider
        className="customInputRange" // Custom CSS class for additional styling.
        marks={marks} // Marks for the slider (min and max values).
        step={1} // Step value for the slider.
        value={val} // Current value of the slider.
        min={MIN} // Minimum value for the slider.
        max={max ? max : MAX} // Maximum value for the slider.
        onChange={handleChange} // Event handler for value change.
      />
    </Box>
  );
};

export default CustomTypeRange; // Exporting the component as the default export.
