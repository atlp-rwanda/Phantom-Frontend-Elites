import React from "react";
import PropTypes from "prop-types";

const Actionbutton = ({ action, btn }) => {
  return (
    <>
      <button className={btn}>{action}</button>
    </>
  );
};

Actionbutton.propTypes = {
  action: PropTypes.string.isRequired,
  btn: PropTypes.string.isRequired,
};

export default Actionbutton;
