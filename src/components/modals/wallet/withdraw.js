import React from 'react'
import Modal from '../components/common/Modal'
import Typography from '../components/common/typography'
import Tabs from '../components/common/tab'
import btcIcon from "../assets/svg/btc.svg";
import dropdownIcon from "../assets/svg/dropdown-arrow.svg"
import Input from '../components/common/input';
import CommonButton from '../components/common/button';

const Withdraw = () => {
    const tabs = [
        { id: "crypto", label: "Crypto" },
        { id: "local-currency", label: "Local Currency" },
    ];

    return (
        <Modal>
            <Typography
                color={"white"}
                variant={"size20Bold"}
                content={"Withdraw"}
            />
            <div className='mt-5'>
                <Tabs tabs={tabs}>
                    <div id='crypto'>
                        <div className='mt-6'>
                            <div class="flex items-center justify-between space-x-3 bg-darkByzantineBlue px-4 py-3.5 rounded-xl mt-6">
                                <div className="flex items-center gap-3">
                                    <img src={btcIcon} alt="BTC" className="w-7 h-7" />
                                    <div className="flex flex-col justify-center">
                                        <Typography variant={"size12Semibold"} color={"white"} content={"BTC"} />
                                        <Typography variant={"size12Normal"} color={"vintageRibbon"} content={"Bitcoin"} />
                                    </div>
                                </div>
                                <div className='flex gap-x-4'>
                                    <div className="flex flex-col justify-center items-end">
                                        <Typography variant={"size12Semibold"} color={"white"} content={"0.0000056"} />
                                        <Typography variant={"size12Normal"} color={"vintageRibbon"} content={"$0.5"} />
                                    </div>
                                    <img src={dropdownIcon} alt="Dropdown Menu" />
                                </div>
                            </div>
                        </div>
                        <div className="mt-6">
                            <Typography variant={"size12Medium"} color={"vintageRibbon"} content={"Amount to withdraw"} />
                            <Input value={"0.0000000"} />
                        </div>
                        <div className="mt-6">
                            <Typography variant={"size12Medium"} color={"vintageRibbon"} content={"Withdraw to"} />
                            <Input value={"0.0000000"} />
                        </div>
                        <div className='mt-3'>
                            <Typography
                                color={"vintageRibbon"}
                                content={"Minimum withdrawal is 0.00072641. Your withdrawal will have 0.00067447 subtracted from your remaining balance to cover the fee required to process the transaction."}
                                variant={"size12Normal"}
                            />
                        </div>
                        <div className='mt-10'>
                            <CommonButton type='viewBetsBtn' label={"Withdraw"} />
                        </div>
                    </div>
                    <div id='local-currency'>
                        <div className='mt-6'>
                            <div class="flex items-center justify-between space-x-3 bg-darkByzantineBlue px-4 py-3.5 rounded-xl mt-6">
                                <div className="flex items-center gap-3">
                                    <img src={btcIcon} alt="BTC" className="w-7 h-7" />
                                    <div className="flex flex-col justify-center">
                                        <Typography variant={"size12Semibold"} color={"white"} content={"INR"} />
                                        <Typography variant={"size12Normal"} color={"vintageRibbon"} content={"Indian Rupee"} />
                                    </div>
                                </div>
                                <div className="flex flex-col justify-center items-end">
                                    <Typography variant={"size12Semibold"} color={"white"} content={"106.56"} />
                                    <Typography variant={"size12Normal"} color={"vintageRibbon"} content={"$12"} />
                                </div>
                            </div>
                        </div>
                        <div className="mt-6">
                            <div className='flex items-center justify-between'>
                                <Typography variant={"size12Medium"} color={"vintageRibbon"} content={"Select Bank Acccount"} />
                                <button className='text-primary text-sm leading-4 font-medium'>
                                    Add new
                                </button>
                            </div>
                            <div class="flex items-center justify-between bg-darkByzantineBlue px-4 py-5 rounded-xl mt-4">
                                <div className="flex items-center gap-3">

                                    <Typography variant={"size12Normal"} color={"white"} content={"ICICI Bank 0035 0147 2345"} />
                                </div>
                                <img src={dropdownIcon} alt="Dropdown Menu" />
                            </div>
                        </div>
                        <div className="mt-6">
                            <Typography variant={"size12Medium"} color={"vintageRibbon"} content={"Enter Amount to Withdraw"} />
                            <Input value={""} />
                        </div>
                        <div className='mt-3'>
                            <Typography
                                color={"vintageRibbon"}
                                content={"For INR withdrawals, you must use a bank account in your personal name. Attempting to withdraw through another bank account not in your name can lead to INR withdrawals being revoked."}
                                variant={"size12Normal"}
                            />
                        </div>
                        <div className='mt-10'>
                            <CommonButton type='viewBetsBtn' label={"Withdraw"} />
                        </div>
                    </div>
                </Tabs>
            </div>

        </Modal>
    )
}

export default Withdraw