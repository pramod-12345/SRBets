import React from 'react'
import { sportsGames } from '../../data'
import { SportsCard } from 'components'

const SportsGamesCard = () => {
  return (
    <div className="grid gap-2 md:gap-3 grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 md:grid-cols-3 lg:grid-cols-5 flex-wrap mt-7">
    {sportsGames?.map((item, index) => (
      <SportsCard
        key={index}
        bgImg={item?.icon}
        title={item?.title}
      />
    ))}
  </div>
  )
}

export default SportsGamesCard