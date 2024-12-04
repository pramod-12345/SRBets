import React from 'react'
import {
    Modal,
    Typography,
    BetCards,
    Seperator
} from "components"
import {
    infoIcon,
    copy,
    backIcon
} from "assets"


const BetDetails = ({handleClose}) => {
    return (
        <Modal onClose={handleClose}>
            <div className='md:hidden p-0 py-5 px-4 bg-blackRussian'>
           <div className='flex items-center gap-2 mb-4'>
           <img src={backIcon} alt='Back'/>
            <Typography
                color={"white"}
                variant={"size20Bold"}
                content={"Bet Details"}
            />
           </div>
           <Seperator/>
            </div>
            <div className='hidden md:block'>
             <Typography
                color={"white"}
                variant={"size20Bold"}
                content={"Bet Details"}
            /> 
            </div>
            <div className="mt-6">
                <div className="space-y-4 mt-6 px-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className='flex flex-col gap-1'>
                                <Typography variant={"size12Semibold"} color={"vintageRibbon"} content={"Sports Type"} />
                                <Typography variant={"size14Normal"} color={"white"} content={"Cricket"} />
                            </div>
                        </div>
                        <div className="text-right">
                            <div className='flex flex-col gap-1'>
                                <Typography variant={"size12Semibold"} color={"vintageRibbon"} content={"ID"} />
                                <div className='flex items-center gap-1'>
                                <Typography variant={"size14Normal"} color={"white"} content={"#467586688"} />
                                <img src={copy} alt='Copy icon'/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center gap-3">
                            <div className='flex flex-col gap-1'>
                                <Typography variant={"size12Semibold"} color={"vintageRibbon"} content={"Placed By"} />
                                <Typography variant={"size14Normal"} color={"white"} content={"Gauru2104"} />
                            </div>
                        </div>
                        <div className="text-right">
                            <div className='flex flex-col gap-1'>
                                <Typography variant={"size12Semibold"} color={"vintageRibbon"} content={"Placed On"} />
                                <Typography variant={"size14Normal"} color={"white"} content={"12 Sep 2024 at 10:30PM"} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-9">
                    <BetCards date={"12 Sep 2024 at 10:30PM"}
                        status={"WIN"}
                        infoIcon={infoIcon}
                        match={"India Vs Bangladesh"}
                        result={"India"}
                        odds={"1.24"}
                        betAmount={"10.00"}
                        payout={"240.00"}
                    />
                </div>
            </div>
        </Modal>
    )
}

export default BetDetails