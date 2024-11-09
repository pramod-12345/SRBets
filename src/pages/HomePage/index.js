import React from "react";
import bannerImg1 from "../../assets/svg/banner-img1.svg";
import bannerImg2 from "../../assets/svg/banner-img2.svg";
import bannerImg3 from "../../assets/svg/banner-img3.svg";
import bannermb1 from "../../assets/svg/banner-mb-1.svg";
import Slider from "../../components/common/slider";
import { casinoGames, recentPlayed, sportsGames } from "../../contant";
import { BannerCard, CasinoCard } from "../../components/common/cards";
import CommonButton from "../../components/common/button";

const HomePage = () => {
  return (
    <div className="px-4 py-6 sm:p-8 container mx-auto max-w-[1120px]">
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
      <div className=" flex flex-col sm:gap-12 gap-6 sm:pt-7 pt-6">
        <Slider title={"Recently played"}>
          {recentPlayed?.map((item, index) => (
            <CommonButton
              key={index}
              bgColor={"#1F2136"}
              icon={item?.icon}
              imageStyle={"w-7 h-7"}
              label={item?.label}
              style={`min-w-max rounded-lg border max-h-[52px] border-[#5A5F9C] text-[#9298B4] text-sm gap-2 px-4 py-3`}
            />
          ))}
        </Slider>
        <Slider title={"Top 10 casino games"}>
          {casinoGames?.map((item, index) => (
            <CasinoCard key={index} icon={item?.icon} />
          ))}
        </Slider>
        <Slider title={"Top 10 sport games"}>
          {sportsGames?.map((item, index) => (
            <CasinoCard key={index} icon={item?.icon} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HomePage;
