import React from "react";
import { BannerCard } from "./cards";
import bannerImg1 from "../../assets/svg/banner-img1.svg";
import bannerImg2 from "../../assets/svg/banner-img2.svg";
import bannerImg3 from "../../assets/svg/banner-img3.svg";
import bannermb1 from "../../assets/svg/banner-mb-1.svg";

const Advertisement = () => {
  return (
    <div className="flex gap-5 flex-wrap md:flex-nowrap">
      <BannerCard containerStyle={"hidden md:block"} bannerImg={bannerImg1} />
      <BannerCard
        containerStyle={"block md:hidden w-full"}
        bannerImg={bannermb1}
      />
      <div className="flex gap-5">
        <BannerCard bannerImg={bannerImg2} />
        <BannerCard bannerImg={bannerImg3} />
      </div>
    </div>
  );
};

export default Advertisement;
