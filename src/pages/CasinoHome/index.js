import React, { useEffect, useState } from "react";
import { Typography, Search, Table } from "components";
import { columns, rows } from "../../data";
import CasinoGamesCard from "./casinoGames";
import { fetchLayout } from "services";
import { useDispatch, useSelector } from "react-redux";
import { useAxios } from "hooks";

const CasinoHome = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const { makeRequest } = useAxios();
  const { layoutData } = useSelector((state) => state?.dashboard);
  const casinoSection = layoutData?.layout?.casinoSection;

  useEffect(() => {
    setTimeout(() => {
      setData(rows);
      setLoading(false);
    }, 2000);
    fetchLayout(makeRequest, 'CASINO');
  }, []);

  return (
    <div>
      <Typography color={"white"} variant={"h1"} content={"Casino home"} />
      <div className="mt-5 w-full  overflow-hidden">
        <div className="flex items-center overflow-x-auto md:h-[200px] no-scrollbar gap-x-5">
          {layoutData?.layout?.promoBanners?.banners?.map((item)=>(<img
          key={item.id}
            src={item?.imageUrl}
            alt="Advertisemnent"
            className="md:h-full"
          />))}
        </div>
      </div>
      <div className="w-full mt-7 hidden md:flex">
        <Search variant="full" bgColor="bg-blackRussian" />
      </div>
      <div className="mt-7 md:mt-10">
        <Typography
          color={"white"}
          variant={"h3"}
          content={casinoSection?.title}
        />
        <CasinoGamesCard data={casinoSection?.featuredCasinoGames}/>
      </div>

      <div className="mt-12">
        <Typography color={"white"} variant={"h3"} content={"Top Bets"} />
        <Table columns={columns} data={data} id="top-bets" loading={loading} />
      </div>
    </div>
  );
};

export default CasinoHome;
