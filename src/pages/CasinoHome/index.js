import React, { useEffect, useState } from "react";
import Typography from "../../components/common/typography";
import Advertisement from "../../components/common/advertisement";
import Search from "../../components/common/search";
import { casinoGames, columns, rows, sportsGames } from "../../data";
import Table from "../../components/shared/table";
import { SportsCard } from "../../components/common/cards";
import PaymentStatus from "../../Modals/PaymentStatus";
import WithdrawCrypto from "../../Modals/WithdrawCrypto";

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
                        <SportsCard key={index} bgImg={item?.icon} width={'208px'} />
                    ))}
                </div>
            </div>

            <div className="mt-12">
                <Typography color={"white"} variant={"h3"} content={"Top Bets"} />
                <Table columns={columns} data={data} id="top-bets" loading={loading} />
            </div>
            {/* <PaymentStatus
                isError={false}
                amount={500}
                balance={580}
                details={[
                    { label: "Reference no.", value: "#35576786566" },
                    { label: "Payment date and time", value: "25 Oct 2024, 06:20 PM" },
                    { label: "Deposit Amount", value: "$500" },
                    { label: "Status", value: "Completed" },
                ]}
            /> */}
            <WithdrawCrypto/>
        </div>
    );
};

export default CasinoHome;
