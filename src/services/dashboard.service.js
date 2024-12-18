
import { CHECK_BALANCE } from "constants/wallet.api";
import { layoutJson } from "../constants/layoutData";
import { setLoader } from "../redux/reducers/authSlice";
import { setLayoutData, setUserBalance } from "../redux/reducers/dashboard";

export const fetchLayout = async (makeRequest, dispatch, ismock = true) => {
  if (ismock) {
    dispatch(setLoader(true));
    setTimeout(() => {
      dispatch(setLoader(false));
    }, 2000);
    dispatch(setLayoutData(layoutJson));
  } else {
    await makeRequest({
      // url: `${FETCH_USER_ADDRESS}/${id}`,
      // reduxAction: cb,
      onSuccessCallback: (res) => {
        if (res?.code === 200) {
          dispatch(setLayoutData(layoutJson));
        }
      },
      isToastVisible: false,
    });
  }
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