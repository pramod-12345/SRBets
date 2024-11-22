import React, { useEffect, useState } from "react";
import Typography from "../../components/common/typography";
import Advertisement from "../../components/common/advertisement";
import Search from "../../components/common/search";
import { columns, rows, sportsGames } from "../../data";
import Table from "../../components/shared/table";
import { SportsCard } from "../../components/common/cards";
import SportsGamesCard from "./sportsGames";

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
      <div className="mt-5">
        <Advertisement />
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
        <SportsGamesCard/>
      </div>

      <div className="mt-12">
        <Typography color={"white"} variant={"h3"} content={"Top Bets"} />
        <Table columns={columns} data={data} id="top-bets" loading={loading} />
      </div>
    </div>
  );
};

export default SportsHome;
