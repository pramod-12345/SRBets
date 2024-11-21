import React from 'react'
import Modal from '../components/common/Modal'
import eyeIcon from "../assets/svg/eye.svg"
import rupeesIcon from "../assets/svg/rupees.svg"
import rippleIcon from "../assets/svg/ripple.svg"
import Typography from '../components/common/typography'
import Seperator from '../components/common/seperator'

const WalletModal = () => {
    return (
        <Modal>
            <Typography
        color={"white"}
        variant={"size20Bold"}
        content={"Wallet"}
      />
            <div className="mt-5 w-[552px] h-[296px] rounded-lg border border-ebonyClay">
                <div className="bg-ebonyClay rounded-t-lg p-6">
                    <div className="flex items-center gap-2">
                        <Typography variant={"size14Semibold"} color={"vintageRibbon"} content={"Estimate Balance"} />
                        <img src={eyeIcon} alt="Eye" />
                    </div>

                    <div className="flex items-center justify-between mt-1.5">
                        <h3 className="text-[32px] font-bold">$0.12</h3>
                        <div className="flex gap-3">
                            <button className="w-[122px] text-[14px] leading-4 font-semibold bg-vintageRibbon rounded-lg">
                                Withdraw
                            </button>
                            <button className="w-[122px] text-[14px] leading-4 font-semibold bg-primary py-3 rounded-lg">
                                + Add Money
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex justify-between text-[12px] leading-3 font-medium text-vintageRibbon px-6 mt-5">
                    <span>YOUR CURRENCIES</span>
                    <span>VALUES</span>
                </div>

                <div className="space-y-4 mt-6 px-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <img src={rupeesIcon} alt="Rupees" />
                            <div>
                                <div className="text-[14px] leading-4 font-semibold">INR</div>
                                <div className="text-[12px] text-vintageRibbon mt-0.5">Indian rupee</div>
                            </div>
                        </div>
                        <div className="text-right">
                            <div className="text-[14px] leading-4 font-semibold">61.90</div>
                            <div className="text-[12px] text-vintageRibbon mt-0.5">$0.86</div>
                        </div>
                    </div>
                    <Seperator color="blackRussian" />

                    <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center gap-3">
                            <img src={rippleIcon} alt="Ripple" />
                            <div>
                                <div className="text-[14px] leading-4 font-semibold">XRP</div>
                                <div className="text-[12px] text-vintageRibbon mt-0.5">Ripple</div>
                            </div>
                        </div>
                        <div className="text-right">
                            <div className="text-[14px] leading-4 font-semibold">0.00045</div>
                            <div className="text-[12px] text-vintageRibbon mt-0.5">$0.01</div>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default WalletModal