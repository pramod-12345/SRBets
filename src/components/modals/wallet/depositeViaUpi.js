import React, { useState } from "react";
import {
  Tabs,
  Typography,
  RadioButton,
  Input,
  CommonButton,
  Modal,
  Seperator,
  ModalDetailItem,
  ModalDropdown,
  PaymentStatus,
  PaymentApproved,
} from "components";
import { modalIcon, socialIcons } from "../../../assets/svg/modal";
import { backIcon, mbDepositSocialImg } from "assets";
import { setModalType } from "../../../redux/reducers/authSlice";
import { useDispatch } from "react-redux";

const DepositeViaUpi = () => {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState("");
  const [step, setStep] = useState(0);
  const [upiId, setUpiId] = useState("");
  const [selected, setSelected] = useState("UPI");
  const banks = [
    { id: "hdfc", label: "HDFC" },
    { id: "icici", label: "ICICI" },
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

  const handleSelect = (item) => {
    console.log("Selected Option:", item.label);
  };

  return (
    // <Modal>
    //   <div className="md:hidden bg-blackRussian">
    //     <div className="flex items-center px-4 gap-2 py-5">
    //       <img src={backIcon} alt="Back" />
    //       <Typography
    //         color={"white"}
    //         variant={"size20Bold"}
    //         content={"Deposit Money"}
    //       />
    //     </div>
    //     <Seperator />
    //   </div>
    //   <div className="hidden md:block">
    //     <Typography
    //       color={"white"}
    //       variant={"size20Bold"}
    //       content={"Deposit money"}
    //     />
    //   </div>
    //   <div className="mt-5 p-4 pt-0 md:p-0">
    //     <Tabs tabs={tabs}>
    <div className="mt-9">
      {step === 0 && (
        <div className="flex flex-col justify-between">
          <div>
            <div className="flex space-x-16 ">
              <RadioButton
                label="UPI"
                selected={selected === "UPI"}
                onChange={() => setSelected("UPI")}
              />
              <RadioButton
                label="Netbanking"
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
              <div className="flex flex-wrap gap-3 gap items-center justify-between mt-3">
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
              {selected === "UPI" ? (
                <Input
                  setValue={setUpiId}
                  value={upiId}
                  placeholder={"Enter UPI ID"}
                />
              ) : (
                <ModalDropdown
                  items={banks}
                  onSelect={handleSelect}
                  placeholder="Select bank"
                  // initialSelected={""}
                />
              )}
            </div>
            <div className="w-full flex justify-center items-center lg:pt-7 pt-9 flex-col gap-6">
              <CommonButton
                type="viewBetsBtn"
                label={
                  amount
                    ? `${
                        selected === "UPI" ? "Pay" : "Proceed to deposit"
                      } ₹ ${amount}`
                    : `${selected === "UPI" ? "Pay" : "Proceed to deposit"}`
                }
                onClick={() =>
                  selected === "UPI"
                    ? setStep(1)
                    : dispatch(setModalType("paymentApproved"))
                }
              />
            </div>
          </div>
          <div className="md:static absolute bottom-7 w-full left-0">
            <div className="w-full mt-6 text-center">
              <Typography
                content={`We support all UPI handles`}
                color={"vintageRibbon"}
                variant={"size14Normal"}
              />
            </div>
            <div className="mt-4 hidden md:flex items-center gap-3">
              {paymentMethodType?.map((i) => (
                <img
                  src={i?.icon}
                  alt=""
                  className="mix-blend-luminosity object-contain"
                />
              ))}
            </div>
            <div className="mt-4 flex md:hidden items-center justify-center gap-3">
              <img
                src={mbDepositSocialImg}
                alt=""
                className="mix-blend-luminosity object-contain"
              />
            </div>
          </div>
        </div>
      )}
      {step === 1 && (
        <div className="">
          <div className="flex items-center justify-center flex-col">
            <Typography
              color={"white"}
              variant={"size16Semibold"}
              content={"Confirm payment"}
            />
            <div className="w-[7.5rem] h-[7.5rem] mt-6 bg-darkByzantineBlue rounded-[20px] flex items-center justify-center">
              <img
                src={modalIcon.confirmPaymentIcon}
                alt="Payment Confirm"
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
          <div className="md:static absolute bottom-7 w-full left-0 px-4 md:px-0">
            <div className="mt-10">
              <Typography
                variant={"size12Medium"}
                color={"vintageRibbon"}
                content={"Order summary"}
              />
              <div className="flex flex-col gap-3 mt-4">
                <ModalDetailItem label={"UPI ID"} value={"9810098100@ptaxis"} />
                <ModalDetailItem label={"Amount"} value={"₹2,000"} />
                <ModalDetailItem label={"Order ID"} value={"#35576845434342"} />
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
          <CommonButton
            type="viewBetsBtn"
            label={"Continue"}
            onClick={() => dispatch(setModalType("paymentStatus"))}
          />
          </div>
        </div>
      )}
      {/* {step == 2 && (<PaymentApproved/>)} */}
    </div>
    //     </Tabs>
    //   </div>
    // </Modal>
  );
};

export default DepositeViaUpi;
