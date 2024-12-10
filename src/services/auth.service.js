import { LOGIN, REGISTER } from "../constants/auth.api";
import { login } from "../redux/reducers/authSlice";

export const loginFunc = async (makeRequest, payload) => {
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
  });
};
export const registerFunc = async (makeRequest, payload) => {
  makeRequest({
    url: REGISTER,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      clientKey: "QXNoaXNo",
      clientId: "QXNoaXNo",
    },
    data: payload,
  });
};
