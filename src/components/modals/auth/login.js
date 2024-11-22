import React, { useState } from "react";
import Typography from "../../common/typography";
import Input from "../../common/input";
import CommonButton from "../../common/button";
import { loginIcons } from "../../../data";
import SocialLogin from "./socialLogin";

const Login = ({ setModalType }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <Typography
        color={"white"}
        variant={"size20Bold"}
        content={"Login to SR bets"}
      />
      <div className="pt-8">
        <Input
          setValue={setUserName}
          value={userName}
          label={"Email/Username *"}
          placeholder={'Enter email/username'}
        />
      </div>
      <div className="pt-6">
        <Input
          setValue={setPassword}
          value={password}
          label={"Password *"}
          isForgot={true}
          setModalType={setModalType}
          placeholder={'Enter password'}
        />
      </div>
      <div className="w-full flex justify-center items-center mt-9">
        <CommonButton type="viewBetsBtn" label={"Login"} />
      </div>
      <div className="text-center mt-8">
        <Typography
          color={"vintageRibbon"}
          variant={"size12Normal"}
          content={"or login using below options"}
        />
      </div>
      <SocialLogin setModalType={setModalType} isLogin={true} />
    </div>
  );
};

export default Login;
