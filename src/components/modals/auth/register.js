import React, { useState } from "react";
import Typography from "../../common/typography";
import Input from "../../common/input";
import CommonButton from "../../common/button";
import { loginIcons } from "../../../data";
import SocialLogin from "./socialLogin";

const Register = ({setModalType}) => {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <div>
        <div className="space-x-4">
      <Typography
        color={"white"}
        variant={"size20Bold"}
        content={"Register new account"}
      />
      <Typography
        color={"vintageRibbon"}
        variant={"size16Medium"}
        content={"Step 1 of 2"}
      />
      </div>
      <div className="pt-7 flex flex-col gap-6">
        <Input setValue={setEmail} value={email} label={"Email *"} placeholder={'Enter email'}/>
        <Input setValue={setUserName} value={userName} label={"Username *"} placeholder={'Enter username'}/>
        <Input setValue={setPassword} value={password} label={"Password *"} placeholder={'Enter passowrd'}/>
        <Input setValue={setPhone} value={phone} label={"Phone number (optional)"} placeholder={'Enter phone number'}/>
      </div>

      <div className="w-full flex justify-center items-center mt-9">
        <CommonButton type="viewBetsBtn" label={"Continue"} />
      </div>
      <div className="text-center mt-8">
        <Typography
          color={"vintageRibbon"}
          variant={"size12Normal"}
          content={"or login using below options"}
        />
      </div>
      <SocialLogin setModalType={setModalType}/>
      
    </div>
  );
};

export default Register;
