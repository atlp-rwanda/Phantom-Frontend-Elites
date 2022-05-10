import React from "react";
import { useState } from "react";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

function Loader() {
  let [loading, setLoading] = useState(true);
  const color = "#4A90E2";
  return (
    <div className="sweet-loading flex justify-center mt-92 bg-white">
      <ClipLoader color={color} loading={loading} size={100} />
    </div>
  );
}

export default Loader;
