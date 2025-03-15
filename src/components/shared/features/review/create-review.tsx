import { Button } from "@/components/ui/button";
import VeganModal from "@/components/ui/vegan-modal";
import { useState } from "react";

interface Props {
  reviewUserId: string;
  loggedinUserId: string;
}

const CreateReview = ({}: Props) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Button variant="outline" onClick={() => setOpen(true)}>
        Send Feedback
      </Button>

      <VeganModal open={open} onOpenChange={setOpen} className="">
        fdsf
      </VeganModal>
    </div>
  );
};

export default CreateReview;
