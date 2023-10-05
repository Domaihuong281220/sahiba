/** @format */

import React from "react";

const ProgressBar = (props) => {
  const { bgcolor, completed } = props;
  const containerStyles = {
    height: 10,
    width: "100%",
    backgroundColor: "grey",
    borderRadius: 50,
  };

  const fillerStyles = {
    height: "100%",
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: "inherit",
    textAlign: "right",
  };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}></div>
    </div>
  );
};

export default ProgressBar;
