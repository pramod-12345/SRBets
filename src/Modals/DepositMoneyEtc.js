import React from 'react'
import Typography from '../components/common/typography'
import Modal from '../components/common/Modal'
import Input from '../components/common/input'
import dropdownIcon from "../assets/svg/dropdown-arrow.svg"
import reloadIcon from "../assets/svg/reload.svg"
import copyIcon from "../assets/svg/copy.svg"
import qrImg from "../assets/svg/qr.svg";
import ethIcon from "../assets/svg/eth.svg"
import Tabs from '../components/common/tab'

const DepositMoneyEtc = () => {
    const tabs = [
        { id: "crypto", label: "Crypto" },
        { id: "local-currency", label: "Local Currency" },
    ];
    return (
        <Modal>
            <Typography
                color={"white"}
                variant={"size20Bold"}
                content={"Deposit Money"}
            />
            <div className="mt-5">
                <Tabs tabs={tabs} />
            </div>
            <div class="space-y-4">
                <div class="flex items-center justify-between space-x-3 bg-darkByzantineBlue px-4 py-3.5 rounded-xl mt-6">
                    <div className="flex items-center gap-3">
                        <img src={ethIcon} alt="ETH" className="w-7 h-7" />
                        <div className="flex flex-col gap-px justify-center">
                            <Typography variant={"text12Semibold"} color={"white"} content={"ETH"} />
                            <Typography variant={"text12Normal"} color={"vintageRibbon"} content={"Ethereum"} />
                        </div>
                    </div>
                    <img src={dropdownIcon} alt="Dropdown Menu" />
                </div>

                <div className="mt-6">
                    <Typography variant={"size12Medium"} color={"vintageRibbon"} content={"Network"} />
                    <Input value={"ETH"} />
                </div>


                <div className="mt-7">
                    <Typography variant={"text12Normal"} color={"vintageRibbon"} content={"Your Bitcoin deposit address"} />
                    <div class="bg-darkByzantineBlue px-4 py-5 rounded-xl flex items-center justify-between mt-3">
                        <span class="truncate">vcbd34245243sfdETGBV46457557755ddghfhfhf</span>
                        <div class="flex gap-x-7">
                            <button class="text-gray-400 hover:text-white">
                                <img src={reloadIcon} alt="Reload" />
                            </button>
                            <button class="text-gray-400 hover:text-white">
                                <img src={copyIcon} alt="Copy" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="p-6 flex flex-col gap-4 bg-darkByzantineBlue rounded-xl justify-center items-center">
                    <img src={qrImg} alt="" className="w-[120px] h-[120px]" />
                    <Typography
                        color={"vintageRibbon"}
                        variant={"size14Medium"}
                        content={"Send only BTC to this address, 1 confirmation required"}
                    />
                </div>
            </div>
        </Modal>
    )
}

export default DepositMoneyEtc