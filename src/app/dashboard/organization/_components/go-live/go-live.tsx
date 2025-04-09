import VideoTutorials from "../shared/VideoTutorials";
import EventsMangement from "./events";
import { Header } from "./header";
interface Props {
  email: string;
  userId: string;
}

export default function GoLive({ email, userId }: Props) {
  return (
    <div className="space-y-10">
      <Header email={email} userId={userId} />
      <EventsMangement />
      <VideoTutorials />
    </div>
  );
}
