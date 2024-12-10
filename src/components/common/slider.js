import React, { useEffect, useRef, useState } from "react";
import CommonButton from "./button";
import { rightArrow , leftArrow, sliderLeftArrow, rightDisabled } from "assets";
import SectionHeader from "./headerSection";

const Slider = ({ children, title }) => {
  const scrollContainerRef = useRef(null);
  const [isLeftDisabled, setIsLeftDisabled] = useState(true);
  const [isRightDisabled, setIsRightDisabled] = useState(false);

  const updateButtonStates = () => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainer;

      // Disable the left button if at the start
      setIsLeftDisabled(scrollLeft <= 0);

      // Disable the right button if at the end
      setIsRightDisabled(scrollLeft + clientWidth >= scrollWidth);
    }
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -200, // Adjust based on card width and gap
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 200, // Adjust based on card width and gap
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    updateButtonStates(); // Initial check
    const scrollContainer = scrollContainerRef.current;

    if (scrollContainer) {
      // Update button states on scroll
      scrollContainer.addEventListener("scroll", updateButtonStates);

      return () => {
        scrollContainer.removeEventListener("scroll", updateButtonStates);
      };
    }
  }, []);

  return (
    <div>
      <div className=" flex items-center justify-between">
        <SectionHeader title={title} />
        <div className="hidden md:flex items-center gap-3">
          <CommonButton
            icon={isLeftDisabled ? leftArrow : sliderLeftArrow}
            type="iconBtn"
            disabled={isLeftDisabled}
            onClick={scrollLeft}
          />
          <CommonButton
            icon={isRightDisabled ? rightDisabled : rightArrow}
            type="iconBtn"
            disabled={isRightDisabled}
            onClick={scrollRight}
          />
        </div>
      </div>
      <div
        className="flex item-center justify-start sm:pt-5 pt-4 gap-4 overflow-x-auto no-scrollbar"
        style={{ whiteSpace: "nowrap" }}
        ref={scrollContainerRef}
      >
        {children}
      </div>
    </div>
  );
};

export default Slider;
