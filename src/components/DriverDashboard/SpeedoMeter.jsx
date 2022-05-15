import React from "react";
import ReactSpeedometer from "react-d3-speedometer";
/*Counter End*/
const SpeedoMeter = ({ speed }) => {
  return (
    <>
      <ReactSpeedometer
        maxValue={500}
        value={speed}
        needleColor="white"
        startColor="green"
        segments={10}
        endColor="red"
        textColor="white"
        height={200}
      />
    </>
  );
};

export default SpeedoMeter;
