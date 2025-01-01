
import { CHECK_BALANCE, GAME_ENTRY, LAYOUT } from "constants/wallet.api";
import { setLayoutData, setUserBalance } from "../redux/reducers/dashboard";

export const fetchLayout = async (makeRequest, param) => {
 
    makeRequest({
      url: `${LAYOUT}?page-id=${param}`,
      headers: {
        "Content-Type": "application/json",
        clientKey: "QXNoaXNo",
        clientId: "QXNoaXNo",
      },
      reduxAction: setLayoutData,
      isToastVisible: false,
    });
  
};

export const checkBalance = async (makeRequest, payload, dispatch) => {
  makeRequest({
      url: CHECK_BALANCE,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        clientKey: "QXNoaXNo",
        clientId: "QXNoaXNo",
      },
      data: payload,
      reduxAction: setUserBalance,
    })
};
export const gameEntry = async (makeRequest, payload, setIframeUrl) => {
  
  makeRequest({
      url: GAME_ENTRY,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        clientKey: "QXNoaXNo",
        clientId: "QXNoaXNo",
      },
      data: payload,
      onSuccessCallback: (res)=> {
        // console.log('res>>>>>>>>>>>',res?.body?.entry);
        setIframeUrl(res?.body?.entry)
      },
    })
};