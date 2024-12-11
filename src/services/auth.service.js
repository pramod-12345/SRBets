import { LOGIN, REGISTER } from "../constants/auth.api";
import { login } from "../redux/reducers/authSlice";

export const loginFunc = async (makeRequest, payload, closeModal) => {
  makeRequest({
    url: LOGIN,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      clientKey: "QXNoaXNo",
      clientId: "QXNoaXNo",
    },
    data: payload,
    reduxAction: login,
    onSuccessCallback: ()=>{
      closeModal()
    }
  });
};
export const registerFunc = async (makeRequest, payload, closeModal) => {
  makeRequest({
    url: REGISTER,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      clientKey: "QXNoaXNo",
      clientId: "QXNoaXNo",
    },
    data: payload,
    onSuccessCallback:()=>{
      closeModal()
    }
  });
};
