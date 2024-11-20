import React from "react";

const Typography = ({ variant, content, color }) => {
  const fontType = {
    h1: "font-bold text-[2rem] leading-[2.4rem]",
    h2: "font-bold text-[1.75rem] leading-[2.1rem]",
    h3: "font-bold text-2xl leading-[1.8rem]",
    h3Normal: "font-medium text-2xl",
    size16Bold: "font-bold text-base",
    size10SemiBold: "font-semibold text-[10px]",
    size14Bold: "font-bold text-sm",
    size14Semibold: "font-semibold text-sm",
    size14Medium: "font-medium text-sm",
    size14Normal: "font-normal text-sm",
    size12Bold: "font-bold text-xs",
    size12Medium: "font-medium text-xs",
    size12Normal: "font-normal text-xs",
  };

  const colorType = {
    white: "text-white",
    darkCharcoal: "text-darkCharcoal",
    primary: "text-primary",
    blackRussian: "text-blackRussian",
    darkGunmetal: "text-darkGunmetal",
    themeBlack: "text-themeBlack",
    vintageRibbon: "text-vintageRibbon",
    electricViolet: "text-electricViolet",
    darkBlueGray: "text-darkBlueGray",
    darkBlueBlack: "text-darkBlueBlack",
    secondary: "text-secondary",
    chinesePurple: "text-chinesePurple",
    darkByzantineBlue: "text-darkByzantineBlue",
    purpleFog: "text-purpleFog",
    neonBlue: "text-neonBlue",
    yankeesBlue: "text-yankeesBlue",
    eigengrau: "text-eigengrau",
    Amaranth: "text-Amaranth",
    mountainMeadow: "text-mountainMeadow",
    carminePink: "text-carminePink",
    ebonyClay: "text-ebonyClay",
    oxfordBlue: "text-oxfordBlue",
  };

  return (
    <span className={`${fontType[variant]} ${colorType[color]}`}>
      {content}
    </span>
  );
};

export default Typography;
