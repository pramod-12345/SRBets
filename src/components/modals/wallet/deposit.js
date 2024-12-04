import React, { useState } from "react";
import {
  Typography,
  Tabs,
  Seperator,
  CryptoDropdown,
  DepositeViaUpi,
  ModalDropdown,
} from "components";
import { useDispatch } from "react-redux";
import { setModalType } from "../../../redux/reducers/authSlice";
import { reload, qrCode, backIcon, copy } from "assets";

const Deposit = () => {
  const dispatch = useDispatch();
  const [selected, setSelected]= useState('')
  const tabs = [
    { id: "crypto", label: "Crypto" },
    { id: "local-currency", label: "Local Currency" },
  ];

  const cryptos = [
    { icon: "btc", label: "BTC" },
    { icon: "eth", label: "ETH" },
  ];

  const handleSelect = (item) => {
    console.log("Selected Number Option:", item.label);
  };

  const handleCryptoSelect = (crypto) => {
    console.log("Selected cryptocurrency:", crypto);
    setSelected(crypto?.label)
  };

  return (
    <div className="">
      <div className="md:hidden bg-blackRussian">
        <div className="flex items-center px-4 gap-2 py-5">
          <img
            src={backIcon}
            alt="Back"
            onClick={() => dispatch(setModalType("wallet"))}
            className="cursor-pointer"
          />
          <Typography
            color={"white"}
            variant={"size20Bold"}
            content={"Deposit Money"}
          />
        </div>
        <Seperator />
      </div>
      <div className="p-4 pt-0 md:p-0">
        <div className="hidden md:block">
          <Typography
            color={"white"}
            variant={"size20Bold"}
            content={"Deposit Money"}
          />
        </div>
        <div className="mt-5">
          <Tabs tabs={tabs}>
            <div class="" id="crypto">
              <div className="mt-6">
                <CryptoDropdown
                  options={cryptos}
                  onSelect={handleCryptoSelect}
                />
              </div>
              {selected === 'ETH' && <div className="mt-6 space-y-3">
                <Typography
                  variant={"size12Normal"}
                  color={"vintageRibbon"}
                  content={"Network"}
                />
                {/* <Input value={"ETH"} /> */}
                <ModalDropdown
                  items={cryptos}
                  onSelect={handleSelect}
                  placeholder="Select any network"
                  initialSelected={'ETH'}
                />
              </div>}
              <div className="mt-6">
                <Typography
                  variant={"size12Normal"}
                  color={"vintageRibbon"}
                  content={`Your ${selected === 'ETH' ? 'ETH' : 'Bitcoin'} deposit address`}
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
              <div className="p-6 mt-4 flex flex-col gap-4 text-center bg-darkByzantineBlue rounded-xl justify-center items-center">
                <img
                  src={qrCode}
                  alt="QR Code"
                  className="w-[120px] h-[120px]"
                />
                <Typography
                  color={"vintageRibbon"}
                  variant={"size14Medium"}
                  content={
                    `Send only ${selected === 'ETH' ? 'ETH' : 'BTC'} to this address, ${selected === 'ETH' ? '2' : '1'} confirmation required`
                  }
                />
              </div>
            </div>
            <div id="local-currency">
              <DepositeViaUpi />
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Deposit;
