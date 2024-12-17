import React, { useState } from "react";
import { Typography, Tabs, Accordion } from "components";
import { star } from "assets";
import MatchBackground from "./matchBackground";
import TeamSelection from "./teamSelection";
import SelectionItem from "./selectedteam";

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


  const teams = [
    { label: "India", value: "1.18" },
    { label: "Bangladesh", value: "4.78" },
    { label: "Bangladesh", value: "4.78" },
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
          <div className="flex justify-between w-full items-center p-4 md:p-5 gap-2">
          <TeamSelection
        teamName="India"
        selectedTeam={selectedTeam}
        handleSelection={handleSelection}
        odds="1.18"
      />
      <TeamSelection
        teamName="Bangladesh"
        selectedTeam={selectedTeam}
        handleSelection={handleSelection}
        odds="4.78"
      />
          </div>
        </Accordion>
      </div>
      <div className="mt-4 md:mt-5">
        <Accordion
          title={"1st Innings - Sakib, Tanzim Hasan Total"}
          labelIcon={star}
          isSeperator={true}
        >
          <div className="flex flex-col md:flex-row justify-between w-full items-center p-4 md:p-5 gap-2">
          {teams.map((team, index) => (
        <SelectionItem
          key={index}
          label={team.label}
          value={team.value}
          isSelected={selected === index}
          onSelect={() => handleSelect(index)}
        />
      ))}
          </div>
        </Accordion>
      </div>

      <div className="mt-5">{/* <PaymentApproved/> */}</div>
    </div>
  );
};

export default CricketDetails;
