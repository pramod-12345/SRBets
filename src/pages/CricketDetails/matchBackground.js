import React from "react";
import backgroundImage from "../../assets/svg/cricket-details.svg";
import { Typography } from "components";

const MatchBackground = () => {
  return (
    <div
      className="relative bg-cover bg-center h-[240px] w-full"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay content */}
      <div className="absolute inset-0 bg-black bg-opacity-10"></div>

      <div className="absolute top-5 left-2 sm:left-7 sm:bottom-12 w-full  max-w-[320px] md:max-w-[360px] w-full bg-black bg-opacity-70 rounded-lg py-4 px-5 text-white">
        <div className="flex items-center space-x-2 mb-2">
          <div className="bg-Amaranth rounded-full py-0.5 px-1">
          <Typography
            color={"white"}
            variant={"size10SemiBold"}
            content={"LIVE"}
          />
          </div>
          <Typography
            variant={"size12Normal"}
            color={"vintageRibbon"}
            content={"First innings"}
          />
        </div>
        <div className="space-y-2">
          <div className="flex justify-between">
            <Typography
              color={"white"}
              content={"India"}
              variant={"size16Medium"}
            />
            <Typography
              color={"white"}
              content={"221/9"}
              variant={"size16Medium"}
            />
          </div>
          <div className="flex justify-between">
            <Typography
              color={"white"}
              content={"Bangladesh"}
              variant={"size16Medium"}
            />
            <Typography
              color={"white"}
              content={"88/6 (12.2)"}
              variant={"size16Medium"}
            />
          </div>
        </div>
        <p className="mt-6">
          <Typography
            variant={"size12Normal"}
            color={"white"}
            content={"Bangladesh (92/6) require 130 runs from 45 balls."}
          />
        </p>
      </div>
    </div>
  );
};

export default MatchBackground;
