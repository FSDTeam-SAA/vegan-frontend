"use client";

import { useState } from "react";
import { Header } from "./header";
import { EventDialog } from "./event-dialog";
import type { EventFormData } from "./event-dialog";
import EventsManagement from "./events";

export default function GoLive() {
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleSubmit = (data: EventFormData) => {
    console.log("Submitted event data:", data);
    setDialogOpen(false);
  };

  return (
    <div className="min-h-screen">
      <Header onCreateClick={() => setDialogOpen(true)} />
      <EventDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        onSubmit={handleSubmit}
      />
      <EventsManagement />
    </div>
  );
}
