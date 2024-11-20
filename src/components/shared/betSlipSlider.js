import React, { useState } from 'react';
import closeIcon from "../../assets/svg/close.svg"
import Typography from '../common/typography';
import Seperator from '../common/seperator';
import Tabs from '../common/tab';
import Dropdown from '../common/dropdown';
import { numberItems } from '../../data';
import { BetSlipCards } from '../common/cards';
import CommonButton from '../common/button';

const BetSlipSlider = ({ betSlipToggle }) => {

    const tabs = [
        { id: "single", label: "Single" },
        { id: "multi", label: "Multi" },
    ];
    const handleNumberSelect = (item) => {
        console.log("Selected Number Option:", item.label);
    };

    return (
        <aside
            style={{
                maxHeight: "calc(100vh - 72px)",
                minHeight: "calc(100vh - 72px)",
            }}
            className={`hidden sidebar-main no-scrollbar bg-blackRussian text-white h-full md:flex flex-col overflow-auto transition-all ease-in-out duration-300 ${betSlipToggle ? "translate-x-0 min-w-[440px] w-[260px]" : "translate-x-full min-w-[0] w-0"
                }`}
        >
            <div className="px-6 py-7">
                <header className="">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                            <img src={closeIcon} alt='Close' className='w-3 h-3' />
                            <Typography color={"white"} content={"Betslip"} variant={"size20Semibold"} />
                            <span className="bg-white text-[14px] leading-4 text-blackRussian flex justify-center items-center font-semibold w-[32px] h-[24px] rounded-xl">1</span>
                        </div>
                        <button className="text-primary whitespace-nowrap flex items-center font-semibold leading-4 text-sm">
                            Go to my bets
                            <span className="ml-3 bg-primary text-white text-sm flex justify-center items-center font-semibold w-[32px] h-[24px] rounded-xl">10</span>
                        </button>
                    </div>

                    <Seperator c />
                    <div className='mt-5'>
                        <Tabs tabs={tabs} />
                    </div>

                    <div className='mt-5'>
                        <Seperator />
                    </div>

                    <div className='flex items-center justify-between mt-3'>
                        <Dropdown
                            items={numberItems}
                            onSelect={handleNumberSelect}
                            placeholder="Accept Any odds"
                        />
                        <button className='text-[14px] leading-4 font-semibold'>
                            Clear All
                        </button>
                    </div>
                </header>

                <div className="mt-5">
                   <BetSlipCards/>
                </div>

                <footer className='absolute bottom-0 left-0 w-full text-center'>
                    <div className='bg-darkByzantineBlue p-6'>
                        <div className='flex items-center justify-center text-white'>
                        <CommonButton type='viewBetsBtn' label={"View My Bets"}/>
                        <span className="ml-3 bg-white text-primary text-sm flex justify-center items-center font-semibold w-[32px] h-[24px] rounded-xl">10</span>
                        </div>
                    </div>
                </footer>
            </div>
        </aside>
    );
};

export default BetSlipSlider;