import React, { useState } from "react";
import Tabs from "../../common/tab";
import Typography from "../../common/typography";
import RadioButton from "../../common/radio";
import Input from "../../common/input";
import CommonButton from "../../common/button";
import { modalIcon, socialIcons } from "../../../assets/svg/modal";
import ModalDetailItem from "../../common/modalDetailItem";

const DepositeViaUpi = () => {
  const [amount, setAmount] = useState("");
  const [step, setStep] = useState(0);
  const [upiId, setUpiId] = useState("");
  const [selected, setSelected] = useState("");
  const tabs = [
    { id: "crypto", label: "Crypto" },
    { id: "localCurrency", label: "Local Currency" },
  ];
  const amounts = [500, 1000, 2000, 5000];
  const paymentMethodType = [
    { icon: socialIcons.whatsapp },
    { icon: socialIcons?.gpay },
    { icon: socialIcons.phonepay },
    { icon: socialIcons.paytm },
    { icon: socialIcons.mobiwiki },
    { icon: socialIcons.amazonpay },
    { icon: socialIcons.freecharge },
  ];
  return (
    <div>
      <Typography
        color={"white"}
        variant={"size20Bold"}
        content={"Deposit money"}
      />
      <div className="mt-5">
        <Tabs tabs={tabs}>
          <div className="mt-9" id="localCurrency">
            {step === 0 && (
              <div>
                <div className="flex space-x-16 ">
                  <RadioButton
                    label="UPI"
                    selected={selected === "UPI"}
                    onChange={() => setSelected("UPI")}
                  />
                  <RadioButton
                    label="Net Banking"
                    selected={selected === "Netbanking"}
                    onChange={() => setSelected("Netbanking")}
                  />
                </div>
                <div className="pt-6 w-full">
                  <Input
                    setValue={setAmount}
                    isAmount={true}
                    value={amount}
                    placeholder={"Enter amount"}
                  />
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex space-x-3 items-center">
                      {amounts.map((item) => (
                        <div
                          key={item}
                          onClick={() => setAmount(item)}
                          className={`px-4 py-2 rounded-lg border text-sm cursor-pointer border-vintageRibbon`}
                        >
                          <Typography
                            content={`₹${item.toLocaleString()}`}
                            color={"vintageRibbon"}
                            variant={"size14Semibold"}
                          />
                        </div>
                      ))}
                    </div>
                    <Typography
                      content={`Min. ₹500 and Max. ₹49,999`}
                      color={"vintageRibbon"}
                      variant={"size12Normal"}
                    />
                  </div>
                </div>
                <div className="pt-8 w-full">
                  <Input
                    setValue={setUpiId}
                    value={upiId}
                    placeholder={"Enter UPI ID"}
                  />
                </div>
                <div className="w-full flex justify-center items-center pt-7 flex-col gap-6">
                  <CommonButton
                    type="viewBetsBtn"
                    label={amount ? `Pay ₹ ${amount}` : "Pay"}
                    onClick={()=>setStep(1)}
                  />
                  <Typography
                    content={`We support all UPI handles`}
                    color={"vintageRibbon"}
                    variant={"size14Normal"}
                  />
                </div>
                <div className="mt-4 flex items-center gap-3">
                  {paymentMethodType?.map((i) => (
                    <img src={i?.icon} alt="" className=" object-contain" />
                  ))}
                </div>
              </div>
            )}
            {step === 1 && (
              <div>
                <div className="flex items-center justify-center flex-col">
                  <Typography
                    color={"white"}
                    variant={"size16Semibold"}
                    content={"Confirm payment"}
                  />
                  <div className="w-[7.5rem] h-[7.5rem] mt-6 bg-darkByzantineBlue rounded-[20px] flex items-center justify-center">
                    <img
                      src={modalIcon.confirmPaymentIcon}
                      className="max-h-[70px] mr-[-15px]"
                    />
                  </div>
                  <div className="bg-patriotBlue rounded-full p-3.5 mt-[-10px]">
                    <Typography
                      color={"white"}
                      variant={"size16Semibold"}
                      content={"Session expiry: 14M : 34S"}
                    />
                  </div>
                </div>
                <div className="mt-10">
                  <Typography
                    variant={"size12Medium"}
                    color={"vintageRibbon"}
                    content={"Order summary"}
                  />
                  <div className="flex flex-col gap-3 mt-4">
                    <ModalDetailItem
                      label={"UPI ID"}
                      value={"9810098100@ptaxis"}
                    />
                    <ModalDetailItem label={"Amount"} value={"₹2,000"} />
                    <ModalDetailItem
                      label={"Order ID"}
                      value={"#35576845434342"}
                    />
                  </div>
                </div>
                <div className="bg-coffee rounded-lg py-3 px-4 mt-5">
                  <Typography
                    color={"pecanVeneer"}
                    variant={"size14Medium"}
                    content={
                      "Do not refresh this page while you are complteinng the payment"
                    }
                  />
                </div>
              </div>
            )}
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default DepositeViaUpi;
