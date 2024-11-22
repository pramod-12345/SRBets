import React from 'react'
import { cardData } from '../../data'
import { BetCards } from '../../components/common/cards'
import infoIcon from "../../assets/svg/info-icon.svg";

const CardData = () => {
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
      />
    ))}
  </div>
    
  )
}

export default CardData