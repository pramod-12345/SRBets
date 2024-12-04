import React, { useState } from "react";
import {
  Typography,
  Input,
  CommonButton,
  Seperator
} from "components"
import { qrCode , backIcon, reload, copy } from "assets";

const TwoFactorAuthentication = () => {
  const [email, setEmail] = useState("");
  return (
    <div>
      <div className="md:hidden bg-blackRussian">
        <div className="flex items-center px-4 gap-2 py-5">
          <img src={backIcon} alt="Back" />
          <Typography
            variant="size20Bold"
            color={"white"}
            content={"Two factor authentication"}
          />
        </div>
        <Seperator />
      </div>
      <div className="px-4 md:px-0">
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
        {/* <Input
          setValue={setEmail}
          value={email}
          label={"Copy this code to your authentication app"}
        /> */}
        <div className="">
            <Typography
              variant={"size12Normal"}
              color={"vintageRibbon"}
              content={"Copy this code to your authentication app"}
            />
            <div class="bg-darkByzantineBlue px-4 py-5 rounded-xl flex items-center justify-between mt-3">
              <span class="truncate text-white">
                vcbd34245243sfdETGBV46457557755ddghfhfhf
              </span>
              <div class="flex gap-x-7 min-w-14">
                <button class="text-vintageRibbon">
                  <img src={reload} alt="Reload" />
                </button>
                <button class="text-vintageRibbon">
                  <img src={copy} alt="Copy" />
                </button>
              </div>
            </div>
          </div>
        <div className="p-6 flex flex-col gap-4 bg-darkByzantineBlue rounded-xl justify-center items-center text-center">
          <img src={qrCode} alt="" className="w-[120px] h-[120px]" />
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
    </div>
  );
};

export default TwoFactorAuthentication;
