import React from "react";
import Typography from "./typography";
import { useDispatch } from "react-redux";
import { setModalType } from "../../redux/reducers/authSlice";

const Input = ({
  name,
  value,
  onChange,
  onBlur,
  label,
  isForgot,
  placeholder,
  isAmount,
  isAddAcount,
  error,
  touched,
}) => {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col gap-4 grow">
      {/* Label, Forgot Password, and Add Account */}
      {(label || isForgot || isAddAcount) && (
        <div className="flex items-center justify-between">
          {label && (
            <Typography
              color={"vintageRibbon"}
              variant={"size14Medium"}
              content={label}
            />
          )}
          {isForgot && (
            <div
              className="cursor-pointer"
              onClick={() => dispatch(setModalType("forgotPassword"))}
            >
              <Typography
                color={"primary"}
                variant={"size14Medium"}
                content={"Forgot password?"}
              />
            </div>
          )}
          {isAddAcount && (
            <div
              className="cursor-pointer"
              onClick={() => dispatch(setModalType("forgotPassword"))}
            >
              <Typography
                color={"chinesePurple"}
                variant={"size14Medium"}
                content={"Forgot password?"}
              />
            </div>
          )}
        </div>
      )}

      {/* Input Field */}
      <div className="flex flex-col">
        <div className="flex items-center px-2 py-3 bg-darkByzantineBlue rounded-xl">
          {isAmount && (
            <div className="mr-3">
              <Typography
                content={"₹"}
                color={"white"}
                variant={"size14Semibold"}
              />
            </div>
          )}
          <input
            name={name}
            placeholder={placeholder}
            className="outline-none w-full text-white px-2 py-2 font-semibold text-sm bg-darkByzantineBlue "
            value={value}
            onChange={onChange}
            onBlur={onBlur} // Handle blur for Formik
          />
        </div>

        {/* Error Message */}
        {touched && error && (
          <div className="pl-3">
            <Typography
              color="red"
              variant="size12NormalError"
              content={error}
              className="mt-2"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Input;
