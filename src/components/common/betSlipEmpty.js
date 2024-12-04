import React from 'react'
import { betSlipEmpty } from "assets"
import Typography from './typography'

const BetSlipEmpty = () => {
    return (
        <div className='flex flex-col items-center justify-center'>
            <img src={betSlipEmpty} alt='Bet Slip Empty' />
            <div className='flex flex-col items-center'>
                <Typography variant={"size16Medium"} content={"Bet slip is empty"} color={"purpleFog"} />
                <Typography variant={"size20Semibold"} content={"Start betting now!"} color={"white"} />
            </div>
        </div>
    )
}

export default BetSlipEmpty