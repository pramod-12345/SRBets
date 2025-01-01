import React from 'react'
import {SportsCard} from "components"
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const CasinoGamesCard = ({data}) => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const handleGameEntry = (id) => {
    navigate(`/game-entry/${id}`)
  };

  return (
    <div className="grid gap-2 md:gap-3 grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 flex-wrap mt-5 lg:mt-7">
    {data?.map((item, index) => (
        <SportsCard key={index} bgImg={item?.imageUrl} onClick={() => (isLoggedIn ? handleGameEntry(item?.id) : {})}/>
    ))}
</div>
  )
}

export default CasinoGamesCard