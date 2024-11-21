import React from "react";
import Typography from "./typography";
import closeIcon from "../../assets/svg/close.svg";

const Modal = ({ title, onClose, children }) => {
  return (
    <div className="fixed inset-0 flex z-20 items-center justify-center bg-black bg-opacity-50">
      <div className="max-w-[600px] w-full mx-auto max-h-[90vh] rounded-[20px] overflow-auto no-scrollbar">
        <div className="bg-blackRussian rounded-[20px] p-8 text-white relative">
          <div className="flex justify-between items-center absolute top-5 right-5">
            {/* <Typography
              color={"white"}
              content={title}
              variant={"size20Semibold"}
            /> */}
            <div/>
            <button onClick={onClose}>
              <img src={closeIcon} alt="Close" />
            </button>
          </div>

          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
