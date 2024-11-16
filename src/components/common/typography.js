import React from "react";

const Typography = ({ fontSize, fontWeight, color, lineHeight, children }) => {
  return (
    <div className={`${fontWeight} ${fontSize} ${color} ${lineHeight}`}>{children}</div>
  );
};

export default Typography;
