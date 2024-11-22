import React from "react";
import Typography from "./typography";

const Input = ({
  value,
  setValue,
  label,
  isForgot,
  setModalType,
  placeholder,
  isAmount
}) => {
  return (
    <div className="flex flex-col gap-4 grow">
      <div className="flex items-center justify-between">
        {label && (
          <Typography
            color={"vintageRibbon"}
            variant={"size14Medium"}
            content={label}
          />
        )}
        {isForgot && (
          <div
            className="cursor-pointer"
            onClick={() => setModalType("forgotPassword")}
          >
            <Typography
              color={"chinesePurple"}
              variant={"size14Medium"}
              content={"Forgot password?"}
            />
          </div>
        )}
      </div>
      <div className="flex items-center px-4 py-5 bg-darkByzantineBlue rounded-xl">
        {isAmount && (
          <div className="mr-3">
            <Typography
              content={"₹"}
              color={"white"}
              variant={"size14Semibold"}
            />
          </div>
        )}
        <input
          placeholder={placeholder}
          className="outline-none w-full text-white font-semibold text-sm bg-darkByzantineBlue rounded-xl"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Input;
