import React from "react";
import { useFormik } from "formik";
import {
  Typography,
  Input,
  CommonButton,
  Seperator
} from "components"
import SocialLogin from "./socialLogin";
import { closeIcon, mbLoginBanner } from "assets";
import { toggleModal } from "../../../redux/reducers/authSlice";
import { loginFunc } from 'services'
import { useAxios } from "hooks"
import { loginValidation } from "helper/helper.validator";
import { useDispatch } from "react-redux";

const Login = ({ setModalType }) => {
  const dispatch = useDispatch();
  const { makeRequest } = useAxios();

  // Close modal function
  const closeModal = () => {
    dispatch(toggleModal(false));
  };

  // Formik logic
  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },
    validationSchema: loginValidation,
    onSubmit: (values) => {
      const payload = {
        email: values.userName,
        password: values.password
      }
      loginFunc(makeRequest, payload, closeModal)
    },
  });

  return (
    <div>
      <div className="relative md:hidden bg-blackRussian">
        <div className=" flex items-center px-4 pt-3 gap-4 ">
          <img
            src={closeIcon}
            alt="Back"
            onClick={closeModal}
            className="cursor-pointer z-10 top-4 left-4"
          />
          {/* <img className="absolute top-0 w-full max-h-[297px]" src={mbLoginBanner}/> */}
          <Typography
            color={"white"}
            variant={"size20Bold"}
            content={"Login to SR bets"}
          />
        </div>
        {/* <Seperator /> */}
      </div>
      <div className="hidden md:block">
        <Typography
          color={"white"}
          variant={"size20Bold"}
          content={"Login to SR bets"}
        />
      </div>
      <div className="p-4 md:p-0">
        <form onSubmit={formik.handleSubmit}>
          <div className="md:pt-6">
            <Input
              name="userName"
              value={formik.values.userName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              label="Email/Username *"
              placeholder="Enter email/username"
              error={formik.errors.userName}
              touched={formik.touched.userName}
            />
          </div>
          <div className="pt-6">
            <Input
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              label="Password *"
              isForgot={true}
              placeholder="Enter password"
              error={formik.errors.password}
              touched={formik.touched.password}
            />
          </div>
          <div className="w-full flex justify-center items-center mt-9">
            <CommonButton
              type="viewBetsBtn"
              label={"Login"}
              onClick={formik.handleSubmit}
              btnType={"submit"}
            />
          </div>
        </form>
        <div className="text-center mt-8">
          <Typography
            color={"vintageRibbon"}
            variant={"size12Normal"}
            content={"or login using below options"}
          />
        </div>
        <SocialLogin setModalType={setModalType} isLogin={true} />
      </div>
    </div>
  );
};

export default Login;
