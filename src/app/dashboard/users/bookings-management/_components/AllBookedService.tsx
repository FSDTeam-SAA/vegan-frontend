import React from "react";
import AllBookedContainer from "./AllBookedContainer";
import AllBookedSearchBar from "./AllBookedSearchBar";

const AllBookedService = () => {
  return (
    <div className="">
      <div>
        <AllBookedSearchBar />
      </div>
      <AllBookedContainer />
    </div>
  );
};

export default AllBookedService;
