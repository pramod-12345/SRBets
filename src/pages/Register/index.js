import React, { useState } from "react";
import Typography from "../../components/common/typography";
import Input from "../../components/common/input";
import CommonButton from "../../components/common/button";
import { loginIcons } from "../../data";

const Register = ({setModalType}) => {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <div>
      <Typography
        color={"white"}
        variant={"size20Bold"}
        content={"Register new account"}
      />
      <div className="pt-7 flex flex-col gap-6">
        <Input setValue={setEmail} value={email} label={"Email *"} />
        <Input setValue={setUserName} value={userName} label={"Username *"} />
        <Input setValue={setPassword} value={password} label={"Password *"} />
        <Input setValue={setPhone} value={phone} label={"Phone number (optional)"} />
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
      <div className="flex justify-center items-center gap-4 mt-4">
        {loginIcons?.map((i) => (
          <div className="bg-darkByzantineBlue rounded-xl p-3.5 cursor-pointer">
            <img src={i?.icon} alt="" className="w-7 h-7" />
          </div>
        ))}
      </div>
      <div className="mt-5 flex items-center justify-center gap-2 text-center">
        <Typography color={"white"} content={"Already have ac account?"} />
        <div className="cursor-pointer" onClick={() => setModalType("login")}>
          <Typography color={"chinesePurple"} content={"Login here"} />
        </div>
      </div>
    </div>
  );
};

export default Register;
