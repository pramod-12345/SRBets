import React from "react";
import Typography from "./typography";

const ModalDetailItem = ({label, value}) => {
  return (
    <div class="flex justify-between">
      <Typography
        variant={"size14Semibold"}
        color={"white"}
        content={label}
      />
      <Typography
        variant={"size14Medium"}
        color={"white"}
        content={value}
      />
    </div>
  );
};

export default ModalDetailItem;
