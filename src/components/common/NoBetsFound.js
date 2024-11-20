import React from 'react'
import NoBetsIcon from "../../assets/svg/no-bet-found.svg"
import Typography from './typography'

const NoBetsFound = () => {
  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='max-w-[167px] whitespace-nowrap flex flex-col items-center justify-center'>
      <img src={NoBetsIcon} alt='No Bets Found'/>
      <div className='mt-7'>
        <Typography content={"No Active Bets"} variant={"h3"} color={"vintageRibbon"}/>
        <div className='text-center mt-2'>
        <Typography content={"Start Betting Now!"} variant={"size14Semibold"} color={"white"}/>
        </div>
      </div>
      </div>
    </div>
  )
}

export default NoBetsFound