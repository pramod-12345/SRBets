import React, { useState } from "react";
import arrowDown from "../../assets/svg/arrow-down.svg";
import minusIcon from "../../assets/svg/accordion-minus-icon.svg";
import plusIcon from "../../assets/svg/accordion-plus-icon.svg";
import Typography from "./typography";
import Badge from "./badge";
import Seperator from "./seperator";

const Accordion = ({ title, children, badgeContent, isMain, labelIcon, isSeperator }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`${
        isMain ? "bg-darkBlueBlack py-5 px-5" : "bg-darkByzantineBlue"
      }  w-full rounded-lg ${isMain ? "mb-5" : ''}`}
    >
      <div className={`flex justify-between items-center  ${ !isMain ? 'py-4 px-5' : ''}`}>
        <div className={`flex items-center gap-2`}>
          {labelIcon && <img src={labelIcon} className="w-4 h-4" alt="Icon" />}

          <Typography
            color={isMain ? "white" : "vintageRibbon"}
            variant={"textSmSemibold"}
            content={title}
          />
          {badgeContent && (
            <Badge color={"vintageRibbon"}>
              <Typography
                color={"white"}
                variant={"textSmSemibold"}
                content={badgeContent}
              />
            </Badge>
          )}
        </div>

        {isMain ? (
          <img
            src={isOpen ? minusIcon : plusIcon}
            alt={isOpen ? "Collapse" : "Expand"}
            className="w-3 h-3 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          />
        ) : (
          <img
            src={arrowDown}
            alt="Down Arrow"
            className={`${isOpen ? "" : "transform rotate-[270deg]"}`}
            onClick={() => setIsOpen(!isOpen)}
          />
        )}
      </div>
      {(isOpen && isSeperator) && <Seperator />}
      {/* Accordion Content */}
      {isOpen && <div className="mt-4">{children}</div>}
    </div>
  );
};

export default Accordion;
