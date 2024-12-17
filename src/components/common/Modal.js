import React, { useEffect } from "react";
import { closeIcon } from "assets";
import { useDispatch } from "react-redux";
import { setIsSearchFocused } from "../../redux/reducers/dashboard";

const Modal = ({ onClose, children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setIsSearchFocused(false));
  }, []);

  return (
    <div className="fixed inset-0 flex z-20 items-center justify-center bg-black bg-opacity-50">
      <div className="max-w-[600px] w-full mx-auto my-auto md:h-auto h-screen md:rounded-[20px] overflow-auto no-scrollbar">
        <div className=" max-w-[600px] w-full mx-auto md:max-h-[90vh] bg-blackRussian md:rounded-[20px] md:p-8 pb-4 text-white relative h-screen md:h-auto overflow-auto">
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
