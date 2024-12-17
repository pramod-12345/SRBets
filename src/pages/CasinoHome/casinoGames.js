import React from 'react'
import {SportsCard} from "components"
import { casinoGames } from '../../data'

const CasinoGamesCard = () => {
  return (
    <div className="grid gap-2 md:gap-3 grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 flex-wrap mt-5 lg:mt-7">
    {casinoGames?.map((item, index) => (
        <SportsCard key={index} bgImg={item?.icon} />
    ))}
</div>
  )
}

export default CasinoGamesCard