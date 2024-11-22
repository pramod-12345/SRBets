import React, { useEffect, useState } from "react";
import Typography from "../../components/common/typography";
import Advertisement from "../../components/common/advertisement";
import Search from "../../components/common/search";
import { casinoGames, columns, rows } from "../../data";
import Table from "../../components/shared/table";
import { SportsCard } from "../../components/common/cards";
import BetDetails from "../../components/modals/BetDetails";
import PaymentStatus from "../../components/modals/wallet/index";
import CasinoGamesCard from "./casinoGames";

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
               <CasinoGamesCard/>
            </div>

            <div className="mt-12">
                <Typography color={"white"} variant={"h3"} content={"Top Bets"} />
                <Table columns={columns} data={data} id="top-bets" loading={loading} />
            </div>
            <PaymentStatus
                isError={false}
                amount={500}
                balance={580}
                details={[
                    { label: "Reference no.", value: "#35576786566" },
                    { label: "Payment date and time", value: "25 Oct 2024, 06:20 PM" },
                    { label: "Deposit Amount", value: "$500" },
                    { label: "Status", value: "Completed" },
                ]}
            />
            {/* <Withdraw/> */}
        </div>
    );
};

export default CasinoHome;
