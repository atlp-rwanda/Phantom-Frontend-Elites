import React from "react";
import PropTypes from "prop-types";
import Circle from "./Circle";
const CircleWidget = ({ total }) => {
  return (
    <>
      <div className=" flex gap-6 bg-white rounded-2xl h-36 lg:w-64 w-[300px] shadow-md">
        <div className="flex-col w-[50%]">
          <Circle />
          <div className="text-[#736EAA] w-[100%] text-center font-semibold">
            Total buses:
          </div>
        </div>
        <div className="flex flex-col gap-y-5 w-[50%] py-6">
          <div className="flex items-center gap-2 w-[100%]">
            <div className="bg-[#3A7AFC] w-3 h-3"></div>
            <div className="text-sm text-[#736EAA] font-semibold">Active</div>
          </div>
          <div className="flex items-center gap-2 w-[100%]">
            <div className="bg-[#5033C0] w-3 h-3"></div>
            <div className="text-sm text-[#736EAA] font-semibold">Inactive</div>
          </div>
          <div className="text-xl text-[#736EAA] font-semibold mt-2">
            {total}
          </div>
        </div>
      </div>
    </>
  );
};

CircleWidget.propTypes = {
  total: PropTypes.number.isRequired,
};

export default CircleWidget;
