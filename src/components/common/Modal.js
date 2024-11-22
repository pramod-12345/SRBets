import React from "react";
import closeIcon from "../../assets/svg/close.svg";
import backIcon from "../../assets/svg/back.svg";


const Modal = ({ onClose, children }) => {
  return (
    <div className="fixed inset-0 flex z-20 items-center justify-center bg-black bg-opacity-50">
      <div className="max-w-[600px] w-full mx-auto md:max-h-[90vh] md:h-auto h-screen rounded-[20px] overflow-auto no-scrollbar">
        <div className="bg-blackRussian md:rounded-[20px] p-4 md:p-8 text-white relative h-screen md:h-auto">
          <div className="flex hidden md:block justify-between items-center absolute top-5 right-5">
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
