import React from "react";
import ExitImg from "../../Assets/Images/ExitImgs/exit.png";
function exit() {
  return (
    <div className="flex items-center justify-center min-h-[100vh]">
      <img className="" src={ExitImg} alt="Exit img" width="350" />
    </div>
  );
}

export default exit;
