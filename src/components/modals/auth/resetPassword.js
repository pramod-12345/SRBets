import React from 'react'
import {
  Modal,
  Seperator,
  Typography
} from "components"
import { closeIcon, paymentDone } from 'assets'
import { toggleModal } from '../../../redux/reducers/authSlice';
import { useDispatch } from 'react-redux';

const ResetPassword = () => {
  const dispatch = useDispatch();
  const closeModal = () => {
    dispatch(toggleModal(false));
  };
  return (
  <>
    <div className="md:hidden bg-blackRussian">
        <div className="flex items-center px-4 gap-2 py-5">
          <img
            src={closeIcon}
            alt="Back"
            onClick={closeModal}
            className="cursor-pointer"
          />
          <Typography
            color={"white"}
            variant={"size20Bold"}
            content={"Forgot Password"}
          />
        </div>
        <Seperator />
      </div>
        <div className='flex flex-col items-center justify-center text-center w-full h-full'>
          
            <img src={paymentDone} alt='Payment Success'/>
            <Typography content={"Passsword reset email sent"} variant={"size20Bold"} color={"white"} />
            <Typography content={"We have sent an account recovery email to vijaybisht1706@gmail.com"} color={"vintageRibbon"} variant={"size14Medium"}/>
        </div>
        </>
  )
}

export default ResetPassword