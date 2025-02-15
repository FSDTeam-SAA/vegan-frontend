import React from "react";
import BookingManagementHeader from "./_components/BookingManagementHeader";
import BooklingManagementcontainerTab from "./_components/BooklingManagementcontainerTab";

export default function page() {
  return (
    <div>
      <BookingManagementHeader/>
      <BooklingManagementcontainerTab/>
    </div>
  );
}
