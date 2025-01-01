import React from "react";
import { SportsCard } from "components";
import { useNavigate } from "react-router-dom";

const SportsGamesCard = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div className="grid gap-2 md:gap-3 grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 md:grid-cols-3 lg:grid-cols-5 flex-wrap mt-7">
      {data?.map((item) => (
        <SportsCard
          key={item?.id}
          bgImg={item?.imageUrl}
          // title={item?.name}
          onClick={() => navigate("/sports-landing")}
        />
      ))}
    </div>
  );
};

export default SportsGamesCard;
