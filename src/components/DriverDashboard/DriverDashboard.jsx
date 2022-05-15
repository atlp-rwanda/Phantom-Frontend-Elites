import React, { useState, useRef } from "react";
import DriverMap from "./DriverMap";
import SpeedoMeter from "./SpeedoMeter";
import UIfx from "uifx";
// import  "../../Assets/sounds/accelerate.wav"
// import  "../../Assets/sounds/brake.wav"
/*Counter End*/
const DriverDashboard = () => {
  let [value, setValue] = useState(0);
  const timer = useRef(null);

  // const accelerationSound = new UIfx(
  //   accelerate,
  //   {
  //     volume: 0.4, // number between 0.0 ~ 1.0
  //     throttleMs: 100
  //   }
  // )
  // const brakeSound = new UIfx(
  //   brake,
  //   {
  //     volume: 0.4, // number between 0.0 ~ 1.0
  //     throttleMs: 100
  //   }
  // )
  const increment = () => {
    timeoutClear();
    // accelerationSound.play()
    timer.current = setInterval(() => setValue((prev) => prev + 1), 90);
  };
  function timeoutClear() {
    clearInterval(timer.current);
  }
  const decrement = () => {
    timeoutClear();
    // brakeSound.play()
    timer.current = setInterval(() => setValue((value) => value - 1), 200);
  };
  const stop = () => {
    timeoutClear();
    timer.current = setInterval(() => setValue((value) => (value = 0)), 200);
  };

  return (
    <div className="flex gap-3">
      <div className="flex flex-col w-2/5 p-5 bg-[#3C3868] text-center">
        <SpeedoMeter speed={value} />
        <div className="flex gap-3 w-fit p-4">
          <button
            onMouseOver={increment}
            onMouseLeave={timeoutClear}
            className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full"
          >
            Accelerate
          </button>
          <button
            onMouseOver={decrement}
            onMouseLeave={timeoutClear}
            className="bg-orange-700 hover:bg-orange-900 text-white font-bold py-2 px-4 rounded-full"
          >
            Brake
          </button>
          <button
            onMouseOver={stop}
            className="bg-red-700 hover:bg-red-900 text-white font-bold py-2 px-4 rounded-full"
          >
            Stop
          </button>
        </div>
      </div>
      <div className="w-3/5">
        <DriverMap />
      </div>
    </div>
  );
};

export default DriverDashboard;
