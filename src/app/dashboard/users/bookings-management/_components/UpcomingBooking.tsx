import React from "react";
import BookingManagementContainer from "./BookingManagementContainer";
import SearchBar from "./SearchBar";

const UpcomingBooking = () => {
  return (
    <div>
      <div className="pt-10">
        <SearchBar />
      </div>
      <BookingManagementContainer />
    </div>
  );
};

export default UpcomingBooking;
