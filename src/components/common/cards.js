import React from "react";
import Typography from "./typography";

export const BannerCard = ({ bannerImg, containerStyle, imgStyle }) => {
  return (
    <div className={`${containerStyle} max-h-[17.5rem]`}>
      <img src={bannerImg} alt="" className={`${imgStyle} w-full`} />
    </div>
  );
};

export const CasinoCard = ({ icon }) => {
  return (
    <div className="min-w-max  max-w-[11rem] flex items-center justify-center gap-6">
      <img className="max-w-[11rem] " alt="" src={icon} />
    </div>
  );
};

export const SportsCard = ({ bgImg, title, number, onClick }) => {
  return (
    <div className="min-w-[176px] min-h-[280px] transform transition duration-300 hover:-translate-y-2">
      <div
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="rounded-lg w-full h-full p-2.5 overflow-hidden"
        onClick={onClick}
      >
        {/* Content */}
        <div className="flex flex-col h-[inherit] justify-between">
          {/* Title */}
          {title && (
            <div className="flex pt-4 pl-3 flex items-center ">
              <h1 className="text-white text-[28px] font-bold text-wrap tracking-wider drop-shadow-lg">
                {title}
              </h1>
              {/* <Typography
                color={"text-white"}
                variant={"h2"}
                content={title}
              /> */}
            </div>
          )}
          {/* Playing Count */}
          {number && (
            <div className="flex items-center bg-black/50 gap-[7px] text-white text-xs py-2 px-2 rounded-full w-fit">
              <div className="w-2.5 h-2.5 bg-green-500 rounded-full" />
              <div className="flex items-center gap-1">
                <Typography
                  color={"text-white"}
                  variant={"textXsBold"}
                  content={number}
                />{" "}
                <Typography
                  color={"text-white"}
                  variant={"textXsNormal"}
                  content={"Playing"}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export const BetCards = ({ date, status, match, result, odds, betAmount, payout, infoIcon , isButton=false }) => {
  return (
    <div className="bg-[#2B2E45] w-full rounded-lg shadow-lg">
      {/* Date and Status */}
      <div className="flex justify-between items-center p-2">
        <span className="text-vintageRibbon leading-4 font-semibold text-sm">{date}</span>
        <div className="flex items-center gap-2">
          <span 
            className={`flex justify-center items-center w-[30px] h-[16px] text-white text-[10px] leading-3 font-semibold rounded ${
              status === "WIN" ? "bg-[#1AC35D]" : "bg-[#E54E3D]"
            }`}
          >
            {status}
          </span>
          <span>
            <img src={infoIcon} alt="Info" />
          </span>
        </div>
      </div>

      {/* Match Info */}
      <div className="bg-darkByzantineBlue p-4">
        <div>
          <p className="font-semibold text-vintageRibbon text-[14px] leading-4 mb-1.5">{match}</p>
          <p className="text-vintageRibbon text-sm font-medium leading-4 mb-1.5">Winner (incl. super over)</p>
          <div className="flex justify-between items-center mb-2">
            <p className="text-white text-[14px]  leading-4">{result}</p>
            {/* Odds */}
            <div className="text-right">
              <span className="text-[#673CFF] text-[14px] leading-4 font-semibold">{odds}</span>
            </div>
          </div>
        </div>
        <hr className="border border-[#2B2E45]" />
        {/* Details */}
        <div className="space-y-2 text-white mt-2">
          <div className="flex justify-between text-[14px] leading-4">
            <span className="text-vintageRibbon">Odds</span>
            <span className="text-vintageRibbon">{odds}</span>
          </div>
          <div className="flex justify-between text-[14px] leading-4">
            <span className="text-vintageRibbon">Total bet amount</span>
            <span>
              ${betAmount} <span className="text-[#1AC35D]">$</span>
            </span>
          </div>
          <div className="flex justify-between text-[14px] leading-4">
            <span className="text-vintageRibbon">Payout</span>
            <span>
              ${payout} <span className="text-[#1AC35D]">$</span>
            </span>
          </div>
        </div>
            {
              isButton &&  <button className="w-full text-[16px] font-semibold leading-5 rounded-lg bg-vintageRibbon p-2 text-white mt-2">
              Cashout $0.80
            </button> 
            }
      </div>
    </div>
  );
};
