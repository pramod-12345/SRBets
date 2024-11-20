import React from "react";
import Typography from "./typography";
import closeIcon from "../../assets/svg/close.svg";

const Modal = ({ title, onClose, children }) => {
  return (
    <div className="fixed inset-0 flex z-20 items-center justify-center bg-black bg-opacity-50">
      <div className="w-[600px] mx-auto">
        <div className="bg-blackRussian rounded-[20px] p-8 text-white">
          <div className="flex justify-between items-center">
            <Typography
              color={"white"}
              content={title}
              variant={"size20Semibold"}
            />
            <button onClick={onClose}>
              <img src={closeIcon} alt="Close" />
            </button>
          </div>

          <div className="">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
