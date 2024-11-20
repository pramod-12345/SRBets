import React, { useEffect, useState } from "react";
import Slider from "../../components/common/slider";
import {
  casinoGames,
  columns,
  recentPlayed,
  rows,
  sportsGames,
} from "../../data";
import { SportsCard } from "../../components/common/cards";
import CommonButton from "../../components/common/button";
import Table from "../../components/shared/table";
import Tabs from "../../components/common/tab";
import Advertisement from "../../components/common/advertisement";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const tabs = [
    { id: "top-bets", label: "Top bets" },
    { id: "casino", label: "Casino leaderboard" },
    { id: "sports", label: "Sports leaderboard" },
  ];

  useEffect(() => {
    setTimeout(() => {
      setData(rows);
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <Advertisement />
      <div className=" flex flex-col sm:gap-12 gap-6 sm:pt-7 pt-6">
        <Slider title={"Recently played"}>
          {recentPlayed?.map((item, index) => (
            <CommonButton
              key={index}
              icon={item?.icon}
              imageStyle={"w-7 h-7"}
              label={item?.label}
              type="outline"
            />
          ))}
        </Slider>
        <Slider title={"Top 10 casino games"}>
          {casinoGames?.map((item, index) => (
            <SportsCard key={index} bgImg={item?.icon} width={"176px"} />
          ))}
        </Slider>
        <Slider title={"Top 10 sport games"}>
          {sportsGames?.map((item, index) => (
            <SportsCard
              key={index}
              width={"176px"}
              bgImg={item?.icon}
              title={item?.title}
              number={item?.number}
              onClick={() => navigate("/sports-landing")}
            />
          ))}
        </Slider>
      </div>
      <div className="mt-12">
        <Tabs tabs={tabs}>
          <Table
            columns={columns}
            data={data}
            id="top-bets"
            loading={loading}
          />
        </Tabs>
      </div>
    </>
  );
};

export default HomePage;
