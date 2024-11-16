import React from "react";
import bannerImg1 from "../../assets/svg/banner-img1.svg";
import bannerImg2 from "../../assets/svg/banner-img2.svg";
import bannerImg3 from "../../assets/svg/banner-img3.svg";
import bannermb1 from "../../assets/svg/banner-mb-1.svg";
import Slider from "../../components/common/slider";
import { casinoGames, recentPlayed, sportsGames } from "../../contant";
import { BannerCard, CasinoCard } from "../../components/common/cards";
import CommonButton from "../../components/common/button";
import Table from "../../components/shared/table";

const HomePage = () => {
  const columns = [
    { header: "Game", key: "game" },
    { header: "User", key: "user" },
    { header: "Time", key: "time" },
    {
      header: "Bet Amount",
      key: "betAmount",
      render: (value, row) => (
        <div className="flex items-center space-x-2">
          {/* Conditionally render an icon based on bet amount type */}
          {row?.currency === "USD" ? (
            <span className="text-white">dollar</span>
          ) : (
            <span className="text-white">bitcoin</span>
          )}
          <span>{value}</span>
        </div>
      ),
    },
    { header: "Multiplier", key: "multiplier" },
    { header: "Payout", key: "payout" },
  ];

  const rows = [
    {
      game: "Teen Patti",
      user: "Rakesh007",
      time: "10:30 AM",
      betAmount: "2812.499859",
      multiplier: "2.00x",
      payout: "5624.99",
      currency: "USD",
    },
    {
      game: "Poker",
      user: "Ajay007",
      time: "10:30 AM",
      betAmount: "2812.499859",
      multiplier: "2.00x",
      payout: "5624.99",
      currency: "BTC",
    },
    {
      game: "Black Jack",
      user: "Deepak",
      time: "10:30 AM",
      betAmount: "2812.499859",
      multiplier: "2.00x",
      payout: "5624.99",
      currency: "USD",
    },
    {
      game: "Roulette",
      user: "Alexander",
      time: "10:30 AM",
      betAmount: "2812.499859",
      multiplier: "2.00x",
      payout: "5624.99",
      currency: "USD",
    },
    {
      game: "Deal or No Deal",
      user: "Sam Uncle",
      time: "10:30 AM",
      betAmount: "2812.499859",
      multiplier: "2.00x",
      payout: "5624.99",
      currency: "BTC",
    },
    {
      game: "Baccarat",
      user: "Samikska",
      time: "10:30 AM",
      betAmount: "2812.499859",
      multiplier: "2.00x",
      payout: "5624.99",
      currency: "USD",
    },
    {
      game: "Teen Patti",
      user: "Rajdeep",
      time: "10:30 AM",
      betAmount: "2812.499859",
      multiplier: "2.00x",
      payout: "5624.99",
      currency: "BTC",
    },
  ];

  return (
    <>
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
              icon={item?.icon}
              imageStyle={"w-7 h-7"}
              label={item?.label}
              type="outline"
              // style={`min-w-max rounded-lg border max-h-[52px] border-[#5A5F9C] text-[#9298B4] text-sm gap-2 px-4 py-3`}
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
      <div>
        <Table columns={columns} data={rows} />
      </div>
    </>
  );
};

export default HomePage;
