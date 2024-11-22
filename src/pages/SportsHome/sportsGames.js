import React from 'react'
import { sportsGames } from '../../data'
import { SportsCard } from '../../components/common/cards'

const SportsGamesCard = () => {
  return (
    <div className="flex gap-3 md:grid-cols-3 lg:grid-cols-5 flex-wrap mt-7">
    {sportsGames?.map((item, index) => (
      <SportsCard
        key={index}
        width={'208px'}
        bgImg={item?.icon}
        title={item?.title}
        number={item?.number}
      />
    ))}
  </div>
  )
}

export default SportsGamesCard