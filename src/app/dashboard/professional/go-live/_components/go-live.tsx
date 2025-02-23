import dynamic from "next/dynamic";
import { Header } from "./header";
const EventsMangement = dynamic(() => import("./events"), { ssr: false });

export default function GoLive() {
  return (
    <div>
      <Header />
      <EventsMangement />
    </div>
  );
}
