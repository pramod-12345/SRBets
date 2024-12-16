import { Typography } from "components";
import React from "react";

const SelectionItem = ({ label, value, isSelected, onSelect }) => {
  return (
    <div
      onClick={onSelect}
      className={`flex justify-between items-center rounded-lg w-full md:w-1/2 p-4 cursor-pointer ${
        isSelected ? "bg-russianViolet" : "bg-blackRussian"
      }`}
    >
      <Typography
        variant={"size14Normal"}
        color={"white"}
        content={label}
      />
      <Typography
        variant={"size14Bold"}
        color={isSelected ? "white" : "primary"}
        content={value}
      />
    </div>
  );
};

export default SelectionItem;
