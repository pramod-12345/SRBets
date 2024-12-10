import React from 'react'
import {SportsCard} from "components"
import { casinoGames } from '../../data'

const CasinoGamesCard = () => {
  return (
    <div className="flex gap-3 md:grid-cols-3 lg:grid-cols-5 flex-wrap mt-5 lg:mt-7">
    {casinoGames?.map((item, index) => (
        <SportsCard key={index} bgImg={item?.icon} width={'180px'} />
    ))}
</div>
  )
}

export default CasinoGamesCard