import React, { useEffect, useState } from "react";
import {
    Typography,
    Advertisement,
    Search,
    Table
} from "components"
import { columns, rows } from "../../data";
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
            <div className="w-full mt-7 hidden md:flex">
                <Search variant="full" bgColor="bg-blackRussian" />
            </div>
            <div className="mt-7 md:mt-10">
                <Typography
                    color={"white"}
                    variant={"h3"}
                    content={"Top 10 Casino Games"}
                />
                <CasinoGamesCard />
            </div>

            <div className="mt-12">
                <Typography color={"white"} variant={"h3"} content={"Top Bets"} />
                <Table columns={columns} data={data} id="top-bets" loading={loading} />
            </div>
        </div>
    );
};

export default CasinoHome;
