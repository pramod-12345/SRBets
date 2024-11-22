import React, { useState } from "react";
import Typography from "../../components/common/typography";
import CommonButton from "../../components/common/button";
import Input from "../../components/common/input";

const AuthoriseRegistration = () => {
  const [displayName, setdisplayName] = useState("");
  return (
    <div>
      <Typography
        color={"white"}
        variant={"size20Bold"}
        content={"Authorise registration"}
      />
      <div className="pt-8">
        <Input setValue={setdisplayName} value={displayName} label={"Pleas choose display name *"} />
      </div>
      <div className="w-full flex justify-center items-center pt-8">
        <CommonButton type="viewBetsBtn" label={"Continue"} />
      </div>
    </div>
  );
};

export default AuthoriseRegistration;
