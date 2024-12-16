import React, { useEffect, useState } from "react";
import { Typography, Advertisement, Search, Table } from "components";
import { columns, rows } from "../../data";
import CasinoGamesCard from "./casinoGames";
import { ad2Img, ad3Img, advertisementImg } from "assets";

const CasinoHome = () => {
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
      <Typography color={"white"} variant={"h1"} content={"Casino home"} />
      <div className="mt-5 w-full  overflow-hidden">
        <div className="flex items-center overflow-x-auto md:h-[200px] no-scrollbar gap-x-5">
          <img
            src={advertisementImg}
            alt="Advertisemnent"
            className="md:h-full"
          />

          <img src={ad2Img} alt="Advertisemnt" className="md:h-full" />

          <img src={ad3Img} alt="Adverisment" className="md:h-full" />
        </div>
      </div>
      <div className="w-full mt-7 hidden md:flex">
        <Search variant="full" bgColor="bg-blackRussian" />
      </div>
      <div className="mt-7 md:mt-10">
        <Typography
          color={"white"}
          variant={"h3"}
          content={"Top 10 Casino Games"}
        />
        <CasinoGamesCard />
      </div>

      <div className="mt-12">
        <Typography color={"white"} variant={"h3"} content={"Top Bets"} />
        <Table columns={columns} data={data} id="top-bets" loading={loading} />
      </div>
    </div>
  );
};

export default CasinoHome;
