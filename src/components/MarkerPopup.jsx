import React from "react";
import { Popup } from "react-leaflet";

const MarkerPopup = (props) => {
  const { name } = props.data;

  return (
    <Popup>
      <div data-test="makerPopup" className="poup-text">
        {name}
      </div>
    </Popup>
  );
};

export default MarkerPopup;
