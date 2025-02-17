import React from "react";
import VideoTutorials from "./_components/VideoTutorials";
import DashboardPageHeader from "../../_components/dash-page-header";
import SupportForm from "./_components/SupportForm";

const page = () => {
  return (
    <div>
      <DashboardPageHeader
        title="Support & Help Center"
        desc="Find everything you need to succeed on our platform."
      />
      <SupportForm />
      <VideoTutorials />
    </div>
  );
};

export default page;
