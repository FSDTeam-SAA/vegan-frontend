import dynamic from "next/dynamic";
import MerchantTutiorials from "../../go-live/MerchantTutorials";
import { Header } from "./header";
const EventsMangement = dynamic(() => import("./events"), { ssr: false });

interface Props {
  userId: string;
}

export default function GoLive({ userId }: Props) {
  return (
    <div className="space-y-10">
      <Header userId={userId} />
      <EventsMangement />
      <MerchantTutiorials />
    </div>
  );
}
