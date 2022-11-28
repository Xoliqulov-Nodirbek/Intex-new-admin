import React from "react";
import "./MButton.css";

function MButton({ BType, type, className, children }) {
  return (
    <button className={`btn ${BType} ${className}  `} type={type}>
      {children}
    </button>
  );
}

export default MButton;
