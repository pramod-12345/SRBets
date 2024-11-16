import React from "react";

const CommonButton = ({
  type = "primary", // Default type if not specified
  bgColor = '',
  sidebarToggle,
  label,
  icon,
  imageStyle,
  onClick,
  disabled = false,
}) => {
  // Define styles for different button types
  const typeStyles = {
    primary: `bg-btnSecondary ${sidebarToggle ? "py-2.5 px-0" : "p-2.5"} rounded-lg max-w-44 w-full h-9 gap-3 text-sm`,
    secondary: `bg-btnPrimary ${sidebarToggle ? "py-2.5 px-0" : "p-2.5"} rounded-lg max-w-44 w-full h-9 gap-3 text-sm`,
    outline: "bg-arrowDisabled min-w-max rounded-lg border max-h-[52px] border-[#5A5F9C] text-[#9298B4] text-sm gap-2 px-4 py-3",
    arrow: "bg-arrowActive rounded-2xl w-9 h-9",
    nav: "bg-btnPrimary sm:h-10 h-7 rounded-lg sm:px-4 px-1.5 sm:text-sm text-xs",
  };

  // Combine the provided style and type-specific styles
  const computedStyle = `${typeStyles[type] || ""}`;

  return (
    <button
      className={`${computedStyle} ${bgColor} text-white font-semibold flex items-center justify-center`}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <img src={icon} alt="" className={`${imageStyle}`} />}
      {label && <span>{label}</span>}
    </button>
  );
};

export default CommonButton;
