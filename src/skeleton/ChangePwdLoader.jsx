import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

function ChangePwdLoader() {
  const color = "white";
  return (
    <div className="sweet-loading flex justify-center">
      <ClipLoader color={color} size={23} />
    </div>
  );
}

export default ChangePwdLoader;
