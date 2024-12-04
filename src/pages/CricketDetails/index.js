import React, { useState } from "react";
import { Typography, Tabs, Accordion } from "components";
import { star } from "assets";
import MatchBackground from "./matchBackground";

const CricketDetails = () => {
  const [selected, setSelected] = useState(null);
  const [selectedTeam, setSelectedTeam] = useState(null);

  const handleSelect = (index) => {
    setSelected(index);
  };

  const handleSelection = (team) => {
    setSelectedTeam(team); // Update selected team
  };

  const tabs = [
    { id: "main", label: "Main" },
    { id: "innings", label: "Innings" },
    { id: "overs", label: "Overs" },
    { id: "players", label: "Players" },
  ];
  return (
    <div>
      <Typography
        color={"white"}
        variant={"h1"}
        content={"India- Bangladesh"}
      />
      <div className="mt-6">
        <MatchBackground />
      </div>
      <div className="mt-6">
        <Tabs tabs={tabs} />
      </div>
      <div className="mt-5">
        <Accordion title={"Winner (Incl. Super Over)"} isSeperator={true}>
          <div className="flex justify-between w-full items-center p-5 gap-2">
            {/* India */}
            <div
              onClick={() => handleSelection("India")}
              className={`flex justify-between items-center rounded-lg w-1/2 p-4 cursor-pointer ${
                selectedTeam === "India"
                  ? "bg-primary text-white"
                  : "bg-blackRussian"
              }`}
            >
              <span
                className={`text-sm font-medium ${
                  selectedTeam === "India" ? "text-white" : "text-white"
                }`}
              >
                India
              </span>
              <span
                className={`text-sm font-bold ${
                  selectedTeam === "India" ? "text-white" : "text-primary"
                }`}
              >
                1.18
              </span>
            </div>
            {/* Bangladesh */}
            <div
              onClick={() => handleSelection("Bangladesh")}
              className={`flex justify-between items-center rounded-lg w-1/2 p-4 cursor-pointer ${
                selectedTeam === "Bangladesh"
                  ? "bg-primary text-white"
                  : "bg-blackRussian"
              }`}
            >
              <span
                className={`text-sm font-medium ${
                  selectedTeam === "Bangladesh" ? "text-white" : "text-white"
                }`}
              >
                Bangladesh
              </span>
              <span
                className={`text-sm font-bold ${
                  selectedTeam === "Bangladesh" ? "text-white" : "text-primary"
                }`}
              >
                4.78
              </span>
            </div>
          </div>
        </Accordion>
      </div>
      <div className="mt-5">
        <Accordion
          title={"1st Innings - Sakib, Tanzim Hasan Total"}
          labelIcon={star}
          isSeperator={true}
        >
          <div className="flex justify-between  w-full items-center p-5 gap-2">
            {/* India */}
            {[
              { label: "India", value: "1.18" },
              { label: "Bangladesh", value: "4.78" },
              { label: "Bangladesh", value: "4.78" },
            ].map((item, index) => (
              <div
                key={index}
                onClick={() => handleSelect(index)}
                className={`flex justify-between  items-center rounded-lg w-1/2 p-4 cursor-pointer ${
                  selected === index ? "bg-russianViolet" : "bg-blackRussian"
                }`}
              >
                <Typography
                  variant={"size14Normal"}
                  color={"white"}
                  content={item.label}
                />
                <Typography
                  variant={"size14Bold"}
                  color={"primary"}
                  content={item.value}
                />
              </div>
            ))}
          </div>
        </Accordion>
      </div>

      <div className="mt-5">{/* <PaymentApproved/> */}</div>
    </div>
  );
};

export default CricketDetails;
