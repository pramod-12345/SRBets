import React from 'react'
import Modal from '../../common/Modal'
import Typography from '../../common/typography';
import Tabs from '../..//common/tab';
import btcIcon from "../../../assets/svg/btc.svg";
import dropdownIcon from "../../../assets/svg/dropdown-arrow.svg"
import reloadIcon from "../../../assets/svg/reload.svg"
import copyIcon from "../../../assets/svg/copy.svg"
import qrImg from "../../../assets/svg/qr.svg";
import backIcon from "../../../assets/svg/back.svg"
import Seperator from '../../common/seperator';


const DepositCrypto = () => {

    const tabs = [
        { id: "crypto", label: "Crypto" },
        { id: "local-currency", label: "Local Currency" },
    ];

    return (
        <Modal>
            <div className='md:hidden mx-4 py-5 bg-blackRussian'>
           <div className='flex items-center gap-2 mb-4'>
           <img src={backIcon} alt='Back'/>
            <Typography
                color={"white"}
                variant={"size20Bold"}
                content={"Deposit Money"}
            />
           </div>
           <Seperator/>
            </div>
            <div className='hidden md:block'>
             <Typography
                color={"white"}
                variant={"size20Bold"}
                content={"Deposit Money"}
            /> 
            </div>
            <div className="mt-5">
                <Tabs tabs={tabs} />
            </div>
            <div class="space-y-4">
                <div class="flex items-center justify-between space-x-3 bg-darkByzantineBlue px-4 py-3.5 rounded-xl mt-6">
                    <div className="flex items-center gap-3">
                        <img src={btcIcon} alt="BTC" className="w-7 h-7" />
                        <div className="flex flex-col justify-center">
                        <Typography variant={"size12Semibold"} color={"white"} content={"BTC"} />
                        <Typography variant={"size12Normal"} color={"vintageRibbon"} content={"Bitcoin"} />
                        </div>
                    </div>
                    <img src={dropdownIcon} alt="Dropdown Menu" />
                </div>

                <div className="mt-7">
                <Typography variant={"size12Normal"} color={"vintageRibbon"} content={"Your Bitcoin deposit address"} />
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
                <div className="p-6 flex flex-col gap-4 text-center bg-darkByzantineBlue rounded-xl justify-center items-center">
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

export default DepositCrypto