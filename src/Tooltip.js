import React from "react";
import { useState } from "react";
// import { Tooltip } from "react-tooltip";

const Tooltip = ({ text, position }) => {
  const [isVisible, setIsVisible] = useState(false);

  const tooltipStyle = {
    position: "absolute",
    top: position == "top" ? "-80px" : position == "bottom" ? "80px" : 0,
    left: position == "left" ? "-300px" : position == "right" ? "250px" : 0,
    background: "black",
    color: "white",
    padding: "5px",
    borderRadius: "5px",
    visibility: isVisible ? "visible" : "hidden",
    transition: "visibility 0s, opacity 0.5s ease",
  };

  return (
    <>
      <div style={{ position: "relative" }}>
        <div
          onMouseEnter={() => setIsVisible(true)}
          onMouseLeave={() => setIsVisible(false)}
        >
          Hover over me.
        </div>
        <div style={tooltipStyle}>
          {text}
          <div />
        </div>
      </div>
    </>
  );
};

export default Tooltip;
