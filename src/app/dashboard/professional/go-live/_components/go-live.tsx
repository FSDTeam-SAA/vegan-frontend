import dynamic from "next/dynamic";
import { Header } from "./header";
const EventsMangement = dynamic(() => import("./events"), { ssr: false });

interface Props {
  userId: string;
  email: string;
}

export default function GoLive({ userId, email }: Props) {
  return (
    <div>
      <Header userId={userId} email={email} />
      <EventsMangement />
    </div>
  );
}
