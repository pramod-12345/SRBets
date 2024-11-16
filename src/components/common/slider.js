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
            bgColor={"bg-arrowDisabled"}
            icon={leftArrow}
            imageStyle={"w-[5px] h-[9px] mr-0"}
            type="arrow"
          />
          <CommonButton
            bgColor={"bg-arrowActive"}
            icon={rightArrow}
            imageStyle={"w-[5px] h-[9px] mr-0"}
            type="arrow"
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
