import React from "react";
import { useFormik } from "formik";
import {
  Typography,
  Input,
  CommonButton,
  Seperator
} from "components"
import { backIcon } from "assets";
import SocialLogin from "./socialLogin";
import { useDispatch } from "react-redux";
import { useAxios } from "hooks"
import { registerFunc } from "services";
import { registerValidation } from "helper/helper.validator";
import { setRegisterPayload, toggleModal } from "../../../redux/reducers/authSlice";

const Register = ({ setModalType }) => {
  const dispatch = useDispatch();
  const { makeRequest} = useAxios();

  const closeModal = () => {
    dispatch(toggleModal(false));
  };

  // Formik setup
  const formik = useFormik({
    initialValues: {
      email: "",
      userName: "",
      password: "",
      phone: "",
    },
    validationSchema: registerValidation,
    onSubmit: (values) => {
      // Handle registration logic here
      const payload ={
        email : values.email,
        password : values.password,
        phoneNumber: values.phone,
        twoFactorEnabled: false
      }
      registerFunc(makeRequest, payload, closeModal);
      // dispatch(setRegisterPayload(payload))
      // dispatch(setModalType('registerTerms'))
    },
  });

  return (
    <div>
      <div className="md:hidden bg-blackRussian">
        <div className="flex items-center justify-between px-4 gap-2 py-5">
         <div className="flex items-center gap-2">
         <img
            src={backIcon}
            alt="Back"
            onClick={() => dispatch(setModalType("login"))}
            className="cursor-pointer"
          />  
          <Typography
            color={"white"}
            variant={"size20Bold"}
            content={"Register new account"}
          />
         </div>
         <div className="hidden md:block">
          <Typography
            color={"vintageRibbon"}
            variant={"size16Medium"}
            content={"Step 1 of 2"}
          />
          </div>
         <div className="md:hidden block">
          <Typography
            color={"vintageRibbon"}
            variant={"size16Medium"}
            content={"1 of 2"}
          />
          </div>
        </div>
        <Seperator />
      </div>
      <div className="hidden md:block">
        <div className="flex items-center gap-2 py-5">
          <Typography
            color={"white"}
            variant={"size20Bold"}
            content={"Register new account"}
          />
          <Typography
            color={"vintageRibbon"}
            variant={"size16Medium"}
            content={"Step 1 of 2"}
          />
        </div>
      </div>
      <div className="space-x-4"></div>
      <form onSubmit={formik.handleSubmit}>
        <div className="pt-7 px-4 flex flex-col gap-6">
          <Input
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            label={"Email *"}
            placeholder={"Enter email"}
            error={formik.errors.email}
            touched={formik.touched.email}
          />
          <Input
            name="userName"
            value={formik.values.userName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            label={"Username *"}
            placeholder={"Enter username"}
            // error={formik.errors.userName}
            // touched={formik.touched.userName}
          />
          <Input
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            label={"Password *"}
            placeholder={"Enter password"}
            error={formik.errors.password}
            touched={formik.touched.password}
          />
          <Input
            name="phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            label={"Phone number (optional)"}
            placeholder={"Enter phone number"}
            error={formik.errors.phone}
            touched={formik.touched.phone}
          />
        </div>

        <div className="w-full px-4 md:px-0 flex justify-center items-center mt-9">
          <CommonButton btnType={'submit'} type="viewBetsBtn" label={"Continue"} onClick={formik.handleSubmit} />
        </div>
      </form>
      <div className="text-center mt-8">
        <Typography
          color={"vintageRibbon"}
          variant={"size12Normal"}
          content={"or login using below options"}
        />
      </div>
      <SocialLogin setModalType={setModalType} />
    </div>
  );
};

export default Register;
