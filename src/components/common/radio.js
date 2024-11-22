import React from "react";
import Typography from "./typography";

const RadioButton = ({ label, selected, onChange }) => {
  return (
    <div
      onClick={onChange}
      className="flex items-center space-x-4 cursor-pointer"
    >
      {/* Outer Circle */}
      <div
        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
          selected ? "border-primary" : "border-vintageRibbon"
        }`}
      >
        {/* Inner Circle (Visible Only When Selected) */}
        {selected && <div className="w-2 h-2 bg-primary rounded-full"></div>}
      </div>

      {/* Label */}
      <Typography
        color={selected ? "white" : "vintageRibbon"}
        variant={"size14Medium"}
        content={label}
      />
    </div>
  );
};

export default RadioButton;
