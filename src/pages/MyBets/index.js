import React from "react";
import Tabs from "../../components/common/tab";
import { BetCards } from "../../components/common/cards";
import infoIcon from "../../assets/svg/info-icon.svg";
import { cardData, columns, rows } from "../../data";
import Table from "../../components/shared/table";
import CardData from "./cardData";
import DepositCrypto from "../../components/modals/wallet/depositCrypto";
import Withdraw from "../../components/modals/wallet/withdraw";

const MyBets = () => {
  const tabs = [
    { id: "casino", label: "Casino" },
    { id: "sports", label: "Sports" },
  ];
  const tableTabs = [
    { id: "top-bets", label: "Top bets" },
    { id: "casino", label: "Casino leaderboard" },
    { id: "sports", label: "Sports leaderboard" },
  ];
  return (
    <div className="mt-5 flex flex-col items-center justify-between ">
      <Tabs tabs={tabs} isOptions={true}>
        <div id="casino">
          <CardData/>
        </div>
      </Tabs>
      <div className="mt-8 w-full">
        <Tabs tabs={tableTabs}>
          <Table columns={columns} data={rows} id={"top-bets"} />
        </Tabs>
      </div>
    </div>
  );
};

export default MyBets;
