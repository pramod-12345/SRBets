import React from "react";
import { useLocation } from "react-router-dom";

const CommonButton = ({
  type = "primary", 
  bgColor = '',
  sidebarToggle,
  label,
  icon,
  onClick,
  disabled = false,
  btnType
}) => {
  const location = useLocation();
 
  const typeStyles = {
    primary: `${location?.pathname === '/sports-home' ? 'bg-chinesePurple': 'bg-ebonyClay'} ${sidebarToggle ? "py-2.5 px-0" : "p-2.5"} hover:bg-chinesePurple rounded-lg max-w-44 w-full h-9 gap-3 text-sm`,
    secondary: `${location?.pathname === '/casino-home' ? 'bg-secondary': 'bg-ebonyClay'} ${sidebarToggle ? "py-2.5 px-0" : "p-2.5"} hover:bg-secondary rounded-lg max-w-44 w-full h-9 gap-3 text-sm`,
    outline: "bg-darkByzantineBlue min-w-max rounded-lg border max-h-[52px] border-[#5A5F9C] text-vintageRibbon text-sm gap-2 px-4 py-3",
    iconBtn: `${disabled ? "bg-darkByzantineBlue" : "bg-purpleFog"} rounded-2xl w-9 h-9`,
    toasterClose: `rounded-full`,
    nav: "bg-chinesePurple sm:h-10 h-7 rounded-lg sm:px-4 px-1.5 sm:text-sm text-xs",
    cashoutBtn: `${disabled ? 'bg-vintageRibbon' : 'bg-vintageRibbon'} w-full text-base font-semibold leading-5 rounded-lg bg-vintageRibbon p-3.5 text-white mt-4`,
    viewBetsBtn: "bg-primary w-full h-[48px] rounded-lg text-[16px] leading-4 font-semibold flex items-center justify-center",
    playNowBtn : "bg-darkByzantineBlue text-white py-3 px-5 rounded-lg text-sm font-semibold"
  };

  const imgStyles= {
    primary: 'w-4 h-4',
    secondary: 'w-4 h-4',
    outline: 'w-7 h-7',
    iconBtn: 'w-[5px] h-[9px] mr-0',
    nav: ''
  }
  

  
  const computedStyle = `${typeStyles[type] || ""}`;
  const computedImgStyle = `${imgStyles[type] || "w-4 h-4"}`;

  return (
    <button
      className={`${computedStyle} ${bgColor} text-white font-semibold flex items-center justify-center gap-2`}
      onClick={onClick}
      disabled={disabled}
      type={btnType}
    >
      {icon && <img src={icon} alt="" className={`${computedImgStyle}`} />}
      {label && type !== 'iconBtn' && <span>{label}</span>}
    </button>
  );
};

export default CommonButton;
