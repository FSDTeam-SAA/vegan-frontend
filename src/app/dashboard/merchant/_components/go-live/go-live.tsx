import dynamic from "next/dynamic";
import MerchantTutiorials from "../../go-live/MerchantTutorials";
const EventsMangement = dynamic(() => import("./events"), { ssr: false });

export default function GoLive() {
  return (
    <div>
      <EventsMangement />
      <MerchantTutiorials />
    </div>
  );
}
