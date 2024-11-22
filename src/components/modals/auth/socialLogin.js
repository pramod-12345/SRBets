import React from "react";
import { loginIcons } from "../../../data";
import Typography from "../../common/typography";

const SocialLogin = ({ setModalType, isLogin }) => {
  return (
    <div>
      <div className="flex justify-center items-center gap-4 mt-4">
        {loginIcons?.map((i) => (
          <div className="bg-darkByzantineBlue rounded-xl p-3.5 cursor-pointer">
            <img src={i?.icon} alt="" className="w-7 h-7" />
          </div>
        ))}
      </div>
      <div className="mt-5 flex items-center justify-center gap-2 text-center">
        <Typography
          color={"white"}
          content={
            !isLogin ? "Already have ac account?" : "Don’t have ac account?"
          }
        />
        <div
          className="cursor-pointer"
          onClick={() => setModalType(!isLogin ? "login" : "register")}
        >
          <Typography
            color={"chinesePurple"}
            content={!isLogin ? "Login here" : "Create New"}
          />
        </div>
      </div>
    </div>
  );
};

export default SocialLogin;
