import React, { useEffect } from "react";
import CircleWidget from "./CircleWidget";
import TotalWidget from "./TotalWidget";
import Analytics from "./Analytics";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmployees } from "../../redux/actions/employeesAction";
import { fetchBuses } from "../../redux/actions/busesAction";

const DashboardContainer = () => {
  // Use effect function  to render operators
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchEmployees());
    dispatch(fetchBuses());
  }, []);
  const { employees } = useSelector((state) => state.employeesReducer);
  const { buses } = useSelector((state) => state.busesReducer);
  const operators = employees.filter((operator) => operator.roleId === 2);
  const drivers = employees.filter((driver) => driver.roleId === 3);
  const companies = buses.map((bus) => bus.brand);

  const totalOperators = operators.length;
  const totalDrivers = drivers.length;
  const totalBuses = buses.length;
  const totalCompanies = companies.length;

  return (
    <div className="flex flex-col lg:mt-16 mt-10">
      {/* Small cards */}
      <div className="lg:flex flex-wrap mx-auto justify-center lg:space-x-8 lg:items-center lg:space-y-2 space-y-6">
        <CircleWidget total={totalBuses} />
        <div className="flex lg:space-x-8">
          <TotalWidget title="Total Operators" total={totalOperators} />
          <TotalWidget title="Total Drivers" total={totalDrivers} />
        </div>
        <div className="flex lg:space-x-8">
          <TotalWidget title="Total Companies" total={totalCompanies} />
          <TotalWidget title="Total Routes" total={10} />
        </div>
      </div>
      {/* Map and recent activities */}
      <div className="flex lg:flex-row lg:justify-center flex-col-reverse mt-10 lg:space-x-[70px] space-x-0 lg:mx-auto">
        <div className="bg-white lg:w-auto w-[350px] m-auto lg:overflow-hidden overflow-x-scroll shadow-xl pt-2 rounded-xl">
          <Analytics />
        </div>
        <div className="lg:w-[300px] mx-auto bg-white rounded-xl shadow-xl lg:mt-0 lg:mb-0 mb-10">
          <div className="p-8">
            <h1 className="text-center font-bold">Recent Activities</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardContainer;
