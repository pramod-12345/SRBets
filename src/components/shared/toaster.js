// Toast.js
import React, { useEffect, useState } from "react";
import {
  Typography,
  CommonButton
} from "components"
import {
  toasterCheck,
  toasterClose,
  toasterSlip,
  toasterFail
} from "assets"

export const ToastError = ({ message, onClose }) => {
  return (
    <div className="fixed top-5 w-full flex items-start justify-center z-50">
      <div className="relative flex gap-6 items-center max-w-[560px] w-full px-5 py-4 bg-darkByzantineBlue rounded-2xl">
        {/* Icon */}
        <div className="flex items-center justify-center rounded-2xl bg-[#472A2D] p-3 w-14 h-14 min-w-14">
          <img src={toasterFail} alt="Toast Fail" className="w-8 h-8" />
        </div>

        {/* Message */}
        <div className="text-white">
          <div className="flex items-center gap-2">
            <Typography
              variant={"size16Bold"}
              content={"Failure"}
              color={"white"}
            />
            {/* <img src={success} className="w-4 h-4" /> */}
          </div>
          <p className="mt-1 text-sm font-medium text-vintageRibbon mt-0">
            {message}
          </p>
        </div>

        {/* Close Button */}
        <div className="absolute top-2.5 right-2.5">
          <CommonButton
            label={<img src={toasterClose} alt="Toast Close" className="w-6 h-6" />}
            type="toasterClose"
          />
        </div>
      </div>
    </div>
  );
};

export const ToastSuccess = ({ message, onClose, duration = 5000 }) => {
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev <= 0) {
          clearInterval(interval);
          onClose(); // Automatically close the toast
          return 0;
        }
        return prev - 1;
      });
    }, duration / 100); // Decrease progress every duration / 100 ms

    return () => clearInterval(interval); // Cleanup on unmount
  }, [duration, onClose]);

  return (
    <div className="fixed top-5 w-full flex items-start justify-center z-50">
      <div className="relative flex gap-6 items-center max-w-[560px] w-full px-5 py-4 bg-darkByzantineBlue rounded-2xl">
        {/* Progress Background */}
        <div
          className="absolute top-0 left-0 h-full w-full bg-red rounded-2xl"
          style={{
            width: `${progress}%`,
            transition: "width 0.9s linear",
            zIndex: 2, // Ensure it's behind the content
            backgroundColor:'rgba(43, 46, 69, .5)'
          }}
        ></div>

        {/* Icon */}
        <div className="flex items-center justify-center rounded-2xl bg-[#472A2D] p-3 w-14 h-14 min-w-14 z-10">
          <img src={toasterSlip} alt="Toast Slip" className="w-8 h-8" />
        </div>

        {/* Message */}
        <div className="text-white z-10">
          <div className="flex items-center gap-2">
            <Typography
              variant={"size16Bold"}
              content={"Bet placed"}
              color={"white"}
            />
            <img src={toasterCheck} alt="Toast Success" className="w-4 h-4" />
          </div>
          <p className="mt-1 text-sm font-medium text-vintageRibbon mt-0">
            {message}
          </p>
        </div>

        {/* Close Button */}
        <div className="absolute top-2.5 right-2.5 z-10">
          <CommonButton
            label={<img src={toasterClose} alt="Toast Close" className="w-6 h-6" />}
            type="toasterClose"
            onClick={onClose} // Manually close on button click
          />
        </div>
      </div>
    </div>
  );
};
