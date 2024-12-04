import React from "react";
import { Typography } from "components";

const Poker = () => {
  return (
    <div>
      <Typography color={"white"} variant={"h1"} content={"Roulette"} />
      <div className="mt-7">
        <div className="relative overflow-hidden pb-[56.25%] h-0 rounded-xl">
          <iframe
            src={'https://metagrow5r.uat1.evo-test.com/frontend/evo/r1/#provider=evolution&ua_launch_id=180df03be63e7f900ec82e2a&game=dragontiger&table_id=DragonTiger00001&app='} // Replace with your desired URL
            title="My Iframe"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full bg-darkByzantineBlue"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Poker;
