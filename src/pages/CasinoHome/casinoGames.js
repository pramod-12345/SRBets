import React from 'react'
import { SportsCard } from '../../components/common/cards'
import { casinoGames } from '../../data'

const CasinoGamesCard = () => {
  return (
    <div className="flex gap-3 md:grid-cols-3 lg:grid-cols-5 flex-wrap mt-7">
    {casinoGames?.map((item, index) => (
        <SportsCard key={index} bgImg={item?.icon} width={'208px'} />
    ))}
</div>
  )
}

export default CasinoGamesCard