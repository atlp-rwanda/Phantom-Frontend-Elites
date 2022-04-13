/* eslint-disable react/prop-types */
import React from "react";

const Table = ({ tableTitle }) => {
  return (
    <>
      <div className="bg-gray-100 rounded shadow-sm mx-8 h-[400px]">
        <h1 className="text-center text-xl text-primary font-bold py-2">
          {tableTitle}
        </h1>
        <div className="text-left mx-6 text-md font-medium leading-6 tracking-wider">
          <table className="w-full">
            <thead className="bg-primary">
              <tr>
                <th className="text-white px-2">FirstName</th>
                <th className="text-white px-2">LastName</th>
                <th className="text-white px-2">Email</th>
                <th className="text-white px-2">Gender</th>
                <th className="text-white px-2">Role</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-primary px-2 ">John</td>
                <td className="text-primary px-2">Niyontwali</td>
                <td className="text-primary px-2">nijohn0006@gmail.com</td>
                <td className="text-primary px-2">Male</td>
                <td className="text-primary px-2">Operator</td>
              </tr>
              <tr>
                <td className="text-primary px-2 ">John</td>
                <td className="text-primary px-2">Niyontwali</td>
                <td className="text-primary px-2">nijohn0006@gmail.com</td>
                <td className="text-primary px-2">Male</td>
                <td className="text-primary px-2">Operator</td>
              </tr>
              <tr>
                <td className="text-primary px-2 ">John</td>
                <td className="text-primary px-2">Niyontwali</td>
                <td className="text-primary px-2">nijohn0006@gmail.com</td>
                <td className="text-primary px-2">Male</td>
                <td className="text-primary px-2">Operator</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div></div>
    </>
  );
};

export default Table;
