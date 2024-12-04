import React from "react";
import { BannerCard } from "./cards";
import { bannerMb1 } from "assets"


const Advertisement = ({ promoBanner }) => {

  return (
    <div className="flex gap-5 flex-wrap md:flex-nowrap">
      <BannerCard containerStyle={"hidden md:block"} bannerImg={promoBanner?.[0]?.imageUrl} />
      <BannerCard
        containerStyle={"block md:hidden w-full"}
        bannerImg={bannerMb1}
      />
      <div className="flex gap-5">
        <BannerCard bannerImg={promoBanner?.[1]?.imageUrl} />
        <BannerCard bannerImg={promoBanner?.[2]?.imageUrl} />
      </div>
    </div>
  );
};

export default Advertisement;
