import { LOGIN, REGISTER } from "../constants/auth.api";
import { login } from "../redux/reducers/authSlice";

export const loginFunc = async (makeRequest, payload) => {
    makeRequest({
        url : LOGIN,
        method: "POST",
        data: payload,
        reduxAction : login,
      })
  };
export const registerFunc = async (makeRequest, payload) => {
    makeRequest({
        url: REGISTER,
        method: "POST",
        data: payload
      })
  };