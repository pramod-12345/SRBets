import React from 'react'
import {
  Modal,
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
        <div className='flex flex-col items-center justify-center text-center w-full h-full'>
          <div className="flex block md:hidden justify-between items-center absolute top-5 right-5">
            <button onClick={closeModal}>
              <img src={closeIcon} alt="Close" />
            </button>
          </div>
            <img src={paymentDone} alt='Payment Success'/>
            <Typography content={"Passsword reset email sent"} variant={"size20Bold"} color={"white"} />
            <Typography content={"We have sent an account recovery email to vijaybisht1706@gmail.com"} color={"vintageRibbon"} variant={"size14Medium"}/>
        </div>
  )
}

export default ResetPassword