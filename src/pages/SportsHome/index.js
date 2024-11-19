import React, { useEffect, useState } from "react";
import Typography from "../../components/common/typography";
import Advertisement from "../../components/common/advertisement";
import Search from "../../components/common/search";
import { columns, rows, sportsGames } from "../../data";
import Table from "../../components/shared/table";
import { SportsCard } from "../../components/common/cards";

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
        <Search />
      </div>
      <div className="mt-10">
        <Typography
          color={"white"}
          variant={"h3"}
          content={"Top 10 Sports Games"}
        />
        <div className="flex gap-3 md:grid-cols-3 lg:grid-cols-5 flex-wrap mt-7">
          {sportsGames?.map((item, index) => (
            <SportsCard
              key={index}
              width={'208px'}
              bgImg={item?.icon}
              title={item?.title}
              number={item?.number}
              // onClick={() => navigate("/sports-landing")}
            />
          ))}
        </div>
      </div>

      <div className="mt-12">
        <Typography color={"white"} variant={"h3"} content={"Top Bets"} />
        <Table columns={columns} data={data} id="top-bets" loading={loading} />
      </div>
    </div>
  );
};

export default SportsHome;
