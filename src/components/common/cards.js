import React from "react";

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
      <img className="max-w-[11rem]" alt="" src={icon} />
    </div>
  );
};
