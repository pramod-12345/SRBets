import React, { useEffect, useState } from "react";
import eyeIcon from "../../assets/svg/eye.svg"
import rupeesIcon from "../../assets/svg/rupees.svg"
import rippleIcon from "../../assets/svg/ripple.svg"
import infoIcon from "../../assets/svg/info-icon.svg";
import Typography from "../../components/common/typography";
import Advertisement from "../../components/common/advertisement";
import Search from "../../components/common/search";
import { casinoGames, columns, rows, sportsGames } from "../../data";
import Table from "../../components/shared/table";
import { BetCards, SportsCard } from "../../components/common/cards";
import Modal from "../../components/common/Modal";
import Seperator from "../../components/common/seperator";

const CasinoHome = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setData(rows);
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      <Typography color={"white"} variant={"h1"} content={"Casino home"} />
      <div className="mt-5">
        <Advertisement />
      </div>
      <div className="w-full mt-7">
        <Search variant="full" bgColor="bg-blackRussian" />
      </div>
      <div className="mt-10">
        <Typography
          color={"white"}
          variant={"h3"}
          content={"Top 10 Casino Games"}
        />
        <div className="flex gap-3 md:grid-cols-3 lg:grid-cols-5 flex-wrap mt-7">
          {casinoGames?.map((item, index) => (
            <SportsCard key={index} bgImg={item?.icon}  width={'208px'} />
          ))}
        </div>
      </div>

      <div className="mt-12">
        <Typography color={"white"} variant={"h3"} content={"Top Bets"} />
        <Table columns={columns} data={data} id="top-bets" loading={loading} />
      </div>
      {/* Wallet Modal */}
      {/* <Modal title={"Wallet"}>
      <div className="mt-5 w-[552px] h-[296px] rounded-lg border border-ebonyClay">
          <div className="bg-ebonyClay rounded-t-lg p-6">
          <div className="flex items-center gap-2">
            <Typography variant={"size14Semibold"} color={"vintageRibbon"} content={"Estimate Balance"}/>
            <img src={eyeIcon} alt="Eye"/>
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
              <img src={rupeesIcon} alt="Rupees"/>
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
            <Seperator color="blackRussian"/>

            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center gap-3">
                <img src={rippleIcon} alt="Ripple"/>
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
      </Modal> */}
      {/* Bet Details */}
      {/* <Modal title={"Bet Details"}>
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
      </Modal> */}
    </div>
  );
};

export default CasinoHome;
