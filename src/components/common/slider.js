import React from "react";
import CommonButton from "./button";
import leftArrow from "../../assets/svg/left-arrow.svg";
import rightArrow from "../../assets/svg/right-arrow.svg";
import SectionHeader from "./headerSection";

const Slider = ({ children, title }) => {
  return (
    <div>
      <div className=" flex items-center justify-between">
        <SectionHeader title={title} />
        <div className="hidden md:flex items-center gap-3">
          <CommonButton
            bgColor={"bg-darkByzantineBlue"}
            icon={leftArrow}
            type="iconBtn"
            disabled={true}
          />
          <CommonButton
            bgColor={"bg-purpleFog"}
            icon={rightArrow}
            type="iconBtn"
          />
        </div>
      </div>
      <div
        className="flex item-center justify-start sm:pt-5 pt-5 gap-4 overflow-x-auto no-scrollbar"
        style={{ whiteSpace: "nowrap" }}
      >
        {children}
      </div>
    </div>
  );
};

export default Slider;
