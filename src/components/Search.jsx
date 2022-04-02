import React from "react";

const Search = () => {
  return (
    <div className="flex justify-left mx-10 my-10">
      <div className="mb-3 xl:w-80">
        <input
          type="search"
          className="
            form-control
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
          "
          id="exampleSearch2"
          placeholder="Search Locations"
        />
      </div>
    </div>
  );
};

export default Search;
