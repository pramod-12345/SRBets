import React from "react";
import Typography from "./typography";
import Seperator from "./seperator";
import dollarIcon from "../../assets/svg/usd-icon.svg";
import CommonButton from "./button";

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

export const SportsCard = ({ bgImg, title, number, onClick, width }) => {
  return (
    <div className={`${width === '176px' ? 'min-w-[176px] max-w-[176px]' : 'min-w-[208px] max-w-[208px]'} min-h-[280px] transform transition duration-300 hover:-translate-y-2`}>
      <div
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: "cover",
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

export const BetCards = ({
  date,
  status,
  match,
  result,
  odds,
  betAmount,
  payout,
  infoIcon,
  isButton = false,
}) => {
  return (
    <div className="bg-ebonyClay w-full rounded-lg shadow-lg">
      <div className="flex justify-between items-center px-4 py-3">
        <Typography
          color={"vintageRibbon"}
          variant={"textSmBold"}
          content={date}
        />
        <div className="flex items-center gap-2">
          <div
            className={`flex justify-center items-center w-[30px] h-[16px] rounded ${
              status === "WIN" ? "bg-mountainMeadow" : "bg-carminePink"
            }`}
          >
            <Typography
              color={"white"}
              variant={"size10SemiBold"}
              content={status}
            />
          </div>
          <span>
            <img src={infoIcon} alt="Info" />
          </span>
        </div>
      </div>

      <div className="bg-darkByzantineBlue rounded-b-lg p-4">
        <div className="flex flex-col gap-1">
          <Typography
            color={"vintageRibbon"}
            variant={"textSmBold"}
            content={match}
          />
          <Typography
            color={"vintageRibbon"}
            variant={"textSmNormal"}
            content={"Winner (incl. super over)"}
          />
          <div className="flex justify-between items-center">
            <Typography
              color={"white"}
              variant={"textSmSemibold"}
              content={result}
            />
            <div className="text-right">
              <Typography
                color={"primary"}
                variant={"textSmSemibold"}
                content={odds}
              />
            </div>
          </div>
        </div>
        <div className="py-6">
          <Seperator color={"ebonyClay"} />
        </div>
        <div className="space-y-2 text-white mt-2">
          <div className="flex justify-between text-[14px] leading-4">
            <span className="text-vintageRibbon">Odds</span>
            <Typography
              color={"vintageRibbon"}
              variant={"textSmNormal"}
              content={`$${odds}`}
            />
          </div>
          <div className="flex justify-between text-[14px] leading-4">
            <span className="text-vintageRibbon">Total bet amount</span>
            <div className="flex gap-1 items-center">
              <Typography
                color={"white"}
                variant={"textSmNormal"}
                content={`$${betAmount}`}
              />{" "}
              <img src={dollarIcon} className="w-4 h-4" />
            </div>
          </div>
          <div className="flex justify-between text-[14px] leading-4">
            <Typography
              color={"vintageRibbon"}
              variant={"textSmSemibold"}
              content={"Payout"}
            />
            <div className="flex gap-1 items-center">
              <Typography
                color={"white"}
                variant={"textSmSemibold"}
                content={`$${payout}`}
              />{" "}
              <img src={dollarIcon} className="w-4 h-4" />
            </div>
          </div>
        </div>
        {isButton && <CommonButton label={"Cashout $0.80"} type="cashoutBtn" />}
      </div>
    </div>
  );
};
