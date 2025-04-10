import dynamic from "next/dynamic";
import MerchantTutiorials from "../../go-live/MerchantTutorials";
import { Header } from "./header";
const EventsMangement = dynamic(() => import("./events"), { ssr: false });

interface Props {
  userId: string;
  email: string;
}

export default function GoLive({ userId, email }: Props) {
  return (
    <div className="space-y-10">
      <Header userId={userId} email={email} />
      <EventsMangement />
      <MerchantTutiorials />
    </div>
  );
}
