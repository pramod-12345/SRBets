import React, { useEffect, useState } from "react";
import {
  Slider,
  SportsCard,
  CommonButton,
  Table,
  Tabs,
  Advertisement,
} from "components";
import {
  columns,
  recentPlayed,
  rows,
} from "../../data";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { fetchLayout } from "services";
import { useAxios } from "hooks";

const HomePage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const { makeRequest } = useAxios();
  const { layoutData } = useSelector((state) => state?.dashboard);
  const casinoSection = layoutData?.layout?.casinoSection;
  const sportsSection = layoutData?.layout?.sportsSection;
  const { isLoggedIn } = useSelector((state) => state.auth);

  const tabs = [
    { id: "top-bets", label: "Top bets" },
    { id: "casino", label: "Casino leaderboard" },
    { id: "sports", label: "Sports leaderboard" },
  ];

  const handleGameEntry = (id, imageUrl, data) => {
    navigate(`/game-entry/${id}`, { state: { imageUrl: imageUrl, gameData: data } })
  };

  useEffect(() => {
    setTimeout(() => {
      setData(rows);
      setLoading(false);
    }, 2000);

    fetchLayout(makeRequest, 'HOME');
  }, []);

  return (
    <>
      <Advertisement promoBanner={layoutData?.layout?.promoBanners?.banners} />
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
        <Slider title={casinoSection?.title}>
          {(casinoSection?.featuredCasinoGames)?.map(
            (item, index) => (
              <SportsCard
                key={index}
                bgImg={item?.imageUrl}
                width={"176px"}
                onClick={() => (isLoggedIn ? handleGameEntry(item?.id, item?.imageUrl, item) : {})}
              />
            )
          )}
        </Slider>
        <Slider title={sportsSection?.title}>
          {(sportsSection?.featuredSportsGames)?.map((item) => (
            <SportsCard
              key={item?.id}
              width={"176px"}
              bgImg={item?.imageUrl}
              // title={item?.name}
              number={"3224"}
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
