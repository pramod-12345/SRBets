import React from "react";
import {
  Modal,
  Typography,
  Tabs,
  Input,
  CommonButton,
  Seperator,
  CryptoDropdown,
  ModalDropdown,
} from "components";
import { btcIcon, backIcon } from "assets";
import { setModalType, toggleModal } from "../../../redux/reducers/authSlice";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { walletDebit } from "services";
import useAxios from "../../../hooks/useAxios";

const Withdraw = () => {
  const dispatch = useDispatch();
  const { makeRequest } = useAxios();

  const closeModal = () => {
    dispatch(toggleModal(false));
  };
  const tabs = [
    { id: "crypto", label: "Crypto" },
    { id: "local-currency", label: "Local Currency" },
  ];

  const cryptoFormik = useFormik({
    initialValues: {
      amount: "",
      address: "",
    },
    validationSchema: Yup.object().shape({
      amount: Yup.number()
        .required("Amount is required")
        .min(0.00072641, "Minimum withdrawal is 0.00072641"),
      address: Yup.string().required("Withdrawal address is required"),
    }),
    onSubmit: (values) => {
      const payload = {
        userId: 2,
        currency: "INR",
        order: {
          type: "shopping",
          id: "order12345",
          details: {
            id: "item123",
            description: "Payment for shopping",
          },
          timestamp: "2024-11-03T12:00:00Z",
          description: "Payment for order #12345",
        },
        transaction: {
          id: "txn12345",
          referenceId: "Zzad12212",
          amount: 100.5,
        },
      };
      walletDebit(makeRequest, payload);
    },
  });
  const localCurrencyFormik = useFormik({
    initialValues: {
      bankAccount: "",
      amount: "",
    },
    validationSchema: Yup.object().shape({
      bankAccount: Yup.string().required("Please Enter a bank account"),
      amount: Yup.number()
        .required("Amount is required")
        .min(1, "Minimum withdrawal is 1 INR"),
    }),
    onSubmit: (values) => {
      const payload = {
        userId: 2,
        currency: "INR",
        transaction: {
          id: "txn12345",
          referenceId: "Zzad12212",
          amount: 100,
        },
        order: {
          type: "shopping",
          id: "order12345",
          timestamp: "2024-11-03T12:00:00Z",
          description: "Payment for shopping",
          details: {
            id: "orderdetails123",
            description: "Payment for order #12345",
          },
        },
      };
      walletDebit(makeRequest, payload);
    },
  });

  const banks = [
    { id: "hdfc", label: "HDFC" },
    { id: "icici", label: "ICICI" },
  ];

  const cryptos = [
    { icon: "btc", label: "BTC" },
    { icon: "eth", label: "ETH" },
  ];

  const handleCryptoSelect = (crypto) => {
    console.log("Selected cryptocurrency:", crypto);
  };

  const handleSelect = (item) => {
    console.log("Selected Option:", item.label);
  };

  return (
    <Modal onClose={closeModal}>
      <div className="md:hidden bg-blackRussian">
        <div className="flex items-center px-4 gap-2 py-5">
          <img
            src={backIcon}
            alt="Back"
            onClick={() => dispatch(setModalType("wallet"))}
            className="cursor-pointer"
          />
          <Typography
            variant="size20Bold"
            color={"white"}
            content={"Withdraw"}
          />
        </div>
        <Seperator />
      </div>
      <div className="hidden md:block">
        <Typography
          color={"white"}
          variant={"size20Bold"}
          content={"Withdraw"}
        />
      </div>
      <div className="mt-5 p-4">
        <Tabs tabs={tabs}>
          <div id="crypto">
            <form onSubmit={cryptoFormik.handleSubmit}>
              <div className="mt-6">
                <div className="mt-6">
                  <CryptoDropdown
                    options={cryptos}
                    onSelect={handleCryptoSelect}
                  />
                </div>
              </div>
              <div className="mt-6">
                <Input
                  name="amount"
                  value={cryptoFormik.values.amount}
                  onChange={cryptoFormik.handleChange}
                  onBlur={cryptoFormik.handleBlur}
                  label="Amount to withdraw"
                  placeholder="Amount to withdraw"
                  error={cryptoFormik.errors.amount}
                  touched={cryptoFormik.touched.amount}
                />
              </div>
              <div className="lg:mt-6 mt-4">
                <Input
                  name="address"
                  value={cryptoFormik.values.address}
                  onChange={cryptoFormik.handleChange}
                  onBlur={cryptoFormik.handleBlur}
                  label="Withdraw to"
                  placeholder="Enter withdrawal address"
                  error={cryptoFormik.errors.address}
                  touched={cryptoFormik.touched.address}
                />
              </div>
              <div className="mt-3">
                <Typography
                  color={"vintageRibbon"}
                  content={
                    "Minimum withdrawal is 0.00072641. Your withdrawal will have 0.00067447 subtracted from your remaining balance to cover the fee required to process the transaction."
                  }
                  variant={"size12Normal"}
                />
              </div>
              <div className="lg:mt-10 mt-9">
                <CommonButton
                  btnType={"submit"}
                  type="viewBetsBtn"
                  label={"Withdraw"}
                />
              </div>
            </form>
          </div>
          <div id="local-currency">
            <form onSubmit={localCurrencyFormik.handleSubmit}>
              <div className="mt-6">
                <div class="flex items-center justify-between space-x-3 bg-darkByzantineBlue px-4 py-3.5 rounded-xl mt-6">
                  <div className="flex items-center gap-3">
                    <img src={btcIcon} alt="BTC" className="w-7 h-7" />
                    <div className="flex flex-col justify-center">
                      <Typography
                        variant={"size12Semibold"}
                        color={"white"}
                        content={"INR"}
                      />
                      <Typography
                        variant={"size12Normal"}
                        color={"vintageRibbon"}
                        content={"Indian Rupee"}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-end">
                    <Typography
                      variant={"size12Semibold"}
                      color={"white"}
                      content={"106.56"}
                    />
                    <Typography
                      variant={"size12Normal"}
                      color={"vintageRibbon"}
                      content={"$12"}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-6 space-y-3">
                {/* <Input
                  name="bankAccount"
                  value={localCurrencyFormik.values.bankAccount}
                  onChange={localCurrencyFormik.handleChange}
                  onBlur={localCurrencyFormik.handleBlur}
                  label="Select Bank Acccount"
                  placeholder="Enter Bank Acccount"
                  error={localCurrencyFormik.errors.bankAccount}
                  touched={localCurrencyFormik.touched.bankAccount}
                /> */}
                <div className=" flex items-center justify-between">
                <Typography
                  variant={"size14Medium"}
                  color={"vintageRibbon"}
                  content={"Select Bank Acccount"}
                />
                <div
                  className="cursor-pointer"
                  onClick={() => dispatch(setModalType("addBank"))}
                >
                  <Typography
                    color={"primary"}
                    variant={"size14Medium"}
                    content={"Add Bank"}
                  />
                </div>
                </div>
                <ModalDropdown
                  items={banks}
                  onSelect={handleSelect}
                  placeholder="Select bank"
                  // initialSelected={""}
                />
              </div>
              <div className="mt-6">
                <Input
                  name="amount"
                  value={localCurrencyFormik.values.amount}
                  onChange={localCurrencyFormik.handleChange}
                  onBlur={localCurrencyFormik.handleBlur}
                  label="Enter Amount to Withdraw"
                  placeholder="Amount to withdraw"
                  error={localCurrencyFormik.errors.amount}
                  touched={localCurrencyFormik.touched.amount}
                />
              </div>
              <div className="mt-3">
                <Typography
                  color={"vintageRibbon"}
                  content={
                    "For INR withdrawals, you must use a bank account in your personal name. Attempting to withdraw through another bank account not in your name can lead to INR withdrawals being revoked."
                  }
                  variant={"size12Normal"}
                />
              </div>
              <div className="mt-10">
                <CommonButton
                  btnType={"submit"}
                  type="viewBetsBtn"
                  label={"Withdraw"}
                />
              </div>
            </form>
          </div>
        </Tabs>
      </div>
    </Modal>
  );
};

export default Withdraw;
