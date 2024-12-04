import React from 'react'
import { sportsGames } from '../../data'
import { SportsCard } from 'components'

const SportsGamesCard = () => {
  return (
    <div className="flex gap-0 md:gap-3 gap-y-3 md:gap-y-5  grid-2 md:grid-cols-3 lg:grid-cols-5 flex-wrap mt-7">
    {sportsGames?.map((item, index) => (
      <SportsCard
        key={index}
        width={'180px'}
        bgImg={item?.icon}
        title={item?.title}
        number={item?.number}
      />
    ))}
  </div>
  )
}

export default SportsGamesCard