import React, { useState } from "react";
import Typography from "../../components/common/typography";
import CommonButton from "../../components/common/button";
import Input from "../../components/common/input";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  return (
    <div>
      <Typography
        color={"white"}
        variant={"size20Bold"}
        content={"Login to SR bets"}
      />
      <div className="pt-8">
        <Input setValue={setEmail} value={email} label={"Email *"} />
      </div>
      <div className="w-full flex justify-center items-center pt-8">
        <CommonButton type="viewBetsBtn" label={"Recover account"} />
      </div>
    </div>
  );
};

export default ForgotPassword;
