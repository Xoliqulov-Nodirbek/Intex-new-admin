import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";

function Input(props) {
  const { label, name, ...rest } = props;

  return (
    <div className={`flex flex-col w-[346px]`}>
      <label htmlFor={name} className="text-addProductColor mb-3">
        {label}
      </label>
      <Field
        id={name}
        name={name}
        autoComplete="off"
        {...rest}
        className="w-full p-3 rounded-lg outline-none border border-gray-200 focus-visible:border-gray-300 text-base"
      />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default Input;
