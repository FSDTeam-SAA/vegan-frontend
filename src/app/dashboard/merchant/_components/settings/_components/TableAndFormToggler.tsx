import React from "react";
import StoreContainer from "./StoreContainer";
import StoreFilter from "./StoreFilter";

const TableAndFormToggler = () => {
  return (
    <div className="space-y-[30px]">
      <StoreFilter />
      <StoreContainer />
    </div>
  );
};

export default TableAndFormToggler;
