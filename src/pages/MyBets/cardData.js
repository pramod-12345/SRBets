import React from 'react'
import { cardData } from '../../data'
import { BetCards } from 'components'
import { infoIcon } from 'assets';

const CardData = ({setIsOpen}) => {
  return (
    <div
    className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5 pt-6 w-full"
  >
    {cardData.map((card, index) => (
      <BetCards
        key={index}
        date={card.date}
        status={card.status}
        match={card.match}
        result={card.result}
        odds={card.odds}
        betAmount={card.betAmount}
        payout={card.payout}
        infoIcon={infoIcon}
        setIsOpen={setIsOpen}
      />
    ))}
  </div>
    
  )
}

export default CardData