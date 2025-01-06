import React from "react";
import {
  Typography,
  Seperator,
  CommonButton
} from "components"
import {
  eyeIcon,
  rupees,
  ripple,
  closeIcon
} from "assets"
import { useDispatch, useSelector } from "react-redux";
import { setModalType ,toggleModal } from "../../../redux/reducers/authSlice";

const WalletModal = ({ onClose }) => {
  const dispatch = useDispatch();
  const { userBalance } = useSelector((state) => state?.dashboard);

  const closeModal = () => {
    dispatch(toggleModal(false));
  };

  return (
    <div className="flex flex-col justify-between">
      <div>
        <div className="md:hidden p-0 py-5 px-4 bg-blackRussian">
          <div className="flex items-center gap-5 md:mb-4">
            <button onClick={closeModal}>
              <img src={closeIcon} alt="Close" />
            </button>
            <Typography
              color={"white"}
              variant={"size20Bold"}
              content={"Wallet"}
            />
          </div>
          <Seperator hidden="hidden md:block" />
        </div>
        <div className="hidden md:block">
          <Typography
            color={"white"}
            variant={"size20Bold"}
            content={"Wallet"}
          />
        </div>
        <div className="md:mt-5 md:max-w-[552px] w-full h-[296px] md:rounded-lg md:border md:border-ebonyClay">
          <div className="flex flex-col gap-1.5 bg-ebonyClay md:rounded-t-lg p-4 md:p-6">
            <div className="flex items-center gap-2">
              <Typography
                variant={"size14Semibold"}
                color={"vintageRibbon"}
                content={"Estimate Balance"}
              />
              <img src={eyeIcon} alt="Eye" />
            </div>

            <div className="flex items-center justify-between">
              <h3 className="text-[32px] font-bold text-white">${userBalance?.body?.balance ?? 0}</h3>
              <div className="hidden md:flex gap-3">
                <button 
                onClick={()=> dispatch(setModalType("withdraw"))}
                className="w-[122px] text-[14px] leading-4 font-semibold bg-vintageRibbon text-white rounded-lg">
                  Withdraw
                </button>
                <button
                onClick={()=> dispatch(setModalType("deposit"))}
                 className="w-[122px] text-[14px] leading-4 font-semibold bg-primary text-white py-3 rounded-lg">
                  + Add Money
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-between text-[12px] leading-3 font-medium text-vintageRibbon px-4 md:px-6 mt-5">
            <span>YOUR CURRENCIES</span>
            <span>VALUES</span>
          </div>

          <div className="space-y-4 mt-6 px-4 md:px-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img src={rupees} alt="Rupees" />
                <div>
                  <div className="text-[14px] text-white leading-4 font-semibold">INR</div>
                  <div className="text-[12px] text-vintageRibbon mt-0.5">
                    Indian rupee
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-[14px] text-white leading-4 font-semibold">61.90</div>
                <div className="text-[12px] text-vintageRibbon mt-0.5">
                  $0.86
                </div>
              </div>
            </div>
            <Seperator color="blackRussian" />

            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center gap-3">
                <img src={ripple} alt="Ripple" />
                <div>
                  <div className="text-[14px] text-white leading-4 font-semibold">XRP</div>
                  <div className="text-[12px] text-vintageRibbon mt-0.5">
                    Ripple
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-[14px] text-white leading-4 font-semibold">
                  0.00045
                </div>
                <div className="text-[12px] text-vintageRibbon mt-0.5">
                  $0.01
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
       className="flex md:hidden gap-3.5 flex-col px-4 pb-5 md:static bottom-7 w-full left-0">
         <CommonButton type="viewBetsBtn" label={"+ Add Money"} onClick={()=> dispatch(setModalType("deposit"))} />
        <CommonButton
          type="viewBetsBtn"
          label={"Withdraw"}
          bgColor="bg-vintageRibbon"
          onClick={()=> dispatch(setModalType("withdraw"))}
        />
      </div>
    </div>
  );
};

export default WalletModal;
