import React from "react";
import Typography from "./typography";
import Seperator from "./seperator";
import {usdIcon , correctIcon} from "assets"
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
    <div className={`${width === '176px' ? 'min-w-[176px] max-w-[176px]' : 'min-w-[195px] max-w-[195px]'} min-h-[290px] transform transition duration-300 hover:-translate-y-2`}>
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
                  variant={"size12Bold"}
                  content={number}
                />{" "}
                <Typography
                  color={"text-white"}
                  variant={"size12Normal"}
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
  setIsOpen
}) => {
  return (
    <div className="bg-ebonyClay w-full rounded-lg shadow-lg">
      <div className="flex justify-between items-center px-4 py-3">
        <Typography
          color={"vintageRibbon"}
          variant={"size14Bold"}
          content={date}
        />
        <div className="flex items-center gap-2">
          <div
            className={`flex justify-center text-[10px] py-0.5 px-1 items-center w-[30px] h-[16px] rounded ${status === "WIN" ? "bg-mountainMeadow" : "bg-carminePink"
              }`}
          >
            <Typography
              color={"white"}
              variant={"size10SemiBold"}
              content={status}
            />
          </div>
          <span className="cursor-pointer" onClick={()=>setIsOpen(true)}>
            <img src={infoIcon} alt="Info" />
          </span>
        </div>
      </div>

      <div className="bg-darkByzantineBlue rounded-b-lg p-4">
        <div className="flex flex-col gap-1">
          <Typography
            color={"vintageRibbon"}
            variant={"size14Bold"}
            content={match}
          />
          <Typography
            color={"vintageRibbon"}
            variant={"size14Normal"}
            content={"Winner (incl. super over)"}
          />
          <div className="flex justify-between items-center">
            <Typography
              color={"white"}
              variant={"size14Semibold"}
              content={result}
            />
            <div className="text-right">
              <Typography
                color={"primary"}
                variant={"size14Semibold"}
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
              variant={"size14Normal"}
              content={`$${odds}`}
            />
          </div>
          <div className="flex justify-between text-[14px] leading-4">
            <span className="text-vintageRibbon">Total bet amount</span>
            <div className="flex gap-1 items-center">
              <Typography
                color={"white"}
                variant={"size14Normal"}
                content={`$${betAmount}`}
              />{" "}
              <img src={usdIcon} alt="Dollar Icon" className="w-4 h-4" />
            </div>
          </div>
          <div className="flex justify-between text-[14px] leading-4">
            <Typography
              color={"vintageRibbon"}
              variant={"size14Semibold"}
              content={"Payout"}
            />
            <div className="flex gap-1 items-center">
              <Typography
                color={"white"}
                variant={"size14Semibold"}
                content={`$${payout}`}
              />{" "}
              <img src={usdIcon} alt="Dollar Icon" className="w-4 h-4" />
            </div>
          </div>
        </div>
        {isButton && <CommonButton label={"Cashout $0.80"} type="cashoutBtn" />}
      </div>
    </div>
  );
};

export const BetSlipCards = ({ isInput = false, data }) => {
  console.log('data>>>>', data);
  
  return (
    <>

      <div className="bg-darkByzantineBlue w-[392px] rounded-lg">
        <div className="flex bg-ebonyClay px-4 py-3 items-center gap-2 rounded-t-lg">
          {/* <div className="text-vintageRibbon text-[14px] leading-4 font-medium">
            India vs Bangladesh
          </div> */}
          <Typography variant={"size14Medium"} color={"vintageRibbon"} content={data?.match} />
          <img src={correctIcon} alt="Correct" />
        </div>

        <div className="px-4 pt-4">
          {/* <div className="text-vintageRibbon font-medium text-[14px] leading-4">
            Winner (incl. super over)
          </div> */}
          <Typography variant={"size14Medium"} color={"vintageRibbon"} content={"Winner (incl. super over)"} />
          <div className="flex justify-between items-center mt-2">
            {/* <div className="text-white text-[14px] leading-4 font-medium">
              Bangladesh
            </div> */}
            <Typography variant={"size14Medium"} color={"white"} content={data?.country} />
            {/* <div className="text-primary text-[14px] leading-4 font-medium">
              1.24
            </div> */}
            <Typography variant={"size14Medium"} color={"primary"} content={data?.value} />
          </div>
        </div>

        <div className="flex justify-between items-center mt-2 px-4 pb-6">
          <div>
            {/* Conditional Rendering */}
            {isInput ? (
              <div className="relative flex items-center bg-themeBlack text-white rounded-lg px-4 py-2 border border-ebonyClay w-[140px]">
                {/* Input Box */}
                <input
                  type="text"
                  placeholder="0.00"
                  className="bg-transparent text-sm flex-1 outline-none placeholder-white"
                />

                {/* Dollar Icon */}
                <div className="absolute right-2">
                  <img src={usdIcon} className="w-5 h-5" alt="Dollar Icon" />
                </div>
              </div>
            ) : (
              <div>
                {/* Display Total Bet Amount */}
                <Typography
                  variant="size12Normal"
                  color="vintageRibbon"
                  content="Total Bet Amount"
                />
                <div className="flex items-center gap-1 mt-1">
                  <Typography
                    variant="size14Semibold"
                    color="vintageRibbon"
                    content="$1.00"
                  />
                  <img src={usdIcon} alt="Dollar Icon" className="w-4 h-4" />
                </div>
              </div>
            )}
          </div>


          <div className="text-right">
            {/* <div className="text-vintageRibbon text-[12px] leading-3 fon">
              Est. payout
            </div> */}
            <Typography variant={"size12Normal"} color={"vintageRibbon"} content={"Est. payout"} />
            <div className="flex items-center gap-1 mt-1">
              {/* <span className="text-vintageRibbon text-[12px] leading-3 font-semibold ">$4.50</span> */}
              <Typography variant={"size14Semibold"} color={"vintageRibbon"} content={"$4.50"} />
              <img src={usdIcon} alt="Dollar Icon" className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


 export const CasinoGamesCards = () => {
  return (
    <div className="bg-blackRussian p-6 rounded-[20px] rounded-lg w-[360px] h-[200px] flex flex-col justify-between relative">
      {/* Title */}
      <div className='flex flex-col justify-center'>
        <Typography color={"primary"} variant={"size12Semibold"} content={"TEEN PATTI"} />
        <div className='mt-1.5'>
          <Typography color={"white"} variant={"size16Semibold"} content={"Offer name goes here"} />
        </div>
        <div className='mt-2'>
          <Typography variant={"size14Medium"} color={"vintageRibbon"} content={"3 Sixes payout"} />
        </div>
      </div>

      {/* Button */}
      <div className="mt-auto">
        <CommonButton label={"Play now"} type='playNowBtn' />
      </div>

      {/* Placeholder for image */}
      <div className="absolute top-6 right-4 w-[104px] h-[104px] bg-themeBlack rounded-2xl"></div>
    </div>
  )
}
