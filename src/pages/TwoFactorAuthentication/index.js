import React, { useState } from "react";
import qrImg from "../../assets/svg/qr.svg";
import Typography from "../../components/common/typography";
import Input from "../../components/common/input";
import CommonButton from "../../components/common/button";

const TwoFactorAuthentication = () => {
  const [email, setEmail] = useState("");
  return (
    <div>
      <Typography
        color={"white"}
        variant={"size20Bold"}
        content={"Two factor authentication"}
      />
      <div className="pt-1.5">
        <Typography
          color={"vintageRibbon"}
          variant={"size14Normal"}
          content={
            "To keep your account extra secure leave a two factor authentication enabled"
          }
        />
      </div>
      <div className="pt-8 flex flex-col gap-6">
        <Input
          setValue={setEmail}
          value={email}
          label={"Copy this code to your authentication app"}
        />
        <div className="p-6 flex flex-col gap-4 bg-darkByzantineBlue rounded-xl justify-center items-center">
          <img src={qrImg} alt="" className="w-[120px] h-[120px]" />
          <Typography
            color={"vintageRibbon"}
            variant={"size14Medium"}
            content={"Send only BTC to this address, 1 confirmation required"}
          />
        </div>

        <Input setValue={setEmail} value={email} label={"Password *"} />
        <Input setValue={setEmail} value={email} label={"2FA code *"} />

        <div className="w-full flex justify-center items-center">
          <CommonButton type="viewBetsBtn" label={"Submit"} />
        </div>
      </div>
    </div>
  );
};

export default TwoFactorAuthentication;
