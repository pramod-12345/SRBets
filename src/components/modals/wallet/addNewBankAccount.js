import React from "react";
import Typography from "../components/common/typography";
import { modalIcon } from "../assets/svg/modal";
import Input from "../components/common/input";
import CommonButton from "../components/common/button";

const AddNewBankAccount = () => {
  return (
    <div>
      <div className="flex items-center gap-2">
        <span>
          <img src={modalIcon.arrowLeft} alt="" className="w-7 h-7" />
        </span>
        <Typography
          variant="size20Bold"
          color={"white"}
          content={"Add New Bank Account"}
        />
      </div>
      <div className="flex flex-col gap-6 mt-8">
        <div className="flex gap-6 items-center">
          <Input label={"IFSC code"} placeholder={"Enter IFSC code"} />
          <Input
            label={"Account number"}
            placeholder={"Enter Account number"}
          />
        </div>
        <div className="flex gap-6 items-center">
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
        <div className="w-full  space-y-4 pt-8 text-center">
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
