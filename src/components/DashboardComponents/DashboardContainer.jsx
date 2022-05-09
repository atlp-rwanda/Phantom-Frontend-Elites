import React from "react";
import CircleWidget from "./CircleWidget";
import TotalWidget from "./TotalWidget";
import Analytics from "./Analytics";

const DashboardContainer = () => {
  return (
    <>
      <div className=" flex-col bg-[#F7F8FC] mt-11 mx-3 px-3">
        <div className="flex justify-between ">
          <CircleWidget />
          <TotalWidget title="Total Drivers" amount={120} />
          <TotalWidget title="Total Operators" amount={4} />
          <TotalWidget title="Total Routes" amount={80} />
          <TotalWidget title="Total Bus Stops" amount={149} />
        </div>
        <div className="flex ">
          <div className="flex flex-col  mt-4">
            <div className="font-semibold p-2 text-lg text-[#3C3868]">
              Analytics
            </div>
            <div className="flex gap-4 ">
              <div className="bg-white rounded-2xl shadow-md py-2">
                <Analytics />
              </div>
              <div className="bg-white rounded-2xl shadow-md py-2 ">
                <div className="w-[365px]">
                  <div className="pl-4 pt-2 font-semibold text-[#3C3868] ">
                    Recent activities
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default DashboardContainer;
