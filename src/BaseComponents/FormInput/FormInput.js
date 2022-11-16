import React from "react";
import "./FormInput.css";

function FormInput({ name, required, type, id, placeholder }) {
  return (
    <>
      <input
        className="form_input"
        name={name}
        required={required}
        type={type}
        id={id}
        placeholder={placeholder}
      />
    </>
  );
}

export default FormInput;
