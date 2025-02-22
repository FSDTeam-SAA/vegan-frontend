import dynamic from "next/dynamic";
import MerchantTutiorials from "../../go-live/MerchantTutorials";
import { Header } from "./header";
const EventsMangement = dynamic(() => import("./events"), { ssr: false });

export default function GoLive() {
  return (
    <div className="space-y-10">
      <Header />
      <EventsMangement />
      <MerchantTutiorials />
    </div>
  );
}
