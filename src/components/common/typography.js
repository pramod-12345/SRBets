import React from "react";

const Typography = ({ variant, content, color }) => {
  const fontType = {
    h1: "font-bold text-size24 md:text-[2rem] leading-[2.4rem]",
    h2: "font-bold text-[1.75rem] leading-[2.1rem]",
    h3: "font-bold text-size16 md:text-2xl leading-[1.8rem]",
    h3Normal: "font-medium text-2xl",
    size20Semibold:"text-xl font-semibold",
    size20Bold:"text-xl font-bold",
    size10SemiBold: "font-semibold text-size10",
    size14Bold: "font-bold text-size14",
    size14Semibold: "font-semibold text-size14",
    size14Medium: "font-medium text-size14",
    size14Normal: "font-normal text-size14",
    size12Bold: "font-bold text-size12",
    size12Medium: "font-medium text-size12",
    size16Bold: "font-bold text-size16",
    size16Semibold: "font-semibold text-size16",
    size16Medium: "font-medium text-size16",
    size12Normal: "font-normal text-size12",
    size12NormalError: "font-normal text-size12 text-red-400",
    size12Semibold: "text-[12px] leading-3 font-semibold",
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
    pecanVeneer:'text-pecanVeneer'
  };

  // const fontColor = `text-${color}`

  return (
    <span className={`${fontType[variant]} ${colorType[color]}`}>
      {content}
    </span>
  );
};

export default Typography;
