import React from "react";
import GoLive from "../_components/go-live/Go-live";
import VideoTutorials from "../../professional/help-center-support/_components/VideoTutorials";
export default function page() {
  return (
    <div>
      <GoLive />
      <div className="mt-[26px]">
        <VideoTutorials />
      </div>
    </div>
  );
}
