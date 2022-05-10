import React from "react";
import Circle from "./Circle";
const CircleWidget = () => {
  return (
    <>
      <div className=" flex gap-6 bg-white rounded-2xl h-36 w-64  m-1 pr-10 shadow-md">
        <div className="flex-col w-[50%]">
          <Circle />
          <div className="text-[#736EAA] w-[100%] text-center font-semibold">
            Total buses:
          </div>
        </div>
        <div className="flex flex-col gap-y-5 w-[50%] mt-8">
          <div className="flex gap-2 w-[100%]  ">
            <div className="bg-[#3A7AFC] w-3 h-3"></div>
            <div className="text-sm text-[#736EAA] font-semibold">
              Old buses
            </div>
          </div>
          <div className="flex gap-2 w-[100%]">
            <div className="bg-[#5033C0] w-3 h-3"></div>
            <div className="text-sm text-[#736EAA] font-semibold">
              New buses
            </div>
          </div>
          <div className="text-xl text-[#736EAA] font-semibold">120</div>
        </div>
      </div>
    </>
  );
};

export default CircleWidget;
