import React from "react";

const CommonButton = ({ bgColor, label, icon, imageStyle, style, }) => {
  return (
    <button
      style={{ backgroundColor: bgColor }}
      className={`bg-[${bgColor}] text-white font-semibold ${style} flex items-center justify-center`}
    >
      {icon ? <img src={icon} alt="" className={`${imageStyle}`} /> : null}
      {label ? label : null}
    </button>
  );
};

export default CommonButton;
