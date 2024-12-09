import React from "react";
import { closeIcon} from "assets"


const Modal = ({ onClose, children }) => {
  return (
    <div className="fixed inset-0 flex z-20 items-center justify-center bg-black bg-opacity-50">
      <div className="max-w-[600px] w-full mx-auto md:max-h-[90vh] md:h-auto h-screen rounded-[20px] overflow-auto no-scrollbar">
        <div className="bg-blackRussian md:rounded-[20px] md:p-8 pb-4 text-white relative h-screen md:h-auto overflow-auto">
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
