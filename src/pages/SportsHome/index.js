import React, { useEffect, useState } from "react";
import { Typography, Advertisement, Search, Table } from "components";
import { columns, rows } from "../../data";
import SportsGamesCard from "./sportsGames";

import { ad4Img, ad5Img, ad6Img } from "assets";

const SportsHome = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setData(rows);
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      <Typography color={"white"} variant={"h1"} content={"Sports home"} />
      <div className="mt-5 w-full  overflow-hidden">
        <div className="flex items-center overflow-x-auto md:h-[200px] no-scrollbar gap-x-5">
          <img src={ad4Img} alt="Advertisemnent" className="md:h-full" />

          <img src={ad5Img} alt="Advertisemnt" className="md:h-full" />

          <img src={ad6Img} alt="Adverisment" className="md:h-full" />
        </div>
      </div>
      <div className="w-full mt-7">
        <Search variant="full" bgColor="bg-blackRussian" />
      </div>
      <div className="mt-10">
        <Typography
          color={"white"}
          variant={"h3"}
          content={"Top 10 Sports Games"}
        />
        <SportsGamesCard />
      </div>

      <div className="mt-12">
        <Typography color={"white"} variant={"h3"} content={"Top Bets"} />
        <Table columns={columns} data={data} id="top-bets" loading={loading} />
      </div>
    </div>
  );
};

export default SportsHome;
