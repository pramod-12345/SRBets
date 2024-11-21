import React from "react";
import Typography from "./typography";

const Input = ({ value, setValue, label, isForgot, setModalType }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <Typography
          color={"vintageRibbon"}
          variant={"size14Medium"}
          content={label}
        />
        {isForgot && (
          <div className="cursor-pointer" onClick={() => setModalType("forgotPassword")}>
            <Typography
              color={"chinesePurple"}
              variant={"size14Medium"}
              content={"Forgot password?"}
            />
          </div>
        )}
      </div>
      <input
        className="px-4 outline-none py-5 text-white font-semibold text-sm bg-darkByzantineBlue rounded-xl"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default Input;
