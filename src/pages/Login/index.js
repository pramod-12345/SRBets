import React, { useState } from "react";
import Typography from "../../components/common/typography";
import Input from "../../components/common/input";
import CommonButton from "../../components/common/button";
import { loginIcons } from "../../data";

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
        />
      </div>
      <div className="pt-6">
        <Input
          setValue={setPassword}
          value={password}
          label={"Password *"}
          isForgot={true}
          setModalType={setModalType}
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
      <div className="flex justify-center items-center gap-4 mt-4">
        {loginIcons?.map((i) => (
          <div className="bg-darkByzantineBlue rounded-xl p-3.5 cursor-pointer">
            <img src={i?.icon} alt="" className="w-7 h-7" />
          </div>
        ))}
      </div>
      <div className="mt-5 flex items-center justify-center gap-2 text-center">
        <Typography color={"white"} content={"Don’t have ac account?"} />
        <div className="cursor-pointer" onClick={() => setModalType("register")}>
          <Typography color={"chinesePurple"} content={"Create New"} />
        </div>
      </div>
    </div>
  );
};

export default Login;
