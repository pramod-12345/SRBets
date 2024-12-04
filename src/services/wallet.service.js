import { CREDIT_WALLET, DEBIT_WALLET } from "../constants/wallet.api";

export const walletCredit = async (makeRequest, payload) => {
    makeRequest({
        url: CREDIT_WALLET,
        method: "POST",
        data: payload
      })
  };
export const walletDebit = async (makeRequest, payload) => {
    makeRequest({
        url: DEBIT_WALLET,
        method: "POST",
        data: payload
      })
  };