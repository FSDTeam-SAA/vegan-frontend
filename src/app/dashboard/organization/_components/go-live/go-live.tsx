import VideoTutorials from "../shared/VideoTutorials";
import EventsMangement from "./events";
import { Header } from "./header";

export default function GoLive() {
  return (
    <div className="space-y-10">
      <Header />
      <EventsMangement />
      <VideoTutorials />
    </div>
  );
}
