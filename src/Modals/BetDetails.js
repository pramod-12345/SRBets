import React from 'react'
import Modal from '../components/common/Modal'
import Typography from '../components/common/typography'
import { BetCards } from '../components/common/cards'
import infoIcon from "../assets/svg/info-icon.svg";

const BetDetails = () => {
    return (
        <Modal>
            <Typography
                color={"white"}
                variant={"size20Bold"}
                content={"Bet Details"}
            />
            <div className="mt-6">
                <div className="space-y-4 mt-6 px-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div>
                                <div className="text-[14px] leading-4 font-semibold">Sports Type</div>
                                <div className="text-[12px] text-vintageRibbon mt-0.5">Cricket</div>
                            </div>
                        </div>
                        <div className="text-right">
                            <div className="text-[14px] leading-4 font-semibold">ID</div>
                            <div className="text-[12px] text-vintageRibbon mt-0.5">#467586688</div>
                        </div>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center gap-3">
                            <div>
                                <div className="text-[14px] leading-4 font-semibold">Placed by</div>
                                <div className="text-[12px] text-vintageRibbon mt-0.5">Gauru2104</div>
                            </div>
                        </div>
                        <div className="text-right">
                            <div className="text-[14px] leading-4 font-semibold">Placed on</div>
                            <div className="text-[12px] text-vintageRibbon mt-0.5">12 Sep 2024 at 10:30PM</div>
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