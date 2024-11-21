import React from "react";

const CommonButton = ({
  type = "primary", 
  bgColor = '',
  sidebarToggle,
  label,
  icon,
  onClick,
  disabled = false,
}) => {
 
  const typeStyles = {
    primary: `bg-chinesePurple ${sidebarToggle ? "py-2.5 px-0" : "p-2.5"} rounded-lg max-w-44 w-full h-9 gap-3 text-sm`,
    secondary: `bg-secondary ${sidebarToggle ? "py-2.5 px-0" : "p-2.5"} rounded-lg max-w-44 w-full h-9 gap-3 text-sm`,
    outline: "bg-darkByzantineBlue min-w-max rounded-lg border max-h-[52px] border-[#5A5F9C] text-vintageRibbon text-sm gap-2 px-4 py-3",
    iconBtn: `${disabled ? "bg-darkByzantineBlue" : "bg-purpleFog"} rounded-2xl w-9 h-9`,
    nav: "bg-chinesePurple sm:h-10 h-7 rounded-lg sm:px-4 px-1.5 sm:text-sm text-xs",
    cashoutBtn: `${disabled ? 'bg-vintageRibbon' : 'bg-vintageRibbon'} w-full text-base font-semibold leading-5 rounded-lg bg-vintageRibbon p-3.5 text-white mt-4`,
    viewBetsBtn: "bg-primary w-full h-[48px] rounded-lg text-[16px] leading-4 font-semibold flex items-center justify-center"
  };

  const imgStyles= {
    primary: 'w-4 h-4',
    secondary: 'w-4 h-4',
    outline: 'w-7 h-7',
    iconBtn: 'w-[5px] h-[9px] mr-0',
    nav: ''
  }
  

  
  const computedStyle = `${typeStyles[type] || ""}`;

  return (
    <button
      className={`${computedStyle} ${bgColor} text-white font-semibold flex items-center justify-center`}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <img src={icon} alt="" className={`${imgStyles[type]}`} />}
      {label && type !== 'iconBtn' && <span>{label}</span>}
    </button>
  );
};

export default CommonButton;
