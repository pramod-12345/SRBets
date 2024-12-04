import React from "react";
import { Typography, Input, CommonButton, Seperator } from "components";
import { backIcon } from "assets";
import { setModalType } from "../../../redux/reducers/authSlice";
import { useDispatch } from "react-redux";

const AddNewBankAccount = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <div className="md:hidden bg-blackRussian">
        <div className="flex items-center px-4 gap-2 py-5">
          <img src={backIcon} alt="Back" />
          <Typography
            variant="size20Bold"
            color={"white"}
            content={"Add new bank account"}
          />
        </div>
        <Seperator />
      </div>
      <div className="hidden md:flex items-center gap-3 ">
        <div
          className="cursor-pointer"
          onClick={() => dispatch(setModalType("withdraw"))}
        >
          <img src={backIcon} alt="Back" />
        </div>
        <Typography
          color={"white"}
          variant={"size20Bold"}
          content={"Add new bank account"}
        />
      </div>
      <div className="flex flex-col gap-6 mt-8 px-4 md:px-0">
        <div className="flex gap-6 items-center flex-wrap">
          <Input label={"IFSC code"} placeholder={"Enter IFSC code"} />
          <Input
            label={"Account number"}
            placeholder={"Enter Account number"}
          />
        </div>
        <div className="flex gap-6 items-center flex-wrap">
          <Input label={"Bank name"} placeholder={"Enter Bank name"} />
          <Input
            label={"Branch address"}
            placeholder={"Enter Branch address"}
          />
        </div>
        <Input
          label={"Bank branch name"}
          placeholder={"Enter Bank branch name"}
        />
        <div className="w-full  space-y-4 pt-8 text-center md:static  bottom-7 w-full left-0 md:px-0">
          <Typography
            color={"vintageRibbon"}
            variant={"size12Normal"}
            content={"Disclaimer text here"}
          />
          <CommonButton type="viewBetsBtn" label={"Add new bank account"} />
        </div>
      </div>
    </div>
  );
};

export default AddNewBankAccount;
