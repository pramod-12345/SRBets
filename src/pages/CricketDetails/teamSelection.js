import React from "react";

const TeamSelection = ({ teamName, selectedTeam, handleSelection, odds }) => {
  const isSelected = selectedTeam === teamName;

  return (
    <div
      onClick={() => handleSelection(teamName)}
      className={`flex justify-between items-center rounded-lg w-1/2 p-4 cursor-pointer ${
        isSelected ? "bg-primary text-white" : "bg-blackRussian"
      }`}
    >
      <span
        className={`text-sm font-medium ${isSelected ? "text-white" : "text-white"}`}
      >
        {teamName}
      </span>
      <span
        className={`text-sm font-bold ${isSelected ? "text-white" : "text-primary"}`}
      >
        {odds}
      </span>
    </div>
  );
};

export default TeamSelection;
